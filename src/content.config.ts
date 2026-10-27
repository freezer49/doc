import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { z } from "astro/zod";

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema({
    // Champs propres aux ressources et aux événements, en plus de ceux de Starlight.
    extend: z.object({
      category: z.enum(["image", "video", "gif", "audio", "outil"]).optional(),
      date: z.coerce.date().optional(),
      lieu: z.string().optional(),
    }),
  }),
});

export const collections = { docs };
