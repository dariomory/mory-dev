---
layout: ../../layouts/MarkdownAppLayout.astro
title: 'Shopify for GitHub'
seoTitle: 'Shopify for GitHub — commerce context in GitHub issues'
description: 'A GitHub App that keeps one comment per issue carrying verified product, theme and order references from the connected store. Currently in beta.'
tagline: 'Commerce context for GitHub issues.'
order: 8
status: 'Beta — awaiting app review'
image: { url: '/apps/shopify-for-github.png', alt: 'Shopify for GitHub logo' }
appImage1: { url: '/apps/shopify-for-github-1.webp', alt: 'The Shopify for GitHub landing page' }
appImage2: { url: '/apps/shopify-for-github-2.webp', alt: 'A GitHub issue with the bot comment listing verified product, theme and order references' }
website: https://shopify.mory.dev
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
faq:
  - q: 'Can I install it today?'
    a: >-
      It is in beta while the app listing goes through review, and free during beta.
  - q: 'Why is it called S4G Connector on the GitHub Marketplace?'
    a: >-
      It is the same app under a name that keeps the store trademark out of the
      listing title. It is not affiliated with, endorsed by or sponsored by Shopify.
  - q: 'Can it see my code?'
    a: >-
      No. On GitHub it requests only Issues read and write, so repository contents
      are outside what it can access at all.
  - q: 'What order data does it touch?'
    a: >-
      Only the order ID, the name-number, and a deep link into the store admin. No
      customer fields and no payment details. Tokens are encrypted at rest.
  - q: 'How do I use it on an issue?'
    a: >-
      Two slash commands in an issue comment drive it — one to build the commerce
      context, one to refresh it.
  - q: 'Will it clutter my issue threads?'
    a: >-
      No. It maintains exactly one canonical comment per issue and updates that
      comment in place rather than adding new ones.
  - q: 'What if a repository has no store connected?'
    a: >-
      It falls back to the most recently connected store in the same installation, so
      a multi-repository setup does not need a connection wired up per repository.
  - q: 'What happens when I uninstall it?'
    a: >-
      Uninstalling from either side wipes the stored credentials and the repository
      to store mappings.
---

Shopify for GitHub is a GitHub App that turns vague store bug reports into developer-ready
issues, by resolving product, theme and order references from the connected Shopify store.

Store bug reports arrive vague. "Checkout is broken on the sale page" does not tell a developer
which product, which theme, or which order. Shopify for GitHub turns those into developer-ready
issues by resolving the references automatically.

It maintains exactly one canonical comment per GitHub issue, carrying verified product, theme
and order references pulled from the store connected to that repository — an order becomes an ID
plus a deep link into the admin. Two slash commands in an issue comment drive it, one to build
context and one to refresh it. Repositories without their own connection fall back to the most
recently connected store in the same installation.

It is deliberately incurious about everything else. On GitHub it asks only for Issues read and
write, so it cannot see your code. Order access is limited to the ID, name-number and an admin
link — no customer fields, no payment details. Tokens are encrypted at rest, and uninstalling
from either side wipes the credentials and mappings.

It is listed on the GitHub Marketplace as **S4G Connector**, which is the same app under a name
that keeps the store's trademark out of the listing title.

Not affiliated with, endorsed by, or sponsored by Shopify.

Currently in beta while the app listing goes through review.

### How it compares

Against **doing it by hand**, which is the real incumbent: someone opens the admin, finds the
order, copies the ID and pastes a link into the issue. This does that automatically and keeps it
in one comment that stays current.

Against **general automation** such as Shopify Flow or Zapier: those can post to GitHub, but
they fire on store events and append a comment each time. The unit here is the issue rather than
the event — one comment per issue, refreshed on demand, with the references verified against the
store rather than pasted as text.

It is narrow on purpose. Shopify only, issues only, and by design it cannot see your code.
