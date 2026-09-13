# Enhanced SVG for Image Generation and Beyond

I expect AI to bring a new generation of programmable creative media. Models could help us invent visual building blocks, combine them into programs, and develop new ways to exchange and transform creative work. Human effort could increasingly go into shaping these processes: writing guidance, building tools, training custom models, or defining what makes a result worth pursuing. **Enhanced SVG**, or **ESVG**, is a starting point for imagining this much larger space.

## A programmable medium

D3 offers a useful point of departure. It provides composable tools for creating dynamic graphics with JavaScript, working with standards such as SVG and Canvas [[1]](#reference-1). SVG itself gives an image addressable elements, groups, and reusable definitions [[2]](#reference-2). These are useful properties for a medium that software can inspect and manipulate.

Programming lets a way of making something become an object of further creation. A procedure for drawing a tree can be reused, given parameters, combined with a layout algorithm, and applied across a forest. Someone can build an illustrated map from those components; someone else can turn them into an animation. Functions, loops, and data structures let the visual vocabulary grow through use.

Now imagine extending that freedom to the representations inside the components. A tree generator might use explicit rules for branching, a learned representation for the shape of its leaves, and another program for the texture of its bark. A model could help write the surrounding code and produce the inputs those components need.

A Python library would be one practical way to start. Image generation becomes a task of generating and executing Python, with access to a growing collection of visual operations. JavaScript or a new language could serve the same purpose. The possibilities expand as we change what those operations can accept, produce, and compose.

## Building blocks for a different kind of user

Consider a curve. A person working in a graphical editor benefits from a manageable set of anchors and handles. They can see what each control does and move it deliberately. This is an interface shaped by human perception and interaction, and its choices also influence what is convenient to express.

A model might work comfortably with a very different representation. It could directly produce a continuous latent representation: a high-dimensional vector that a decoder expands into an intricate curve. The decoder could be learned, written as an algorithm, or combine both. The coordinates would not all need meanings a person could name or adjust individually. A surrounding program could still specify endpoints, attachment positions, or other properties that matter to the composition.

Texture makes this possibility especially vivid. Think of the variation in wood grain, woven fabric, or a weathered surface. A continuous representation could carry visual detail while a program determines where it belongs, how it is oriented, and which objects share it. An artist could develop a family of such representations as part of their own vocabulary.

One possible interface would interleave discrete instructions with continuous content: an operation or reference at one point, a vector describing a visual component at another. These continuous units might play a role similar to tokens in a sequence, while carrying values beyond a fixed vocabulary of discrete symbols. The distinction concerns what a model directly emits and what the receiving system understands. Ordinary graphics libraries already accept numerical parameters; this proposal also opens up the meaning and decoding of those parameters.

Discrete codes could serve some of these purposes too. A code might select a complex learned shape. Continuous representations, symbolic procedures, and learned decoders offer different freedoms that could coexist. The attractive possibility is a medium whose vocabulary can be designed around what humans want to guide and what models can express.

## How a few units could unfold

The relationship between a unit and its output could be variable as well. Imagine three high-level tokens describing a botanical motif. A decoder might expand them into dozens of shapes, which in turn unfold into thousands of strokes. The amount of output could depend on the parameters, the surrounding composition, or decisions made during execution. Another use of the same component might produce only a sparse silhouette.

This is a variadic possibility at the level of the components themselves: operations could accept varying numbers of inputs and produce varying numbers of outputs, and their results could be composed and expanded again. A rule-based procedure, a learned decoder, or a combination of the two could determine that expansion. The representation could move between levels of detail as the work requires.

The library and decoder supply much of the knowledge behind such a short description. A few tokens can invoke a rich way of making something; the result draws on the rules, examples, and visual tendencies already embodied in that mechanism. Developing those mechanisms gives artists and toolmakers another place to put detail and judgment.

## Many routes to an image

The same openness applies to intermediate representations. A cell complex could describe regions and how their boundaries fit together. A shape tree could organize the parts of a figure into a hierarchy. A program could build one of these structures, transform it, and use another representation for the next stage of its work.

Imagine an illustrated city. One stage could organize neighborhoods and shared borders, another could arrange buildings within them, and a third could generate detailed facades. The final appearance could depend on geometric rules, learned textures, or a model interpreting the composition. Different representations would make different decisions convenient to express.

Programmatically generating a sketch and passing it to a diffusion model is another route. ControlNet demonstrates diffusion conditioned on inputs such as edges, depth, segmentation, and human pose [[3]](#reference-3). GenP5 explores a related bridge by extending p5.js with diffusion-based styling and conditioning of algorithmically constructed art [[4]](#reference-4). These existing connections give us concrete places from which to imagine more elaborate combinations.

For instance, an artist could program the spacing and rhythm of a grove, use a sketch to explore its silhouette, and ask a model to develop its atmosphere. A different workflow might render the geometry directly and generate only the textures. An interactive work could keep the program running, producing new compositions as its audience moves through it.

Each route has its own relationship between control and interpretation. A diffusion stage can reinterpret a sketch, so exact boundaries need a mechanism that preserves them when exactness matters. Elsewhere, that freedom to reinterpret may be something the artist wants. The medium could offer several ways to make such choices.

Cell complexes, shape trees, continuous representations, procedural sketches, and diffusion describe directions within a large territory. They can be combined, replaced, and extended. Exploring that territory could produce whole families of creative tools.

## What the combination could offer

The overall promise is to bring the expressive richness of generative models together with the organization, control, and reuse of programs. A composition could use explicit structure for layout, continuous representations for intricate shapes, procedures for repetition, and generative interpretation for atmosphere. Each part could use a representation suited to the decisions being made about it.

Consider a series of illustrated stories. A character, a recurring building, and a family of fabrics could have shared definitions that individual scenes refer to and vary. An artist could revise the building across the series or change one character's clothing in a particular scene. Keeping these relationships gives an editing system concrete places to act and a way to express what should stay consistent. The rendering process would still need to honor those relationships for the finished images to preserve them.

The same structure lets creative work accumulate. A carefully developed fabric generator, compositional rule, or character component can become part of the next project. Collaborators could exchange both finished elements and ways of producing variations. A visual vocabulary could grow with a body of work, carrying forward discoveries that once required considerable effort.

There may also be opportunities to spend computation differently. A large model could make compositional decisions and invoke reusable procedures or smaller decoders for detailed expansion. Components that remain unchanged could be reused where the rendering process permits it. Whether this saves computation depends on the cost of those mechanisms; the broader freedom is to choose how each part of a work gets made.

## Where the artist's effort goes

When I was at MIT, an art teacher was enthusiastic about AI-assisted art. That enthusiasm makes sense to me: the process through which art is made offers ample room for artistic invention. A carefully developed generative mechanism can itself be an artwork.

With richer programmable media, more of an artist's effort could move from making each stroke by hand toward shaping how possible strokes are generated, arranged, and selected. That work could happen at many levels, with close attention to a single detail alongside decisions that affect an entire series.

A skill document could describe how the artist approaches a scene: how to establish its visual rhythm, what to simplify, where to leave space, and when to depart from a recurring motif. Examples and revisions could make those instructions increasingly specific. A template could turn some of that guidance into a reusable composition, carrying decisions about relationships while leaving room for new subjects.

An artist could also develop custom models and automated workflows. Choosing examples, refining a model's tendencies, and arranging how different tools interact would become ways of shaping the medium. The result might be a personal instrument for making a particular kind of image, one that changes as the artist's interests change.

Imagine someone spending weeks on a way of drawing branches. They adjust its rhythm, its irregularities, and the circumstances in which it becomes sparse or dense. They then use it across illustrations, animations, and interactive scenes. Their effort lives both in the individual works and in the behavior they have taught or programmed into the instrument.

That creates more places for artistic judgment to accumulate. A useful instruction can survive a session. A visual procedure can outlive the picture for which it was invented. An artist's tools can become a record of discoveries that continue to influence later work.

## An artist's own reward function

A further possibility is to make the artist's preferences part of the process that searches for or learns to produce images. A custom reward function could express what the artist wants a generator to pursue.

Some criteria could be written directly. Others could be learned from examples, comparisons, and feedback. An artist might repeatedly prefer compositions with a particular tension between order and irregularity, or with a certain balance of detail and empty space. An evaluator could learn aspects of those preferences and use them to rank alternatives, guide search, or help train a model.

Developing that evaluator would itself involve artistic work. The artist would examine what it favors, identify what it misses, and refine it. A score may latch onto an easy surface feature, such as emptiness, while missing the quality that made a sparse composition compelling. Correcting that mismatch requires looking closely and articulating a better distinction.

This also makes room for taste to evolve. An artist could discover something unexpected in the results, revise the criteria, and explore again. The generator, the evaluation process, and the artist's own judgment could develop together. A reward function could become a changing part of a creative practice.

I find the possibility of personal creative systems especially interesting. Different artists could build different libraries, collect different examples, and reward different qualities, even when they begin with the same model. Their individuality could influence the machinery of creation as well as the choices made for a particular image.

## How new protocols could emerge

Existing multimodal models already provide concrete examples of some of these ingredients. Qwen2.5-VL projects visual patch features into vectors compatible with a language model's embeddings, with sequence lengths that vary with image resolution [[5]](#reference-5). Transfusion combines discrete text with continuous image representations and generates images through diffusion within a shared Transformer [[6]](#reference-6). Continuous visual representations and variable sequence lengths are already part of this landscape.

I imagine opening up more of the choices inside that landscape: what a visual unit represents, how it unfolds, what operations can transform it, and how its construction survives for later use. A patch decoder could be one component alongside a curve generator, a shape hierarchy, or an artist's own texture procedure. The expansion of an individual component could vary independently of the length of the surrounding sequence. Some of this could begin in libraries used by existing models; other experiments could explore new model interfaces.

These practices would give people reasons to exchange more of a work's construction. A collaborator might want to reuse a texture generator, modify a shape hierarchy, apply a compositional template to a new subject, or continue exploring with an artist's evaluation criteria. Sharing those capabilities requires ways to carry the relevant structure and resources between tools.

This is where I expect new protocols to emerge. A continuous representation needs an agreed interpretation and its corresponding decoder; knowing that it is a vector does not say how to turn it into a curve or a texture. A procedure needs the operations on which it depends. A reusable component needs a way to describe what it accepts and what it produces, including variable outputs and nested structures. Conventions for these things could let a visual idea travel with more of its capacity for further creation intact.

An early version might grow around a small library. Artists and developers could share components, adapt them, and discover combinations worth making easier. Models could help create the components and learn to use them. Successful conventions might spread across tools until something recognizable as a language or protocol takes shape.

The same process could generate training material. Programs can produce images together with the structures and choices that led to them; variations can produce families of related examples. There is room to imagine increasingly automated data generation here, with the variety and artistic usefulness of that data becoming an important constraint. Building a visual vocabulary and building examples of its use could develop together.

Enhanced SVG is one way to picture an opening into this space. Other developments could begin with a drawing library, an animation system, a learned renderer, or an artist's personal workflow. Similar questions extend to music, motion, and interactive experiences: what can serve as a building block, how can it be composed, and where can a person express judgment?

I expect this to become a broad field of invention. Artists could leave behind pictures, performances, and entire ways of creating: a library of visual behaviors, a model with a distinctive sensibility, or a changing set of criteria that guides an ongoing body of work. The creative medium itself would be something they could shape.

## References

<a id="reference-1"></a>1. Mike Bostock and Observable. [What is D3?](https://d3js.org/what-is-d3)

<a id="reference-2"></a>2. W3C. [Scalable Vector Graphics (SVG) 2: Document Structure](https://www.w3.org/TR/SVG2/struct.html).

<a id="reference-3"></a>3. Lvmin Zhang, Anyi Rao, and Maneesh Agrawala. [Adding Conditional Control to Text-to-Image Diffusion Models](https://arxiv.org/abs/2302.05543). 2023.

<a id="reference-4"></a>4. Jiaqi Wu and Eytan Adar. [Exploring Bridges Between Algorithmic and AI-generated Art](https://arxiv.org/abs/2406.05508). 2024; revised 2025.

<a id="reference-5"></a>5. Shuai Bai et al. [Qwen2.5-VL Technical Report](https://arxiv.org/abs/2502.13923). 2025.

<a id="reference-6"></a>6. Chunting Zhou et al. [Transfusion: Predict the Next Token and Diffuse Images with One Multi-Modal Model](https://arxiv.org/abs/2408.11039). 2024.
