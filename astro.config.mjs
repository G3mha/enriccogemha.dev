// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
	site: 'https://enriccogemha.dev',
	// MDX lets a project write-up use the same components as the pages,
	// such as the company marks and flags.
	integrations: [mdx()],
	// English at the root, Brazilian Portuguese under /pt-BR/. The pages under
	// src/pages/[...lang]/ build once per language; src/i18n/ has the helpers.
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'pt-BR'],
		routing: { prefixDefaultLocale: false },
	},
	// /work/ used to be the project index; the front page is that now.
	redirects: {
		'/work': '/',
		'/pt-BR/work': '/pt-BR/',
	},
});
