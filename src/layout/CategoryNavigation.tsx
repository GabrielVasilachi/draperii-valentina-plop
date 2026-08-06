import type { Navigate } from "../shared/types/navigation";
import { shopCategories } from "./navigation";

export function CategoryNavigation({ navigate }: { navigate: Navigate }) {
  return (
    <nav className="shop-nav" aria-label="Categorii magazin">
      {shopCategories.map((label) => (
        <button key={label} onClick={() => navigate("/magazin")}>
          {label}
        </button>
      ))}
      <button className="shop-nav-offer" onClick={() => navigate("/contact")}>
        Măsurări & montaj ↗
      </button>
    </nav>
  );
}
