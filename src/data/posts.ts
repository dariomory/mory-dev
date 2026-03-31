export interface Post {
  url: string;
  title: string;
  description: string;
  image: string;
  pubDate: Date;
}

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
