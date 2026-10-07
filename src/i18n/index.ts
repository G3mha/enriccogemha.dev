/**
 * The site's two languages and the helpers that tell them apart in a URL.
 *
 * English lives at the root and Brazilian Portuguese under /pt-BR/, so the
 * same page is /about/ in one and /pt-BR/about/ in the other. Everything that
 * builds a link or reads the current page's language goes through here, so
 * the prefix is spelled in one place.
 */
export const locales = ['en', 'pt-BR'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** The language of a path: /pt-BR/... is Portuguese, anything else English. */
export function localeOf(pathname: string): Locale {
	return pathname === '/pt-BR' || pathname.startsWith('/pt-BR/') ? 'pt-BR' : 'en';
}

/** The path without its language prefix, always starting and ending with a slash. */
export function stripLocale(pathname: string): string {
	const bare = pathname === '/pt-BR' || pathname.startsWith('/pt-BR/') ? pathname.slice('/pt-BR'.length) : pathname;
	const withLead = bare.startsWith('/') ? bare : `/${bare}`;
	return withLead.endsWith('/') ? withLead : `${withLead}/`;
}

/** The same page in another language. `path` may already carry a prefix. */
export function localePath(locale: Locale, path: string): string {
	const base = stripLocale(path);
	return locale === defaultLocale ? base : `/pt-BR${base}`;
}

/**
 * For getStaticPaths on the pages under src/pages/[...lang]/: one route per
 * language. The rest parameter is undefined for English, so that build lands
 * at the root, and "pt-BR" for Portuguese. Pages with their own parameters
 * spread these into each of theirs.
 */
export const langParams = [{ lang: undefined }, { lang: 'pt-BR' }] as const;

export function localePaths() {
	return langParams.map((params) => ({ params }));
}

/** The language a page under [...lang] is being built for. */
export function localeFromParams(params: { lang?: string | undefined }): Locale {
	if (params.lang === undefined || params.lang === '') return 'en';
	if (params.lang === 'pt-BR') return 'pt-BR';
	throw new Error(`Unknown language in the URL: ${params.lang}`);
}

/** The BCP 47 tag the og:locale property wants, with an underscore. */
export const ogLocale: Record<Locale, string> = { en: 'en_US', 'pt-BR': 'pt_BR' };
