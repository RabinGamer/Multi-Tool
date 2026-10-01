'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

const LIMITS = [
  { label: 'X / Twitter post', limit: 280 },
  { label: 'SMS message', limit: 160 },
  { label: 'Meta title (SEO)', limit: 60 },
  { label: 'Meta description (SEO)', limit: 155 },
];

export default function CharacterCounter() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    return [
      { label: 'Characters', value: text.length },
      { label: 'No spaces', value: text.replace(/s/g, '').length },
      { label: 'Words', value: trimmed ? trimmed.split(/s+/).length : 0 },
      { label: 'Lines', value: text ? text.split(/
/).length : 0 },
    ];
  }, [text]);

  return (
    <div className="card p-4 sm:p-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text - counts update live..."
        aria-label="Text to count"
        className="input h-48 resize-y text-base"
      />
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {LIMITS.map((l) => {
          const pct = Math.min(100, (text.length / l.limit) * 100);
          const over = text.length > l.limit;
          const near = !over && pct >= 90;
          return (
            <div
              key={l.label}
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{l.label}</span>
                <span className="tabular-nums text-zinc-400 dark:text-zinc-500">
                  {text.length} / {l.limit}
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <div
                  className={cn(
                    'h-full rounded-full transition-all duration-200',
                    over
                      ? 'bg-rose-500'
                      : near
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                  )}
                  style={{ width: pct + '%' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
