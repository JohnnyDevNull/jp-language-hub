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
				{
					label: 'Grammar',
					items: [
						{ label: 'Overview', slug: 'grammar' },
						{
							label: 'Sentence Structure',
							items: [
								{
									label: 'Swedish',
									items: [
										{ slug: 'grammar/sentence-structure/swedish/basic-word-order' },
										{ slug: 'grammar/sentence-structure/swedish/v2' },
										{ slug: 'grammar/sentence-structure/swedish/inversion' },
										{ slug: 'grammar/sentence-structure/swedish/biff' },
										{ slug: 'grammar/sentence-structure/swedish/inte-placement' },
									],
								},
								{ label: 'German', slug: 'grammar/sentence-structure/german' },
								{ label: 'English', slug: 'grammar/sentence-structure/english' },
								{ label: 'Comparisons', slug: 'grammar/sentence-structure/comparisons' },
							],
						},
						{
							label: 'Nouns & Articles',
							items: [
								{
									label: 'Swedish',
									items: [
										{ slug: 'grammar/nouns-articles/swedish/en-ett' },
										{ slug: 'grammar/nouns-articles/swedish/noun-forms' },
										{ slug: 'grammar/nouns-articles/swedish/plural-overview' },
									],
								},
							],
						},
						{
							label: 'Adjectives & Adverbs',
							items: [
								{
									label: 'Swedish',
									items: [
										{ slug: 'grammar/adjectives-adverbs/swedish/agreement' },
										{ slug: 'grammar/adjectives-adverbs/swedish/adjective-comparison' },
									],
								},
							],
						},
						{
							label: 'Verbs',
							items: [
								{
									label: 'Swedish',
									items: [
										{ slug: 'grammar/verbs/swedish/verb-forms' },
										{ slug: 'grammar/verbs/swedish/present' },
										{ slug: 'grammar/verbs/swedish/preterite' },
										{ slug: 'grammar/verbs/swedish/perfect' },
										{ slug: 'grammar/verbs/swedish/verb-groups' },
									],
								},
							],
						},
						{
							label: 'Pronouns & Function Words',
							items: [
								{
									label: 'Swedish',
									items: [{ slug: 'grammar/pronouns-function-words/swedish/sin-sitt-sina' }],
								},
							],
						},
					],
				},
				{ slug: 'vocabulary' },
				{
					label: 'Language-specific Rules',
					items: [
						{ label: 'Overview', slug: 'language-specific-rules' },
						{ slug: 'language-specific-rules/swedish/en-ett' },
						{ slug: 'language-specific-rules/swedish/v2-biff' },
						{ slug: 'language-specific-rules/swedish/sin-sitt-sina' },
					],
				},
				{
					label: 'Common Mistakes',
					items: [
						{ label: 'Overview', slug: 'common-mistakes' },
						{ slug: 'common-mistakes/de-to-en' },
						{ slug: 'common-mistakes/de-to-sv' },
						{ slug: 'common-mistakes/en-to-sv' },
						{ slug: 'common-mistakes/false-friends' },
						{ slug: 'common-mistakes/direct-translation-errors' },
					],
				},
				{
					label: 'Cheat Sheets',
					items: [
						{ label: 'Overview', slug: 'cheat-sheets' },
						{ slug: 'cheat-sheets/swedish-en-ett-adjectives' },
						{ slug: 'cheat-sheets/swedish-v2-biff' },
						{ slug: 'cheat-sheets/swedish-noun-forms' },
						{ slug: 'cheat-sheets/swedish-verb-forms' },
					],
				},
				{ slug: 'practice' },
			],
		}),
	],
});
