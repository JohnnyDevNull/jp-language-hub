/** Builds site paths for the learning-language trees, honouring base and meta locale. */
export function localizedLearnPath(locale: string | undefined, languageId?: string): string {
	const segments = [locale, languageId && 'learn', languageId].filter(Boolean);
	return `${import.meta.env.BASE_URL}/${segments.join('/')}/`.replace(/\/{2,}/g, '/');
}
