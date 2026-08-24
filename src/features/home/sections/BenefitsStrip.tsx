const googleMapsUrl =
  "https://www.google.com/maps/place/Draperii+Valentina+Plop/@47.0219392,28.7986823,99m/data=!3m1!1e3!4m6!3m5!1s0x40c97dbd043959e1:0x469d335e373bab6a!8m2!3d47.0221863!4d28.7982274!16s%2Fg%2F11h9mlk2lw?hl=ro&entry=ttu";

const reviews = [
  {
    author: "Larisa Vornicoi",
    date: "acum 4 luni",
    text: "Una dintre cele mai profesioniste! Recomand cu încredere din propria experiență. Calitate 100%.",
  },
  {
    author: "Kobor",
    date: "acum 6 luni",
    text: "Atmosferă plăcută, lucru de calitate și mâini de aur. Doamna Valentina m-a servit și cu o cafea delicioasă.",
  },
  {
    author: "Ecaterina Efrosi",
    date: "acum un an",
    text: "Atelierul meu preferat. Orice comandă, oricât de complicată, este cusută calitativ și la un preț foarte bun.",
  },
  {
    author: "Natalia Glijina",
    date: "acum 2 ani",
    text: "Comand perdele doar de la Valentina. Profesionalism, o selecție minunată de stofe și accesorii, plus sfaturi foarte utile.",
  },
  {
    author: "Lidia Sevostianova",
    date: "acum 2 ani",
    text: "Calitate înaltă. Comandăm de mai bine de cinci ani și suntem foarte mulțumiți.",
  },
  {
    author: "Olesea Finciuc",
    date: "acum 2 ani",
    text: "Recomand cu încredere. Sunt foarte mulțumită de lucrul doamnei Valentina.",
  },
];

export function GoogleReviewsSection() {
  return (
    <section className="google-reviews section-pad" aria-labelledby="google-reviews-title">
      <div className="reviews-heading">
        <div>
          <span className="eyebrow">Părerea clienților</span>
          <h2 id="google-reviews-title">Recenzii reale</h2>
        </div>
        <div className="reviews-score" aria-label="Evaluare 4,9 din 5 pe Google">
          <strong>4,9</strong>
          <span aria-hidden="true">★★★★★</span>
          <small>Google</small>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.author}>
            <div className="review-card-top">
              <div>
                <h3>{review.author}</h3>
                <p>{review.date}</p>
              </div>
              <img className="google-mark" src="/images/google-g.svg" alt="Google" />
            </div>
            <div className="review-stars" aria-label="5 stele">★★★★★</div>
            <blockquote>„{review.text}”</blockquote>
          </article>
        ))}
      </div>

      <a className="reviews-google-link" href={googleMapsUrl} target="_blank" rel="noreferrer">
        Vezi toate recenziile pe Google <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
