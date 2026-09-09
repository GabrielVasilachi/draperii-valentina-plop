import { PageHero } from "../../shared/components/PageHero";
import type { Navigate } from "../../shared/types/navigation";

export function AboutPage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <PageHero
        eyebrow="Despre atelier"
        title="Croit cu răbdare. Montat cu precizie."
      >
        Peste 25 de ani de experiență în perdele și draperii la comandă.
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
            De peste 25 de ani, Valentina Plop lucrează în domeniul perdelelor și
            draperiilor. De-a lungul timpului, zeci de mii de clienți ne-au ales
            pentru textile realizate la comandă.
          </p>
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
      <section className="textile-document section-pad" aria-labelledby="textile-document-title">
        <a href="/images/about/certificat-textile-2020.jpg" target="_blank" rel="noreferrer" aria-label="Deschide copia certificatului textil din 2020">
          <img src="/images/about/certificat-textile-2020.jpg" alt="Copie certificat OEKO-TEX STANDARD 100, SHGO 064180, datată 30 iunie 2020" loading="lazy" />
        </a>
        <div>
          <span className="eyebrow">Materiale · Documentație</span>
          <h2 id="textile-document-title">Certificat pentru textile</h2>
          <p>Copie a certificatului OEKO-TEX STANDARD 100, nr. SHGO 064180, datată 30 iunie 2020, pentru articolele textile descrise în document.</p>
          <p>Pentru informații despre certificarea materialului ales și documentația actuală, te așteptăm în salon.</p>
          <a className="btn primary" href="/images/about/certificat-textile-2020.jpg" target="_blank" rel="noreferrer">Vezi documentul</a>
        </div>
      </section>
      <section className="cta-band">
        <div>
          <span className="eyebrow">Descoperă materialele</span>
          <h2>Te așteptăm în salon.</h2>
        </div>
        <button className="btn primary" onClick={() => navigate("/contact")}>
          Vezi contactele
        </button>
      </section>
    </>
  );
}
