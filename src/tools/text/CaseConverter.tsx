'use client';

import { TextTool } from '@/tools/framework/TextTool';

function titleCase(s: string) {
  return s.toLowerCase().replace(/[a-z]/g, (c) => c.toUpperCase());
}

function sentenceCase(s: string) {
  return s
    .toLowerCase()
    .replace(/(^s*[a-z])|([.!?
]s+[a-z])/g, (m) => m.toUpperCase());
}

function camelCase(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c: string) => c.toUpperCase());
}

export default function CaseConverter() {
  return (
    <TextTool
      inputPlaceholder="Paste text to convert..."
      options={[
        {
          key: 'mode',
          label: 'Convert to',
          type: 'select',
          default: 'upper',
          options: [
            { label: 'UPPERCASE', value: 'upper' },
            { label: 'lowercase', value: 'lower' },
            { label: 'Title Case', value: 'title' },
            { label: 'Sentence case', value: 'sentence' },
            { label: 'camelCase', value: 'camel' },
            { label: 'PascalCase', value: 'pascal' },
            { label: 'snake_case', value: 'snake' },
            { label: 'kebab-case', value: 'kebab' },
            { label: 'aLtErNaTiNg', value: 'alt' },
          ],
        },
      ]}
      transform={(text, opts) => {
        switch (opts.mode) {
          case 'lower':
            return text.toLowerCase();
          case 'title':
            return titleCase(text);
          case 'sentence':
            return sentenceCase(text);
          case 'camel': {
            const c = camelCase(text);
            return c.charAt(0).toLowerCase() + c.slice(1);
          }
          case 'pascal':
            return camelCase(text);
          case 'snake':
            return text
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '_')
              .replace(/^_+|_+$/g, '');
          case 'kebab':
            return text
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '');
          case 'alt':
            return text
              .split('')
              .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
              .join('');
          default:
            return text.toUpperCase();
        }
      }}
    />
  );
}
