/** Route segment under `/learn/` that scopes content to one learning language. */
export interface LearnLanguage {
	id: string;
}

export const LEARN_LANGUAGES: LearnLanguage[] = [
	{ id: 'swedish' },
	{ id: 'german' },
	{ id: 'english' },
];

/**
 * Applies to pages that belong to no single learning language (home, false
 * friends, practice). The site is built statically, so their sidebar cannot
 * depend on a per-visitor choice and has to fall back to one tree.
 */
export const DEFAULT_LEARN_LANGUAGE = 'swedish';

/** Remembers the visitor's last chosen learning language as a site path. */
export const LEARN_LANGUAGE_STORAGE_KEY = 'jp-language-hub:learn-language';

const LEARN_SEGMENT = '/learn/';

/** Reads the learning language a pathname belongs to, ignoring base and locale prefixes. */
export function getLearnLanguageFromPathname(pathname: string): string {
	const segmentIndex = pathname.indexOf(LEARN_SEGMENT);
	if (segmentIndex === -1) return DEFAULT_LEARN_LANGUAGE;

	const [id] = pathname.slice(segmentIndex + LEARN_SEGMENT.length).split('/');
	return LEARN_LANGUAGES.some((language) => language.id === id) ? id : DEFAULT_LEARN_LANGUAGE;
}

/** True when a link belongs to a learning language other than the given one. */
export function belongsToOtherLearnLanguage(href: string, languageId: string): boolean {
	const segmentIndex = href.indexOf(LEARN_SEGMENT);
	if (segmentIndex === -1) return false;

	return !href.slice(segmentIndex).startsWith(`${LEARN_SEGMENT}${languageId}/`);
}
