// @ts-check

import starlight from "@astrojs/starlight";
import starlightCatppuccin from "@catppuccin/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://freezer49.github.io",
  base: "/doc/",
  integrations: [
    starlight({
      title: "La doc de cloclo",
      defaultLocale: "root",
      locales: {
        root: { label: "Français", lang: "fr" },
      },
      plugins: [
        starlightCatppuccin({
          dark: { flavor: "macchiato", accent: "sky" },
          light: { flavor: "latte", accent: "sky" },
        }),
      ],
      sidebar: [
        { label: "Guides", items: [{ autogenerate: { directory: "guides" } }] },
        {
          label: "Langages",
          items: [
            {
              label: "JavaScript",
              collapsed: true,
              items: [{ autogenerate: { directory: "langages/javascript" } }],
            },
          ],
        },
        {
          label: "Bases de données",
          items: [
            {
              label: "SQL",
              collapsed: true,
              items: [{ autogenerate: { directory: "bases-de-donnees/sql" } }],
            },
          ],
        },
        {
          label: "Algorithmes",
          items: [
            {
              label: "Tri",
              collapsed: true,
              items: [{ autogenerate: { directory: "algorithmes/tri" } }],
            },
          ],
        },
        {
          label: "Tests",
          items: [
            {
              label: "Java (JUnit / Mockito)",
              collapsed: true,
              items: [{ autogenerate: { directory: "tests/java" } }],
            },
          ],
        },
        {
          label: "Outils",
          items: [
            {
              label: "Git",
              collapsed: true,
              items: [{ autogenerate: { directory: "outils/git" } }],
            },
            "outils/raccourcis",
          ],
        },
        {
          label: "Ressources",
          items: [{ autogenerate: { directory: "ressources" } }],
        },
        {
          label: "Événements",
          items: [{ autogenerate: { directory: "evenements" } }],
        },
      ],
    }),
  ],
});
