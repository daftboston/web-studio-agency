/**
 * Filmika site config: the ONE place for contact details, prices and WhatsApp messages.
 *
 * Every value marked PLACEHOLDER must be replaced before the site goes live.
 * Every wa.me link on the site is built from `CONTACT.whatsappNumber` + `WA_MESSAGES`.
 */

export const SITE = {
  name: "Filmika",
  tagline: "Filmika – Páginas web para negocios",
  /** Production URL (Netlify project "filmika", live since 2026-10-08). Used for canonical URLs, Open Graph and the sitemap. Change it here when a custom domain is set. */
  url: "https://filmika.netlify.app",
  locale: "es_CO",
  lang: "es-CO",
  defaultDescription:
    "Diseñamos páginas web claras, rápidas y conectadas a tu WhatsApp, para que tu negocio reciba más clientes. Filmika tiene más de 3 años construyendo sitios web.",
  /**
   * The only number allowed in the copy (docs/BRAND.md), credited to the brand.
   * No personal names anywhere on the site (owner's decision, 2026-10-08).
   */
  experience: "Filmika tiene más de 3 años construyendo sitios web, como TruePhone y Tesla Partes.",
} as const;

export const CONTACT = {
  /** WhatsApp number in international format, digits only (57 + 10 digits). Confirmed 2026-10-08. */
  whatsappNumber: "573214527399",
  /** How the number is shown on the page. */
  whatsappDisplay: "+57 321 452 7399",
  /** Contact email (confirmed by the owner, 2026-10-08). */
  email: "dsantoyop@gmail.com",
  /** Shown on Contacto and in the footer. Country only: the site speaks to any business (copy direction, 2026-10-08). */
  city: "Colombia",
} as const;

/**
 * Launch prices approved by Mr market (2026-10-08): current entry prices for the first clients, in COP.
 * Not estimates. The setup price includes the domain and the first month of Digital Care.
 * Only these three offers have a price. Profesional (larger corporate site) and Growth are quoted.
 */
export const PRICES = {
  landing: { setup: "$600.000", monthly: "$90.000" },
  paginaWeb: { setup: "$900.000", monthly: "$90.000" },
  catalogo: { setup: "$1.500.000", monthly: "$130.000" },
  profesional: "Se cotiza",
  growth: "Se cotiza según el proyecto",
  launchFrom: "Desde $600.000",
  digitalCareFrom: "Desde $90.000 al mes",
  /** Shown under every price list. */
  includes: "El pago inicial incluye el dominio y el primer mes de Digital Care.",
  note: "Precios de lanzamiento para los primeros clientes, en pesos colombianos (COP).",
} as const;

/** Prefilled WhatsApp messages, copied from docs/SITE-SPEC.md. */
export const WA_MESSAGES = {
  default: "Hola Filmika, vi tu página y quiero información sobre una página web para mi negocio.",
  landing: "Hola Filmika, quiero información sobre Landing + campaña.",
  paginaWeb: "Hola Filmika, quiero información sobre el paquete Página web.",
  catalogo: "Hola Filmika, quiero información sobre el Catálogo en línea.",
  profesional: "Hola Filmika, quiero cotizar un sitio Profesional.",
  planes: "Hola Filmika, quiero saber cómo funcionan los planes mensuales.",
  servicios: "Hola Filmika, quiero saber qué servicio le sirve a mi negocio.",
} as const;

export type WaMessageKey = keyof typeof WA_MESSAGES;

/** Build a wa.me link from the config number and a message (key or free text). */
export function waLink(message: WaMessageKey | string = "default"): string {
  const text = message in WA_MESSAGES ? WA_MESSAGES[message as WaMessageKey] : message;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const NAV_LINKS = [
  { href: "/servicios/", label: "Servicios" },
  { href: "/capacidades/", label: "Capacidades" },
  { href: "/paquetes/", label: "Paquetes" },
  { href: "/planes/", label: "Planes" },
  { href: "/portafolio/", label: "Portafolio" },
  { href: "/proceso/", label: "Proceso" },
  { href: "/nosotros/", label: "Nosotros" },
] as const;
