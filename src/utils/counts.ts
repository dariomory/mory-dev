import { getCollection } from 'astro:content';

/* Prose that states how much is on the site goes stale the moment something
   ships. These counts are derived at build time from the same sources the
   listing pages use, so a new app page updates every sentence that mentions
   the total. */

const count = (glob: Record<string, unknown>) => Object.keys(glob).length;

export async function contentCounts() {
	const [books, posts] = await Promise.all([
		getCollection('books'),
		getCollection('blog'),
	]);

	return {
		apps: count(import.meta.glob('../pages/apps/*.md')),
		projects: count(import.meta.glob('../pages/projects/*.md')),
		contributions: count(import.meta.glob('../pages/contributions/*.md')),
		books: books.length,
		posts: posts.filter((p) => p.data.status === 'published' || !p.data.status).length,
	};
}

/* Career start. Years active is derived so the site does not quietly understate
   it every January. */
export const CAREER_START = 2015;
export const yearsActive = () => new Date().getFullYear() - CAREER_START;

const words = [
	'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
	'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
	'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
];

/* Spelled out inside a sentence, numerals past twenty — the usual prose rule,
   and it keeps a count reading like writing rather than like a counter. */
export const numberWord = (n: number) => (n <= 20 ? words[n] : String(n));

export const titleCaseNumber = (n: number) => {
	const w = numberWord(n);
	return w.charAt(0).toUpperCase() + w.slice(1);
};
