#!/usr/bin/env python3
from __future__ import annotations
import json
import sys
import unittest
from pathlib import Path
HERE = Path(__file__).resolve().parent
if str(HERE) not in sys.path:
    sys.path.insert(0, str(HERE))
import semantic_runtime as rt
TERMS = "1d1eb4b669d90f637b73b36c56ff29f4707ea3878734aff633b97d54d96dd1ea"
REF = "42b8a2b8066dca8ef0a55560a422dda11e3d0a9e"

def receipt(**kw):
    base = {"session_id":"TEST-SESSION","contract_version":"1.0.0","terms_sha256":TERMS,"repository_ref":REF,"runtime_mode":"FILE","status":"ACTIVE_FILE","initialized_at":"2026-08-23T19:36:51+02:00"}
    base.update(kw)
    return base

class AccessContinuityTests(unittest.TestCase):
    def test_active_receipt_is_continuity_proof(self):
        self.assertTrue(rt.validate_session_receipt(receipt(), terms_sha256=TERMS, contract_version="1.0.0").allowed)
    def test_terms_drift_resets(self):
        self.assertEqual(rt.validate_session_receipt(receipt(terms_sha256="x"), terms_sha256=TERMS, contract_version="1.0.0").state, "RESET_REQUIRED")
    def test_contract_drift_resets(self):
        self.assertEqual(rt.validate_session_receipt(receipt(contract_version="0"), terms_sha256=TERMS, contract_version="1.0.0").state, "RESET_REQUIRED")
    def test_source_drift_never_silent(self):
        self.assertEqual(rt.source_ref_state(receipt(), "different"), "SOURCE_DRIFT")
        self.assertEqual(rt.source_ref_state(receipt(), REF), "PINNED")

class SemanticPlaneTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.manifest = json.loads(rt.MANIFEST.read_text(encoding="utf-8"))
        cls.curation = json.loads(rt.CURATION.read_text(encoding="utf-8"))
        cls.midx = rt.manifest_index(cls.manifest)
        cls.cidx = rt.curation_index(cls.curation)
    def test_reticulum_is_well_formed(self):
        self.assertEqual(rt.validate_reticulum(), [])
    def test_curation_overlay_does_not_rewrite_acquisition_role(self):
        for mid, cur in self.cidx.items():
            self.assertEqual(self.midx[mid]["role"], "UNREVIEWED_AUTOSEEDED")
            status = rt.semantic_status(self.midx[mid], cur)
            self.assertEqual(status["authority"], 0.0)
            self.assertTrue(status["readable"])
    def test_iv_v_have_explicit_candidate_roles(self):
        self.assertEqual(self.cidx["iv-computational-semantics-of-claim-admissibility"]["semantic_role"], "claim_admissibility")
        self.assertEqual(self.cidx["v-epistemi-debt-the-accounting-layer-of-computational-semantics"]["semantic_role"], "epistemic_debt_accounting")
    def test_pce_is_not_on_core_route(self):
        graph = json.loads(rt.RETICULUM.read_text(encoding="utf-8"))
        self.assertNotIn("PCE", graph["core_route"])
    def test_witnesses_never_upgrade_authority(self):
        graph = json.loads(rt.RETICULUM.read_text(encoding="utf-8")); nodes={n["id"]:n for n in graph["nodes"]}
        self.assertEqual(nodes["AOSP"]["authority_class"], "witness_only")
        self.assertEqual(nodes["BRYOPHYTE"]["authority_class"], "witness_only")
    def test_edges_have_vector_weights_debt_and_falsifiers(self):
        graph = json.loads(rt.RETICULUM.read_text(encoding="utf-8"))
        for edge in graph["edges"]:
            self.assertEqual(set(edge["weight"]), {"routing","preservation","authority","falsifiability","debt_cost"})
            self.assertIsInstance(edge["debt"], list)
            self.assertTrue(edge["falsifier"])
    def test_route_is_small_and_deterministic(self):
        self.assertEqual(rt.route(["RLA"], max_nodes=8), rt.route(["RLA"], max_nodes=8))
        self.assertLessEqual(len(rt.route(["RLA"], max_nodes=8)), 8)

class InferenceTests(unittest.TestCase):
    def test_hash_validity_cannot_fill_permission(self):
        e = rt.claim_envelope(evidence_status="HashVerifiedOnly", debt=["validation"], terminal="Answer", receipt={"sha256":"x"})
        self.assertIsNone(e["permission"])
    def test_nonanswer_terminal_blocks_use(self):
        e = rt.claim_envelope(evidence_status="Unknown", debt=["source"], terminal="Unknown", receipt={})
        self.assertEqual(rt.named_use_gate(e, adequate_horizon=True, blocking_debt=False, human_authority=True), "Blocked")
    def test_blocking_debt_requires_review(self):
        e = rt.claim_envelope(evidence_status="Supported", debt=["validation"], terminal="Answer", receipt={})
        self.assertEqual(rt.named_use_gate(e, adequate_horizon=True, blocking_debt=True, human_authority=True), "ReviewRequired")
    def test_horizon_inadequate_precedes_permission(self):
        e = rt.claim_envelope(evidence_status="Supported", debt=[], terminal="Answer", receipt={})
        self.assertEqual(rt.named_use_gate(e, adequate_horizon=False, blocking_debt=False, human_authority=True), "HorizonInadequate")
    def test_human_authority_is_required_for_warranted_use(self):
        e = rt.claim_envelope(evidence_status="Supported", debt=[], terminal="Answer", receipt={})
        self.assertEqual(rt.named_use_gate(e, adequate_horizon=True, blocking_debt=False, human_authority=False), "ReviewRequired")
        self.assertEqual(rt.named_use_gate(e, adequate_horizon=True, blocking_debt=False, human_authority=True), "Warranted")

if __name__ == "__main__":
    unittest.main()
