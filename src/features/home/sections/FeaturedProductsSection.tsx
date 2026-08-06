import type { Navigate } from "../../../shared/types/navigation";
import { ProductCard } from "../../products/components/ProductCard";
import { products } from "../../products/data/products";

export function FeaturedProductsSection({ navigate }: { navigate: Navigate }) {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);

  return (
    <section className="featured shop-section">
      <div className="compact-heading">
        <div>
          <span className="eyebrow">Alese de clienții noștri</span>
          <h2>Cele mai iubite</h2>
        </div>
        <button className="text-arrow" onClick={() => navigate("/magazin")}>
          Vezi colecția <span>→</span>
        </button>
      </div>
      <div className="product-grid four">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} navigate={navigate} />
        ))}
      </div>
    </section>
  );
}
