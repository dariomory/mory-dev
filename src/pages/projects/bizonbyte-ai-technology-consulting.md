---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'Bizonbyte'
description: 'The leading consulting company for AI and technology solutions in the Netherlands.'
image:
    url: '/bizonbyte.png'
    alt: 'Bizonbyte logo'
worksImage1:
    url: '/bizonbyte_1.webp'
    alt: 'first image of your project.'
worksImage2:
    url: '/bizonbyte_2.webp'
    alt: 'second image of your project.'
platform: Web
stack: NextJS
website: https://bizonbyte.nl
github: https://github.com/bizonbyte/bizonbyte
role: 'Built the platform'
updated: 2026-09-05
---
Built the platform for [Bizonbyte](https://bizonbyte.nl), a leading consulting firm in the
Netherlands specialising in AI and technology solutions.

### The problem

A consultancy's own platform is the one piece of work every prospective client inspects before
talking to anyone. For a firm selling AI and engineering capability, it has to demonstrate the
thing it claims rather than assert it — a slow, generic site quietly argues the opposite case.

### Constraints

The content changes constantly. Case studies, service lines and positioning all move as the
business does, so the platform had to be editable by the people running it rather than gated
behind a deploy the engineer has to run.

It also had to be fast and findable. For a firm whose buyers start with a search, performance
and crawlability are commercial properties, not engineering vanity.

### What I built

The platform on **Next.js**, developed [in the open](https://github.com/bizonbyte/bizonbyte).

Next.js was the fit for the shape of the problem: pages that are mostly static get rendered
ahead of time and served fast, while the parts that genuinely need to be dynamic stay dynamic —
without maintaining two separate systems to get both. For a content-led site where the content
is the product, that split is the whole architecture.

### Outcome

A platform the firm could keep current itself, that loaded quickly, and that made the technical
argument for the business before anyone read a word of it.
