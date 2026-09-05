---
layout: ../../layouts/MarkdownAppLayout.astro
title: 'matadore'
seoTitle: 'matadore — attack-surface mapping toolkit (pre-alpha)'
description: 'An early, design-stage Python toolkit for adversarial attack-surface reasoning. Models, planner and LLM client exist; scanning and reporting do not yet.'
tagline: 'Security scanners give you a list. The aim here is a story.'
order: 9
status: 'Pre-alpha — not yet functional'
image: { url: '/apps/matadore.png', alt: 'matadore logo' }
appImage1: { url: '/apps/matadore-1.webp', alt: 'matadore intended high-level architecture' }
appImage2: { url: '/apps/matadore-2.webp', alt: 'matadore models package class diagram' }
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
faq:
  - q: 'Can I use matadore today?'
    a: >-
      No. It does not perform scans. The entry point, all six input handlers, all
      five tool plugins and every report method raise NotImplementedError, and the
      command-line interface is still scaffolding.
  - q: 'It is on PyPI though — should I install it?'
    a: >-
      Only to read it. Version 0.1.0 is published and documented, but treat it as a
      design worked out in the open rather than a tool to reach for.
  - q: 'What actually exists in the codebase?'
    a: >-
      The Pydantic domain models, a dry-run planner that describes exactly what an
      engagement would touch, a state store over SQLite with optional DuckDB for
      team-shared runs, a multi-provider LLM client through LiteLLM, and a test suite
      around all of it.
  - q: 'What is it intended to do?'
    a: >-
      Adversarial reasoning rather than another checklist — chaining findings into
      narrative attack paths mapped to MITRE ATT&CK, across domains, network ranges,
      repositories, GitHub organisations, cloud accounts and container registries,
      and wrapping existing tools rather than replacing them.
  - q: 'Would it send my infrastructure data to an LLM provider?'
    a: >-
      Not necessarily. Inference goes through LiteLLM, so the provider is yours to
      choose, and it can run entirely locally through Ollama — nothing has to leave
      your network. That constraint is baked into the design rather than added later.
  - q: 'Is it free?'
    a: 'Free and MIT licensed.'
  - q: 'Where can I follow progress?'
    a: 'Progress is tracked in the open on GitHub.'
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

The diagrams below are the intended architecture and the model layer as designed — the
models are real code, the boxes around them mostly are not yet.

Progress is tracked in the open on GitHub.
