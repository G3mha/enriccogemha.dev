/**
 * The projects, in the page's language. English is the `work` collection as
 * it is. Every other language takes each English entry and lays its own
 * collection's words over it: title, summary, role, period, link labels,
 * image alt, and the write-up itself. Everything else (status, stack, links'
 * addresses, logos, icon, order) has one copy, in the English file.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n';

export type WorkData = CollectionEntry<'work'>['data'];

/** The collection with each language's write-ups; src/content/work/<language>/. */
const translated = { 'pt-BR': 'workPtBR', 'es-ES': 'workEsES', sv: 'workSv' } as const;
type Translated = (typeof translated)[keyof typeof translated];

export interface Work {
	id: string;
	data: WorkData;
	/** The write-up's Markdown, for the opening on preview cards. */
	body: string;
	/** What render() takes: the English entry, or its translation. */
	entry: CollectionEntry<'work'> | CollectionEntry<Translated>;
}

export async function getWork(locale: Locale): Promise<Work[]> {
	const english = (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
	if (locale === 'en') {
		return english.map((entry) => ({ id: entry.id, data: entry.data, body: entry.body ?? '', entry }));
	}

	const translations = await getCollection(translated[locale]);
	for (const translation of translations) {
		if (!english.some((entry) => entry.id === translation.id)) {
			throw new Error(`src/content/work/${locale}/${translation.id} translates a project that doesn't exist`);
		}
	}

	return english.map((entry) => {
		const translation = translations.find((t) => t.id === entry.id);
		if (!translation) {
			throw new Error(`No ${locale} write-up for ${entry.id}: add src/content/work/${locale}/${entry.id}.md`);
		}
		const { links: labels, ...words } = translation.data;
		if (labels && labels.length !== entry.data.links.length) {
			throw new Error(`${entry.id}: the ${locale} file lists ${labels.length} link labels, the English one has ${entry.data.links.length} links`);
		}
		const links = entry.data.links.map((link, i) => ({ ...link, label: labels?.[i] ?? link.label }));
		// A field left out of the translation keeps the English value.
		const given = Object.fromEntries(Object.entries(words).filter(([, value]) => value !== undefined));
		return {
			id: entry.id,
			data: { ...entry.data, ...given, links },
			body: translation.body ?? '',
			entry: translation,
		};
	});
}
