# Husky AI Blogs

The independent public website for essays on artificial intelligence, formal
reasoning, and programming languages.

## Publication boundary

This repository contains only website code and material deliberately prepared
for public release. Raw conversations, private drafts, internal research notes,
unreleased experiments, and material copied automatically from Husky do not
belong here.

## Development

Repository-wide rules live in [AGENTS.md](AGENTS.md). The reusable
[Blog Authoring skill](llm-agent/skills/blog-authoring/SKILL.md) defines the
shared visual style, writing standard, and new-post workflow for every article.

Published article sources live in `content/posts/` as Markdown. Article routes
in `app/posts/` render them at build time, including tables and reference links.
The home page lists each published article. Edit the Markdown source to revise
an article; previews are available through the development server.

```sh
npm install
npm run dev
```

Create a production build with:

```sh
npm run build
```

The site is deployed to GitHub Pages at
[blog.husky-lang.org](https://blog.husky-lang.org). Pushes to `main` publish
the static export automatically. Source development remains independent from
the main Husky repository.
