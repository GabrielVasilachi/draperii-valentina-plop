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
          <span className="eyebrow">Produsele noastre</span>
          <h2>Cele mai alese</h2>
          <p>Modele apreciate de clienții noștri.</p>
        </div>
        <button className="text-arrow" onClick={() => navigate("/magazin")}>
          Toate produsele <span>→</span>
        </button>
      </div>
      <div className="product-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} navigate={navigate} />
        ))}
      </div>
    </section>
  );
}
