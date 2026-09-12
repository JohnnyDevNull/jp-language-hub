type MetaLocale = 'en' | 'de' | 'sv';

type UiLabelKey =
	| 'Adjectives & Adverbs'
	| 'Cheat Sheets'
	| 'Common Mistakes'
	| 'Common mistake'
	| 'Correct'
	| 'Example'
	| 'Grammar'
	| 'Home'
	| 'Important'
	| 'In short'
	| 'Incorrect'
	| 'Language-specific rule'
	| 'Learning language'
	| 'Learning path'
	| 'Level and tags'
	| 'Memory tip'
	| 'Mood, Politeness & Reports'
	| 'Nouns & Articles'
	| 'Overview'
	| 'Prepositions & Function Words'
	| 'Pronouns & Roles'
	| 'Pronunciation basics'
	| 'Questions & Negation'
	| 'Quick check'
	| 'Related topics'
	| 'Rule'
	| 'Select the language you are learning'
	| 'Sentence Patterns'
	| 'Sentence Structure'
	| 'Show answer'
	| 'Verbs'
	| 'Verbs & Time Forms'
	| 'Verb Patterns & Voice'
	| 'Vocabulary';

const UI_LABELS: Record<UiLabelKey, Record<MetaLocale, string>> = {
	'Adjectives & Adverbs': {
		en: 'Adjectives & Adverbs',
		de: 'Adjektive & Adverbien',
		sv: 'Adjektiv & adverb',
	},
	'Cheat Sheets': {
		en: 'Cheat Sheets',
		de: 'Spickzettel',
		sv: 'Fusklappar',
	},
	'Common Mistakes': {
		en: 'Common Mistakes',
		de: 'Häufige Fehler',
		sv: 'Vanliga misstag',
	},
	'Common mistake': {
		en: 'Common mistake',
		de: 'Häufiger Fehler',
		sv: 'Vanligt misstag',
	},
	Correct: {
		en: 'Correct',
		de: 'Richtig',
		sv: 'Rätt',
	},
	Example: {
		en: 'Example',
		de: 'Beispiel',
		sv: 'Exempel',
	},
	Grammar: {
		en: 'Grammar',
		de: 'Grammatik',
		sv: 'Grammatik',
	},
	Home: {
		en: 'Home',
		de: 'Startseite',
		sv: 'Startsida',
	},
	Important: {
		en: 'Important',
		de: 'Wichtig',
		sv: 'Viktigt',
	},
	'In short': {
		en: 'In short',
		de: 'Kurz gesagt',
		sv: 'Kort sagt',
	},
	Incorrect: {
		en: 'Incorrect',
		de: 'Falsch',
		sv: 'Fel',
	},
	'Language-specific rule': {
		en: 'Language-specific rule',
		de: 'Sprachspezifische Regel',
		sv: 'Språkspecifik regel',
	},
	'Learning language': {
		en: 'Learning language',
		de: 'Lernsprache',
		sv: 'Lärspråk',
	},
	'Learning path': {
		en: 'Learning path',
		de: 'Lernpfad',
		sv: 'Lärväg',
	},
	'Level and tags': {
		en: 'Level and tags',
		de: 'Niveau und Tags',
		sv: 'Nivå och taggar',
	},
	'Memory tip': {
		en: 'Memory tip',
		de: 'Merktipp',
		sv: 'Minnestips',
	},
	'Mood, Politeness & Reports': {
		en: 'Mood, Politeness & Reports',
		de: 'Modus, Höflichkeit & Wiedergabe',
		sv: 'Modus, artighet & återgivning',
	},
	'Nouns & Articles': {
		en: 'Nouns & Articles',
		de: 'Substantive & Artikel',
		sv: 'Substantiv & artiklar',
	},
	Overview: {
		en: 'Overview',
		de: 'Überblick',
		sv: 'Översikt',
	},
	'Prepositions & Function Words': {
		en: 'Prepositions & Function Words',
		de: 'Präpositionen & Funktionswörter',
		sv: 'Prepositioner & funktionsord',
	},
	'Pronouns & Roles': {
		en: 'Pronouns & Roles',
		de: 'Pronomen & Satzrollen',
		sv: 'Pronomen & satsroller',
	},
	'Pronunciation basics': {
		en: 'Pronunciation basics',
		de: 'Aussprache-Grundlagen',
		sv: 'Uttalsgrunder',
	},
	'Questions & Negation': {
		en: 'Questions & Negation',
		de: 'Fragen & Verneinung',
		sv: 'Frågor & negation',
	},
	'Quick check': {
		en: 'Quick check',
		de: 'Kurzcheck',
		sv: 'Snabbkoll',
	},
	'Related topics': {
		en: 'Related topics',
		de: 'Verwandte Themen',
		sv: 'Relaterade ämnen',
	},
	Rule: {
		en: 'Rule',
		de: 'Regel',
		sv: 'Regel',
	},
	'Select the language you are learning': {
		en: 'Select the language you are learning',
		de: 'Wähle die Sprache, die du lernst',
		sv: 'Välj språket du lär dig',
	},
	'Sentence Patterns': {
		en: 'Sentence Patterns',
		de: 'Satzmuster',
		sv: 'Meningsmönster',
	},
	'Sentence Structure': {
		en: 'Sentence Structure',
		de: 'Satzstruktur',
		sv: 'Meningsstruktur',
	},
	'Show answer': {
		en: 'Show answer',
		de: 'Antwort anzeigen',
		sv: 'Visa svar',
	},
	Verbs: {
		en: 'Verbs',
		de: 'Verben',
		sv: 'Verb',
	},
	'Verbs & Time Forms': {
		en: 'Verbs & Time Forms',
		de: 'Verben & Zeitformen',
		sv: 'Verb och tidsformer',
	},
	'Verb Patterns & Voice': {
		en: 'Verb Patterns & Voice',
		de: 'Verbmuster & Aktiv/Passiv',
		sv: 'Verbmönster & aktiv/passiv',
	},
	Vocabulary: {
		en: 'Vocabulary',
		de: 'Wortschatz',
		sv: 'Ordförråd',
	},
};

const LEARN_LANGUAGE_LABELS: Record<string, Record<MetaLocale, string>> = {
	swedish: {
		en: 'Swedish',
		de: 'Schwedisch',
		sv: 'Svenska',
	},
	german: {
		en: 'German',
		de: 'Deutsch',
		sv: 'Tyska',
	},
	english: {
		en: 'English',
		de: 'Englisch',
		sv: 'Engelska',
	},
};

function normalizeMetaLocale(locale: string | undefined): MetaLocale {
	if (locale === 'de' || locale === 'sv') return locale;
	return 'en';
}

export function uiLabel(key: UiLabelKey, locale: string | undefined): string {
	return UI_LABELS[key][normalizeMetaLocale(locale)];
}

export function localizeUiLabel(label: string, locale: string | undefined): string {
	return label in UI_LABELS ? uiLabel(label as UiLabelKey, locale) : label;
}

export function learnLanguageLabel(languageId: string, locale: string | undefined): string {
	return LEARN_LANGUAGE_LABELS[languageId]?.[normalizeMetaLocale(locale)] ?? languageId;
}
