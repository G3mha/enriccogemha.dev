import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		// Only the files in this folder: the Portuguese write-ups live in pt-BR/
		// under it, as their own collection below.
		loader: glob({ base: './src/content/work', pattern: '*.{md,mdx}' }),
		schema: z.object({
			title: z.string(),
			/** One plain sentence. No adjectives that a reader cannot check. */
			summary: z.string(),
			/** Drives the status dot. `unreleased` means built but not published anywhere. */
			status: z.enum(['live', 'paused', 'unreleased', 'archived']),
			/** Human-readable, e.g. "2025 – present" or "2024". */
			period: z.string(),
			/** What he personally did, in plain words. Left out where the summary and
			 *  the write-up already say it. */
			role: z.string().optional(),
			stack: z.array(z.string()),
			links: z
				.array(z.object({ label: z.string(), href: z.union([z.string().url(), z.string().regex(/^\/[^/]/)]) }))
				.default([]),
			/** Featured entries get a full block on the homepage; the rest are listed. */
			featured: z.boolean().default(false),
			/** Lower sorts first. */
			order: z.number().default(50),
			/** Company, event or language logos shown with the project, in order. */
			logos: z.array(z.enum(['robocup', 'daero', 'pinpag', 'lua', 'swift', 'deepracer'])).default([]),
			/** In the Earlier list, show the logos without the title, for a logo that
			 *  already names the project. The title stays for screen readers. */
			logoOnly: z.boolean().default(false),
			/** The app's icon, shown before the title on its Work entry or Earlier row, and on its project page. */
			icon: z.string().optional(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
	/**
	 * The write-ups in the other languages, one collection per language and
	 * one file per project, named like the English file. Only the words are
	 * here; the status, stack, links' addresses, logos and order come from the
	 * English entry, so they can't drift apart. src/data/work.ts pairs them,
	 * and the build fails on a project missing a translation.
	 */
	workPtBR: translations('pt-BR'),
	workEsES: translations('es-ES'),
	workSv: translations('sv'),
};

function translations(folder: string) {
	return defineCollection({
		loader: glob({ base: `./src/content/work/${folder}`, pattern: '*.{md,mdx}' }),
		schema: z.object({
			title: z.string(),
			summary: z.string(),
			/** Left out when it's the same as the English, like "2024". */
			period: z.string().optional(),
			role: z.string().optional(),
			/** The labels of the English entry's links, in the same order. */
			links: z.array(z.string()).optional(),
			img_alt: z.string().optional(),
		}),
	});
}
