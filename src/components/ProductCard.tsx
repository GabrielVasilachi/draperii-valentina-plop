import { useEffect, useState } from "react";
import type { Product } from "../data/products";
import type { Navigate } from "../types/navigation";

export function ProductCard({
  product,
  navigate,
}: {
  product: Product;
  navigate: Navigate;
}) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const changeImage = (direction: number) => {
    setActiveImage(
      (current) =>
        (current + direction + product.images.length) % product.images.length,
    );
  };

  useEffect(() => {
    if (!galleryOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGalleryOpen(false);
      if (event.key === "ArrowLeft")
        setActiveImage(
          (current) =>
            (current - 1 + product.images.length) % product.images.length,
        );
      if (event.key === "ArrowRight")
        setActiveImage((current) => (current + 1) % product.images.length);
    };
    document.body.classList.add("gallery-is-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("gallery-is-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [galleryOpen, product.images.length]);

  const openGallery = () => {
    setActiveImage(0);
    setGalleryOpen(true);
  };

  return (
    <>
      <article className="product-card">
        <button
          className="product-image"
          onClick={openGallery}
          aria-label={`Deschide galeria pentru ${product.name}`}
        >
          <img src={product.images[0]} alt={product.name} loading="lazy" />
          {product.featured && (
            <span className="featured-badge">Recomandat</span>
          )}
          <span className="gallery-badge">
            ▦ {product.images.length} imagini
          </span>
        </button>
        <div className="product-meta">
          <small>{product.subcategory}</small>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div>
            <button className="gallery-link" onClick={openGallery}>
              Vezi galeria
            </button>
            <button
              onClick={() => navigate("/contact")}
              aria-label={`Solicită ofertă pentru ${product.name}`}
            >
              Solicită ofertă ↗
            </button>
          </div>
        </div>
      </article>

      {galleryOpen && (
        <div
          className="gallery-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setGalleryOpen(false);
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
              onClick={() => setGalleryOpen(false)}
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
          </section>
        </div>
      )}
    </>
  );
}
