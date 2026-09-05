---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'Cartechelectronics'
description: 'UK’s #1 provider of engine ECU services, offering repairs, cloning, and replacements.'
image:
    url: '/cartechelectronics.png'
    alt: 'Cartechelectronics logo'
worksImage1:
    url: '/cartechelectronics_1.png'
    alt: 'Cartechelectronics showcase'
worksImage2:
    url: '/cartechelectronics_2.png'
    alt: 'Cartechelectronics detail'
platform: Internal web platform
stack: Python, Django, Shopify and carrier integrations, automation
website: https://cartechelectronics.com
github: 
role: 'Lead engineer — architecture, build and ongoing development'
updated: 2026-09-05
---
Designed and built the operational platform that
[Cartechelectronics](https://cartechelectronics.com) runs its business on — the UK's #1 provider
of engine ECU services, offering repairs, cloning, genuine plug-and-play replacements and
diagnostics, shipped worldwide.

Storefront, workshop and shipping run through one system rather than three, and the platform is
under active development.

### The problem

A business like this runs on physical objects moving through stages. A unit is posted in, it is
diagnosed, repaired or cloned, then shipped back — often to another country. Meanwhile the
storefront has taken an order, the workshop has a job, a carrier needs a label and customs
paperwork, and stock has to reflect what is actually available to sell.

Those are separate systems that do not naturally know about each other. Left alone, the join
between them is a person retyping the same details several times.

### Constraints

Manual re-keying is not just slow, it is where the errors live: a wrong address on an
international shipment, a job that does not match the order it belongs to, a customer asking
where their part is and nobody able to answer quickly.

Worldwide shipping raises the cost of each of those mistakes, because the feedback loop is
measured in days and the customer is usually without their vehicle for the duration.

### What I built

I lead the engineering end to end — architecture, build and ongoing development.

A Django system that automates the path between the storefront, the workshop and the carrier,
so an order becomes a job and a job becomes a shipment without anyone copying fields between
systems. Inventory is kept in step with **Shopify**, shipping and carrier paperwork are
generated rather than typed, and ECU data extraction feeds the parts of the process that depend
on knowing what a unit actually is.

The engineering interest is in the seams rather than in any one system: reconciling records that
each service names differently, absorbing a third-party API being briefly unavailable without
losing an order, and keeping the automation observable enough that staff can see what it did and
step in when a case is genuinely unusual.

### Outcome

The business runs on it. Orders, workshop jobs and international shipments move through one
system instead of being reconciled by hand between three, which removes both the manual handling
and the class of error that only surfaces once a package is already in another country.

This commerce integration work inspired the development of [Shopify for
GitHub](/apps/shopify-for-github/) — the same problem, getting store context in front of the
people who have to act on it, generalised into a product.
