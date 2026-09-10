# Large Language Models Should Have Large Outputs

Human communication has limited bandwidth. Large language models learn from the language we produce, and we often organize their outputs as if they were people exchanging messages. My argument is that this inherited pattern leaves much of AI's potential unused. Over the next few years, I expect systems to increasingly reuse expensive internal computation through specialized output branches, producing far more explanation, justification, and checkable evidence than their main answers alone. If this potential is realized, it could drive a new wave of progress across the AI industry, with particularly significant opportunities for open models, whose internal representations and execution can be examined and extended.

## The limits of human communication

Human communication takes time and effort. A programmer may arrive at a good design without documenting every consideration behind it; a mathematician may find an argument long before producing a complete exposition. Turning that work into something another person can inspect is a substantial task of its own.

The historical record offers striking examples of this gap. Some of Gauss's discoveries remained unpublished, surviving in correspondence or incomplete notes [[1]](#reference-1). Ramanujan recorded many results without proofs, leaving later mathematicians the substantial work of establishing and explaining them [[2]](#reference-2). What was often missing was a complete account that others could follow. These examples illustrate the gap between discovery and exposition; they do not establish communication speed as its historical cause.

Even when the words are already written, typing or speaking them imposes a measurable limit on the rate of expression.

| Human output task | Measured average | Study | Illustrative token-equivalent |
| --- | --- | --- | --- |
| Typing supplied sentences | **52 standardized words/minute**, or **4.3 characters/second** | Approximately **168,000 volunteers**; Dhakal et al. (2018) [[3]](#reference-3) | **1.1 tokens/second**, assuming 4 characters/token |
| Reading aloud | **183 words/minute**, or **3.05 words/second** | **77 studies**, **5,965 participants**; Brysbaert (2019) [[4]](#reference-4) | **4.0 tokens/second**, assuming 1.3 tokens/word |

Sources: [3 — typing study](https://userinterfaces.aalto.fi/136Mkeystrokes/resources/chi-18-analysis.pdf); [4 — reading-rate meta-analysis](https://biblio.ugent.be/publication/8647789).

The measured rates concern transcription and oral reading, not original composition or internal thought. The typing study defines a standardized word as five characters. Token-equivalents are calculations made here under the stated encoding assumptions; neither study measured model tokens. Actual token counts depend on the tokenizer and text, and these sample averages are not physiological ceilings.

Our ways of collaborating accommodate this bottleneck. A programmer submits a patch with a short explanation. A mathematician presents an argument at a level of detail that other mathematicians can reconstruct. We leave things implicit, ask follow-up questions, and rely on experience and trust to fill the gaps.

These are reasonable arrangements for humans. They need not be the best arrangements for AI. The inheritance I mean is structural, not a shared numerical speed limit: routing different kinds of work through similar text streams, rather than designing each output path for its purpose.

## Doing the work and making it inspectable

Suppose an AI writes a piece of code. The code works, and the patch looks sensible. I still want to know what design it implements, what goals it prioritizes, what assumptions it makes, and which constraints shaped the solution. I want to inspect its handling of failures, its security properties, and the reasons for decisions that are expensive to reverse.

A small patch can require a large explanation. Some of that explanation belongs in documentation. Some belongs in tests, explicit assumptions, or arguments about correctness. Some might take the form of a machine-checkable proof.

Mathematics offers a useful example. A compact informal argument can leave a great deal for a reader to supply. A formal treatment may need to make definitions, side conditions, and intermediate steps explicit. Lean's kernel checks proof terms against formal statements [[5]](#reference-5), but constructing such an artifact can require much more output than stating the central idea. There is no fixed expansion ratio: existing libraries and automation matter enormously. The important point is that the amount of material needed to justify a result can be very different from the amount needed to communicate it.

For a human, supplying all this material is costly. A mathematician who has found the decisive idea must still spend time turning it into a complete exposition. A programmer cannot document every choice without sacrificing time that could have gone into the implementation itself.

We should ask how much of this tradeoff AI actually needs to inherit.

## The demand already exists in engineering

I am already putting this idea into practice in a workflow I call the proposal system. For a proposed change, I ask for the problem analysis, relevant context, the criteria and guidelines for judging a solution, the design, the implementation, the diff, and the tests and their results. I want the whole account written down so that the change can be examined against the problem it was meant to solve.

Compared with a review centered on a patch and a short explanation, this asks for a much larger body of material. A GitHub pull request can certainly contain all of it; the change in my workflow is to make that fuller account an explicit requirement. The implementation becomes one part of the deliverable, alongside the information needed to assess it.

This is an engineering practice, not yet a model architecture. I currently obtain the material by organizing the workflow around existing models. Their generation process has not been specifically adapted to this division of work. The practice motivates the architectural question: can a model produce this richer deliverable by sharing its expensive computation across specialized output paths? It establishes a concrete use for large outputs, while leaving the efficiency of the proposed architecture to be demonstrated.

## Token count is not complexity

A token is a unit of encoded representation. It is not a measure of the complexity of producing that representation, or of the quality of the process that produced it. The very same token can be copied, guessed, or selected after substantial computation and checking. Its identity does not tell us which happened, how reliable the result is, or what it cost. A token is not a fixed quantity of information either: its information content depends on context and predictability.

A short answer can require a difficult discovery; a long output can consist largely of expanding information that is already available. Token count measures the length of an encoding under a particular tokenizer. By itself, it measures neither the difficulty of generating the content nor its correctness, usefulness, or evidential support.

Output length, problem difficulty, and generation cost are distinct quantities. Within a fixed autoregressive model and comparable serving conditions, producing more tokens generally requires more decoding work. But that relationship does not assign an intrinsic computational cost to a token across different architectures. A token produced by a lightweight decoder using an existing representation need not cost as much as one produced by another pass through the full model. EAGLE's feature-based acceleration [[6]](#reference-6) and the latent-sequence expansion of Kaiser et al. [[7]](#reference-7) illustrate why generation structure matters.

This distinction is central to the prediction here. A large justification may require far more tokens than the result it supports without requiring the same expensive computation for every token. Its length alone does not tell us how cheaply it can be generated.

## The expensive part should be reused

Imagine that a large model has done the difficult work of finding a good design. Its computation has produced intermediate representations that support the code it generates. Must that same expensive machinery run again for every token of every accompanying explanation?

Perhaps some of the supporting material could be produced by smaller components that directly use those representations. The large model supplies the main line of work; lightweight branches expand relevant information into different forms.

The hypothesis is that some useful information is cheaper to read out than to discover again. It need not be neatly stored or fully recoverable in an existing model; training may need to make intermediate representations useful to the branches. Finding a missing invariant or constructing a difficult proof may still require substantial new reasoning. The opportunity is to avoid paying that price again for information the shared computation already supplies.

The structure I have in mind is tightly integrated. The branches access intermediate computation directly, rather than receiving a written handoff and independently reconstructing the problem. For this proposal, the shared representations stay on the same GPU, and the branches consume them there. Their memory use, access patterns, and execution have to be designed together with the main computation.

Keeping the shared states on the same GPU is a design constraint here. It avoids inter-device transfers of those states, but branches still compete for memory, bandwidth, and compute. The useful test is whether the complete job becomes cheaper or faster at matched task quality and justification quality, including the cost of retaining and accessing intermediate states.

The distinction from an agent workflow is therefore deeper than packaging. A collection of agents can exchange tasks and messages. Here, the unit of collaboration is the internal computation itself.

## Different outputs need different generators

There is no reason to expect every use of a model's computation to require the same output format or generation process.

An answer addressed to a person should respect that person's attention. A security review should expose assumptions and evidence in a form that can be checked. A formal proof must satisfy a checker. Instructions to a subagent should make objectives and constraints precise. Material used by subsequent computation may not need to be expressed in human language at all.

These channels have different requirements for length, latency, precision, and structure. They could use different decoders, training objectives, and degrees of parallelism while drawing on shared internal representations.

This is also a different purpose from using a longer chain of thought to improve an answer. The question here is what a system should deliver so that its work can be understood, inspected, and controlled. An explanation branch need not feed back into the main computation to be useful. It may exist primarily for a person or a verifier examining the result.

The visible conversation could remain short. Behind it, the system might produce a much larger set of artifacts, organized so that people and tools can inspect the parts they need. Large output should increase access to relevant information without making every user read all of it.

## Some of the pieces already exist

Existing research provides evidence for several mechanisms in this forecast.

Heima (Shen et al., 2025) [[8]](#reference-8) compresses reasoning stages into hidden representations and decodes them back into variable-length text. Its [implementation](https://github.com/shawnricecake/Heima) includes separate decoders for summary, caption, and reasoning. This demonstrates hidden-state-conditioned reconstruction, rather than establishing a cheap general-purpose justification branch.

EAGLE (Li et al., 2024) [[6]](#reference-6) uses internal model features in speculative decoding to accelerate generation. Its purpose is to produce the original output more efficiently, but it provides evidence for a relevant mechanism: auxiliary computation can exploit features produced by the larger model.

Qwen2.5-Omni (Xu et al., 2025) [[9]](#reference-9) separates a Thinker from a Talker that directly uses the Thinker's hidden representations to generate audio tokens. This demonstrates output specialization within an integrated architecture, in that case for text and speech.

There is also an older precedent for expansion: Kaiser et al. (2018) [[7]](#reference-7) generate a short latent sequence and then decode a longer output in parallel. Their experiments concern translation, but the architectural idea reaches beyond making every output token an equally expensive sequential step.

These are precedents for the components, not a demonstration of the whole system. Generalization, explanation fidelity, and the cost of producing all the supporting material remain open questions.

## Transparency needs evidence

A system that produces more explanation is not automatically more transparent. It might simply become better at producing convincing accounts of its behavior. In controlled hint experiments, Chen et al. (2025) found that reasoning models did not consistently acknowledge information that influenced their answers [[10]](#reference-10). Their results make fidelity an evaluation requirement; they do not determine how a decoder of internal states would perform.

Two properties matter here. One is whether a justification supports the result: whether the claimed assumptions hold, the tests cover the stated behavior, or the proof establishes the specified property. The other is whether an explanation accurately reflects the computation that produced the result. These are different properties. A valid proof can justify a result without reproducing how the model found it.

Direct access to internal representations creates an opportunity to investigate fidelity; it does not guarantee fidelity. Explanations would need to be tested against changes to inputs and internal states, and checked against independently observable behavior. Formal artifacts have the advantage of an explicit checker, although the choice of specification still requires scrutiny.

The safety value of large outputs will depend on this connection to evidence. An assistant becomes easier to control when we can locate its assumptions, challenge its claims, and check the properties we care about. Output volume alone achieves none of that.

## An opportunity for open models

If this prediction is right, access to model internals becomes an important site of innovation. The proposed branches need intermediate representations and control over how they are consumed. A text-only interface does not expose those capabilities. Accessible weights and model code make it possible to investigate them, although the available training and deployment rights depend on the license. In this discussion, “open models” refers to that practical access; open weights alone do not imply that every part of a model's development is open.

This creates an opportunity to build on an existing capable model without independently recreating its entire capability. A research group could investigate a branch for code-design explanations, a domain-specific audit, or a machine-checkable justification. A systems group could investigate how to execute those branches alongside the core model on the same GPU. The precedents above make these concrete research questions, although training cost and reliability remain to be established.

The potential contribution is therefore larger than a new prompt or an application around a model. It can be a new way to use the computation the model already performs. If specialized branches prove effective, improvements could accumulate around a shared backbone: richer explanations, more inspectable assumptions, and additional checkable artifacts, without requiring every contributor to train a new general-purpose model.

A useful open research program would publish the branch implementations and training procedures, the interfaces to the backbone, and evaluations of both cost and output quality. For explanation branches, this includes testing whether the output tracks relevant changes in the underlying computation. For proof-producing branches, it includes checking the generated artifacts against explicit specifications. The comparison should measure the complete job, including branch training costs where relevant and the inference cost of retaining and accessing intermediate states.

This opportunity is conditional. Hidden representations can change between model families and versions, so branches may need retraining rather than working as interchangeable plugins. Local execution may run into memory and bandwidth limits. Proprietary model developers can also build integrated branches. The particular opportunity for open models is that independent groups can investigate, modify, and compare these designs directly, and make the resulting methods available for others to examine and extend.

My forecast is that some of the most useful contributions to open AI will take this form: specialized ways of turning shared computation into more useful and verifiable output. That would broaden what it means to improve a model beyond producing a stronger replacement for its main conversational stream.

## A different unit of AI work

If this direction succeeds, I expect a token count alone to become an increasingly incomplete unit for thinking about the cost and value of AI work.

There may be a short, expensive main stream and a much longer set of cheaper branches. Different branches may have different computational costs even when they produce comparable amounts of text. Some will be generated routinely; others only when requested. Some outputs will be consumed by people, others by automated checks.

The natural unit to optimize will be the whole job: producing a useful result together with the material needed to inspect and rely on it. Pricing and product design may follow that change: the useful comparison would be the cost of a result and its supporting evidence at a specified quality, rather than a raw count of generated tokens.

We have good reasons to make an AI's conversation familiar to people. We have much less reason to make its entire computational organization resemble people exchanging messages.

A system built to assist humans should take advantage of the structures that humans cannot have. It can preserve a concise interface while producing far more supporting material than a person could reasonably write. It can allocate expensive computation to the difficult decisions and reuse the results through specialized output paths.

That is the sense in which large language models should have large outputs: the work they make available for inspection should be much larger than the few sentences through which we talk to them.

## Beyond words

The opportunity also extends to the kinds of things a system can output. A token need not represent a fragment of ordinary language. Output vocabularies could encode operations in a new programming language, references to structured mathematical objects, or learned discrete codes. Some channels could carry continuous representations instead; strictly speaking, those would not be discrete tokens. Audio generation in Qwen2.5-Omni [[9]](#reference-9) and learned latent codes in Kaiser et al. [[7]](#reference-7) already illustrate pieces of this broader design space.

The basic symbols of a language are like atoms in the world it lets us construct. Changing those building blocks can make useful distinctions and operations easier to express, combine, and manipulate. This is not a claim that a larger vocabulary automatically creates more information or greater theoretical expressive power. A sufficiently general language can already encode many of the same objects. The opportunity is to give the system representations in which important structure becomes accessible without repeatedly reconstructing it from long descriptions.

A more speculative possibility is that these representations could be learned and refined alongside the models that use them. New programming languages, structured output formats, and machine-oriented representations could become part of how AI handles problems that fit poorly into conversational text. Their value would be demonstrated by better solutions and more reliable checks, with explicit interfaces back to the people who need to understand and control the work.

The forecast is therefore about both the amount of output and the richness of its building blocks. AI could make more of its computation useful by expanding what it can express, and by choosing forms of expression that better match the problems we ask it to solve.

## References

<a id="reference-1"></a>

[1] *Gauss, Carl Friedrich*. Dictionary of Scientific Biography entry, hosted by the MacTutor History of Mathematics Archive, University of St Andrews. [Biographical entry](https://mathshistory.st-andrews.ac.uk/DSB/Gauss.pdf). Describes unpublished results preserved in notes, correspondence, and reports, with some discoveries only hinted at in incomplete records.

<a id="reference-2"></a>

[2] Schneider, R. P. (2012). *Uncovering Ramanujan's “Lost” Notebook: An Oral History*. The Ramanujan Journal. [doi:10.1007/s11139-012-9445-z](https://doi.org/10.1007/s11139-012-9445-z). [Article](https://arxiv.org/abs/1208.2694). Discusses the notebook's rediscovery and the work of Andrews and Berndt in proving and editing its entries. See also [*Living with Ramanujan for 40 years*](https://doi.org/10.1098/rsta.2018.0437), which discusses entries recorded without proofs.

<a id="reference-3"></a>

[3] Dhakal, V., Feit, A. M., Kristensson, P. O., & Oulasvirta, A. (2018). Observations on Typing from 136 Million Keystrokes. *Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems*, Paper 646, 1–12. [doi:10.1145/3173574.3174220](https://doi.org/10.1145/3173574.3174220). [Open-access author PDF](https://userinterfaces.aalto.fi/136Mkeystrokes/resources/chi-18-analysis.pdf). The summary on page 9 reports the mean of 52 WPM; this is a volunteer online transcription sample, not a representative population estimate.

<a id="reference-4"></a>

[4] Brysbaert, M. (2019). How many words do we read per minute? A review and meta-analysis of reading rate. *Journal of Memory and Language, 109*, 104047. [doi:10.1016/j.jml.2019.104047](https://doi.org/10.1016/j.jml.2019.104047). [University publication record and abstract](https://biblio.ugent.be/publication/8647789). The oral-reading estimate is based on 77 studies and 5,965 participants; it should not be confused with the paper's separate estimates for silent reading.

<a id="reference-5"></a>

[5] Lean Language Reference. *Elaboration and Compilation*. [Official documentation](https://lean-lang.org/doc/reference/latest/Elaboration-and-Compilation/). The kernel checks elaborated proof terms; the intended specification and accepted axioms still need to be scrutinized.

<a id="reference-6"></a>

[6] Li, Y., Wei, F., Zhang, C., & Zhang, H. (2024). EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty. *Proceedings of the 41st International Conference on Machine Learning*, PMLR 235, 28935–28948. [Published paper](https://proceedings.mlr.press/v235/li24bt.html). Cited for internal-feature reuse in speculative decoding.

<a id="reference-7"></a>

[7] Kaiser, Ł., Roy, A., Vaswani, A., Parmar, N., Bengio, S., Uszkoreit, J., & Shazeer, N. (2018). *Fast Decoding in Sequence Models using Discrete Latent Variables*. ICML 2018. [Paper](https://arxiv.org/abs/1803.03382). Cited for parallel expansion of a shorter latent sequence; the reported evaluation concerns machine translation.

<a id="reference-8"></a>

[8] Shen, X., Wang, Y., Shi, X., Wang, Y., Zhao, P., & Gu, J. (2025). *Efficient Reasoning with Hidden Thinking*. arXiv preprint, first submitted January 2025. [Paper](https://arxiv.org/abs/2501.19201). [Author implementation](https://github.com/shawnricecake/Heima). Cited for hidden-representation compression and textual reconstruction, not for a demonstrated general-purpose small explanation head.

<a id="reference-9"></a>

[9] Xu, J., et al. (2025). *Qwen2.5-Omni Technical Report*. arXiv:2503.20215. [Paper](https://arxiv.org/abs/2503.20215). Cited for the Thinker–Talker architecture and hidden-representation-conditioned audio generation.

<a id="reference-10"></a>

[10] Chen, Y., et al. (2025). *Reasoning Models Don't Always Say What They Think*. [Research paper](https://assets.anthropic.com/m/71876fabef0f0ed4/original/reasoning_models_paper.pdf). [Authors' research summary](https://www.anthropic.com/research/reasoning-models-dont-say-think). Cited for experimentally observed limitations of chain-of-thought faithfulness.
