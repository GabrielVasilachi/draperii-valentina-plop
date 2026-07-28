import { PageHero } from "../components/PageHero";
import type { Navigate } from "../types/navigation";

const services = [
  {
    n: "01",
    title: "Consultanță",
    text: "Discutăm despre spațiu, lumină și atmosfera dorită. Comparăm texturi, nuanțe și sisteme pentru o alegere sigură.",
    image: "/images/consultanta.jpg",
  },
  {
    n: "02",
    title: "Măsurători",
    text: "Venim la locație și măsurăm cu precizie fiecare fereastră, ținând cont de mobilier, calorifere și tipul de prindere.",
    image: "/images/montare.jpg",
  },
  {
    n: "03",
    title: "Coasere la comandă",
    text: "Croim și coasem fiecare piesă în atelier, cu atenție la alinierea modelului, proporția pliurilor și finisaj.",
    image: "/images/coasere.jpg",
  },
  {
    n: "04",
    title: "Montare",
    text: "Instalăm sistemele și aranjăm materialul până când fiecare cută cade firesc. Spațiul rămâne curat și gata de admirat.",
    image: "/images/montare.jpg",
  },
];

export function ServicesPage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <PageHero
        eyebrow="Servicii complete"
        title="Un proces simplu, un rezultat impecabil."
      >
        Ne ocupăm de fiecare detaliu, de la prima mostră aleasă până la montarea
        finală în casa ta.
      </PageHero>
      <section className="services-list section-pad">
        {services.map((s, i) => (
          <article
            className={i % 2 ? "service-row reverse" : "service-row"}
            key={s.title}
          >
            <div className="service-row-image">
              <img src={s.image} alt={s.title} />
              <span>{s.n}</span>
            </div>
            <div>
              <span className="eyebrow">Etapa {s.n}</span>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <ul>
                {i === 0 ? (
                  <>
                    <li>Alegerea materialelor</li>
                    <li>Armonizarea culorilor</li>
                    <li>Soluții pentru controlul luminii</li>
                  </>
                ) : i === 1 ? (
                  <>
                    <li>Deplasare la locație</li>
                    <li>Evaluarea sistemului de prindere</li>
                    <li>Calculul necesarului de material</li>
                  </>
                ) : i === 2 ? (
                  <>
                    <li>Croire precisă</li>
                    <li>Mai multe tipuri de pliuri</li>
                    <li>Control atent al finisajului</li>
                  </>
                ) : (
                  <>
                    <li>Instalare sigură</li>
                    <li>Aranjarea draperiilor</li>
                    <li>Verificare finală</li>
                  </>
                )}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <section className="cta-band">
        <div>
          <span className="eyebrow">Proiectul tău poate începe azi</span>
          <h2>Spune-ne ce îți dorești.</h2>
        </div>
        <button className="btn primary" onClick={() => navigate("/contact")}>
          Cere o consultație →
        </button>
      </section>
    </>
  );
}
