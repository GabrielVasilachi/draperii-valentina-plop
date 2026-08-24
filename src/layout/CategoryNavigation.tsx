import type { Navigate } from "../shared/types/navigation";
import { shopCategories } from "./navigation";

export function CategoryNavigation({ navigate }: { navigate: Navigate }) {
  return (
    <nav className="shop-nav" aria-label="Categorii catalog">
      {shopCategories.map((label) => (
        <button key={label} onClick={() => navigate("/catalog")}>
          {label}
        </button>
      ))}
      <span className="shop-nav-note">Realizate la comandă</span>
    </nav>
  );
}
