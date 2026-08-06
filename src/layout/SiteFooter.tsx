import type { Navigate } from "../shared/types/navigation";
import { mainNavigation } from "./navigation";

export function SiteFooter({ navigate }: { navigate: Navigate }) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="brand-mark footer-mark">VP</span>
        <div>
          <b>Valentina Plop</b>
          <p>Textile făcute cu grijă în Chișinău.</p>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h3>Magazin</h3>
          {mainNavigation.slice(1, 4).map(([to, label]) => (
            <button key={to} onClick={() => navigate(to)}>
              {label}
            </button>
          ))}
        </div>
        <div>
          <h3>Salon</h3>
          <p>
            Str. Vasile Lupu 61/6
            <br />
            Chișinău
          </p>
          <a
            href="https://maps.app.goo.gl/11ReQiePUjVsZnUk8"
            target="_blank"
            rel="noreferrer"
          >
            Vezi harta ↗
          </a>
        </div>
        <div>
          <h3>Contact</h3>
          <a className="footer-phone" href="tel:+37369212709">
            +373 69 212 709
          </a>
          <button onClick={() => navigate("/contact")}>
            Program și contact →
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Valentina Plop</span>
        <span>Creat cu drag în Moldova</span>
      </div>
    </footer>
  );
}
