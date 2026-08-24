import { useMemo, useState } from "react";
import { ProductCard } from "../products/components/ProductCard";
import { categories, products } from "../products/data/products";
import type { Navigate } from "../../shared/types/navigation";
import { CatalogPagination } from "./components/CatalogPagination";
import { CatalogToolbar } from "./components/CatalogToolbar";

export function CatalogPage({
  path,
  navigate,
}: {
  path: string;
  navigate: Navigate;
}) {
  const [category, setCategory] =
    useState<(typeof categories)[number]>("Toate");
  const [query, setQuery] = useState("");
  const requestedPage = path.includes("/page/2") ? 2 : 1;
  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "Toate" || p.category === category) &&
          p.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [category, query],
  );
  const page = category === "Toate" && !query ? requestedPage : 1;
  const shown = filtered.slice(page === 1 ? 0 : 9, page === 1 ? 9 : 15);
  return (
    <>
      <header className="catalog-intro">
        <div>
          <span>Catalog online</span>
          <p>Alege modelul potrivit pentru spațiul tău. Toate produsele sunt realizate la comandă.</p>
        </div>
        <div className="catalog-intro-total">
          <strong>{products.length}</strong>
          <span>modele disponibile</span>
        </div>
      </header>

      <section className="catalog">
        <div className="catalog-layout">
          <div className="catalog-results">
            <div className="catalog-results-header">
              <div>
                <span className="catalog-results-label">Produse</span>
                <h2>{category === "Toate" ? "Toate modelele" : category}</h2>
              </div>
              <span className="catalog-count">{filtered.length} rezultate</span>
            </div>

            {shown.length ? (
              <div className="product-grid">
                {shown.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    navigate={navigate}
                    previewCarousel
                  />
                ))}
              </div>
            ) : (
              <div className="empty">
                <h3>Nu am găsit produse</h3>
                <p>Încearcă un alt termen sau alege categoria „Toate”.</p>
              </div>
            )}

            {category === "Toate" && !query && (
              <CatalogPagination page={page} navigate={navigate} />
            )}
          </div>

          <CatalogToolbar
            category={category}
            query={query}
            onCategoryChange={setCategory}
            onQueryChange={setQuery}
            onContact={() => navigate("/contact")}
          />
        </div>
      </section>
    </>
  );
}
