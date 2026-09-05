---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'Buzzybranding'
description: 'Digital branding agency providing web solutions and branding tools for businesses.'
image:
    url: '/buzzybranding.png'
    alt: 'Buzzybranding logo'
worksImage1:
    url: '/buzzybranding_1.png'
    alt: 'Buzzybranding showcase 1'
worksImage2:
    url: '/buzzybranding_2.png'
    alt: 'Buzzybranding showcase 2'
platform: Web, automation pipeline
stack: Python, JavaScript, multi-source data collection, automation
website: https://buzzybranding.com
github: 
updated: 2026-09-05
---
Built an automated lead generation system and rebuilt the front end for
[Buzzybranding](https://buzzybranding.com), a digital branding agency providing web solutions
and branding tools for businesses.

### The problem

An agency selling to local businesses lives or dies on the quality of its prospect list.
Finding those businesses is not hard — they are all publicly listed on Google Maps, Yelp,
Facebook and a dozen directories. Finding them *at scale*, with enough information attached to
know whether they are worth approaching, is the part nobody wants to do by hand.

Done manually it is someone's whole week, every week, and the list is stale by the time it is
finished.

### Constraints

The hard part is not any one source, it is that they disagree. The same business appears on
Google Maps, Yelp and Facebook under three slightly different names, at two formattings of the
same address, with a phone number on one and a website on another. Treating those as three
prospects is worse than useless — it means contacting the same business three times.

So the real problem is entity resolution: deciding when two records from different platforms are
the same business, using data that is inconsistent by nature.

The sources also do not want to be read in bulk. Rate limits, layout changes and anti-automation
measures mean a collector that works today quietly stops working next month unless it is built
to expect that.

### What I built

**A multi-source collection pipeline** in Python, gathering public business information across
Google Maps, Yelp, Facebook and other platforms, then reconciling records into one profile per
business rather than one per source.

The engineering interest sits in the reconciliation and in the resilience: matching businesses
across sources that format everything differently, and degrading gracefully when a platform
changes underneath you instead of failing the whole run.

**A rebuilt front end**, so the output was usable by the people doing the selling rather than
only by the person who built the pipeline. A lead system nobody can operate produces no leads.

### Outcome

Prospecting that ran automatically and continuously instead of consuming a person's week, with a
deduplicated list the sales side could actually work from.

This is the same territory that later became a product —
[FormHarvester](/apps/formharvester/) takes the idea further, adding technology detection and
contact-form automation on top of the discovery step.
