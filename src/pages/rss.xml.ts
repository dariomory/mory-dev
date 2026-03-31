import rss from '@astrojs/rss';

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
