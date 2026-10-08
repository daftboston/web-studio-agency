/** Portfolio from docs/PORTFOLIO.md. Only real projects. No invented clients or metrics. */
import type { ImageMetadata } from "astro";
import truephone from "../assets/portfolio/truephone.webp";
import teslaPartes from "../assets/portfolio/tesla-partes.webp";
import truephonePhone from "../assets/portfolio/truephone-phone.webp";
import teslaPartesPhone from "../assets/portfolio/tesla-partes-phone.webp";

export interface Project {
  id: string;
  name: string;
  /** Outcome headline for cards (Mr market's pattern: "Nombre: qué es y qué resuelve"). */
  headline: string;
  tags: string[];
  /** One sentence: what was built. Shown under the name, like a case-study title. */
  summary: string;
  /** The job, in the client's words of the problem. No numbers. */
  brief: string;
  /** Concrete pieces that were built. Facts only. */
  built: string[];
  description: string;
  /** null = URL still pending (PLACEHOLDER). The tile then shows no live link. */
  url: string | null;
  image: ImageMetadata;
  alt: string;
  /** Real phone screenshot of the same project, shown in a phone frame. */
  phone: { src: ImageMetadata; alt: string };
}

export const PROJECTS: Project[] = [
  {
    id: "truephone",
    name: "TruePhone",
    headline: "Marketplace de iPhones usados con revisión de cada anuncio.",
    tags: ["Web App", "Marketplace", "Desarrollo"],
    summary: "Un marketplace para comprar y vender iPhones usados en Colombia, con cada anuncio revisado antes de publicarse.",
    brief:
      "Quien compra un iPhone usado por internet necesita saber que el anuncio es real y que su pago está protegido. El sitio responde esas dudas antes de que aparezcan: cada anuncio se revisa y cada compra queda respaldada.",
    built: [
      "Publicación de anuncios con revisión manual antes de salir",
      "Validación de IMEI y de que quien vende tiene el teléfono",
      "Compra con pago protegido hasta que el comprador confirma que el teléfono está bien",
      "Búsqueda, flujo para vender y navegación tipo app en el celular",
    ],
    description: "Marketplace para comprar y vender iPhones verificados, con revisión manual de cada anuncio.",
    url: "https://www.truephone.shop/",
    image: truephone,
    alt: "Página de inicio de TruePhone: «Compra inteligente. Compra TruePhone.»",
    phone: { src: truephonePhone, alt: "TruePhone en el celular: inicio con los botones Explorar iPhones y Vender, y los sellos de revisión manual y compra garantizada." },
  },
  {
    id: "tesla-partes",
    name: "Tesla Partes",
    headline: "E-commerce de partes y accesorios compatibles con Tesla en Colombia.",
    tags: ["E-commerce", "Catálogo", "Desarrollo"],
    summary: "Una tienda de partes y accesorios compatibles con Tesla Model 3 y Model Y, con precios en pesos.",
    brief:
      "Quien busca una pieza para su Tesla necesita saber que sirve para su modelo y ver el precio en pesos, sin escribirle a nadie primero. El catálogo responde eso antes de la conversación.",
    built: [
      "Entrada por modelo: Model 3 y Model Y, con el año",
      "Piezas separadas por interior y exterior",
      "Precio en pesos con IVA incluido en cada pieza",
      "Filtro por año del vehículo",
    ],
    description: "Catálogo de piezas y accesorios para Tesla Model 3 y Model Y, filtrado por modelo y año.",
    /** PLACEHOLDER: Tesla Partes live URL pending from the owner (docs/PORTFOLIO.md). */
    url: null,
    image: teslaPartes,
    alt: "Catálogo de Tesla Partes con un Model 3 y piezas señaladas con su precio.",
    phone: { src: teslaPartesPhone, alt: "Tesla Partes en el celular: Model 3 exterior, selector de año y piezas con precio e IVA incluido." },
  },
];

/** Example demos (template repos exist, demos not built yet → "Próximamente").
 * Framed generically: they are examples for different kinds of business, not the site's target list. */
export const DEMOS = [
  {
    id: "proyectos",
    niche: "Negocios que muestran su trabajo",
    name: "Ejemplo: proyectos y antes/después",
    text: "Trabajos terminados con antes y después, servicios y un proceso claro de principio a fin.",
  },
  {
    id: "citas",
    niche: "Negocios que agendan citas",
    name: "Ejemplo: agenda por WhatsApp",
    text: "Servicios, ubicación con mapa y un botón principal para reservar una cita por WhatsApp.",
  },
  {
    id: "catalogo",
    niche: "Negocios que venden productos",
    name: "Ejemplo: catálogo con pedidos",
    text: "Catálogo con filtros y un botón de WhatsApp en cada producto, con la referencia ya escrita.",
  },
] as const;
