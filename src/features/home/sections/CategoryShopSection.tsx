import type { Navigate } from "../../../shared/types/navigation";
import { homeCategories } from "../data/homeContent";

export function CategoryShopSection({ navigate }: { navigate: Navigate }) {
  return (
    <section className="category-shop section-pad">
      <div className="compact-heading">
        <div>
          <span className="eyebrow">Categorii</span>
          <h2>Alege ce cauți</h2>
        </div>
        <button className="btn primary" onClick={() => navigate("/magazin")}>
          Vezi tot
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
              <b>{category.name}</b>
              <i aria-hidden="true">→</i>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
