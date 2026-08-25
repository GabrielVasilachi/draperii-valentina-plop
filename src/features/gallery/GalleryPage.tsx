import { useCallback, useEffect, useRef, useState } from "react";
import type { Navigate } from "../../shared/types/navigation";
import { SocialLinks } from "../../shared/components/SocialLinks";

const gallerySlots = [
  { id: "01", size: "wide", src: "/images/gallery/Valentina_Plop_HD_01.png" },
  { id: "02", size: "tall", src: "/images/gallery/Valentina_Plop_HD_02.png" },
  { id: "03", size: "compact", src: "/images/gallery/Valentina_Plop_HD_03.png" },
  { id: "04", size: "compact", src: "/images/gallery/Valentina_Plop_HD_04.png" },
  { id: "05", size: "feature", src: "/images/gallery/Valentina_Plop_HD_05.png" },
  { id: "06", size: "portrait", src: "/images/gallery/Valentina_Plop_HD_06.png" },
  { id: "07", size: "square", src: "/images/gallery/Valentina_Plop_HD_07.png" },
  { id: "08", size: "landscape", src: "/images/gallery/Valentina_Plop_HD_08.png" },
  { id: "09", size: "panorama", src: "/images/gallery/Valentina_Plop_HD_09.png" },
] as const;

export function GalleryPage({ navigate }: { navigate: Navigate }) {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 520px)").matches,
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState(() =>
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStartXRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const isPointerDownRef = useRef(false);

  const closeGallery = () => setActiveImage(null);
  const showPrevious = () => {
    setActiveImage((current) => current === null ? null : (current - 1 + gallerySlots.length) % gallerySlots.length);
  };
  const showNext = () => {
    setActiveImage((current) => current === null ? null : (current + 1) % gallerySlots.length);
  };

  const keepCarouselInfinite = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const setWidth = carousel.scrollWidth / 3;
    if (!setWidth) return;

    if (carousel.scrollLeft >= setWidth * 2) {
      carousel.scrollLeft -= setWidth;
    } else if (carousel.scrollLeft <= 1) {
      carousel.scrollLeft += setWidth;
    }
  }, []);

  const openCarouselImage = (index: number) => {
    if (hasDraggedRef.current) {
      hasDraggedRef.current = false;
      return;
    }

    setActiveImage(index);
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 520px)");
    const updateMobileState = () => setIsMobile(mobileQuery.matches);

    updateMobileState();
    mobileQuery.addEventListener("change", updateMobileState);
    return () => mobileQuery.removeEventListener("change", updateMobileState);
  }, []);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const respectReducedMotion = () => {
      if (reducedMotionQuery.matches) setIsAutoPlaying(false);
    };

    respectReducedMotion();
    reducedMotionQuery.addEventListener("change", respectReducedMotion);
    return () => reducedMotionQuery.removeEventListener("change", respectReducedMotion);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    const moveToMiddleSet = () => {
      const setWidth = carousel.scrollWidth / 3;
      if (setWidth) carousel.scrollLeft = setWidth;
    };

    const frame = window.requestAnimationFrame(moveToMiddleSet);
    const resizeObserver = new ResizeObserver(moveToMiddleSet);
    resizeObserver.observe(carousel);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile || !isAutoPlaying) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    let previousTime = performance.now();
    let animationFrame = 0;

    const moveCarousel = (currentTime: number) => {
      const elapsed = Math.min(currentTime - previousTime, 64);
      previousTime = currentTime;

      if (document.visibilityState === "visible") {
        carousel.scrollLeft += elapsed * 0.022;
        keepCarouselInfinite();
      }

      animationFrame = window.requestAnimationFrame(moveCarousel);
    };

    animationFrame = window.requestAnimationFrame(moveCarousel);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [isAutoPlaying, isMobile, keepCarouselInfinite]);

  useEffect(() => {
    if (activeImage === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.classList.add("gallery-is-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("gallery-is-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <section className="gallery-showcase section-pad" aria-label="Galerie de proiecte">
        <aside className="gallery-social-invite">
          <div>
            <span className="eyebrow">Din culisele atelierului</span>
            <h3>Urmărește-ne pentru proiecte noi.</h3>
          </div>
          <SocialLinks className="gallery-social-links" showLabels />
        </aside>

        {!isMobile && (
          <div className="gallery-mosaic" aria-label="Fotografiile proiectelor">
            {gallerySlots.map((slot, index) => (
              <button
                className={`gallery-slot gallery-slot--${slot.size}`}
                key={slot.id}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Mărește imaginea ${slot.id}`}
              >
                <img src={slot.src} alt={`Proiect Draperii Valentina Plop — imaginea ${slot.id}`} loading="lazy" />
                <span className="gallery-slot-number">{slot.id}</span>
              </button>
            ))}
          </div>
        )}

        {isMobile && (
          <div className="gallery-mobile-shell">
            <div
              ref={carouselRef}
              className={`gallery-mobile-carousel ${isAutoPlaying ? "is-auto" : "is-paused"}`}
              aria-label="Galerie foto cu derulare orizontală"
              tabIndex={0}
              onScroll={keepCarouselInfinite}
              onPointerDown={(event) => {
                isPointerDownRef.current = true;
                dragStartXRef.current = event.clientX;
                hasDraggedRef.current = false;
              }}
              onPointerMove={(event) => {
                if (
                  isPointerDownRef.current &&
                  Math.abs(event.clientX - dragStartXRef.current) > 6
                ) {
                  hasDraggedRef.current = true;
                  setIsAutoPlaying(false);
                }
              }}
              onPointerUp={() => {
                isPointerDownRef.current = false;
              }}
              onPointerCancel={() => {
                isPointerDownRef.current = false;
              }}
              onTouchMove={() => setIsAutoPlaying(false)}
              onWheel={() => setIsAutoPlaying(false)}
              onKeyDownCapture={(event) => {
                if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                  setIsAutoPlaying(false);
                }
              }}
            >
              <div className="gallery-mobile-track">
                {[0, 1, 2].map((setIndex) => (
                  <div
                    className="gallery-mobile-track-set"
                    aria-hidden={setIndex === 1 ? undefined : "true"}
                    key={setIndex}
                  >
                    {gallerySlots.map((slot, slideIndex) => {
                      const isAccessibleSlide = setIndex === 1;

                      return (
                        <button
                          className={`gallery-mobile-slide gallery-mobile-slide--${slot.size}`}
                          key={`${setIndex}-${slot.id}`}
                          type="button"
                          tabIndex={isAccessibleSlide ? 0 : -1}
                          onClick={() => openCarouselImage(slideIndex)}
                          aria-label={`Mărește imaginea ${slot.id}`}
                        >
                          <img
                            src={slot.src}
                            alt={isAccessibleSlide ? `Proiect Draperii Valentina Plop — imaginea ${slot.id}` : ""}
                            loading={setIndex === 1 ? "eager" : "lazy"}
                          />
                          <span className="gallery-mobile-slide-number">{slot.id}</span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="gallery-cta">
        <span className="eyebrow">Următorul proiect poate fi al tău</span>
        <h2>Construim atmosfera<br />în jurul ferestrei.</h2>
        <button className="btn primary" onClick={() => navigate("/contact")}>Cere o ofertă</button>
      </section>

      {activeImage !== null && (
        <div className="portfolio-lightbox" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeGallery();
        }}>
          <div className="portfolio-lightbox-dialog" role="dialog" aria-modal="true" aria-label={`Imaginea ${gallerySlots[activeImage].id} din galerie`}>
            <button className="portfolio-lightbox-close" type="button" onClick={closeGallery} aria-label="Închide imaginea">×</button>
            <button className="portfolio-lightbox-arrow previous" type="button" onClick={showPrevious} aria-label="Imaginea precedentă">←</button>
            <img src={gallerySlots[activeImage].src} alt={`Proiect Draperii Valentina Plop — imaginea ${gallerySlots[activeImage].id}`} />
            <button className="portfolio-lightbox-arrow next" type="button" onClick={showNext} aria-label="Imaginea următoare">→</button>
            <span className="portfolio-lightbox-count">{gallerySlots[activeImage].id} / {String(gallerySlots.length).padStart(2, "0")}</span>
          </div>
        </div>
      )}
    </>
  );
}
