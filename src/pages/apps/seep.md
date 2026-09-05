---
layout: ../../layouts/MarkdownAppLayout.astro
title: 'Seep'
seoTitle: 'Seep — learn 28 languages while you browse'
description: 'A Chrome extension that quietly translates words inline as you read, so you absorb a language while browsing normally. 28 languages, free, no account needed.'
tagline: 'Learn languages while you browse.'
order: 5
status: 'Shipped — v2.0.0 on the Chrome Web Store'
image: { url: '/apps/seep.png', alt: 'Seep logo' }
appImage1: { url: '/apps/seep-1.webp', alt: 'Seep translating words inline on a webpage, with the language and difficulty picker open' }
website: https://tryseep.com
pricing: 'Free'
platform: 'Chrome (Manifest V3)'
stack: 'Vanilla JavaScript, Chrome MV3, Web Speech API'
appCategory: 'BrowserApplication'
operatingSystem: 'Chrome'
version: '2.0.0'
price: 0
priceCurrency: 'USD'
sameAs:
  - https://chromewebstore.google.com/detail/kiglkjjbcmepbeilgoebegieeiidneep
faq:
  - q: 'Is Seep free?'
    a: 'Yes, completely free, with no account and no sign-up.'
  - q: 'How many languages does it support?'
    a: >-
      Twenty-eight in one extension, including Spanish, French, German, Italian,
      Portuguese, Dutch, Japanese, Korean, Mandarin, Hindi, Arabic, Turkish, Russian
      and Greek.
  - q: 'Which browsers does it work in?'
    a: 'Chrome, built on Manifest V3. Version 2.0.0 is on the Chrome Web Store.'
  - q: 'Does it send my browsing data anywhere?'
    a: >-
      No. The dictionary ships inside the extension and there is no backend and no
      account, so translation needs no network round-trip. Broad site access is an
      optional permission rather than a required one.
  - q: 'Can I control how much of the page gets translated?'
    a: >-
      Three difficulty tiers control which words are swapped and how often, so the
      page stays readable whether you are starting out or nearly fluent.
  - q: 'How do I see the original word again?'
    a: >-
      Hover a translated word to reveal the original and its language flag, or click
      it to hear it pronounced.
  - q: 'Can I turn it off on a page?'
    a: 'One keystroke toggles the whole extension off.'
---

Seep quietly replaces common words on any webpage with their translation. You read normally and
absorb a new language without setting time aside for it — no flashcard sessions, no dedicated
study block.

Twenty-eight languages ship in one extension, including Spanish, French, German, Italian,
Portuguese, Dutch, Japanese, Korean, Mandarin, Hindi, Arabic, Turkish, Russian and Greek. Three
difficulty tiers control which words get swapped and how often, so the page stays readable at
every level. Hover a translated word to see the original and its language flag; click to hear
it pronounced. One keystroke toggles the whole thing off.

The privacy story is a consequence of the architecture rather than a policy: the dictionary is
bundled with the extension, there is no backend and no account, and broad site access is an
optional permission rather than a required one.

### How it compares

Against **whole-page translators** such as Google Translate: those replace the page so you can
read it. Seep leaves the page in your own language and swaps individual words so you have to
work slightly for each one. Opposite goals — use a page translator when you need to understand
something now.

Against **immersion extensions** such as Toucan: the same core idea. Seep bundles its dictionary
locally rather than calling a service, needs no account, and ships 28 languages in the free
version.

Against **dedicated study apps** such as Anki or Duolingo: Seep has no spaced repetition, no
vocabulary list, no progress tracking and no grammar instruction. It is passive exposure while
you do something else, which is a supplement to studying rather than a replacement for it.
