'use client';

import { TextTool } from '@/tools/framework/TextTool';

function slugify(line: string): string {
  return line
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function TextToSlug() {
  return (
    <TextTool
      inputPlaceholder="Paste a title, or one title per line for bulk slugs..."
      transform={(text, opts) =>
        text
          .split(/
/)
          .map((line) => slugify(line))
          .join('
')
      }
      options={[]}
    />
  );
}
