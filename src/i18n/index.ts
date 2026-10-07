/**
 * The site's languages and the helpers that tell them apart in a URL.
 *
 * English lives at the root and every other language under its own prefix,
 * so the same page is /about/ in English, /pt-BR/about/ in Portuguese,
 * /es-ES/about/ in Spanish and /sv/about/ in Swedish. Everything that builds
 * a link or reads the current page's language goes through here, so the
 * prefixes are spelled in one place.
 */
export const locales = ['en', 'pt-BR', 'es-ES', 'sv'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** The languages with a prefix, longest first so one can't be a prefix of another. */
const prefixed = locales.filter((l): l is Exclude<Locale, 'en'> => l !== defaultLocale);

const hasPrefix = (pathname: string, locale: Locale) =>
	pathname === `/${locale}` || pathname.startsWith(`/${locale}/`);

/** The language of a path: its prefix, or English without one. */
export function localeOf(pathname: string): Locale {
	return prefixed.find((l) => hasPrefix(pathname, l)) ?? defaultLocale;
}

/** The path without its language prefix, always starting and ending with a slash. */
export function stripLocale(pathname: string): string {
	const locale = localeOf(pathname);
	const bare = locale === defaultLocale ? pathname : pathname.slice(`/${locale}`.length);
	const withLead = bare.startsWith('/') ? bare : `/${bare}`;
	return withLead.endsWith('/') ? withLead : `${withLead}/`;
}

/** The same page in another language. `path` may already carry a prefix. */
export function localePath(locale: Locale, path: string): string {
	const base = stripLocale(path);
	return locale === defaultLocale ? base : `/${locale}${base}`;
}

/**
 * For getStaticPaths on the pages under src/pages/[...lang]/: one route per
 * language. The rest parameter is undefined for English, so that build lands
 * at the root, and the prefix for every other language. Pages with their own
 * parameters spread these into each of theirs.
 */
export const langParams = locales.map((l) => ({ lang: l === defaultLocale ? undefined : l }));

export function localePaths() {
	return langParams.map((params) => ({ params }));
}

/** The language a page under [...lang] is being built for. */
export function localeFromParams(params: { lang?: string | undefined }): Locale {
	if (params.lang === undefined || params.lang === '') return defaultLocale;
	const found = prefixed.find((l) => l === params.lang);
	if (!found) throw new Error(`Unknown language in the URL: ${params.lang}`);
	return found;
}

/** The tag the og:locale property wants, with a region and an underscore. */
export const ogLocale: Record<Locale, string> = { en: 'en_US', 'pt-BR': 'pt_BR', 'es-ES': 'es_ES', sv: 'sv_SE' };

/**
 * What ?lang= may say for each language, lower-cased: the tag itself, with
 * an underscore or a hyphen, and the bare language. vercel.json and the
 * script in MainHead both read it, so the two agree.
 */
export const langAliases: Record<Locale, string[]> = {
	en: ['en', 'en_us', 'en-us'],
	'pt-BR': ['pt', 'pt_br', 'pt-br'],
	'es-ES': ['es', 'es_es', 'es-es'],
	sv: ['sv', 'sv_se', 'sv-se'],
};
