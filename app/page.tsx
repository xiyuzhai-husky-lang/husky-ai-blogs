import Link from 'next/link';
import FlowField from './components/FlowField';
import VisualProtocolArt from './components/VisualProtocolArt';

export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <section className="home-intro">
        <span className="eyebrow">Independent perspectives</span>
        <h1>Thinking about<br />what AI could become.</h1>
        <p>Essays on artificial intelligence, formal reasoning, and programming languages.</p>
      </section>
      <section id="essays" className="essay-index" aria-labelledby="essays-heading">
        <div className="index-heading"><h2 id="essays-heading">Essays</h2><span className="eyebrow">02 / September 2026</span></div>
        <Link className="featured-essay" href="/posts/large-language-models-should-have-large-outputs/">
          <div className="featured-copy">
            <span className="eyebrow">AI architecture · Essay 001</span>
            <h3>Large Language Models Should Have <em>Larger Outputs</em></h3>
            <p>Shared computation could give us far more evidence than an answer alone.</p>
            <span className="text-link">Read the essay <span aria-hidden="true">↗</span></span>
          </div>
          <div className="featured-art"><FlowField /></div>
        </Link>
        <Link className="featured-essay" href="/posts/enhanced-svg-for-image-generation-and-beyond/">
          <div className="featured-copy">
            <span className="eyebrow">Art & representation · Essay 002</span>
            <h3>Enhanced SVG for Image Generation <em>and Beyond</em></h3>
            <p>AI could open a vast space of creative media, where artists shape their own ways of creating.</p>
            <span className="text-link">Read the essay <span aria-hidden="true">↗</span></span>
          </div>
          <div className="featured-art"><VisualProtocolArt /></div>
        </Link>
      </section>
    </main>
  );
}
