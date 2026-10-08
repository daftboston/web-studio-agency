# Filmika

**Filmika – Páginas web para negocios**

## Purpose
This repo holds the Filmika marketing website (Astro + Tailwind CSS, deployed on Netlify) and its planning docs in [docs/](docs/). The site has one job: be a **commercial page that motivates visitors to hire Filmika for their website and builds real trust**. It is also our business card for outreach.

Core message: Filmika is a serious business with more than 3 years building websites (TruePhone, Tesla Partes, and others), and **we don't disappear after launch** ("No desaparecemos después del lanzamiento").

The site speaks to **any business** (copy direction, 2026-10-08). Outreach niches (Colombia, starting in Bogotá: constructoras, talleres, ópticas) are used only for prospect mockups and lists, not as site copy.

## Business model
Initial fee plus monthly fee, not a one-time page:
**Launch** (one of the 3 packages) → **Digital Care** (monthly) → **Growth** (add-ons). See [docs/PLANS.md](docs/PLANS.md). Prices are placeholders.

## Status
- Planning docs: done.
- Name: **chosen, Filmika**.
- Packages: defined (Presencia, Profesional, Commerce). Prices pending.
- Plans: defined (Launch, Digital Care, Growth). Prices pending.
- Niche template repos: created, spec only (see below).
- Website: **v1 live at https://filmika.netlify.app** (Astro + Tailwind v4, static, Netlify), deployed from branch `site-v1` on 2026-10-08. Placeholders listed below are still live and must be replaced.

## Website

### Stack
- [Astro](https://astro.build) 7 (static output) + [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite`
- Inter Variable, self-hosted with `@fontsource-variable/inter` (no Google Fonts request)
- Design: Apple-inspired system by figma bro (accent `#3d3ad6`, WhatsApp green `#1a7f45`, warm neutrals). Tokens live in `src/styles/global.css`.
- No animation libraries: IntersectionObserver reveals and image zooms (visible without JS), CSS-only headline masks and scroll-driven effects (written as longhands so the minifier cannot fold `animation-timeline` into the shorthand), native View Transitions, `prefers-reduced-motion` respected. See docs/REFERENCES.md.
- `@astrojs/sitemap` builds `sitemap-index.xml`; `robots.txt` is generated from the site URL.
- Contact form uses Netlify Forms (`data-netlify`, honeypot).

### Requirements
- Node.js **22.12 or newer** (Astro 7 requirement; `.nvmrc` says 22)
- npm

### Run locally
```bash
npm install
npm run dev        # http://localhost:4321
```

### Build
```bash
npm run build      # outputs static files to dist/
npm run preview    # serves dist/ locally
```

### Deploy on Netlify
`netlify.toml` already sets everything:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | `22` (`NODE_VERSION`) |

Live site: **https://filmika.netlify.app** (Netlify project `filmika`, site ID `8eba5e7d-92b1-4754-ab93-590ff52a2315`).

The project is deployed with the Netlify CLI (it is **not** connected to GitHub yet, so pushing does not deploy). To redeploy:

```bash
npm install -g netlify-cli          # once
netlify login                       # once
netlify link --id 8eba5e7d-92b1-4754-ab93-590ff52a2315   # once per clone
netlify deploy --build --prod
```

Notes:
- Form detection is enabled on the project, so Netlify picks up the `contacto` form on each deploy (see **Forms** in the Netlify dashboard and set up email notifications there).
- Optional: connect the repo in Netlify (**Project configuration → Build & deploy → Link repository**) to deploy on every push to `main`. Build settings come from `netlify.toml`.
- When a custom domain is ready, add it in Netlify and update `SITE.url` in `src/config.ts` (canonical URLs, Open Graph, sitemap and robots.txt use it).

### Where to edit
| What | File |
|---|---|
| WhatsApp number, email, city, prices, WhatsApp messages, site URL | `src/config.ts` (the only place) |
| Packages (Presencia, Profesional, Commerce) | `src/data/packages.ts` (from docs/PACKAGES.md) |
| Plans (Launch, Digital Care, Growth) and the 4-step process | `src/data/plans.ts` (from docs/PLANS.md, SITE-SPEC.md) |
| Portfolio projects and demos | `src/data/portfolio.ts` + images in `src/assets/portfolio/` |
| Colors, type, spacing, motion | `src/styles/global.css` |
| Pages | `src/pages/*.astro` |
| Interactive demos (Capacidades page + "Lo que podemos hacer" on Inicio) | `src/components/demos/*.astro` (vanilla JS/CSS, lazy-initialised) |

Every `wa.me` link is built by `waLink()` in `src/config.ts`, so changing the number there updates the whole site.

### Already set
- Email: `dsantoyop@gmail.com` (`CONTACT.email`)
- Site URL: `https://filmika.netlify.app` (`SITE.url`; change it when a custom domain exists)

### Placeholders to replace (the site is live, so these are visible now)
- `CONTACT.whatsappNumber` = `57XXXXXXXXXX` and `CONTACT.whatsappDisplay`
- `CONTACT.city` = `Bogotá, Colombia` (confirm)
- `PRICES.*` = "Cotiza por WhatsApp" (prices pending from Mr market)
- Tesla Partes live URL (`url: null` in `src/data/portfolio.ts`; the tile shows "Enlace disponible pronto")
- Niche demos (constructora, taller, óptica) are shown as "Próximamente"
- Logo: text wordmark + simple "F" favicon until a real logo exists
- `/privacidad/` is a short draft; review it (Ley 1581 de 2012) before launch

## Documents
| File | Contents |
|---|---|
| [docs/BRAND.md](docs/BRAND.md) | Name, tagline, tone of voice, sample Spanish copy |
| [docs/SITE-SPEC.md](docs/SITE-SPEC.md) | Goals, sitemap, sections, copy direction, trust elements, CTA |
| [docs/PACKAGES.md](docs/PACKAGES.md) | The 3 Filmika packages: Presencia, Profesional, Commerce |
| [docs/PLANS.md](docs/PLANS.md) | Recurring model: Launch → Digital Care → Growth |
| [docs/PORTFOLIO.md](docs/PORTFOLIO.md) | Real projects, pending items, niche demos |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Phases and the ongoing prospect mockups track |
| [docs/REFERENCES.md](docs/REFERENCES.md) | Design references (Clay): layout, copy, motion and imagery we adopted, and why |

## Template repos (demo bases, spec only)
- [filmika-template-constructora](https://github.com/daftboston/filmika-template-constructora)
- [filmika-template-taller](https://github.com/daftboston/filmika-template-taller)
- [filmika-template-optica](https://github.com/daftboston/filmika-template-optica)

## Language
Docs are in English. Site copy samples and package content are in Spanish, because the site is for Colombian clients.
