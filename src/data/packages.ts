/**
 * Packages with launch prices (Mr market, 2026-10-08). These three are the priced offers.
 * Included items come from docs/PACKAGES.md. "Ideal para" stays generic: the site speaks to any business.
 */
import { PRICES, type WaMessageKey } from "../config";

export interface Package {
  id: "landing" | "pagina-web" | "catalogo";
  step: string;
  name: string;
  promise: string;
  summary: string;
  idealPara: string[];
  incluyePrefix?: string;
  incluye: string[];
  price: { setup: string; monthly: string };
  wa: WaMessageKey;
  recommended?: boolean;
  note?: string;
}

export const PACKAGES: Package[] = [
  {
    id: "landing",
    step: "Una página",
    name: "Landing + campaña",
    promise: "Una página hecha para recibir a quien llega desde tus anuncios.",
    summary: "Una sola página, enfocada en una oferta y en un botón: escribirte por WhatsApp.",
    idealPara: ["Lanzar un producto o servicio", "Negocios que van a pautar en redes o Google"],
    incluye: [
      "Una página pensada para anuncios",
      "Diseño responsive",
      "Botón de WhatsApp",
      "Formulario básico",
      "Analytics para medir tus anuncios",
      "Dominio, hosting y SSL",
    ],
    price: PRICES.landing,
    wa: "landing",
    note: "¿Quieres que también manejemos los anuncios? Eso es Growth y se cotiza según el proyecto.",
  },
  {
    id: "pagina-web",
    step: "4–5 páginas",
    name: "Página web",
    promise: "Tu negocio completo en internet, conectado a WhatsApp y a Google.",
    summary: "Quién eres, qué haces y dónde estás, en 4 o 5 páginas, con tu ficha de Google lista.",
    idealPara: ["Negocios de servicios", "Negocios que quieren aparecer en Google"],
    incluye: [
      "4 a 5 páginas",
      "Diseño responsive",
      "Botón de WhatsApp",
      "Google Business",
      "Google Maps",
      "Formulario básico",
      "SEO básico",
      "Analytics básico",
      "Dominio, hosting y SSL",
    ],
    price: PRICES.paginaWeb,
    wa: "paginaWeb",
    recommended: true,
  },
  {
    id: "catalogo",
    step: "Productos",
    name: "Catálogo en línea",
    promise: "Tus productos o inmuebles en línea, actualizados por ti, con pedidos por WhatsApp.",
    summary: "Tú subes tus productos (o tus propiedades, si eres inmobiliaria) desde un panel sencillo y cada pedido o consulta llega a tu WhatsApp con la referencia.",
    idealPara: ["Negocios que venden productos", "Tiendas con catálogo", "Inmobiliarias con propiedades en arriendo o venta"],
    incluye: [
      "Panel para subir y editar tus productos o inmuebles",
      "Categorías de productos",
      "Ficha por producto: referencia, precio y disponibilidad",
      "Botón «Comprar por WhatsApp» en cada producto",
      "Mensaje automático con la referencia y el precio",
      "Dominio, hosting y SSL",
    ],
    price: PRICES.catalogo,
    wa: "catalogo",
  },
];

/** Larger corporate site. No approved price: quoted per project. */
export const PROFESIONAL = {
  id: "profesional",
  name: "Sitio Profesional",
  promise: "Un sitio corporativo más grande, con guías que te traen clientes desde Google.",
  incluye: [
    "Hasta 7–8 secciones o páginas",
    "Catálogo de servicios",
    "Galería y proyectos",
    "Preguntas frecuentes",
    "Blog / Guías",
    "SEO local y Search Console",
    "Google Business optimizado",
    "Integración de redes",
  ],
  price: PRICES.profesional,
  wa: "profesional" as WaMessageKey,
};
