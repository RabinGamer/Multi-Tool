import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for ToolMint free online tools.',
  alternates: { canonical: '/terms/' },
};

export default function TermsPage() {
  return (
    <section className="section max-w-3xl py-14">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Use</h1>
      <div className="mt-6 grid gap-5 leading-relaxed text-zinc-500 dark:text-zinc-400">
        <p>
          Welcome to ToolMint. By using the site you agree to these simple terms.
        </p>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Free use</h2>
        <p>
          All tools are provided free of charge, without accounts or daily limits. You may use
          the output of the tools however you like - the content you create remains yours.
        </p>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">No warranty</h2>
        <p>
          Tools are provided "as is" without warranty of any kind. While every tool is built
          with care, always double-check important results - loan decisions, health indicators,
          and published content are your responsibility.
        </p>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Acceptable use</h2>
        <p>
          Do not attempt to disrupt the site, scrape it abusively, or use it for anything
          unlawful. The service may be updated or changed at any time as the catalog grows.
        </p>
      </div>
    </section>
  );
}
