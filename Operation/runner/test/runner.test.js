'use strict';

// Dependency-free integration tests for the iKant runner. Uses only the Node.js
// standard test runner (`node --test`) and assertions — no npm install. Run with:
//
//   node --test "Operation/runner/test/*.test.js"   # or: cd Operation/runner && npm test
//
// Covers the deterministic fetch + verify + trace flow against the real corpus
// (offline local resolution) plus the DUE-CORPUS-FETCH fixture (missing surfaces
// and unknown id), so each previously detected failure mode stays a regression.

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const runner = require('../app.js');

const REPO_ROOT = runner.defaultRepoRoot();
const MANIFEST = runner.loadManifest(runner.defaultManifestPath(REPO_ROOT));
const FIXED_NOW = () => '2026-06-21T00:00:00.000Z';

test('traces a real corpus document by id (text_url validated)', async () => {
  const result = await runner.traceDocument(
    MANIFEST,
    { id: 'roa-main-entrypoint' },
    { repoRoot: REPO_ROOT, now: FIXED_NOW },
  );
  assert.equal(result.ok, true);
  assert.equal(result.trace.id, 'roa-main-entrypoint');
  assert.equal(result.trace.surface, 'text_url');
  assert.equal(result.trace.state, 'validated');
  assert.equal(result.trace.timestamp, '2026-06-21T00:00:00.000Z');
  // The verified hash must equal the manifest's declared text_sha256.
  const entry = MANIFEST.pdfs.find((e) => e.id === 'roa-main-entrypoint');
  assert.equal(result.trace.sha256, entry.text_sha256);
  assert.ok(result.trace.reasoning.length <= 3);
});

test('resolves a document by role', async () => {
  const result = await runner.traceDocument(
    MANIFEST,
    { role: 'main_entrypoint' },
    { repoRoot: REPO_ROOT, now: FIXED_NOW },
  );
  assert.equal(result.ok, true);
  assert.equal(result.trace.role, 'main_entrypoint');
  assert.equal(result.trace.state, 'validated');
});

test('every manifest entry validates offline against its sidecar', async () => {
  for (const entry of MANIFEST.pdfs) {
    const result = await runner.traceDocument(
      MANIFEST,
      { id: entry.id },
      { repoRoot: REPO_ROOT, now: FIXED_NOW },
    );
    assert.equal(result.ok, true, `entry ${entry.id} should validate`);
  }
});

test('unknown id yields DUE-CORPUS-FETCH at the manifest surface', async () => {
  const result = await runner.traceDocument(
    MANIFEST,
    { id: 'does-not-exist' },
    { repoRoot: REPO_ROOT, now: FIXED_NOW },
  );
  assert.equal(result.ok, false);
  assert.equal(result.due.failed_surface, 'manifest');
  assert.equal(result.due.id, null);
});

test('DUE-CORPUS-FETCH fixture: missing text_url and raw_url surfaces', async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ikant-runner-'));
  const fixtureManifest = {
    schema_version: '1.0',
    pdfs: [
      {
        id: 'ghost-doc',
        title: 'Ghost document',
        role: 'technical_annex',
        path: 'missing/ghost-doc.pdf',
        raw_url:
          'https://raw.githubusercontent.com/Luke883i/ROA/main/missing/ghost-doc.pdf',
        sha256: '0'.repeat(64),
        text_url:
          'https://raw.githubusercontent.com/Luke883i/ROA/main/Operation/corpus/text/ghost-doc.md',
        text_sha256: '0'.repeat(64),
      },
    ],
  };

  const result = await runner.traceDocument(
    fixtureManifest,
    { id: 'ghost-doc' },
    { repoRoot: tmp, now: FIXED_NOW },
  );

  assert.equal(result.ok, false);
  assert.equal(result.due.id, 'ghost-doc');
  assert.equal(result.due.path, 'missing/ghost-doc.pdf');
  assert.equal(result.due.raw_url, fixtureManifest.pdfs[0].raw_url);
  // Both surfaces were attempted in order; the abort happened on raw_url.
  assert.equal(result.due.failed_surface, 'raw_url');
  assert.equal(result.trace.state, 'unknown');

  const formatted = runner.formatDue(result.due);
  assert.match(formatted, /^DUE-CORPUS-FETCH\n/);
  assert.match(formatted, /failed_surface: raw_url/);

  fs.rmSync(tmp, { recursive: true, force: true });
});

test('falls back from a hash-mismatched text_url to a valid raw_url', async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ikant-runner-'));
  // Real PDF bytes under a fixture repo root; a sidecar with the wrong content.
  const pdfBytes = Buffer.from('%PDF-1.4 fixture body\n');
  const pdfRel = 'fixture.pdf';
  fs.writeFileSync(path.join(tmp, pdfRel), pdfBytes);
  fs.mkdirSync(path.join(tmp, 'Operation', 'corpus', 'text'), { recursive: true });
  fs.writeFileSync(
    path.join(tmp, 'Operation', 'corpus', 'text', 'fixture.md'),
    'tampered sidecar content',
  );

  const fixtureManifest = {
    schema_version: '1.0',
    pdfs: [
      {
        id: 'fixture',
        title: 'Fixture',
        role: 'technical_annex',
        path: pdfRel,
        raw_url: 'https://raw.githubusercontent.com/Luke883i/ROA/main/fixture.pdf',
        sha256: runner.sha256(pdfBytes),
        text_url:
          'https://raw.githubusercontent.com/Luke883i/ROA/main/Operation/corpus/text/fixture.md',
        text_sha256: '0'.repeat(64),
      },
    ],
  };

  const result = await runner.traceDocument(
    fixtureManifest,
    { id: 'fixture' },
    { repoRoot: tmp, now: FIXED_NOW },
  );

  assert.equal(result.ok, true);
  assert.equal(result.trace.surface, 'raw_url');
  assert.equal(result.trace.sha256, runner.sha256(pdfBytes));

  fs.rmSync(tmp, { recursive: true, force: true });
});

test('relPathFromUrl decodes percent-encoded canonical URLs', () => {
  const rel = runner.relPathFromUrl(
    'https://raw.githubusercontent.com/Luke883i/ROA/main/Operation/corpus/text/roa-main-entrypoint.md',
  );
  assert.equal(rel, 'Operation/corpus/text/roa-main-entrypoint.md');
  assert.equal(runner.relPathFromUrl('not-a-canonical-url'), null);
});
