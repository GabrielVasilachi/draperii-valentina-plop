import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/PageHero'

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true) }
  return <><PageHero eyebrow="Contact" title="Hai să găsim soluția potrivită casei tale.">Scrie-ne sau vizitează salonul din Buiucani pentru a vedea mostrele și a discuta proiectul tău.</PageHero>
    <section className="contact-wrap section-pad">
      <div className="contact-info"><span className="eyebrow">Draperii Valentina Plop</span><h2>Te așteptăm<br/>cu drag.</h2><div className="info-block"><small>Adresă</small><p>Str. Vasile Lupu 61/6<br/>Chișinău, Moldova</p><a href="https://maps.app.goo.gl/11ReQiePUjVsZnUk8" target="_blank" rel="noreferrer">Indicații pe Google Maps ↗</a></div><div className="info-block"><small>Telefon</small><a className="big-link" href="tel:+37369212709">+373 69 212 709</a></div><div className="info-block"><small>Programări</small><p>Sună înainte de vizită pentru a confirma disponibilitatea și ora potrivită.</p></div></div>
      <div className="contact-form-box">{sent ? <div className="success"><span>✓</span><h2>Mulțumim!</h2><p>Mesajul a fost pregătit. Pentru un răspuns imediat, ne poți suna la <a href="tel:+37369212709">+373 69 212 709</a>.</p><button className="btn outline" onClick={()=>setSent(false)}>Trimite alt mesaj</button></div> : <form onSubmit={submit}><h2>Povestește-ne despre proiect</h2><p>Completează formularul și revenim pentru detalii.</p><div className="field-row"><label>Nume<input name="name" placeholder="Numele tău" required/></label><label>Telefon<input name="phone" type="tel" placeholder="+373 ..." required/></label></div><label>Email<input name="email" type="email" placeholder="nume@email.com"/></label><label>Ce te interesează?<select name="interest"><option>Perdele și draperii</option><option>Draperii romane</option><option>Jaluzele din lemn</option><option>Coasere</option><option>Măsurători și montare</option></select></label><label>Mesaj<textarea name="message" rows={5} placeholder="Spune-ne pe scurt despre camere, dimensiuni și stilul dorit..." required/></label><button className="btn primary" type="submit">Trimite solicitarea →</button><small>Prin trimitere ești de acord să fii contactat în legătură cu solicitarea.</small></form>}</div>
    </section>
    <section className="map-section"><iframe title="Locația Draperii Valentina Plop" src="https://www.google.com/maps?q=Strada%20Vasile%20Lupu%2061%2F6%2C%20Chi%C8%99in%C4%83u&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></section>
  </>
}
