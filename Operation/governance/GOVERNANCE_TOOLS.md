# GOVERNANCE_TOOLS.md — census of repository governance tooling

> **Role.** Single human-readable census of every governance/automation surface
> in this repository, grouped by **purpose** and **scope**, plus the one
> orchestrator that applies them all. Referenced by `AGENTS.md` §6 (MDAS map)
> and `DecisionLog.md` DEC-0008. This file documents tools; it does not define
> new policy. Policy lives in `MDAS.md` / `DecisionLog.md`.

---

## 1. Orchestrator (apply everything)

| Tool | Purpose | Scope |
|---|---|---|
| `repo-roa.sh` (repo root) | Single entrypoint that **applies** (or, with `--check`, **verifies**) every alignment gate below in order: regenerate corpus map + sidecars → validate manifest → audit geometry → README/MANIFEST alignment → iKant incarnation. | Whole repo: PDFs, `Operation/MANIFEST.json`, `Operation/corpus/text/`, `README.md`, agentification contract. |

Run after adding / renaming / deleting a PDF or editing seed metadata:

```bash
./repo-roa.sh            # APPLY: realign all surfaces, then verify
./repo-roa.sh --check    # VERIFY only (the contract CI enforces)
./repo-roa.sh --online   # also HTTP-HEAD every raw_url (needs network)
```

`repo-roa.sh` is a thin deterministic wrapper; it adds no policy of its own and
each wrapped script remains independently runnable.

---

## 2. Corpus / documentation governance (scope: PDFs, manifest, sidecars, README)

| Tool | Purpose |
|---|---|
| `Operation/scripts/build_manifest.py` | Deterministically (re)generate `Operation/MANIFEST.json` and the PDF-extracted text sidecars in `Operation/corpus/text/`. Resolves renamed/moved PDFs from seed metadata (fail-closed on ambiguity). `--check` fails on drift instead of writing. |
| `Operation/scripts/check_manifest.py` | Validate `MANIFEST.json` offline: every `path` exists, `raw_url` shape is canonical (percent-encoded raw host, no blob/cloud links), `size_bytes`/`sha256` match. `--online` additionally HTTP-HEADs each `raw_url`. |
| `Operation/scripts/audit_corpus_geometry.py` | Audit corpus geometry: detect stale paths, stale raw URLs, missing sidecars, and unmanifested (orphan) PDFs. `--check` fails on any non-OK entry. |
| `Operation/scripts/check_readme_manifest_alignment.py` | Verify the README semantic reticulum table and `MANIFEST.json` stay mutually aligned (every canonical entry listed; no dangling ids). |
| `Operation/scripts/manifest_common.py` | Shared helpers (repo root, canonical raw-URL builder, sha256, manifest loader) used by the corpus scripts. |
| `Operation/scripts/test_build_manifest.py` | Unit tests for the manifest builder's normalization/resolution logic. |

`Operation/MANIFEST.json` is the **only** machine-canonical corpus-acquisition
map (DEC-0007). Sidecars are generated output and must never be hand-edited.

---

## 3. Agentification governance (scope: agent identity + response contract)

| Tool | Purpose |
|---|---|
| `Operation/governance/incarnation_test.py` | Deterministic, dependency-free gate enforcing MDAS completeness and the SPEAK/DEBUG/TRACE/SEED response contract. Exit 0 = agentification holds. |
| `Operation/governance/MDAS.md` | Minimum Deterministic Agentification Set: architectures, Definition of Done, metrics. |
| `Operation/governance/seed_protocol.md` | iKant SEED output-binding + t-1 audit protocol. |
| `Operation/governance/DecisionLog.md` | Append-only supreme feasibility / decision source. |
| `Operation/governance/simulations.md` | Recorded mental simulations / regression rationale (antifragile loop). |

---

## 4. CI gates (scope: enforce sections 2–3 on push / PR)

| Workflow | Purpose | Mirrors |
|---|---|---|
| `.github/workflows/check-manifest.yml` | Run `check_manifest.py` + `build_manifest.py --check` on corpus-touching changes. | §2 |
| `.github/workflows/validate-corpus.yml` | Run build-check + manifest validate + geometry audit + README/MANIFEST alignment on PRs (online variant on dispatch). | §2 |
| `.github/workflows/regenerate-corpus.yml` | On PDF changes to `main`, regenerate and commit manifest + sidecars (`[skip ci]`). | §2 |
| `.github/workflows/ikant-incarnation.yml` | Run `incarnation_test.py` on agent-surface changes. | §3 |

`./repo-roa.sh --check` runs the union of the §2/§3 gates locally, reproducing
what CI enforces.
