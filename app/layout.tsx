import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from './components/SiteHeader';

const siteUrl = new URL(
  process.env.SITE_URL ?? 'http://localhost:3000',
);

const description =
  'Independent essays on artificial intelligence, formal reasoning, and programming languages.';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Husky AI Blogs',
  description,
  openGraph: {
    title: 'Husky AI Blogs',
    description,
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: 'Husky AI Blogs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Husky AI Blogs',
    description,
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <span>Husky AI Blogs</span>
          <span>Artificial intelligence · Formal reasoning · Programming languages</span>
          <a href="https://github.com/xiyuzhai-husky-lang/husky-ai-blogs">Source ↗</a>
        </footer>
      </body>
    </html>
  );
}
