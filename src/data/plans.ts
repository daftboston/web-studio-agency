/** Recurring plans from docs/PLANS.md. Prices come from src/config.ts (launch prices, 2026-10-08). */
import { PRICES } from "../config";

export const PLANS = [
  {
    id: "launch",
    name: "Launch",
    label: "Pago inicial",
    short: "Tu página, con el paquete que elijas.",
    text: "Construimos y publicamos tu página con uno de los paquetes: Landing + campaña, Página web o Catálogo en línea. Incluye el dominio y el primer mes de Digital Care.",
    items: ["Landing + campaña · $600.000", "Página web · $900.000", "Catálogo en línea · $1.500.000"],
    price: PRICES.launchFrom,
  },
  {
    id: "digital-care",
    name: "Digital Care",
    label: "Mensualidad",
    short: "Cada mes cuidamos tu página para que siga trabajando por ti. Desde $90.000 al mes.",
    text: "Cada mes nos encargamos de tu página: cambios, fotos, productos y soporte. Tú solo nos escribes por WhatsApp.",
    items: [
      "Hosting",
      "Dominio",
      "Actualizaciones",
      "Cambios de contenido",
      "Nuevas fotografías",
      "Productos",
      "Soporte",
      "Analytics",
      "SEO básico",
      "Google Business",
      "Reporte mensual",
    ],
    price: PRICES.digitalCareFrom,
  },
  {
    id: "growth",
    name: "Growth",
    label: "Cuando quieras crecer",
    short: "Más clientes con SEO local, anuncios y automatización de WhatsApp.",
    text: "Cuando tu negocio esté listo para crecer, te ayudamos a atraer más clientes con SEO local, publicidad y automatización de WhatsApp.",
    items: [
      "SEO local",
      "Google Ads",
      "Meta Ads",
      "Generación de contenido",
      "Automatizaciones",
      "Chatbot",
      "Agente de voz",
      "Campañas de WhatsApp",
      "Seguimiento de leads",
    ],
    price: PRICES.growth,
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Entendemos tu negocio.",
    text: "Nos cuentas qué haces, a quién le vendes y qué quieres que haga tu página. Por WhatsApp o en una llamada corta. De ahí sale qué conviene construir y qué sobra.",
    gets: "Una cotización clara: el pago inicial, la mensualidad y qué incluye cada uno.",
  },
  {
    n: "02",
    title: "Te mostramos cómo se vería.",
    text: "Antes de construir, armamos una propuesta con el nombre y las fotos de tu negocio. Ves tu página, no una plantilla genérica, y decides con eso.",
    gets: "Una propuesta sin compromiso para revisar en tu celular.",
  },
  {
    n: "03",
    title: "Construimos y tú revisas.",
    text: "Diseñamos, escribimos y armamos cada sección. La recorres en el celular y en el computador y nos pides los ajustes. Nada sale al aire sin tu visto bueno.",
    gets: "Tu página lista para revisar, con los cambios que pediste.",
  },
  {
    n: "04",
    title: "Publicamos y seguimos contigo.",
    text: "Tu página sale con tu dominio. Después no desaparecemos: cada mes hacemos los cambios, las fotos y los productos, y respondemos cuando nos escribes.",
    gets: "Una página activa y alguien que responde por WhatsApp.",
  },
] as const;
