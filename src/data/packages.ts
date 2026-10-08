/** Package content from docs/PACKAGES.md (Spanish). "Ideal para" kept generic: the site speaks to any business. No prices. */
import { PRICES, type WaMessageKey } from "../config";

export interface Package {
  id: "presencia" | "profesional" | "commerce";
  step: string;
  name: string;
  promise: string;
  summary: string;
  idealPara: string[];
  secciones: string[];
  incluyePrefix?: string;
  incluye: string[];
  price: string;
  wa: WaMessageKey;
  recommended?: boolean;
}

export const PACKAGES: Package[] = [
  {
    id: "presencia",
    step: "Paquete 1",
    name: "Presencia",
    promise: "Landing page profesional para existir en Internet.",
    summary: "Para negocios pequeños que simplemente necesitan existir profesionalmente en Internet.",
    idealPara: ["Negocios pequeños", "Independientes", "Negocios que recién llegan a internet"],
    secciones: ["Hero", "Empresa", "Servicios", "Galería", "Ubicación", "Contacto"],
    incluye: [
      "Diseño responsive",
      "Dominio",
      "Hosting",
      "SSL",
      "Google Maps",
      "WhatsApp",
      "Formulario básico",
      "SEO básico",
      "Google Business básico",
      "Analytics básico",
    ],
    price: PRICES.presencia,
    wa: "presencia",
  },
  {
    id: "profesional",
    step: "Paquete 2",
    name: "Profesional",
    promise: "Sitio corporativo completo que genera tráfico orgánico.",
    summary: "Un sitio corporativo completo, no una landing.",
    idealPara: ["Negocios que quieren aparecer en Google y recibir más contactos"],
    secciones: ["Inicio", "Empresa", "Servicios", "Proyectos / Trabajos", "Guías / Blog", "Preguntas frecuentes", "Contacto"],
    incluyePrefix: "Todo lo del Paquete 1, más:",
    incluye: [
      "Hasta 7–8 secciones/páginas",
      "Catálogo de servicios",
      "Galería",
      "Testimonios",
      "FAQ",
      "Blog / Guías",
      "Formularios",
      "SEO local",
      "Google Business optimization",
      "Analytics",
      "Search Console",
      "Integración de redes",
      "CTA estratégicos",
      "Optimización móvil",
    ],
    price: PRICES.profesional,
    wa: "profesional",
    recommended: true,
  },
  {
    id: "commerce",
    step: "Paquete 3",
    name: "Commerce",
    promise: "Catálogo + Venta por WhatsApp.",
    summary: "Tus productos en línea y cada pedido directo a tu WhatsApp, sin montar una tienda complicada.",
    idealPara: ["Negocios que venden productos", "Tiendas con catálogo", "Negocios con referencias y repuestos"],
    secciones: ["Inicio", "Productos", "Servicios", "Guías", "Nosotros", "Contacto"],
    incluyePrefix: "Catálogo de productos con:",
    incluye: [
      "Categorías de productos",
      "Ficha por producto: referencia, precio y disponibilidad",
      "Botón «Comprar por WhatsApp» en cada producto",
      "Mensaje automático con la referencia y el precio",
      "Servicios, guías, nosotros y contacto",
    ],
    price: PRICES.commerce,
    wa: "commerce",
  },
];

/**
 * Comparison table rows. PACKAGES.md defines Profesional as "Todo lo del Paquete 1, más: …",
 * so the table compares Presencia vs Profesional exactly. Commerce has no documented
 * "Incluye" list yet, so it is explained separately instead of guessing.
 */
const presencia = PACKAGES[0].incluye;
const profesional = PACKAGES[1].incluye;
export const COMPARISON: { label: string; presencia: boolean; profesional: boolean }[] = [
  ...presencia.map((label) => ({ label, presencia: true, profesional: true })),
  ...profesional.filter((l) => !presencia.includes(l)).map((label) => ({ label, presencia: false, profesional: true })),
];
