import { site } from '@/config/site';
import type { Tool } from '@/lib/types';
import { getCategory } from '@/data/categories';

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function softwareAppSchema(tool: Tool) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    url: site.url + '/tools/' + tool.slug + '/',
    description: tool.shortDescription,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function faqSchema(tool: Tool) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tool.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function howToSchema(tool: Tool) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to use ' + tool.name,
    totalTime: 'PT1M',
    step: tool.howToSteps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: s,
      url: site.url + '/tools/' + tool.slug + '/#how-to',
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: site.url + item.url,
    })),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
  };
}

export function categoryCollectionSchema(categoryId: Tool['category'], toolSlugs: string[]) {
  const category = getCategory(categoryId);
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    url: site.url + '/categories/' + category.id + '/',
    description: category.description,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: toolSlugs.map((slug, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: site.url + '/tools/' + slug + '/',
      })),
    },
  };
}
