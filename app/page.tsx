const topics = [
  ['01', 'Artificial intelligence', 'Systems that turn learned representations into useful work.'],
  ['02', 'Formal reasoning', 'Proofs, verification, and new interfaces between models and kernels.'],
  ['03', 'Programming languages', 'Language design as a way to make intelligence precise.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Husky AI Blogs home">
          <span className="brand-mark">H</span>
          <span>Husky AI Blogs</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#writing">Writing</a>
          <a href="#about">About</a>
          <a
            href="https://github.com/xiyuzhai-husky-lang/husky-ai-blogs"
            rel="noreferrer"
            target="_blank"
          >
            Source
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-index" aria-hidden="true">001</div>
        <div className="hero-copy">
          <p className="eyebrow">Independent research notes</p>
          <h1>
            Intelligence,
            <br />made precise.
          </h1>
          <p className="dek">
            Essays on artificial intelligence, formal reasoning, and programming
            languages—from raw ideas to verifiable systems.
          </p>
          <a className="text-link" href="#writing">
            Explore the field notes <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="hero-signal" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="writing" id="writing">
        <div className="section-heading">
          <p className="eyebrow">The writing</p>
          <p className="section-note">Careful ideas, published deliberately.</p>
        </div>
        <article className="lead-card">
          <div>
            <p className="card-meta">First dispatch · In preparation</p>
            <h2>A wider channel between thought and formal expression</h2>
          </div>
          <p>
            The opening essay will examine how machine representations might be
            read out as large, verifiable formal objects—not only serialized as
            natural-language tokens.
          </p>
          <span className="status">Coming soon</span>
        </article>
      </section>

      <section className="topics" aria-label="Topics">
        {topics.map(([number, title, description]) => (
          <article className="topic" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <section className="about" id="about">
        <p className="eyebrow">About this publication</p>
        <p className="about-statement">
          Husky AI Blogs is a public notebook for ideas that are ready to stand
          on their own: clear enough to inspect, concrete enough to challenge,
          and open enough to improve.
        </p>
      </section>

      <footer>
        <span>Husky AI Blogs</span>
        <span>Built in public · 2026</span>
      </footer>
    </main>
  );
}
