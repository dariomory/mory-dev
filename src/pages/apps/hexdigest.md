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
faq:
  - q: 'What does a dataset cost?'
    a: >-
      499 USD as a one-time purchase per dataset, not a subscription. A preview of
      roughly 1,000 records from any tracker is free.
  - q: 'Which marketplaces are covered?'
    a: >-
      Three are live: Gumroad, the Chrome Web Store (341,000+ extensions across
      64,000+ creators) and the Shopify App Store (26,000+ apps).
  - q: 'What formats do the datasets come in?'
    a: 'CSV, JSONL and Parquet. The trackers are also browsable on the web.'
  - q: 'How often does the data refresh?'
    a: >-
      Trackers refresh daily. Every crawl writes one row per product rather than
      overwriting the last one, so price moves, rating drift and review velocity are
      recoverable from history rather than inferred from a single snapshot.
  - q: 'Can I see the data before buying?'
    a: >-
      Yes. Each tracker offers a free preview of around 1,000 records, which is
      enough to check the schema and coverage against your own use case.
  - q: 'Why is sales_count sometimes empty?'
    a: >-
      Because it is nullable by design on platforms that do not publish sales
      figures. A NULL there means the marketplace hides the number, not that the
      crawl failed — the data contract treats that distinction as meaningful.
  - q: 'Is any of it open source?'
    a: >-
      Two pieces of the crawler infrastructure are, both MIT licensed:
      crawl-sharding for deterministic lease-aware work distribution, and
      scrapy-fingerprint for browser TLS fingerprints and adaptive proxy fallback
      in Scrapy. The datasets themselves are commercial.
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

### How it compares

Against **subscription analytics products**, the model here is a one-time purchase of a dataset
you keep, in formats you can load into your own tools. There is no dashboard, no seat pricing
and no ongoing licence — and equally, no hosted UI to log into and no live API.

Against **writing your own crawler**, you skip proxy rotation, fingerprinting, sharding and the
daily operational burden of keeping three marketplaces flowing. The two hardest pieces of that
infrastructure are open source here if you would rather build it yourself.

Coverage is the real limit. Three marketplaces are live. If your category sits on Amazon,
Etsy, the App Store or Google Play, this is not the dataset you need.
