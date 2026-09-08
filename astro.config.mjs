// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://johnnydevnull.github.io',
	base: '/jp-language-hub',
	integrations: [
		starlight({
			title: 'JP Language Hub',
			customCss: ['./src/styles/global.css'],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				de: {
					label: 'Deutsch',
					lang: 'de',
				},
				sv: {
					label: 'Svenska',
					lang: 'sv',
				},
			},
			sidebar: [
				{ label: 'Home', link: '/' },

				// Swedish learning tree.
				{
					label: 'Grammar',
					items: [
						{ label: 'Overview', slug: 'learn/swedish/grammar' },
						{
							label: 'Sentence Structure',
							items: [
								{ slug: 'learn/swedish/grammar/sentence-structure/basic-word-order' },
								{ slug: 'learn/swedish/grammar/sentence-structure/v2' },
								{ slug: 'learn/swedish/grammar/sentence-structure/inversion' },
								{ slug: 'learn/swedish/grammar/sentence-structure/biff' },
								{ slug: 'learn/swedish/grammar/sentence-structure/inte-placement' },
							],
						},
						{
							label: 'Nouns & Articles',
							items: [
								{ slug: 'learn/swedish/grammar/nouns-articles/en-ett' },
								{ slug: 'learn/swedish/grammar/nouns-articles/noun-forms' },
								{ slug: 'learn/swedish/grammar/nouns-articles/plural-overview' },
							],
						},
						{
							label: 'Numerals',
							items: [{ slug: 'learn/swedish/grammar/numerals/numbers' }],
						},
						{
							label: 'Adjectives & Adverbs',
							items: [
								{ slug: 'learn/swedish/grammar/adjectives-adverbs/agreement' },
								{ slug: 'learn/swedish/grammar/adjectives-adverbs/adjective-comparison' },
								{ slug: 'learn/swedish/grammar/adjectives-adverbs/adverbs' },
							],
						},
						{
							label: 'Verbs',
							items: [
								{ slug: 'learn/swedish/grammar/verbs/verb-forms' },
								{ slug: 'learn/swedish/grammar/verbs/tense-perspectives' },
								{ slug: 'learn/swedish/grammar/verbs/present' },
								{ slug: 'learn/swedish/grammar/verbs/preterite' },
								{ slug: 'learn/swedish/grammar/verbs/perfect' },
								{ slug: 'learn/swedish/grammar/verbs/verb-groups' },
								{ slug: 'learn/swedish/grammar/verbs/particle-verbs' },
								{ slug: 'learn/swedish/grammar/verbs/passive' },
							],
						},
						{
							label: 'Pronouns & Function Words',
							items: [
								{ slug: 'learn/swedish/grammar/pronouns-function-words/possessive-pronouns' },
								{ slug: 'learn/swedish/grammar/pronouns-function-words/sin-sitt-sina' },
								{
									slug: 'learn/swedish/grammar/pronouns-function-words/nagon-nagot-ingen-inget',
								},
								{
									slug: 'learn/swedish/grammar/pronouns-function-words/demonstratives-har-dar',
								},
								{ slug: 'learn/swedish/grammar/pronouns-function-words/prepositions' },
								{ slug: 'learn/swedish/grammar/pronouns-function-words/relative-pronouns' },
								{ slug: 'learn/swedish/grammar/pronouns-function-words/interrogatives' },
								{ slug: 'learn/swedish/grammar/pronouns-function-words/man-varandra-varsin' },
								{ slug: 'learn/swedish/grammar/pronouns-function-words/dar-har-adverbs' },
							],
						},
					],
				},
				{
					label: 'Vocabulary',
					items: [
						{ label: 'Overview', slug: 'learn/swedish/vocabulary' },
						{ slug: 'learn/swedish/vocabulary/telling-time' },
					],
				},
				{
					label: 'Language-specific Rules',
					items: [
						{ label: 'Overview', slug: 'learn/swedish/language-specific-rules' },
						{ slug: 'learn/swedish/language-specific-rules/en-ett' },
						{ slug: 'learn/swedish/language-specific-rules/v2-biff' },
						{ slug: 'learn/swedish/language-specific-rules/sin-sitt-sina' },
						{ slug: 'learn/swedish/language-specific-rules/pronunciation-basics' },
					],
				},
				{
					label: 'Common Mistakes',
					items: [
						{ label: 'Overview', slug: 'learn/swedish/common-mistakes' },
						{ slug: 'learn/swedish/common-mistakes/from-german' },
						{ slug: 'learn/swedish/common-mistakes/from-english' },
					],
				},
				{
					label: 'Cheat Sheets',
					items: [
						{ label: 'Overview', slug: 'learn/swedish/cheat-sheets' },
						{ slug: 'learn/swedish/cheat-sheets/en-ett-adjectives' },
						{ slug: 'learn/swedish/cheat-sheets/v2-biff' },
						{ slug: 'learn/swedish/cheat-sheets/noun-forms' },
						{ slug: 'learn/swedish/cheat-sheets/verb-forms' },
						{ slug: 'learn/swedish/cheat-sheets/particle-verbs' },
						{ slug: 'learn/swedish/cheat-sheets/numbers' },
						{ slug: 'learn/swedish/cheat-sheets/relative-pronouns' },
						{ slug: 'learn/swedish/cheat-sheets/question-words' },
						{ slug: 'learn/swedish/cheat-sheets/adverbs' },
					],
				},

				// German learning tree.
				{ label: 'Overview', slug: 'learn/german' },

				// English learning tree.
				{ label: 'Overview', slug: 'learn/english' },
				{ slug: 'learn/english/common-mistakes/from-german' },

				// Shared by every learning language.
				{ slug: 'false-friends' },
				{ slug: 'direct-translation-errors' },
				{ slug: 'practice' },
			],
		}),
	],
});
