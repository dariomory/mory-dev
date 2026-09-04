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
---

FormHarvester navigates the open web through a real Chrome session: it runs searches,
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
