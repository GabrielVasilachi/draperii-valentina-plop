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
          <p>Restaurante, săli de evenimente și instituții. Descoperă colaborările noastre.</p>
        </div>

        <div className="company-row" aria-label="Proiecte pentru parteneri">
          {partnerProjects.map((partner) => (
            <button
              key={partner.id}
              className={`partner-card ${partner.logoTone}`}
              type="button"
              onClick={() => setSelectedPartner(partner)}
              aria-label={`Descoperă colaborarea cu ${partner.name}`}
            >
              <span className="partner-card-logo">
                {partner.logo ? <img
                  src={partner.logo}
                  alt={partner.logoAlt ?? `Logo ${partner.name}`}
                  loading="lazy"
                /> : <span className="partner-nameplate">{partner.name}</span>}
              </span>
              <span className="partner-card-copy">
                <span>
                  <small>{partner.type}</small>
                  <b>{partner.name}</b>
                  <span className="partner-card-mobile-action" aria-hidden="true">
                    {partner.images.length ? "Vezi galeria" : "Vezi colaborarea"}
                  </span>
                </span>
                <span className="partner-card-action">
                  <span>{partner.images.length ? "Vezi proiectul" : "Vezi colaborarea"}</span>
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
