import Link from 'next/link';
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { categories } from '@/data/categories';
import { getLiveTools, getPopularTools, getToolsByCategory } from '@/data/tools';
import { ToolCard } from '@/components/tool/ToolCard';
import { CategoryCard } from '@/components/tool/CategoryCard';
import { HeroSearch } from '@/components/site/HeroSearch';
import { JsonLd, organizationSchema, websiteSchema } from '@/lib/seo';
import { cn } from '@/lib/utils';

const bentoSpans = [
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
];

export default function HomePage() {
  const popular = getPopularTools();
  const all = getLiveTools();

  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={organizationSchema()} />

      {/* Hero */}
      <section className="hero-glow relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="section relative flex flex-col items-center pb-20 pt-16 text-center sm:pt-24">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300 animate-fade-up">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            275+ tools planned · 18 live today · 100% free
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl animate-fade-up" style={{ animationDelay: '60ms' }}>
            Every tool you need.
            <br />
            <span className="gradient-text">One minty-fresh place.</span>
          </h1>
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-lg animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            Calculators, text utilities, developer tools and everyday helpers that run entirely in
            your browser. No signup, no watermarks, no limits - your data never leaves your device.
          </p>
          <div
            className="mt-8 flex w-full justify-center animate-fade-up"
            style={{ animationDelay: '180ms' }}
          >
            <HeroSearch />
          </div>
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-zinc-500 dark:text-zinc-400 animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
              Files never leave your browser
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
              Instant results, zero waiting
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-3.5 w-3.5 text-indigo-500" aria-hidden="true" />
              Free forever
            </span>
          </div>
        </div>
      </section>

      {/* Popular tools */}
      <section className="section pb-20" aria-labelledby="popular-heading">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="popular-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
              Popular tools
            </h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              The essentials people reach for every day.
            </p>
          </div>
          <Link
            href="/tools/"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-indigo-500 transition-colors hover:text-indigo-400"
          >
            All {all.length} tools
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {popular.slice(0, 5).map((tool, i) => (
            <div key={tool.slug} className={cn(bentoSpans[i] || 'lg:col-span-2')}>
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-900/40" aria-labelledby="categories-heading">
        <div className="section">
          <div className="text-center">
            <h2 id="categories-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
              Browse by category
            </h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Eleven categories, one consistent experience. More tools ship every week.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard key={c.id} category={c} toolCount={getToolsByCategory(c.id).length} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section py-20" aria-labelledby="why-heading">
        <div className="text-center">
          <h2 id="why-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Why ToolMint is different
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Privacy by architecture',
              body: 'Every tool processes data in your browser. There is no server that could see your files - not a policy promise, an engineering fact.',
              icon: 'ShieldCheck',
            },
            {
              title: 'Fast, always',
              body: 'Static pages, instant tools and no cluttered ad walls. Pages load in a blink and results update as you type.',
              icon: 'Zap',
            },
            {
              title: 'Free, really free',
              body: 'No accounts, no daily limits, no watermarks and no email walls. Free tools should feel free.',
              icon: 'BadgeCheck',
            },
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                {f.icon === 'ShieldCheck' ? (
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                ) : f.icon === 'Zap' ? (
                  <Zap className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
              <h3 className="mt-4 font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section pb-20">
        <div className="hero-glow relative overflow-hidden rounded-3xl border border-zinc-200 p-10 text-center dark:border-zinc-800 sm:p-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Start using any tool in one click
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            No downloads, no signups, no waiting. Pick a tool and get your result in seconds.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/tools/" className="btn-primary">
              Explore all tools
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/categories/calculators/" className="btn-ghost">
              Try the calculators
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
