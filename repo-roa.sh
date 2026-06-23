#!/usr/bin/env bash
#
# >>> USAGE
# repo-roa.sh — single governance orchestrator for the ROA repository.
#
# Purpose
#   Apply (or verify) every documentation-alignment gate in one command so that
#   the uploaded PDFs, the machine-readable corpus map (Operation/MANIFEST.json),
#   the generated text sidecars, the raw_url / text_url references, and the
#   README semantic reticulum stay mutually consistent — and so the iKant
#   agentification contract keeps holding.
#
#   It is a thin, deterministic wrapper around the existing governance scripts;
#   it adds no new policy of its own. The census of the wrapped tools lives in
#   Operation/governance/GOVERNANCE_TOOLS.md.
#
# Usage
#   ./repo-roa.sh [--check] [--online] [--no-install] [-h|--help]
#
#   (no flags)    APPLY mode: regenerate MANIFEST.json + text sidecars, then run
#                 every offline validation gate. Use after adding/renaming/
#                 deleting a PDF or editing seed metadata.
#   --check       VERIFY mode: run every gate read-only (no writes). This is the
#                 exact contract CI enforces; fails on any drift.
#   --online      Additionally HTTP-HEAD every raw_url (needs network access).
#   --no-install  Skip `pip install -r Operation/requirements-dev.txt`.
#   -h, --help    Show this help and exit.
#
# Exit code is 0 only if every gate passes.
# <<< USAGE

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

PY="${PYTHON:-python3}"
SCRIPTS="Operation/scripts"
GOVERNANCE="Operation/governance"

CHECK=0
ONLINE=0
INSTALL=1

usage() {
  # Print the contiguous comment header between the USAGE markers below.
  sed -n '/^# >>> USAGE/,/^# <<< USAGE/p' "${BASH_SOURCE[0]}" \
    | grep -v -e '^# >>> USAGE' -e '^# <<< USAGE' \
    | sed 's/^# \{0,1\}//'
}

for arg in "$@"; do
  case "$arg" in
    --check) CHECK=1 ;;
    --online) ONLINE=1 ;;
    --no-install) INSTALL=0 ;;
    -h|--help) usage; exit 0 ;;
    *)
      echo "repo-roa.sh: unknown argument '$arg'" >&2
      usage >&2
      exit 2
      ;;
  esac
done

if [ "$CHECK" -eq 1 ]; then
  echo ":: SPEAK repo-roa — VERIFY mode (read-only governance gates)"
else
  echo ":: SPEAK repo-roa — APPLY mode (align corpus, then verify gates)"
fi

step() { echo; echo "==> $*"; }

if [ "$INSTALL" -eq 1 ]; then
  step "Install corpus build dependencies (Operation/requirements-dev.txt)"
  "$PY" -m pip install -q -r Operation/requirements-dev.txt
else
  echo "(skipping dependency install: --no-install)"
fi

# 1. Corpus map + text sidecars: the only machine-canonical acquisition surface.
if [ "$CHECK" -eq 1 ]; then
  step "Check MANIFEST.json + text sidecars are up to date"
  "$PY" "$SCRIPTS/build_manifest.py" --check
else
  step "Regenerate MANIFEST.json + text sidecars from PDFs"
  "$PY" "$SCRIPTS/build_manifest.py"
fi

# 1b. Builder regression tests: keep the deterministic normalization/resolution
#     logic that produces the manifest honest. Read-only (operates on temp
#     fixtures), so it runs identically in APPLY and VERIFY modes.
step "Run manifest builder unit tests"
"$PY" -m unittest "$SCRIPTS/test_build_manifest.py"

# 2. Validate the manifest contract (paths, raw_url shape, size/sha256, no clouds).
step "Validate MANIFEST.json offline"
"$PY" "$SCRIPTS/check_manifest.py"

if [ "$ONLINE" -eq 1 ]; then
  step "Validate MANIFEST.json online (HTTP HEAD each raw_url)"
  "$PY" "$SCRIPTS/check_manifest.py" --online
fi

# 3. Geometry audit: no stale paths, stale raw URLs, missing sidecars, orphan PDFs.
step "Audit corpus geometry"
"$PY" "$SCRIPTS/audit_corpus_geometry.py" --check

# 4. README semantic reticulum <-> MANIFEST alignment.
step "Check README / MANIFEST alignment"
"$PY" "$SCRIPTS/check_readme_manifest_alignment.py"

# 5. iKant agentification gate: MDAS completeness + SPEAK/DEBUG contract.
step "Run iKant incarnation test"
"$PY" "$GOVERNANCE/incarnation_test.py"

# 6. iKant runner: deterministic fetch + verify + trace integration tests.
#    Skipped (not failed) when Node.js is unavailable, so the Python gates above
#    remain the hard contract everywhere; CI provides Node and runs this gate.
if command -v node >/dev/null 2>&1; then
  step "Run iKant runner tests (fetch + verify + trace + DUE-CORPUS-FETCH)"
  # Shell-expand the glob: portable across Node versions (Node < 21 does not
  # expand glob patterns passed to --test).
  node --test Operation/runner/test/*.test.js
else
  echo "(skipping iKant runner tests: node not found)"
fi

echo
echo ":: SPEAK repo-roa — all governance gates passed."
