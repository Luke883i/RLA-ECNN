# ROA Bryophyte Epistemic Lab

## Origin

The **ROA Bryophyte Epistemic Lab** is a standalone browser simulator derived from the bryophyte case study defined in **Annex B — _Compact RLA Topology for a Generalist Bryophyte_** (Gianluca Conte, August 2025), part of the RLA/CRC/ROA research corpus.

Annex B specifies a finite, computable epistemic model of a generalist bryophyte: **20 abstraction levels (L01–L20), 42 parameters (P01–P42), explicit update equations, threshold actions, rare-event injectors, collapse/emergence metrics, climate scenarios, halting conditions, and adaptive epigenetic buffering**. The laboratory turns that specification into an executable and inspectable simulation environment.

The lab is therefore not a new biological theory. It is an **implementation witness** for the claim that a bounded scientific representation can be compiled into a replayable computational object whose internal state, transitions, assumptions, failures, and unresolved epistemic debt are visible.

## Position inside ROA

Within **Reticular Observer Architectures (ROA)**, the bryophyte is used as a worked example of **science as node**: scientific knowledge is reorganised into a typed reticulum rather than treated as background prose. RLA provides the grammar of levels and transmissions; CRC provides the bounded computability discipline; ROA adds horizon, provenance, debt, failure states, and governance of use.

The laboratory should therefore be read as an **epistemic twin**, not as an ontological copy of a moss. Its purpose is to make a declared model executable, navigable, falsifiable, and auditable. A simulation can be internally correct while still being biologically wrong; execution is not validation.

## What the laboratory implements

The standalone HTML integrates the Annex B model into a single deterministic/stochastic runtime with:

- the complete L01–L20 reticular structure;
- parameters P01–P42 and their operational ranges/reconductions;
- the Annex B daily update loop and equations;
- threshold actions and rare events (including pathogen, fire, and flood);
- climate forcing and runtime interventions;
- water, ROS, photosynthesis, stress, vitality, senescence, reproduction, epigenetic buffering, and systemic-state dynamics;
- halting and success/failure conditions;
- trajectory metrics and reticular activity views;
- seeded stochastic execution for reproducibility;
- end-to-end runtime trace export so that each simulation can be reconstructed and audited.

Where Annex B does not fully specify a numerical coefficient, scheduler detail, or missing dynamic, the implementation must keep that completion distinguishable from source material. The intended discipline is: **SOURCE** for directly specified rules, **MODEL_DEFAULT** for explicit implementation defaults, **REPAIR** for consistency fixes, and **DEBT_OPEN** for unresolved scientific or validation gaps.

## Purpose

The lab has four purposes:

1. **Constructibility** — test whether the Annex B reticulum can actually be executed as one coherent bounded system.
2. **Traceability** — make every important state transition, intervention, feedback, and failure reconstructable.
3. **Falsification** — expose the model to adversarial simulations rather than treating plausible-looking trajectories as confirmation.
4. **Empirical bridge** — generate synthetic trajectories that can eventually be compared with controlled bryophyte observations under matched observables and protocols.

Annex B explicitly proposes **epistemic indistinguishability** as a falsifiable design goal: real and synthetic trajectories should be mixed under a matched observation protocol and submitted to blinded expert classification. This has not yet been established empirically; the laboratory exists partly to make that test possible.

## Falsification challenges

The strongest use of the lab is not to demonstrate that the model works, but to search for conditions under which it fails.

### 1. Blind real-vs-synthetic discrimination

Collect controlled real bryophyte trajectories under matched temperature, water, light, and observation schedules. Mix them with simulated trajectories and ask blinded domain experts to classify real versus synthetic. If discrimination remains reliably above the declared threshold, the epistemic-indistinguishability claim fails for that observable set.

### 2. Climate-response challenge

Run large ensembles under baseline, moderate-warming, severe-warming, drought, heatwave, cold-snap, and heavy-rain regimes. Test whether stress, ROS, water state, photosynthesis, senescence, reproduction, and mortality respond in biologically defensible directions and timescales. A model that survives extreme forcing without credible physiological cost, or dies under benign forcing, fails this challenge.

### 3. Recovery and quiescence challenge

Apply controlled drying and rehydration cycles. Test whether desiccation tolerance, photosynthetic suppression, stress accumulation, and recovery interact coherently. Permanent active metabolism under prolonged zero-water states, instantaneous full recovery, or monotonic adaptation without cost are defeat conditions.

### 4. Rare-event calibration challenge

Measure the implied long-horizon frequency and impact of pathogen, fire, and flood injectors. If event probabilities dominate mortality or system behaviour in ways incompatible with the intended ecological horizon, the laboratory must flag **calibration debt** rather than silently tune the source rule away.

### 5. Parameter mutation / sensitivity challenge

Mutate each parameter and implementation default across admissible ranges. Identify variables that never affect any observable, variables whose tiny perturbation catastrophically destabilises the model, and parameters whose effects contradict their stated role. Such cases reveal dead ontology, hidden coupling, or numerical fragility.

### 6. Reticular closure challenge

For every L01–L20 level, verify that its state or rule can influence at least one admitted observable or downstream diagnostic under some valid condition. A permanently disconnected level is evidence that the executable reticulum does not faithfully realise the declared ontology.

### 7. Trace-removal challenge

Delete or corrupt selected runtime receipts, source labels, seeds, event records, or transition metadata and verify that reconstructability fails visibly. If the system still presents a clean authoritative result after its evidence chain has been broken, it fails the ROA anti-false-green requirement.

### 8. Scheduler invariance challenge

Verify that playback speed changes only wall-clock presentation, not the scientific trajectory. The same seed, configuration, and intervention schedule must yield the same simulated state sequence at 1 day/s, 1 week/s, 1 month/s, or faster display modes.

### 9. Horizon-transfer challenge

Attempt to use the generalist model for species-specific prediction, field forecasting, or ecological management. The simulator should refuse to treat those outputs as validated unless a transfer bridge and external calibration are supplied. If generic internal validity silently becomes species-level authority, the model fails epistemically.

### 10. Simpler-baseline challenge

Compare the laboratory against simpler dynamical baselines using the same observables and data. If a substantially simpler model matches or exceeds predictive adequacy, calibration, interpretability, and robustness with lower burden, the richer reticular construction has not yet justified its complexity.

## Minimum test suite

A serious release should pass, at minimum:

- deterministic replay from seed and configuration;
- finite-value and range checks for every daily update;
- coverage of P01–P42 and L01–L20;
- witness tests for every threshold action and rare event;
- intervention-effect tests for runtime climate events;
- halting/failure tests under catastrophic vitality loss and senescence;
- long-horizon stability tests;
- mutation and sensitivity sweeps;
- trace completeness and import/export replay;
- UI tests ensuring that visual rendering never feeds back into the scientific state;
- blind comparison protocols against real observations when suitable data become available.

## Status and epistemic boundary

The current laboratory can demonstrate **constructibility, deterministic replay, bounded stochastic simulation, traceability, and internal falsifiability**. It cannot by itself establish biological truth, species-specific accuracy, field validity, or empirical equivalence with real bryophytes.

In ROA terms, the implementation is a computable observer over a declared horizon. Its outputs become scientifically stronger only when the remaining empirical and calibration debt is discharged by external evidence.

## Primary references

1. Conte, G. (2025). **Annex B — _Compact RLA Topology for a Generalist Bryophyte_.** RLA/CRC technical annex. Canonical ROA repository source: `Operation/corpus/text/annex-b-rla-biological-case-bryophyte.md`.
2. Conte, G. (2025). **Annex A — _Foundations of Reticular Local Abstraction and Compact Reticular Computability_.**
3. Conte, G. (2025). **_Reticular Local Abstraction and Compact Reticular Computability_** — main position paper.
4. Conte, G. (2025). **Annex F — _Prototype Implementations and Experimental Setups for the RLA/CRC Framework_**, Prototype F.1: Bryophyte CRC Simulator.
5. Conte, G. (2026). **_Reticular Observer Architectures for Governable AI-Assisted Work_.** Worked epistemic-twin and “science as node” framing.
6. Conte, G. (2026). **_Epistemic Debt: The Accounting Layer of Computational Semantics_.** Use gates, debt, bounded observers, falsification, and validation boundaries.
7. ROA repository: https://github.com/Luke883i/ROA

---

**Recommended interpretation:** use the laboratory as an executable hypothesis about a declared scientific representation. The strongest result is not a convincing simulation; it is a simulation whose assumptions, failures, traces, and falsifiers remain visible.
