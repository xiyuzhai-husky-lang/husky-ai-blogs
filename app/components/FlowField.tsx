const channels = [
  { name: 'ANSWER', color: 'var(--channel-answer)', y: 85 },
  { name: 'DESIGN', color: 'var(--channel-design)', y: 200 },
  { name: 'AUDIT', color: 'var(--channel-audit)', y: 315 },
  { name: 'PROOF', color: 'var(--channel-proof)', y: 430 },
];

export default function FlowField() {
  return (
    <svg className="flow-field" viewBox="0 0 640 520" role="img" aria-label="A conceptual illustration of shared model computation expanding into answer, design, audit, and proof outputs.">
      <g className="field-grid" stroke="currentColor" strokeWidth="0.5">
        {Array.from({ length: 17 }, (_, i) => <path key={`v${i}`} d={`M ${i * 40} 20 V 500`} />)}
        {Array.from({ length: 13 }, (_, i) => <path key={`h${i}`} d={`M 0 ${20 + i * 40} H 640`} />)}
      </g>
      {channels.map(({ name, color, y }, channel) => (
        <g key={name} fill={color}>
          {Array.from({ length: 17 }, (_, lane) => {
            const offset = (lane - 8) * 3.3;
            return <path key={lane} className="field-thread" d={`M 35 ${257 + offset * 0.7} C 210 ${257 + offset}, 298 ${y + offset}, 480 ${y + offset}`} stroke={color} strokeWidth="1" fill="none" opacity={0.15 + (lane % 4) * 0.07} />;
          })}
          {Array.from({ length: 88 }, (_, i) => {
            const col = i % 11;
            const row = Math.floor(i / 11);
            return <rect key={i} x={448 + col * 12.5} y={y - 23 + row * 6.5} width={5 + ((i * 7 + channel) % 6)} height="2.6" rx="1.3" opacity={0.3 + ((i + channel) % 5) * 0.13} />;
          })}
          <text x="450" y={y - 40} className="field-label">{name}</text>
        </g>
      ))}
      <circle cx="155" cy="257" r="65" className="field-core" />
      <circle cx="155" cy="257" r="51" fill="none" stroke="#b08a73" strokeWidth="0.6" />
      {Array.from({ length: 7 }, (_, row) => Array.from({ length: 7 }, (_, col) => (
        <circle key={`${row}-${col}`} cx={125 + col * 10} cy={227 + row * 10} r={1 + ((row * 3 + col) % 3) * 0.6} fill="#f1d4b6" opacity={0.35 + ((row + col) % 4) * 0.18} />
      )))}
      <text x="155" y="355" textAnchor="middle" className="field-label" fill="currentColor">SHARED COMPUTATION</text>
    </svg>
  );
}
