import { localizedLearnPath } from './learn-language-paths';

/**
 * Learning languages whose tree has the index pages a tag pill can link to.
 * Only Swedish has them today; the other trees render plain pills until they
 * carry enough content to be worth indexing.
 */
const INDEXED_LEARN_LANGUAGES = new Set(['swedish']);

/** Page that orders a learning language's content by CEFR level. */
export function levelIndexPath(
	locale: string | undefined,
	learnLanguage: string,
): string | undefined {
	if (!INDEXED_LEARN_LANGUAGES.has(learnLanguage)) return undefined;
	return `${localizedLearnPath(locale, learnLanguage)}learning-path/`;
}

/** Page that collects the rules tagged as the most important ones. */
export function importantIndexPath(
	locale: string | undefined,
	learnLanguage: string,
): string | undefined {
	if (!INDEXED_LEARN_LANGUAGES.has(learnLanguage)) return undefined;
	return `${localizedLearnPath(locale, learnLanguage)}important/`;
}
