import type { Navigate } from "../../../shared/types/navigation";

export function AtelierStorySection({ navigate }: { navigate: Navigate }) {
  return (
    <section className="atelier-story">
      <div className="atelier-story-images">
        <img src="/images/coasere.jpg" alt="Lucru atent în atelier" />
        <img src="/images/consultanta.jpg" alt="Alegerea materialelor" />
      </div>
      <div className="atelier-story-copy">
        <span className="eyebrow light">Făcut cu suflet, aici</span>
        <h2>Nu vindem doar perdele. Îmbrăcăm povești.</h2>
        <p>Tu alegi atmosfera. Noi avem grijă de fiecare cută.</p>
        <button className="btn cream" onClick={() => navigate("/despre-noi")}>
          Intră în atelier
        </button>
        <span className="atelier-signature">Valentina & echipa</span>
      </div>
    </section>
  );
}
