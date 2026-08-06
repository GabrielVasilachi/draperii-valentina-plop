import type { Navigate } from "../../../shared/types/navigation";
import { homeCategories } from "../data/homeContent";

export function CategoryShopSection({ navigate }: { navigate: Navigate }) {
  return (
    <section className="category-shop section-pad">
      <div className="compact-heading">
        <div>
          <span className="eyebrow">Cumpără după categorie</span>
          <h2>Ce cauți pentru casa ta?</h2>
        </div>
        <button className="text-arrow" onClick={() => navigate("/magazin")}>
          Toate produsele <span>→</span>
        </button>
      </div>
      <div className="category-grid">
        {homeCategories.map((category) => (
          <button
            className="category-card"
            key={category.name}
            onClick={() => navigate("/magazin")}
          >
            <img src={category.image} alt="" />
            <span className="category-card-shade" />
            <span className="category-card-copy">
              <small>{category.note}</small>
              <b>{category.name}</b>
              <i>Descoperă →</i>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
