import { useEffect, useRef, type ReactNode } from "react";
import { partnerProjects, type PartnerProject } from "../data/partners";

type PartnerCarouselProps = {
  galleryOpen: boolean;
  onSelect: (partner: PartnerProject) => void;
  renderLogo: (partner: PartnerProject) => ReactNode;
};

export function PartnerCarousel({ galleryOpen, onSelect, renderLogo }: PartnerCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef({ galleryOpen });

  useEffect(() => {
    motionRef.current = { galleryOpen };
  }, [galleryOpen]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const mobile = window.matchMedia("(max-width: 820px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastTime = 0;
    let groupWidth = 0;
    let inView = false;
    let touching = false;
    let resumeAt = 0;
    let position = 0;
    let lastWrittenScroll = 0;

    const writePosition = () => {
      viewport.scrollLeft = position;
      lastWrittenScroll = viewport.scrollLeft;
    };

    const measure = () => {
      groupWidth = (viewport.firstElementChild as HTMLElement).getBoundingClientRect().width;
      if (mobile.matches && groupWidth > 0) {
        position = groupWidth;
        writePosition();
      }
    };
    const onScroll = () => {
      if (!mobile.matches || !groupWidth) return;
      const left = viewport.scrollLeft;
      // Native dragging and momentum extend the delay; our own animation doesn't.
      if (Math.abs(left - lastWrittenScroll) > 0.01) {
        resumeAt = performance.now() + 3000;
        position = left;
      }
      // Reposition to an identical copy before either end can become visible.
      if (left < groupWidth / 2) {
        position = left + groupWidth;
        writePosition();
      } else if (left >= groupWidth * 2) {
        position = left - groupWidth;
        writePosition();
      }
    };
    const onPointerDown = () => { touching = true; };
    const onPointerUp = () => {
      if (!touching) return;
      touching = false;
      resumeAt = performance.now() + 3000;
    };
    const onWheel = () => { resumeAt = performance.now() + 3000; };
    const tick = (time: number) => {
      const elapsed = lastTime ? Math.min(time - lastTime, 40) : 0;
      lastTime = time;
      const focused = viewport.querySelector(":focus-visible") !== null;
      if (mobile.matches && inView && !document.hidden && !reducedMotion.matches &&
          !motionRef.current.galleryOpen &&
          !touching && !focused && time >= resumeAt && groupWidth > 0) {
        position += elapsed * 0.024;
        if (position >= groupWidth * 2) position -= groupWidth;
        writePosition();
      }
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; });
    const resizeObserver = new ResizeObserver(measure);
    observer.observe(viewport);
    resizeObserver.observe(viewport);
    viewport.addEventListener("scroll", onScroll, { passive: true });
    viewport.addEventListener("pointerdown", onPointerDown, { passive: true });
    viewport.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    mobile.addEventListener("change", measure);
    measure();
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      viewport.removeEventListener("scroll", onScroll);
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("wheel", onWheel);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      mobile.removeEventListener("change", measure);
    };
  }, []);

  return (
    <div className="partners-mobile-carousel" role="region" aria-roledescription="carusel" aria-label="Companii cu care am lucrat">
      <div ref={viewportRef} className="partners-carousel-viewport">
        {[0, 1, 2].map((copy) => (
          <div key={copy} className="partners-carousel-group" aria-hidden={copy !== 1 ? true : undefined}>
            {partnerProjects.map((partner, index) => partner.images.length > 0 ? (
              <button key={partner.id} type="button"
                className={`partner-logo-link partner-logo-link--${partner.id}`}
                tabIndex={copy === 1 ? 0 : -1}
                onFocus={() => {
                  if (copy !== 1) {
                    const original = viewportRef.current?.children[1].children[index] as HTMLElement | undefined;
                    original?.focus({ preventScroll: true });
                  }
                }}
                onClick={() => onSelect(partner)}
                aria-label={`Vezi proiectul ${partner.name}`} aria-haspopup="dialog">
                {renderLogo(partner)}
                <span className="partner-logo-invitation">Vezi proiectul <span aria-hidden="true">↗</span></span>
              </button>
            ) : (
              <div key={partner.id} className="partner-logo-static">
                {renderLogo(partner)}
                <span className="partner-logo-invitation">Colaborare</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
