---
title: 'The Multi-LLM Stack'
description: 'A framework for choosing models, and my current stack - why no single LLM wins outright, how to evaluate them per task, and what I actually run.'
image: '/the-multi-llm-stack-thumbnail.webp'
pubDate: 2026-08-04
tags:
  - 'LLM'
  - 'AI Engineering'
  - 'Developer Tools'
syndication:
  - platform: 'Substack'
    url: https://morydev.substack.com/p/the-multi-llm-stack
---

There’s no single best LLM. There’s only the best LLM for the task in front of you. Once I internalized that, my workflow changed completely.

But I'm not here to just dump my stack on you. First I'll show you how to evaluate models yourself - the tools, the thinking, the tradeoffs. Then I'll walk through what I actually use and why.

New models drop weekly. Benchmarks shift. Pricing changes. If you just copy someone's stack, you'll be outdated in three months. So let's start with how to think about model selection.

When a new model drops, my first stop isn’t Twitter hype. It’s data.

[LM Arena](https://arena.ai/leaderboard/agent) runs blind head-to-head comparisons - real users picking winners without seeing model names. That strips out branding bias. I look at the Elo rankings, but more importantly I filter by task type. A model that tops creative writing might be mid at code generation. The category breakdown matters more than the overall score.

[Vellum](https://www.vellum.ai/llm-leaderboard) is where I get practical. Cost per million tokens, latency, context window size - side by side. This is where you catch the models that benchmark well but cost 10x more per request than something 5% worse.

[Kilo](https://kilo.ai/leaderboard) rounds it out with quality scores across specific task types - coding, reasoning, instruction following. It’s the most granular of the three.

None of them are perfect alone. Together they answer three questions: is this model actually good, is it good at what I need, and is it worth the price? If all three come back yes, I test it on real work for a week. If it outperforms what I’m running, something gets swapped out.

That’s how Deepseek V4 Pro earned its slot - it scored within 5% of Opus on Kilo’s coding benchmarks at a fraction of the cost. Arena confirmed it wasn’t a fluke. Vellum showed me the math. Done.

As of today, here’s where things stand.

At the top, **Opus 5** \- expensive, worth it, reserved for work that demands the best. Below that, **GPT 5.6 Sol** for high-quality tasks that are more general. **Deepseek V4 Pro** handles the bulk coding I’d go broke running through Opus. **Gemini 2.5 Flash** picks up everything lightweight at near-zero cost. And **Kimi K3** covers design when I need something fast without opening Figma.

That’s the model layer. But models alone aren’t the full picture. How you access them matters just as much. Here are the monthly subscriptions I actually recommend.

```

Tool            | Best For                  | Price         | Key Strength

--------------- | ------------------------- | ------------- | --------------------------

Claude Code     | Deep coding sessions      | $20/mo (Pro)  | Best-in-class code quality

GPT Codex       | Async background tasks    | $20/mo (Plus) | Fire-and-forget workflows

Kilo Pass       | Multi-model flexibility   | $19/mo        | Switch models mid-task

OpenCode Go     | Lightweight open-source   | $10/mo        | 18 models, one API key

```

The overlap is intentional. Currently [Claude Code](https://claude.com/product/claude-code) runs Opus 5 for my heavy sessions. [Codex](https://chatgpt.com/codex/) handles the async stuff I don’t want to babysit. [Kilo Pass](https://kilo.ai/pricing/kilo-pass) lets me route Deepseek or Kimi without managing API keys myself. And [OpenCode Go](https://opencode.ai/go?ref=R83SY4YFK0) covers everything else at a price I don’t think about.

No single tool does it all. But together, they cover every tier of my workflow - from throwaway formatting tasks to production architecture decisions.

There’s one more piece. All the tools above are things I trigger. But I’ve started running **[OpenClaw](https://openclaw.ai/)** and **[Hermes](https://hermes-agent.nousresearch.com/)** alongside them - autonomous agents that work in the background. OpenClaw handles orchestration: give it a task, it connects to your models, your messaging apps, your filesystem, and executes. Hermes takes it further - it remembers every session and builds reusable skills from what it learns. Both open source, both self-hosted. They’re not replacing anything in my stack yet. They’re adding a layer on top that didn’t exist six months ago.

Six months from now, half of this stack will probably be different. New models will drop. Pricing will shift. Something better than Hermes or OpenClaw might show up tomorrow. That’s fine. The point was never the stack - it’s the practice of choosing deliberately.
