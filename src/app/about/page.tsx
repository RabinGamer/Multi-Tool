import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'ToolMint is an independent project building the fastest, most private free online tools on the web. Learn about the mission and what makes it different.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <section className="section max-w-3xl py-14">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About ToolMint</h1>
      <div className="mt-6 grid gap-5 leading-relaxed text-zinc-500 dark:text-zinc-400">
        <p>
          ToolMint is an independent project with one goal: the everyday tools people need -
          counters, calculators, converters, developer utilities - should be fast, beautiful and
          genuinely free. Not "free with a signup wall", not "free until your third file", not
          "free with a watermark". Free.
        </p>
        <p>
          The site is built around a simple engineering principle: your data stays on your device.
          Every tool on ToolMint processes input entirely in your browser. There is no server that
          receives your files, drafts or numbers. That is not a policy promise - it is how the
          site is architecturally built.
        </p>
        <p>
          ToolMint launched with the core text, calculator and developer utilities, and grows
          every week toward a full catalog of 275+ tools across 11 categories, including PDF and
          image tools that run on in-browser WebAssembly.
        </p>
        <p>
          Have a tool you wish existed? Or found a bug? Feedback from real users shapes the
          roadmap - every suggestion is read and prioritized.
        </p>
      </div>
    </section>
  );
}
