import type { Navigate } from "../../../shared/types/navigation";
import { reviews } from "../../reviews/data/reviews";

export function GoogleReviewsSection({ navigate }: { navigate: Navigate }) {
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
        {reviews.slice(0, 6).map((review) => (
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

      <button className="reviews-google-link" onClick={() => navigate("/recenzii")}>
        Vezi toate recenziile <span aria-hidden="true">→</span>
      </button>
    </section>
  );
}
