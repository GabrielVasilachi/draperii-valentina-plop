import { useState } from "react";
import type { Navigate } from "../../../shared/types/navigation";
import type { Product } from "../data/products";
import { ProductGalleryModal } from "./ProductGalleryModal";

type ProductCardProps = {
  product: Product;
  navigate: Navigate;
};

export function ProductCard({ product, navigate }: ProductCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <article className="product-card">
        <div className="product-image-wrap">
          <button
            className="product-image"
            onClick={() => setGalleryOpen(true)}
            aria-label={`Deschide galeria pentru ${product.name}`}
          >
            <img src={product.images[0]} alt={product.name} loading="lazy" />
          </button>

          {product.featured && <span className="featured-badge">Popular</span>}

          <button
            className={favorite ? "favorite active" : "favorite"}
            onClick={() => setFavorite(!favorite)}
            aria-label={
              favorite ? "Elimină din favorite" : "Adaugă la favorite"
            }
            aria-pressed={favorite}
          >
            {favorite ? "♥" : "♡"}
          </button>

          <button className="quick-view" onClick={() => setGalleryOpen(true)}>
            Privire rapidă
          </button>
        </div>

        <div className="product-meta">
          <small>
            {product.category} · {product.subcategory}
          </small>
          <h3>{product.name}</h3>
          <div className="product-buy-row">
            <span>La comandă</span>
            <button
              onClick={() => navigate("/contact")}
              aria-label={`Solicită ofertă pentru ${product.name}`}
            >
              Cere preț →
            </button>
          </div>
        </div>
      </article>

      {galleryOpen && (
        <ProductGalleryModal
          product={product}
          navigate={navigate}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
}
