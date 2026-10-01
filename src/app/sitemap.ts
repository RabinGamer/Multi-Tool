import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { getLiveTools } from '@/data/tools';
import { categories } from '@/data/categories';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url + '/', lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: site.url + '/tools/', lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: site.url + '/about/', lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: site.url + '/privacy/', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: site.url + '/terms/', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: site.url + '/categories/' + c.id + '/',
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const toolRoutes: MetadataRoute.Sitemap = getLiveTools().map((t) => ({
    url: site.url + '/tools/' + t.slug + '/',
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: t.popular ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...toolRoutes];
}
