#!/usr/bin/env node
'use strict';

// iKant runner — deterministic fetch + verify + trace reference implementation.
//
// Mirrors the canonical metaprompt (Operation/iKANT_PROMPT.md) and the corpus
// acquisition rule in Operation/AGENTS.md §4.1: resolve a corpus document by
// `id`/`role` from Operation/MANIFEST.json, prefer its `text_url` sidecar and
// fall back to `raw_url`, verify the fetched bytes against the manifest sha256,
// and emit a traced result or a verbatim DUE-CORPUS-FETCH report. It adds no new
// policy; on any conflict AGENTS.md and governance/DecisionLog.md win.
//
// Dependency-free: uses only the Node.js standard library so the same module is
// runnable in CI, in a container (Dockerfile), and from the integration tests
// without an npm install step. Network access is opt-in (`--online`); the
// default offline mode resolves the manifest URLs to local repository files so
// the flow is fully deterministic and testable.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const https = require('node:https');
const http = require('node:http');

const RAW_PREFIX_MARKER = '/main/';

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

// Repository root = two levels up from this file (Operation/runner/app.js).
function defaultRepoRoot() {
  return path.resolve(__dirname, '..', '..');
}

function defaultManifestPath(repoRoot) {
  return path.join(repoRoot, 'Operation', 'MANIFEST.json');
}

function loadManifest(manifestPath) {
  const raw = fs.readFileSync(manifestPath, 'utf8');
  return JSON.parse(raw);
}

// Repository-relative path encoded in a canonical raw/text URL (everything after
// the `/main/` ref marker, percent-decoded). Returns null for non-canonical URLs.
function relPathFromUrl(url) {
  if (typeof url !== 'string') return null;
  const idx = url.indexOf(RAW_PREFIX_MARKER);
  if (idx === -1) return null;
  const encoded = url.slice(idx + RAW_PREFIX_MARKER.length);
  try {
    return decodeURIComponent(encoded);
  } catch (_err) {
    return null;
  }
}

// Resolve a single manifest entry by explicit id, or by role (first match).
// Throws a tagged error (surface = 'manifest') when nothing matches.
function resolveEntry(manifest, selector) {
  const entries = Array.isArray(manifest && manifest.pdfs) ? manifest.pdfs : [];
  let entry = null;
  if (selector && selector.id) {
    entry = entries.find((e) => e.id === selector.id) || null;
  } else if (selector && selector.role) {
    entry = entries.find((e) => e.role === selector.role) || null;
  } else {
    throw new Error('resolveEntry requires an { id } or { role } selector');
  }
  if (!entry) {
    const want = selector.id ? `id=${selector.id}` : `role=${selector.role}`;
    const err = new Error(`no manifest entry for ${want}`);
    err.surface = 'manifest';
    throw err;
  }
  return entry;
}

function readLocal(repoRoot, relPath) {
  return fs.readFileSync(path.join(repoRoot, relPath));
}

function fetchOnline(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    const req = client.get(url, (res) => {
      const status = res.statusCode || 0;
      if (status < 200 || status >= 300) {
        res.resume();
        reject(new Error(`HTTP ${status} for ${url}`));
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
  });
}

// Read one surface (text_url or raw_url) and verify its bytes against the
// expected manifest hash. Resolves { bytes, source_url, sha256 } on success;
// rejects with a tagged error (err.surface) on missing/mismatched bytes.
async function readSurface(entry, surface, options) {
  const isText = surface === 'text_url';
  const url = isText ? entry.text_url : entry.raw_url;
  const expected = isText ? entry.text_sha256 : entry.sha256;
  if (!url) {
    const err = new Error(`entry ${entry.id} has no ${surface}`);
    err.surface = surface;
    throw err;
  }

  let bytes;
  if (options.online) {
    bytes = await fetchOnline(url);
  } else {
    // Offline: resolve the canonical URL back to its repository file. For
    // text_url the file is the sidecar; for raw_url it is the PDF `path`.
    const rel = isText ? relPathFromUrl(url) : entry.path;
    if (!rel) {
      const err = new Error(`cannot resolve offline path for ${surface} of ${entry.id}`);
      err.surface = surface;
      throw err;
    }
    try {
      bytes = readLocal(options.repoRoot, rel);
    } catch (cause) {
      const err = new Error(`missing ${surface} file for ${entry.id}: ${rel}`);
      err.surface = surface;
      throw err;
    }
  }

  const got = sha256(bytes);
  if (expected && got !== expected) {
    const err = new Error(
      `${surface} sha256 mismatch for ${entry.id}: expected ${expected}, got ${got}`,
    );
    err.surface = surface;
    err.mismatch = true;
    throw err;
  }

  return { bytes, source_url: url, sha256: got };
}

function dueReport(entry, failedSurface) {
  return {
    id: entry ? entry.id : null,
    path: entry ? entry.path : null,
    raw_url: entry ? entry.raw_url : null,
    failed_surface: failedSurface,
  };
}

function formatDue(due) {
  return [
    'DUE-CORPUS-FETCH',
    `id: ${due.id == null ? '' : due.id}`,
    `path: ${due.path == null ? '' : due.path}`,
    `raw_url: ${due.raw_url == null ? '' : due.raw_url}`,
    `failed_surface: ${due.failed_surface}`,
  ].join('\n');
}

// Full fetch + verify + trace flow for one selector. Honours the preferred
// access order text_url -> raw_url; only after both surfaces fail (missing or
// hash mismatch) does it abort the claim with a DUE-CORPUS-FETCH report.
async function traceDocument(manifest, selector, options) {
  const now = (options && options.now) || (() => new Date().toISOString());
  const opts = {
    repoRoot: (options && options.repoRoot) || defaultRepoRoot(),
    online: !!(options && options.online),
    now,
  };

  let entry;
  try {
    entry = resolveEntry(manifest, selector);
  } catch (err) {
    return { ok: false, due: dueReport(null, err.surface || 'manifest'), error: err.message };
  }

  const reasoning = [`resolved id=${entry.id} role=${entry.role} from manifest`];
  let lastSurface = 'manifest';

  for (const surface of ['text_url', 'raw_url']) {
    if (!entry[surface]) continue;
    lastSurface = surface;
    try {
      const read = await readSurface(entry, surface, opts);
      reasoning.push(`fetched ${surface} (${read.bytes.length} bytes)`);
      reasoning.push('sha256 matched manifest -> validated');
      return {
        ok: true,
        trace: {
          id: entry.id,
          role: entry.role,
          source_url: read.source_url,
          surface,
          sha256: read.sha256,
          state: 'validated',
          reasoning: reasoning.slice(-3),
          timestamp: now(),
        },
      };
    } catch (err) {
      reasoning.push(`${surface} failed (${err.mismatch ? 'hash mismatch' : 'unavailable'})`);
      // fall through to the next surface in the preferred order
    }
  }

  return {
    ok: false,
    due: dueReport(entry, lastSurface),
    trace: {
      id: entry.id,
      role: entry.role,
      state: 'unknown',
      reasoning: reasoning.slice(-3),
      timestamp: now(),
    },
  };
}

function parseArgs(argv) {
  const opts = { online: false, all: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    switch (arg) {
      case '--id':
        opts.id = argv[++i];
        break;
      case '--role':
        opts.role = argv[++i];
        break;
      case '--manifest':
        opts.manifest = argv[++i];
        break;
      case '--repo-root':
        opts.repoRoot = argv[++i];
        break;
      case '--online':
        opts.online = true;
        break;
      case '--all':
        opts.all = true;
        break;
      case '-h':
      case '--help':
        opts.help = true;
        break;
      default:
        throw new Error(`unknown argument '${arg}'`);
    }
  }
  return opts;
}

const USAGE = `iKant runner — deterministic fetch + verify + trace for the ROA corpus.

Usage:
  node Operation/runner/app.js --id <document-id>     trace one document by id
  node Operation/runner/app.js --role <role>          trace first document with role
  node Operation/runner/app.js --all                  trace every manifest entry

Options:
  --manifest <path>   manifest file (default: Operation/MANIFEST.json)
  --repo-root <path>  repository root for offline resolution (default: auto)
  --online            fetch over HTTPS instead of resolving local files
  -h, --help          show this help

Exit code is 0 only when every requested document is validated; otherwise a
verbatim DUE-CORPUS-FETCH report is printed and the exit code is non-zero.`;

async function main(argv) {
  let opts;
  try {
    opts = parseArgs(argv);
  } catch (err) {
    process.stderr.write(`${err.message}\n\n${USAGE}\n`);
    return 2;
  }
  if (opts.help) {
    process.stdout.write(`${USAGE}\n`);
    return 0;
  }

  const repoRoot = opts.repoRoot ? path.resolve(opts.repoRoot) : defaultRepoRoot();
  const manifestPath = opts.manifest
    ? path.resolve(opts.manifest)
    : defaultManifestPath(repoRoot);
  const manifest = loadManifest(manifestPath);

  let selectors;
  if (opts.all) {
    selectors = (manifest.pdfs || []).map((e) => ({ id: e.id }));
  } else if (opts.id) {
    selectors = [{ id: opts.id }];
  } else if (opts.role) {
    selectors = [{ role: opts.role }];
  } else {
    process.stderr.write(`provide --id, --role or --all\n\n${USAGE}\n`);
    return 2;
  }

  let failures = 0;
  for (const selector of selectors) {
    const result = await traceDocument(manifest, selector, {
      repoRoot,
      online: opts.online,
    });
    if (result.ok) {
      process.stdout.write(`${JSON.stringify(result.trace)}\n`);
    } else {
      failures += 1;
      process.stdout.write(`${formatDue(result.due)}\n`);
    }
  }
  return failures === 0 ? 0 : 1;
}

if (require.main === module) {
  main(process.argv.slice(2))
    .then((code) => {
      process.exitCode = code;
    })
    .catch((err) => {
      process.stderr.write(`runner error: ${err && err.message ? err.message : err}\n`);
      process.exitCode = 1;
    });
}

module.exports = {
  sha256,
  loadManifest,
  relPathFromUrl,
  resolveEntry,
  readSurface,
  traceDocument,
  dueReport,
  formatDue,
  parseArgs,
  defaultRepoRoot,
  defaultManifestPath,
  main,
};
