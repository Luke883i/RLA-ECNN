<!-- GENERATED FILE. DO NOT EDIT BY HAND. Run Operation/scripts/build_manifest.py -->
---
id: "iv-computational-semantics-of-claim-admissibility"
title: "(IV) Computational Semantics of Claim Admissibility"
role: "UNREVIEWED_AUTOSEEDED"
source_path: "(IV) Computational Semantics of Claim Admissibility.pdf"
source_raw_url: "https://raw.githubusercontent.com/Luke883i/ROA/main/%28IV%29%20Computational%20Semantics%20of%20Claim%20Admissibility.pdf"
source_sha256: "deae9b91c9cb5d8f5c5b5793e33b116938674242f4dddfa7484da4d635cf5199"
extraction_status: "success"
---

## Page 1

1 
Computational Semantics of Claim Admissibility 
Epistemic Debt, Typed Non-Answer States, and Governed Use under Declared Horizons 
Gianluca Conte · Independent Researcher 
August 2026 
 
Abstract 
Artificial intelligence can produce decision -ready semantic artefacts before their sources, transformations, limitations, permitted us-
es, and consequential effects are reconstructable. This paper defines a bounded computational semantics of claim admissibilit y and 
use-readiness. Given a versioned claim, evidence context, declared horizon, and resource policy, an effective evaluator returns e vi-
dence status, a componentwise Epistemic Debt vector, a typed terminal, and a receipt —not truth. A separate gate computes permis-
sion for one named use. Consequential action requires a current ActionCertificate bound to the exact action and control state , fol-
lowed by an ExecutionReceipt. Classical computability is unchanged. Gödel, Church –Turing, Rice, and Shannon delimit four non -
claims: complete self -grounding, a universal total decider, a universal checker of non -trivial program semantics, and information as 
warrant. The framework composes six functional contracts. Three concern query -relative scientific representation, bounded evalua-
tion with honest non -answer terminals, and local epistemic transduction around probabilistic proposal and external certification. 
Three concern persistent observer composition and governance meta -control, componentwise residual -warrant accounting, and 
named-use/action mediation. Framework names follow their functions and carry no independent scientific standing. Local results 
address query factorisation, approximate and stochastic fidelity, budgeted terminalisation, and undecidability preservation o r infor-
mation obstruction. They also cover typed -terminal and candidate/certified preservation, conditional non -laundering, waiver without 
discharge, and relative layer removal. A bryophyte compilation and supplier -control path are stress tests, not validations. The pro-
gramme loses when simpler systems reconstruct the same exports and achieve equal or better outcomes with lower burden.  
 
Keywords: computational semantics; epistemic debt; claim admissibility; typed non -answer states; scientific representation; comput-
ability; abstention; provenance; assurance; bounded observers; action certificates; AI governance  
 
Scientific status. Conceptual and formal -methodological. Gödel, Church -Turing, Rice, Shannon, factorisation, type -soundness, and 
finite-trace arguments are used only within their exact scopes; local propositions and conformance invariants remain conditional. 
Empirical superiority, Epistemic Debt coding reliability, dependency completeness, gate calibration, institutional legitimacy , and 
external validation remain open. 
Standalone scope. Every functional contract is defined locally; framework names are introduced only as secondary labels. Expa nd-
ed framework documents supply context and naming provenance, not independent evidence. No contract may borrow maturity 
from another, and every named layer has a relative -removal condition. Executable companions are treated as falsification surfaces, 
not independent evidence. 
 
Reading key. Epistemic Horizon — versioned source, scope, query, transformation, receipt, validation, and conflict contract. 
WF(𝓗) — internally evaluable. adequate(𝓗,U,A) — sufficient for use U under authority A. EvidenceStatus — earned support. 
Epistemic Debt — componentwise unpaid warrant. Typed Non -Answer States — Unknown, Contradiction, OutOfHorizon, Re-
view, Timeout, or Failure. GateOutcome / ActionCertificate — named-use permission and the current single -action token it may 
issue. 
 
1. Claim admissibility: problem, thesis, and contri-
bution boundary 
A machine can produce a polished scientific synthesis, software 
diagnosis, legal issue list, compliance memorandum, or policy 
recommendation before an institution can reconstruct what li-
censed it. Truth remains indispensable. Use adds another ques-
tion: what has the artefact earned under the sources, scope, 
transformations, checks, dependencies, and authority actually 
available? A claim may be true by accident, calibrated but un-
supported, traceable but unauthorised, or executable under an 
illegitimate policy. These are distinct states with distinct reme-
dies, not stylistic caveats. 
The organising thesis is restricted. Claim admissibility and use -
readiness can be computed locally when the object and contract 
are explicit. An epistemic computation is an effective procedure 
over a finitely encoded claim, declared horizon, and resource 
policy. It emits a typed epistemic state with a receipt. Its codo-
main is not merely Answer; it includes EvidenceStatus, Epis-
temic Debt, Terminal, and Receipt. Only a second, externally 
governed computation may return permission for a named use. 
A mature observer is not one that always answers; it terminates 
responsibly. 
The contribution is architectural, not novelty by vocabulary. 
Epistemic logic and knowledge -based programs formalise what 
agents know or believe and how knowledge tests affect distrib-
uted computation. Truth -maintenance, selective prediction, 
provenance, assurance, and runtime verification already cover 
adjacent functions (Hintikka, 1962; Doyle, 1979; Fagin et al., 
1997; Chow, 1970; W3C, 2013; Bloomfield & Bishop, 2010). 
The integrated lifecycle does not replace them. Its narrower 
hypothesis is that typed interfaces can expose failures hidden 
when these registers are merged. Those interfaces connect rep-
resentation, bounded evaluation, epistemic state, residual war-
rant, named -use authorisation, and action. The proposal loses 
distinctiveness whenever established methods reconstruct the 
same export with lower burden. 
Use the six separations below as a reading key. They are type 
boundaries, not slogans. Observer relativity is not relativism: 
horizons can be compared through source manifests, queries, 
transmission contracts, validation rules, and authority relations. 
Representation ≠ ontology 
A working vocabulary is not reality. 
Computability ≠ validation 
A runnable evaluator may still be 
wrong. 
Probability ≠ evidence 
Confidence does not create a source. 
Evidence ≠ authorisation 
Support does not decide a use. 
Execution ≠ legitimacy 
Following a rule does not legitimate it. 
Visible workflow ≠ proof 
Logs still require integrity and inter-
pretation.

## Page 2

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
2 
 
1.1 Formal limits as negative architecture 
Gödel, Church–Turing, Rice, and Shannon constrain the permis-
sible claim space; none proves this architecture. Gödel applies 
to consistent, effectively axiomatized theories strong enough for 
arithmetic. Its local lesson is that internal derivability cannot 
become a complete truth or consistency certificate. Church and 
Turing delimit effective calculability and establish undecidable 
problems. A bounded observer therefore needs budgets, timeout, 
and honest partiality. Rice applies to non -trivial extensional 
properties of arbitrary computed partial functions; it does not 
make every finite, syntactic, or domain -restricted predicate un-
decidable. Shannon quantifies information and channel limits, 
not reference, justification, authority, or intended use (Gödel, 
1931; Church, 1936; Turing, 1936/1937; Rice, 1953; Shannon, 
1948). The constructive inference is local, not sceptical. Encode 
the question; declare the horizon; compute only effective or 
budgeted predicates; let non -answer be a typed success; pre-
serve the path by receipt; keep permission external. Formal limi-
tation becomes an engineering obligation. This also separates 
the proposal from classical epistemic logic. Modal formalisms 
reason about knowledge or belief; the present evaluator com-
putes a claim’s institutional standing under source, transfor-
mation, validation, resource, and authority contracts. Epistemic 
logic may supply one local rule language inside the horizon, not 
the complete use -governance semantics (Hintikka, 1962; Fagin 
et al., 1995, 1997). Figure 1 marks the formal boundary; the 
positive contract chain follows the section order and is summa-
rised in Table 1A. 
 
Figure 1. Reading rule: the upper row states four formal limits; the lower block 
states the local engineering response. Forbidden inference: the limits neither 
prove this architecture nor imply universal unknowability. 
 
1.2 Claim classes 
Every load -bearing statement belongs to one of six classes. 
STANDARD RESULT credits an established theorem instanti-
ated locally. LOCAL PROPOSITION is derived inside the pre-
sent definitions. CONFORMANCE INVARIANT holds only 
under its stated mediation and integrity premises. NON -
ENTAILMENT marks what the architecture cannot infer. 
EMPIRICAL TARGET states a preregisterable comparison and 
its defeat condition. WITNESS shows constructibility, not va-
lidity or superiority. The labels implement Popperian loss condi-
tions and prevent a diagram, prototype, or polished proof object 
from borrowing the authority of a theorem or experiment (Pop-
per, 1959). 
 
Residual contribution.  The candidate delta separates evidence 
status, Epistemic Debt, terminal state, permission, and conse-
quential action. It also tests horizon adequacy before permis-
sion, preserves reason -typed non-answer and candidate/certified 
states, binds permissive outcomes to one current action, and 
removes any named layer whose complete export is reconstruct-
ed more simply. Each item is defeated by a matched baseline 
that provides the same diagnostics and protection with lower 
burden. 
 
2. Computational semantics of status, use, and ac-
tion 
2.1 The claim-admissibility object 
Standard computation is not extended by fiat; its input and out-
put types are. Once sources, claims, rules, policies, receipts, and 
budgets have finite encodings, an ordinary effective evaluator 
can compute a bounded status object. Computational semantics 
here names the subject matter and typed codomain of that eval-
uator, not a new model of computation. The first stage records 
what the claim has earned and what remains unresolved. The 
second decides what one use may do. Neither stage computes 
metaphysical truth. 
Let the epistemic horizon be the typed record 
 
 
ℋ = (𝑆, 𝛺, 𝑄, 𝒯, 𝑅ρ, 𝑀, Val, 𝛱), 
 
Here S is the versioned set of admitted sources; Ω is the scope; 
Q the query families; and 𝒯 the allowed transformations. R_ ρ 
specifies required receipt types, M decidable support -and-
contradiction rules, Val validation procedures, and Π con-
flict/priority policy. Scope and source set are different types; no 
relation such as Ω ⊆ S is assumed. The resource contract is a 
vector or policy, not merely a scalar. 
Definition (well-formed horizon). WF(𝓗) requires typed, ver-
sioned fields. Where computation is claimed, transformations 
and validation procedures are effective on their declared do-
mains. Receipt schemas match required and produced receipts. 
Invoked support/contradiction rules are decidable, and Π covers 
declared conflicts. WF( 𝓗) says the contract can be evaluated, 
not that it is sufficient for a use. 
Well-formedness is not use adequacy. Write adequate(𝓗,U,A) when 
𝓗 satisfies the externally governed minimum -horizon contract for 
named use U under authority context A. WF( 𝓗) does not entail ade-
quate(𝓗,U,A). 
 
𝐵 = (𝑏time, 𝑏steps, 𝑏memory, 𝑏cost, 𝑏calls, …). 
 
A semantic object v carries at least 
 
𝑥(𝑣) = ⟨type, version, ℋ, sources, 
evidence, debt, authority, revocation⟩. 
 
The local semantics of claim admissibility is 
 
CSℋ,𝐵(𝑐) → EvidenceStatus × DebtVector 
× Terminal × Receipt. 
 
DebtVector—hereafter Epistemic Debt —is the componentwise 
residual-warrant object; Section 7 develops its coding, propaga-
tion, discharge, and validation. A minimal evidence vocabulary 
distinguishes Uncomputed, ComputedUnsupported, Supported-

## Page 3

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
3 
 
NotValidated, Validated, Contradictory, and OutOfScope. The 
terminal sum is defined below. 
 
Term(𝑌) = Answer(𝑌) + Unknown + Contradiction 
+ OutOfHorizon + Review + Timeout + Failure. 
 
The semantic evaluator is partial unless each invoked operation 
is effective. Under a budgeted dispatcher it is totalised into 
Term(Y), not into Answer(Y). A responsible timeout or contra-
diction is therefore a successful typed computation. 
Permission is a second computation. For named use U, govern-
ance context C_g, and an externally governed minimum -horizon 
contract α(U), 
 
Gate𝑈,Cg (ℋ, CSℋ,𝐵(𝑐), 𝛼(𝑈))  → GateOutcome. 
 
with GateOutcome ∈ {Warranted, PermittedWithWaiver, Re-
viewRequired, HorizonInadequate, Blocked} and a Ga-
teReceipt. The gate first tests adequate( 𝓗,U,A). A well -formed 
but narrow horizon may still be unfit for the requested use. Evi-
denceStatus records what evidence and checks earned. Epistem-
ic Debt records what remains unpaid. GateOutcome records 
what one use may do. Confidence is only a model -side estimate; 
it is neither evidence status nor permission. Figure 2a isolates 
claim-state computation from named -use permission and expos-
es the certificate boundary. 
The epistemic head is only a rendering and routing boundary: 
 
HeadOutput = render of ⟨EvidenceStatus, DebtVector, 
Terminal, optional GateOutcome⟩. 
 
It presents or invokes the relevant computations; it does not 
certify its own inputs, decide truth, or manufacture authority. 
 
Figure 2a. Reading rule: ClaimState is computed before and independently of 
permission for a named use; only a permissive outcome may issue a current 
ActionCertificate. Forbidden inference: evidence status or debt alone authorises 
action. 
 
2.2 Action certificates, canonical export, and invariants 
For a consequential action a, a permissive gate outcome is not 
yet executable. An ActionCertificate is an abstract, single -action 
authorisation token. It binds permission to one exact action and 
one current control state; it is not proof, truth, or legitimacy. Its 
integrity/authenticity binding is implementation -specific—for 
example, a digital signature, MAC, protected local state, trans-
action identity, or trusted channel: 
 
CertU = ⟨claim_id, object_ver, ℋid, policy_id, 
use_id, action_hash, authority_id, resource_scope, 
expiry, nonce, GateOutcome⟩. 
 
Execution is a separate bounded transition: 
 
Exec(𝑎, 𝑠, CertU) ⇀ (𝑠′, Receiptexec) 
+ Review + OutOfHorizon + Failure. 
 
Exec is admissible only when hash(a) and all load -bearing ob-
ject, horizon, policy, authority, credential, scope, expiry, nonce, 
and resource fields still match Cert_U. Gate evaluation and dis-
patch must be atomic with respect to those fields. Otherwise a 
commit-time check must establish that none changed. Any 
mismatch returns Review or Failure; a previous certificate can-
not be replayed against a new state. This is ordinary systems 
engineering coupled explicitly to evidence, debt, and named 
use. 
 
Figure 2b. Reading rule: current-state binding is checked before effect; bounded 
dispatch then emits an execution receipt and triggers post-state revalidation. 
Forbidden inference: successful execution, or a stale certificate, establishes 
legitimacy. 
 
Every layer exports a common audit envelope: 
 
ExportB = ⟨value_or_terminal, 𝜌, 𝛥𝐸, 𝛥𝑑, 
policy/version, threat/authority metadata, 
action_binding, resource_cost, 𝑄-observables⟩. 
 
Here ρ is the receipt, ΔE the evidence -state effect, and Δd the 
debt effect. For non -consequential outputs, action_binding is 
absent. When action is possible, it records the certifi-
cate/dispatch relation. This envelope supports composition and 
relative layer removal. A named layer is dispensable when adja-
cent components reconstruct its entire export for the declared 
query family without weakening terminals, receipts, debt, action 
binding, threat/authority metadata, resource accounting, or gate 
outcomes. Conformance is tested family by family. The matrix 
below states the premise each family requires and one negative 
test that should make failure visible. These are not global cor-
rectness guarantees. 
Invariant family Required premise → negative test 
Boundedness Current 𝓗 and B identify the run → remove/change 
either and require refusal or re-evaluation. 
Query relativity Q is declared → find one fibre with equal image but 
different q-values. 
Terminal com-
pleteness 
Every unresolved condition maps to Term → delete a 
mapping and test whether Answer is fabricated. 
Candidate/certified 
separation 
Certification needs external authority and receipt → 
relabel Candidate as Certified. 
Receipt continuity State changes expose inputs, policy, effects, and failure 
→ remove one required receipt field or readback. 
Debt conservation Relevant dependencies and Join_Pd are complete 
enough → seed a hidden edge or unreceipted debt drop. 
Authority separa-
tion 
Authority, scope, freshness, and revocation are current 
→ let executor self-certify or reuse stale authority. 
Pre-action media-
tion 
Current Cert_U is bound to dispatch → bypass, substi-
tute, replay, or duplicate the action. 
Version invalida-
tion 
Load-bearing versions are tracked → mutate source, 
model, policy, or horizon after certification.

## Page 4

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
4 
 
2.3 One complete path: a supplier-control claim 
Worked specification, not outcome evidence. Let c be “pay-
ments above the threshold require CFO approval.” The path 
below uses illustrative candidate debt codes to show where one 
claim changes state. 
Stage Supplier-control state and visible loss condition 
1 · Horizon / 
sources 
𝓗_narrow admits two interviews. 𝓗_assurance also re-
quires written policy, exception procedure, transaction 
sample, and independent reviewer. Both may be WF; only 
the stronger horizon may be adequate for formal assurance. 
2 · ClaimState 
Under 𝓗_narrow: SupportedNotValidated + Answer(c) + 
receipt ρ₁. The receipt links both interviews and the extrac-
tion transform. 
3 · Candidate 
debt 
Illustrative only: d=(0,0,1,1,2,0,2,?,2) for source, trace, 
transformation, collapse, label, reification, validation, 
authority, horizon/scale. “?” is unassessed, never clean. 
4 · Named-use 
gate 
Drafting use may be ReviewRequired or Permitted-
WithWaiver. Formal control assurance is HorizonInade-
quate until its minimum contract is met. 
5 · Certificate 
No certificate is issued for an automatic policy update 
while the gate is non-permissive. After discharge and 
Warranted, Cert_U binds the exact action and current 
versions. 
6 · Commit / 
execution 
Any changed object, policy, authority, credential, action 
hash, expiry, or nonce returns Review/Failure. Bounded 
dispatch emits Receipt_exec and post-state revalidation. 
7 · Simpler 
baseline 
Endpoint-matched baseline: provenance + assurance for 
reconstruction; add selective prediction for non-answer 
and firewall or transactional control for action. It wins if 
every tested state and refusal is reconstructed at lower 
burden. 
Under 𝓗_narrow, the claim can be SupportedNotValidated 
while the horizon remains inadequate for formal assurance. An 
internally correct evaluation can therefore refuse permission 
because the contract is too weak for the named use. The strip 
below projects that lifecycle across domains; it is illustrative, 
not evidence. 
 
Context Epistemic state capsule Boundary 
Scientific 
synthesis 
Debt: transformation / validation / 
horizon may be open. Gate: Re-
viewRequired; HorizonInadequate if 
the stronger named use fails adequacy. 
No numeric d. 
Clinical deci-
sion support 
Debt: validation / authority / horizon 
open; transformation may be open. 
Gate: ReviewRequired or Hori-
zonInadequate for diagno-
sis/treatment. 
Hypothetical; no 
clinical authority. 
Low-risk e-
commerce 
Debt: fit / validation may be open. 
Gate: Warranted only if adequacy and 
policy hold; display-only use needs no 
action certificate. 
Low risk is not d=0. 
 
Coding guardrail.  These are qualitative profiles, not numeric d; cod-
ing requires a declared record, and absent debt fields mean not repre-
sented/not assessed, never d=0. Integration discriminator.  Match 
each baseline to its endpoint; remove the added layer if the matched 
composition reconstructs the same state and refusal at lower burden. 
3. Scientific representation across levels 
Scientific practice rarely represents a domain through one com-
plete description. Models idealise, select variables, mediate be-
tween theory and experiment, and coexist for different purposes; 
in biology, no causal level is privileged in advance (Noble, 
2012). Model -based and perspectival accounts make adequacy 
purpose- and question -relative. Blackwell comparison and ab-
stract interpretation provide rigorous ancestors for task -relative 
informativeness and sound abstraction (van Fraassen, 1980; 
Giere, 1988; Blackwell, 1953; Cousot & Cousot, 1977; Weis-
berg, 2013; Frigg & Nguyen, 2020). The representation contract 
used here—Reticular Local Abstraction (RLA) —takes no posi-
tion on final ontology. It types scientific levels and requires eve-
ry cross-level inference to declare what it preserves, what it los-
es, and for which queries. 
A level is 
𝐿i = ⟨𝐷i, 𝛴i, 𝑄i⟩, 
 
where D_i is a typed state domain, Sigma_i the admitted opera-
tions or dynamics, and Q_i the admissible queries. A transmis-
sion tau_ij:D_i ⇀ D_j is a partial or stochastic scientific opera-
tion, not an ontological bridge. Each edge declares domain, co-
domain, query family, side information, tolerance, randomness, 
receipt, rollback, and open debt. The residual content of the con-
tract is therefore not that levels exist; it is that representational 
adequacy, loss, and transfer are made inspectable at their inter-
faces. 
STANDARD RESULT 1 — query factorisation.  For deter-
ministic τ:X→Y and q:X→A, exact preservation of q through 
τ holds iff q is constant on every fibre of τ. Equivalently, there 
exists q̄ :im(τ)→A such that q = q̄ ∘τ. Extending q̄  to all of Y 
requires an additional assumption and is not part of the result. 
Full state recovery is the special case where Q separates all 
source states. Thus injectivity is sufficient for every point -
separating query, but far stronger than query-relative fidelity. 
Proof sketch. Define q̄ (τ(x)) = q(x) on im( τ). Constancy of q on 
every fibre makes q̄  well-defined; conversely, q = q̄ ∘τ immedi-
ately implies fibre constancy. The result is ordinary factorisa-
tion, not a new information theorem. 
Approximate fidelity must name a metric and tolerance. For q 
with codomain metric d_q, 
 
𝛥q(𝜏) = sup
𝑦 ∈ im(𝜏)
 sup
𝑥,𝑥′ ∈ 𝜏-1(𝑦)
 
𝑑q(𝑞(𝑥), 𝑞(𝑥′)) ≤ 𝜀. 
 
For a stochastic transmission P_τ:X ⇝Y, recovery requires a 
decoder kernel D:Y ⇝A_q, loss ℓ, input law μ, and tolerance ε, 
for example 
 
𝔼𝑥∼𝜇, 𝑦∼𝑃τ(·|𝑥), 𝑎∼𝐷(·|𝑦)[ℓ(𝑎, 𝑞(𝑥))] ≤ 𝜀. 
 
A recorded seed can replay one realised run; it does not estab-
lish distributional validity. A material change in the input law 
activates version invalidation. Shannon information and infor-
mation-bottleneck objectives quantify uncertainty or compres-
sion, not evidence, authority, or use (Shannon, 1948; Tishby, 
Pereira, & Bialek, 1999). Causal abstraction is stronger when-
ever interventions and causal semantics belong to Q, especially 
under lossy, mechanistic, compositional, distributionally robust, 
or cross -population transport settings. Current work provides 
component-level abstractions and approximate robustness certif-
icates. Model-level transport maps can also bound target queries 
when exact transport fails (Beckers & Halpern, 2019; Beckers, 
Eberhardt, & Halpern, 2020; Geiger et al., 2025; Xia & Barein-
boim, 2025; Felekis et al., 2025, 2026; Lorenz & Tull, 2026). In 
that regime RLA survives only as the lifecycle contract coupling 
query fidelity to receipts, residual warrant, and named use. It is 
removed if the causal formalism supplies that export more simp-
ly. 
Non-injectivity alone does not establish emergence. A constant 
map is maximally many -to-one yet creates no scientifically sig-
nificant macro-property by itself. A defensible emergence claim 
must declare micro - and macro -languages, admissible algo-
rithms, resource bounds, encodings, and invariance under rea-
sonable recodings (Anderson, 1972; Shalizi & Crutchfield,

## Page 5

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
5 
 
2001). No later result in this paper depends on an emergence 
theorem. Collapse matters here because it blocks queries, 
changes reconstruction cost, and can generate debt when lost 
distinctions are later required. 
4. Executable bounded evaluation 
Compact Reticular Computability (CRC) is not a computability 
class; it is an acceptance contract for an executable bounded 
reticulum. The representation contract states what a scientific 
model preserves, loses, and for which questions. CRC asks a 
different question: has that typed reticulum been compiled into a 
standard effective transition system that can finish honestly? It 
requires an effective presentation of typed states and operators, 
a scheduler, a resource policy, a terminal sum type, receipts, and 
bounded adapters for external operations. “Compact” means 
operationally specified and auditable, not finite reality, complete 
science, or metaphysical closure. Define 
 
CRC = ⟨ℛ, 𝛤, 𝜎, 𝐵, Term, ℋ⟩, 
 
where 𝓡 is the typed reticulum, Γ the configuration space, σ an 
effective scheduler, B the resource policy, Term the terminal 
sum, and 𝓗 the horizon. A configuration includes the current 
node, typed local value, evidence and governance state, immu-
table ledger prefix, policy identifier, and remaining resources. 
CRC separates three obligations that are often conflated. Local 
effectivity: every operator and edge is computable on its de-
clared finite encoding or returns a terminal. Budgeted totalisa-
tion: a dispatcher tracks a rank ν:Γ×B→W into a well -founded 
set W; every nonterminal step strictly decreases ν or consumes 
finite budget, and operational faults map to Timeout or Failure. 
External calls must be cancellable or time -bounded, or must 
return control to a timeout -capable asynchronous dispatcher. 
Global termination: an acyclic graph with terminating nodes 
suffices; a cyclic network additionally needs a well -founded 
rank, bounded iteration, fixed -point criterion, or explicit 
timeout. Local termination does not compose automatically: two 
individually terminating units can alternately re -enable one an-
other forever. 
LOCAL PROPOSITION 2 — budgeted totalisation.  As-
sume effective local transitions and scheduling. Every nonter-
minal dispatch must strictly decrease a well -founded rank or 
consume finite budget. Every external operation must use a 
bounded/cancellable adapter or timeout -capable dispatcher, 
and every operational exception must map into Term. Under 
these premises, the wrapped evaluator terminates with exactly 
one typed terminal for every finite admissible input. Proof 
sketch: no infinite strictly descending chain exists in W; finite 
budget exhaustion maps to Timeout; adapter and operational 
faults map to Failure. Without progress, interruption, or 
timeout, the evaluator remains partial (Church, 1936; Turing, 
1936/1937; Plotkin, 2004; Baier & Katoen, 2008; Leucker & 
Schallhart, 2009). 
Gödel, Turing, and Rice now do different work. Gödel blocks 
promotion of internal proof into complete self -certification. Tu-
ring requires the evaluator to expose partiality, nontermination, 
and budgets. Rice forbids a universal decider for non -trivial 
extensional program properties but leaves syntactic checks, fi-
nite domains, and explicitly restricted predicates available. CRC 
is thus an operational contract for where ordinary computation 
may answer and where it must return a typed boundary. 
Type soundness divides into preservation and progress -or-
terminal. Edge well -typedness preserves the configuration type 
across a transition; terminal completeness ensures that a well -
typed nonfinal configuration either advances or returns a de-
clared terminal. This is continuous with operational type -
soundness and model -checking methods, not a new theorem 
about arbitrary workflows (Wright & Felleisen, 1994; Clarke, 
Grumberg, & Peled, 1999). 
STANDARD REDUCTION / OBSTRUCTION 3.  Let p be 
an undecidable predicate on X and τ:X→Y computable. If p = 
p̄ ∘τ, then p̄  cannot be decidable, or p would be decided by 
composition. Conversely, if τ(x)=τ(x′) while p(x)≠p(x′), no 
target-only decoder can answer p correctly on both states. A 
collapse can therefore block a hard query; it does not solve it. 
Rice’s theorem constrains nontrivial extensional properties of 
arbitrary programs, not every bounded predicate in a domain -
specific CRC (Rice, 1953). 
4.1 The bryophyte model as a compilation and falsification 
stress test 
A generalist bryophyte model is used only as a compilation 
stress case. It is chosen because the domain combines heteroge-
neous sources, cross -taxon and cross -scale transfer, feedback 
cycles, calibration gaps, and observable -family tests —not be-
cause bryology is central to the general theory. Bryophytes link 
desiccation tolerance, photosynthetic recovery, cellular stress, 
tissue and colony structure, substrate, microclimate, reproduc-
tion, and biotic interaction across heterogeneous literatures 
(Proctor, 2001; Oliver, Velten, & Mishler, 2005; Glime, 2007). 
A literature -derived reticulum can encode twenty abstraction 
levels, forty-two parameters, update rules, thresholds, scenarios, 
and a finite execution loop. This witnesses constructibility; it 
does not show that the plant has been reproduced or that the 
selected literature is complete. 
Scientific relations rarely arrive as interoperable code. A needed 
relation may be directly measured, transferred from a neigh-
bouring taxon, reported only as a range, synthesised from sever-
al sources, approximated by the compiler, or unresolved. These 
are orthogonal dimensions rather than one status: 
 
RelationRecord = source_basis × compiler_ops 
× calibration_state × target_use × locator 
× conditions × observable_family × discharge_test. 
 
source_basis ∈ {Direct, Transferred, Synthesised, Unresolved}; 
compiler_ops is a set that may contain Approximated; calibra-
tion_state records what was actually fitted or tested; target_use 
declares what the relation may currently support. “Direct” does 
not imply validated; “transferred” may also be approximated. 
The record activates component -specific debt but does not as-
sign severity automatically. 
For example, a low -surface-water → ABA relation can be Di-
rect or Transferred, independently carry compil-
er_ops={Approximated}, and remain Uncalibrated for the target 
microclimate. A smooth executable curve therefore does not pay 
transfer or calibration debt; it only makes those obligations test-
able. 
EMPIRICAL TARGET — observable-family discrimina-
tion. Synthetic and empirical trajectories may be compared 
under preregistered observables, sampling conditions, thresh-
olds, expert tasks, and trivial baselines. Failure to discriminate 
supports adequacy only for that observable family. It does not 
establish biological equivalence, total closure, or a privileged 
ontology. Conversely, failure defeats the declared implementa-
tion or observable -family adequacy claim, not every complex -
system application of the framework. The model is valuable 
because it turns missing science into addressable calibration 
and validation obligations.

## Page 6

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
6 
 
Executable falsification surface. The ROA Bryophyte Epistemic 
Lab v9 compiles Annex B into a standalone browser runtime 
with twenty levels, forty -two parameters, seeded replay, inter-
ventions, halting, trace export, and provenance labels. 
SOURCE, MODEL_DEFAULT, REPAIR, and DEBT_OPEN 
remain distinct. Domain experts can challenge the implementa-
tion through blind real -versus-synthetic discrimination, climate 
and recovery tests, parameter mutation, reticular -closure tests, 
trace removal, horizon transfer, and matched simpler baselines. 
Passing internal checks establishes constructibility and recon-
structability only; biological adequacy remains an external em-
pirical obligation. 
The optional PCE/cellular -automata bridge is outside the causal 
spine. A cross -formalism equivalence claim requires a bounded 
simulation certificate naming source and target systems, encod-
ing, observables, distortion, overhead, and trace horizon. It must 
also state reverse obligations when equivalence, rather than one -
way simulation, is claimed. Visual or dynamical resemblance 
alone carries no standing. 
5. Local epistemic transduction 
Local epistemic transduction is the smallest governed operation 
in the lifecycle. Neural implementation is optional, and candi-
date generation may be stochastic; the surrounding control con-
tract must remain effective and auditable. An Epistemic Compu-
tational Unit (ECU) does not “understand” by declaration. It 
applies effective transformations and policy checks to finite 
encodings of claims, evidence, context, and resources under a 
versioned epistemic matrix 
 
𝑀u = (𝐸u, 𝑅u, 𝐶u, 𝑃u), 
 
where E_u names domain entities, R_u inference rules, C_u 
coherence/contradiction constraints, and P_u abstention, rejec-
tion, escalation, and fallback policies. M_u is a local rule -and-
policy object; it is not organisational authority. The unit then 
emits a typed value, evidence/debt effects, a receipt, or a non -
answer terminal: 
 
𝑢: 𝑋 × ℋ𝑢 × ℰ × 𝐶g × 𝐵 ⇀ (𝑌 × 𝜌 × 𝛥ℰ × 𝛥𝑑) + Term(𝑌). 
 
Each ECU declares an effect mask Eff_u=(Read_u,Write_u). 
The receipt lists the fields actually read and changed. A unit 
cannot silently modify certification, authority, policy, revoca-
tion, or an unrelated debt component merely because its output 
schema contains those fields. This makes epistemic state change 
an auditable effect rather than prose surrounding a model call. 
A generic local semantic aggregation makes the “convolution” 
analogy operational: 
 
ℎ𝑘+1(𝑣) = Aggk ⟨𝑢𝑘,𝑚(ℎ𝑘(𝑤), 𝑀𝑘,𝑚) : 
𝑤 ∈ 𝑁k(𝑣), 𝑚 ∈ 𝐼k⟩. 
 
Neighbourhood N_k(v), local operators u_{k,m}, and aggrega-
tion Agg_k are declared and typed. They may be neural, sym-
bolic, database, human-review, or mixed operators; the equation 
is a semantic local -operator schema, not a claim that ECNN 
requires CNN layers. 
Historically termed an Epistemic Convolutional Neural Network 
(ECNN), the typed reticulum preserves only a non -constitutive 
CNN analogy. Local receptive fields become local semantic 
operators; pooling becomes declared collapse; feature stabilisa-
tion becomes candidate reification (LeCun et al., 1998; Goodfel-
low, Bengio, & Courville, 2016). The reticulum contains ECUs, 
representation operators, a scheduler, an epistemic head, and a 
visible state register. It may use neural models, symbolic rules, 
databases, humans, or mixed services. Its distinctive claim is a 
common epistemic interface, not a new neural primitive. 
 
𝒩 = ⟨𝑉N, 𝐸N, 𝜆, 𝜅, 𝜎, Pol⟩, 
 
where V_N is the versioned semantic -object set and E_N the 
typed edges. λ assigns abstraction level. κ assigns epistemic 
state: candidate_AI, certified_human, disputed, superseded, 
unknown, or contradiction. σ is the scheduler; Pol is the poli-
cy/validation bundle. 
The architecture has two planes. A probabilistic proposal plane 
may retrieve, classify, summarise, induce a label, or propose a 
relation. Every stochastic output is persisted as a candidate 
event with input, model, configuration, and output hashes. A 
deterministic control plane checks types, permitted transfor-
mations, query fidelity, contradictions, receipts, policy, and gate 
conditions. Deterministic replay is claimed only for the control 
plane when sources, operators, scheduler, budgets, policies, and 
recorded exogenous proposals are fixed. Temperature zero or a 
named checkpoint is not proof of bit-level reproducibility. 
 
Candidate(𝑣, 𝜌p) →
Certify𝑎,𝜋,𝜌c
 Certified(𝑣, 𝜌p, 𝜌c). 
 
Certification is an externally authorised, policy -governed, re-
ceipted state transition. The actor or validator a, policy π, and 
certification receipt ρ_c are recorded; schema validity, fluency, 
model confidence, or repeated agreement cannot self -certify a 
candidate. 
The epistemic head renders EvidenceStatus, DebtVector, Ter-
minal, and —when a use is named —GateOutcome. It may in-
voke the gate but does not form a truth judgement or self -
certify. This places ECU/ECNN beside partial transducers, 
many-valued or epistemic logic, truth -maintenance, and 
knowledge-based programs. It also overlaps neural -symbolic 
reasoning, selective prediction, calibration, conformal predic-
tion, semantic uncertainty, provenance, and human review 
(Belnap, 1977; Doyle, 1979; Fagin et al., 1997; d’Avila Garcez, 
Gabbay, & Lamb, 2012; Chow, 1970; Guo et al., 2017; Vovk, 
Gammerman, & Shafer, 2005; Farquhar et al., 2024; Wen et al., 
2025). Those methods can inhabit or replace the layer. The re-
sidual interface is reason -typed non -answer, receipted effects, 
candidate/certified separation, and downstream preservation. 
CONFORMANCE INVARIANT 4 — typed non -answer 
and certification preservation. In a well-typed ECU network, 
no edge or scheduler rule may coerce Unknown, Contradic-
tion, OutOfHorizon, Review, Timeout, or Failure into Answer. 
Nor may it promote Candidate to Certified without an explicit 
state-changing event that supplies the missing evidence, reso-
lution, authority, or policy transition and emits a receipt. Type 
preservation is machine -checkable; evidential adequacy still 
depends on complete enough dependencies and valid external 
inputs. Delete or relabel a non -answer or candidate on one 
edge: if an authoritative answer remains possible, the network 
has an epistemic type error. 
The distinctive ECNN claim is therefore not abstention alone. It 
is reason -typed non -answer plus a receipt, downstream preser-
vation, candidate/certified separation, and use -sensitive routing. 
The layer is empirically unnecessary if a simpler reject option or 
workflow provides equal diagnosis, reconstruction, and protec-
tion with lower burden.

## Page 7

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
7 
 
6. Observer compilation and meta-control 
Persistent observer composition turns local contracts into a ver-
sioned, reconstructable system. The resulting observer con-
tract—called a Reticular Observer Architecture (ROA) —is not 
merely a graph. Observer compilation is the map 
 
Compile(Field, ℋ, Policy) → 𝑂 + ObserverManifest, 
where 
𝑂 = ⟨ℋ, ℛ, 𝒩, Mem, Mon, Threat, Gov, Auth, 𝐵⟩. 
 
The manifest includes a type environment, source manifest, 
invariant registry, claim -to-evidence map, terminal and failure 
policy, authority map, monitoring plan, action -surface invento-
ry, and rollback/revocation plan. Given a query, O returns a 
reconstructable path, terminal, receipt, and effects rather than a 
free-standing string. The answer is the path: persistent interme-
diate artefacts - definitions, atoms, candidate relations, contra-
dictions, reviews, waivers, and revocations - make cumulative 
intelligence reside in the governed substrate and accountable 
human decisions. Generative models remain replaceable pro-
posers and navigators; they do not own the knowledge or certi-
fication state. A candidate becomes reusable only through a 
receipted reification transition; that transition is where represen-
tational loss, status promotion, and downstream warrant become 
jointly addressable. 
Observer compilation is maintained by semantic CI/CD. Source 
manifests, schemas, query contracts, candidate labels, depend-
ency edges, validators, and authority roles are versioned and 
diffed. Action surfaces and gate thresholds are versioned too; 
negative tests challenge changes, with rollback or revocation 
paths retained. Intermediate artefacts remain first -class. The 
proof chain is source → transformation → receipt/readback → 
evidence status → witness/review → named -use decision → 
action certificate → execution receipt. Correctness is checked at 
the relevant boundary, and an artefact may travel with a checka-
ble certificate; receipts are not thereby formal proofs (Saltzer, 
Reed, & Clark, 1984; Necula, 1997). Output is not proof, and 
confidence is not evidence. A log is not automatically a receipt; 
export is not witness; review is not approval. Model memory is 
not a source of truth. Anti -false-green tests remove a source, 
receipt, reviewer, dependency, policy version, or certificate field 
and require authoritative success or dispatch to disappear. 
ROA is constrained by provenance, runtime verification, assur-
ance cases, proof -carrying execution, and end -to-end system 
principles. Provenance models entities, activities, agents, and 
derivations. Runtime verification checks declared properties of 
observed runs. Assurance cases organise claims, arguments, 
evidence, and defeaters. Algorithmic audits make lifecycle ac-
countability explicit (Buneman, Khanna, & Tan, 2001; Cheney, 
Chiticariu, & Tan, 2009; Leucker & Schallhart, 2009; Bloom-
field & Bishop, 2010; Raji et al., 2020; Paterson et al., 2025; 
Saltzer, Reed, & Clark, 1984; Necula, 1997). ROA adds no war-
rant by naming these ingredients. Its candidate delta is the cou-
pled export of typed terminals, evidence effects, residual debt, 
horizon adequacy, authority, revocation, action binding, and 
named-use permission. Artificial epistemic agents, execution 
provenance, agent trails, and certified traces are comparator 
families, not supporting evidence (Marchal et al., 2026; Liu 
Yanglet, Wang, & Capponi, 2026; Wang et al., 2026; Wu et al., 
2026). If those systems and composable assurance reconstruct 
Export_B with lower burden, ROA should be compressed or 
removed (Zhao, 2026). 
Monitoring never establishes completeness. Non -laundering 
requires complete mediation of authoritative -use and conse-
quential-action paths, trace integrity, current versions, visible 
revocation, sufficient dependency coverage, role separation, and 
detectable bypasses. NIST documents fragmented logs, human 
burden, drift, and immature monitoring methods as practical 
threats to those premises (Rao et al., 2026). The governing max-
im is symmetrical: the horizon protects computation from infla-
tion, while the named -use/action gate protects the institution 
from a self -serving horizon. A perfect internal trace with one 
unmonitored export or tool surface is still an incomplete observ-
er. 
6.1 Pre-action mediation and bounded execution 
For an acting system, a consequential tool call is itself a named -
use transition. ROA must interpose before effect: the gate issues 
an ActionCertificate only for a specific action hash and current 
object, horizon, policy, authority, credential, scope, and re-
source versions. Gate evaluation and dispatch are atomic with 
respect to those fields, or they are revalidated at commit. Ap-
prove-then-mutate, stale -certificate replay, duplicate non -
idempotent dispatch, or changed credentials therefore refuse or 
reopen review. Hanging tools must be cancellable/time -bounded 
or return control to a timeout -capable dispatcher. Partial multi -
step effects require declared idempotency, rollback, or compen-
sation semantics. AEGIS, certified traces, and agentic -
transaction systems are direct substitution baselines for this ac-
tion-control surface (Yuan, Su, & Zhao, 2026; Liu Yanglet, 
Wang, & Capponi, 2026; Sun, Wang, & Li, 2026). 
6.2 Governance meta-control 
At the governance boundary, the governance meta -controller is 
a computational controller, not a moral agent, truth oracle, or 
self-authorising authority. Its state is 
 
𝑧t = (𝑊t, 𝑆t, 𝐾t, Histt), 
 
where W is the world/evidence model, S the operational self -
model of limits and reliability, K the versioned normative ker-
nel, and Hist the epistemic history. New evidence e_t and an 
authorised intervention a_t update the state: 
 
𝑇(𝑧t, 𝑒t, 𝑎t) → 𝑧𝑡+1. 
 
Case synthesis and system-level escalation are distinct: 
 
Gcase(𝑧t, 𝑞t) → CaseArtifact, 
Gcrit(𝑧t, tracet) → EscalationArtifact. 
 
A critical output carries an EscalationReceipt(owner, reason, 
evidence_gap, required_authority, expiry_or_next_action). Es-
calation may interpose before effect, not only report after com-
pletion. The human decision is an external, versioned, receipted 
state-changing event whose authority and scope are recorded 
back into Hist; it is not another model inference. The controller 
monitors coverage, conflicts, resource state, drift, policy trig-
gers, unresolved debt, queued effects, and stop requests. “Meta-
cognitive” is used only in this engineering sense. Its roots are 
resource-bounded metareasoning, autonomic control, runtime 
monitoring, and evidence that active human participation can 
surface errors missed by post -hoc review (Russell & Wefald, 
1991; Kephart & Chess, 2003; Leucker & Schallhart, 2009; 
Sabouri et al., 2026).

## Page 8

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
8 
 
NON-ENTAILMENT 1 — execution does not establish le-
gitimacy. Let K_1 and K_2 be internally consistent normative 
kernels with incompatible prescriptions for the same case. A 
conforming evaluator can prove that a run followed K_1 or 
K_2. Execution alone cannot choose which kernel is legitimate 
without external authority, contestation, effective -date, and 
revocation relations. The governance meta -controller can ex-
pose the boundary and route escalation; it cannot authorise it-
self or decide moral truth. 
7. Residual warrant and use gating 
The preceding stages represent, evaluate, certify, and compose 
semantic objects. Epistemic Debt is the cross -cutting accounting 
remainder that survives those transformations until typed dis-
charge or a bounded, visible waiver. The phrase predates this 
framework and has been used for technical ignorance in smart 
manufacturing; debt metaphors also inherit from software and 
machine-learning engineering (Ionescu, Schlund, & Schmid-
bauer, 2019; Cunningham, 1992; Sculley et al., 2015). The moat 
is not the name. It is the typed separation among EvidenceSta-
tus, componentwise unpaid warrant, GateOutcome, and waiver. 
The construct is an accounting layer for the bounded semantics, 
not a probability of falsehood or a moral score. 
Controlled reification is the transition that makes debt attacha-
ble. A pattern, sentence, relation, or label becomes manipulable 
only after it receives stable identity and construction metadata. 
The record names its source pattern, transformation operator, 
lost distinctions, evidence state, allowed and refused uses, own-
er, and rollback or discharge route. Reification is not an error: 
cumulative science and institutional work require reusable ob-
jects. The failure is silent status promotion —an AI candidate 
treated as a validated control, a transferred equation treated as 
locally established, or a summary treated as the underlying evi-
dence. The object may exist before it is warranted, but it must 
carry the conditions of its construction. This is the local bridge 
from semantic computation to the accounting layer. 
 
𝐝 = (𝑑s, 𝑑t, 𝑑x, 𝑑c, 𝑑l, 𝑑r, 𝑑v, 𝑑a, 𝑑h) ∈ {0, 1, 2, 3, ?}9. 
 
The vector covers source, trace, transformation, collapse, label, 
reification, validation, authority, and horizon -or-scale debt. The 
symbol ? means unassessed, not infinite or zero. The vector is a 
candidate ordinal/categorical coding instrument, not an interval 
scale, semantic-entropy estimate, or probability of error. Seman-
tic uncertainty is distinct even when its detection is useful (Far-
quhar et al., 2024). Each component has its own diagnostic and 
discharge path; summing them can destroy that path. 
Minimal coding contract.  0 means the obligation does not arise under 
the horizon. 1 marks a documented bounded caveat; 2 a material unre-
solved obligation; 3 a critical unresolved structural obligation. ? means 
unassessed because coverage is insufficient. The codes are use -
independent obligation states, not gate verdicts or additive scores. They 
remain candidate anchors pending a coding manual, training set, adju-
dication rules, and independent componentwise reliability. 
Debt compo-
nent Diagnostic question → typical discharge 
Source Required sources admitted, current, and located? → at-
tach/verify or narrow scope. 
Trace Derivation and replay reconstructable? → repair receipt, 
provenance, and readback. 
Transformation Operations explicit and fit for use? → verify operator, ver-
sion, approximation, and effects. 
Collapse Which merged distinctions are later needed? → preserve 
side information/decoder or restrict use. 
Label Does the name overstate evidence, scope, or modality? → 
relabel. 
Reification Candidate promoted without a receipted transition? → rec-
ord identity, owner, provenance, rollback/certification. 
Debt compo-
nent Diagnostic question → typical discharge 
Validation Did the declared test run and pass? → execute use-specific 
validation with a witness. 
Authority Reviewer/issuer competent, current, and separated? → au-
thorised review plus revocation state. 
Horizon / scale Does support transfer to target domain, scale, population, or 
use? → local validation or block/narrow. 
Construct validity belongs in the theory, not an appendix. Vali-
dation requires a coding manual, componentwise inter -rater 
reliability, known -groups and counterexample tests, and discri-
minant validity from confidence, uncertainty, and severity. It 
also requires incremental utility over simpler provenance or 
missing-data flags, calibration of use -specific thresholds, and 
sensitivity analysis to representation choices (Messick, 1995; 
Krippendorff, 2018). The vector should be replaced by fewer 
fields whenever a simpler schema preserves every repair path, 
blocking set, discharge effect, and gate outcome. 
Debt propagates only through recorded use -relevant dependen-
cies and under a declared policy P_d: 
 
𝐝out = DischargeΔ (Join𝑃𝑑
({𝛿t} ∪ {𝑑i : 𝑖 ∈ Relt})) . 
 
δ_t is debt introduced locally; Rel_t is the dependency set rele-
vant to the downstream use. Δ is the set of typed discharge 
events, and Join_{P_d} is the policy -declared operator. Compo-
nentwise maximum with an absorbing unassessed symbol ? de-
fines one strict conservative profile, not a universal debt alge-
bra. Alternative joins are admissible when declared, justified, 
and tested; false blocking and over -taint are direct falsifiers. 
Cycles preserve debt by default unless a typed transformation 
establishes irrelevance. Formal limits, debt, and object transfer 
remain distinct. Formal limits propagate only through preserved 
query structure. Debt follows recorded use -relevant dependen-
cies under policy; objects move by choice, while warrant must 
be re-earned at the target horizon.  Dependency soundness is the 
central information risk. The ledger can propagate only along 
edges it records or discovers. A hidden relevant edge can create 
false cleanliness even when every visible transition is correct. 
The primary stress test therefore seeds known but unrecorded 
dependencies and measures hidden -edge recall, downstream 
uncertainty, and whether high -authority use remains blocked. 
Weak dependency coverage cannot be interpreted as low debt. 
A coverage claim is audited only when independent reconstruc-
tion or audit evidence supports it; it is estimated only when a 
sampling frame and estimator are declared. Otherwise Depend-
encyCoverage remains Unknown, and authority -sensitive use 
routes conservatively to review.  Discharge and waiver are dif-
ferent types. For component j, 
 
Dischargej(𝐝, evidence, witness) → 𝐝′ 
 
changes d_j only when the new evidence is admissible for that 
component, scope, and horizon. A signature cannot pay unrelat-
ed source or transformation debt. A waiver never enters the debt 
update; it is an input to Gate_{U,C_g} that records owner, rea-
son, scope, expiry, residual risk, and revocation conditions. 
Waiver changes permission while debt remains visible. 
The reference gate executes in three phases. First it resolves 
current source, object, model, policy, authority, credential, and 
validation versions; tests horizon adequacy α(U); and inspects 
terminal and evidence status. Next it verifies integrity, fresh-
ness, and revocation; computes the relevant debt blocking set; 
tests authority and role separation; and validates waiver scope

## Page 9

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
9 
 
and expiry. Finally it binds any consequential action into 
Cert_U, verifies the certificate immediately before effect, and 
emits GateOutcome and GateReceipt. Bounded execution then 
emits Receipt_exec. A waiver cannot convert HorizonInade-
quate into Warranted, and PermittedWithWaiver must never be 
rendered as unqualified green. 
CONFORMANCE INVARIANT 5 — conditional debt 
conservation and non -laundering. Assume complete de-
pendency capture for the named use and complete mediation 
of presentation and action surfaces. Also assume current evi-
dence, debt, and adequacy inputs; tamper-evident receipts; vis-
ible revocation; and pre -effect certificate verification. Finally 
require atomic binding or commit -time revalidation, plus 
presentation that derives unqualified success only from War-
ranted. Under these premises, unresolved threshold -level debt 
cannot disappear, appear as warranted green, or authorise a 
stale or substituted action unless a typed discharge pays it. 
This is a conditional control -plane property. Missing edges, 
stale data, bypasses, TOCTOU races, duplicate dispatch, re-
ceipt substitution, or unauthorised policy changes violate the 
premises rather than the conclusion. 
Transfer moves an object, not its warrant. Reuse across taxon, 
jurisdiction, organisation, scale, model, or input distribution 
records origin horizon, target horizon, preserved structure, 
changed assumptions, required local validation, allowed use 
now, and blocked use until validation. A transfer passport pre-
vents similarity from masquerading as inherited standing. Cross-
domain portability is therefore type portability, not evidence 
transfer: each domain must instantiate its own horizon, authori-
ty, validation, and thresholds; illustrative debt codes do not 
travel by analogy. 
 
 
 
 
8. Frontier comparators, severe tests, and conditions of defeat 
Table 1. Comparator and removal map. Panel A identifies an endpoint -matched comparator, the residual interface, and the failure it 
should discriminate. Panel B gives the removal rule. No row reports empirical superiority. If a comparator does not represent  a 
DebtVector field, that field is not represented/not assessed; it is never d=0 by default.  
 
A. Comparator, residual interface, and discriminated failure 
Functional contract Endpoint-matched comparator Residual interface Failure discriminated 
Scientific representation Causal abstraction; abstract 
interpretation 
Typed levels, Q, fibres/side information, receipts, 
and loss/recovery/use. 
Hidden query loss or undeclared side infor-
mation. 
Executable bounded evalua-
tion 
Workflow/operational seman-
tics; runtime verification 
Effective operators, scheduler, budgets, terminal 
sum, receipts, and external-call policy. 
Hanging or cyclic execution presented as 
completion. 
Local epistemic transduc-
tion Selective prediction; provenance Reason-typed non-answer, receipted effects, and 
candidate/certified state. 
Refusal reason or certification status silently 
collapsed. 
Observer composition and 
meta-control 
Provenance + assurance + exe-
cution tracing 
Versioned observer, history, monitoring, 
threat/authority metadata, escalation, and pre-effect 
mediation. 
Unmonitored export, stale revocation, or 
authority drift. 
Residual-warrant account-
ing 
Missing-evidence flags; risk 
registers 
Repair-specific vector, policy join, typed dis-
charge, and visible waiver. 
False cleanliness or waiver rendered as 
payment. 
Permission and action Certified traces; firewalls; trans-
actional agents 
Horizon adequacy, named use, exact action bind-
ing, dispatch receipt, and revalidation. 
TOCTOU, substitution, stale/replayed certif-
icate, or duplicate effect. 
B. Defeat condition and optional framework label 
Functional contract Explicit defeat condition Framework label 
Scientific representation Remove when a comparator reconstructs the same query-relative interface and downstream consequenc-
es more simply. RLA 
Executable bounded evaluation Remove when ordinary workflow or transition-system semantics exports the same bounded evaluator. CRC 
Local epistemic transduction Remove when a simpler reject-option or workflow matches diagnosis, traceability, and safety at lower 
burden. ECU / ECNN 
Observer composition and 
meta-control Remove when provenance + assurance + control reconstruct the observer export and action boundary. ROA / meta-
controller 
Residual-warrant accounting Replace when a simpler schema preserves all repair paths, blocking sets, discharge effects, and gate 
outcomes. Epistemic Debt 
Permission and action Replace when certified governance supplies equal semantics and safer outcomes with lower burden. Gate / action 
 
Matched-baseline rule. A comparator is matched only when it covers the endpoint’s relevant Export_B fields under the same data, 
horizon, risk, and resource conditions. Use provenance plus assurance for reconstruction; add selective prediction for non -answer; 
add certified trace, firewall, or transactional control for action. If it reconstructs the same export and protections with l ower burden, 
the named layer has no independent standing. 
 
New methods enter through four outcomes. SUBSTITUTE re-
constructs an export at lower burden and removes the layer. 
STRENGTHEN supplies a better local theorem or certificate. 
INPUT supplies evidence, monitoring, uncertainty, or a candi-
date object. BASELINE competes empirically. Compositional, 
distributionally robust, and transport abstractions can strengthen 
or substitute scientific representation. Certified traces challenge 
bounded evaluation and the gate; execution provenance and 
AgentTrails challenge observer composition. Composable as-
surance challenges debt propagation and permission; artificial 
epistemic-agent work challenges governance meta -control. 
AEGIS targets pre -execution mediation. Agentic transactions

## Page 10

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
10 
 
target atomicity and persistent -state guarantees. Pista targets 
post-hoc-only human oversight (Felekis et al., 2025, 2026; Lo-
renz & Tull, 2026; Liu Yanglet, Wang, & Capponi, 2026; Wang 
et al., 2026; Wu et al., 2026; Zhao, 2026; Marchal et al., 2026; 
Yuan, Su, & Zhao, 2026; Sun, Wang, & Li, 2026; Sabouri et al., 
2026). These are substitution threats, not corroborative authori-
ty. 
Public frontier-governance frameworks from OpenAI, Anthrop-
ic, Google DeepMind, and NIST operate mainly at model, capa-
bility, deployment, and organisational -risk levels. They address 
evaluations, capability thresholds, safeguards, risk reports, re-
sidual-risk review, incident response, external review, and 
lifecycle revision (National Institute of Standards and Technol-
ogy, 2024; OpenAI, 2026; Anthropic, 2026; Google DeepMind, 
2026). The present claim -level architecture neither replaces nor 
validates them. Its narrower candidate contribution is claim -, 
artefact-, and action -level semantics that could populate their 
assurance and monitoring processes. If an organisational 
framework supplies the same typed semantics and prevents un-
supported authoritative use with lower burden, the distinct layer 
should disappear. 
LOCAL PROPOSITION 6 — relative layer removal.  Let 
A→L→B be adjacent components, and let Export_B(L) be the 
complete export of layer L for query family Q under resource 
policy B. Assume a computable replacement A→B recon-
structs value/terminal, receipt, evidence and debt effects, poli-
cy/version, threat/authority metadata, resource cost, and Q -
observables within tolerance. If it also preserves every down-
stream gate outcome, then L is observationally redundant rela-
tive to (Q,B). The result is relative, not an ontological claim 
that the concept is useless. 
8.1 Evaluation protocol — not a result 
PROTOCOL, NOT RESULT. No outcome data are reported. 
The primary comparative hypothesis is: 
Evidence lanes. Machine-only Lab tests cover replay, trace removal, 
failure visibility, mutation/sensitivity, and bounded dispatch. Domain -
expert/data tests cover biological adequacy, calibration, and observa-
ble-family discrimination. Human -workflow tests cover reviewer bur-
den, queues, overrides, false -block/unsafe-pass, and decision time. 
Matched baselines. Use provenance + assurance + selective prediction 
for evidence/reconstruction endpoints, and certified traces + pre -
execution firewall/transactional controls for action endpoints. Evidence 
from one lane cannot upgrade another. 
H1. Against the endpoint -matched baseline bundle, the integrat-
ed lifecycle reduces unsupported authoritative use and source -
path reconstruction time/error without exceeding preregistered 
limits on false blocking, reviewer minutes, or operational cost. 
Core endpoints are false -green rate, unsupported -authoritative-
use rate, reconstruction accuracy/time, hidden -edge recall, ab-
stention-reason accuracy, contradiction recall, false -block rate, 
action-substitution refusal, stale -certificate rejection, duplicate -
dispatch rate, gate latency, reviewer burden, override frequency, 
and time to discharge. Results must be stratified by use risk, 
domain, subgroup, horizon version, action reversibility, and 
dependency coverage. Burden proportionality is part of H1: 
low-risk exploration should not inherit the review cost of high -
authority action. 
 
Cost-sensitive support.  Let NB = ΔHarm − Σ C_i, where C_i 
covers reconstruction, governance, latency, staffing, privacy, 
and bypass costs. The lifecycle is not operationally supported 
when NB ≤ 0, componentwise debt coding fails preregistered 
reliability after bounded training, or an endpoint -matched base-
line dominates the coverage –risk–cost frontier. Reviewer -
capacity reporting should include arrival rate, service time, 
queue length, review latency, bypass, false -block, unsafe -pass, 
and total human minutes per governed artefact. Safety pur-
chased by unstable queues or systematic bypass is not a win. 
 
Challenge families are grouped by endpoint. Evidence and hori-
zon cases include the same output under different horizons, high 
confidence without source, broken traces, revoked evidence, 
hidden dependencies, and bypassed exports. Representation and 
status cases include hidden side information, unresolved cycles, 
contradiction coerced into Answer, waiver shown as warrant, 
unauthorised review, distribution shift, and transferred parame-
ters. Action cases include hanging tools, approve -then-mutate, 
TOCTOU, stale or substituted certificates, duplicate or partial 
execution, forbidden subagent composition, receipt substitution, 
stop/effect races, and post -state invalidation. Search -augmented 
systems require explicit abstention tests because added retrieval 
can improve answerable -query accuracy while worsening be-
haviour on unanswerable queries (Xie et al., 2026). Certified 
traces, pre -execution firewalls, execution provenance, transac-
tional agents, and interactive oversight supply severe agentic 
baselines (Liu Yanglet, Wang, & Capponi, 2026; Yuan, Su, & 
Zhao, 2026; Wang et al., 2026; Sun, Wang, & Li, 2026; Sabouri 
et al., 2026). 
The programme -level defeat condition is explicit. Independent 
preregistered studies may show that endpoint -matched simpler 
systems weakly dominate on unsupported use, safe action con-
trol, reconstruction, and burden. In that case the architecture 
must contract to those systems or become a domain -specific 
design pattern. Internal consistency, implementation polish, or 
self-application cannot waive this loss rule. 
8.2 Limitations and open debt 
These limits are already load -bearing in the preceding contracts; 
this subsection consolidates rather than adds them. 
• Dependency coverage. Debt propagates only through record-
ed or discovered use -relevant dependencies; the architecture 
does not guarantee complete hidden-edge discovery (§7). 
• Horizon construction. Declaring 𝓗 enables local computa-
tion, but selecting an adequate horizon for U is a governance 
obligation and can be wrong or self-serving (§2). 
• Instrument reliability. The nine -component DebtVector re-
mains a candidate ordinal/categorical instrument pending cod-
ing-manual tests, inter -rater reliability, construct/discriminant 
validity, and incremental utility (§7). 
• Human and latency burden. Review minutes, gate latency, 
false blocking, queue instability, and bypass are comparative 
costs, not automatic safety gains (§8.1). 
• Empirical superiority and transfer. Constructibility and formal 
coherence do not establish comparative benefit or cross -
domain generalisation; heterogeneous preregistered studies 
remain required (§8.1). 
9. Discussion and conclusion 
The centre of gravity is a bounded computational semantics of 
claim admissibility and use -readiness. Ordinary effective evalu-
ation returns evidence status, reason -typed non -answer states, 
Epistemic Debt, and a reconstructable receipt. A distinct gate 
computes permission; consequential effects require a current 
action certificate and execution receipt. The functional contracts 
are scientific representation, bounded evaluation, local epistem-
ic transduction, persistent observer composition, governance 
meta-control, residual -warrant accounting, and action media-
tion. Framework labels remain secondary and disappear when 
the same exports are reconstructed more simply. 
The architecture is intentionally defeasible. Causal abstraction 
can subsume scientific representation; ordinary workflow se-
mantics can subsume bounded evaluation; selective prediction 
can subsume the epistemic head. Certified traces, execution 
provenance, pre -execution firewalls, transactional agents, and 
composable assurance can subsume observer or action control; a 
simpler missing -evidence schema can replace the debt vector. 
The architecture earns its complexity only when interfaces

## Page 11

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
11 
 
among these methods expose failures that isolated components 
miss or materially improve reconstruction, unsupported -use 
control, and safe action. 
Nothing in this tightening discharges empirical debt. Coding 
anchors are protocol, not reliability evidence. The worked path 
is an executable specification, not a superiority result, and De-
pendencyCoverage remains unproven. The tests in §8.1 and the 
limitations below state what must still be shown. 
The result is not a universal truth machine, nor a claim that 
meaning has been reduced to computation. It is a bounded se-
mantics of admissibility, use-readiness, and governed action that 
respects formal limits. Its strongest virtue is honest termination 
and interposition. Answer, unknown, contradiction, out -of-
horizon, review, timeout, failure, or blocked effect each carry a 
receipt and a condition for state change. When semantic arte-
facts circulate faster than institutions can judge them, six ques-
tions matter: what has the artefact earned; what does it still owe; 
which path supports it; which action is certified; what happened; 
and who authorised it? 
Declarations and reproducibility 
The author is responsible for the framework, formal choices, 
interpretations, and remaining errors. AI -assisted tools support-
ed restructuring, consistency checking, code generation, and 
language editing; no AI system is treated as scientific authority. 
No empirical outcome study is reported. A conforming imple-
mentation should publish a versioned schema, reference evalua-
tor, frozen conformance corpus, positive and negative tests, 
threat model, and monitored -use/action-surface inventory. It 
should also publish receipt readback, policy/horizon identifiers, 
a certificate verifier, and bounded external -call adapters. 
Benchmark code should report epistemic benefit, false blocking, 
reviewer burden, gate latency, action -substitution refusal, cost, 
and disparate effects; idempotency or compensation rules are 
required where needed. 
 
Repository and executable companion. The expanded frame-
work and its source corpus are available at the full repository 
URL below. The browser laboratory is an implementation wit-
ness and expert -facing falsification surface; it is not biological 
validation. 
Repository: https://github.com/Luke883i/ROA 
 
Bryophyte Epistemic Lab v9 (standalone HTML 
source/download page):  
https://github.com/Luke883i/ROA/blob/main/Reticular%20Loc
al%20Abstraction%20RLA-CRC-
ECNN/ROA%20Bryophyte%20Epistemic%20Lab/ROA_Bryop
hyte_Epistemic_Lab_v9.html

## Page 12

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
12 
 
References 
Anderson, P. W. (1972). More is different. Science, 177(4047), 393-
396. https://doi.org/10.1126/science.177.4047.393 
Anthropic. (2026, July 8). Responsible Scaling Policy, version 3.4. 
https://www.anthropic.com/responsible-scaling-policy 
Baier, C., & Katoen, J.-P. (2008). Principles of model checking. MIT 
Press. 
Beckers, S., & Halpern, J. Y. (2019). Abstracting causal models. Pro-
ceedings of the AAAI Conference on Artificial Intelligence, 33(1), 
2678-2685. https://doi.org/10.1609/aaai.v33i01.33012678 
Beckers, S., Eberhardt, F., & Halpern, J. Y. (2020). Approximate caus-
al abstractions. Proceedings of UAI 2020, 606-615. 
Belnap, N. D. (1977). A useful four-valued logic. In J. M. Dunn & G. 
Epstein (Eds.), Modern uses of multiple-valued logic (pp. 5-37). 
Reidel. https://doi.org/10.1007/978-94-010-1161-7_2 
Blackwell, D. (1953). Equivalent comparisons of experiments. Annals 
of Mathematical Statistics, 24(2), 265-272. 
https://doi.org/10.1214/aoms/1177729032 
Bloomfield, R. E., & Bishop, P. G. (2010). Safety and assurance cases: 
Past, present and possible future. In Making systems safer (pp. 51-
67). Springer. https://doi.org/10.1007/978-1-84996-086-1_4 
Buneman, P., Khanna, S., & Tan, W.-C. (2001). Why and where: A 
characterization of data provenance. In Database theory - ICDT 2001 
(pp. 316-330). Springer. https://doi.org/10.1007/3-540-44503-X_20 
Cheney, J., Chiticariu, L., & Tan, W.-C. (2009). Provenance in data-
bases: Why, how, and where. Foundations and Trends in Databases, 
1(4), 379-474. https://doi.org/10.1561/1900000006 
Chow, C. K. (1970). On optimum recognition error and reject tradeoff. 
IEEE Transactions on Information Theory, 16(1), 41-46. 
https://doi.org/10.1109/TIT.1970.1054406 
Church, A. (1936). An unsolvable problem of elementary number theo-
ry. American Journal of Mathematics, 58(2), 345-363. 
https://doi.org/10.2307/2371045 
Clarke, E. M., Grumberg, O., & Peled, D. A. (1999). Model checking. 
MIT Press. 
Cousot, P., & Cousot, R. (1977). Abstract interpretation: A unified 
lattice model for static analysis of programs by construction or ap-
proximation of fixpoints. POPL 1977, 238-252. 
https://doi.org/10.1145/512950.512973 
Cunningham, W. (1992). The WyCash portfolio management system. 
OOPSLA 1992 Experience Report, 29-30. 
https://doi.org/10.1145/157709.157715 
d’Avila Garcez, A., Gabbay, D. M., & Lamb, L. C. (2012). Neural-
symbolic cognitive reasoning. Springer. https://doi.org/10.1007/978-
3-642-32877-8 
Doyle, J. (1979). A truth maintenance system. Artificial Intelligence, 
12(3), 231-272. https://doi.org/10.1016/0004-3702(79)90008-0 
Fagin, R., Halpern, J. Y., Moses, Y., & Vardi, M. Y. (1997). 
Knowledge-based programs. Distributed Computing, 10(4), 199-225. 
https://doi.org/10.1007/s004460050038 
Farquhar, S., Kossen, J., Kuhn, L., & Gal, Y. (2024). Detecting hallu-
cinations in large language models using semantic entropy. Nature, 
630, 625-630. https://doi.org/10.1038/s41586-024-07421-0 
Felekis, Y., Giampouras, P., Zennaro, F. M., & Damoulas, T. (2025). 
Distributionally robust causal abstractions. arXiv:2510.04842. 
Felekis, Y., Giampouras, P., Zennaro, F. M., & Damoulas, T. (2026). 
Generalised transportability via causal abstractions. 
arXiv:2608.15645. 
Frigg, R., & Nguyen, J. (2020). Modelling nature: An opinionated in-
troduction to scientific representation. Springer. 
Geiger, A., Ibeling, D., Zur, A., Chaudhary, M., Chauhan, S., Huang, 
J., Arora, A., Wu, Z., Goodman, N., Potts, C., & Icard, T. (2025). 
Causal abstraction: A theoretical foundation for mechanistic inter-
pretability. Journal of Machine Learning Research, 26(83), 1-64. 
Giere, R. N. (1988). Explaining science: A cognitive approach. Univer-
sity of Chicago Press. 
Glime, J. M. (2007). Bryophyte ecology. Michigan Technological Uni-
versity. 
Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia 
Mathematica und verwandter Systeme I. Monatshefte für Mathematik 
und Physik, 38, 173-198. https://doi.org/10.1007/BF01700692 
Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep learning. 
MIT Press. 
Google DeepMind. (2026, April 17). Frontier Safety Framework, ver-
sion 3.1. https://deepmind.google/frontier-safety/ 
Guo, C., Pleiss, G., Sun, Y., & Weinberger, K. Q. (2017). On calibra-
tion of modern neural networks. Proceedings of Machine Learning 
Research, 70, 1321-1330. 
Hintikka, J. (1962). Knowledge and belief: An introduction to the logic 
of the two notions. Cornell University Press. 
Ionescu, T. B., Schlund, S., & Schmidbauer, C. (2019). Epistemic debt: 
A concept and measure of technical ignorance in smart manufactur-
ing. In Advances in human factors and systems interaction (pp. 81-
93). Springer. https://doi.org/10.1007/978-3-030-20040-4_8 
Kephart, J. O., & Chess, D. M. (2003). The vision of autonomic com-
puting. Computer, 36(1), 41-50. 
https://doi.org/10.1109/MC.2003.1160055 
Krippendorff, K. (2018). Content analysis: An introduction to its meth-
odology (4th ed.). SAGE. 
LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998). Gradient-
based learning applied to document recognition. Proceedings of the 
IEEE, 86(11), 2278-2324. https://doi.org/10.1109/5.726791 
Leucker, M., & Schallhart, C. (2009). A brief account of runtime veri-
fication. Journal of Logic and Algebraic Programming, 78(5), 293-
303. https://doi.org/10.1016/j.jlap.2008.08.004 
Liu Yanglet, X.-Y., Wang, X., & Capponi, A. (2026). No certificate, no 
execution: Certified traces as a foundation for trustworthy AI agents. 
arXiv:2605.24462. 
Lorenz, R., & Tull, S. (2026). Causal and compositional abstraction. 
arXiv:2602.16612. 
Marchal, N., Chan, S., Franklin, M., Revel, M., Keeling, G., Fischli, R., 
Chandra, B., & Gabriel, I. (2026). Architecting trust in artificial epis-
temic agents. arXiv:2603.02960. 
Messick, S. (1995). Validity of psychological assessment. American 
Psychologist, 50(9), 741-749. https://doi.org/10.1037/0003-
066X.50.9.741 
National Institute of Standards and Technology. (2024). Artificial Intel-
ligence Risk Management Framework: Generative Artificial Intelli-
gence Profile (NIST AI 600-1). https://doi.org/10.6028/NIST.AI.600-
1 
Necula, G. C. (1997). Proof-carrying code. Proceedings of POPL ’97, 
106-119. https://doi.org/10.1145/263699.263712 
Noble, D. (2012). A theory of biological relativity: No privileged level 
of causation. Interface Focus, 2(1), 55-64. 
https://doi.org/10.1098/rsfs.2011.0067 
Oliver, M. J., Velten, J., & Mishler, B. D. (2005). Desiccation tolerance 
in bryophytes. Integrative and Comparative Biology, 45(5), 788-799. 
https://doi.org/10.1093/icb/45.5.788 
OpenAI. (2026, May 28). OpenAI's Frontier Governance Framework. 
https://openai.com/index/openai-frontier-governance-framework/ 
Paterson, C., Hawkins, R., Picardi, C., Jia, Y., Calinescu, R., & Habli, 
I. (2025). Safety assurance of machine learning for autonomous sys-
tems. Reliability Engineering & System Safety, 264, 111311. 
https://doi.org/10.1016/j.ress.2025.111311 
Plotkin, G. D. (2004). The origins of structural operational semantics. 
Journal of Logic and Algebraic Programming, 60-61, 3-15. 
https://doi.org/10.1016/j.jlap.2004.03.009 
Popper, K. R. (1959). The logic of scientific discovery. Hutchinson. 
Proctor, M. C. F. (2001). Patterns of desiccation tolerance and recovery 
in bryophytes. Plant Growth Regulation, 35, 147-156. 
https://doi.org/10.1023/A:1014429720821 
Raji, I. D., Smart, A., White, R. N., Mitchell, M., Gebru, T., 
Hutchinson, B., Smith-Loud, J., Theron, D., & Barnes, P. (2020). 
Closing the AI accountability gap. FAccT 2020, 33-44. 
https://doi.org/10.1145/3351095.3372873 
Rao, A., Keller, A., Kalra, N., Steed, R., Kwegyir-Aggrey, K., Klyman, 
K., Staheli, D., & Bergman, A. (2026). Challenges to the monitoring 
of deployed AI systems. NIST AI 800-4. 
https://doi.org/10.6028/NIST.AI.800-4 
Rice, H. G. (1953). Classes of recursively enumerable sets and their 
decision problems. Transactions of the American Mathematical Soci-
ety, 74(2), 358-366. https://doi.org/10.1090/S0002-9947-1953-
0053041-6 
Russell, S., & Wefald, E. (1991). Principles of metareasoning. Artifi-
cial Intelligence, 49(1-3), 361-395. https://doi.org/10.1016/0004-
3702(91)90015-C 
Sabouri, S., Saghi, Z., Huang, R., Maladi, S., Eufracio, E., Gulwani, S., 
& Chattopadhyay, S. (2026). Auditing and controlling AI agent ac-
tions in spreadsheets. Microsoft Research preprint. 
Saltzer, J. H., Reed, D. P., & Clark, D. D. (1984). End-to-end argu-
ments in system design. ACM Transactions on Computer Systems, 
2(4), 277-288. https://doi.org/10.1145/357401.357402 
Sculley, D., Holt, G., Golovin, D., Davydov, E., Phillips, T., Ebner, D., 
Chaudhary, V., Young, M., Crespo, J.-F., & Dennison, D. (2015). 
Hidden technical debt in machine learning systems. Advances in 
Neural Information Processing Systems, 28. 
Shalizi, C. R., & Crutchfield, J. P. (2001). Computational mechanics: 
Pattern and prediction, structure and simplicity. Journal of Statistical 
Physics, 104, 817-879. https://doi.org/10.1023/A:1010388907793 
Shannon, C. E. (1948). A mathematical theory of communication. Bell 
System Technical Journal, 27, 379-423, 623-656.

## Page 13

COMPUTATIONAL SEMANTICS OF CLAIM ADMISSIBILITY 
13 
 
Sun, Z., Wang, X., & Li, G. (2026). Agentic transaction: Towards 
ACID-compliant agent systems. arXiv:2608.13900. 
Tishby, N., Pereira, F. C., & Bialek, W. (1999). The information bot-
tleneck method. Proceedings of the 37th Annual Allerton Confer-
ence, 368-377. 
Turing, A. M. (1936/1937). On computable numbers, with an applica-
tion to the Entscheidungsproblem. Proceedings of the London Math-
ematical Society, s2-42(1), 230-265. https://doi.org/10.1112/plms/s2-
42.1.230 
van Fraassen, B. C. (1980). The scientific image. Clarendon Press. 
Vovk, V., Gammerman, A., & Shafer, G. (2005). Algorithmic learning 
in a random world. Springer. https://doi.org/10.1007/b106715 
W3C. (2013). PROV-O: The PROV ontology. W3C Recommendation. 
Wang, Y., Zhang, J., Cai, T., Liu, Z., Sun, Q., Sun, Z., Wu, Z., Zhang, 
M., & Zhu, Y. (2026). From agent traces to trust: Evidence tracing 
and execution provenance in LLM agents. arXiv:2606.04990. 
Weisberg, M. (2013). Simulation and similarity: Using models to un-
derstand the world. Oxford University Press. 
Wen, B., Yao, J., Feng, S., Xu, C., Tsvetkov, Y., Howe, B., & Wang, 
L. L. (2025). Know your limits: A survey of abstention in large lan-
guage models. Transactions of the Association for Computational 
Linguistics, 13, 529-556. https://doi.org/10.1162/tacl_a_00754 
Wright, A. K., & Felleisen, M. (1994). A syntactic approach to type 
soundness. Information and Computation, 115(1), 38-94. 
https://doi.org/10.1006/inco.1994.1093 
Wu, E., Castelo, S., Liu, Y., Silva, C. T., & Freire, J. (2026). 
AgentTrails: Towards trust and reuse for agentic tasks. 
arXiv:2607.18816. 
Xia, K. M., & Bareinboim, E. (2025). Causal abstraction inference 
under lossy representations. Proceedings of the 42nd International 
Conference on Machine Learning, PMLR 267, 68225-68235. 
Xie, R., Gopinath, D., Qiu, D., Lin, D., Sun, H., Potdar, S., & Dhingra, 
B. (2026). Over-searching in search-augmented large language mod-
els. Proceedings of the 19th Conference of the European Chapter of 
the Association for Computational Linguistics, 7714-7739. 
https://doi.org/10.18653/v1/2026.eacl-long.361 
Yuan, A., Su, Z., & Zhao, Y. (2026). AEGIS: No tool call left un-
checked - A pre-execution firewall and audit layer for AI agents. 
arXiv:2603.12621. 
Zhao, X. (2026). Composable assurance for AI alignment. Proceedings 
of the AAAI Conference on Artificial Intelligence, 40(44), 38129-
38136. https://doi.org/10.1609/aaai.v40i44.41151
