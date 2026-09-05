---
layout: ../../layouts/MarkdownAppLayout.astro
title: 'FormHarvester'
seoTitle: 'FormHarvester — web discovery and contact form automation'
description: 'Open-source form intelligence engine. Searches the web, extracts public contact signals, detects site technologies and fills contact forms in a real browser.'
tagline: 'Find business websites, read their contact pages, and work their forms.'
order: 2
status: 'Shipped — v3.0.0'
image: { url: '/apps/formharvester.png', alt: 'FormHarvester logo' }
appImage1: { url: '/apps/formharvester-1.webp', alt: 'FormHarvester desktop app' }
website: https://formharvester.com
github: https://github.com/dariomory/formharvester
pricing: 'Free · MIT'
platform: 'Windows desktop app, Python package'
stack: 'Python, Selenium, pywebview, PyInstaller'
install: 'pip install formharvester'
appCategory: 'BusinessApplication'
operatingSystem: 'Windows, Linux'
version: '3.0.0'
license: 'https://opensource.org/licenses/MIT'
price: 0
priceCurrency: 'USD'
sameAs:
  - https://github.com/dariomory/formharvester
  - https://pypi.org/project/formharvester/
faq:
  - q: 'Is FormHarvester free?'
    a: >-
      Yes. FormHarvester is MIT-licensed and free in both distributions — the signed
      Windows desktop app and the formharvester Python package. There is no paid
      tier and no account.
  - q: 'What platforms does it run on?'
    a: >-
      The desktop app is Windows-only. The Python package runs on Windows and Linux
      and gives you the same engine through a CLI and a Python API.
  - q: 'How do I install it?'
    a: >-
      Run pip install formharvester for the CLI and Python API, or download the
      signed desktop build from formharvester.com. Both need a local Chrome
      installation, because the engine drives a real browser session rather than
      issuing bare HTTP requests.
  - q: 'Do I need an API key?'
    a: >-
      Only for form composition, which uses an LLM you supply — OpenAI, Anthropic or
      DeepSeek. Search, extraction and technology detection need no key and no
      account.
  - q: 'Does it send page data to a third party?'
    a: >-
      Technology detection runs entirely locally, with no hosted API and no browser
      extension. The only outbound call is the form-composition prompt, and it
      receives structured context only — never raw HTML, cookies, scripts or page
      source.
  - q: 'Does it read my cookies?'
    a: >-
      It reads cookie names only, as one technology-detection signal among several,
      and never writes cookie values into its evidence output.
  - q: 'Can it submit contact forms automatically?'
    a: >-
      Yes, through Autopilot, but it is gated by design: deterministic lead scoring
      against a threshold, technology rules, a contact-form requirement, per-domain
      cooldowns, daily and per-run limits, review-before-submit enabled by default,
      and a dry-run mode in which submission is impossible.
  - q: 'How is it different from a scraper or from Wappalyzer?'
    a: >-
      It is a single vertical rather than a general tool: find the site, read its
      contact surface, detect its stack, work its form. It has no scheduling, proxy
      rotation or managed infrastructure like a scraping framework, and it detects
      fewer technologies than a commercial fingerprint database — but detection is
      local and every finding carries a confidence score and readable evidence.
---

FormHarvester is an open-source form intelligence engine for outbound and lead-research
work: it finds business websites, reads their contact pages, detects the technologies they
run, and fills their contact forms in a real browser.

It navigates the open web through a real Chrome session: it runs searches,
normalises and deduplicates the results, visits contact and landing pages, extracts public
contact signals with the source URL each one came from, and can compose and submit contact
forms on your behalf.

It is aimed at outbound and lead-research work, and ships two ways — a signed Windows desktop
app, and `pip install formharvester` for the CLI and Python API.

Two design choices are worth calling out. **Technology detection runs locally** — no
Wappalyzer, no hosted API, no browser extension — and reports a name, category, version,
confidence score and human-readable evidence per site, reading cookies by name only and never
writing their values into evidence. **Form content is LLM-generated but tightly scoped**: the
prompt receives structured context only, never raw HTML, cookies, scripts or page source, and
the provider is yours to pick (OpenAI, Anthropic or DeepSeek).

Autopilot is gated rather than enthusiastic: deterministic lead scoring with a threshold,
technology rules, a contact-form requirement, per-domain cooldowns, daily and per-run limits,
review-before-submit on by default, and a dry-run mode that makes submission impossible.

### How it compares

FormHarvester sits between three categories and replaces none of them outright.

Against **technology-detection services** such as Wappalyzer or BuiltWith: detection here runs
locally, with no hosted API, extension or account, and every finding carries a confidence score
and human-readable evidence rather than a bare verdict. It recognises fewer technologies than a
commercial fingerprint database.

Against **general scraping frameworks** such as Scrapy, Apify or Octoparse: FormHarvester is not
a general extraction tool. It has no scheduling, no proxy rotation and no managed
infrastructure. What it does have is one vertical carried end to end.

Against **outbound platforms** such as Apollo, Clay or Hunter: there is no verified-contact
database here, no CRM, no email sequencing and no deliverability tooling. FormHarvester works
the contact-form channel rather than the inbox, and it is the only one of the group whose source
you can read.

Reach for something else if you need a managed proxy pool, a contact database, or email
sequencing.
