import { useState } from "react";
import type { Navigate } from "../../../shared/types/navigation";
import { PartnerGalleryModal } from "../components/PartnerGalleryModal";
import { partnerProjects, type PartnerProject } from "../data/partners";

export function TrustedCompaniesSection({ navigate }: { navigate: Navigate }) {
  const [selectedPartner, setSelectedPartner] = useState<PartnerProject | null>(
    null,
  );

  return (
    <>
      <section className="trusted-by" aria-labelledby="trusted-companies-title">
        <div className="trusted-by-copy">
          <span>Au ales atelierul nostru</span>
          <h2 id="trusted-companies-title">Companii cu care am lucrat</h2>
          <p>Selectează un logo pentru a vedea proiectul.</p>
        </div>

        <div className="company-row" aria-label="Proiecte pentru parteneri">
          {partnerProjects.map((partner) => (
            <button
              key={partner.id}
              className={`partner-card ${partner.logoTone}`}
              type="button"
              onClick={() => setSelectedPartner(partner)}
              aria-label={`Deschide galeria proiectului ${partner.name}`}
            >
              <span className="partner-card-logo">
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  loading="lazy"
                />
              </span>
              <span className="partner-card-copy">
                <span>
                  <small>{partner.type}</small>
                  <b>{partner.name}</b>
                </span>
                <span className="partner-card-action">
                  <span>Vezi proiectele</span>
                  <i aria-hidden="true">↗</i>
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedPartner && (
        <PartnerGalleryModal
          partner={selectedPartner}
          navigate={navigate}
          onClose={() => setSelectedPartner(null)}
        />
      )}
    </>
  );
}
