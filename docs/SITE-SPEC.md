# Site Spec: Filmika Website

## 1. Goals
- **Primary:** convince visitors to hire Filmika for their website.
- **Trust:** show that Filmika is a serious business with more than 3 years of experience, through real work, a clear process, real contact details, and ongoing care after launch.
- **Action:** move visitors to WhatsApp (primary CTA).

Base: the site is based on Daniel's web developer portfolio, rebranded as Filmika.
- Live: https://portfoliodanielsantoyo.netlify.app/
- Repo: https://github.com/daftboston/NewPortfolio

Language: Spanish (Colombia). This document covers content only, not technical decisions.

## 2. Sitemap
```
Inicio
├── Servicios
├── Paquetes
├── Planes
├── Portafolio
├── Proceso
├── Nosotros
└── Contacto / WhatsApp
```
A floating WhatsApp button appears on every page.

## 3. Sections by page

### Inicio
1. Hero: headline, subheadline, WhatsApp button.
2. Who we help: constructoras, talleres, ópticas.
3. Experience line (more than 3 years).
4. Packages preview: the 3 package cards (short version) linking to Paquetes.
5. Plans path: Launch → Digital Care → Growth, with "No desaparecemos después del lanzamiento".
6. Featured work: 2–3 projects from PORTFOLIO.md.
7. Process summary (4 steps).
8. Final CTA to WhatsApp.

### Servicios
- Página web para su negocio (diseño y publicación).
- Catálogo en línea (productos o servicios, con contacto por WhatsApp).
- Mantenimiento y actualizaciones (Digital Care).
- Links to Paquetes and Planes.

### Paquetes
Content source: [PACKAGES.md](PACKAGES.md).
- One card per package:
  - 🟢 **Presencia**: landing page profesional para existir en Internet.
  - 🔵 **Profesional**: sitio corporativo completo que genera tráfico orgánico.
  - 🟣 **Commerce**: Catálogo + Venta por WhatsApp.
- Each card shows: who it is for ("Ideal para"), the main sections, and the "Incluye" list.
- Each card has its own WhatsApp CTA with a prefilled message naming the package, for example:
  > Hola Filmika, quiero información sobre el Paquete Presencia.
  > Hola Filmika, quiero información sobre el Paquete Profesional.
  > Hola Filmika, quiero información sobre el Paquete Commerce.
- **No prices on the site for now** (pricing is defined by Mr market).

### Planes (planes y servicios)
Content source: [PLANS.md](PLANS.md).
- Visual path with 3 steps:
  ```
  Launch  →  Digital Care  →  Growth
  ```
  - **Launch:** pago inicial. Su página, con el paquete que elija.
  - **Digital Care:** mensualidad. Hosting, dominio, actualizaciones, cambios, fotos, productos, soporte, analytics, SEO básico, Google Business y reporte mensual.
  - **Growth:** cuando quiera crecer. SEO local, Google Ads, Meta Ads, contenido, automatizaciones, chatbot, agente de voz, campañas de WhatsApp y seguimiento de leads.
- Headline:
  > No desaparecemos después del lanzamiento.
- WhatsApp CTA:
  > Hola Filmika, quiero saber cómo funcionan los planes mensuales.
- **No prices on the site for now** (placeholders only, defined by Mr market).

### Portafolio
- Cards for each real project: image, short description, link to the live site.
- Niche demos (built from the template repos), labeled clearly as "Demo".

### Proceso
1. Conversamos sobre su negocio.
2. Le mostramos una propuesta.
3. Construimos su página.
4. Publicamos y le damos soporte cada mes.

### Nosotros
- Who Filmika is, based on Daniel's portfolio bio, written in the company voice.
- More than 3 years of experience.
- Focus on local businesses in Colombia.

### Contacto / WhatsApp
- WhatsApp button with a prefilled message.
- Simple contact form (nombre, negocio, teléfono, mensaje).
- Real contact details (WhatsApp number, email, city).

## 4. Copy direction (Spanish samples)
**Hero**
> Páginas web que traen clientes a su negocio.
> En Filmika creamos sitios serios y fáciles de usar para negocios en Colombia. Más de 3 años de experiencia.

**Trust line**
> Somos un equipo serio: trabajo real, proceso claro y atención directa por WhatsApp.

**Packages intro**
> Elija el paquete que mejor se adapta a su negocio. Le ayudamos a decidir por WhatsApp.

**Plans intro**
> No desaparecemos después del lanzamiento. Cada mes cuidamos su página para que siga trabajando por usted.

**Portfolio intro**
> Estos son algunos de los sitios que hemos construido.

**Final CTA**
> ¿Listo para que su negocio tenga una página que trabaje por usted? Escríbanos y le respondemos hoy.

Rules: "usted", short sentences, no jargon, no numbers other than "más de 3 años".

## 5. Trust elements
- **Portfolio:** only real, live projects with working links.
- **Process:** clear 4-step process so the client knows what happens next.
- **Packages and plans:** clear options and ongoing care after launch.
- **Real contact:** real WhatsApp number, email, and city; no generic forms only.
- **Experience:** "más de 3 años de experiencia" shown in Inicio and Nosotros.
- No fake testimonials, logos, or metrics.

## 6. Primary CTA: WhatsApp
- Button text: "Hablemos por WhatsApp" (or "Escríbanos por WhatsApp").
- Placement: hero, each package card, Planes page, end of each page, and floating button.
- Default prefilled message:
  > Hola Filmika, vi su página y quiero información sobre una página web para mi negocio.
