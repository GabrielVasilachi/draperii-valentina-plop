import { ContactForm } from "../../contact/components/ContactForm";
import { SocialLinks } from "../../../shared/components/SocialLinks";

export function HomeContactSection() {
  return (
    <section className="home-contact">
      <div className="home-contact-inner">
        <div className="home-contact-copy">
          <span className="eyebrow light">Ai o întrebare?</span>
          <h2>Începe o discuție cu noi.</h2>
          <a className="home-contact-phone" href="tel:+37369212709">+373 69 212 709</a>
          <SocialLinks className="home-contact-socials" showLabels />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
