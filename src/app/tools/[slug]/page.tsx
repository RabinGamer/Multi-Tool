import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLiveToolBySlug, liveToolSlugs } from '@/data/tools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';

export function generateStaticParams() {
  return liveToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getLiveToolBySlug(slug);
  if (!tool) return {};
  const title = 'Free ' + tool.name + ' Online - No Signup Needed';
  return {
    title,
    description: tool.shortDescription,
    keywords: tool.keywords,
    alternates: { canonical: '/tools/' + tool.slug + '/' },
    openGraph: {
      title,
      description: tool.shortDescription,
      url: '/tools/' + tool.slug + '/',
      type: 'website',
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getLiveToolBySlug(slug);
  if (!tool) notFound();
  return <ToolPageShell tool={tool} />;
}
