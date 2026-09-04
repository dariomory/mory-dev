---
layout: ../../layouts/MarkdownAppLayout.astro
title: 'S4G Connector'
seoTitle: 'S4G Connector — commerce context in GitHub issues'
description: 'A GitHub App that keeps one comment per issue carrying verified product, theme and order references from the connected storefront. Currently in beta.'
tagline: 'Commerce context for GitHub issues.'
order: 8
status: 'Beta — awaiting marketplace review'
image: { url: '/apps/s4g-connector.png', alt: 'S4G Connector logo' }
website: https://ecommerce-for-github.mory.dev
github: https://github.com/dariomory/shopify-for-github
pricing: 'Not published — free during beta'
platform: 'GitHub App'
stack: 'Next.js 15, Vercel, Postgres, Google Gemini'
appCategory: 'DeveloperApplication'
operatingSystem: 'Web'
price: 0
priceCurrency: 'USD'
sameAs:
  - https://github.com/apps/shopify-for-github
---

Store bug reports arrive vague. "Checkout is broken on the sale page" does not tell a developer
which product, which theme, or which order. S4G Connector turns those into developer-ready
issues by resolving the references automatically.

It maintains exactly one canonical comment per GitHub issue, carrying verified product, theme
and order references pulled from the storefront connected to that repository — an order becomes
an ID plus a deep link into the admin. Two slash commands in an issue comment drive it, one to
build context and one to refresh it. Repositories without their own connection fall back to the
most recently connected store in the same installation.

It is deliberately incurious about everything else. On GitHub it asks only for Issues
read and write, so it cannot see your code. Order access is limited to the ID, name-number and
an admin link — no customer fields, no payment details. Tokens are encrypted at rest, and
uninstalling from either side wipes the credentials and mappings.

Built to work with Shopify storefronts. Not affiliated with, endorsed by, or sponsored by
Shopify.

Currently in beta while the marketplace listing goes through review.
