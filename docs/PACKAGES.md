# Paquetes Filmika

Content below is the owner's, kept in Spanish because it goes on the site.

## Precios de lanzamiento (approved by Mr market, 2026-10-08)

Current entry prices for the first clients, in COP. **These are real prices, not estimates.**
The setup price (pago inicial) **includes the domain and the first month of Digital Care**.

| Paquete (on the site) | Qué es | Pago inicial | Digital Care |
|---|---|---|---|
| **Landing + campaña** | Una sola página hecha para recibir tráfico de anuncios | **$600.000** | **$90.000 / mes** |
| **Página web** | 4–5 páginas, WhatsApp, Google Business | **$900.000** | **$90.000 / mes** |
| **Catálogo en línea** | Panel de administración, productos (o inmuebles), pedidos por WhatsApp | **$1.500.000** | **$130.000 / mes** |
| Sitio Profesional | Sitio corporativo más grande (ver Paquete 2 abajo) | **Se cotiza** | Se cotiza |
| Growth | SEO local, anuncios, automatización (ver PLANS.md) | **Se cotiza según el proyecto** | — |

How this maps to the original packages below:
- The site now shows the three priced offers above (Paquetes, the Inicio preview and the FAQ
  "¿Cuánto cuesta?"). Prices live in `src/config.ts` (`PRICES`), so they change in one place.
- **Presencia** and **Commerce** are no longer shown as packages on the site. Their content
  lives on in *Landing + campaña* / *Página web* and in *Catálogo en línea*. The names did not
  match the priced offers, so prices were not forced onto them.
- **Profesional** stays as the larger corporate site ("Sitio Profesional"), with no approved
  price: it shows **"Se cotiza"**.
- Ad management for *Landing + campaña* is Growth (quoted); the landing price covers the page.
- **Catálogo en línea also works for property listings** (added 2026-10-09): an inmobiliaria uploads
  its properties (fotos, precio, arriendo o venta, ubicación) from the same panel, and each listing
  has a WhatsApp button to ask or book a visit. Same plan and price as a product catalog.

Site copy (tú voice):
> **Página web:** $900.000 + $90.000 al mes de Digital Care.
> **Catálogo en línea:** $1.500.000 + $130.000 al mes. Para productos o, si eres inmobiliaria, para tus propiedades.
> **Landing + campaña:** $600.000 + $90.000 al mes.
> El pago inicial incluye el dominio y el primer mes de Digital Care.
> Precios de lanzamiento para los primeros clientes, en pesos colombianos (COP).

---

# Original package definitions (reference)

The three packages as first defined by the owner. Kept for the content and the outreach examples.

## 🟢 PAQUETE 1 — PRESENCIA (not shown on the site; see Landing + campaña / Página web)

Para negocios pequeños que simplemente necesitan **existir profesionalmente en Internet**.

### Website
Landing page profesional.

### Secciones
- Hero
- Empresa
- Servicios
- Galería
- Ubicación
- Contacto

### Conversión
Botón WhatsApp, por ejemplo:

> 💬 Cotizar por WhatsApp

Al hacer clic, abre el mensaje:

```
Hola, quiero solicitar información sobre [empresa].
```

### Incluye
- Diseño responsive
- Dominio
- Hosting
- SSL
- Google Maps
- WhatsApp
- Formulario básico
- SEO básico
- Google Business básico
- Analytics básico

### Ideal para
- Taller pequeño
- Constructor independiente
- Óptica pequeña

---

## 🔵 PAQUETE 2 — PROFESIONAL (on the site: "Sitio Profesional", **Se cotiza**)

**Sitio corporativo completo** (no una landing).

### Estructura
- Inicio
- Empresa
- Servicios
- Proyectos / Trabajos
- Guías / Blog
- Preguntas frecuentes
- Contacto

### Ejemplo para taller
```
Inicio
├── Servicios
│    ├── Mecánica general
│    ├── Frenos
│    ├── Suspensión
│    └── Diagnóstico
├── Nosotros
├── Trabajos realizados
├── Guías
│    ├── ¿Cuándo cambiar aceite?
│    ├── ¿Cuándo cambiar frenos?
│    └── ...
└── Contacto
```

### Incluye
Todo lo del Paquete 1, más:
- Hasta 7–8 secciones/páginas
- Catálogo de servicios
- Galería
- Testimonios
- FAQ
- Blog / Guías
- Formularios
- SEO local
- Google Business optimization
- Analytics
- Search Console
- Integración de redes
- CTA estratégicos
- Optimización móvil

### La gran diferencia
Empieza a generar **tráfico orgánico**.

Ejemplo: alguien busca en Google:

> ¿Cada cuánto cambiar las pastillas de freno?

Google lleva al usuario a la guía del taller, y al final de la guía aparece:

> ¿Tu vehículo presenta estos síntomas? **Agenda una revisión por WhatsApp →**

Eso convierte contenido en leads.

---

## 🟣 PAQUETE 3 — COMMERCE (on the site: "Catálogo en línea", $1.500.000 + $130.000/mes)

Se vende como **"Catálogo + Venta por WhatsApp"** (no como "Marketplace").

### Ideal para
- Ópticas
- Talleres
- También constructoras *(constructoras paused in outreach, 2026-10-09)*
- Inmobiliarias: the same catalog for property listings (added 2026-10-09)

### Ejemplo Óptica
```
Inicio
Productos
├── Monturas
├── Gafas de sol
├── Lentes
└── Accesorios
Servicios
Guías
Nosotros
Contacto
```

### Cada producto
> ⚠️ **Example data only.** The product, reference, and price below are illustrative, not a real product or a Filmika price.

```
Ray-Ban RX123
$650.000
Disponible
Descripción...

[🟢 Comprar por WhatsApp]
```

El botón envía:

```
Hola, estoy interesado en la referencia RX123 de $650.000.
```

### Por qué funciona
Es mucho más sencillo que montar:
- Carrito
- Checkout
- Pasarela
- Inventario
- Pagos
- Logística
- Devoluciones

Para muchas empresas locales, esto es suficiente.
