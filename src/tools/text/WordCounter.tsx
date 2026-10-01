'use client';

import { useMemo, useState } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/s+/).length : 0;
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter((s) => s.trim()).length : 0;
    const paragraphs = trimmed ? trimmed.split(/
s*
/).filter((s) => s.trim()).length : 0;
    const minutes = words / 225;
    const reading =
      words === 0 ? '0 min' : minutes < 1 ? 'under 1 min' : Math.ceil(minutes) + ' min';
    return [
      { label: 'Words', value: words },
      { label: 'Characters', value: text.length },
      { label: 'No spaces', value: text.replace(/s/g, '').length },
      { label: 'Sentences', value: sentences },
      { label: 'Paragraphs', value: paragraphs },
      { label: 'Reading time', value: reading },
    ];
  }, [text]);

  return (
    <div className="card p-4 sm:p-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here - everything updates live..."
        aria-label="Text to analyze"
        className="input h-56 resize-y text-base"
      />
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-center dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-xl font-bold tabular-nums">{s.value}</p>
            <p className="mt-0.5 text-xs font-medium text-zinc-400 dark:text-zinc-500">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
