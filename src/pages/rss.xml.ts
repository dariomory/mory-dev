import rss from '@astrojs/rss';
import { blogPosts } from '../data/posts';

export async function GET(context: { site: URL }) {
  return rss({
    title: 'Dario Mory',
    description: 'Posts and articles by Dario Mory',
    site: context.site,
    items: blogPosts.map(post => ({
      title: post.title,
      link: post.url,
      description: post.description,
      pubDate: post.pubDate,
    })),
  });
}
