import { useState } from "react";
import { SocialLinks } from "../shared/components/SocialLinks";
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
      <nav className="desktop-nav nav-left" aria-label="Navigare principală">
        {mainNavigation.slice(0, 3).map(([to, label]) => (
          <button
            key={to}
            onClick={() => go(to)}
            className={path === to || (to === "/catalog" && path.startsWith(to)) ? "active" : ""}
          >
            {label}
          </button>
        ))}
      </nav>

      <button
        className="brand"
        onClick={() => go("/")}
        aria-label="Draperii Valentina Plop — Acasă"
      >
        <span className="brand-mark" aria-hidden="true">V</span>
        <span>
          <b>VALENTINA PLOP</b>
          <small>DRAPERII & PERDELE</small>
        </span>
      </button>

      <div className="desktop-nav nav-right">
        {mainNavigation.slice(3).map(([to, label]) => (
          <button
            key={to}
            onClick={() => go(to)}
            className={path === to ? "active" : ""}
          >
            {label}
          </button>
        ))}
        <a className="header-phone" href="tel:+37369212709">+373 69 212 709</a>
        <SocialLinks className="header-socials" />
      </div>

      <button
        className={menuOpen ? "menu-toggle open" : "menu-toggle"}
        aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <a className="mobile-phone" href="tel:+37369212709" aria-label="Sună atelierul">Sună</a>

      <nav className={menuOpen ? "mobile-nav open" : "mobile-nav"} aria-label="Navigare mobilă">
        {mainNavigation.map(([to, label]) => (
          <button
            key={to}
            onClick={() => go(to)}
            className={path === to || (to === "/catalog" && path.startsWith(to)) ? "active" : ""}
          >
            {label}<span aria-hidden="true">→</span>
          </button>
        ))}
        <a href="tel:+37369212709">+373 69 212 709</a>
        <SocialLinks className="mobile-socials" />
      </nav>
    </header>
  );
}
