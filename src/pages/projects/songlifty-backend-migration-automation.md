---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'Songlifty'
description: 'Online music promotion company helping artists increase visibility across Spotify, YouTube, and social media platforms.'
image:
    url: '/songlifty.png'
    alt: 'Songlifty logo'
worksImage1:
    url: '/songlifty_1.png'
    alt: 'Songlifty showcase 1'
worksImage2:
    url: '/songlifty_2.png'
    alt: 'Songlifty showcase 2'
platform: Web, Async Systems
stack: Python 3, REST API, Selenium, Puppeteer
website: https://songlifty.com
github: 
role: 'Migration lead — led the backend migration and built the internal tooling'
updated: 2026-09-05
---

Led a system-wide backend migration and built the internal tooling for
[Songlifty](https://songlifty.com), the online music promotion company helping artists increase
their visibility across Spotify, YouTube and social media platforms.

### The problem

Two problems at once, which is why they were solved together.

The backend was legacy, and it was carrying a service under real load. Everything that made the
business work had accumulated inside it, and everything that needed to change next was harder
than it should have been because of where it lived.

Meanwhile the operational side ran on repetition. Promotion work at any volume means the same
sequence of steps performed again and again, and a team can only absorb so much of that before
throughput is capped by people rather than by demand.

### Constraints

Traffic does not pause for a migration. In a quiet system a cutover is a scheduling exercise; in
a busy one it is a correctness problem, because the old system keeps accepting work while the
new one comes up and for a period both have to be true at once.

The internal tooling had its own constraint: it had to be usable by the people running the
operation every day, not only by the engineer who wrote it. Automation nobody trusts gets worked
around, and then it is just another system to maintain.

And a good deal of the operational work happened through interfaces with no API behind them.
Anything automating those has to drive a real browser, which brings sessions that expire, pages
that shift, and jobs that run long enough to fail halfway through.

### What I built

**The migration**, from the legacy backend to its replacement, planned and led so the service
kept running throughout rather than being taken down and brought back.

**The internal management tooling**, in Python — the layer the team operates the business
through. The automation underneath uses headless browser drivers with real session handling and
long-running jobs built to survive their own failures: resumable rather than restart-from-zero,
and observable enough that an operator can see what ran, what did not, and why.

That last property is what decides whether operational automation is trusted or quietly bypassed.

### My role

I led the migration and built the tooling — both the plan and the execution.

### Outcome

A platform moved onto a backend that could carry the next thing the business wanted to do, and
an operations team no longer rate-limited by how many times a person could repeat the same
sequence.

The automation ground here is the same territory as
[*Building Bots and Scrapers with Python*](/books/building-bots-and-scrapers-with-python/) —
headless browsers, session handling, and keeping long jobs alive against interfaces that change
underneath you.
