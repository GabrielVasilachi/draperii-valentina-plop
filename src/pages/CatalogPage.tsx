import { useMemo, useState } from "react";
import { PageHero } from "../components/PageHero";
import { ProductCard } from "../components/ProductCard";
import { categories, products } from "../data/products";
import type { Navigate } from "../types/navigation";

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
      <PageHero
        eyebrow="Colecții textile"
        title="Alege textura care ți se potrivește."
      >
        De la in aerisit la catifea bogată și soluții blackout — fiecare produs
        este adaptat dimensiunilor și stilului casei tale.
      </PageHero>
      <section className="catalog section-pad">
        <div className="catalog-toolbar">
          <div className="filters" aria-label="Filtrează produsele">
            {categories.map((c) => (
              <button
                key={c}
                className={category === c ? "active" : ""}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="search">
            <span>⌕</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Caută în colecții"
              aria-label="Caută produse"
            />
          </label>
        </div>
        <div className="catalog-count">
          <span>{filtered.length} produse</span>
          <span>Realizate la comandă · Preț la solicitare</span>
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
          <div className="pagination">
            <button disabled={page === 1} onClick={() => navigate("/magazin")}>
              ←
            </button>
            <button
              className={page === 1 ? "active" : ""}
              onClick={() => navigate("/magazin")}
            >
              1
            </button>
            <button
              className={page === 2 ? "active" : ""}
              onClick={() => navigate("/magazin/page/2")}
            >
              2
            </button>
            <button
              disabled={page === 2}
              onClick={() => navigate("/magazin/page/2")}
            >
              →
            </button>
          </div>
        )}
      </section>
      <section className="catalog-note">
        <span>Nu știi ce material să alegi?</span>
        <h2>
          Vino să vezi și să simți
          <br />
          texturile în salon.
        </h2>
        <button className="btn cream" onClick={() => navigate("/contact")}>
          Programează o vizită →
        </button>
      </section>
    </>
  );
}
