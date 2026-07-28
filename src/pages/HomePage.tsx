import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import type { Navigate } from "../types/navigation";

const companyPlaceholders = [
  "Compania 01",
  "Compania 02",
  "Compania 03",
  "Compania 04",
  "Compania 05",
  "Compania 06",
];

export function HomePage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">Atelier de textile · Chișinău</span>
          <h1>
            Ferestre îmbrăcate
            <br />
            <em>cu personalitate.</em>
          </h1>
          <p>
            Perdele și draperii realizate la comandă, de la prima idee până la
            montajul impecabil în casa ta.
          </p>
          <div className="hero-actions">
            <button
              className="btn primary"
              onClick={() => navigate("/magazin")}
            >
              Descoperă colecțiile <span>→</span>
            </button>
            <button className="btn text" onClick={() => navigate("/contact")}>
              Vizitează salonul
            </button>
          </div>
          <div className="hero-proof">
            <span>
              <b>15+</b>
              <small>tipuri de produse</small>
            </span>
            <span>
              <b>3 pași</b>
              <small>de la idee la montaj</small>
            </span>
            <span>
              <b>Chișinău</b>
              <small>salon local</small>
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/images/hero-draperii.jpg"
            alt="Draperii bej și perdele albe într-un living modern"
          />
          <div className="hero-note">
            <span>Materiale atent alese</span>
            <b>Texturi care schimbă atmosfera.</b>
          </div>
        </div>
      </section>
      <section className="intro section-pad">
        <div>
          <span className="eyebrow">Eleganță · Stil · Confort</span>
          <h2>
            Totul începe cu lumina
            <br />
            din camera ta.
          </h2>
        </div>
        <div>
          <p>
            Credem că draperiile nu sunt doar un detaliu decorativ. Ele definesc
            lumina, intimitatea și starea de bine a unei încăperi.
          </p>
          <p>
            În salon alegem împreună țesătura, nuanța și sistemul potrivit, apoi
            ne ocupăm de măsurare, coasere și montare.
          </p>
          <button className="link-btn" onClick={() => navigate("/despre-noi")}>
            Povestea atelierului ↗
          </button>
        </div>
      </section>
      <section
        className="trusted-by section-pad"
        aria-labelledby="trusted-by-title"
      >
        <div className="trusted-by-heading">
          <span className="eyebrow">Încredere construită în timp</span>
          <h2 id="trusted-by-title">
            <strong>Peste 350</strong> de clienți satisfăcuți
          </h2>
          <p>Companii care au ales serviciile și soluțiile noastre textile.</p>
        </div>
        <div
          className="company-grid"
          aria-label="Companii cu care am colaborat"
        >
          {companyPlaceholders.map((company, index) => (
            <div className="company-placeholder" key={company}>
              <span>Logo</span>
              <b>{company}</b>
              <small>Partener {String(index + 1).padStart(2, "0")}</small>
            </div>
          ))}
        </div>
      </section>
      <section className="featured section-pad">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Selecția noastră</span>
            <h2>Colecții pentru orice atmosferă</h2>
          </div>
          <button className="btn outline" onClick={() => navigate("/magazin")}>
            Vezi toate produsele →
          </button>
        </div>
        <div className="product-grid four">
          {products
            .filter((p) => p.featured)
            .slice(0, 4)
            .map((p) => (
              <ProductCard key={p.id} product={p} navigate={navigate} />
            ))}
        </div>
      </section>
      <section className="service-preview">
        <div className="service-image">
          <img
            src="/images/consultanta.jpg"
            alt="Consultanță pentru alegerea materialelor"
          />
        </div>
        <div className="service-copy">
          <span className="eyebrow light">Serviciu complet</span>
          <h2>
            De la mostre
            <br />
            la ultima cută.
          </h2>
          <p>Un singur atelier, fiecare etapă atent coordonată.</p>
          {[
            "Consultanță personalizată",
            "Măsurători precise",
            "Coasere la comandă",
            "Montare profesionistă",
          ].map((x, i) => (
            <div className="step" key={x}>
              <span>0{i + 1}</span>
              <b>{x}</b>
            </div>
          ))}
          <button className="btn cream" onClick={() => navigate("/servicii")}>
            Cum lucrăm →
          </button>
        </div>
      </section>
      <section className="quote section-pad">
        <span className="quote-mark">“</span>
        <blockquote>
          Când alegem materialul potrivit, nu decorăm doar o fereastră —
          schimbăm felul în care se simte întreaga casă.
        </blockquote>
        <p>— Valentina Plop</p>
      </section>
      <section className="cta-band">
        <div>
          <span className="eyebrow">Hai să vorbim despre casa ta</span>
          <h2>Începe cu o consultație.</h2>
        </div>
        <button className="btn primary" onClick={() => navigate("/contact")}>
          Programează o vizită →
        </button>
      </section>
    </>
  );
}
