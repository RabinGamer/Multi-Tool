import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'ToolMint privacy policy: all tools run in your browser, files never leave your device, no accounts, no data selling.',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <section className="section max-w-3xl py-14">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
      <div className="mt-6 grid gap-5 leading-relaxed text-zinc-500 dark:text-zinc-400">
        <p>
          <strong>The short version:</strong> ToolMint tools run entirely in your browser. Your
          files, text and numbers are processed on your device and are never uploaded to any
          server. We do not require accounts, we do not sell data, and we cannot see what you
          type into any tool.
        </p>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">What we do not collect</h2>
        <p>
          We do not collect, store or transmit the content you process with any tool - text,
          files, calculations or generated values. There are no uploads because there is no
          upload endpoint.
        </p>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Analytics</h2>
        <p>
          We may use privacy-respecting, aggregate analytics to understand which tools are
          popular and how the site is used overall. This measures page visits and tool
          interactions, never the content you process.
        </p>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Cookies</h2>
        <p>
          ToolMint stores a small preference in your browser local storage (for example, your
          light or dark theme choice and recently used tools). This never leaves your device.
        </p>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Advertising</h2>
        <p>
          If advertising is enabled in the future, ads may set their own cookies as disclosed by
          the ad provider. Ads will never interfere with tool functionality.
        </p>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Changes</h2>
        <p>
          If this policy changes materially, the updated date below will change with it. The core
          promise will not: your data stays on your device.
        </p>
      </div>
    </section>
  );
}
