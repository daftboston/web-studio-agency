/** Run `init` once per element, only when it comes near the viewport. */
export function onNear(selector: string, init: (el: HTMLElement) => void, rootMargin = "200px") {
  const els = document.querySelectorAll<HTMLElement>(selector);
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        io.unobserve(e.target);
        init(e.target as HTMLElement);
      }
    },
    { rootMargin },
  );
  els.forEach((el) => io.observe(el));
}

export const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
