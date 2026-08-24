import type { Navigate } from "../../../shared/types/navigation";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
  navigate: Navigate;
};

export function ProductCard({ product, navigate }: ProductCardProps) {
  const openProduct = () => navigate(`/magazin/${product.slug}`);

  return (
      <article className="product-card">
        <div className="product-image-wrap">
          <button
            className="product-image"
            onClick={openProduct}
            aria-label={`Deschide galeria pentru ${product.name}`}
          >
            <img src={product.images[0]} alt={product.name} loading="lazy" />
          </button>

          <button className="quick-view" onClick={openProduct}>
            Vezi produsul
          </button>
        </div>

        <div className="product-meta">
          <h3>{product.name}</h3>
          <div className="product-buy-row">
            <button
              onClick={openProduct}
              aria-label={`Vezi detaliile pentru ${product.name}`}
            >
              Citește mai mult →
            </button>
          </div>
        </div>
      </article>
  );
}
