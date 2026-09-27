// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://enriccogemha.dev',
	// /work/ used to be the project index; the front page is that now.
	redirects: {
		'/work': '/',
	},
});
