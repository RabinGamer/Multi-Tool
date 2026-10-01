'use client';

import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

export interface CalcField {
  key: string;
  label: string;
  type: 'number' | 'date' | 'select';
  suffix?: string;
  placeholder?: string;
  default?: string;
  options?: Array<{ label: string; value: string }>;
  step?: string;
  min?: string;
  max?: string;
}

export interface CalcResult {
  label: string;
  value: string;
  highlight?: boolean;
}

export function CalculatorTool({
  fields,
  compute,
  notes,
}: {
  fields: CalcField[];
  compute: (values: Record<string, string>) => CalcResult[];
  notes?: string;
}) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const f of fields) initial[f.key] = f.default || '';
    return initial;
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const results = useMemo(() => {
    try {
      return compute(values);
    } catch (e) {
      return [];
    }
  }, [values, compute]);

  function setValue(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  const highlight = results.find((r) => r.highlight);
  const rest = results.filter((r) => !r.highlight);

  return (
    <div className="card grid gap-6 p-4 sm:p-6 lg:grid-cols-2">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
          Inputs
        </h2>
        <div className="mt-4 grid gap-4">
          {fields.map((f) => (
            <div key={f.key}>
              <label
                htmlFor={'calc-' + f.key}
                className="mb-1.5 block text-sm font-medium text-zinc-600 dark:text-zinc-300"
              >
                {f.label}
              </label>
              {f.type === 'select' ? (
                <select
                  id={'calc-' + f.key}
                  value={values[f.key]}
                  onChange={(e) => setValue(f.key, e.target.value)}
                  className="input"
                >
                  {(f.options || []).map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="relative">
                  <input
                    id={'calc-' + f.key}
                    type={f.type}
                    inputMode={f.type === 'number' ? 'decimal' : undefined}
                    value={values[f.key]}
                    placeholder={f.placeholder}
                    step={f.step}
                    min={f.min}
                    max={f.max}
                    onChange={(e) => setValue(f.key, e.target.value)}
                    className="input"
                  />
                  {f.suffix ? (
                    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-zinc-400">
                      {f.suffix}
                    </span>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
        {notes ? (
          <p className="mt-4 text-xs leading-relaxed text-zinc-400 dark:text-zinc-500">{notes}</p>
        ) : null}
      </div>

      <div className="flex flex-col">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
          Results
        </h2>
        <div className="mt-4 grid flex-1 content-start gap-4" aria-live="polite">
          {!mounted ? (
            <div className="min-h-24 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800" />
          ) : highlight ? (
            <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-6">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{highlight.label}</p>
              <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight text-indigo-600 dark:text-indigo-300 sm:text-4xl">
                {highlight.value}
              </p>
            </div>
          ) : null}
          {mounted
            ? rest.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{r.label}</p>
                  <p className="text-lg font-bold tabular-nums">{r.value}</p>
                </div>
              ))
            : null}
          {mounted && results.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-zinc-200 p-5 text-sm text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
              Enter valid values to see the results instantly.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
