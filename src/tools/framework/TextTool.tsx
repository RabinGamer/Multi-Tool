'use client';

import { Check, Copy, Download, Eraser } from 'lucide-react';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

export interface TextToolOption {
  key: string;
  label: string;
  type: 'checkbox' | 'select';
  default: string | boolean;
  options?: Array<{ label: string; value: string }>;
}

export interface TextToolProps {
  transform: (text: string, options: Record<string, string | boolean>) => string;
  options?: TextToolOption[];
  inputPlaceholder?: string;
}

export function TextTool({ transform, options = [], inputPlaceholder }: TextToolProps) {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [opts, setOpts] = useState<Record<string, string | boolean>>(() => {
    const initial: Record<string, string | boolean> = {};
    for (const o of options) initial[o.key] = o.default;
    return initial;
  });

  const output = useMemo(() => {
    if (!text) return '';
    try {
      return transform(text, opts);
    } catch (err) {
      return 'Warning: ' + (err instanceof Error ? err.message : 'invalid input');
    }
  }, [text, opts, transform]);

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/s+/).length : 0;
    return [
      { label: 'Words', value: words },
      { label: 'Characters', value: text.length },
      { label: 'Lines', value: text ? text.split(/
/).length : 0 },
    ];
  }, [text]);

  function setOpt(key: string, value: string | boolean) {
    setOpts((prev) => ({ ...prev, [key]: value }));
  }

  async function copy() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // clipboard unavailable
    }
  }

  function download() {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'toolmint-output.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="card p-4 sm:p-6">
      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-lg font-bold tabular-nums sm:text-xl">{s.value}</p>
            <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500">{s.label}</p>
          </div>
        ))}
      </div>

      {options.length > 0 ? (
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
          {options.map((o) =>
            o.type === 'select' ? (
              <label key={o.key} className="flex items-center gap-2 text-sm font-medium">
                {o.label}
                <select
                  value={String(opts[o.key])}
                  onChange={(e) => setOpt(o.key, e.target.value)}
                  className="input !w-auto !py-1.5 text-sm"
                >
                  {(o.options || []).map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
            ) : (
              <label key={o.key} className="flex items-center gap-2 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={Boolean(opts[o.key])}
                  onChange={(e) => setOpt(o.key, e.target.checked)}
                  className="h-4 w-4 rounded border-zinc-300 accent-indigo-600"
                />
                {o.label}
              </label>
            )
          )}
        </div>
      ) : null}

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={inputPlaceholder || 'Paste your text here...'}
          spellCheck={false}
          aria-label="Input"
          className="input h-64 resize-y font-mono text-sm"
        />
        <textarea
          value={output}
          readOnly
          placeholder="Result appears here instantly..."
          spellCheck={false}
          aria-label="Result"
          className="input h-64 resize-none bg-zinc-50 font-mono text-sm dark:bg-zinc-950"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={copy} className="btn-primary !px-4 !py-2">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? 'Copied' : 'Copy result'}
        </button>
        <button type="button" onClick={download} className="btn-ghost !px-4 !py-2" disabled={!output}>
          <Download className="h-4 w-4" />
          Download
        </button>
        <button type="button" onClick={() => setText('')} className="btn-ghost !px-4 !py-2">
          <Eraser className="h-4 w-4" />
          Clear
        </button>
      </div>
    </div>
  );
}
