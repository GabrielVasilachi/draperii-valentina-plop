import { PageHero } from "../../shared/components/PageHero";
import type { Navigate } from "../../shared/types/navigation";
import { ServiceStepCard } from "./components/ServiceStepCard";
import { serviceSteps } from "./data/serviceSteps";

export function ServicesPage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <PageHero
        eyebrow="Servicii complete"
        title="Un proces simplu, un rezultat impecabil."
      >
        Patru pași. Un singur atelier. Fără griji.
      </PageHero>
      <section className="services-list section-pad">
        {serviceSteps.map((service, index) => (
          <ServiceStepCard
            key={service.title}
            service={service}
            reversed={index % 2 === 1}
          />
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
