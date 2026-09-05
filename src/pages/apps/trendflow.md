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
faq:
  - q: 'What does TrendFlow cost?'
    a: >-
      There is a free tier, Pro at 12 USD per month and Business at 99 USD per month.
      Trending searches and topic lookup are free forever and need no account.
  - q: 'How do I connect Claude, ChatGPT or Cursor to it?'
    a: >-
      It speaks the Model Context Protocol over HTTP, so you point the assistant at
      the hosted MCP endpoint and it gets live search-interest data as a tool. No
      local server to run.
  - q: 'Can I use it without MCP?'
    a: >-
      Yes. The same allowance is available as a plain REST API with bearer keys, so
      any language, backend or cron job can call it.
  - q: 'What data can I get?'
    a: >-
      Interest over time, interest by region, trending now, related queries, search
      suggestions and the full geographic hierarchy, with type-safe enums for
      regions, timeframes and resolutions.
  - q: 'What export formats are supported?'
    a: 'JSON, CSV, or a pandas DataFrame directly from the Python library.'
  - q: 'Why not just scrape Google Trends myself?'
    a: >-
      Two differences in the data. Trending queries are read from Google internal RPC
      rather than the public RSS feed, which returns roughly five times as many items
      with real growth figures attached. And topic lookup resolves an entity rather
      than a literal string, which matters more than it sounds: a topic can score 62
      where the exact phrase scores 1.
  - q: 'Are the client libraries open source?'
    a: >-
      Yes, MIT licensed in both ecosystems and maintained at feature parity —
      trendflow-py for Python and trendflow for JavaScript and TypeScript, the latter
      with zero runtime dependencies.
---

TrendFlow is a hosted service that exposes Google Trends data over the Model Context Protocol
and a REST API, so an AI assistant or your own code can query live search interest directly.

It makes Google Trends usable from wherever you already work. It speaks the Model
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

### How it compares

Against **unofficial client libraries** such as pytrends: you are trading a library you run
yourself for a hosted endpoint someone else keeps working when Google changes something. The
client libraries here are open source, but the service behind them is not self-hostable.

Against **commercial trend products** such as Exploding Topics or Glimpse: those blend multiple
signals and editorialise what matters. TrendFlow does not. It is a faithful, typed interface to
one source, which is the right choice when you want the underlying numbers and the wrong one
when you want a curated answer.

It is Google Trends only. If you need social, marketplace or news signals alongside search
interest, this is one input rather than the whole picture.
