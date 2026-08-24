import { useEffect, useState } from "react";
import type { Navigate } from "../../../shared/types/navigation";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
  navigate: Navigate;
  previewCarousel?: boolean;
};

export function ProductCard({ product, navigate, previewCarousel = false }: ProductCardProps) {
  const [previewImage, setPreviewImage] = useState(0);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [previewCycle, setPreviewCycle] = useState(0);
  const openProduct = () => navigate(`/catalog/${product.slug}`);

  useEffect(() => {
    if (!previewCarousel || !isPreviewing || product.images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeout = window.setTimeout(() => {
      setPreviewImage((previewImage + 1) % product.images.length);
    }, 2800);

    return () => window.clearTimeout(timeout);
  }, [isPreviewing, previewCarousel, previewImage, previewCycle, product.images.length]);

  return (
      <article
        className={previewCarousel ? "product-card has-preview-carousel" : "product-card"}
        role={previewCarousel ? "link" : undefined}
        tabIndex={previewCarousel ? 0 : undefined}
        onClick={previewCarousel ? openProduct : undefined}
        onKeyDown={previewCarousel ? (event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProduct();
          }
        } : undefined}
        onMouseEnter={() => {
          setIsPreviewing(true);
          if (previewCarousel && product.images.length > 1) setPreviewImage(1);
        }}
        onMouseLeave={() => {
          setIsPreviewing(false);
          setPreviewImage(0);
        }}
      >
        <div className="product-image-wrap">
          <button
            type="button"
            className="product-image"
            onClick={(event) => {
              event.stopPropagation();
              openProduct();
            }}
            aria-label={`Deschide galeria pentru ${product.name}`}
          >
            {previewCarousel ? (
              product.images.map((image, index) => (
                <img
                  key={image}
                  className={previewImage === index ? "active" : ""}
                  src={image}
                  alt={index === 0 ? product.name : ""}
                  loading="lazy"
                />
              ))
            ) : (
              <img src={product.images[0]} alt={product.name} loading="lazy" />
            )}
          </button>

          {previewCarousel && product.images.length > 1 && (
            <div className="product-preview-dots" aria-label={`Imagini pentru ${product.name}`}>
              {product.images.map((image, index) => (
                <button
                  key={`${image}-${previewImage === index ? previewCycle : 0}`}
                  type="button"
                  className={previewImage === index ? "active" : ""}
                  aria-label={`Afișează imaginea ${index + 1}`}
                  aria-current={previewImage === index ? "true" : undefined}
                  onClick={(event) => {
                    event.stopPropagation();
                    setPreviewImage(index);
                    setPreviewCycle((current) => current + 1);
                  }}
                />
              ))}
            </div>
          )}

          {!previewCarousel && (
            <span className="quick-view" aria-hidden="true">
              Citește mai mult
            </span>
          )}
        </div>

        <div className="product-meta">
          <h3>{product.name}</h3>
          <div className="product-buy-row">
            <button
              type="button"
              className="btn primary product-card-cta"
              onClick={(event) => {
                event.stopPropagation();
                openProduct();
              }}
              aria-label={`Vezi detaliile pentru ${product.name}`}
            >
              Citește mai mult
            </button>
          </div>
        </div>
      </article>
  );
}
