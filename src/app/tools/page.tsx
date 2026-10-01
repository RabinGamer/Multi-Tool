import type { Metadata } from 'next';
import { getLiveTools } from '@/data/tools';
import { categories } from '@/data/categories';
import { ToolsExplorer } from '@/components/tool/ToolsExplorer';

export const metadata: Metadata = {
  title: 'All Free Online Tools',
  description:
    'Browse every free ToolMint tool: word counters, case converters, EMI and GST calculators, JSON and Base64 utilities, timers and more. No signup, 100% in-browser.',
  alternates: { canonical: '/tools/' },
};

export default function ToolsPage() {
  const tools = getLiveTools().map((t) => ({
    slug: t.slug,
    name: t.name,
    icon: t.icon,
    popular: t.popular,
    shortDescription: t.shortDescription,
    category: t.category,
  }));
  const cats = categories.map((c) => ({ id: c.id, name: c.name }));

  return (
    <section className="section py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">All tools</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-zinc-500 dark:text-zinc-400">
        Every tool is free, needs no signup and runs entirely in your browser. Filter by category
        or search by name.
      </p>
      <div className="mt-8">
        <ToolsExplorer tools={tools} categories={cats} />
      </div>
    </section>
  );
}
