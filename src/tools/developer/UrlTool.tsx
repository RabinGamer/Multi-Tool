'use client';

import { TextTool } from '@/tools/framework/TextTool';

export default function UrlTool() {
  return (
    <TextTool
      inputPlaceholder="Paste a URL or parameter value..."
      options={[
        {
          key: 'mode',
          label: 'Direction',
          type: 'select',
          default: 'encode',
          options: [
            { label: 'Encode', value: 'encode' },
            { label: 'Decode', value: 'decode' },
          ],
        },
        {
          key: 'scope',
          label: 'Strictness',
          type: 'select',
          default: 'component',
          options: [
            { label: 'Component (for parameter values)', value: 'component' },
            { label: 'Full URI (keeps :// and ?)', value: 'uri' },
          ],
        },
      ]}
      transform={(text, opts) => {
        if (opts.mode === 'encode') {
          return opts.scope === 'uri' ? encodeURI(text) : encodeURIComponent(text);
        }
        return decodeURIComponent(text);
      }}
    />
  );
}
