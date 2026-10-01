'use client';

import { TextTool } from '@/tools/framework/TextTool';

export default function Base64Tool() {
  return (
    <TextTool
      inputPlaceholder="Paste text to encode, or Base64 to decode..."
      options={[
        {
          key: 'mode',
          label: 'Direction',
          type: 'select',
          default: 'encode',
          options: [
            { label: 'Encode text to Base64', value: 'encode' },
            { label: 'Decode Base64 to text', value: 'decode' },
          ],
        },
      ]}
      transform={(text, opts) => {
        if (opts.mode === 'encode') {
          const bytes = new TextEncoder().encode(text);
          let binary = '';
          for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
          return btoa(binary);
        }
        const trimmed = text.trim();
        if (!/^[A-Za-z0-9+/=s]+$/.test(trimmed)) {
          throw new Error('input is not valid Base64');
        }
        const binary = atob(trimmed.replace(/s/g, ''));
        const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
        return new TextDecoder().decode(bytes);
      }}
    />
  );
}
