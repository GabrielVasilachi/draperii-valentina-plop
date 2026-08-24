import { useState } from "react";
import type { Navigate } from "../../shared/types/navigation";
import { products, type Product } from "./data/products";

export function ProductDetailPage({ product, navigate }: { product: Product; navigate: Navigate }) {
  const [activeImage, setActiveImage] = useState(0);
  const productIndex = products.findIndex((item) => item.id === product.id);
  const previousProduct = products[(productIndex - 1 + products.length) % products.length];
  const nextProduct = products[(productIndex + 1) % products.length];

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + product.images.length) % product.images.length);
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % product.images.length);
  };

  return (
    <main className="product-detail-page">
      <nav className="product-page-nav" aria-label="Navigare produse">
        <button type="button" className="product-back" onClick={() => navigate("/catalog")}>
          <span aria-hidden="true">←</span>
          Înapoi la toate produsele
        </button>
        <div className="product-sibling-nav">
          <button type="button" onClick={() => navigate(`/catalog/${previousProduct.slug}`)}>
            <span aria-hidden="true">←</span> Produsul anterior
          </button>
          <button type="button" onClick={() => navigate(`/catalog/${nextProduct.slug}`)}>
            Produsul următor <span aria-hidden="true">→</span>
          </button>
        </div>
      </nav>

      <section className="product-detail">
        <div className="product-detail-gallery">
          <div className="product-detail-stage">
            <img
              key={product.images[activeImage]}
              src={product.images[activeImage]}
              alt={`${product.name}, imaginea ${activeImage + 1}`}
            />
            {product.images.length > 1 && (
              <>
                <button type="button" className="product-gallery-arrow previous" onClick={showPreviousImage} aria-label="Imaginea anterioară">←</button>
                <button type="button" className="product-gallery-arrow next" onClick={showNextImage} aria-label="Imaginea următoare">→</button>
              </>
            )}
            <span className="product-image-count">{String(activeImage + 1).padStart(2, "0")} / {String(product.images.length).padStart(2, "0")}</span>
          </div>
          <div className="product-detail-thumbs" aria-label={`Galerie ${product.name}`}>
            {product.images.map((image, index) => (
              <button type="button" key={image} className={index === activeImage ? "active" : ""} onClick={() => setActiveImage(index)} aria-label={`Afișează imaginea ${index + 1}`} aria-current={index === activeImage ? "true" : undefined}>
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        </div>
        <div className="product-detail-copy">
          <span className="product-detail-category">{product.category} / {product.subcategory}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="product-assurances">
            <div><b>01</b><span>Realizat la comandă</span></div>
            <div><b>02</b><span>Consultanță personalizată</span></div>
            <div><b>03</b><span>Măsurare și montare</span></div>
          </div>
          <div className="product-detail-actions">
            <button type="button" className="btn primary" onClick={() => navigate("/contact")}>Solicită o ofertă</button>
            <a className="btn outline" href="tel:+37369212709">Sună-ne</a>
          </div>
          <small>Fiecare model se personalizează după dimensiuni, material și sistemul de prindere.</small>
        </div>
      </section>
      <section className="product-description">
        <div>
          <span>Produs personalizat</span>
          <h2>Creat pentru fereastra ta.</h2>
        </div>
        <p>{product.description} Materialul, dimensiunile și sistemul de prindere se aleg împreună în funcție de spațiu.</p>
      </section>
    </main>
  );
}
