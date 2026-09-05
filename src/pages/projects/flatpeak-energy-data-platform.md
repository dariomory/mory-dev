---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'FlatPeak'
description: 'Real-time energy data platform empowering businesses to access electricity tariffs and optimize energy usage.'
image:
    url: '/flatpeak.png'
    alt: 'FlatPeak logo'
worksImage1:
    url: '/flatpeak_1.webp'
    alt: 'FlatPeak showcase 1'
worksImage2:
    url: '/flatpeak_2.webp'
    alt: 'FlatPeak showcase 2'
platform: Web
stack: API integrations, real-time data
website: https://flatpeak.com
github: 
role: 'Data access — opened and built the Dutch energy supplier integrations'
updated: 2026-09-05
---

Opened up data access to energy providers in the Netherlands for
[FlatPeak](https://flatpeak.com), the real-time energy data platform that empowers businesses to
access their customers' actual electricity tariffs and optimise device energy usage — reducing
costs and carbon emissions through smarter consumption.

### The problem

The product depends on one thing: knowing what a specific customer actually pays for
electricity, right now. Not an average, not a published rate card — their tariff, on their
contract, with their supplier.

That information exists. It simply sits with energy suppliers, who are under no particular
obligation to hand it to a third party and have no immediate commercial reason to make it easy.
Without a route to it there is no product, in that market, at all.

### Constraints

**The hard part was getting access in the first place, and it was not primarily a technical
problem.** Agreements, authorisation, and persuading suppliers to expose anything usable are
procedural and commercial work, and they gate everything downstream. A perfect pipeline is worth
nothing pointed at a door that will not open.

There is also no single door. The Dutch market splits across several routes at once: some
suppliers expose an interface directly, some require the customer's own authorisation before
anything can be read on their behalf, and some data is only reachable through the country's
shared energy-data infrastructure. Each route carries its own agreements, its own constraints
and its own idea of what a tariff record contains.

And a tariff is not one number. Standing charges, time-of-use bands, regional and seasonal
variation all have to survive the journey intact, because the whole point downstream is
deciding whether this hour is cheaper than the next one.

### What I built

The Dutch access layer: the integrations across those routes, and the negotiation and
authorisation work that made them possible in the first place.

The engineering goal was that none of that fragmentation should be visible from the outside. A
developer building on FlatPeak should not need to know which supplier a customer is with, which
of the three routes their data arrived by, or what that supplier calls a standing charge. One
schema, one answer, regardless.

### My role

I was responsible for energy provider data access in the Netherlands — establishing the routes
and building the integrations behind them.

### Outcome

Dutch supplier coverage: real tariff data, reachable through the same API as everywhere else,
which is what makes consumption shifting — and the cost and carbon reduction behind it — a
feature someone else can ship without ever talking to a utility.
