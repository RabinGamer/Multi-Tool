'use client';

import { Check, Copy, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const SETS = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  digits: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{};:,.?/',
};

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

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [digits, setDigits] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  function generate() {
    let pool = '';
    if (upper) pool += SETS.upper;
    if (lower) pool += SETS.lower;
    if (digits) pool += SETS.digits;
    if (symbols) pool += SETS.symbols;
    if (!pool) {
      setPassword('');
      return;
    }
    let result = '';
    for (let i = 0; i < length; i++) result += pool.charAt(randInt(pool.length));
    setPassword(result);
  }

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, upper, lower, digits, symbols]);

  const poolSize =
    (upper ? 26 : 0) + (lower ? 26 : 0) + (digits ? 10 : 0) + (symbols ? 22 : 0);
  const entropy = poolSize > 1 ? Math.round(length * Math.log2(poolSize)) : 0;
  const strength =
    entropy >= 100 ? 'Very strong' : entropy >= 80 ? 'Strong' : entropy >= 60 ? 'Good' : entropy >= 40 ? 'Fair' : 'Weak';
  const strengthColor =
    entropy >= 80 ? 'bg-emerald-500' : entropy >= 60 ? 'bg-lime-500' : entropy >= 40 ? 'bg-amber-500' : 'bg-rose-500';

  async function copy() {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // clipboard unavailable
    }
  }

  return (
    <div className="card p-4 sm:p-6">
      <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
        <p className="min-h-7 flex-1 break-all font-mono text-lg font-semibold">{password}</p>
        <button type="button" onClick={generate} aria-label="Regenerate" className="btn-ghost !px-3 !py-2">
          <RefreshCw className="h-4 w-4" />
        </button>
        <button type="button" onClick={copy} aria-label="Copy password" className="btn-primary !px-3 !py-2">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        <div
          className={cn('h-full rounded-full transition-all duration-300', strengthColor)}
          style={{ width: Math.min(100, (entropy / 128) * 100) + '%' }}
        />
      </div>
      <p className="mt-2 text-xs font-medium text-zinc-400 dark:text-zinc-500">
        Strength: {strength} - about {entropy} bits of entropy
      </p>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <label htmlFor="pw-length" className="text-sm font-medium">
            Length
          </label>
          <span className="text-sm font-bold tabular-nums text-indigo-500">{length}</span>
        </div>
        <input
          id="pw-length"
          type="range"
          min={4}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="mt-2 w-full accent-indigo-600"
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: 'Uppercase (A-Z)', state: upper, set: setUpper },
          { label: 'Lowercase (a-z)', state: lower, set: setLower },
          { label: 'Digits (0-9)', state: digits, set: setDigits },
          { label: 'Symbols (!@#)', state: symbols, set: setSymbols },
        ].map((o) => (
          <label
            key={o.label}
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-200 px-3 py-2.5 text-sm font-medium dark:border-zinc-800"
          >
            <input
              type="checkbox"
              checked={o.state}
              onChange={(e) => o.set(e.target.checked)}
              className="h-4 w-4 accent-indigo-600"
            />
            {o.label}
          </label>
        ))}
      </div>
      {poolSize === 0 ? (
        <p className="mt-3 text-sm font-medium text-rose-500">
          Enable at least one character set to generate a password.
        </p>
      ) : null}
    </div>
  );
}
