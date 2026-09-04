---
layout: ../../layouts/MarkdownAppLayout.astro
title: 'HexDigest'
seoTitle: 'HexDigest — daily marketplace intelligence datasets'
description: 'Daily price, rating and listing data from Gumroad, the Chrome Web Store and the Shopify App Store. Free preview, full datasets as a one-time purchase.'
tagline: 'Every listing, priced and tracked.'
order: 1
status: 'In production — trackers refresh daily'
image: { url: '/apps/hexdigest.svg', alt: 'HexDigest logo' }
appImage1: { url: '/apps/hexdigest-1.webp', alt: 'HexDigest — multi-platform market intelligence' }
website: https://hexdigest.com
pricing: '$499 one-time per dataset · free ~1,000-record preview'
platform: 'Web · CSV, JSONL and Parquet exports'
stack: 'Scrapy, Astro, Cloudflare R2 and Workers, Stripe'
appCategory: 'BusinessApplication'
operatingSystem: 'Web'
price: 499
priceCurrency: 'USD'
sameAs:
  - https://github.com/mory-dev/hexdigest-crawl-sharding
  - https://github.com/mory-dev/hexdigest-scrapy-fingerprint
---

HexDigest compiles daily market intelligence from public marketplace listings — products,
prices, ratings and reviews — and publishes it as browsable trackers and downloadable datasets.
Three marketplaces are live today: [Gumroad](https://gumroad.hexdigest.com),
the [Chrome Web Store](https://chrome-extensions.hexdigest.com) (341,000+ extensions across
64,000+ creators) and the [Shopify App Store](https://shopify.hexdigest.com) (26,000+ apps).

It is built for sellers, founders, analysts and investors doing competitor and category
research — the kind of question that needs *history*, not a single scrape. Every crawl writes
one row per product, so price moves, rating drift and review velocity are all recoverable
rather than inferred.

The data contract is deliberately honest about its gaps: `sales_count` is nullable by design on
platforms that hide sales figures, because a NULL is data, not an error.

Two pieces of the crawler infrastructure are open source and MIT licensed —
[crawl-sharding](https://github.com/mory-dev/hexdigest-crawl-sharding) for deterministic,
lease-aware work distribution, and
[scrapy-fingerprint](https://github.com/mory-dev/hexdigest-scrapy-fingerprint) for browser TLS
fingerprints and adaptive proxy fallback in Scrapy.
