# Large Language Models Should Have Larger Outputs

Human communication has limited bandwidth, and AI has inherited some of its constraints. We train large language models on human language, then organize their output as if they were people exchanging messages. I expect this pattern to change over the next few years. By reusing expensive internal computation through specialized output branches, AI could provide far more explanation and evidence than its main answers contain. That would make its work easier to inspect and control, while opening a major opportunity for open models.

## The limits of human communication

Explaining a good idea takes time, even after the difficult thinking is done. A programmer cannot spend hours documenting every decision without giving up time for implementation. Even the simpler tasks of typing or reading supplied text have modest output rates:

| Task | Measured average | Sample | Illustrative token rate |
| --- | --- | --- | --- |
| Typing supplied sentences | **52 words/minute** | About **168,000 volunteers** [[3]](#reference-3) | **1.1 tokens/second** |
| Reading aloud | **183 words/minute** | **77 studies, 5,965 participants** [[4]](#reference-4) | **4.0 tokens/second** |

The conversions assume five-character words and four characters per token for typing, and 1.3 tokens per word for reading. These are illustrative rates under a particular encoding. The studies measured transcription and oral reading, so their averages establish neither thinking speeds nor physiological ceilings.

The gap between discovery and exposition appears even in the work of great mathematicians. Some of Gauss's discoveries survived in unpublished correspondence or incomplete notes [[1]](#reference-1), while Ramanujan recorded many results without proofs [[2]](#reference-2). Their records show how much work can remain after a result is found.

Human collaboration accommodates this gap. We submit a patch or sketch an argument, leaving others to reconstruct the details. AI can support a different arrangement: it could make those details available without requiring its most expensive computation to generate every word.

## A result needs a supporting account

When AI writes code, I want to understand its goals, assumptions, design choices, and handling of failures. I also want evidence that the implementation meets the requirements. A small patch can need a substantial explanation before I can confidently accept it.

My proposal system already puts this demand into practice. Every proposed change must include the problem analysis, relevant context, evaluation criteria and guidelines, design, implementation, diff, and test results. A pull request can contain all of this, but my workflow makes the fuller account a requirement. The code becomes one part of the deliverable, alongside the information needed to judge it.

Formal mathematics offers another example. A compact argument can expand into many definitions and proof steps before Lean can check it against a formal statement [[5]](#reference-5). Libraries and automation affect the expansion, but justifying a result can still require far more output than stating it.

I currently obtain this material through a workflow around existing models. The next question is whether models can be adapted to produce it more efficiently.

## Reuse the expensive computation

Token count can obscure that question. A token is a unit of encoding, not a measure of generation difficulty, quality, or cost. The same token might be copied, guessed, or selected after extensive reasoning and verification. Even its information content depends on context.

Within a fixed autoregressive model, more output generally requires more decoding work. Across architectures, however, a token has no intrinsic computational price. A short answer may require a difficult discovery, while a long explanation may largely expand information already available.

Suppose a large model has found a good design. Could lightweight branches use its intermediate representations to explain that design, document its assumptions, and produce supporting evidence? The main computation would supply the difficult decisions; the branches would turn relevant information into useful outputs.

The hypothesis is that some information is cheaper to read out than to discover again. This does not mean existing hidden states contain a complete explanation waiting to be transcribed. The backbone and branches may need joint training, and finding a missing invariant or constructing a difficult proof could still require substantial new reasoning.

The structure I have in mind is tightly integrated. Branches would consume intermediate states directly, with those states remaining on the same GPU. Memory use and execution would be designed for the core and branches together. Unlike agents exchanging written messages, these components would share the computation that produced the result.

Keeping states local avoids their inter-device transfer, but retaining them and running branches still consumes memory, bandwidth, and compute. The proposal succeeds only if the whole job becomes cheaper or faster at comparable result and justification quality.

## Different outputs need different generators

A person needs a clear explanation that respects their attention. A security reviewer needs explicit assumptions and checkable evidence. A proof checker needs a valid formal artifact, while a subagent needs precise objectives and constraints. These outputs serve different purposes, so their generators could use different training objectives, formats, and degrees of parallelism.

This also gives explanation a different role from chain of thought used to improve an answer. A branch could exist primarily to help a person or verifier inspect the result, without feeding back into the main computation. The visible conversation could remain concise while the system produces much larger artifacts for inspection on demand.

Several existing systems provide evidence for parts of this design. EAGLE uses internal model features to accelerate speculative decoding [[6]](#reference-6). Qwen2.5-Omni goes further in output specialization: its Talker consumes the Thinker's hidden representations to generate audio [[9]](#reference-9).

Heima compresses reasoning stages into hidden representations and reconstructs text, with separate decoders for summary, caption, and reasoning in its implementation [[8]](#reference-8). An earlier approach by Kaiser et al. generates a short latent sequence and expands it into longer output in parallel, demonstrated on translation [[7]](#reference-7).

Together, these establish precedents for reusing features, reconstructing text, and specializing output. Whether such mechanisms can provide cheap, faithful justification across general tasks remains open.

## Transparency depends on evidence

An explanation can be convincing without being faithful. In controlled experiments, Chen et al. found that reasoning models did not consistently acknowledge hints that influenced their answers [[10]](#reference-10). Producing more text would not, by itself, resolve that problem.

We need to distinguish two properties: whether a justification supports the result, and whether an explanation reflects how the model produced it. A valid proof can establish a result without revealing how it was discovered. Direct access to hidden states creates an opportunity to investigate fidelity, but does not guarantee it.

Tests and proofs must be checked against explicit specifications. Explanations need evaluation against changes in inputs, internal states, and observable behavior. The safety benefit comes from making assumptions visible and claims testable, so that people can challenge the work and intervene where it matters.

## An opportunity for open models

This design requires access to intermediate representations and control over execution. Open weights and model code allow independent groups to investigate those possibilities, subject to their licenses. A text-only API does not expose the same capabilities.

A research group could build a branch for code explanations or formal proofs, while a systems group improves its execution alongside the backbone. Others could contribute training data and evaluations. Their work could accumulate around a capable model without each group having to train a new general-purpose model.

That collaboration requires shared branch code, training procedures, and interfaces to the backbone. Evaluations should measure the complete job, including the cost of retaining intermediate states and checking artifacts. Training costs also affect whether a branch is economical.

There are real limits. Branches may need retraining when internal representations change, and memory constraints may erase the expected savings. Proprietary developers can pursue the same architecture. Open models let independent groups test, modify, and extend it together. I expect this to become an important way to improve what a model delivers.

## Optimize the whole job

Such a system could produce a short, expensive main stream and much longer, cheaper supporting streams. Some branches would run routinely, others only when requested. People and automated verifiers would inspect different parts of the output.

That makes the complete job the useful unit of optimization: a result together with the evidence needed to rely on it, at a specified quality. Pricing and product design may follow, because raw token counts cannot capture differences in either generation cost or delivered value.

Larger outputs should save human time by making relevant evidence easy to find and check, while keeping the conversation concise.

## Richer building blocks

The same argument extends to what outputs are made of. A token could encode an operation in a new programming language, a reference to a mathematical object, or a learned discrete code. Some channels might use continuous representations instead, which would not be discrete tokens. Audio tokens and latent codes already demonstrate parts of this broader design space [[9]](#reference-9) [[7]](#reference-7).

Symbols are like atoms of the worlds we describe. Better building blocks can make useful structures easier to express and manipulate. A larger vocabulary does not automatically add information or expressive power; the opportunity is to choose representations that fit the problem and avoid repeatedly reconstructing its structure from text.

More speculatively, AI could learn and refine these representations alongside the models that use them. New languages and formats might help it solve problems poorly served by conversational text, provided their benefits can be checked and their outputs remain accessible to people.

Larger outputs and richer forms of expression could make more of AI's computation useful. Their design should serve what people need to understand, verify, and control.

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
