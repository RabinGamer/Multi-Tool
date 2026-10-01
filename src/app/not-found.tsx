import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import { getPopularTools } from '@/data/tools';

export default function NotFound() {
  const popular = getPopularTools().slice(0, 5);
  return (
    <section className="section flex flex-col items-center py-24 text-center">
      <p className="text-7xl font-bold tracking-tight gradient-text">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight">This tool does not exist (yet)</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        The page you are looking for was not found. It may still be on our roadmap - or a typo away
        from the tool you need. Press Ctrl K to search everything.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {popular.map((t) => (
          <Link
            key={t.slug}
            href={'/tools/' + t.slug + '/'}
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40 dark:hover:text-indigo-400"
          >
            {t.name}
          </Link>
        ))}
      </div>
      <Link href="/" className="btn-ghost mt-8">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back home
      </Link>
    </section>
  );
}
