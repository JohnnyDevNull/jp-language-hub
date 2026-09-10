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
			components: {
				Head: './src/components/Head.astro',
				Sidebar: './src/components/Sidebar.astro',
			},
			routeMiddleware: './src/starlight/learn-language-sidebar.ts',
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
				{ label: 'Learning path', slug: 'learn/swedish/learning-path' },
				{ label: 'Important', slug: 'learn/swedish/important' },
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
						{ slug: 'learn/swedish/vocabulary/food-and-drinks' },
						{ slug: 'learn/swedish/vocabulary/shopping-and-money' },
						{ slug: 'learn/swedish/vocabulary/transport-and-travel' },
						{ slug: 'learn/swedish/vocabulary/home-and-everyday-objects' },
						{ slug: 'learn/swedish/vocabulary/daily-routines' },
					],
				},
				{
					label: 'Sentence Patterns',
					items: [
						{ label: 'Overview', slug: 'learn/swedish/sentence-patterns' },
						{ slug: 'learn/swedish/sentence-patterns/introducing-yourself' },
						{ slug: 'learn/swedish/sentence-patterns/small-talk' },
						{ slug: 'learn/swedish/sentence-patterns/polite-requests' },
						{ slug: 'learn/swedish/sentence-patterns/ordering-food' },
						{ slug: 'learn/swedish/sentence-patterns/shopping-and-paying' },
						{ slug: 'learn/swedish/sentence-patterns/asking-for-directions' },
						{ slug: 'learn/swedish/sentence-patterns/travel-and-transport' },
						{ slug: 'learn/swedish/sentence-patterns/at-home' },
						{ slug: 'learn/swedish/sentence-patterns/opinions-and-uncertainty' },
						{ slug: 'learn/swedish/sentence-patterns/agreeing-and-disagreeing' },
						{ slug: 'learn/swedish/sentence-patterns/reasons-and-examples' },
						{ slug: 'learn/swedish/sentence-patterns/conditions-and-consequences' },
						{ slug: 'learn/swedish/sentence-patterns/keeping-a-conversation-going' },
					],
				},
				{ label: 'Pronunciation basics', slug: 'learn/swedish/pronunciation-basics' },
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
				{
					label: 'Grammar',
					items: [
						{ label: 'Overview', slug: 'learn/english/grammar' },
						{
							label: 'Sentence Structure',
							items: [
								{ label: 'Overview', slug: 'learn/english/grammar/sentence-structure' },
								{ slug: 'learn/english/grammar/sentence-structure/sentence-order' },
								{ slug: 'learn/english/grammar/sentence-structure/questions-and-do-support' },
								{ slug: 'learn/english/grammar/sentence-structure/adverb-placement' },
							],
						},
						{
							label: 'Verbs & Time Forms',
							items: [
								{ label: 'Overview', slug: 'learn/english/grammar/verbs' },
								{ slug: 'learn/english/grammar/verbs/choosing-time-form' },
								{ slug: 'learn/english/grammar/verbs/simple-present' },
								{ slug: 'learn/english/grammar/verbs/present-progressive' },
								{ slug: 'learn/english/grammar/verbs/simple-present-vs-present-progressive' },
								{ slug: 'learn/english/grammar/verbs/simple-past' },
								{ slug: 'learn/english/grammar/verbs/present-perfect' },
								{ slug: 'learn/english/grammar/verbs/simple-past-vs-present-perfect' },
								{ slug: 'learn/english/grammar/verbs/will-future' },
								{ slug: 'learn/english/grammar/verbs/going-to-future' },
								{ slug: 'learn/english/grammar/verbs/future-progressive' },
								{ slug: 'learn/english/grammar/verbs/future-perfect' },
							],
						},
						{
							label: 'Nouns & Articles',
							items: [
								{ label: 'Overview', slug: 'learn/english/grammar/nouns-articles' },
								{ slug: 'learn/english/grammar/nouns-articles/articles' },
								{
									slug: 'learn/english/grammar/nouns-articles/countable-and-uncountable-nouns',
								},
							],
						},
					],
				},
				{
					label: 'Common Mistakes',
					items: [
						{ label: 'Overview', slug: 'learn/english/common-mistakes' },
						{ slug: 'learn/english/common-mistakes/from-german' },
					],
				},

				// Shared by every learning language.
				{ slug: 'false-friends' },
				{ slug: 'direct-translation-errors' },
				{ slug: 'practice' },
			],
		}),
	],
});
