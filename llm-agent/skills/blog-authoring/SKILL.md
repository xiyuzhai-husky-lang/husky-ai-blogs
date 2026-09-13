---
name: blog-authoring
description: Write, revise, and integrate Husky AI Blogs posts using this repository's approved editorial and visual style. Use for article prose, article routes, illustrations, and shared blog presentation.
---

# Blog Authoring

Make each post a fluent, direct argument presented in the same visual system.
The root [AGENTS.md](../../../AGENTS.md) sets the repository-wide requirements.

Read the document for the work at hand:

- [Writing](docs/writing.md): drafting, editing, evidence, and sentence flow.
- [Visual style](docs/visual-style.md): layouts, typography, figures, and controls.
- [New post](docs/new-post.md): integrating an article with the site and checking it.

The approved implementation is the source for exact styling:

- [Global CSS](../../../app/globals.css)
- [Site layout](../../../app/layout.tsx) and [header](../../../app/components/SiteHeader.tsx)
- [Reference article route](../../../app/posts/large-language-models-should-have-large-outputs/page.tsx)

Preserve the distinction between shared presentation and article-specific
content. New topics can need different diagrams, examples, and section counts;
they still belong to the same publication. Do not reproduce the first essay's
claims, citations, or artwork merely to match its appearance.

Keep these instructions and their linked documents consistent when the user
changes the standing style. This is a small, directly maintained skill; no
generated instruction pipeline or separate local adapter is required.
