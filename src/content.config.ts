import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
const results = defineCollection({
  loader: file("src/data/results.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    eventType: z.string().nullable(),
    urlToEvent: z.string(),
    name: z.string(),
  }),
});
export const collections = { results };
