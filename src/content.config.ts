import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import {
	docsMetadataSchema,
	swedishAdjectiveSchema,
	swedishNounSchema,
	swedishVerbSchema,
} from './content/schemas';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({ extend: docsMetadataSchema }),
	}),
	vocabulary: defineCollection({
		loader: file('./src/data/vocabulary.json'),
		schema: swedishNounSchema,
	}),
	verbs: defineCollection({
		loader: file('./src/data/verbs.json'),
		schema: swedishVerbSchema,
	}),
	adjectives: defineCollection({
		loader: file('./src/data/adjectives.json'),
		schema: swedishAdjectiveSchema,
	}),
};
