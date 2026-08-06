import { PageHero } from "../../shared/components/PageHero";
import { ContactDetails } from "./components/ContactDetails";
import { ContactForm } from "./components/ContactForm";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Hai să găsim soluția potrivită casei tale."
      >
        Sună-ne sau vino să vezi mostrele în salon.
      </PageHero>
      <section className="contact-wrap section-pad">
        <ContactDetails />
        <ContactForm />
      </section>
      <section className="map-section">
        <iframe
          title="Locația Draperii Valentina Plop"
          src="https://www.google.com/maps?q=Strada%20Vasile%20Lupu%2061%2F6%2C%20Chi%C8%99in%C4%83u&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
