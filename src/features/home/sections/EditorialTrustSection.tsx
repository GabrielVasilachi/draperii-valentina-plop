import type { Navigate } from "../../../shared/types/navigation";

export function EditorialTrustSection({ navigate }: { navigate: Navigate }) {
  return (
    <section className="editorial-trust">
      <img src="/images/hero-draperii.jpg" alt="Draperii realizate la comandă într-un interior luminos" />
      <div className="editorial-copy">
        <span className="eyebrow">Fiecare detaliu contează</span>
        <h2>Draperiile alese cu grijă devin parte din casa ta.</h2>
        <p>Texturi, culori și finisaje potrivite spațiului tău.</p>
        <button className="btn primary" onClick={() => navigate("/despre-noi")}>Despre noi</button>
      </div>
      <aside className="client-proof">
        <strong>25+</strong>
        <span>ani de experiență</span>
        <div>Zeci de mii de clienți</div>
        <p>Perdele și draperii la comandă, de la alegerea materialelor la montaj.</p>
      </aside>
    </section>
  );
}
