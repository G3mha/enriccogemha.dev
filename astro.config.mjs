// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
	site: 'https://enriccogemha.dev',
	// MDX lets a project write-up use the same components as the pages,
	// such as the company marks and flags.
	integrations: [mdx()],
	// /work/ used to be the project index; the front page is that now.
	redirects: {
		'/work': '/',
	},
});
