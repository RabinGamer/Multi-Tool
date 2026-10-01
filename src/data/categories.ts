import type { CategoryId } from '@/lib/types';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  accent: 'indigo' | 'violet' | 'cyan' | 'fuchsia' | 'emerald' | 'amber' | 'sky' | 'rose' | 'lime' | 'orange' | 'teal';
}

export const categories: Category[] = [
  {
    id: 'pdf',
    name: 'PDF Tools',
    description: 'Merge, split, compress and convert PDF files without uploading them anywhere.',
    icon: 'FileText',
    accent: 'indigo',
  },
  {
    id: 'image',
    name: 'Image Tools',
    description: 'Compress, resize, crop and convert images right inside your browser.',
    icon: 'Image',
    accent: 'violet',
  },
  {
    id: 'text',
    name: 'Text & Writing',
    description: 'Counters, case converters, slug generators and everyday text utilities.',
    icon: 'Type',
    accent: 'cyan',
  },
  {
    id: 'ai-writing',
    name: 'AI Writing',
    description: 'Summarizers, paraphrasers and writing assistants to polish your drafts.',
    icon: 'Sparkles',
    accent: 'fuchsia',
  },
  {
    id: 'seo',
    name: 'SEO Tools',
    description: 'Meta tags, sitemaps, robots.txt and schema generators for better rankings.',
    icon: 'Search',
    accent: 'emerald',
  },
  {
    id: 'calculators',
    name: 'Calculators',
    description: 'Percentages, EMI, GST, BMI, age and everyday finance and health math.',
    icon: 'Calculator',
    accent: 'amber',
  },
  {
    id: 'developer',
    name: 'Developer Tools',
    description: 'JSON formatting, Base64, JWT, hashing and encoding utilities.',
    icon: 'Code2',
    accent: 'sky',
  },
  {
    id: 'qr-barcode',
    name: 'QR & Barcode',
    description: 'Generate QR codes for links, Wi-Fi and contact details in seconds.',
    icon: 'QrCode',
    accent: 'rose',
  },
  {
    id: 'math',
    name: 'Math & Education',
    description: 'Random numbers, number-to-words, roman numerals and study helpers.',
    icon: 'Sigma',
    accent: 'lime',
  },
  {
    id: 'time',
    name: 'Time Utilities',
    description: 'Countdown timers, stopwatches and date calculations for daily life.',
    icon: 'Timer',
    accent: 'orange',
  },
  {
    id: 'web-privacy',
    name: 'Web & Privacy',
    description: 'Password strength checks, IP and browser info, and privacy utilities.',
    icon: 'ShieldCheck',
    accent: 'teal',
  },
];

export function getCategory(id: CategoryId): Category {
  return categories.find((c) => c.id === id) as Category;
}
