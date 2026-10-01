'use client';

import { Check, Copy, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';

const WORDS = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
  'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
  'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
  'consequat', 'duis', 'aute', 'irure',
];

function rand(n: number): number {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return a[0] % n;
}

function makeSentence(): string {
  const len = 6 + rand(9);
  const parts: string[] = [];
  for (let i = 0; i < len; i++) parts.push(WORDS[rand(WORDS.length)]);
  const s = parts.join(' ');
  return s.charAt(0).toUpperCase() + s.slice(1) + '.';
}

function makeParagraph(): string {
  const n = 4 + rand(4);
  const sentences: string[] = [];
  for (let i = 0; i < n; i++) sentences.push(makeSentence());
  return sentences.join(' ');
}

export default function LoremIpsumGenerator() {
  const [unit, setUnit] = useState('paragraphs');
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  function generate() {
    const n = Math.max(1, Math.min(50, count));
    if (unit === 'paragraphs') {
      const parts: string[] = [];
      for (let i = 0; i < n; i++) parts.push(makeParagraph());
      setOutput(parts.join('

'));
    } else if (unit === 'sentences') {
      const parts: string[] = [];
      for (let i = 0; i < n; i++) parts.push(makeSentence());
      setOutput(parts.join(' '));
    } else {
      const parts: string[] = [];
      for (let i = 0; i < n * 10; i++) parts.push(WORDS[rand(WORDS.length)]);
      setOutput(parts.join(' '));
    }
  }

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // clipboard unavailable
    }
  }

  return (
    <div className="card p-4 sm:p-6">
      <div className="flex flex-wrap items-end gap-4">
        <label className="text-sm font-medium">
          <span className="mb-1.5 block">Generate</span>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="input !w-auto !py-2 text-sm"
          >
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words (x10)</option>
          </select>
        </label>
        <label className="text-sm font-medium">
          <span className="mb-1.5 block">Count</span>
          <input
            type="number"
            min={1}
            max={50}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="input !w-24 !py-2 text-sm"
          />
        </label>
        <button type="button" onClick={generate} className="btn-primary !px-4 !py-2">
          <RefreshCw className="h-4 w-4" />
          Generate
        </button>
        <button type="button" onClick={copy} className="btn-ghost !px-4 !py-2">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <textarea
        value={output}
        readOnly
        aria-label="Generated placeholder text"
        className="input mt-4 h-72 resize-none text-base"
      />
    </div>
  );
}
