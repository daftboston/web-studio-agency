/** Recurring plans from docs/PLANS.md. No prices (placeholders live in src/config.ts). */
import { PRICES } from "../config";

export const PLANS = [
  {
    id: "launch",
    name: "Launch",
    label: "Pago inicial",
    short: "Su página, con el paquete que elija.",
    text: "Construimos y publicamos su página con uno de los 3 paquetes: Presencia, Profesional o Commerce.",
    items: ["Presencia", "Profesional", "Commerce"],
    price: PRICES.launch,
  },
  {
    id: "digital-care",
    name: "Digital Care",
    label: "Mensualidad",
    short: "Cada mes cuidamos su página para que siga trabajando por usted.",
    text: "Nosotros nos encargamos de su página cada mes: cambios, fotos, productos y soporte. Usted solo nos escribe por WhatsApp.",
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
    price: PRICES.digitalCare,
  },
  {
    id: "growth",
    name: "Growth",
    label: "Cuando quiera crecer",
    short: "Más clientes con publicidad, contenido y automatización.",
    text: "Cuando su negocio esté listo para crecer, le ayudamos a atraer más clientes con publicidad, contenido y automatización.",
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
    n: "1",
    title: "Conversamos sobre su negocio.",
    text: "Nos cuenta qué hace, a quién le vende y qué quiere lograr con su página. Por WhatsApp o en una llamada corta.",
    gets: "Una recomendación clara del paquete que le sirve.",
  },
  {
    n: "2",
    title: "Le mostramos una propuesta.",
    text: "Preparamos cómo se vería su página, con el nombre y las fotos de su negocio, antes de empezar.",
    gets: "Una propuesta sin compromiso para revisar.",
  },
  {
    n: "3",
    title: "Construimos su página.",
    text: "Diseñamos, escribimos y armamos cada sección. Usted revisa y nos pide los ajustes que necesite.",
    gets: "Su página lista para revisar en el celular y en el computador.",
  },
  {
    n: "4",
    title: "Publicamos y le damos soporte cada mes.",
    text: "Su página sale al aire con su dominio. Después seguimos con usted: cambios, fotos, productos y soporte.",
    gets: "Una página activa y alguien que responde cuando la necesita.",
  },
] as const;
