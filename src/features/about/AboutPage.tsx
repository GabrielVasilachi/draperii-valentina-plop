import { PageHero } from "../../shared/components/PageHero";
import type { Navigate } from "../../shared/types/navigation";

export function AboutPage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <PageHero
        eyebrow="Despre atelier"
        title="Croit cu răbdare. Montat cu precizie."
      >
        Atelier local. Textile la comandă. Grijă pentru fiecare detaliu.
      </PageHero>
      <section className="about-story section-pad">
        <div className="about-collage">
          <img
            src="/images/consultanta.jpg"
            alt="Alegerea materialelor în salon"
          />
          <img
            src="/images/coasere.jpg"
            alt="Coaserea draperiilor în atelier"
          />
        </div>
        <div>
          <span className="eyebrow">Filosofia noastră</span>
          <h2>Fiecare casă merită ceva făcut pentru ea.</h2>
          <p>
            Alegem, croim și montăm fiecare proiect în jurul luminii și stilului
            tău.
          </p>
          <div className="values">
            <span>
              <b>Personal</b>
              <small>Alegem împreună</small>
            </span>
            <span>
              <b>Local</b>
              <small>Atelier în Chișinău</small>
            </span>
            <span>
              <b>Complet</b>
              <small>De la idee la montaj</small>
            </span>
          </div>
        </div>
      </section>
      <section className="materials">
        <div>
          <span className="eyebrow light">Materiale & detalii</span>
          <h2>
            Calitatea se vede.
            <br />
            Și se simte.
          </h2>
        </div>
        <div className="material-list">
          <span>
            <b>01</b>In natural
          </span>
          <span>
            <b>02</b>Catifea
          </span>
          <span>
            <b>03</b>Blackout
          </span>
          <span>
            <b>04</b>Texturi soft
          </span>
          <span>
            <b>05</b>Lemn natural
          </span>
          <span>
            <b>06</b>Accesorii
          </span>
        </div>
      </section>
      <section className="cta-band">
        <div>
          <span className="eyebrow">Descoperă materialele</span>
          <h2>Te așteptăm în salon.</h2>
        </div>
        <button className="btn primary" onClick={() => navigate("/contact")}>
          Vezi contactele →
        </button>
      </section>
    </>
  );
}
