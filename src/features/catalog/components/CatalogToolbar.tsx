import { categories } from "../../products/data/products";

type Category = (typeof categories)[number];

type CatalogToolbarProps = {
  category: Category;
  query: string;
  onCategoryChange: (category: Category) => void;
  onQueryChange: (query: string) => void;
};

export function CatalogToolbar({
  category,
  query,
  onCategoryChange,
  onQueryChange,
}: CatalogToolbarProps) {
  return (
    <div className="catalog-toolbar">
      <div className="filters" aria-label="Filtrează produsele">
        {categories.map((option) => (
          <button
            key={option}
            className={category === option ? "active" : ""}
            onClick={() => onCategoryChange(option)}
          >
            {option}
          </button>
        ))}
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
    </div>
  );
}
