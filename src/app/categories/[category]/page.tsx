import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Sparkles } from 'lucide-react';
import { categories, getCategory } from '@/data/categories';
import { getToolsByCategory } from '@/data/tools';
import { ToolCard } from '@/components/tool/ToolCard';
import { ToolIcon } from '@/components/tool/ToolIcon';
import { JsonLd, breadcrumbSchema, categoryCollectionSchema } from '@/lib/seo';
import type { CategoryId } from '@/lib/types';

const planned: Record<string, string[]> = {
  pdf: ['Merge PDF', 'Split PDF', 'Compress PDF', 'PDF to Word', 'Word to PDF', 'JPG to PDF', 'PDF to JPG', 'Sign PDF'],
  image: ['Image Compressor', 'Image Resizer', 'Image Converter', 'Background Remover', 'Image Cropper', 'Image to Text (OCR)'],
  'ai-writing': ['AI Summarizer', 'AI Paraphraser', 'Blog Title Generator', 'AI Email Writer', 'Grammar Fixer'],
  seo: ['Meta Tag Generator', 'Sitemap Generator', 'Robots.txt Generator', 'SERP Preview', 'Schema Markup Generator'],
  'qr-barcode': ['QR Code Generator', 'Wi-Fi QR Code', 'Barcode Generator', 'QR with Logo'],
};

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.id === category);
  if (!cat) return {};
  return {
    title: 'Free ' + cat.name + ' - Online, No Signup',
    description: cat.description,
    alternates: { canonical: '/categories/' + cat.id + '/' },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const exists = categories.some((c) => c.id === category);
  if (!exists) notFound();
  const cat = getCategory(category as CategoryId);
  const tools = getToolsByCategory(cat.id);
  const plannedTools = planned[cat.id] || [];

  const crumbs = [
    { name: 'Home', url: '/' },
    { name: cat.name, url: '/categories/' + cat.id + '/' },
  ];

  return (
    <>
      <JsonLd data={categoryCollectionSchema(cat.id, tools.map((t) => t.slug))} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <div className="section pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500">
          <Link href="/" className="transition-colors hover:text-indigo-500">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <span aria-current="page" className="font-medium text-zinc-600 dark:text-zinc-300">
            {cat.name}
          </span>
        </nav>
      </div>

      <section className="section pb-16 pt-4">
        <div className="flex items-start gap-4">
          <span className="card inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl">
            <ToolIcon name={cat.icon} className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{cat.name}</h1>
            <p className="mt-2 max-w-2xl leading-relaxed text-zinc-500 dark:text-zinc-400">
              {cat.description}
            </p>
          </div>
        </div>

        {tools.length > 0 ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-zinc-200 p-8 dark:border-zinc-800">
            <p className="inline-flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-indigo-500" aria-hidden="true" />
              Tools in this category are on the roadmap
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {plannedTools.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-400 dark:text-zinc-500">
              They are being built right now - in the meantime, try the live tools in other
              categories.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
