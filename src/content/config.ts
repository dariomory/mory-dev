import { defineCollection, z } from 'astro:content';

const books = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			author: z.string().default('Dario Mory'),
			tagline: z.string(),
			status: z.enum(['published', 'archived']).optional().default('published'),
			coverImage: image(),
			publishDate: z.coerce.date(),
			publisher: z.string().optional(),
			format: z.enum(['ebook', 'print', 'audiobook']),
			isbn: z.string().optional(),
			buyLinks: z
				.array(
					z.object({
						label: z.string(),
						url: z.string().url(),
					}),
				)
				.optional()
				.default([]),
			quotes: z
				.array(
					z.object({
						text: z.string(),
						source: z.string().optional(),
					}),
				)
				.optional(),
			seo: z.object({
				title: z.string(),
				description: z.string(),
			}),
		}),
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional().default([]),
		/* Where a piece first appeared. Kept so the page can credit the original,
		   and so the canonical on that platform can be pointed back here. */
		syndication: z
			.array(
				z.object({
					platform: z.string(),
					url: z.string().url(),
				}),
			)
			.optional()
			.default([]),
		/* 'archived' means the original was taken down and no text survived: the
		   post is still listed as part of the writing history, but it has no body
		   to publish, so it stays out of the sitemap and the feed. */
		status: z.enum(['published', 'archived', 'draft']).optional().default('published'),
	}),
});

export const collections = { books, blog };
