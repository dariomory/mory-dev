---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'Artis'
description: 'Online booking and ticketing system for Artis Royal Zoo, handling reservations, capacity management, and visitor flow.'
image:
    url: '/artis.png'
    alt: 'Artis logo'
worksImage1:
    url: '/artis_1.webp'
    alt: 'Artis ticketing interface'
worksImage2:
    url: '/artis_2.webp'
    alt: 'Artis booking flow'
platform: Web
stack: Python, Django
website: https://www.artis.nl
github:
role: 'Contributor — booking flow, capacity and queue handling'
updated: 2026-09-05
---
I contributed to the online booking and ticketing system for [Artis](https://www.artis.nl), the
royal zoo in Amsterdam, built on [Django](/contributions/django-open-source-contribution/).

### The problem

A zoo sells entry to a place with a hard physical limit. Unlike a shop, it cannot meet demand
by selling more — past a certain number of people inside, the visit itself degrades and the
site stops working as somewhere you would want to be. Timed-entry ticketing exists to spread
arrivals across a day so that capacity is used fully without ever being exceeded.

### Constraints

Demand is extremely uneven. A wet Tuesday in February and the first warm Sunday of spring are
different businesses, and the system has to behave on both. Peaks are not gradual either —
holidays and weekends concentrate booking traffic into short windows.

Availability also has to be true at the moment it is shown. A slot that appears open and turns
out to be full at the payment step is worse than one that never appeared, because the visitor
has already committed to a plan.

### What I built

The platform covers the full visitor journey: choosing a time slot, buying the ticket,
receiving a QR-coded e-ticket, and being admitted at the gate against a daily capacity limit
that the system enforces rather than merely reports.

Two parts carry the peak. **Real-time availability updates**, so what a visitor sees reflects
what is actually left rather than a cached count from a minute ago. And **queue management**,
so a surge is absorbed in an orderly way instead of being resolved by whoever's request happens
to arrive first.

### Outcome

A ticketing system that holds up on the days that matter — the ones where everyone decides to
visit at once — and that turns a fixed physical capacity into a schedule the operation can
actually run against.

For a booking system approached from the opposite direction — embedded into someone else's site
rather than owned end to end — see [BriqBookings](/projects/briqbookings-vue-widget-architecture/).
