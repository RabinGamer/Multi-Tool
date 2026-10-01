import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getCategory } from '@/data/categories';
import { getRelatedTools } from '@/data/tools';
import { ToolImplementation } from './ToolImplementation';
import { ToolCard } from './ToolCard';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  softwareAppSchema,
} from '@/lib/seo';
import type { Tool } from '@/lib/types';

export function ToolPageShell({ tool }: { tool: Tool }) {
  const category = getCategory(tool.category);
  const related = getRelatedTools(tool);
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: category.name, url: '/categories/' + category.id + '/' },
    { name: tool.name, url: '/tools/' + tool.slug + '/' },
  ];

  return (
    <>
      <JsonLd data={softwareAppSchema(tool)} />
      <JsonLd data={faqSchema(tool)} />
      <JsonLd data={howToSchema(tool)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <div className="section pt-6">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500">
          {crumbs.map((c, i) => (
            <span key={c.url} className="flex items-center gap-1.5">
              {i > 0 ? <ChevronRight className="h-3 w-3" aria-hidden="true" /> : null}
              {i === crumbs.length - 1 ? (
                <span aria-current="page" className="font-medium text-zinc-600 dark:text-zinc-300">
                  {c.name}
                </span>
              ) : (
                <Link href={c.url} className="transition-colors hover:text-indigo-500">
                  {c.name}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      <section className="section pt-4 pb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{tool.name}</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-zinc-500 dark:text-zinc-400">
          {tool.shortDescription}
        </p>

        <div className="mt-8">
          <ToolImplementation id={tool.slug} />
        </div>

        <section id="how-to" className="mt-16" aria-labelledby="howto-heading">
          <h2 id="howto-heading" className="text-xl font-bold tracking-tight sm:text-2xl">
            How to use the {tool.name}
          </h2>
          <ol className="mt-5 grid gap-3">
            {tool.howToSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-sm font-bold text-indigo-500 dark:text-indigo-400">
                  {i + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14" aria-labelledby="about-heading">
          <h2 id="about-heading" className="text-xl font-bold tracking-tight sm:text-2xl">
            About the {tool.name}
          </h2>
          <div className="mt-4 grid max-w-3xl gap-4">
            {tool.longDescription.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-xl font-bold tracking-tight sm:text-2xl">
            Frequently asked questions
          </h2>
          <div className="mt-5 grid max-w-3xl gap-3">
            {tool.faqs.map((f) => (
              <details
                key={f.question}
                className="card group px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold transition-colors group-open:text-indigo-500">
                  {f.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {related.length > 0 ? (
          <section className="mt-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-xl font-bold tracking-tight sm:text-2xl">
              Related tools
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <ToolCard key={t.slug} tool={t} />
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-14 rounded-2xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Need something else? Explore the full {category.name} category.
          </p>
          <Link href={'/categories/' + category.id + '/'} className="btn-primary mt-4">
            Browse {category.name}
          </Link>
        </div>
      </section>
    </>
  );
}
