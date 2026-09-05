---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'Bettyblocks'
description: 'Enterprise low-code / no-code application platform enabling rapid web application development.'
image:
    url: '/bettyblocks.svg'
    alt: 'Bettyblocks logo'
worksImage1:
    url: '/bettyblocks_1.png'
    alt: 'Bettyblocks showcase 1'
worksImage2:
    url: '/bettyblocks_2.png'
    alt: 'Bettyblocks showcase 2'
platform: Web, Cloud
stack: Elixir, React, GraphQL, WebAssembly
website: https://www.bettyblocks.com
github: 
updated: 2026-09-05
---
Contributed to the core of an enterprise low-code platform that lets both professional and
citizen developers build web applications without writing boilerplate.

### The problem

A low-code platform has to serve two audiences with incompatible expectations. Citizen
developers want to assemble an application visually and never see a runtime. Professional
developers want an escape hatch the moment the visual model stops fitting their problem — and
they will abandon the platform entirely if it does not exist.

Serving only the first group produces a toy. Serving only the second produces a framework
nobody needed.

### What I built

Work spanned the full stack.

**Elixir for the backend services.** A platform like this runs many customers' applications
side by side, which makes concurrency and fault isolation the central problem rather than an
optimisation. The BEAM's process model is built for exactly that shape: one tenant's failure
stays that tenant's failure.

**React and TypeScript for the front-end components** that make up the visual builder, with
**GraphQL** joining the two layers — a fit for a product where the client decides what it needs
rather than the server anticipating it, since the shape of a generated application is not known
in advance.

**WebAssembly extensions** as the escape hatch: the point where a developer can drop out of
visual composition into custom code without leaving the platform to do it.


### Outcome

Platform capability that holds both audiences at once — visual development that stays genuinely
visual, and a route to custom code that does not require abandoning it.
