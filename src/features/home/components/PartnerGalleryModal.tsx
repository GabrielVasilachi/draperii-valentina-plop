import { useCallback, useEffect, useRef, useState } from "react";
import type { Navigate } from "../../../shared/types/navigation";
import type { PartnerProject } from "../data/partners";

type PartnerGalleryModalProps = {
  partner: PartnerProject;
  navigate: Navigate;
  onClose: () => void;
};

export function PartnerGalleryModal({
  partner,
  navigate,
  onClose,
}: PartnerGalleryModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hasImages = partner.images.length > 0;

  const changeImage = useCallback(
    (direction: number) => {
      if (!hasImages) return;
      setActiveImage(
        (current) =>
          (current + direction + partner.images.length) % partner.images.length,
      );
    },
    [hasImages, partner.images.length],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") changeImage(-1);
      if (event.key === "ArrowRight") changeImage(1);
    };

    document.body.classList.add("gallery-is-open");
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.classList.remove("gallery-is-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [changeImage, onClose]);

  const requestSimilarProject = () => {
    onClose();
    navigate("/contact");
  };

  return (
    <div
      className="partner-gallery-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="partner-gallery-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`partner-gallery-title-${partner.id}`}
      >
        <button
          ref={closeButtonRef}
          className="partner-gallery-close"
          type="button"
          onClick={onClose}
          aria-label="Închide galeria"
        >
          ×
        </button>

        <div className="partner-gallery-visual">
          {hasImages ? (
            <>
              <img
                src={partner.images[activeImage].src}
                alt={partner.images[activeImage].alt}
              />

              {partner.images.length > 1 && (
                <>
                  <button
                    className="partner-gallery-arrow previous"
                    type="button"
                    onClick={() => changeImage(-1)}
                    aria-label="Imaginea precedentă"
                  >
                    ←
                  </button>
                  <button
                    className="partner-gallery-arrow next"
                    type="button"
                    onClick={() => changeImage(1)}
                    aria-label="Imaginea următoare"
                  >
                    →
                  </button>
                </>
              )}

              <span className="partner-gallery-counter">
                {String(activeImage + 1).padStart(2, "0")} /{" "}
                {String(partner.images.length).padStart(2, "0")}
              </span>
            </>
          ) : (
            <div className="partner-gallery-empty">
              <span>Galerie foto</span>
              <h3>Imaginile proiectului vor fi adăugate în curând.</h3>
              <p>
                Secțiunea este deja pregătită pentru fotografiile acestei
                colaborări.
              </p>
            </div>
          )}
        </div>

        <aside className="partner-gallery-info">
          <div className={`partner-gallery-logo ${partner.logoTone}`}>
            <img src={partner.logo} alt={`Logo ${partner.name}`} />
          </div>

          <span className="partner-gallery-kicker">
            {partner.type} · Proiect realizat
          </span>
          <h2 id={`partner-gallery-title-${partner.id}`}>{partner.name}</h2>
          <p>{partner.description}</p>

          {hasImages && (
            <div
              className="partner-gallery-thumbnails"
              aria-label="Miniaturi galerie"
            >
              {partner.images.map((image, index) => (
                <button
                  key={image.src}
                  className={activeImage === index ? "active" : ""}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Afișează imaginea ${index + 1}`}
                  aria-pressed={activeImage === index}
                >
                  <img src={image.src} alt="" />
                </button>
              ))}
            </div>
          )}

          <button
            className="btn primary partner-gallery-cta"
            type="button"
            onClick={requestSimilarProject}
          >
            Contact și program
          </button>
        </aside>
      </section>
    </div>
  );
}
