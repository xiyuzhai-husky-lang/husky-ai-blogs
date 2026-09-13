'use client';

import { useState } from 'react';

const channels = [
  {
    id: 'answer', label: 'Answer', audience: 'For the person using it',
    title: 'The change, in a sentence.',
    description: 'Keep the main answer short enough to act on.',
    lines: ['Attempt the job at most three times. If all attempts fail, return the last error.'],
    kind: 'Result', color: 'var(--channel-answer)',
  },
  {
    id: 'design', label: 'Design', audience: 'For the person reviewing it',
    title: 'The decisions behind the change.',
    description: 'Expose the constraints a reviewer needs to assess.',
    lines: ['Retry only transient failures.', 'Limit execution to three attempts.', 'Stop when cancellation is requested.'],
    kind: 'Design constraints', color: 'var(--channel-design)',
  },
  {
    id: 'audit', label: 'Audit', audience: 'For people and checking tools',
    title: 'Turn claims into checks.',
    description: 'Make the expected behavior explicit and testable.',
    lines: ['Transient failure every time → three attempts.', 'Succeeds on attempt two → no third attempt.', 'Cancelled between attempts → no later call.'],
    kind: 'Test cases to verify', color: 'var(--channel-audit)',
  },
  {
    id: 'proof', label: 'Proof', audience: 'For a formal verifier',
    title: 'State the property precisely.',
    description: 'Define what a proof must establish about the implementation.',
    lines: ['Invariant: 0 ≤ attempts ≤ limit.', 'Each attempt increases the counter by one.', 'No attempt begins when attempts = limit.'],
    kind: 'Proof obligations', color: 'var(--channel-proof)',
  },
];

export default function OutputExplorer() {
  const [active, setActive] = useState(0);
  const channel = channels[active];

  return (
    <figure className="output-explorer" id="output-explorer" aria-labelledby="explorer-heading">
      <div className="explorer-heading">
        <span className="eyebrow">Explore the idea</span>
        <h3 id="explorer-heading">One computation.<br />Different ways to use it.</h3>
        <p>Select an output to see what each channel could provide.</p>
      </div>
      <div className="explorer-controls" role="group" aria-label="Output channels">
        {channels.map((item, index) => (
          <button key={item.id} type="button" aria-pressed={index === active} aria-controls="output-detail" onClick={() => setActive(index)} style={{ '--channel-color': item.color } as React.CSSProperties}>
            <span className="channel-dot" />{item.label}<span aria-hidden="true" className="channel-arrow">↗</span>
          </button>
        ))}
      </div>
      <div className="explorer-detail" id="output-detail" aria-live="polite" aria-atomic="true" style={{ '--channel-color': channel.color } as React.CSSProperties}>
        <div className="explorer-context">
          <span className="eyebrow">{channel.audience}</span>
          <h4>{channel.title}</h4>
          <p>{channel.description}</p>
          <div className="shared-state"><span className="state-symbol" aria-hidden="true">✳</span><span>Shared intermediate states<br /><small>Reused by a specialized branch</small></span></div>
        </div>
        <div className="artifact-sheet">
          <div className="artifact-heading"><span>{channel.kind}</span><span aria-hidden="true">0{active + 1}</span></div>
          <p className="artifact-task">Example: bound a retry loop</p>
          <ul>{channel.lines.map(line => <li key={line}>{line}</li>)}</ul>
        </div>
      </div>
      <figcaption>Illustrative outputs for one code change. This depicts the proposed architecture, not measured results or a verified implementation.</figcaption>
    </figure>
  );
}
