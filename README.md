<div align="center">

<img src="public/favicon-round-512.png" alt="mory.dev" width="96" height="96">

# mory.dev

**Engineering leader who builds and leads teams shipping software and AI-powered
products from prototype to production. Past work includes KLM’s airport
operations stack and the EU Single Digital Gateway programme.**

[mory.dev](https://www.mory.dev) · [Apps](https://www.mory.dev/apps/) · [Works](https://www.mory.dev/works/) · [Books](https://www.mory.dev/books/) · [Posts](https://www.mory.dev/posts/)

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

</div>

---

The source for my personal site: portfolio, writing, books, and the software I
release under mory.dev.

## Software

Products are developed across two GitHub accounts — [@dariomory](https://github.com/dariomory)
for personal projects and [@mory-dev](https://github.com/mory-dev) for the
organisation.

| | |
|---|---|
| [HexDigest](https://hexdigest.com) | Daily marketplace intelligence datasets — Gumroad, Chrome Web Store, Shopify App Store |
| [FormHarvester](https://formharvester.com) | Open-source form intelligence engine — web discovery and contact form automation |
| [sudonotes](https://sudonotes.com) | Local-first Markdown notebook for LLM prompts and the ideas behind them |
| [TrendFlow](https://trendflow.mory.dev) | Google Trends over MCP and REST, for AI assistants and code |
| [Seep](https://tryseep.com) | Chrome extension that teaches a language while you browse — 28 languages |
| [NomadWiFi](https://nomadwifi.mory.dev) | Wi-Fi roaming and 5 GHz optimiser for Windows |
| [Photovibe](https://photovibe.mory.dev) | Local-first photo editor with layers and blend modes |
| [Shopify for GitHub](https://shopify.mory.dev) | Commerce context in GitHub issues |
| [matadore](https://dariomory.github.io/matadore/) | Attack-surface mapping toolkit (pre-alpha) |

## Stack

[Astro](https://astro.build) static site, no runtime framework. Content lives in
Markdown — `books` and `blog` as typed content collections, apps and projects as
file-routed pages. Structured data (`Person`, `SoftwareApplication`, `Book`,
`BlogPosting`, `FAQPage`) is emitted per page and linked to a single `Person`
entity.

## Structure

```
src/
├── components/   Card, Navigation, SeoHead, PersonSchema, Footer, ...
├── content/      typed collections — books/, blog/
├── layouts/      Layout, MarkdownAppLayout, MarkdownWorksLayout
├── pages/        routes — apps/, books/, posts/, projects/, contributions/
│                 plus sitemap.xml.ts and rss.xml.ts endpoints
├── styles/       global.css
└── utils/
public/           images, favicons, robots.txt
```

## Running it

```bash
npm install
npm run dev       # dev server
npm run build     # static build to dist/
npm run preview   # serve the build
```

## License

MIT — see [LICENSE](LICENSE).
