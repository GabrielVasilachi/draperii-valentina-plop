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
          {/* <span className="eyebrow">Produsele noastre</span> */}
          <h2>Produsele noastre</h2>
          <p>Modele apreciate de clienții noștri.</p>
          <button className="btn primary featured-cta" onClick={() => navigate("/catalog")}>
            Vezi toate produsele
          </button>
        </div>
      </div>
      <div className="product-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} navigate={navigate} />
        ))}
      </div>
    </section>
  );
}
