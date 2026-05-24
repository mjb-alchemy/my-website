import { defineCollection, z } from 'astro:content';

// Blog posts collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Illustrations collection
const illustrations = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    image: image(),
  }),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    metaDescription: z.string(),
    nav: z.array(z.object({
      href: z.string(),
      label: z.string(),
    })),
    hero: z.object({
      eyebrow: z.string(),
      tagline: z.string(),
      body: z.array(z.string()),
      mark: z.string(),
    }),
    dictionary: z.object({
      title: z.string(),
      pronunciation: z.string(),
      script: z.string(),
      definitionLabel: z.string(),
      definition: z.string(),
    }),
    photoSlots: z.array(z.object({
      label: z.string(),
      caption: z.string(),
    })),
    intro: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      body: z.array(z.string()),
    }),
    sections: z.array(z.object({
      eyebrow: z.string(),
      headline: z.string(),
      body: z.array(z.string()),
      phone: z.object({
        kicker: z.string(),
        prompt: z.string(),
        translation: z.string(),
        action: z.string(),
        state: z.string(),
      }),
    })),
    phoneTabs: z.array(z.string()),
    prompts: z.object({
      headline: z.string(),
      categories: z.array(z.object({
        label: z.string(),
        questions: z.array(z.string()),
      })),
    }),
    proofHeading: z.string(),
    features: z.array(z.object({
      label: z.string(),
      text: z.string(),
    })),
    texture: z.array(z.string()),
    photoCredit: z.string(),
    cta: z.object({
      gujarati: z.string(),
      english: z.string(),
      body: z.string(),
      email: z.string(),
    }),
  }),
});

export const collections = {
  blog,
  illustrations,
  projects,
};
