import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { CommandPalette } from '@/components/search/CommandPalette';
import { site } from '@/config/site';
import { getLiveTools } from '@/data/tools';
import { getCategory } from '@/data/categories';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name + ' — ' + site.tagline,
    template: '%s — ' + site.name,
  },
  description: site.description,
  keywords: site.keywords,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: site.name + ' — ' + site.tagline,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name + ' — ' + site.tagline,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

const themeScript =
  "(function(){try{var t=localStorage.getItem('tm-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const paletteTools = getLiveTools().map((t) => ({
    slug: t.slug,
    name: t.name,
    icon: t.icon,
    category: getCategory(t.category).name,
    shortDescription: t.shortDescription,
  }));

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          inter.variable +
          ' ' +
          mono.variable +
          ' min-h-screen font-sans antialiased dark:bg-zinc-950 bg-zinc-50 flex flex-col'
        }
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CommandPalette tools={paletteTools} />
      </body>
    </html>
  );
}
