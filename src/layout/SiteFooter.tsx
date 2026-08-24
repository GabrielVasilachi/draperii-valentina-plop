import { SocialLinks } from "../shared/components/SocialLinks";
import { WorkingHours } from "../shared/components/WorkingHours";
import type { Navigate } from "../shared/types/navigation";
import { mainNavigation } from "./navigation";

export function SiteFooter({ navigate }: { navigate: Navigate }) {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-logo">
          <button onClick={() => navigate("/")} aria-label="Acasă">
            <span className="brand-mark footer-mark">V</span>
            <b>VALENTINA PLOP</b>
          </button>
          <p>Draperii & perdele</p>
          <SocialLinks className="footer-socials" />
        </div>
        <div>
          <h3>Telefon</h3>
          <a className="footer-phone" href="tel:+37369212709">+373 69 212 709</a>
          <button onClick={() => navigate("/contact")}>Scrie-ne un mesaj</button>
        </div>
        <div>
          <h3>Adresă</h3>
          <a
            href="https://maps.app.goo.gl/11ReQiePUjVsZnUk8"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              Str. Vasile Lupu 61/6
            <br />
              Chișinău, Moldova
            </p>
          </a>
        </div>
        <div>
          <h3>Program de lucru</h3>
          <WorkingHours compact />
          <button onClick={() => navigate("/contact")}>Programează o vizită</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-nav">
          {mainNavigation.map(([to, label]) => (
            <button key={to} onClick={() => navigate(to)}>{label}</button>
          ))}
        </div>
        <span>© {new Date().getFullYear()} Valentina Plop · Toate drepturile rezervate</span>
      </div>
      <div className="footer-credit">
        <a href="https://gabrielvasilachi.com" target="_blank" rel="noreferrer">
          Made with <span aria-hidden="true">♥</span> by <b>Gabi</b>
        </a>
      </div>
    </footer>
  );
}
