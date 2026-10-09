/** Services (Mr market's copy direction, 2026-10-08). One short outcome paragraph each, then what is included. */
import { PLANS } from "./plans";

export interface Service {
  id: string;
  n: string;
  name: string;
  /** One-line promise, used as the headline on Servicios. */
  title: string;
  text: string;
  includes: string[];
  link: { href: string; label: string };
}

export const SERVICES: Service[] = [
  {
    id: "pagina-web",
    n: "01",
    name: "Tu página web",
    title: "Tu presencia en internet empieza aquí.",
    text: "Una página que muestra quién eres, qué haces y dónde estás, y que deja a tus clientes a un clic de escribirte por WhatsApp.",
    includes: ["Diseño pensado primero para el celular", "Textos claros sobre lo que haces", "Dominio, hosting y SSL", "Botón de WhatsApp y mapa"],
    link: { href: "/paquetes/", label: "Ver paquetes" },
  },
  {
    id: "google-business",
    n: "02",
    name: "Google Business",
    title: "Aparece cuando te buscan cerca.",
    text: "Dejamos lista tu ficha de Google con horarios, fotos y ubicación, conectada a tu página y a tu WhatsApp, para que quien busca lo que ofreces te encuentre y te contacte.",
    includes: ["Ficha de Google creada o actualizada", "Horarios, fotos y servicios", "Ubicación en Google Maps", "Enlace a tu página y a WhatsApp"],
    link: { href: "/paquetes/", label: "Ver qué paquete lo incluye" },
  },
  {
    id: "catalogo",
    n: "03",
    name: "Catálogo en línea",
    title: "Tus productos, actualizados por ti.",
    text: "Tú mismo subes tus productos, fotos y precios, o tus inmuebles si eres una inmobiliaria. Cada cliente te escribe por WhatsApp con la referencia ya escrita, sin carrito ni pasarela de pagos.",
    includes: ["Categorías y ficha por producto", "Precios y disponibilidad visibles", "Pedido por WhatsApp con la referencia", "Panel sencillo para subir productos"],
    link: { href: "/capacidades/#demo-catalogo", label: "Probar la demo de catálogo" },
  },
  {
    id: "digital-care",
    n: "04",
    name: "Digital Care",
    title: "No desaparecemos después del lanzamiento.",
    text: "Cada mes cuidamos tu página: hosting, dominio, cambios, fotos, productos y soporte. Tú solo nos escribes por WhatsApp.",
    includes: ["Hosting y dominio", "Cambios de contenido", "Nuevas fotografías y productos", "Soporte por WhatsApp", "Analytics y reporte mensual", "SEO básico y Google Business"],
    link: { href: "/planes/", label: "Ver planes" },
  },
  {
    id: "growth",
    n: "05",
    name: "Growth",
    title: "Más clientes, cuando quieras crecer.",
    text: "SEO local para aparecer en tu zona, anuncios en Google y Meta, y automatización de WhatsApp para responder rápido y no perder pedidos.",
    includes: [...PLANS[2].items],
    link: { href: "/planes/#growth", label: "Ver Growth" },
  },
];
