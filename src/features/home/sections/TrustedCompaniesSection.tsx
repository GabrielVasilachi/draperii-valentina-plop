import { companyPlaceholders } from "../data/homeContent";

export function TrustedCompaniesSection() {
  return (
    <section className="trusted-by">
      <div className="trusted-by-copy">
        <span>Peste 350 de clienți satisfăcuți</span>
        <b>Ne-au ales pentru spații în care oamenii se simt bine.</b>
      </div>
      <div className="company-row" aria-label="Companii partenere">
        {companyPlaceholders.map((company) => (
          <span key={company}>{company}</span>
        ))}
      </div>
    </section>
  );
}
