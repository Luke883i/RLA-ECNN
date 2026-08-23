#!/usr/bin/env python3
"""Exhaustive 20-bit semantic architecture mutation for ROA chat runtime.

Hard invariants kill unsafe or self-contradictory designs; survivors are scored
for UX/inference value minus operational burden. This is architecture
falsification, not scientific validation.
"""
from __future__ import annotations
import hashlib
import json
from pathlib import Path

FEATURES = [
  "active_session_receipt","repeat_full_gate_each_turn","curation_overlay","mutate_manifest_semantic_roles",
  "source_drift_explicit","silent_ref_refresh","vector_edge_weights","scalar_truth_like_weight",
  "component_debt","scalar_debt_only","pce_optional_lateral","pce_core_equivalence",
  "witness_only_boundaries","witness_maturity_elevator","typed_nonanswer_terminals","forced_answer_fallback",
  "progressive_disclosure","full_trace_hot_path","lazy_named_use_gate","action_certificate_readonly"
]

def bit(g,n): return bool(g & (1<<n))

def hard_failures(g):
    f=[]
    if bit(g,0)==bit(g,1): f.append("continuity-not-exactly-one")
    if bit(g,2)==bit(g,3): f.append("curation-not-exactly-one")
    if not bit(g,4) or bit(g,5): f.append("source-drift-unsafe")
    if bit(g,7): f.append("truth-like-scalar-weight")
    if not bit(g,8) or bit(g,9): f.append("debt-collapse")
    if not bit(g,10) or bit(g,11): f.append("pce-overclaim")
    if not bit(g,12) or bit(g,13): f.append("witness-overclaim")
    if not bit(g,14) or bit(g,15): f.append("forced-answer")
    if not bit(g,16) and not bit(g,17): f.append("no-human-renderer")
    if not bit(g,18) and not bit(g,19): f.append("no-use-action-boundary")
    return f

def score(g):
    value=(3 if bit(g,0) else 0)+(2 if bit(g,2) else 0)+(2 if bit(g,6) else .5)+(2 if bit(g,16) else .3)+(2 if bit(g,18) else .4)
    burden=(2.5 if bit(g,1) else 0)+(1.2 if bit(g,3) else 0)+(.4 if bit(g,6) else 0)+(1.8 if bit(g,17) else 0)+(2 if bit(g,19) else 0)
    burden += .8 if bit(g,16) and bit(g,17) else 0
    burden += .8 if bit(g,18) and bit(g,19) else 0
    return value-burden

def main():
    total=1<<len(FEATURES); killed=0; survivors=0; top=[]; trace=hashlib.sha256(); counts={}
    for genome in range(total):
        failures=hard_failures(genome); ok=not failures
        trace.update(genome.to_bytes(4,"big")); trace.update(b"1" if ok else b"0")
        if not ok:
            killed+=1
            for reason in failures: counts[reason]=counts.get(reason,0)+1
            continue
        survivors+=1; item=(score(genome),genome)
        if len(top)<16: top.append(item); top.sort(reverse=True)
        elif item>top[-1]: top[-1]=item; top.sort(reverse=True)
    receipt={
      "schema":"roa-semantic-mutation-receipt/v2",
      "method":"exhaustive 20-bit architecture mutation with hard invariants and UX/burden score",
      "mutations":total,"killed":killed,"survived":survivors,"kill_rate":round(killed/total,8),
      "best_genome_hex":hex(top[0][1]),"best_score":top[0][0],
      "best_features":[FEATURES[i] for i in range(len(FEATURES)) if bit(top[0][1],i)],
      "top16":[{"genome":hex(g),"score":s,"features":[FEATURES[i] for i in range(len(FEATURES)) if bit(g,i)]} for s,g in top],
      "failure_counts":dict(sorted(counts.items())),"trace_sha256":trace.hexdigest(),
      "interpretation":"synthetic architecture falsification only; not scientific or empirical validation"
    }
    out=Path(__file__).with_name("semantic_runtime_mutation_receipt.json")
    out.write_text(json.dumps(receipt,indent=2)+"\n",encoding="utf-8")
    print(json.dumps(receipt,indent=2))
    return 0

if __name__=="__main__": raise SystemExit(main())
