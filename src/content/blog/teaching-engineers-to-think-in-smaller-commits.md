---
title: 'Teaching Engineers to Think in Smaller Commits'
description: 'A practical guide for helping engineers adopt smaller, atomic commits by changing mindset, review habits, and team feedback loops.'
image: '/teaching-engineers-to-think-in-smaller-commits-thumbnail.webp'
pubDate: 2026-04-15
tags:
  - 'Software Engineering'
  - 'Git'
  - 'Code Review'
  - 'Engineering Leadership'
syndication:
  - platform: 'Medium'
    url: https://medium.com/@dariomory/teaching-engineers-to-think-in-smaller-commits-f57f192437b3
---

Engineers know that smaller commits are beneficial. Most have read the literature; most have nodded in agreement during the code review process. However, after disappearing for a few days, many engineers return with a single 47-file changeset that no reviewer wants to review.

There exists a significant gap between knowledge and mileage. To bridge the gap, engineers must change the way they think about their work.

## Knowledge vs mileage

Reasons why engineers resist committing in smaller increments exist based on factors that may seem logical back then. Understanding these factors is the first step to overcoming them.

Engineers tend to have an instinct of completion. Engineers wish to deliver completed work. Forcing themselves into making partial commitments will result in feelings of incompetence. Unfortunately, in real software engineering environments, this habit is detrimental.

Many engineers experience anxiety related to **context switching** . When you finally gain insight into a problem, stopping and walking away can feel like losing the train of thought. Therefore, it may feel easier to keep working until every piece of code is finished.

This is also true when attempting to **refactor** code, changing a small amount of code may lead to updating additional parts of the application due to the interconnectedness of components within a given application. Stopping to commit may appear unnatural.

These are typical responses to common situations experienced by developers. Providing engineers with new paradigms that are perceived as natural as previous methods is essential to teaching engineers to think in smaller commits.

Most importantly, knowing these reasons is very different from having internalized them through practice. An engineer can understand intellectually why smaller commits are beneficial, yet still default to old habits under pressure or deep focus. The shift happens gradually, through repetition and reflection – not from a single moment of insight. Mileage is what transforms knowledge into instinct.

## Atomic changes

The central paradigm shift: Stop viewing commits as “saving your work” and begin viewing them as “making a contribution.”

Each commit should represent a single idea/thought. While it is possible for a commit to include several ideas/thoughts, it should be possible to determine if the commit represents a single idea/thought.

Changing how you view commits alters nearly every aspect of how you develop. Renaming something can justify having a commit of its own. Pulling out a method into its own class can be viewed as a separate commit. Writing tests for existing functionality can be viewed as publishable code.

## Practical techniques

Providing engineers with new mindsets is insufficient. Engineers require tangible tools/methodologies for decomposing their work.

## Get Dario Mory’s stories in your inbox

Remember me for faster sign in

**Think backwards** . Prior to developing any code, define what the final pull request should look like. Next, find the smallest subset of code that allows the feature/pull request to be developed independently and use this subset as a starting point.

Do not attempt to refactor and add behavioral features in the same commit. Refactor the necessary areas of code prior to adding new features. By implementing this singular principle, you eliminate approximately half of all oversized commits.

Use stacked branches . Rather than creating a single branch containing 15 commits, create individual branches that build upon each other. Each branch becomes a self-contained review unit.

Commit before falling down the rabbit hole. As soon as you believe you should also address another issue, commit your current work and then determine whether to proceed with further development or create a new branch. Creating breakpoints naturally occurs by committing your current work before proceeding.

## Measuring progress

What you cannot measure, you cannot improve. Measure the average size of code committed by each developer over time. Average lines changed per commit is simple, yet directionally correct. Average files affected per commit provides additional clarity.

However, reviewing and measuring the amount of time required to review changes will provide far greater insight. Smaller commits are typically reviewed much faster. When developers realize that their small changes are being merged in hours, while larger changes remain outstanding for days, natural alignment occurs.

## Debugging

With smaller commits, in cases where a change causes a failure, you can quickly identify the specific change that caused the issue. With a 47 file commit, bisect simply indicates that the problem occurred somewhere within that group of files.

In addition, working with smaller commits improves your ability to debug issues yourself. By isolating the exact change(s) that cause unexpected behavior, you gain a better understanding of how the system works. The discipline imposed by committing small units of code enhances your thinking regarding dependency relationships and potential side effects.

## Consistency

The initial excitement dissipates. Deadlines place pressure. Old ways of working resurface.

Supportive environments help sustain practices. Do not penalize engineers for occasional relapses. No-one maintains perfect commit hygiene when deadlines loom. The objective is to establish small commits as the default approach, not as an inviolable rule.

> Recognition encourages repetition.

>

>

Success is demonstrated when engineers revert to using small commits after a high-pressure development period.

## Wrapping up

Teaching engineers to develop smaller commits is not necessarily about commits; it is about developing a habitual process of continuous decomposition. Decomposing complex problems into smaller components. Shaping products incrementally. Maintaining work that is always in a state of being reviewable, deployable, and debuggable.

This skill has broad implications beyond the realm of coding. To project scope, architecture decision-making, and feature selection, engineers who learn to decompose problems in small pieces become better engineers overall.

Compound returns on investments in training this mindset are inevitable. Find one engineer who understands this and allow him/her to demonstrate the value of this type of thinking. Observe it spreading throughout teams.
