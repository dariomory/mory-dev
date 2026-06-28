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

export const collections = { books };
