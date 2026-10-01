'use client';

import { TextTool } from '@/tools/framework/TextTool';

export default function RemoveLineBreaks() {
  return (
    <TextTool
      inputPlaceholder="Paste text copied from a PDF or email..."
      options={[
        {
          key: 'preserve',
          label: 'Preserve paragraph breaks',
          type: 'checkbox',
          default: true,
        },
      ]}
      transform={(text, opts) => {
        if (opts.preserve) {
          return text
            .split(/
s*
/)
            .map((para) => para.replace(/s*
+s*/g, ' ').trim())
            .filter((p) => p.length > 0)
            .join('

');
        }
        return text.replace(/s*
+s*/g, ' ').trim();
      }}
    />
  );
}
