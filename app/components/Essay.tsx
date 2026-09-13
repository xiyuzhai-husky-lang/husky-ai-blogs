import Link from 'next/link';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { ReactNode } from 'react';
import { marked } from 'marked';

type EssayProps = {
  slug: string;
  title: ReactNode;
  category: string;
  number: string;
  date: string;
  displayDate: string;
  illustration: ReactNode;
  caption: ReactNode;
  sidebarNote: string;
  jumpLink?: { href: string; label: string };
  afterSections?: Record<string, ReactNode>;
};

export default async function Essay({
  slug, title, category, number, date, displayDate,
  illustration, caption, sidebarNote, jumpLink, afterSections,
}: EssayProps) {
  const markdown = await readFile(path.join(process.cwd(), 'content/posts', `${slug}.md`), 'utf8');
  const [opening, ...parts] = markdown.replace(/^# .+\n/, '').trim().split(/^## /m);
  // Article HTML comes only from this repository's authored Markdown.
  const introduction = await marked.parse(opening);
  const sections = await Promise.all(parts.map(async part => {
    const lineEnd = part.indexOf('\n');
    const heading = part.slice(0, lineEnd).trim();
    const id = heading.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
    const html = await marked.parse(part.slice(lineEnd + 1));
    return { heading, id, html };
  }));
  const readingMinutes = Math.ceil(markdown.split('## References')[0].split(/\s+/).length / 220);

  return (
    <main id="main-content" className="essay-page">
      <article>
        <header className="essay-hero">
          <div className="hero-topline">
            <Link href="/">← All essays</Link>
            <span className="eyebrow">{category} / Essay {number}</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>{title}</h1>
              <div className="hero-introduction" dangerouslySetInnerHTML={{ __html: introduction }} />
              <div className="hero-meta"><time dateTime={date}>{displayDate}</time><span>{readingMinutes} min read</span></div>
              {jumpLink && <a className="text-link" href={jumpLink.href}>{jumpLink.label}<span aria-hidden="true">↓</span></a>}
            </div>
            <figure className="hero-art">
              {illustration}
              <figcaption><span className="figure-number">FIG. 01</span>{caption}<br /><span className="figure-note">A conceptual illustration.</span></figcaption>
            </figure>
          </div>
        </header>
        <div className="article-layout">
          <aside className="article-sidebar">
            <nav aria-label="On this page">
              <span className="eyebrow">In this essay</span>
              <ol>{sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>)}</ol>
            </nav>
            <p className="sidebar-note">{sidebarNote}</p>
          </aside>
          <div className="article-main">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className={`essay-section${section.id === 'references' ? ' references-section' : ''}`} aria-labelledby={`${section.id}-heading`}>
                <div className="section-heading"><span className="section-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h2 id={`${section.id}-heading`}>{section.heading}</h2></div>
                <div className="prose" dangerouslySetInnerHTML={{ __html: section.html }} />
                {afterSections?.[section.id]}
              </section>
            ))}
            <div className="essay-end"><span className="end-mark" aria-hidden="true">✳</span><Link href="/">Back to all essays <span aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </article>
    </main>
  );
}
