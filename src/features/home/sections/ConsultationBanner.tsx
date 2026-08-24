import type { Navigate } from "../../../shared/types/navigation";

export function ConsultationBanner({ navigate }: { navigate: Navigate }) {
  return (
    <section className="consultation-banner">
      <div>
        <span className="eyebrow light">Ai nevoie de ajutor?</span>
        <h2>Venim, măsurăm și găsim soluția potrivită.</h2>
      </div>
      <button className="btn cream" onClick={() => navigate("/contact")}>
        Programează măsurarea <span aria-hidden="true">→</span>
      </button>
    </section>
  );
}
