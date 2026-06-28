import { getCollection } from 'astro:content';

function slugFromPath(path: string): string {
	const filename = path.split(/[/\\]/).pop() ?? path;
	return filename.replace(/\.md$/, '');
}

function toUrl(site: URL, pathname: string): string {
	return new URL(pathname, site).href;
}

function urlEntry(loc: string, lastmod?: Date): string {
	const lastmodTag = lastmod
		? `\n    <lastmod>${lastmod.toISOString().split('T')[0]}</lastmod>`
		: '';
	return `  <url>\n    <loc>${loc}</loc>${lastmodTag}\n  </url>`;
}

export async function GET(context: { site: URL }) {
	const { site } = context;

	const books = await getCollection('books');
	const projectPaths = Object.keys(
		import.meta.glob('../pages/projects/*.md', { eager: false }),
	);
	const contributionPaths = Object.keys(
		import.meta.glob('../pages/contributions/*.md', { eager: false }),
	);

	const urls = [
		urlEntry(toUrl(site, '/')),
		urlEntry(toUrl(site, '/works/')),
		urlEntry(toUrl(site, '/books/')),
		urlEntry(toUrl(site, '/posts/')),
		...books.map((book) =>
			urlEntry(toUrl(site, `/books/${book.slug}/`), book.data.publishDate),
		),
		...projectPaths.map((path) =>
			urlEntry(toUrl(site, `/projects/${slugFromPath(path)}/`)),
		),
		...contributionPaths.map((path) =>
			urlEntry(toUrl(site, `/contributions/${slugFromPath(path)}/`)),
		),
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
}
