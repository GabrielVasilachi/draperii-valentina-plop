import { useState } from "react";
import type { Navigate } from "../../shared/types/navigation";
import type { Product } from "./data/products";

export function ProductDetailPage({ product, navigate }: { product: Product; navigate: Navigate }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <section className="product-detail section-pad">
        <div className="product-detail-gallery">
          <div className="product-detail-stage">
            <img src={product.images[activeImage]} alt={`${product.name}, imaginea ${activeImage + 1}`} />
          </div>
          <div className="product-detail-thumbs" aria-label="Galerie produs">
            {product.images.map((image, index) => (
              <button key={image} className={index === activeImage ? "active" : ""} onClick={() => setActiveImage(index)} aria-label={`Afișează imaginea ${index + 1}`}>
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        </div>
        <div className="product-detail-copy">
          <button className="product-back" onClick={() => navigate("/magazin")}>← Înapoi la magazin</button>
          <span className="eyebrow">{product.category} · {product.subcategory}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="product-assurances">
            <span>✓ Realizat la comandă</span>
            <span>✓ Consultanță personalizată</span>
            <span>✓ Măsurare și montare</span>
          </div>
          <button className="btn primary" onClick={() => navigate("/contact")}>Solicită o ofertă →</button>
          <a href="tel:+37369212709">sau sună la +373 69 212 709</a>
        </div>
      </section>
      <section className="product-description">
        <span className="eyebrow">Descriere</span>
        <h2>Creat pentru fereastra ta.</h2>
        <p>{product.description} Materialul, dimensiunile și sistemul de prindere se aleg împreună în funcție de spațiu.</p>
      </section>
    </>
  );
}
