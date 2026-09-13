# Enhanced SVG for Image Generation and Beyond

Graphics interfaces are shaped by human habits, such as drawing curves with a manageable set of control points. AI gives us reason to rethink that vocabulary. I expect new protocols for programmable creative media: programs could combine geometry, learned shapes, textures, and other representations, while artists increasingly design the mechanisms that generate a work. **Enhanced SVG**, or **ESVG**, is one way to imagine this direction.

## A programmable medium

Start with a Python library for generating images. A model writes a program that composes visual components; executing it produces an image or an intermediate structure for further generation. The library can grow as people invent new components and ways to combine them.

A tree, for example, could use explicit branching rules, a learned representation for its leaves, and a texture generator for its bark. The program could reuse that tree across a forest, vary its proportions, or change its appearance over time. The same mechanisms would be available for later edits.

D3 already provides composable tools for dynamic graphics in JavaScript [[1]](#reference-1), and SVG supports addressable elements, groups, and reusable definitions [[2]](#reference-2). I imagine extending this freedom to what the components themselves can represent and how they are decoded. Python is a practical starting point; JavaScript, a new language, or new model interfaces could explore other parts of the space.

## Building blocks for a different kind of user

A model could produce a continuous latent representation—a high-dimensional vector that a decoder turns into an intricate curve or texture. The decoder could be learned, algorithmic, or both. Its coordinates need not each have a meaning that a person can name or adjust independently.

A surrounding program could still specify the properties that matter to a composition: a curve's endpoints, where a texture belongs, its orientation, and which objects share it. This combines detailed visual expression with explicit relationships that can be inspected and changed.

One possible interface would mix discrete instructions with continuous units. An operation or reference could be followed by a vector describing a component. Discrete codes could also select complex learned shapes. The choices concern what each unit means, how it is decoded, and what other components can do with it. These choices could remain open to extension as artists and developers build new visual vocabularies.

## How a few units could unfold

Three high-level tokens could expand into dozens of shapes, which then unfold into thousands of strokes. The amount of output could depend on parameters, context, or decisions made during execution. The same component might produce a dense botanical study in one composition and a sparse silhouette in another.

This is a variadic possibility within the components: operations could accept varying numbers of inputs and produce varying numbers of outputs, with their results composed and expanded again. Rules, learned decoders, or combinations of the two could determine the expansion and its depth.

The library and decoder supply much of the knowledge behind a short description. A few tokens invoke a way of making something that already embodies rules, examples, and visual tendencies. Artists could put considerable effort into developing that mechanism, then use it with different subjects and compositions.

## Many routes to an image

Programs could build and transform intermediate representations as needed. A cell complex could describe regions and shared boundaries; a shape tree could organize a figure's parts into a hierarchy. An illustrated city might begin with neighborhood boundaries, proceed to building layouts, and use a different representation for detailed facades.

Another route is to generate a sketch programmatically and pass it to a diffusion model. ControlNet demonstrates conditioning on edges, depth, segmentation, and pose [[3]](#reference-3). GenP5 connects p5.js with diffusion-based styling and conditioning of algorithmically constructed art [[4]](#reference-4). A program could establish a grove's spacing and silhouette, then let a model develop its atmosphere.

An artist could instead render geometry directly, generate only the textures, or keep the program running as an interactive work. Each route offers a different balance of exact control and interpretation. If a diffusion stage must preserve a boundary, the system needs a mechanism to enforce that constraint. These are choices a creative medium could expose and combine.

## What the combination could offer

The advantage is to combine the expressive richness of generative models with the organization, control, and reuse of programs. Layout can use explicit structure, intricate shapes can use continuous representations, and repeated details can unfold procedurally. Different parts of a work can use different forms of expression.

In a series of illustrated stories, a character, a building, and a family of fabrics could have shared definitions that scenes refer to and vary. An artist could revise the building across the series or change one character's clothing in a single scene. These relationships give editing operations concrete targets and make consistency requirements explicit. The renderer still needs to honor them in the finished images.

Creative effort could accumulate in those definitions. A fabric generator or compositional rule developed for one project could serve the next, and collaborators could exchange ways of producing variations. Artists could gradually build their own instruments and visual vocabularies.

There may also be room to allocate computation differently: a large model makes compositional decisions, while reusable procedures or smaller decoders expand the details. Whether this saves computation depends on the cost of the mechanisms involved.

## Where the artist's effort goes

More artistic effort could move from making each stroke by hand toward directing how strokes are generated, arranged, and selected. That direction could take the form of skill documents, templates, custom models, and automation.

A skill document might specify how to establish visual rhythm, what to simplify, and where to leave space. A template could encode recurring relationships while leaving room for new subjects. An artist could select examples for a custom model and arrange tools into a workflow with particular visual tendencies.

Someone might spend weeks developing a way of drawing branches: refining its rhythm, irregularity, and response to different compositions. That work could influence illustrations, animations, and interactive scenes. The effort would live both in individual works and in the instrument used to make them.

When I was at MIT, an art teacher was enthusiastic about AI-assisted art. I find that enthusiasm understandable: designing a generative mechanism offers substantial room for artistic invention, and the mechanism itself can be an artwork.

## An artist's own reward function

An artist could also define what a generator should pursue through a custom reward function. They could write criteria directly or learn them from examples, comparisons, and feedback. An evaluator might rank alternatives, guide a search, or help train a model toward a particular balance of detail, asymmetry, and empty space.

Refining the evaluator would be part of the artistic work. A score might favor emptiness while missing what makes a sparse composition compelling. The artist would inspect the results, identify the missing distinction, and revise the criteria. Unexpected results could also change what the artist wants to pursue.

Different artists could develop different libraries, models, and evaluators even when they start with the same foundation model. Their individuality could shape the process of creation as well as their choices for a particular image.

## How new protocols could emerge

I expect reusable libraries and generative components to create demand for new exchange protocols. A collaborator may want a texture generator, an editable shape hierarchy, or the criteria used to explore a family of compositions. The shared artifact could carry more of its construction and capacity for further creation.

That requires agreed interpretations. A continuous vector needs its corresponding decoder. A procedure needs its dependencies. A reusable component needs to describe what it accepts and produces, including variable outputs and nested structures. Conventions could grow around useful libraries and spread as people exchange components between tools.

Existing multimodal systems already demonstrate some ingredients. Qwen2.5-VL projects visual patch features into vectors compatible with language-model embeddings, with sequence lengths that vary with image resolution [[5]](#reference-5). Transfusion combines discrete text with continuous image representations and generates images through diffusion within a shared Transformer [[6]](#reference-6).

The broader opportunity is to open up the representation and operations inside a modality. A patch decoder could coexist with a curve generator, a shape hierarchy, or an artist's texture procedure. Each component could have its own expansion rules. Existing models could use some of these mechanisms through libraries; other experiments could change the model interface itself.

Programs could also generate images together with the structures and choices that produced them, creating training examples for the medium. The variety and artistic usefulness of those examples would matter. Building the vocabulary and generating data for its use could develop together.

ESVG names one opening into a much larger space. Music, motion, and interactive experiences could develop their own building blocks and protocols. I expect artists to increasingly create and share whole ways of making things: libraries of visual behaviors, models with distinctive tendencies, and evolving criteria that guide a body of work.

## References

<a id="reference-1"></a>1. Mike Bostock and Observable. [What is D3?](https://d3js.org/what-is-d3)

<a id="reference-2"></a>2. W3C. [Scalable Vector Graphics (SVG) 2: Document Structure](https://www.w3.org/TR/SVG2/struct.html).

<a id="reference-3"></a>3. Lvmin Zhang, Anyi Rao, and Maneesh Agrawala. [Adding Conditional Control to Text-to-Image Diffusion Models](https://arxiv.org/abs/2302.05543). 2023.

<a id="reference-4"></a>4. Jiaqi Wu and Eytan Adar. [Exploring Bridges Between Algorithmic and AI-generated Art](https://arxiv.org/abs/2406.05508). 2024; revised 2025.

<a id="reference-5"></a>5. Shuai Bai et al. [Qwen2.5-VL Technical Report](https://arxiv.org/abs/2502.13923). 2025.

<a id="reference-6"></a>6. Chunting Zhou et al. [Transfusion: Predict the Next Token and Diffuse Images with One Multi-Modal Model](https://arxiv.org/abs/2408.11039). 2024.
