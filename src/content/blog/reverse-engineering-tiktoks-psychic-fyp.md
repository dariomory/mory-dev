---
title: 'Reverse Engineering TikTok''s Psychic FYP'
description: 'An exploration of how TikTok''s For You Page algorithm works, analyzing the mechanisms behind its recommendation system and user engagement strategies.'
image: '/reverse-engineering-tiktoks-psychic-fyp-thumbnail.webp'
pubDate: 2025-05-07
tags:
  - 'Algorithms'
  - 'Machine Learning'
  - 'Content Strategy'
  - 'Social Media'
syndication:
  - platform: 'Medium'
    url: https://medium.com/@dariomory/reverse-engineering-tiktoks-psychic-fyp-e759f64b0fbc
---

TikTok has experienced rapid global growth driven by daily hours of user engagement via the “For You Page” (FYP) algorithm. The FYP is often referred to as a psychic mirror, given its apparent ability to suggest content that resonates with a user’s individual tastes. This intense personalization is both fascinating and troubling, leading to justifiable curiosity and concern about how TikTok develops such addictive recommendations. This paper explains how the algorithm works based on scholarly research, compliance documents frequently posted by TikTok, and efforts at reverse engineering. We focus on how machine learning, extensive user profiling, contextual modeling, and emerging areas of ethics guide user experiences within TikTok.

While the uncanny accuracy of how TikTok “knows” users has raised some eyebrows, it has also raised the alarm. Skeptics suggest that TikTok is not only able to predict your preferences but is also studying, recording, and potentially monetizing them. In the world of geopolitical issues, TikTok has been referred to as a digital Trojan horse, and the question remains: is this algorithm psychic or is it surveillance cloaked as entertainment?

## The Evolution of Tiktok’s Algorithm

TikTok initially launched with a straightforward collaborative filtering system that offered content liked by users with similar interests. But as the platform scaled, it transitioned to a multi-modal, deep learning-driven recommendation engine.

According to TikTok’s official disclosures, the modern FYP ranks content using diverse signals including:

* **User interactions** , such as the videos you like or share, accounts you follow, comments you post, and content you create.

* **Video information** , such as captions, sounds, and hashtags.

* **Device and account settings** , like language preference, country setting, and device type, which are considered but weighted less heavily because they aren’t explicit indicators of preference.

A stronger signal (e.g., watching a longer video to the end) is weighted more heavily than weaker signals (e.g., viewer and creator being in the same region). Videos are then ranked to estimate the likelihood of user interest, ensuring that each “For You” feed is uniquely tailored [[1]](https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you) .

## The Role of Machine Learning in TikTok’s Algorithm

TikTok’s recommendation engine is a sophisticated blend of machine learning techniques including supervised learning for predicting engagement, unsupervised learning to uncover behavioral clusters, and self-supervised learning to enhance the understanding of user-video interactions.

At the core of this system lies the embedding of users and content into high-dimensional vector spaces. Each user and video is mapped into a learned representation, and similarity between these vectors influences ranking. These embeddings are optimized using ranking-based loss functions to improve engagement predictions.

Recent advances have further enhanced these embeddings through **collisionless hash tables** , as introduced in Monolith, a real-time recommendation system developed by ByteDance. Monolith avoids hash collisions using Cuckoo HashMaps and maintains performance by filtering infrequent IDs. It supports **real-time training** , allowing the model to quickly adapt to new user behaviors and mitigate concept drift [[2]](https://arxiv.org/pdf/2209.07663) .

## Understanding TikTok User Engagement: Key Insights from Data Donations

**Growing Usage and Potential Risks**

The findings show that TikTok users not only spend a significant amount of time on the platform each day but that this usage increases over time — more so than on platforms like YouTube. This trend, especially among younger users, raises concerns about the platform’s potential to foster addictive behavior. TikTok’s endless stream of algorithmically recommended short videos is designed to maximize attention and retention.

**Discovery Over Familiarity**

Users are more likely to watch videos from _non-followed_ accounts to the end compared to content from creators they follow. This suggests TikTok’s recommendation algorithm prioritizes popular, novel content over social connections to better explore and capture user interests. However, users are still more inclined to “like” content from accounts they follow, likely due to personal or social reasons.

**Short-Form Attention and Algorithmic Tactics**

Only 45% of videos are watched until completion. While the platform likely attempts to recommend content that sustains attention, the research suggests the algorithm may also include less engaging videos intentionally. This mix of positive and negative reinforcement is a known psychological technique used to increase addictive behavior, as seen in gambling or substance use contexts.

## Get Dario Mory’s stories in your inbox

Remember me for faster sign in

**Attempts to Game the System**

In running the data donation study, they identified three types of malicious behaviors aimed at exploiting the system for financial incentives:

1. **Duplicate donations** using different email addresses.

2. **Repeat donations** from users who reused nearly identical data after a few new interactions.

3. **Fake accounts** created just to produce minimal activity and qualify for donation.

> To counter such misuse, we implemented filters to detect duplicate submissions and required a minimum of three months of activity data. These safeguards are essential in maintaining data integrity and ensuring that research based on user-donated data remains reliable [[3]](https://arxiv.org/pdf/2301.04945) .

>

>

## Context-Aware Personalization

TikTok distinguishes itself from other platforms by not only learning _what_ users like but also _how_ , _when_ , and _where_ they engage. Its recommendation system adapts in real-time to behavioral signals like session duration, video completion rate, and interaction timing.

Empirical audits confirm that **user actions such as following a creator, liking content, or passively watching a video longer significantly alter the personalized feed** . Among these, following has the strongest influence, followed by view duration and likes [[4]](https://arxiv.org/pdf/2201.12271) .

This demand-side sensitivity is coupled with multi-modal modeling: TikTok parses and links text (captions, hashtags), audio (soundtracks), visual content (thumbnails, facial features), and metadata (language, location) to create high-dimensional content profiles. These are then matched against user behavior vectors to fine-tune recommendations, often without needing explicit feedback.

## “Spyware” or Sophisticated Engagement Machine?

The precision of TikTok’s recommendation engine has led some to question whether it merely serves content — or surveils users. While TikTok publicly outlines the basic mechanics of its personalization system, deeper behavioral tracking has been reported, such as screen tap frequency, hover time, and clipboard access.

Empirical research shows that **users are aware of and attempt to influence the algorithm** . Many develop personal theories — “folk theories” — about how TikTok works, believing that engagement, timing, and hashtags impact reach. Some creators go to great lengths to optimize for these assumptions, even if they lack empirical support [[5]](https://dl.acm.org/doi/pdf/10.1145/3447535.3462512) .

This ambiguity creates a perception of omnipresent observation. Governments have banned TikTok from official devices not due to any confirmed espionage, but because of the **opaque and hyper-attentive data collection** that enables such finely tuned personalization. The line between entertainment and surveillance is increasingly blurred.

TikTok’s “Why this video” feature is a step toward interpretability, but true transparency demands more rigorous disclosures [[6]](https://newsroom.tiktok.com/en-us/learn-why-a-video-is-recommended-for-you) .

## Conclusion

The algorithm represents a cutting-edge application of machine learning, deep representation learning, and contextual awareness in recommender systems. But its success comes with trade-offs. Ensuring fairness, diversity, and long-term user satisfaction is as crucial as driving engagement.

The platform must balance innovation with responsibility: optimizing for interest without reinforcing inequality or narrowing exposure.

Yet, in a world where the algorithm seems to know what you want better than you do, one question remains: is TikTok a reflecting mirror or a quiet architect of preference, gently guiding what we come to want?

## References

[1] TikTok Newsroom. (2020). [How TikTok Recommends Videos For You](https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you) .

[2] Khattar, D., et al. (2022). [Monolith: Real Time Recommendation System With Collisionless Embedding Table](https://arxiv.org/pdf/2209.07663) .

[3] Yan, Y., et al. (2023). [Analyzing User Engagement with TikTok’s Short Format Video Recommendations using Data Donations](https://arxiv.org/pdf/2301.04945) .

[4] Boeker, J., & Urman, A. (2022). [An Empirical Investigation of Personalization Factors on TikTok](https://arxiv.org/pdf/2201.12271) .

[5] Klug, D., et al. (2021). [Trick and Please: A Mixed-Method Study On User Assumptions About the TikTok Algorithm](https://dl.acm.org/doi/pdf/10.1145/3447535.3462512) .

[6] TikTok Newsroom. (2022). [Learn why a video is recommended For You.](https://newsroom.tiktok.com/en-us/learn-why-a-video-is-recommended-for-you)
