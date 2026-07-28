import { useState, type ReactNode } from "react";
import type { Navigate } from "../types/navigation";

const nav = [
  ["/", "Acasă"],
  ["/magazin", "Colecții"],
  ["/servicii", "Servicii"],
  ["/despre-noi", "Despre noi"],
  ["/contact", "Contact"],
];

export function SiteLayout({
  children,
  path,
  navigate,
}: {
  children: ReactNode;
  path: string;
  navigate: Navigate;
}) {
  const [open, setOpen] = useState(false);
  const go = (to: string) => {
    setOpen(false);
    navigate(to);
  };
  return (
    <>
      <div className="announcement">
        Consultație personalizată în salon ·{" "}
        <a href="tel:+37369212709">+373 69 212 709</a>
      </div>
      <header className="site-header">
        <button
          className="brand"
          onClick={() => go("/")}
          aria-label="Draperii Valentina Plop — Acasă"
        >
          <span className="brand-mark">VP</span>
          <span>
            <b>Valentina Plop</b>
            <small>DRAPERII · PERDELE</small>
          </span>
        </button>
        <button
          className="menu-toggle"
          aria-label="Deschide meniul"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Închide" : "Meniu"}
        </button>
        <nav
          className={open ? "main-nav open" : "main-nav"}
          aria-label="Navigare principală"
        >
          {nav.map(([to, label]) => (
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
        <button className="header-cta" onClick={() => go("/contact")}>
          Programează o vizită <span>↗</span>
        </button>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="footer-top">
          <div>
            <span className="eyebrow light">Draperii Valentina Plop</span>
            <h2>
              Frumusețe țesută
              <br />
              pentru casa ta.
            </h2>
          </div>
          <div>
            <h3>Vizitează salonul</h3>
            <p>
              Str. Vasile Lupu 61/6
              <br />
              Chișinău, Moldova
            </p>
            <a
              href="https://maps.app.goo.gl/11ReQiePUjVsZnUk8"
              target="_blank"
              rel="noreferrer"
            >
              Deschide în Google Maps ↗
            </a>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              <a href="tel:+37369212709">+373 69 212 709</a>
            </p>
            <p>
              Consultații și comenzi
              <br />
              prin telefon sau în salon.
            </p>
          </div>
          <div>
            <h3>Navigare</h3>
            {nav.slice(1).map(([to, label]) => (
              <button key={to} onClick={() => go(to)}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Draperii Valentina Plop</span>
          <span>Creat cu grijă în Chișinău</span>
        </div>
      </footer>
      <a
        className="floating-call"
        href="tel:+37369212709"
        aria-label="Sună acum"
      >
        ☎ <span>Sună acum</span>
      </a>
    </>
  );
}
