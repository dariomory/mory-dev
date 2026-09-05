---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'KLM'
description: 'Royal Dutch Airlines - leading European airline with automated airport operations.'
image:
    url: '/klm.svg'
    alt: 'KLM logo'
worksImage1:
    url: '/klm_1.png'
    alt: 'KLM showcase 1'
worksImage2:
    url: '/klm_2.png'
    alt: 'KLM showcase 2'
platform: GCP, Cloud, Kubernetes
stack: Python (FastAPI), C++, GCP, Kubernetes, Enterprise Architect
website: https://www.klm.com
github:
updated: 2026-09-05
---

Led the cloud migration of the airport slot management system at [KLM](https://www.klm.com),
Royal Dutch Airlines — a leading European carrier — replacing legacy scheduling infrastructure
with a microservices platform on Kubernetes and Google Cloud.

### The problem

A slot is permission to use airport infrastructure — a runway, a stand, a gate — in a specific
window. At a coordinated hub, every arrival and departure holds one, and they are reallocated
and revalidated continuously as the day's operation drifts from the plan. Weather moves, an
aircraft goes technical, a crew times out, and the schedule has to be recomputed against
constraints that do not bend.

The system doing that work was legacy scheduling infrastructure: hard to change, hard to scale
into peaks, and hard to integrate with anything newer.

### Constraints

Airport operations do not get a maintenance window. There is no quiet hour to deploy into, and
no acceptable failure mode where the system is simply unavailable — the operation continues
whether the software does or not.

The legacy systems were not going away either. Anything new had to interoperate with them in
real time, for as long as they lived, which ruled out a clean-cut replacement and made this a
migration rather than a rewrite.

### What I built

A microservices platform on Kubernetes and GCP, split by what each part actually needed.

**Python with FastAPI for the API layer.** Async by default, typed at the boundary, and it
generates its own OpenAPI description — which matters when the consumers are other teams
integrating on their own timelines rather than a single front end.

**C++ for the scheduling logic.** Slot computation is the compute-bound part, and the part with
a latency budget. Keeping it in a compiled service behind an API meant the hot path was not
competing with request handling inside the same runtime.

**Kubernetes for the deployment model**, chosen for the constraint above rather than for
fashion: rolling deploys and per-service scaling are how you ship changes to something that is
never idle.

I modelled the overall system in Enterprise Architect, which was the working language between
engineering and the stakeholders who had to sign the architecture off.

Alongside that I led API development for real-time integration with the existing legacy
systems, and established the CI/CD pipelines and infrastructure-as-code practices the team
delivered through.


### Outcome

A scheduling platform that could be deployed during the operating day, scaled per service into
demand peaks, and integrated with by other teams through a documented API instead of by
reaching into a database.

That experience also shaped [*The KLM Code*](/books/klm-code/) — a book about the hidden
stories in tech, power, and politics behind the airline.
