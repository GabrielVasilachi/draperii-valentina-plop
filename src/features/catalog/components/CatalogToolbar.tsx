import { categories, products } from "../../products/data/products";

type Category = (typeof categories)[number];

type CatalogToolbarProps = {
  category: Category;
  query: string;
  onCategoryChange: (category: Category) => void;
  onQueryChange: (query: string) => void;
  onContact: () => void;
};

export function CatalogToolbar({
  category,
  query,
  onCategoryChange,
  onQueryChange,
  onContact,
}: CatalogToolbarProps) {
  return (
    <aside className="catalog-sidebar" aria-label="Căutare și categorii">
      <div className="catalog-sidebar-heading">
        <span>Navigare rapidă</span>
        <h2>Găsește produsul</h2>
      </div>

      <label className="search">
        <span>⌕</span>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Caută în colecții"
          aria-label="Caută produse"
        />
      </label>

      <div className="catalog-filter-group">
        <h3>Categorii</h3>
        <div className="filters" aria-label="Filtrează produsele">
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
        </div>
      </div>

      {(category !== "Toate" || query) && (
        <button
          className="catalog-clear"
          type="button"
          onClick={() => {
            onCategoryChange("Toate");
            onQueryChange("");
          }}
        >
          Resetează filtrele
        </button>
      )}

      <div className="catalog-sidebar-help">
        <span>Ai nevoie de ajutor?</span>
        <p>Te ajutăm să alegi materialul și sistemul potrivit.</p>
        <button className="btn primary" type="button" onClick={onContact}>Contactează-ne</button>
      </div>
    </aside>
  );
}
