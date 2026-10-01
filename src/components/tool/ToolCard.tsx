import Link from 'next/link';
import { Flame } from 'lucide-react';
import { ToolIcon } from './ToolIcon';
import { accents } from '@/lib/accents';
import { getCategory } from '@/data/categories';
import type { Tool } from '@/lib/types';

export type ToolCardData = Pick<
  Tool,
  'slug' | 'name' | 'icon' | 'popular' | 'shortDescription' | 'category'
>;

export function ToolCard({ tool }: { tool: ToolCardData }) {
  const category = getCategory(tool.category);
  const accent = accents[category.accent];
  return (
    <Link
      href={'/tools/' + tool.slug + '/'}
      className="group flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className={
            'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ' + accent.chip
          }
        >
          <ToolIcon name={tool.icon} className="h-5 w-5" />
        </span>
        {tool.popular ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
            <Flame className="h-3 w-3" aria-hidden="true" />
            Popular
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="font-semibold tracking-tight transition-colors group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
          {tool.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {tool.shortDescription}
        </p>
      </div>
      <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">{category.name}</span>
    </Link>
  );
}
