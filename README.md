# ToolMint

A premium, free multi-tool web app: 275+ online tools planned across 11 categories
(PDF, Image, Text, AI Writing, SEO, Calculators, Developer, QR & Barcode, Math,
Time, Web & Privacy). Phase 1 ships the platform architecture plus 18 fully
working tools.

## Stack

- Next.js 15 (App Router, TypeScript, static export)
- Tailwind CSS (dark-mode-first premium design system)
- Lucide icons
- 100% client-side tool processing - no backend, no file uploads, no auth

## Develop

    npm install
    npm run dev

## Deploy to Netlify (free)

1. Push this repo to GitHub (done).
2. In Netlify: "Add new site" -> "Import an existing project" -> pick this repo.
3. Settings are auto-detected from netlify.toml (build: next build, publish: out).
4. Deploy. You get a free toolmint.netlify.app subdomain.

## How to add a new tool

1. Add an entry to src/data/tools.ts (slug, name, category, descriptions, FAQs,
   how-to steps, related tools, priority, status: live).
2. Create the implementation component under src/tools/<category>/.
3. Register it in src/components/tool/ToolImplementation.tsx.
4. That is it - the page, metadata, JSON-LD, sitemap entry and internal links
   are generated automatically from the registry.

## Roadmap

- Phase 1 (done): architecture + design system + 18 tools (text, calculators,
  developer, time, math categories).
- Phase 2: PDF + image tools via WASM (pdf-lib, pdfjs, browser libs).
- Phase 3: SEO tools, QR codes, background remover (ONNX), remaining categories.

## Privacy

All tool processing happens in the visitor's browser. Files never leave the
device. See /privacy on the site.
