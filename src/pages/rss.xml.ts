import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

/* Feed items point at this domain now. Archived posts have no body to read and
   drafts are not public, so neither belongs in a feed. */
const blogPosts = (await getCollection('blog'))
  .filter(post => post.data.status !== 'draft' && post.data.status !== 'archived')
  .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

const books = (await getCollection('books')).sort(
  (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
);

export async function GET(context: { site: URL }) {
  return rss({
    title: 'Dario Mory',
    description: 'Posts, books, and articles by Dario Mory',
    site: context.site,
    customData: '<language>en</language>',
    items: [
      ...blogPosts.map(post => ({
        title: post.data.title,
        link: `/posts/${post.slug}/`,
        description: post.data.description,
        pubDate: post.data.pubDate,
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
