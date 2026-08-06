export function ContactDetails() {
  return (
    <div className="contact-info">
      <span className="eyebrow">Draperii Valentina Plop</span>
      <h2>
        Te așteptăm
        <br />
        cu drag.
      </h2>
      <div className="info-block">
        <small>Adresă</small>
        <p>
          Str. Vasile Lupu 61/6
          <br />
          Chișinău, Moldova
        </p>
        <a
          href="https://maps.app.goo.gl/11ReQiePUjVsZnUk8"
          target="_blank"
          rel="noreferrer"
        >
          Indicații pe Google Maps ↗
        </a>
      </div>
      <div className="info-block">
        <small>Telefon</small>
        <a className="big-link" href="tel:+37369212709">
          +373 69 212 709
        </a>
      </div>
      <div className="info-block">
        <small>Programări</small>
        <p>Sună înainte de vizită.</p>
      </div>
    </div>
  );
}
