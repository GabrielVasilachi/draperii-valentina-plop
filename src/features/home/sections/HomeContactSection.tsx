import { ContactForm } from "../../contact/components/ContactForm";

export function HomeContactSection() {
  return (
    <section className="home-contact">
      <div className="home-contact-inner">
        <div className="home-contact-copy">
          <span className="eyebrow light">Ai o întrebare?</span>
          <h2>Începe o conversație cu noi.</h2>
          <a href="tel:+37369212709">+373 69 212 709</a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
