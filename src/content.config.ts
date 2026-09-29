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
			/** Company, event or language logos shown with the project, in order. */
			logos: z.array(z.enum(['robocup', 'daero', 'pinpag', 'lua', 'swift'])).default([]),
			/** In the Earlier list, show the logos without the title, for a logo that
			 *  already names the project. The title stays for screen readers. */
			logoOnly: z.boolean().default(false),
			/** The app's icon, shown before the title on its Work entry and project page. */
			icon: z.string().optional(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
};
