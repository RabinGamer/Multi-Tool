'use client';

import { Search } from 'lucide-react';

export function HeroSearch() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('toolmint:open-search'))}
      className="group flex w-full max-w-xl items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-left shadow-xl shadow-zinc-950/5 transition-all hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30 dark:hover:border-indigo-500/50"
      aria-label="Open tool search"
    >
      <Search className="h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true" />
      <span className="flex-1 text-sm text-zinc-400 dark:text-zinc-500 sm:text-base">
        Search tools - try word counter, EMI, JSON...
      </span>
      <kbd className="hidden shrink-0 rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500 sm:inline">
        Ctrl K
      </kbd>
    </button>
  );
}
