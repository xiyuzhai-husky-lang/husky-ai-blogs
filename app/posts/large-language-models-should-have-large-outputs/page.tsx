import type { Metadata } from 'next';
import Link from 'next/link';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { marked } from 'marked';

const title = 'Large Language Models Should Have Large Outputs';
const description = 'A prediction about shared computation, specialized output branches, and more inspectable AI work.';
const articlePath = '/posts/large-language-models-should-have-large-outputs/';

export const metadata: Metadata = {
  title: `${title} | Husky AI Blogs`,
  description,
  alternates: { canonical: articlePath },
  openGraph: {
    title,
    description,
    type: 'article',
    url: articlePath,
    publishedTime: '2026-09-09',
  },
  twitter: { card: 'summary', title, description },
};

export default async function Post() {
  const markdown = await readFile(
    path.join(process.cwd(), 'content/posts/large-language-models-should-have-large-outputs.md'),
    'utf8',
  );
  // This HTML comes only from the repository's reviewed article source.
  const html = await marked.parse(markdown);

  return (
    <main>
      <nav aria-label="Article navigation"><Link href="/">← Home</Link></nav>
      <p className="post-date"><time dateTime="2026-09-09">September 9, 2026</time></p>
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <Link href="/">← Home</Link>
    </main>
  );
}
