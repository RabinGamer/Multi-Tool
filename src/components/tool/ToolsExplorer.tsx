'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { ToolCard } from './ToolCard';
import { cn } from '@/lib/utils';
import type { ToolCardData } from './ToolCard';

export function ToolsExplorer({
  tools,
  categories,
}: {
  tools: ToolCardData[];
  categories: Array<{ id: string; name: string }>;
}) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((t) => {
      if (active !== 'all' && t.category !== active) return false;
      if (!q) return true;
      return (t.name + ' ' + t.shortDescription).toLowerCase().includes(q);
    });
  }, [tools, query, active]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter tools..."
            aria-label="Filter tools"
            className="input pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button
            type="button"
            onClick={() => setActive('all')}
            className={cn(
              'rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors',
              active === 'all'
                ? 'bg-indigo-600 text-white'
                : 'border border-zinc-200 text-zinc-600 hover:border-indigo-300 dark:border-zinc-800 dark:text-zinc-300'
            )}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={cn(
                'rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors',
                active === c.id
                  ? 'bg-indigo-600 text-white'
                  : 'border border-zinc-200 text-zinc-600 hover:border-indigo-300 dark:border-zinc-800 dark:text-zinc-300'
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-zinc-200 p-8 text-center text-sm text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
          No tools match that filter yet - more tools ship every week.
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </div>
      )}
    </div>
  );
}
