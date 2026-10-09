# References

What we looked at and what we took from it. Patterns only: no text, images, logos or client names are copied from anywhere.

## Clay (https://clay.global/) — reviewed 2026-10-08

Homepage, Services (https://clay.global/services), Work (https://clay.global/work) and one case study (Slack). Desktop 1440 and phone 390 screenshots reviewed. Motion measured with Playwright (hover transforms, scroll-driven sizes, transition timings).

### Layout and rhythm

The homepage is a single column of big statements: a huge left-aligned headline with one line of supporting text, then a full-width piece of work, then a short intro next to an accordion of services. Sections alternate between light canvas, a dark band and large media, so the page breathes instead of stacking identical cards. The services page opens with one claim and a two-line subhead, then each service is a row: name, a paragraph about the outcome, a plain list of what it includes, and one large image, alternating sides.

### Typography

One sans family, very heavy headlines (weight ~740, 74px desktop, 40px phone, tracking around −0.04em, line height ~1.1). Body stays a calm 18px. Hierarchy comes from size and weight, not from color or decoration. Almost no uppercase labels.

### Animations and motion (how they move)

Clay does not expose GSAP, Lenis or Three.js as globals. Motion is custom (Next.js app), and the timings are long and soft:

| Pattern | What we measured |
|---|---|
| Preferred easing | `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) everywhere; a stronger `cubic-bezier(0.19, 1, 0.22, 1)` for some filters and heights |
| Scroll / section reveals | Opacity + transform together, **0.9–1.2s**, often staggered. Filter+opacity at ~0.8s / 1.15s |
| Hero | Headline is already on screen when the page finishes loading; the first media (video loop or 3D canvas) settles under it. No bouncing, no parallax of the type |
| Full-bleed media | The first project video starts ~1290×726 and **widens toward the viewport edges as you scroll** (width went 1290 → 1419 while the element climbed through the fold). That is the cinematic handoff between hero and work |
| Case-card hover | Media sits at `scale(1.07)` at rest and eases back to `scale(1)` on hover over ~0.7–0.9s with the expo curve. Cursor is a plain pointer (no custom cursor) |
| Accordion / height | Height animates ~0.7s with the stronger expo |
| Pacing | Slow. Nothing finishes under 0.35s except color and link hovers (0.15–0.2s) |
| Reduced motion | Their site does not advertise a reduced-motion path in the CSS we sampled; ours does |

They also use muted looping video and WebGL canvases (17 canvases on the homepage). Filmika does not adopt video or WebGL: we recreate the *feeling* of the motion with CSS and one IntersectionObserver, so the page stays at Lighthouse ~100 and every word stays visible without JavaScript.

### Images and art direction

- **Full-bleed first.** The first project on the homepage and every case study opens with a large media panel that almost touches the edges. Cropped with `object-fit: cover`, no browser chrome on Clay's own site; we use browser and phone frames because our media is real product screenshots, not staged photography.
- **Asymmetric grid.** One full-width frame, then a staggered two-column pair: left tall, right shorter and lower. That rhythm makes two projects feel like a gallery, not a catalog.
- **Device framing inside the case study.** Slack's case study mixes desktop and phone frames of the same product. We do the same with TruePhone and Tesla Partes: a large browser frame plus a phone overlay of a real mobile screenshot.
- **Cropping.** Images are cropped tightly to the product UI; no empty margins. Phone shots are portrait and sit on their own layer so they can drift slightly as you scroll.
- **No invented art.** Clay uses 3D objects, lifestyle photography and logo walls. We keep figma bro's tokens and only use real TruePhone and Tesla Partes screenshots — no stock photos, no 3D, no client logos we do not own.

### Services structure

A service is three layers: what it is in one line, why it matters to the client in two or three lines, and a flat list of the concrete deliverables. The list is specific instead of adjectives.

### Case-study presentation

Work is presented as projects, not thumbnails in a grid of equals. Each entry is a large image, the project name, and one sentence that says what was done. Inside a case study: a colored masthead with the name and that one sentence, one hero image, then a short paragraph of the brief next to a list of the disciplines involved, then named sections each with one paragraph and more images. The sentence describes the job, never a metric.

### Copy tone and description patterns

- The headline names who they are and what they do, in plain words, with no slogan.
- The subhead states the method and the result.
- Service descriptions lead with the client's situation and end with the outcome.
- Process and differentiation copy is concrete about how the work happens.
- Calls to action are short and direct: one verb, no hype.
- The same closing line appears at the bottom of every page.

### What we adopted, and why

Filmika keeps figma bro's Apple-inspired tokens (accent `#3d3ad6`, warm neutrals, Inter) and the Instrument-style showcase on Inicio and Capacidades. Clay's 3D art direction, client logo wall, muted video and WebGL were not copied. Their client names and numbers were not used. All new copy is original Colombian Spanish (tú), written from Mr market's direction — see docs/BRAND.md and docs/SITE-SPEC.md.

| Clay pattern | Adopted as | Why it fits Filmika |
|---|---|---|
| Expo-out easing, 0.9–1.2s reveals | `--ease-expo` / `--ease-expo-strong`; reveals now take 1s / 1.2s | Same pacing, without their library |
| Headline rising out of a mask | `.word-mask` per word, CSS-only, line delays | Cinematic first paint; wraps cleanly on phones; static with reduced motion |
| Hero media that widens into the fold | `[data-expand]` scroll-driven scale on the hero panel | Hand-off from statement to work, without video |
| Case media that settles as it arrives | `[data-settle]` (perspective + scale) on portfolio frames; `[data-zoom]` for image zoom-out on reveal | Makes screenshots feel like films, not thumbnails |
| Soft hover zoom on case cards | `.case-card` eases the image to `scale(1.035)` | Quiet feedback, same curve |
| Full-bleed project panel + phone overlay | Portafolio cases: dark/surface panel, large browser frame, real phone screenshot on a parallax layer | Immersive without inventing photography |
| Outcome headline + tags on work | Case cards: one-line headline and tags (`Web App · Marketplace · Desarrollo`) | Mr market's portfolio pattern, Clay's sharpness |
| Service = outcome paragraph + concrete list | Five services rewritten from Mr market's briefs | Same structure, our offer |
| Named process steps that say what the client receives | Proceso titles are verb phrases; "Recibes" is the point of each step | Matches Clay's habit of saying what happens |
| One short CTA, repeated | Closing section is always **"Hablemos."** with WhatsApp + `dsantoyop@gmail.com` | One ask, same words |
| Alternating media rows and a dark band | Servicios rows alternate; Digital Care is a dark band | Rhythm, using the bands we already have |

### What we deliberately did not adopt

- Client logo strips and any count of clients or years beyond "Filmika tiene más de 3 años construyendo sitios web".
- Outcome metrics. We have no verified numbers, so none appear.
- Their English voice and sentence structures.
- 3D objects, gradient artwork, lifestyle photography, muted video and WebGL canvases.
- A services accordion that hides descriptions until clicked. Our lists stay visible without JavaScript.
- A custom cursor.

### How the motion stays safe

- Content is visible by default. Masks, reveals and zooms only run under `prefers-reduced-motion: no-preference`, and the CSS-only parts (word masks, expand, settle, parallax) play without JavaScript.
- Headlines never animate opacity — only transform — so contrast is never reduced.
- One IntersectionObserver (already in `Base.astro`) drives both `[data-reveal]` and `[data-zoom]`. No animation libraries.

## Addendum (2026-10-08): scroll-driven page background

Clay changes the whole page colour as you move between chapters. Filmika now does the same on
Inicio, Portafolio and Capacidades:

- Each section carries `data-scene="light | warm | dark | accent"` (white, warm #f5f4f1,
  near-black #0d0d0c, Filmika indigo #3d3ad6). Pages opt in with `<Base scenes>`.
- A direction-aware trigger line in `Base.astro` (62% of the viewport while scrolling down, 38%
  while scrolling up; passive scroll listener, one rAF per frame) copies the scene of the section on
  it to `<html data-scene>`; it also updates `<meta name="theme-color">`.
- `global.css` registers the palette variables with `@property` (`<color>`), so the page
  background and all text, card, line and accent colours interpolate. Softened on 2026-10-09:
  grounds (page, canvas, surfaces, lines) ease over 1600ms with `cubic-bezier(0.65, 0, 0.35, 1)`;
  text colours (and the logo ink) swap in 320ms centred on the background's midpoint
  (delay 640ms), so text is never mid-grey on mid-grey for more than an instant.
- Transition effect (2026-10-09): a feathered radial **aura** of the incoming colour rises from the
  edge the new section enters from (behind the content; faint until the text has swapped, then peaks at 0.5 around 68% of the run), and a faint **film grain**
  veil flickers through (peak opacity 0.09, 12 steps). Opacity/transform only, created lazily by JS,
  skipped with reduced motion. Each scene is a full palette already checked for
  contrast (light root, `.theme-dark`, `.theme-accent`), so text never sits on the wrong ground.
- Reduced motion: `transition: none`, the colours swap instantly.
- Without JS no scene is set and each section paints its own band (`html:not(.js) [data-scene]`).
- Checked with axe-core at every 250px scroll position on desktop 1440 and phone 390: 0 on-screen
  contrast issues in any scene. Lighthouse is unchanged.
