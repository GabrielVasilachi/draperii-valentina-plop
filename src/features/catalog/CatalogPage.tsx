import { useEffect, useMemo, useRef, useState } from "react";
import { ProductCard } from "../products/components/ProductCard";
import { categories, products } from "../products/data/products";
import type { Navigate } from "../../shared/types/navigation";
import { CatalogPagination } from "./components/CatalogPagination";
import { CatalogToolbar } from "./components/CatalogToolbar";

const normalizeSearchValue = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("ro-RO")
    .trim();

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
  const catalogRef = useRef<HTMLElement>(null);
  const shouldRepositionCatalogRef = useRef(false);
  const requestedPage = path.includes("/page/2") ? 2 : 1;
  const filtered = useMemo(() => {
    const searchTerm = normalizeSearchValue(query);

    return products.filter((product) => {
      const matchesCategory = category === "Toate" || product.category === category;
      const searchableContent = normalizeSearchValue([
        product.name,
        product.category,
        product.subcategory,
        product.description,
      ].join(" "));

      return matchesCategory && (!searchTerm || searchableContent.includes(searchTerm));
    });
  }, [category, query]);
  const hasFilters = category !== "Toate" || Boolean(query.trim());
  const page = hasFilters ? 1 : requestedPage;
  const shown = hasFilters
    ? filtered
    : filtered.slice(page === 1 ? 0 : 9, page === 1 ? 9 : 15);
  const changeCategory = (nextCategory: (typeof categories)[number]) => {
    shouldRepositionCatalogRef.current = true;
    setCategory(nextCategory);
  };
  const changeQuery = (nextQuery: string) => {
    shouldRepositionCatalogRef.current = true;
    if (nextQuery.trim()) setCategory("Toate");
    setQuery(nextQuery);
  };
  const resetFilters = () => {
    shouldRepositionCatalogRef.current = true;
    setCategory("Toate");
    setQuery("");
  };

  useEffect(() => {
    if (!shouldRepositionCatalogRef.current) return;
    shouldRepositionCatalogRef.current = false;
    if (!window.matchMedia("(max-width: 820px)").matches) return;

    const frame = window.requestAnimationFrame(() => {
      const catalog = catalogRef.current;
      if (!catalog) return;

      const headerHeight = document.querySelector(".site-header")
        ?.getBoundingClientRect().height ?? 66;
      const catalogTop = catalog.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({ top: Math.max(0, catalogTop - headerHeight), behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [category, query]);

  return (
    <>
      <header className="catalog-intro">
        <div>
          <span>Catalog online</span>
          <h1>Găsește modelul potrivit</h1>
          <p>Alege modelul potrivit pentru spațiul tău. Toate produsele sunt realizate la comandă.</p>
        </div>
        <div className="catalog-intro-total">
          <strong>{products.length}</strong>
          <span>modele disponibile</span>
        </div>
      </header>

      <section className="catalog" ref={catalogRef}>
        <div className="catalog-layout">
          <div className="catalog-results">
            <div className="catalog-results-header">
              <div>
                <span className="catalog-results-label">Produse</span>
                <h2>
                  {query.trim()
                    ? `Rezultate pentru „${query.trim()}”`
                    : category === "Toate" ? "Toate modelele" : category}
                </h2>
              </div>
              <span className="catalog-count" id="catalog-results-count" aria-live="polite">
                {filtered.length} {filtered.length === 1 ? "rezultat" : "rezultate"}
              </span>
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
                <button className="btn outline" type="button" onClick={resetFilters}>
                  Șterge filtrele
                </button>
              </div>
            )}

            {!hasFilters && (
              <CatalogPagination page={page} navigate={navigate} />
            )}
          </div>

          <CatalogToolbar
            category={category}
            query={query}
            resultCount={filtered.length}
            onCategoryChange={changeCategory}
            onQueryChange={changeQuery}
            onReset={resetFilters}
            onContact={() => navigate("/contact")}
          />
        </div>
      </section>
    </>
  );
}
