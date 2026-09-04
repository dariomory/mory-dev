---
layout: ../../layouts/MarkdownAppLayout.astro
title: 'TrendFlow'
seoTitle: 'TrendFlow — live Google Trends research for AI and code'
description: 'Google Trends data over MCP and REST. Compare search terms, find breakout queries and see what is trending now, from ChatGPT, Claude, Cursor or your code.'
tagline: 'Live Google Trends research for AI.'
order: 4
status: 'Shipped — commercial'
image: { url: '/apps/trendflow.png', alt: 'TrendFlow logo' }
appImage1: { url: '/apps/trendflow-1.webp', alt: 'TrendFlow — live Google Trends research for AI' }
website: https://trendflow.mory.dev
pricing: 'Free tier · Pro $12/mo · Business $99/mo'
platform: 'Hosted MCP server, REST API, Python and JavaScript libraries'
stack: 'Next.js 15, Vercel, Neon Postgres, Model Context Protocol, Stripe'
appCategory: 'BusinessApplication'
operatingSystem: 'Web'
price: 0
priceHigh: 99
offerCount: 3
priceCurrency: 'USD'
sameAs:
  - https://github.com/dariomory/trendflow
  - https://github.com/dariomory/trendflow-js
  - https://pypi.org/project/trendflow-py/
  - https://www.npmjs.com/package/trendflow
---

TrendFlow makes Google Trends usable from wherever you already work. It speaks the Model
Context Protocol over HTTP, so pointing ChatGPT, Claude, Perplexity or Cursor at the hosted
endpoint gives the assistant live search-interest data. The same allowance is available as a
plain REST API with bearer keys — any language, any backend, any cron job.

Interest over time, interest by region, trending now, related queries, search suggestions and
the full geographic hierarchy are all covered, with type-safe enums for regions, timeframes and
resolutions, and exports to JSON, CSV or a pandas DataFrame.

Two things make the data better than the obvious approach. Trending queries are read from
Google's internal RPC rather than the public RSS feed, which returns roughly five times as many
items with real growth figures attached. And topic lookup resolves an entity rather than a
literal string — a topic can score 62 where the exact phrase scores 1.

The libraries are open source and MIT licensed in both ecosystems, maintained at feature
parity: [trendflow-py](https://pypi.org/project/trendflow-py/) for Python and
[trendflow](https://www.npmjs.com/package/trendflow) for JavaScript and TypeScript, the latter
with zero runtime dependencies. Trending searches and topic lookup are free forever, with no
account.
