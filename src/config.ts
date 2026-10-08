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
  /** PLACEHOLDER: WhatsApp number in international format, digits only (57 + 10 digits). */
  whatsappNumber: "57XXXXXXXXXX",
  /** PLACEHOLDER: how the number is shown on the page. */
  whatsappDisplay: "+57 XXX XXX XXXX",
  /** Contact email (confirmed by the owner, 2026-10-08). */
  email: "dsantoyop@gmail.com",
  /** Shown on Contacto and in the footer. Country only: the site speaks to any business (copy direction, 2026-10-08). */
  city: "Colombia",
} as const;

/**
 * PLACEHOLDER prices. Pricing is defined by Mr market (docs/PACKAGES.md, docs/PLANS.md).
 * Until then every price shows "Cotiza por WhatsApp". Replace a value with e.g. "Desde $___".
 */
export const PRICES = {
  presencia: "Cotiza por WhatsApp",
  profesional: "Cotiza por WhatsApp",
  commerce: "Cotiza por WhatsApp",
  launch: "Cotiza por WhatsApp",
  digitalCare: "Cotiza por WhatsApp",
  growth: "Cotiza por WhatsApp",
} as const;

/** Prefilled WhatsApp messages, copied from docs/SITE-SPEC.md. */
export const WA_MESSAGES = {
  default: "Hola Filmika, vi tu página y quiero información sobre una página web para mi negocio.",
  presencia: "Hola Filmika, quiero información sobre el Paquete Presencia.",
  profesional: "Hola Filmika, quiero información sobre el Paquete Profesional.",
  commerce: "Hola Filmika, quiero información sobre el Paquete Commerce.",
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
