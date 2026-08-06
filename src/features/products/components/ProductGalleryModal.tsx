import { useCallback, useEffect, useState } from "react";
import type { Navigate } from "../../../shared/types/navigation";
import type { Product } from "../data/products";

type ProductGalleryModalProps = {
  product: Product;
  navigate: Navigate;
  onClose: () => void;
};

export function ProductGalleryModal({
  product,
  navigate,
  onClose,
}: ProductGalleryModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  const changeImage = useCallback(
    (direction: number) => {
      setActiveImage(
        (current) =>
          (current + direction + product.images.length) % product.images.length,
      );
    },
    [product.images.length],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") changeImage(-1);
      if (event.key === "ArrowRight") changeImage(1);
    };

    document.body.classList.add("gallery-is-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("gallery-is-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [changeImage, onClose]);

  const requestOffer = () => {
    onClose();
    navigate("/contact");
  };

  return (
    <div
      className="gallery-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="gallery-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Galerie ${product.name}`}
      >
        <button
          className="gallery-close"
          onClick={onClose}
          aria-label="Închide galeria"
        >
          ×
        </button>

        <div className="gallery-stage">
          <button
            className="gallery-arrow previous"
            onClick={() => changeImage(-1)}
            aria-label="Imaginea precedentă"
          >
            ←
          </button>
          <img
            src={product.images[activeImage]}
            alt={`${product.name}, imaginea ${activeImage + 1} din ${product.images.length}`}
          />
          <button
            className="gallery-arrow next"
            onClick={() => changeImage(1)}
            aria-label="Imaginea următoare"
          >
            →
          </button>
        </div>

        <div className="gallery-details">
          <div>
            <small>{product.subcategory}</small>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <span>
            {activeImage + 1} / {product.images.length}
          </span>
        </div>

        <div className="gallery-thumbnails">
          {product.images.map((image, index) => (
            <button
              key={image}
              className={activeImage === index ? "active" : ""}
              onClick={() => setActiveImage(index)}
              aria-label={`Afișează imaginea ${index + 1}`}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>

        <button className="btn primary gallery-offer" onClick={requestOffer}>
          Disponibilitate și detalii
        </button>
      </section>
    </div>
  );
}
