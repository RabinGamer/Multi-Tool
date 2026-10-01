import Link from 'next/link';
import { ShieldCheck, Wrench } from 'lucide-react';
import { categories } from '@/data/categories';
import { getPopularTools } from '@/data/tools';
import { site } from '@/config/site';

export function Footer() {
  const popular = getPopularTools().slice(0, 6);
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="section grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 text-white">
              <Wrench className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-lg font-bold tracking-tight">
              Tool<span className="gradient-text">Mint</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {site.description}
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 dark:text-zinc-500">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
            Files never leave your browser.
          </p>
        </div>
        <nav aria-label="Categories">
          <h3 className="text-sm font-semibold">Categories</h3>
          <ul className="mt-4 grid gap-2">
            {categories.slice(0, 6).map((c) => (
              <li key={c.id}>
                <Link
                  href={'/categories/' + c.id + '/'}
                  className="text-sm text-zinc-500 transition-colors hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Popular tools">
          <h3 className="text-sm font-semibold">Popular Tools</h3>
          <ul className="mt-4 grid gap-2">
            {popular.map((t) => (
              <li key={t.slug}>
                <Link
                  href={'/tools/' + t.slug + '/'}
                  className="text-sm text-zinc-500 transition-colors hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="mt-4 grid gap-2">
            <li>
              <Link
                href="/about/"
                className="text-sm text-zinc-500 transition-colors hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/privacy/"
                className="text-sm text-zinc-500 transition-colors hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms/"
                className="text-sm text-zinc-500 transition-colors hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-zinc-200 py-6 dark:border-zinc-800">
        <p className="section text-xs text-zinc-400 dark:text-zinc-500">
          (c) {new Date().getFullYear()} {site.name}. Free forever, no signup, no watermarks.
        </p>
      </div>
    </footer>
  );
}
