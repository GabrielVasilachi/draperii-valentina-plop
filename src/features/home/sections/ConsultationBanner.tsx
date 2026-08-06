import type { Navigate } from "../../../shared/types/navigation";

export function ConsultationBanner({ navigate }: { navigate: Navigate }) {
  return (
    <section className="consultation-banner">
      <div>
        <span className="eyebrow light">Ai o fereastră în minte?</span>
        <h2>Hai să alegem împreună.</h2>
      </div>
      <button className="btn cream" onClick={() => navigate("/contact")}>
        Programează o vizită
      </button>
    </section>
  );
}
