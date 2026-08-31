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
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			sidebar: [
				{ label: 'Home', link: '/' },
				{ slug: 'grammar' },
				{ slug: 'vocabulary' },
				{ slug: 'language-specific-rules' },
				{ slug: 'common-mistakes' },
				{ slug: 'cheat-sheets' },
				{ slug: 'practice' },
			],
		}),
	],
});
