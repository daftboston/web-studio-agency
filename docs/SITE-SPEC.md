# Site Spec: Filmika Website

## 1. Goals
- **Primary:** convince visitors to hire Filmika for their website.
- **Trust:** show that Filmika is a serious business with more than 3 years building websites, through real work, a clear process, real contact details, and ongoing care after launch.
- **Action:** move visitors to WhatsApp (primary CTA).

Base: the site is based on the owner's existing web developer portfolio, rebranded as Filmika.
- Repo: https://github.com/daftboston/NewPortfolio

Language: Spanish (Colombia). This document covers content only, not technical decisions.

## 2. Sitemap
```
Inicio
├── Servicios
├── Capacidades (demos interactivas)
├── Paquetes
├── Planes
├── Portafolio
├── Proceso
├── Nosotros
└── Contacto / WhatsApp
```
A floating WhatsApp button appears on every page.

## 3. Sections by page

### Inicio (home v2, 2026-10-14)
Structure taken from softingmarketingia.com (structure only, none of its copy). Design and motion: figma bro's `filmika-home-v2-spec-2026-10-14.md` + `filmika-home-v2-tokens-2026-10-14.css` (loaded after the Oct 8 base tokens, appended to `src/styles/global.css`). Light page with two dark bands (hero, final CTA).
1. **Sticky header:** film-strip logo (white on the dark hero, black on light), menu Inicio · Servicios · Planes · Trabajos · Contacto (anchors on the home), always-visible WhatsApp button. Floating WhatsApp bubble with the tooltip "¡Escríbenos!" (≥640px), ring pulse every 6s, off under reduced motion, hidden while an inline WhatsApp CTA is visible.
2. **Hero (dark band, static indigo glow):** pill badge "Páginas web para negocios" → H1 "Tu negocio merece una página que **trabaje por ti.**" (last words in the accent) → sub "Diseñamos páginas web claras, rápidas y conectadas a tu WhatsApp, para que tu negocio reciba más clientes." → buttons "Quiero mi página" (WhatsApp) and "Ver planes" (#planes). Then a non-numeric trust row: "Filmika tiene más de 3 años construyendo sitios web" (approved 2026-10-08), "Atención directa por WhatsApp", "Soporte cada mes", "Sitios rápidos y fáciles de usar".
3. **Trabajos (#trabajos):** 3-column grid of browser-frame cards with "Ver sitio": TruePhone (https://www.truephone.shop/). Tesla Partes is omitted until its live URL is confirmed. Three demos tagged "Demo" (veterinaria, clínica dental, óptica) use screenshots from the template previews; they are not online, so they show no link until `DEMO_URLS` in `src/config.ts` is filled. Demos are never deployed without the owner's OK.
4. **Cómo trabajamos (#proceso):** Diagnóstico → Boceto gratis → Construcción → Lanzamiento + Digital Care.
5. **Planes (#planes):** Landing + campaña $600.000 + $90.000/mes · **Página web** $900.000 + $90.000/mes ("Más popular", featured) · Catálogo en línea $1.500.000 + $130.000/mes. Note: "El pago inicial incluye el dominio y el primer mes de Digital Care." Each button opens wa.me/573214527399 with "Hola, me interesa el plan <nombre>".
6. **¿Necesitas algo a medida? (#servicios):** Growth (SEO local, anuncios en Google y Meta) + Automatización de clientes in plain Spanish (never headlined "CRM"): cada consulta capturada y respondida al instante, respuestas automáticas por WhatsApp, reservas en línea con recordatorios, solicitudes de reseñas en Google, todos tus clientes organizados en un solo lugar. Price: "Se cotiza". WhatsApp CTA.
7. **Por qué Filmika:** 4 icon cards: Entrega rápida · Conectada a tu WhatsApp · El dominio es tuyo · Soporte mensual (Digital Care).
8. **Final CTA band (dark, #contacto)** then the footer: services, links, Política de privacidad (Ley 1581), Términos, dsantoyop@gmail.com.

Hard rules: no invented stats, guarantees or dashboards; no personal names anywhere; no niche or city named in the copy (demo tags describe the example only).

The site speaks to **any business**. No copy targets a single niche or Bogotá; niches (clínicas dentales, inmobiliarias, veterinarias, servicios para el hogar, estética, talleres especializados, ópticas y oficinas contables/jurídicas; constructoras paused, 2026-10-09) are for outreach only. Where the site shows example businesses, use a varied mix (clínica dental, inmobiliaria, veterinaria, tienda), not only cars and construction.

### Servicios
- Tu página web · Google Business · Catálogo en línea · Digital Care · Growth (copy in BRAND.md).
- Each: outcome headline, one short paragraph, what is included, one link. Media alternates sides.

### Paquetes
Content source: [PACKAGES.md](PACKAGES.md).
- One card per priced package (launch prices, 2026-10-08):
  - **Landing + campaña**: una página hecha para recibir a quien llega desde tus anuncios. $600.000 + $90.000 al mes.
  - **Página web** (recomendado): 4–5 páginas, WhatsApp y Google Business. $900.000 + $90.000 al mes.
  - **Catálogo en línea**: panel para subir productos, pedidos por WhatsApp. $1.500.000 + $130.000 al mes.
- Below the cards: "El pago inicial incluye el dominio y el primer mes de Digital Care." and the COP / launch-price note.
- **Sitio Profesional** (larger corporate site, from the original Paquete 2): its own block, price "Se cotiza".
- Each card shows "Ideal para", the "Incluye" list and the price, plus its own WhatsApp CTA with a prefilled message:
  > Hola Filmika, quiero información sobre Landing + campaña.
  > Hola Filmika, quiero información sobre el paquete Página web.
  > Hola Filmika, quiero información sobre el Catálogo en línea.
  > Hola Filmika, quiero cotizar un sitio Profesional.
- **Prices on the site** (launch prices approved by Mr market, 2026-10-08): Landing + campaña $600.000, Página web $900.000, Catálogo en línea $1.500.000, each + Digital Care ($90.000 / $130.000 al mes). Sitio Profesional and Growth: "Se cotiza". All from `PRICES` in `src/config.ts`.

### Planes (planes y servicios)
Content source: [PLANS.md](PLANS.md).
- Visual path with 3 steps:
  ```
  Launch  →  Digital Care  →  Growth
  ```
  - **Launch:** pago inicial. Tu página, con el paquete que elijas.
  - **Digital Care:** mensualidad. Hosting, dominio, actualizaciones, cambios, fotos, productos, soporte, analytics, SEO básico, Google Business y reporte mensual.
  - **Growth:** cuando quieras crecer. SEO local, Google Ads, Meta Ads, contenido, automatizaciones, chatbot, agente de voz, campañas de WhatsApp y seguimiento de leads.
- Headline:
  > No desaparecemos después del lanzamiento.
- WhatsApp CTA:
  > Hola Filmika, quiero saber cómo funcionan los planes mensuales.
- **Prices:** shown on Paquetes, the Inicio preview, Planes and the FAQ, from `PRICES` in `src/config.ts`.

### Portafolio
- One immersive case study per real project: full-bleed panel with a large browser frame and a real phone screenshot, then name, outcome headline, tags, "El reto" and "Lo que construimos", and the live link (or "Enlace disponible pronto").
- Upcoming examples (from the template repos), framed as "Ejemplos para distintos tipos de negocio" and labeled "Demo · Próximamente".

### Proceso
1. Entendemos tu negocio.
2. Te mostramos cómo se vería.
3. Construimos y tú revisas.
4. Publicamos y seguimos contigo.
Each step ends with "Recibes: …". Delivery: unos 7 días desde que tenemos tu información.

### Nosotros
- Who Filmika is, based on the owner's portfolio bio, written in the company voice. No personal names.
- More than 3 years building websites (TruePhone, Tesla Partes, others), credited to Filmika.
- Differentiator: "Hablas directamente con quien diseña tu página." The team brings experience in architecture, mechanics and sales (no names).

### Capacidades (added 2026-10-08)
- Shows **what we can do**, not only past work. Second design reference: instrument.com (bold editorial type, full-bleed panels, scroll-driven moments) on top of the Apple-inspired tokens.
- Interactive demos, all labeled "Demo interactiva", with fictional businesses and illustrative CSS/SVG imagery, framed as "ejemplos para distintos tipos de negocio": phone mockup cycling example homepages (clínica dental, inmobiliaria, veterinaria, óptica/tienda); before/after slider (apartment before and after being painted and furnished); filterable catalog with live "Comprar por WhatsApp" message (Catálogo en línea; the same catalog also works for property listings); appointment form preview (veterinaria); scroll-driven parallax sample; our Lighthouse-100 build standard.
- Inicio gets a "Lo que podemos hacer" section linking to each demo.

### Contacto / WhatsApp
- Email: dsantoyop@gmail.com. WhatsApp number still pending.
- WhatsApp button with a prefilled message.
- Simple contact form (nombre, negocio, teléfono, mensaje).
- Real contact details (WhatsApp number, email, country).

## 4. Copy direction (Spanish samples)
Full copy direction lives in [BRAND.md](BRAND.md#copy-direction-mr-market-2026-10-08-with-the-owners-overrides).

**Hero**
> Tu negocio merece una página que trabaje por ti.
> Diseñamos páginas web claras, rápidas y conectadas a tu WhatsApp, para que tu negocio reciba más clientes.

**Differentiator**
> Hablas directamente con quien diseña tu página.

**Packages intro**
> Elige el paquete para tu negocio. Te ayudamos a decidir por WhatsApp.

**Plans intro**
> No desaparecemos después del lanzamiento. Cada mes cuidamos tu página para que siga trabajando por ti.

**Portfolio intro**
> Sitios que ya están trabajando.

**Close**
> Hablemos. Cuéntanos de tu negocio y te respondemos por WhatsApp con una recomendación clara, sin compromiso.

Rules: "tú", short sentences, no jargon, the only claim is "Filmika tiene más de 3 años construyendo sitios web", and no personal names (see BRAND.md). Motion and imagery references: [REFERENCES.md](REFERENCES.md).

## 5. Trust elements
- **Portfolio:** only real, live projects with working links.
- **Process:** clear 4-step process so the client knows what happens next.
- **Packages and plans:** clear options and ongoing care after launch.
- **Real contact:** real WhatsApp number, email, and city; no generic forms only.
- **Experience:** "Filmika tiene más de 3 años construyendo sitios web" shown in Inicio and Nosotros.
- No fake testimonials, logos, or metrics.

## 6. Primary CTA: WhatsApp
- Button text: "Hablemos por WhatsApp" (or "Escríbenos por WhatsApp").
- Placement: hero, each package card, Planes page, end of each page, and floating button.
- Default prefilled message:
  > Hola Filmika, vi tu página y quiero información sobre una página web para mi negocio.
