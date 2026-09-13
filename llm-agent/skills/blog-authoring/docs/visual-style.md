# Visual style

The approved baseline is the current larger-outputs essay and homepage.
Anthropic's economic-scenarios presentation informed the direction; the local
implementation is the reference for future work.

## Shared appearance

Use the tokens in `app/globals.css`, not a new palette per article:

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#faf6ef` | Page background |
| `--ink` | `#332b26` | Main text |
| `--muted` | `#75665c` | Metadata and secondary text |
| `--line` | `#e2d6c9` | Dividers |
| `--accent` | `#a05035` | Terracotta links and restrained emphasis |
| `--panel` | `#f2e9dd` | Warm inset figures and previews |
| `--line-strong` | `#cbbbaa` | Control borders and stronger dividers |
| `--channel-answer` | `#995139` | Answer channel |
| `--channel-design` | `#81613f` | Design channel |
| `--channel-audit` | `#975660` | Audit channel |
| `--channel-proof` | `#756136` | Proof channel |
| `--serif` | Iowan / Palatino / Georgia stack | Headings and article prose |
| `--sans` | System sans-serif stack | Navigation, metadata, tables, controls |

The shared palette is warm ivory, brown ink, and terracotta, with warm earth
tones for diagrams. Apply it to illustrations and interactive examples as well
as page chrome; use the shared channel tokens for consistent figure colors.

CSS is the executable source of truth. Update this guide when an intentional
change to the shared design changes these values.

Preserve the hierarchy: a large serif title, a readable introduction, quiet
metadata, numbered section headings, and generous paragraph spacing. Article
prose currently uses 19px type with 1.65 line height, reduced to 18px on mobile.
Do not shrink text or crowd the page to make an article appear shorter.

## Page composition

- Reuse the site header and footer from the root layout.
- Use the essay hero, article layout, prose, table, and reference classes from
  the existing route. The page is capped at 1320px; its reading column at 800px.
- Keep the desktop contents navigation beside the article. On mobile it becomes
  a horizontal section list, with the article in one column.
- Preserve the existing responsive breakpoints at 1000px and 720px unless a
  specific layout problem calls for a shared adjustment.
- Use article-specific metadata and artwork. Omit an illustration or explorer
  when it adds no explanatory value; do not add decorative placeholders.

## Figures and interaction

Figures should explain the argument. Favor clear geometry, restrained color,
thin lines, and concise captions. Use SVG or native components for diagrams;
do not copy another publication's branding or artwork.

Keep interactive figures inside the reading experience. Reuse the explorer's
panel, control, and artifact styles where they fit. New controls must actually
change the displayed example and remain usable by keyboard and on mobile.
Preserve visible focus, meaningful labels, reduced-motion behavior, and a
minimum 44px control height.

Identify conceptual illustrations and hypothetical examples as such. Never
make decorative marks look like measured data or present sample output as a
verified result. Keep references and conversion assumptions available.

Avoid adding unrelated themes, gradients, large shadows, decorative card grids,
font packages, or motion effects to an ordinary article task. Extend the current
system where the content needs it.
