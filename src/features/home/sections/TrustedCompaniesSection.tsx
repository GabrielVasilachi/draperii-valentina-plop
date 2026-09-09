import { useState } from "react";
import type { Navigate } from "../../../shared/types/navigation";
import { PartnerGalleryModal } from "../components/PartnerGalleryModal";
import { partnerProjects, type PartnerProject } from "../data/partners";

export function TrustedCompaniesSection({ navigate }: { navigate: Navigate }) {
  const [selectedPartner, setSelectedPartner] = useState<PartnerProject | null>(
    null,
  );
  const partnersWithGallery = partnerProjects.filter(
    (partner) => partner.images.length > 0,
  );
  const partnersWithoutGallery = partnerProjects.filter(
    (partner) => partner.images.length === 0,
  );
  const displayedPartners = [
    ...partnersWithGallery,
    ...partnersWithoutGallery,
  ];

  const renderPartnerCardContent = (partner: PartnerProject) => (
    <>
      <span className="partner-card-logo">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.logoAlt ?? `Logo ${partner.name}`}
            loading="lazy"
          />
        ) : (
          <span className="partner-nameplate">{partner.name}</span>
        )}
      </span>
      <span className="partner-card-copy">
        <span>
          <small>{partner.type}</small>
          <b>{partner.name}</b>
          {partner.images.length > 0 && (
            <span className="partner-card-mobile-action" aria-hidden="true">
              Vezi galeria
            </span>
          )}
        </span>
        {partner.images.length > 0 && (
          <span className="partner-card-action" aria-hidden="true">
            <span>Vezi proiectul</span>
          </span>
        )}
      </span>
    </>
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
          {displayedPartners.map((partner) =>
            partner.images.length > 0 ? (
              <button
                key={partner.id}
                className={`partner-card ${partner.logoTone}`}
                type="button"
                onClick={() => setSelectedPartner(partner)}
                aria-label={`Deschide galeria colaborării cu ${partner.name}`}
              >
                {renderPartnerCardContent(partner)}
              </button>
            ) : (
              <article
                key={partner.id}
                className={`partner-card no-gallery ${partner.logoTone}`}
                aria-label={`${partner.name}, colaborare fără fotografii disponibile`}
              >
                {renderPartnerCardContent(partner)}
              </article>
            ),
          )}
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
