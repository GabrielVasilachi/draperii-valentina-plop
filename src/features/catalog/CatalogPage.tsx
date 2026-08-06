import { useMemo, useState } from "react";
import { ProductCard } from "../products/components/ProductCard";
import { categories, products } from "../products/data/products";
import { PageHero } from "../../shared/components/PageHero";
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
      <PageHero eyebrow="Magazin" title="Colecții pentru casa ta.">
        Alege modelul. Noi îl adaptăm ferestrei tale.
      </PageHero>
      <section className="catalog section-pad">
        <CatalogToolbar
          category={category}
          query={query}
          onCategoryChange={setCategory}
          onQueryChange={setQuery}
        />
        <div className="catalog-count">
          <span>{filtered.length} produse</span>
          <span>La comandă · Măsurări disponibile</span>
        </div>
        {shown.length ? (
          <div className="product-grid">
            {shown.map((p) => (
              <ProductCard key={p.id} product={p} navigate={navigate} />
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
      </section>
      <section className="catalog-note">
        <span>Mai frumos în realitate</span>
        <h2>Vino să simți texturile.</h2>
        <button className="btn cream" onClick={() => navigate("/contact")}>
          Programează o vizită →
        </button>
      </section>
    </>
  );
}
