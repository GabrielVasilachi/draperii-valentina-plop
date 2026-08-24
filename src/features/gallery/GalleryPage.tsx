import { useState } from "react";
import { PartnerGalleryModal } from "../home/components/PartnerGalleryModal";
import { partnerProjects, type PartnerProject } from "../home/data/partners";
import type { Navigate } from "../../shared/types/navigation";

export function GalleryPage({ navigate }: { navigate: Navigate }) {
  const [selected, setSelected] = useState<PartnerProject | null>(null);
  const projects = partnerProjects.filter((partner) => partner.images.length > 0);

  return (
    <>
      <section className="social-hero">
        <span className="eyebrow">Proiecte finalizate</span>
        <h1>Galerie</h1>
        <p>Lucrări reale, realizate de atelierul nostru.</p>
      </section>
      <section className="project-gallery section-pad" aria-label="Galeria proiectelor">
        {projects.map((partner) => (
          <button key={partner.id} className="project-tile" onClick={() => setSelected(partner)}>
            <img src={partner.images[0].src} alt={partner.images[0].alt} />
            <span>
              <small>{partner.type}</small>
              <b>{partner.name}</b>
              <i aria-hidden="true">Vezi proiectul →</i>
            </span>
          </button>
        ))}
      </section>
      <section className="social-cta">
        <span>Lucrări realizate cu grijă</span>
        <h2>Inspiră-te din proiectele noastre.</h2>
        <button className="btn primary" onClick={() => navigate("/contact")}>Cere o ofertă →</button>
      </section>
      {selected && <PartnerGalleryModal partner={selected} navigate={navigate} onClose={() => setSelected(null)} />}
    </>
  );
}
