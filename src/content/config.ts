import { defineCollection, z } from 'astro:content';

// Work / case-study collection.
// Source of truth: blueprint/asset-spec.md and blueprint/structural.md.
const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    productionHouse: z.string(),
    distributor: z.string().optional(),
    role: z.string(),
    year: z.string(),               // string to allow "2024–ongoing"
    location: z.string().optional(),
    lane: z.enum(['natural-history', 'fixing', 'commercial']),
    heroImage: z.string(),          // path under /img/
    heroAlt: z.string(),
    cardImage: z.string().optional(),  // distinct card thumbnail (Work index + homepage proof strip)
    cardAlt: z.string().optional(),
    videoEmbed: z.string().url().optional(),       // Vimeo or YouTube URL
    bodyImages: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).max(5).optional(),
    pressLinks: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).optional(),
    awardFraming: z.string().optional(),   // "Production won 2021 Creative Arts Emmy for Outstanding Cinematography for a Nonfiction Program"
    featured: z.boolean().default(false),  // appears in homepage Section 2 proof strip
    featuredOrder: z.number().optional(),
    order: z.number().optional(),          // ordering on Work index
    summary: z.string(),                   // 1-line summary for index card meta
  }),
});

export const collections = { work };
