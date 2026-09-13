# Adding a post

## Start from current work

Inspect the existing articles, routes, shared components, and Git status.
If another task owns the draft, keep its prose and research decisions with
that task. Coordinate edits to the homepage, global CSS, and shared layout.

## Article source

Store material prepared for the public site in `content/posts/<slug>.md`.
Use one H1 title, an opening argument, and H2 sections. The current route
derives its introduction and contents navigation from that structure.

Use the section structure the argument needs. When references are present,
keep stable citation targets and a final references section. Preserve the
slug of an already published post unless a migration is explicitly intended.

## Site integration

Use the existing article route as the visual reference. Reuse shared components
and CSS classes; extract common layout into a component when needed rather
than maintaining independent copies across posts.

Each route must supply its own title, description, category, essay number,
date, canonical URL, and social metadata. Keep the displayed title and metadata
consistent with the Markdown title. Reading time should derive from the article
body. The larger-outputs essay's number, dates, figure captions, table label,
sidebar note, and explorer insertion point are article-specific.

Provide meaningful labels for tables and illustrations. Use valid, unique
section IDs and working contents links. Introduce an interactive example only
when it helps explain this article, and keep it within the shared visual style.

Add a homepage entry when the post is ready for site integration. Preserve
existing entries and their order unless the user asks to change them. Match
the established essay-list treatment, with correct title, link, and metadata.

## Verify and deliver

For an added route or changed presentation, run `npm run build` and
`npm run lint`, then inspect the local desktop and mobile page. Check title
hierarchy, navigation, references, table overflow, and any changed interaction.
Check an existing article too when shared styles or components changed.

For a documentation-only rule change, verify paths and skill frontmatter;
a site rebuild is unnecessary. For an article-only edit, verify the rendered
content and affected citations without inventing a test suite.

Keep a local preview distinct from a public deployment. A push to `main`
publishes through GitHub Pages; a draft or design review does not itself grant
permission to publish.
