export interface Post {
  url: string;
  title: string;
  description: string;
  image: string;
  pubDate: Date;
}

export const blogPosts: Post[] = [
  {
    url: 'https://medium.com/@dariomory/reverse-engineering-tiktoks-psychic-fyp-e759f64b0fbc',
    title: "Reverse Engineering TikTok's Psychic FYP",
    description:
      "An exploration of how TikTok's For You Page algorithm works, analyzing the mechanisms behind its recommendation system and user engagement strategies.",
    image: '/blog.png',
    pubDate: new Date('2024-05-21'),
  },
  {
    url: 'https://hackernoon.com/proxies-how-they-work-and-why-theyre-essential',
    title: "Proxies: How They Work and Why They're Essential",
    description:
      'A comprehensive guide to understanding proxy servers, their functionality, and their importance in web scraping, networking, and internet privacy.',
    image: '/blog.png',
    pubDate: new Date('2023-10-12'),
  },
  {
    url: 'https://medium.com/@morydev/latest-trends-in-ai-development',
    title: 'Emerging Trends in AI Development',
    description:
      'Explore the latest advancements and trends in the field of AI and how they are revolutionizing software development.',
    image: '/blog.png',
    pubDate: new Date('2023-07-03'),
  },
  {
    url: 'https://medium.com/@morydev/agile-methodology-in-2023',
    title: 'Agile Methodology in 2023',
    description:
      'An in-depth analysis of how Agile methodology has evolved and its impact on software development projects.',
    image: '/blog.png',
    pubDate: new Date('2023-02-17'),
  },
];

export const youtubePosts: Post[] = [
  {
    url: 'https://www.youtube.com/morydev/clean-code-tutorial',
    title: 'Clean Code Techniques',
    description:
      'A comprehensive video tutorial on writing clean, maintainable code for long-term project success.',
    image: '/youtube.png',
    pubDate: new Date('2022-11-09'),
  },
];
