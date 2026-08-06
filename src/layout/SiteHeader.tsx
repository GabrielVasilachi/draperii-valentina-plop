import { useState } from "react";
import type { Navigate } from "../shared/types/navigation";
import { mainNavigation } from "./navigation";

type SiteHeaderProps = {
  path: string;
  navigate: Navigate;
};

export function SiteHeader({ path, navigate }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (to: string) => {
    setMenuOpen(false);
    navigate(to);
  };

  return (
    <header className="site-header">
      <button
        className="brand"
        onClick={() => go("/")}
        aria-label="Draperii Valentina Plop — Acasă"
      >
        <span className="brand-mark">VP</span>
        <span>
          <b>Valentina Plop</b>
          <small>ATELIER DE TEXTILE</small>
        </span>
      </button>

      <button
        className="menu-toggle"
        aria-label="Deschide meniul"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "Închide" : "Meniu"}
      </button>

      <nav
        className={menuOpen ? "main-nav open" : "main-nav"}
        aria-label="Navigare principală"
      >
        {mainNavigation.map(([to, label]) => (
          <button
            key={to}
            onClick={() => go(to)}
            className={
              path === to || (to === "/magazin" && path.startsWith(to))
                ? "active"
                : ""
            }
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="header-actions">
        <a href="tel:+37369212709" aria-label="Sună atelierul">
          ☎
        </a>
        <button className="header-cta" onClick={() => go("/contact")}>
          Cere ofertă
        </button>
      </div>
    </header>
  );
}
