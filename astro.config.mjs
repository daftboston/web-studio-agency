// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/config.ts";

// Static output (default). Netlify serves the `dist/` folder.
export default defineConfig({
  site: SITE.url,
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !page.includes("/gracias/") })],
  vite: { plugins: [tailwindcss()] },
});
