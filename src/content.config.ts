import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Aves',
      'Peixes e Frutos do Mar',
      'Carne Suína',
      'Carne Bovina',
      'Vegetariano',
      'Pães e Massas',
      'Sobremesas',
      'Receitas'
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    servings: z.string().optional()
  })
});

export const collections = { recipes };
