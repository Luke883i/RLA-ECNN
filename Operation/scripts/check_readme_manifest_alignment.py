#!/usr/bin/env python3
"""Check that README.md semantic reticulum table is aligned with Operation/MANIFEST.json.

Verifies:
1. Every id/role listed in the README agent reticulum table exists in the manifest.
2. Every canonical (non-UNREVIEWED_AUTOSEEDED) manifest entry appears in the table.

Exit 0 = aligned, exit 1 = drift detected.

Usage:
  python Operation/scripts/check_readme_manifest_alignment.py
"""

from __future__ import annotations

import re
import sys

from manifest_common import REPO_ROOT, load_manifest, MANIFEST_PATH

README_PATH = REPO_ROOT / "README.md"

# Match rows in the semantic reticulum table:
# | `role` | `id` | `Operation/corpus/text/{id}.md` |
TABLE_ROW_RE = re.compile(
    r"^\|\s*`(?P<role>[^`]+)`\s*\|\s*`(?P<id>[^`]+)`\s*\|"
)


def parse_readme_table() -> list[dict[str, str]]:
    """Extract role/id pairs from the README semantic reticulum table."""
    rows: list[dict[str, str]] = []
    text = README_PATH.read_text(encoding="utf-8")
    for line in text.splitlines():
        m = TABLE_ROW_RE.match(line)
        if m:
            rows.append({"role": m.group("role"), "id": m.group("id")})
    return rows


def check_alignment() -> list[str]:
    """Return a list of error strings. Empty = aligned."""
    errors: list[str] = []

    manifest = load_manifest()
    manifest_ids = {entry["id"]: entry for entry in manifest["pdfs"]}

    readme_rows = parse_readme_table()
    readme_ids = {row["id"] for row in readme_rows}

    # Every README table entry must exist in manifest
    for row in readme_rows:
        rid = row["id"]
        if rid not in manifest_ids:
            errors.append(
                f"README lists id `{rid}` in reticulum table, "
                f"but it does not exist in Operation/MANIFEST.json"
            )
        else:
            manifest_role = manifest_ids[rid]["role"]
            if row["role"] != manifest_role:
                errors.append(
                    f"README role for `{rid}` is `{row['role']}` "
                    f"but manifest says `{manifest_role}`"
                )

    # Every canonical manifest entry should appear in README table
    for eid, entry in manifest_ids.items():
        if entry.get("role") == "UNREVIEWED_AUTOSEEDED":
            continue  # auto-seeded entries need not be in README
        if eid not in readme_ids:
            errors.append(
                f"Manifest entry `{eid}` (role: `{entry['role']}`) "
                f"is not listed in the README semantic reticulum table"
            )

    return errors


def main(argv: list[str] | None = None) -> int:
    if not README_PATH.exists():
        print("FAIL: README.md not found", file=sys.stderr)
        return 1
    if not MANIFEST_PATH.exists():
        print("FAIL: Operation/MANIFEST.json not found", file=sys.stderr)
        return 1

    errors = check_alignment()
    if errors:
        print("README/MANIFEST alignment FAILED:", file=sys.stderr)
        for err in errors:
            print(f"  - {err}", file=sys.stderr)
        return 1

    print("README/MANIFEST alignment OK.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
