import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Husky AI Blogs home">
        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" aria-hidden="true">
          <path d="M3 3v22M24 3v22M3 14h21M9 7l9 14M18 7L9 21" stroke="currentColor" strokeWidth="2" />
        </svg>
        HUSKY <span>AI BLOGS</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#essays">Essays</Link>
        <a href="https://github.com/xiyuzhai-husky-lang/husky-ai-blogs">Source <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
