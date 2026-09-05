---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'Codeamsterdam'
description: 'A subscription-based design and development agency offering unlimited requests at a fixed monthly rate.'
image:
    url: '/codeamsterdam.png'
    alt: 'Codeamsterdam logo'
worksImage1:
    url: '/codeamsterdam_1.png'
    alt: 'Codeamsterdam showcase'
worksImage2:
    url: '/codeamsterdam_2.png'
    alt: 'Codeamsterdam detail'
platform: Web
stack: React, Node, API Integrations
website: https://codeamsterdam.nl
github: 
updated: 2026-09-05
---
Built the platform for [Codeamsterdam](https://codeamsterdam.nl), a subscription-based design and
development agency offering companies unlimited design requests, landing pages, backend work,
brand identity, API integrations and performance optimisations at a fixed monthly rate.

### The problem

The subscription model is the interesting part. Unlimited requests at a flat fee only works if
the flow of work is managed — otherwise clients cannot tell whether they are getting value,
and the agency cannot tell what it has committed to. The pricing promise creates an operational
problem that has to be solved in software.

### Constraints

Two audiences with opposing needs. A client wants to fire off a request and see where it stands
without chasing anyone. The agency needs a queue it can prioritise, sequence and actually
deliver against, across many clients at once.

And the promise is cancel-anytime, which means the product has to keep proving its worth
continuously rather than trapping anyone in a contract.

### What I built

The platform on **React and Node**, with the API integrations that connect it to the tools the
work actually happens in.

The core of it is request flow: submitting work, giving it a visible state, and turning "unlimited"
into something a client can see progressing and an agency can plan around. Integrations matter
here more than they look — an agency platform that does not reach into the systems the team
already uses becomes a second place to update, and quietly gets abandoned.

### Outcome

A platform where the subscription promise was legible to both sides: clients could see their
requests moving, and the agency could run a queue instead of an inbox.

Agency work of a different shape — many client brands, shared tooling underneath — is covered on
the [Buzzybranding project](/projects/buzzybranding-digital-solutions-web-development/).
