import type { Metadata } from 'next';
import { IBM_Plex_Mono, Manrope } from 'next/font/google';
import './globals.css';

const sans = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
});

const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

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
        width: 1734,
        height: 907,
        alt: 'Husky AI Blogs — Intelligence, made precise.',
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
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
