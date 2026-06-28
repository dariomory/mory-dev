import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

type BlogFrontmatter = {
  title: string;
  url: string;
  description: string;
  image: string;
  pubDate: string;
};

const blogPostsModules = Object.values(
  import.meta.glob('../content/blog/*.md', { eager: true }),
) as Array<{ frontmatter: BlogFrontmatter }>;

const blogPosts = blogPostsModules
  .map(entry => ({
    ...entry.frontmatter,
    pubDate: new Date(entry.frontmatter.pubDate),
  }))
  .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

const books = (await getCollection('books')).sort(
  (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
);

export async function GET(context: { site: URL }) {
  return rss({
    title: 'Dario Mory',
    description: 'Posts, books, and articles by Dario Mory',
    site: context.site,
    items: [
      ...blogPosts.map(post => ({
        title: post.title,
        link: post.url,
        description: post.description,
        pubDate: post.pubDate,
      })),
      ...books.map(book => ({
        title: book.data.title,
        link: `/books/${book.slug}/`,
        description: book.data.seo.description,
        pubDate: book.data.publishDate,
      })),
    ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()),
  });
}
