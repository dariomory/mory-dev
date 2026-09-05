---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'SDG Invoervoorziening'
description: 'Single Digital Gateway (SDG) - Dutch national portal for cross-border governmental services across the EU.'
image:
    url: '/sdg.png'
    alt: 'Placeholder for main project image'
worksImage1:
    url: '/sdg_1.gif'
    alt: 'Placeholder for first project detail image'
worksImage2:
    url: '/sdg_2.webp'
    alt: 'Placeholder for second project detail image'
platform: Web
stack: Python, Django
website: https://vng.nl/projecten/single-digital-gateway
github: https://github.com/maykinmedia/sdg-invoervoorziening
role: 'Project lead — CMS and API for Dutch government bodies'
updated: 2026-09-05
---

Project lead for the SDG Invoervoorziening, the CMS and API through which Dutch government
bodies publish the service information required by the EU Single Digital Gateway.

### The problem

The Single Digital Gateway is EU regulation. It requires member states to make information
about public services findable, current, and available in a second language, so that a citizen
or business from one member state can work out how to do something in another — register a
company, apply for a licence, enrol a child in school.

In the Netherlands that obligation lands on hundreds of individual bodies. Every municipality,
province and water authority holds its own version of the same product descriptions, in its own
words, on its own schedule. Meeting the regulation nationally meant getting all of them
producing information uniform enough to be aggregated and reused, without asking each one to
become a publishing operation.

### Constraints

The authors are not content specialists. They are people at a municipality with other jobs, so
the tool had to be usable without training and without a style guide nobody would read.

The output could not simply be a website. It had to be machine-readable and reusable
downstream, because the point of the gateway is aggregation — the same description surfacing on
a national portal, a European one, and the organisation's own site.

And it is public infrastructure, which long outlives the team that builds it. That argues for
boring, well-documented technology over anything clever.

### What I built

A CMS and an API, both on Django, developed
[in the open](https://github.com/maykinmedia/sdg-invoervoorziening).

The CMS gives each organisation a structured editor for its own products, working from a
national reference text rather than a blank page — so the default is consistency, and local
divergence becomes a deliberate act rather than an accident of phrasing. The API exposes the
result as structured data with a defined update path, which is what makes a description
reusable across portals instead of copied between them.

Django was the right call precisely because it is unremarkable: batteries included for the
admin and content modelling, a very large pool of developers who can maintain it, and a
governance model that will still exist in ten years. For public infrastructure that is a
feature, not a compromise.

### My role

Project lead. Guided the team through delivery, owned the shape of the CMS and API, and worked
with the government stakeholders who define what a product description has to contain.

### Outcome

A single route for Dutch government bodies to publish service information that is uniform
enough to aggregate, structured enough to reuse, and open enough to inspect — together with the
framework for keeping it current, which is the part that decides whether a project like this
still works in five years.

Both the CMS and the API were built on [Django](/contributions/django-open-source-contribution/),
the same framework behind the [Artis ticketing platform](/projects/artis-booking-ticketing-system/).
