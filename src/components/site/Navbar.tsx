'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Search, Wrench, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { categories } from '@/data/categories';
import { ToolIcon } from '@/components/tool/ToolIcon';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function openSearch() {
    window.dispatchEvent(new Event('toolmint:open-search'));
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-200',
        scrolled || mobileOpen
          ? 'border-zinc-200 bg-zinc-50/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80'
          : 'border-transparent bg-transparent'
      )}
    >
      <nav className="section flex h-16 items-center justify-between gap-4" aria-label="Main">
        <Link href="/" className="flex items-center gap-2.5" aria-label="ToolMint home">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25">
            <Wrench className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Tool<span className="gradient-text">Mint</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/tools/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          >
            All Tools
          </Link>
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
              aria-haspopup="true"
            >
              Categories
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-0 top-full w-[560px] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/40">
                {categories.map((c) => (
                  <Link
                    key={c.id}
                    href={'/categories/' + c.id + '/'}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800">
                      <ToolIcon name={c.icon} className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/about/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openSearch}
            className="flex h-9 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
            aria-label="Search tools"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            <span className="hidden lg:inline">Search tools</span>
            <kbd className="hidden rounded-md border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 text-xs font-medium text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500 lg:inline">
              Ctrl K
            </kbd>
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <div className="section grid gap-1 py-3">
            <Link
              href="/tools/"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              All Tools
            </Link>
            {categories.map((c) => (
              <Link
                key={c.id}
                href={'/categories/' + c.id + '/'}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                <ToolIcon name={c.icon} className="h-4 w-4 text-zinc-400" />
                {c.name}
              </Link>
            ))}
            <Link
              href="/about/"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              About
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
