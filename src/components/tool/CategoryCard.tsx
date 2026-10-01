import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ToolIcon } from './ToolIcon';
import { accents } from '@/lib/accents';
import type { Category } from '@/data/categories';

export function CategoryCard({ category, toolCount }: { category: Category; toolCount: number }) {
  const accent = accents[category.accent];
  return (
    <Link
      href={'/categories/' + category.id + '/'}
      className="group flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
    >
      <span
        className={
          'inline-flex h-11 w-11 items-center justify-center rounded-xl border ' + accent.chip
        }
      >
        <ToolIcon name={category.icon} className="h-5 w-5" />
      </span>
      <div className="flex-1">
        <h3 className="font-semibold tracking-tight">{category.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {category.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
          {toolCount === 0 ? 'Coming soon' : toolCount + (toolCount === 1 ? ' tool' : ' tools')}
        </span>
        <ArrowRight
          className="h-4 w-4 text-zinc-400 transition-all group-hover:translate-x-0.5 group-hover:text-indigo-500"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
