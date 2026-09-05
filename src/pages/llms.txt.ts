import { getCollection } from 'astro:content';
import { numberWord, yearsActive } from '../utils/counts';

/*
 * llms.txt — an index of this site for language models.
 *
 * Measured impact today is close to zero: across a large sample of AI-crawler
 * traffic, almost none of it requests this file, and no major provider has
 * committed to using it. Claude's retrieval and Perplexity are the exceptions,
 * which is the whole reason it is here. It is generated from the same globs the
 * sitemap uses so it cannot go stale, and it is not worth a second hour.
 */

function frontmatter(mod: { frontmatter?: Record<string, string> }) {
	return mod.frontmatter ?? {};
}

function slugFromPath(path: string): string {
	return (path.split(/[/\\]/).pop() ?? path).replace(/\.md$/, '');
}

export async function GET(context: { site: URL }) {
	const site = context.site.href.replace(/\/$/, '');

	const apps = Object.entries(
		import.meta.glob('../pages/apps/*.md', { eager: true }),
	) as Array<[string, { frontmatter: Record<string, string> }]>;

	const projects = Object.entries(
		import.meta.glob('../pages/projects/*.md', { eager: true }),
	) as Array<[string, { frontmatter: Record<string, string> }]>;

	const contributions = Object.entries(
		import.meta.glob('../pages/contributions/*.md', { eager: true }),
	) as Array<[string, { frontmatter: Record<string, string> }]>;

	const books = await getCollection('books');
	const posts = (await getCollection('blog'))
		.filter((p) => p.data.status !== 'draft' && p.data.status !== 'archived')
		.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

	const line = (title: string, url: string, note?: string) =>
		`- [${title}](${url})${note ? `: ${note}` : ''}`;

	const sortedApps = apps
		.map(([path, mod]) => ({ slug: slugFromPath(path), fm: frontmatter(mod) }))
		.sort((a, b) => Number(a.fm.order ?? 99) - Number(b.fm.order ?? 99));

	const body = `# Dario Mory

> Engineering leader who builds and leads teams shipping software and AI-powered products from prototype to production. Past work includes KLM's airport operations stack and the EU Single Digital Gateway programme.

Based in the Netherlands. ${numberWord(yearsActive()).replace(/^./, (c) => c.toUpperCase())} years building and leading engineering teams.
Contact: dario@mory.dev

## About

${line('About Dario Mory', `${site}/about/`, 'background, selected work, and how to work together')}

## Software

Products released under mory.dev.

${sortedApps.map(({ slug, fm }) => line(fm.title, `${site}/apps/${slug}/`, fm.description)).join('\n')}

## Writing

${posts.map((p) => line(p.data.title, `${site}/posts/${p.slug}/`, p.data.description)).join('\n')}

## Books

${books.map((b) => line(b.data.title, `${site}/books/${b.slug}/`, b.data.tagline)).join('\n')}

## Projects

Client and employer work.

${projects.map(([path, mod]) => line(frontmatter(mod).title, `${site}/projects/${slugFromPath(path)}/`, frontmatter(mod).description)).join('\n')}

## Open-source contributions

${contributions.map(([path, mod]) => line(frontmatter(mod).title, `${site}/contributions/${slugFromPath(path)}/`, frontmatter(mod).description)).join('\n')}

## Optional

${line('RSS feed', `${site}/rss.xml`)}
${line('Sitemap', `${site}/sitemap.xml`)}
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
}
