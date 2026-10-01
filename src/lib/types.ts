export type CategoryId =
  | 'pdf'
  | 'image'
  | 'text'
  | 'ai-writing'
  | 'seo'
  | 'calculators'
  | 'developer'
  | 'qr-barcode'
  | 'math'
  | 'time'
  | 'web-privacy';

export interface FAQ {
  question: string;
  answer: string;
}

export interface Tool {
  slug: string;
  name: string;
  category: CategoryId;
  icon: string;
  shortDescription: string;
  longDescription: string[];
  howToSteps: string[];
  faqs: FAQ[];
  related: string[];
  keywords: string[];
  priority: 'P0' | 'P1' | 'P2';
  popular: boolean;
  status: 'live' | 'coming-soon';
}
