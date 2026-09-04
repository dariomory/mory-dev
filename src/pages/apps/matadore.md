---
layout: ../../layouts/MarkdownAppLayout.astro
title: 'matadore'
seoTitle: 'matadore — attack-surface mapping toolkit (pre-alpha)'
description: 'An early, design-stage Python toolkit for adversarial attack-surface reasoning. Models, planner and LLM client exist; scanning and reporting do not yet.'
tagline: 'Security scanners give you a list. The aim here is a story.'
order: 9
status: 'Pre-alpha — not yet functional'
image: { url: '/apps/matadore.png', alt: 'matadore logo' }
website: https://dariomory.github.io/matadore/
github: https://github.com/dariomory/matadore
pricing: 'Free · MIT'
platform: 'Python package'
stack: 'Python 3.12+, typer, litellm, pydantic'
appCategory: 'SecurityApplication'
operatingSystem: 'Cross-platform'
version: '0.1.0'
license: 'https://opensource.org/licenses/MIT'
price: 0
priceCurrency: 'USD'
sameAs:
  - https://github.com/dariomory/matadore
  - https://pypi.org/project/matadore/
---

**This one is pre-alpha, and the honest version matters more than the pitch.** matadore is
published to PyPI and has a full documentation site, but it does not perform scans today. The
entry point, all six input handlers, all five tool plugins and every report method currently
raise `NotImplementedError`, and the command-line interface is still scaffolding. Treat it as a
design worked out in the open, not a tool to reach for.

What exists is the skeleton: the Pydantic domain models, a dry-run planner that describes
exactly what an engagement would touch, a state store over SQLite with optional DuckDB for
team-shared runs, a multi-provider LLM client through LiteLLM, and a test suite around all of
it.

The intent is adversarial reasoning rather than another checklist — chaining findings into
narrative attack paths mapped to MITRE ATT&CK, across domains, network ranges, repositories,
GitHub organisations, cloud accounts and container registries, wrapping existing tools rather
than replacing them. Two constraints are baked into the models: every finding must carry a
verifiable evidence reference, and inference can run entirely locally through Ollama, so
nothing has to leave your network.

Progress is tracked in the open on GitHub.
