/** Portfolio from docs/PORTFOLIO.md. Only real projects with working links. */
import type { ImageMetadata } from "astro";
import truephone from "../assets/portfolio/truephone.webp";
import teslaPartes from "../assets/portfolio/tesla-partes.webp";

export interface Project {
  name: string;
  description: string;
  /** null = URL still pending (PLACEHOLDER). The tile then shows no live link. */
  url: string | null;
  image: ImageMetadata;
  alt: string;
}

export const PROJECTS: Project[] = [
  {
    name: "TruePhone",
    description: "Marketplace para comprar y vender iPhones verificados, con revisión manual de cada anuncio.",
    url: "https://www.truephone.shop/",
    image: truephone,
    alt: "Página de inicio de TruePhone: «Compra inteligente. Compra TruePhone.»",
  },
  {
    name: "Tesla Partes",
    description: "Catálogo de piezas y accesorios para Tesla Model 3 y Model Y: toque un punto del auto y vea el precio.",
    /** PLACEHOLDER: Tesla Partes live URL pending from the owner (docs/PORTFOLIO.md). */
    url: null,
    image: teslaPartes,
    alt: "Catálogo de Tesla Partes con un Model 3 y piezas señaladas con su precio.",
  },
];

/** Niche demos: template repos exist, demos not built yet → "Próximamente". */
export const DEMOS = [
  {
    id: "constructora",
    niche: "Constructoras",
    name: "Demo constructora",
    text: "Proyectos con antes y después, servicios y el proceso: visita, diseño, obra y entrega.",
  },
  {
    id: "taller",
    niche: "Talleres",
    name: "Demo taller",
    text: "Servicios, ubicación con mapa y un botón principal: «Agenda tu revisión».",
  },
  {
    id: "optica",
    niche: "Ópticas",
    name: "Demo óptica",
    text: "Catálogo de monturas con filtros y un botón de WhatsApp en cada referencia.",
  },
] as const;
