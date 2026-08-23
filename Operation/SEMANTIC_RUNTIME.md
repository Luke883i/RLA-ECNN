# ROA semantic chat runtime — candidate v1

This runtime is a **post-initialization navigation and inference layer**. It does not replace `IKANT_ROA_ACCESS_CONTRACT.md`, does not grant access, and has zero independent epistemic authority.

## Hot path

After a valid `I ACCEPT -> PROBE IKANT -> INITIALIZE IKANT` lifecycle has produced an ACTIVE SessionReceipt:

`drift check -> minimal semantic route -> hash-verified source reads -> evidence/debt classification -> typed terminal -> named-use gate only when material -> compressed answer + audit`

The SessionReceipt is the runtime continuity token. Legacy SPEAK/DEBUG/SEED formatting remains a renderer/regression surface; it is not a second access credential. A changed contract/Terms digest resets admission. A changed corpus ref creates `SOURCE_DRIFT`: pin the frozen source vector or refresh it, never silently mix refs. Any repository-write authorization is invalidated by a changed head.

## Plane separation

- **Acquisition plane:** `Operation/MANIFEST.json` owns paths, URLs and integrity metadata.
- **Curation plane:** `Operation/SEMANTIC_CURATION.json` proposes semantic roles without rewriting acquisition metadata. Candidate curation has authority `0.0` until human review.
- **Navigation plane:** `Operation/SEMANTIC_RETICULUM.json` is the AI-navigable graph. Edge weights are routing/design weights, never truth probabilities.
- **Inference plane:** claim state, evidence, componentwise Epistemic Debt, typed terminal and receipt remain separate from named-use permission.
- **Authorization plane:** model output, routing, runtime state, hashes and successful execution do not create human or institutional authority.

## UX rule

Default human output stays short. Full route, source hashes, debt, falsifiers, mutation receipts and diagnostics belong in Debug/audit artifacts. Ordinary read-only turns do not repeat Terms/PROBE/INITIALIZE and do not require ActionCertificates.

## Defeat conditions

Remove this runtime layer if a simpler composition reconstructs the same routes, non-answer terminals, debt propagation, witness boundaries and source-drift behavior with lower burden. Fail the design if PCE becomes equivalence by implication, A-OSP/Bryophyte become theory-validation elevators, candidate curation gains authority through generation alone, or hash validity becomes epistemic validity.
