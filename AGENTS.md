# Husky AI Blogs — repository rules

These rules apply to every post and every task in this repository. This file is
tracked source, edited directly; it is not generated.

## Required skill

Before writing or revising a post, creating its page, or changing site styling,
read [Blog Authoring](llm-agent/skills/blog-authoring/SKILL.md) and its relevant
supporting documents. The skill is canonical in this repository; do not create
a competing style guide or copy its rules into individual posts.

## Fixed design baseline

- All posts use the approved design established by the larger-outputs essay:
  warm ivory paper, brown ink, restrained terracotta accents, serif headings and prose,
  sans-serif navigation and metadata, generous spacing, and thin rules.
- Reuse `app/globals.css`, `app/layout.tsx`, and `app/components/`. New posts
  must not introduce independent typography, page widths, navigation, or
  reference styles. When shared layout code needs extraction, put it in a
  reusable component rather than forking it per post.
- Article illustrations and interactive examples may vary with the subject.
  Their framing, captions, controls, and responsive behavior must fit the
  shared visual system. The first essay's diagram and example are not required
  content for other essays.
- Article work is not authorization to redesign the site. Keep the established
  appearance unless the user requests a visual change. Routine fixes and new
  components that follow the baseline do not require another approval.

## Writing standard

Lead with the point, build a strong argument, and save the reader's time.
Remove unnecessary complexity, repetition, and information while preserving
fluent prose and natural transitions. Do not enforce short sentences, word
quotas, or a fixed number of sections. Concision must not turn an essay into
disconnected statements. Keep evidence and necessary qualifications close to
the claims they support.

## Work and publication boundaries

- Check current files and Git state before editing; multiple article tasks may
  share this checkout. Preserve work owned by other tasks and coordinate changes
  to shared files.
- Keep article prose in `content/posts/`; keep reusable presentation in `app/`.
  Do not import raw chats, private research, or internal Husky material into
  this public repository. Follow the publication boundary in `README.md`.
- Previewing, committing, and publishing are different outcomes. A push to
  `main` triggers GitHub Pages. Publish only within the user's authorized scope;
  approval of a design alone is not a publication request.
- Validate the changed behavior. For layout or interaction changes, build,
  lint, and inspect desktop and mobile previews. For prose-only changes,
  check the rendered article and its references. Report actual completion.
