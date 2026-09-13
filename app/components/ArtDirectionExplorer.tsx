'use client';

import { useState } from 'react';
import styles from './ArtDirectionExplorer.module.css';

const modes = [
  {
    id: 'marks', label: 'Marks', sheet: 'A particular picture', detail: 'One chosen stroke',
    heading: 'Shape the individual work',
    contribution: 'Choose the bend of a branch, the edge of a leaf, or the weight of a line. The decision lives in this particular picture.',
    reuseHeading: 'A mark or a motif',
    reuse: 'A finished element can be kept, revised, or reused inside another composition.',
  },
  {
    id: 'guidance', label: 'Guidance', sheet: 'A reusable composition', detail: 'Quiet space above the grove',
    heading: 'Describe how to approach it',
    contribution: 'A skill document or template could ask for a low horizon, generous empty space, and variations on a recurring botanical motif.',
    reuseHeading: 'A way of composing',
    reuse: 'The same guidance could shape a series of images while leaving room for different subjects and details.',
  },
  {
    id: 'models', label: 'Models', sheet: 'A family of variations', detail: 'A shared visual vocabulary',
    heading: 'Develop the generative process',
    contribution: 'Select examples, adapt a model, and build an automated workflow around the qualities you want to explore.',
    reuseHeading: 'A generator and a workflow',
    reuse: 'The work invested in the process could influence many pictures, each with its own variation.',
  },
  {
    id: 'rewards', label: 'Rewards', sheet: 'A preference among possibilities', detail: 'Favor asymmetry and open space',
    heading: 'Shape what gets selected',
    contribution: 'Define a custom reward function directly, or train one from examples and comparisons, to favor a particular balance of detail, asymmetry, and open space.',
    reuseHeading: 'An evolving criterion',
    reuse: 'That preference could guide selection, search, or training. Refining what the criterion rewards becomes part of the creative work.',
  },
] as const;

function Grove({ variant = 0, highlight = false }: { variant?: number; highlight?: boolean }) {
  const trees = [
    { x: 116 + variant * 4, y: 209, size: .59 },
    { x: 216 - variant * 3, y: 214, size: .89 },
    { x: 324 + variant * 2, y: 204, size: .7 },
    { x: 399 - variant * 5, y: 217, size: .51 },
  ];
  return (
    <g fill="none" stroke="var(--accent)" strokeLinecap="round">
      <path d="M 44 222 Q 163 205 246 216 T 455 220" strokeWidth=".7" opacity=".35" />
      {trees.map(({ x, y, size }, tree) => <g key={tree} transform={`translate(${x} ${y}) scale(${size})`}>
        <path d={`M 0 0 Q ${14 + variant * 4} -75 5 -161`} strokeWidth="1.5" />
        {Array.from({ length: 10 }, (_, branch) => {
          const side = branch % 2 ? 1 : -1;
          const height = 19 + branch * 13;
          const width = (45 - branch * 2 + variant * Math.sin(branch + 1) * 8) * side;
          const featured = highlight && tree === 1 && branch === 5;
          return <g key={branch}>
            <path d={`M 6 ${-height} Q ${width * .65} ${-height - 5} ${width} ${-height - 40}`} strokeWidth={featured ? 3.6 : .8} opacity={featured ? 1 : .75} />
            {Array.from({ length: 5 }, (_, leaf) => {
              const t = (leaf + 1) / 6;
              const lx = 6 + (width - 6) * t;
              const ly = -height - 40 * t;
              return <path key={leaf} d={`M ${lx} ${ly} q ${-side * 17} -19 ${-side * 5} -26 q ${side * 15} 10 ${side * 5} 26`} fill="var(--accent)" fillOpacity={.04 + (leaf % 3) * .025} strokeWidth=".55" />;
            })}
          </g>;
        })}
      </g>)}
    </g>
  );
}

export default function ArtDirectionExplorer() {
  const [selected, setSelected] = useState(0);
  const mode = modes[selected];
  const gallery = mode.id === 'models' || mode.id === 'rewards';

  return (
    <figure className={styles.figure} id="creative-effort" aria-labelledby="creative-effort-title">
      <span className="eyebrow">An interactive thought experiment</span>
      <h3 className={styles.heading} id="creative-effort-title">Where creative effort can live</h3>
      <p className={styles.introduction}>One motif, different kinds of artistic decisions. These possibilities can coexist.</p>
      <div className={styles.controls} role="group" aria-label="Explore forms of creative effort">
        {modes.map((item, index) => <button key={item.id} type="button" className={styles.control} aria-pressed={selected === index} onClick={() => setSelected(index)}>{item.label}</button>)}
      </div>
      <div className={styles.sheet}>
        <div className={styles.sheetTop}><span>{mode.sheet}</span><span>{gallery ? 'Studies 01–03' : 'Study 01'}</span></div>
        <svg className={styles.art} viewBox="0 0 600 310" role="img" aria-label={gallery ? 'Three variations of a botanical grove. The reward example highlights a preferred composition.' : `A botanical grove illustrating ${mode.detail.toLowerCase()}.`}>
          {gallery ? <>
            {[0, 1, 2].map(variant => <g key={variant} transform={`translate(${variant * 194 + 13} 37)`}>
              <rect x="0" y="0" width="184" height="236" fill="none" stroke={mode.id === 'rewards' && variant === 1 ? 'var(--accent)' : 'var(--line)'} strokeWidth={mode.id === 'rewards' && variant === 1 ? '1.5' : '.7'} />
              <g transform={`translate(${-4 + variant * 3} ${variant === 1 ? 57 : 39}) scale(.38 .67)`}><Grove variant={variant} /></g>
              <text x="92" y="216" textAnchor="middle" fontFamily="var(--sans)" fontSize="10" fill="var(--muted)">{mode.id === 'rewards' && variant === 1 ? 'PREFERRED' : `VARIATION 0${variant + 1}`}</text>
            </g>)}
          </> : <g transform={mode.id === 'guidance' ? 'translate(60 62) scale(1 .85)' : 'translate(60 28)'}>
            <Grove highlight={mode.id === 'marks'} />
            {mode.id === 'guidance' && <g stroke="var(--muted)" strokeWidth=".6" opacity=".6"><path d="M 36 197 H 461" strokeDasharray="3 5" /><path d="M 36 -19 H 461" strokeDasharray="3 5" /></g>}
          </g>}
          {!gallery && <text x="300" y="286" textAnchor="middle" fontFamily="var(--sans)" fontSize="10" letterSpacing="1" fill="var(--muted)">{mode.detail.toUpperCase()}</text>}
        </svg>
      </div>
      <div className={styles.explanation} aria-live="polite" aria-atomic="true">
        <div><span className="eyebrow">The artist contributes</span><h4>{mode.heading}</h4><p>{mode.contribution}</p></div>
        <div><span className="eyebrow">What carries forward</span><h4>{mode.reuseHeading}</h4><p>{mode.reuse}</p></div>
      </div>
      <figcaption className={styles.caption}><span className="figure-number">FIG. 02</span>Conceptual examples drawn procedurally. The model and reward views illustrate possible workflows; they do not run a trained model or evaluator.</figcaption>
    </figure>
  );
}
