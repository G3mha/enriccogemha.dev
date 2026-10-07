/**
 * Writes vercel.json: the ?lang= redirects, one set per language, built from
 * the languages and aliases in src/i18n/index.ts so the two can't disagree.
 * Run it with `npm run redirects` after adding a language or an alias.
 *
 * For each language, three kinds of rule: the root ("/" or "/<prefix>/")
 * with ?lang= for another language goes to that language's root, and any
 * deeper address goes to the same page under the other prefix. The English
 * rules match every address that doesn't start with a prefix, by lookahead,
 * so a Portuguese page asked for in Portuguese doesn't gain a second prefix.
 * The deeper rules use a custom pattern, (.+), because Vercel's :path* leaves
 * out a trailing slash and the site's addresses all end in one.
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

// Kept in step with src/i18n/index.ts by hand: Vercel reads this file before
// anything is built, so it can't import TypeScript.
const locales = ['en', 'pt-BR', 'es-ES', 'sv'];
const aliases = {
	en: ['en', 'en_us', 'en-us'],
	'pt-BR': ['pt', 'pt_br', 'pt-br'],
	'es-ES': ['es', 'es_es', 'es-es'],
	sv: ['sv', 'sv_se', 'sv-se'],
};

const prefixed = locales.filter((l) => l !== 'en');
// Upper and lower case both: Vercel's query match is a plain regex.
const asked = (locale) => `(${aliases[locale].flatMap((a) => [a, a.toUpperCase(), a[0].toUpperCase() + a.slice(1)]).filter((v, i, all) => all.indexOf(v) === i).join('|')})`;
const has = (locale) => [{ type: 'query', key: 'lang', value: asked(locale) }];
const home = (locale) => (locale === 'en' ? '/' : `/${locale}/`);
const under = (locale, path) => (locale === 'en' ? `/${path}` : `/${locale}/${path}`);

const redirects = [];
for (const to of locales) {
	for (const from of locales) {
		if (from === to) continue;
		if (from === 'en') {
			const notPrefixed = `(?!(?:${prefixed.join('|')})(?:/|$))`;
			redirects.push({ source: '/', has: has(to), destination: home(to), permanent: false });
			redirects.push({ source: `/:path(${notPrefixed}.+)`, has: has(to), destination: under(to, ':path'), permanent: false });
		} else {
			redirects.push({ source: `/${from}`, has: has(to), destination: home(to), permanent: false });
			redirects.push({ source: `/${from}/`, has: has(to), destination: home(to), permanent: false });
			redirects.push({ source: `/${from}/:path(.+)`, has: has(to), destination: under(to, ':path'), permanent: false });
		}
	}
}

const json = JSON.stringify({ $schema: 'https://openapi.vercel.sh/vercel.json', redirects }, null, '\t');
writeFileSync(`${root}vercel.json`, `${json}\n`);
console.log(`Wrote vercel.json with ${redirects.length} redirects`);
