import type { Metadata } from 'next';
import Essay from '../../components/Essay';
import VisualProtocolArt from '../../components/VisualProtocolArt';
import ArtDirectionExplorer from '../../components/ArtDirectionExplorer';

const title = 'Enhanced SVG for Image Generation and Beyond';
const description = 'AI could open a vast space of programmable creative media, new protocols, and ways for artists to shape the process of creation.';
const articlePath = '/posts/enhanced-svg-for-image-generation-and-beyond/';

export const metadata: Metadata = {
  title: `${title} | Husky AI Blogs`,
  description,
  alternates: { canonical: articlePath },
  openGraph: { title, description, type: 'article', url: articlePath, publishedTime: '2026-09-12' },
  twitter: { card: 'summary', title, description },
};

export default function Post() {
  return <Essay
    slug="enhanced-svg-for-image-generation-and-beyond"
    title={<>Enhanced SVG for Image Generation <em>and Beyond</em></>}
    category="Art & representation"
    number="002"
    date="2026-09-12"
    displayDate="September 12, 2026"
    illustration={<VisualProtocolArt />}
    caption="Shared structure, richer visual building blocks."
    sidebarNote="New creative media, and more places for artistic judgment."
    jumpLink={{ href: '#creative-effort', label: 'Explore the possibilities' }}
    afterSections={{ 'an-artists-own-reward-function': <ArtDirectionExplorer /> }}
  />;
}
