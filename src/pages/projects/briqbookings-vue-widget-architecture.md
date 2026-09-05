---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'BriqBookings'
description: 'Property booking platform with an embeddable widget, built from prototype to production.'
image:
    url: '/briqbookings.png'
    alt: 'BriqBookings logo'
worksImage1:
    url: '/briqbookings_1.webp'
    alt: 'BriqBookings widget showcase'
worksImage2:
    url: '/briqbookings_2.webp'
    alt: 'BriqBookings architecture overview'
platform: Web
stack: JavaScript, Vue.js
website: https://www.briqbookings.com
github:
role: 'Widget architecture and delivery, prototype to production'
updated: 2026-09-05
---
Built the embeddable booking widget for [BriqBookings](https://www.briqbookings.com), a property
booking platform based in Utrecht, taking it from prototype to production.

### The problem

The booking flow needed to live on the property owner's own website, not on BriqBookings'.
Sending a visitor elsewhere to complete a booking loses some of them at the handover, and it
takes the transaction away from the brand they arrived to deal with.

### Constraints

An embedded widget runs inside a page you do not control and cannot test in advance. The host
site brings its own CSS — global resets, aggressive selectors, framework styles — and its own
JavaScript, any of which can break a widget that assumes a clean document. The widget has to
render identically on a hand-written HTML page and inside someone's WordPress theme.

### What I built

The widget as a **sandboxed micro-frontend**: isolated from the host page so that neither
side's styles or scripts reach the other. That isolation is the entire architectural decision —
everything else follows from refusing to share a global namespace with an unknown page.

Built in Vue and plain JavaScript, kept small enough to drop into a third-party site without
becoming the heaviest thing on it.

### Outcome

Property owners could offer booking inline on their own sites, and visitors completed a booking
without ever leaving the page they arrived on.

For a booking system approached from the opposite direction — owned end to end rather than
embedded — see the [Artis ticketing platform](/projects/artis-booking-ticketing-system/).
