'use client';

import { Check, Copy, Dices } from 'lucide-react';
import { useState } from 'react';

function randInt(max: number): number {
  const a = new Uint32Array(1);
  const limit = Math.floor(4294967296 / max) * max;
  let x = 0;
  do {
    crypto.getRandomValues(a);
    x = a[0];
  } while (x >= limit);
  return x % max;
}

export default function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [unique, setUnique] = useState(true);
  const [results, setResults] = useState<number[]>([]);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  function generate() {
    const lo = Math.min(min, max);
    const hi = Math.max(min, max);
    const range = hi - lo + 1;
    if (range <= 0) return;
    if (unique && count > range) {
      setError('Cannot draw ' + count + ' unique numbers from a range of only ' + range + '.');
      return;
    }
    setError('');
    const out: number[] = [];
    if (unique) {
      const pool = Array.from({ length: range }, (_, i) => lo + i);
      for (let i = 0; i < count; i++) {
        const idx = i + randInt(pool.length - i);
        const tmp = pool[i];
        pool[i] = pool[idx];
        pool[idx] = tmp;
        out.push(pool[i]);
      }
    } else {
      for (let i = 0; i < count; i++) out.push(lo + randInt(range));
    }
    setResults(out);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(results.join(', '));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // clipboard unavailable
    }
  }

  return (
    <div className="card p-4 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-4">
        <label className="text-sm font-medium">
          <span className="mb-1.5 block">Minimum</span>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="input"
          />
        </label>
        <label className="text-sm font-medium">
          <span className="mb-1.5 block">Maximum</span>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="input"
          />
        </label>
        <label className="text-sm font-medium">
          <span className="mb-1.5 block">How many</span>
          <input
            type="number"
            min={1}
            max={1000}
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(1000, Number(e.target.value))))}
            className="input"
          />
        </label>
        <label className="flex cursor-pointer items-end gap-2 pb-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={unique}
            onChange={(e) => setUnique(e.target.checked)}
            className="h-4 w-4 accent-indigo-600"
          />
          No repeats
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={generate} className="btn-primary">
          <Dices className="h-4 w-4" />
          Generate
        </button>
        {results.length > 0 ? (
          <button type="button" onClick={copy} className="btn-ghost">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        ) : null}
      </div>

      {error ? <p className="mt-3 text-sm font-medium text-rose-500">{error}</p> : null}

      {results.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2" aria-live="polite">
          {results.map((n, i) => (
            <span
              key={i}
              className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 font-mono text-lg font-bold tabular-nums text-indigo-600 dark:text-indigo-300"
            >
              {n}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
