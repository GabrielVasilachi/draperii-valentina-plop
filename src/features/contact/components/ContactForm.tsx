import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="contact-form-box">
        <div className="success">
          <span>✓</span>
          <h2>Mulțumim!</h2>
          <p>
            Pentru un răspuns imediat, sună la{" "}
            <a href="tel:+37369212709">+373 69 212 709</a>.
          </p>
          <button className="btn outline" onClick={() => setSent(false)}>
            Trimite alt mesaj
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-box">
      <form onSubmit={submit}>
        <h2>Povestește-ne despre proiect</h2>
        <p>Lasă-ne datele. Revenim noi.</p>
        <div className="field-row">
          <label>
            Nume
            <input name="name" placeholder="Numele tău" required />
          </label>
          <label>
            Telefon
            <input name="phone" type="tel" placeholder="+373 ..." required />
          </label>
        </div>
        <label>
          Email
          <input name="email" type="email" placeholder="nume@email.com" />
        </label>
        <label>
          Ce te interesează?
          <select name="interest">
            <option>Perdele și draperii</option>
            <option>Draperii romane</option>
            <option>Jaluzele din lemn</option>
            <option>Coasere</option>
            <option>Măsurători și montare</option>
          </select>
        </label>
        <label>
          Mesaj
          <textarea
            name="message"
            rows={5}
            placeholder="Pe scurt, ce îți dorești?"
            required
          />
        </label>
        <button className="btn primary" type="submit">
          Trimite solicitarea →
        </button>
        <small>Te contactăm doar despre această solicitare.</small>
      </form>
    </div>
  );
}
