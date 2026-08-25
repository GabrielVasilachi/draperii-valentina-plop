import { useEffect, useRef } from "react";
import { categories, products } from "../../products/data/products";

type Category = (typeof categories)[number];

type CatalogToolbarProps = {
  category: Category;
  query: string;
  resultCount: number;
  onCategoryChange: (category: Category) => void;
  onQueryChange: (query: string) => void;
  onReset: () => void;
  onContact: () => void;
};

export function CatalogToolbar({
  category,
  query,
  resultCount,
  onCategoryChange,
  onQueryChange,
  onReset,
  onContact,
}: CatalogToolbarProps) {
  const hasFilters = category !== "Toate" || Boolean(query.trim());
  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasFilters) filtersRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [hasFilters]);

  return (
    <aside className="catalog-sidebar" aria-label="Căutare și categorii">
      <div className="catalog-sidebar-heading">
        <span>Navigare rapidă</span>
        <h2>Găsește produsul</h2>
      </div>

      <div className="catalog-search">
        <span aria-hidden="true">⌕</span>
        <input
          id="catalog-search-input"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Caută produs, material sau stil"
          aria-label="Caută după produs, material sau stil"
          aria-describedby="catalog-results-count"
          enterKeyHint="search"
        />
        {query && (
          <button
            className="catalog-search-clear"
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Șterge textul căutat"
          >
            ×
          </button>
        )}
      </div>

      <div className="catalog-filter-group">
        <h3>Categorii</h3>
        <div ref={filtersRef} className="filters" aria-label="Filtrează produsele">
          {categories.map((option) => {
            const count = option === "Toate"
              ? products.length
              : products.filter((product) => product.category === option).length;

            return (
              <button
                key={option}
                type="button"
                className={category === option ? "active" : ""}
                aria-pressed={category === option}
                onClick={() => onCategoryChange(option)}
              >
                <span>{option}</span>
                <small>{count}</small>
              </button>
            );
          })}
          {hasFilters && (
            <button
              className="catalog-filter-reset-mobile"
              type="button"
              onClick={onReset}
            >
              Resetează
            </button>
          )}
        </div>
      </div>

      {hasFilters && (
        <div className="catalog-filter-feedback" aria-live="polite">
          <span>
            <strong>{resultCount}</strong> {resultCount === 1 ? "produs găsit" : "produse găsite"}
          </span>
          <button className="catalog-clear" type="button" onClick={onReset}>
            Resetează
          </button>
        </div>
      )}

      <div className="catalog-sidebar-help">
        <span>Ai nevoie de ajutor?</span>
        <p>Te ajutăm să alegi materialul și sistemul potrivit.</p>
        <button className="btn primary" type="button" onClick={onContact}>Contactează-ne</button>
      </div>
    </aside>
  );
}
