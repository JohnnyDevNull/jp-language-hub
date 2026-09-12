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
								{ label: 'Overview', slug: 'learn/swedish/grammar/sentence-structure' },
								{ slug: 'learn/swedish/grammar/sentence-structure/basic-word-order' },
								{ slug: 'learn/swedish/grammar/sentence-structure/v2' },
								{ slug: 'learn/swedish/grammar/sentence-structure/inversion' },
								{ slug: 'learn/swedish/grammar/sentence-structure/biff' },
								{ slug: 'learn/swedish/grammar/sentence-structure/subordinate-clauses' },
								{ slug: 'learn/swedish/grammar/sentence-structure/inte-placement' },
							],
						},
						{
							label: 'Questions & Negation',
							items: [
								{ label: 'Overview', slug: 'learn/swedish/grammar/questions-negation' },
								{ slug: 'learn/swedish/grammar/questions-negation/questions' },
								{ slug: 'learn/swedish/grammar/questions-negation/question-words' },
								{ slug: 'learn/swedish/grammar/questions-negation/negation' },
							],
						},
						{
							label: 'Nouns & Articles',
							items: [
								{ label: 'Overview', slug: 'learn/swedish/grammar/nouns-articles' },
								{ slug: 'learn/swedish/grammar/nouns-articles/en-ett' },
								{ slug: 'learn/swedish/grammar/nouns-articles/noun-forms' },
								{ slug: 'learn/swedish/grammar/nouns-articles/plural-overview' },
								{ slug: 'learn/swedish/grammar/nouns-articles/possession' },
							],
						},
						{
							label: 'Pronouns & Roles',
							items: [
								{ label: 'Overview', slug: 'learn/swedish/grammar/pronouns-roles' },
								{ slug: 'learn/swedish/grammar/pronouns-roles/personal-pronouns' },
								{ slug: 'learn/swedish/grammar/pronouns-roles/possessive-pronouns' },
								{ slug: 'learn/swedish/grammar/pronouns-roles/sin-sitt-sina' },
								{ slug: 'learn/swedish/grammar/pronouns-roles/nagon-nagot-ingen-inget' },
								{ slug: 'learn/swedish/grammar/pronouns-roles/demonstratives-har-dar' },
								{ slug: 'learn/swedish/grammar/pronouns-roles/relative-pronouns' },
								{ slug: 'learn/swedish/grammar/pronouns-roles/reflexive-pronouns' },
								{ slug: 'learn/swedish/grammar/pronouns-roles/man-varandra-varsin' },
							],
						},
						{
							label: 'Verbs & Time Forms',
							items: [
								{ label: 'Overview', slug: 'learn/swedish/grammar/verbs-time-forms' },
								{ slug: 'learn/swedish/grammar/verbs-time-forms/verb-forms' },
								{ slug: 'learn/swedish/grammar/verbs-time-forms/tense-perspectives' },
								{ slug: 'learn/swedish/grammar/verbs-time-forms/present' },
								{ slug: 'learn/swedish/grammar/verbs-time-forms/preterite' },
								{ slug: 'learn/swedish/grammar/verbs-time-forms/perfect' },
								{ slug: 'learn/swedish/grammar/verbs-time-forms/future-forms' },
							],
						},
						{
							label: 'Adjectives & Adverbs',
							items: [
								{ label: 'Overview', slug: 'learn/swedish/grammar/adjectives-adverbs' },
								{ slug: 'learn/swedish/grammar/adjectives-adverbs/agreement' },
								{ slug: 'learn/swedish/grammar/adjectives-adverbs/adjective-comparison' },
								{ slug: 'learn/swedish/grammar/adjectives-adverbs/adverbs' },
							],
						},
						{
							label: 'Prepositions & Function Words',
							items: [
								{
									label: 'Overview',
									slug: 'learn/swedish/grammar/prepositions-function-words',
								},
								{ slug: 'learn/swedish/grammar/prepositions-function-words/prepositions' },
								{ slug: 'learn/swedish/grammar/prepositions-function-words/dar-har-adverbs' },
								{ slug: 'learn/swedish/grammar/prepositions-function-words/connectors' },
							],
						},
						{
							label: 'Verb Patterns & Voice',
							items: [
								{ label: 'Overview', slug: 'learn/swedish/grammar/verb-patterns-voice' },
								{ slug: 'learn/swedish/grammar/verb-patterns-voice/verb-groups' },
								{ slug: 'learn/swedish/grammar/verb-patterns-voice/particle-verbs' },
								{ slug: 'learn/swedish/grammar/verb-patterns-voice/modal-verbs' },
								{ slug: 'learn/swedish/grammar/verb-patterns-voice/passive' },
								{ slug: 'learn/swedish/grammar/verb-patterns-voice/active-vs-passive' },
								{ slug: 'learn/swedish/grammar/verb-patterns-voice/imperative' },
							],
						},
						{
							label: 'Mood, Politeness & Reports',
							items: [
								{ label: 'Overview', slug: 'learn/swedish/grammar/mood-politeness-reports' },
								{ slug: 'learn/swedish/grammar/mood-politeness-reports/conditionals' },
								{ slug: 'learn/swedish/grammar/mood-politeness-reports/reported-speech' },
							],
						},
					],
				},
				{
					label: 'Vocabulary',
					items: [
						{ label: 'Overview', slug: 'learn/swedish/vocabulary' },
						{ slug: 'learn/swedish/vocabulary/numbers' },
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
				{
					label: 'Grammar',
					items: [
						{ label: 'Overview', slug: 'learn/german/grammar' },
						{
							label: 'Cases',
							items: [
								{ label: 'Overview', slug: 'learn/german/grammar/cases' },
								{ slug: 'learn/german/grammar/cases/cases-as-roles' },
								{ slug: 'learn/german/grammar/cases/nominative' },
								{ slug: 'learn/german/grammar/cases/accusative' },
								{ slug: 'learn/german/grammar/cases/dative' },
								{ slug: 'learn/german/grammar/cases/genitive' },
							],
						},
						{
							label: 'Prepositions',
							items: [
								{ label: 'Overview', slug: 'learn/german/grammar/prepositions' },
								{ slug: 'learn/german/grammar/prepositions/prepositions-and-case' },
								{ slug: 'learn/german/grammar/prepositions/accusative-prepositions' },
								{ slug: 'learn/german/grammar/prepositions/dative-prepositions' },
								{ slug: 'learn/german/grammar/prepositions/two-way-prepositions' },
								{ slug: 'learn/german/grammar/prepositions/genitive-prepositions' },
								{ slug: 'learn/german/grammar/prepositions/prepositional-adverbs' },
							],
						},
						{
							label: 'Nouns & Articles',
							items: [
								{ label: 'Overview', slug: 'learn/german/grammar/nouns-articles' },
								{ slug: 'learn/german/grammar/nouns-articles/articles-and-gender' },
								{ slug: 'learn/german/grammar/nouns-articles/der-die-das' },
								{ slug: 'learn/german/grammar/nouns-articles/ein-words' },
								{ slug: 'learn/german/grammar/nouns-articles/plural-nouns' },
								{ slug: 'learn/german/grammar/nouns-articles/compound-noun-gender' },
							],
						},
						{
							label: 'Pronouns',
							items: [
								{ label: 'Overview', slug: 'learn/german/grammar/pronouns' },
								{ slug: 'learn/german/grammar/pronouns/personal-pronouns' },
								{ slug: 'learn/german/grammar/pronouns/possessive-pronouns' },
								{ slug: 'learn/german/grammar/pronouns/reflexive-pronouns' },
								{ slug: 'learn/german/grammar/pronouns/demonstrative-pronouns' },
								{ slug: 'learn/german/grammar/pronouns/indefinite-pronouns' },
								{ slug: 'learn/german/grammar/pronouns/pronoun-case-choice' },
							],
						},
						{
							label: 'Sentence Structure',
							items: [
								{ label: 'Overview', slug: 'learn/german/grammar/sentence-structure' },
								{ slug: 'learn/german/grammar/sentence-structure/main-clause-verb-second' },
								{ slug: 'learn/german/grammar/sentence-structure/questions' },
								{ slug: 'learn/german/grammar/sentence-structure/subordinate-clauses' },
								{ slug: 'learn/german/grammar/sentence-structure/verb-bracket' },
								{ slug: 'learn/german/grammar/sentence-structure/coordinating-conjunctions' },
								{ slug: 'learn/german/grammar/sentence-structure/subordinating-conjunctions' },
								{ slug: 'learn/german/grammar/sentence-structure/relative-clauses' },
								{ slug: 'learn/german/grammar/sentence-structure/infinitive-clauses' },
							],
						},
						{
							label: 'Function Words',
							items: [
								{ label: 'Overview', slug: 'learn/german/grammar/function-words' },
								{ slug: 'learn/german/grammar/function-words/negation' },
								{ slug: 'learn/german/grammar/function-words/nicht-vs-kein' },
								{ slug: 'learn/german/grammar/function-words/nicht-placement' },
								{ slug: 'learn/german/grammar/function-words/negative-pronouns-and-adverbs' },
							],
						},
						{
							label: 'Verbs',
							items: [
								{ label: 'Overview', slug: 'learn/german/grammar/verbs' },
								{ slug: 'learn/german/grammar/verbs/particle-verbs' },
								{ slug: 'learn/german/grammar/verbs/separable-verbs' },
								{ slug: 'learn/german/grammar/verbs/inseparable-prefix-verbs' },
								{ slug: 'learn/german/grammar/verbs/particle-verbs-vs-plain-verbs' },
								{ slug: 'learn/german/grammar/verbs/modal-verbs' },
								{ slug: 'learn/german/grammar/verbs/modal-verbs-meaning' },
								{ slug: 'learn/german/grammar/verbs/infinitive-with-zu' },
								{ slug: 'learn/german/grammar/verbs/infinitive-without-zu' },
								{ slug: 'learn/german/grammar/verbs/imperative' },
								{ slug: 'learn/german/grammar/verbs/choosing-time-form' },
								{ slug: 'learn/german/grammar/verbs/present-tense' },
								{ slug: 'learn/german/grammar/verbs/perfect-tense' },
								{ slug: 'learn/german/grammar/verbs/preterite' },
								{ slug: 'learn/german/grammar/verbs/present-vs-perfect-vs-preterite' },
								{ slug: 'learn/german/grammar/verbs/werden-future' },
								{ slug: 'learn/german/grammar/verbs/future-perfect' },
								{ slug: 'learn/german/grammar/verbs/present-tense-for-future' },
								{ slug: 'learn/german/grammar/verbs/choosing-future-forms' },
								{ slug: 'learn/german/grammar/verbs/active' },
								{ slug: 'learn/german/grammar/verbs/passive' },
								{ slug: 'learn/german/grammar/verbs/active-vs-passive' },
								{ slug: 'learn/german/grammar/verbs/konjunktiv-ii' },
								{ slug: 'learn/german/grammar/verbs/wuerde-forms' },
								{ slug: 'learn/german/grammar/verbs/haette-waere-koennte' },
								{ slug: 'learn/german/grammar/verbs/polite-requests' },
								{ slug: 'learn/german/grammar/verbs/reported-speech' },
								{ slug: 'learn/german/grammar/verbs/konjunktiv-i' },
							],
						},
						{
							label: 'Adjectives',
							items: [
								{ label: 'Overview', slug: 'learn/german/grammar/adjectives' },
								{ slug: 'learn/german/grammar/adjectives/adjective-endings' },
								{ slug: 'learn/german/grammar/adjectives/adjective-comparison' },
								{ slug: 'learn/german/grammar/adjectives/adverbs' },
								{ slug: 'learn/german/grammar/adjectives/adjectives-vs-adverbs' },
							],
						},
					],
				},
				{
					label: 'Common Mistakes',
					items: [
						{ label: 'Overview', slug: 'learn/german/common-mistakes' },
						{ slug: 'learn/german/common-mistakes/from-english' },
						{ slug: 'learn/german/common-mistakes/from-swedish' },
					],
				},

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
								{ slug: 'learn/english/grammar/sentence-structure/subordinate-clauses' },
								{ slug: 'learn/english/grammar/sentence-structure/relative-clauses' },
								{ slug: 'learn/english/grammar/sentence-structure/adverb-placement' },
							],
						},
						{
							label: 'Questions & Negation',
							items: [
								{ label: 'Overview', slug: 'learn/english/grammar/questions-negation' },
								{ slug: 'learn/english/grammar/questions-negation/questions-and-do-support' },
								{ slug: 'learn/english/grammar/questions-negation/negation' },
								{ slug: 'learn/english/grammar/questions-negation/any-vs-no' },
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
								{ slug: 'learn/english/grammar/nouns-articles/plural-nouns' },
								{ slug: 'learn/english/grammar/nouns-articles/possession' },
							],
						},
						{
							label: 'Pronouns & Roles',
							items: [
								{ label: 'Overview', slug: 'learn/english/grammar/pronouns-roles' },
								{ slug: 'learn/english/grammar/pronouns-roles/personal-pronouns' },
								{ slug: 'learn/english/grammar/pronouns-roles/possessive-pronouns' },
								{ slug: 'learn/english/grammar/pronouns-roles/reflexive-pronouns' },
								{ slug: 'learn/english/grammar/pronouns-roles/demonstrative-pronouns' },
								{ slug: 'learn/english/grammar/pronouns-roles/indefinite-pronouns' },
								{ slug: 'learn/english/grammar/pronouns-roles/sentence-roles-and-pronoun-case' },
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
