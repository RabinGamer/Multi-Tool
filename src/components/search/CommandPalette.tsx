'use client';

import { useRouter } from 'next/navigation';
import { CornerDownLeft, Search } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ToolIcon } from '@/components/tool/ToolIcon';
import { cn } from '@/lib/utils';

export interface PaletteTool {
  slug: string;
  name: string;
  icon: string;
  category: string;
  shortDescription: string;
}

export function CommandPalette({ tools }: { tools: PaletteTool[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    }
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener('keydown', onKey);
    window.addEventListener('toolmint:open-search', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('toolmint:open-search', onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tools.slice(0, 8);
    const starts: PaletteTool[] = [];
    const contains: PaletteTool[] = [];
    for (const t of tools) {
      const haystack = (t.name + ' ' + t.category + ' ' + t.shortDescription).toLowerCase();
      const name = t.name.toLowerCase();
      if (name.startsWith(q) || haystack.startsWith(q)) {
        starts.push(t);
      } else if (haystack.includes(q)) {
        contains.push(t);
      }
    }
    return starts.concat(contains).slice(0, 10);
  }, [query, tools]);

  function go(tool: PaletteTool) {
    setOpen(false);
    router.push('/tools/' + tool.slug + '/');
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-zinc-950/50 p-4 pt-[15vh] backdrop-blur-sm animate-fade-in"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Search tools"
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-zinc-200 px-4 dark:border-zinc-800">
          <Search className="h-4 w-4 text-zinc-400" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActive((i) => Math.min(i + 1, results.length - 1));
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActive((i) => Math.max(i - 1, 0));
              } else if (e.key === 'Enter' && results[active]) {
                go(results[active]);
              }
            }}
            placeholder="Search 18+ free tools..."
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
            aria-label="Search tools"
          />
          <kbd className="hidden rounded-md border border-zinc-200 px-1.5 py-0.5 text-xs text-zinc-400 dark:border-zinc-700 dark:text-zinc-500 sm:inline">
            Esc
          </kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
          {results.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-zinc-400 dark:text-zinc-500">
              No tools match your search yet - more tools are on the way.
            </li>
          ) : (
            results.map((t, i) => (
              <li key={t.slug}>
                <button
                  type="button"
                  role="option"
                  aria-selected={i === active}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(t)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
                    i === active
                      ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300'
                      : 'text-zinc-700 dark:text-zinc-200'
                  )}
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800">
                    <ToolIcon name={t.icon} className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">{t.name}</span>
                    <span className="block truncate text-xs text-zinc-400 dark:text-zinc-500">
                      {t.category}
                    </span>
                  </span>
                  {i === active ? (
                    <CornerDownLeft className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
                  ) : null}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
