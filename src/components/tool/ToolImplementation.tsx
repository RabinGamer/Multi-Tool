'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

const impls: Record<string, ComponentType> = {
  'word-counter': dynamic(() => import('@/tools/text/WordCounter')),
  'character-counter': dynamic(() => import('@/tools/text/CharacterCounter')),
  'case-converter': dynamic(() => import('@/tools/text/CaseConverter')),
  'lorem-ipsum-generator': dynamic(() => import('@/tools/text/LoremIpsumGenerator')),
  'remove-line-breaks': dynamic(() => import('@/tools/text/RemoveLineBreaks')),
  'text-to-slug': dynamic(() => import('@/tools/text/TextToSlug')),
  'percentage-calculator': dynamic(() => import('@/tools/calculators/PercentageCalculator')),
  'age-calculator': dynamic(() => import('@/tools/calculators/AgeCalculator')),
  'bmi-calculator': dynamic(() => import('@/tools/calculators/BmiCalculator')),
  'emi-calculator': dynamic(() => import('@/tools/calculators/EmiCalculator')),
  'gst-calculator': dynamic(() => import('@/tools/calculators/GstCalculator')),
  'discount-calculator': dynamic(() => import('@/tools/calculators/DiscountCalculator')),
  'json-formatter': dynamic(() => import('@/tools/developer/JsonFormatter')),
  'base64-encode-decode': dynamic(() => import('@/tools/developer/Base64Tool')),
  'url-encode-decode': dynamic(() => import('@/tools/developer/UrlTool')),
  'password-generator': dynamic(() => import('@/tools/web-privacy/PasswordGenerator')),
  'random-number-generator': dynamic(() => import('@/tools/math/RandomNumberGenerator')),
  'countdown-timer': dynamic(() => import('@/tools/time/CountdownTimer')),
};

export function ToolImplementation({ id }: { id: string }) {
  const Impl = impls[id];
  if (!Impl) return null;
  return <Impl />;
}
