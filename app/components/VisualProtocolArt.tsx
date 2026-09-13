const leaves = [
  { x: 300, y: 355, angle: -66, scale: .9, kind: 'shape' },
  { x: 315, y: 321, angle: 49, scale: 1.05, kind: 'texture' },
  { x: 320, y: 270, angle: -48, scale: 1.16, kind: 'texture' },
  { x: 326, y: 229, angle: 58, scale: .94, kind: 'shape' },
  { x: 329, y: 180, angle: -33, scale: .95, kind: 'structure' },
  { x: 328, y: 132, angle: 24, scale: .8, kind: 'texture' },
];

const outline = 'M 0 0 C -48 -24 -57 -89 0 -145 C 51 -94 47 -39 0 0 Z';

export default function VisualProtocolArt() {
  return (
    <svg className="flow-field" viewBox="0 0 640 520" role="img" aria-label="A botanical study combining shared structure, outlined shapes, and fine texture in one branching plant. These illustrate possible building blocks of a visual protocol.">
      <g fill="none" stroke="var(--line)" strokeWidth=".7">
        <circle cx="320" cy="248" r="197" strokeDasharray="2 7" />
        <path d="M 64 440 H 576 M 320 30 V 470" strokeDasharray="2 7" />
        {[100, 180, 260, 340, 420, 500, 580].map(x => <path key={x} d={`M ${x} 436 V 444`} />)}
      </g>
      <path d="M 282 437 C 306 373 315 323 322 265 C 335 164 330 116 344 55" fill="none" stroke="var(--accent)" strokeWidth="2" />
      {leaves.map(({ x, y, angle, scale, kind }, index) => (
        <g key={index} transform={`translate(${x} ${y}) rotate(${angle}) scale(${scale})`}>
          <path d={outline} fill={kind === 'texture' ? 'var(--accent)' : 'var(--paper)'} fillOpacity={kind === 'texture' ? '.08' : '1'} stroke="var(--accent)" strokeWidth="1" />
          <path d="M 0 0 Q -6 -69 0 -145" fill="none" stroke="var(--accent)" strokeWidth=".8" />
          {kind === 'texture' && Array.from({ length: 27 }, (_, line) => {
            const t = (line + 1) / 29;
            const stemY = -145 * t;
            const width = 33 * Math.sin(Math.PI * t);
            return <g key={line} fill="none" stroke="var(--accent)" strokeWidth=".65" opacity={.35 + (line % 3) * .15}><path d={`M -2 ${stemY + 12} Q ${-width * .6} ${stemY + 8} ${-width} ${stemY - 7}`} /><path d={`M -2 ${stemY + 12} Q ${width * .65} ${stemY + 4} ${width} ${stemY - 10}`} /></g>;
          })}
          {kind === 'shape' && <g fill="var(--paper)" stroke="var(--accent)" strokeWidth="1"><circle cx="0" cy="0" r="3" /><circle cx="0" cy="-145" r="3" /><circle cx="-33" cy="-74" r="3" /><circle cx="34" cy="-74" r="3" /></g>}
          {kind === 'structure' && Array.from({ length: 5 }, (_, branch) => {
            const y = -24 - branch * 22;
            const width = 30 * Math.sin(Math.PI * (branch + 1) / 7);
            return <g key={branch} stroke="var(--accent)" strokeWidth=".8"><path d={`M -2 ${y + 10} L ${-width} ${y - 10} M -2 ${y + 10} L ${width} ${y - 15}`} fill="none" /><circle cx="-2" cy={y + 10} r="2.5" fill="var(--paper)" /><circle cx={-width} cy={y - 10} r="2" fill="var(--accent)" /><circle cx={width} cy={y - 15} r="2" fill="var(--accent)" /></g>;
          })}
        </g>
      ))}
      <g fill="none" stroke="var(--muted)" strokeWidth=".65" opacity=".6">
        <path d="M 125 162 H 191 L 235 133 M 479 260 H 521 M 141 388 H 191 L 221 364" />
      </g>
      <g fill="var(--muted)" fontFamily="var(--sans)" fontSize="10" letterSpacing="1.5">
        <text x="82" y="150">STRUCTURE</text>
        <text x="491" y="245">TEXTURE</text>
        <text x="95" y="408">GEOMETRY</text>
      </g>
      <text x="320" y="488" textAnchor="middle" fill="var(--accent)" fontFamily="var(--serif)" fontSize="20" fontStyle="italic">One image, many ways to make it.</text>
    </svg>
  );
}
