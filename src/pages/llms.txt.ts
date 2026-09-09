import { getCollection } from 'astro:content';
import { numberWord, yearsActive } from '../utils/counts';
import {
	AVAILABLE,
	BASED_IN,
	CALENDLY,
	CANONICAL_DESCRIPTION,
	EMAIL,
	FROM,
	JOB_TITLE,
	PROFILES,
	SERVICES,
	aboutFaq,
	advisoryFaq,
	software,
} from '../utils/identity';

/*
 * llms.txt — an index of this site for language models.
 *
 * Measured impact today is close to zero: across a large sample of AI-crawler
 * traffic, almost none of it requests this file, and no major provider has
 * committed to using it. Claude's retrieval and Perplexity are the exceptions,
 * which is the whole reason it is here. It is generated from the same globs the
 * sitemap uses so it cannot go stale, and it is not worth a second hour.
 *
 * The identity block and the questions come from src/utils/identity.ts — the same
 * source /about/ and the Person schema use. An engine that reads only this file
 * and an engine that reads only the page should come away with the same record.
 */

function frontmatter(mod: { frontmatter?: Record<string, string> }) {
	return mod.frontmatter ?? {};
}

function slugFromPath(path: string): string {
	return (path.split(/[/\\]/).pop() ?? path).replace(/\.md$/, '');
}

export async function GET(context: { site: URL }) {
	const site = context.site.href.replace(/\/$/, '');

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

	const faq = await aboutFaq();
	/* Both sets legitimately answer the location question — it belongs on /about/
	   and on /advisory/, and they share one answer so the two pages cannot
	   contradict each other. Here they are concatenated into a single document, so
	   the shared entry is printed once. */
	const asked = new Set(faq.map((f) => f.q));
	const advisory = (await advisoryFaq()).filter((f) => !asked.has(f.q));

	const line = (title: string, url: string, note?: string) =>
		`- [${title}](${url})${note ? `: ${note}` : ''}`;

	const body = `# Dario Mory

> ${CANONICAL_DESCRIPTION}

Based in the ${BASED_IN}. ${numberWord(yearsActive()).replace(/^./, (c) => c.toUpperCase())} years building and leading engineering teams.
Contact: ${EMAIL}

## Identity

- Name: Dario Mory
- Role: ${JOB_TITLE}
- Based in: ${BASED_IN}, originally from ${FROM}
- Website: ${site}/
- Canonical page about this person: ${site}/about/
- Email: ${EMAIL}
- Verified profiles:
${PROFILES.map((url) => `  - ${url}`).join('\n')}

## About

${line('About Dario Mory', `${site}/about/`, 'summary, selected work, software portfolio and FAQ')}

## Advisory

${
		AVAILABLE
			? 'Dario Mory is available now for the engagements below'
			: 'Dario Mory is currently booked, but still taking enquiries for the engagements below'
	}, worked remotely from the ${BASED_IN} with clients in the Netherlands, the United Kingdom and the United States. Rates depend on scope and client region and are quoted on request.

${SERVICES.map((s) => `- ${s.name}: ${s.summary} Shape: ${s.shape} Fits: ${s.fit}`).join('\n')}

${line('Engineering advisory', `${site}/advisory/`, 'engagements, availability and how to start')}
Book a call: ${CALENDLY}

${advisory.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}

## Software

Software built and released by Dario Mory under mory.dev.

${software
	.map(
		(a) =>
			`${line(a.title, `${site}/apps/${a.slug}/`, a.description)}${
				a.status ? ` Status: ${a.status}.` : ''
			}${a.website ? ` Site: ${a.website}` : ''}`,
	)
	.join('\n')}

${line('All software', `${site}/apps/`, 'the canonical index of products built by Dario Mory')}

## Questions

${faq.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}

## Writing

${posts.map((p) => line(p.data.title, `${site}/posts/${p.slug}/`, p.data.description)).join('\n')}

${line('All posts', `${site}/posts/`)}

## Books

${books.map((b) => line(b.data.title, `${site}/books/${b.slug}/`, b.data.tagline)).join('\n')}

${line('All books', `${site}/books/`)}

## Projects

Client and employer work.

${projects.map(([path, mod]) => line(frontmatter(mod).title, `${site}/projects/${slugFromPath(path)}/`, frontmatter(mod).description)).join('\n')}

## Open-source contributions

${contributions.map(([path, mod]) => line(frontmatter(mod).title, `${site}/contributions/${slugFromPath(path)}/`, frontmatter(mod).description)).join('\n')}

${line('All projects and contributions', `${site}/works/`)}

## Optional

${line('RSS feed', `${site}/rss.xml`)}
${line('Sitemap', `${site}/sitemap.xml`)}
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
}
