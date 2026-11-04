import { useState } from "react";
import type { Navigate } from "../../../shared/types/navigation";
import { PartnerGalleryModal } from "../components/PartnerGalleryModal";
import { PartnerCarousel } from "../components/PartnerCarousel";
import { partnerProjects, type PartnerProject } from "../data/partners";

function PartnerLogo({ partner }: { partner: PartnerProject }) {
  return (
    <span className={`partner-brand ${partner.logoTone}`}>
      {partner.logo ? (
        <img src={partner.logo} alt={partner.logoAlt ?? `Logo ${partner.name}`} loading="lazy" />
      ) : (
        <span className="partner-nameplate">{partner.name}</span>
      )}
    </span>
  );
}

export function TrustedCompaniesSection({ navigate }: { navigate: Navigate }) {
  const [selectedPartner, setSelectedPartner] = useState<PartnerProject | null>(null);

  return (
    <>
      <section className="trusted-by" aria-label="Companii cu care am lucrat">
        <div className="partners-showcase">
          <header className="partners-minimal-heading">
            <h2>Companii cu care am lucrat</h2>
          </header>
          <PartnerCarousel
            galleryOpen={selectedPartner !== null}
            onSelect={setSelectedPartner}
            renderLogo={(partner) => <PartnerLogo partner={partner} />}
          />
          <div className="partners-logo-wall" aria-label="Colaborări cu galerie foto">
            {partnerProjects.filter((partner) => partner.images.length > 0).map((partner) => (
              <button
                key={partner.id}
                type="button"
                className={`partner-logo-link partner-logo-link--${partner.id}`}
                onClick={() => setSelectedPartner(partner)}
                aria-label={`Vezi proiectul ${partner.name}`}
                aria-haspopup="dialog"
                title={partner.name}
              >
                <PartnerLogo partner={partner} />
                <span className="partner-logo-invitation">Vezi proiectul <span aria-hidden="true">↗</span></span>
              </button>
            ))}
          </div>
          <div className="partners-other">
            <p>Și alte companii și instituții care ne-au acordat încrederea</p>
            <div className="partners-other-logos">
              {partnerProjects.filter((partner) => partner.images.length === 0).map((partner) => (
                <div key={partner.id} className="partner-logo-static" title={partner.name}>
                  <PartnerLogo partner={partner} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {selectedPartner && (
        <PartnerGalleryModal partner={selectedPartner} navigate={navigate} onClose={() => setSelectedPartner(null)} />
      )}
    </>
  );
}
