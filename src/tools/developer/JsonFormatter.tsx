'use client';

import { TextTool } from '@/tools/framework/TextTool';

export default function JsonFormatter() {
  return (
    <TextTool
      inputPlaceholder='{"paste":"your JSON here"}'
      options={[
        {
          key: 'mode',
          label: 'Format',
          type: 'select',
          default: 'pretty2',
          options: [
            { label: 'Pretty print (2 spaces)', value: 'pretty2' },
            { label: 'Pretty print (4 spaces)', value: 'pretty4' },
            { label: 'Minify', value: 'minify' },
          ],
        },
      ]}
      transform={(text, opts) => {
        const parsed = JSON.parse(text);
        if (opts.mode === 'minify') return JSON.stringify(parsed);
        return JSON.stringify(parsed, null, opts.mode === 'pretty4' ? 4 : 2);
      }}
    />
  );
}
