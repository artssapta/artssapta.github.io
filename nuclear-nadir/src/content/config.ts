---
import { z, defineCollection } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    blocks: z.array(z.discriminatedUnion('type', [
      z.object({
        type: z.literal('hero'),
        title: z.string(),
        subtitle: z.string().optional(),
        color: z.string().optional(),
      }),
      z.object({
        type: z.literal('about'),
        title: z.string(),
        text: z.string(),
        image: z.string(),
        imageSide: z.enum(['left', 'right']).optional(),
      }),
      z.object({
        type: z.literal('events'),
        title: z.string(),
        flyerImage: z.string(),
        color: z.string().optional(),
      }),
      z.object({
        type: z.literal('team-grid'),
        title: z.string().optional(),
      }),
      z.object({
        type: z.literal('google-form'),
        url: z.string(),
        height: z.string().optional(),
      }),
    ])),
  }),
});

const team = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		role: z.string(),
		photo: z.string().optional(),
		order: z.number().optional(),
	}),
});

export const collections = { team, pages };
