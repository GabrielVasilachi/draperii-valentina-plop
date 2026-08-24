import { googleMapsUrl, reviews } from "./data/reviews";

export function ReviewsPage() {
  return (
    <>
      <section className="social-hero reviews-page-hero">
        <span className="eyebrow">Părerea clienților</span>
        <h1>Recenzii</h1>
        <p>Experiențe reale, împărtășite pe Google.</p>
      </section>

      <section className="reviews-page section-pad" aria-label="Recenziile clienților">
        <div className="reviews-page-score" aria-label="Evaluare 4,9 din 5 pe Google">
          <strong>4,9</strong>
          <div>
            <span aria-hidden="true">★★★★★</span>
            <small>Evaluare Google</small>
          </div>
        </div>

        <div className="reviews-grid reviews-page-grid">
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
          Vezi recenziile pe Google <span aria-hidden="true">→</span>
        </a>
      </section>
    </>
  );
}
