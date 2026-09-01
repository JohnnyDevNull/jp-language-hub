import { z } from 'astro/zod';

export const languageCodeSchema = z.enum(['de', 'en', 'sv']);
export const cefrLevelSchema = z.enum(['A1', 'A2', 'B1', 'B2', 'C1']);
export const contentTagSchema = z.enum([
	'grammar',
	'sentence-structure',
	'nouns',
	'verbs',
	'adjectives',
	'pronouns',
	'vocabulary',
	'comparison',
	'swedish-specific',
	'common-mistakes',
	'cheat-sheet',
	'important',
]);

const levelsSchema = z
	.array(cefrLevelSchema)
	.min(1)
	.refine((levels) => new Set(levels).size === levels.length, {
		message: 'CEFR levels must be unique.',
	});

const tagsSchema = z
	.array(contentTagSchema)
	.min(1)
	.refine((tags) => new Set(tags).size === tags.length, {
		message: 'Tags must be unique.',
	});

const relatedRouteSchema = z.string().regex(
	/^\/(?:[a-z0-9-]+\/)*[a-z0-9-]+\/?$/,
	'Related entries must be absolute site routes such as /grammar/verbs/swedish/present/.',
);

export const docsMetadataSchema = z.object({
	metaLanguage: languageCodeSchema.optional(),
	grammarLanguage: z.enum(['de', 'en', 'sv', 'comparison']).optional(),
	comparisonLanguages: z
		.array(languageCodeSchema)
		.min(2)
		.max(3)
		.refine((languages) => new Set(languages).size === languages.length, {
			message: 'Comparison languages must be unique.',
		})
		.optional(),
	levels: levelsSchema.optional(),
	tags: tagsSchema.optional(),
	related: z.array(relatedRouteSchema).min(1).optional(),
});

const translationsSchema = z.object({
	de: z.string().min(1).optional(),
	en: z.string().min(1).optional(),
});

const swedishLexemeSchema = z.object({
	language: z.literal('sv'),
	lemma: z.string().min(1),
	translations: translationsSchema.optional(),
	levels: levelsSchema.optional(),
	tags: tagsSchema.optional(),
});

export const swedishNounSchema = swedishLexemeSchema.extend({
	partOfSpeech: z.literal('noun'),
	morphology: z.object({
		gender: z.enum(['en', 'ett']),
		definiteSingular: z.string().min(1),
		indefinitePlural: z.string().min(1),
		definitePlural: z.string().min(1),
	}),
});

export const swedishVerbSchema = swedishLexemeSchema.extend({
	partOfSpeech: z.literal('verb'),
	group: z.enum(['1', '2a', '2b', '3', '4']),
	morphology: z.object({
		imperative: z.string().min(1),
		present: z.string().min(1),
		preterite: z.string().min(1),
		supine: z.string().min(1),
	}),
});

export const swedishAdjectiveSchema = swedishLexemeSchema.extend({
	partOfSpeech: z.literal('adjective'),
	morphology: z.object({
		en: z.string().min(1),
		ett: z.string().min(1),
		plural: z.string().min(1),
		definite: z.string().min(1),
	}),
	comparison: z
		.object({
			comparative: z.string().min(1),
			superlative: z.string().min(1),
		})
		.optional(),
});
