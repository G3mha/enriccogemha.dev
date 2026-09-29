import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
		schema: z.object({
			title: z.string(),
			/** One plain sentence. No adjectives that a reader cannot check. */
			summary: z.string(),
			/** Drives the status dot. `unreleased` means built but not published anywhere. */
			status: z.enum(['live', 'paused', 'unreleased', 'archived']),
			/** Human-readable, e.g. "2025 – present" or "2024". */
			period: z.string(),
			/** What he personally did, in plain words. */
			role: z.string(),
			stack: z.array(z.string()),
			links: z
				.array(z.object({ label: z.string(), href: z.string().url() }))
				.default([]),
			/** Featured entries get a full block on the homepage; the rest are listed. */
			featured: z.boolean().default(false),
			/** Lower sorts first. */
			order: z.number().default(50),
			/** A company or event logo shown with the project. */
			logo: z.enum(['robocup', 'daero', 'pinpag', 'lua']).optional(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
};
