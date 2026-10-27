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
      title: "Ma doc",
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
        { label: "Ressources", items: [{ autogenerate: { directory: "ressources" } }] },
        { label: "Événements", items: [{ autogenerate: { directory: "evenements" } }] },
      ],
    }),
  ],
});
