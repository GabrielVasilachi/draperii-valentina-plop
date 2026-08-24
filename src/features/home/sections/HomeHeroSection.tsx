import { useEffect, useState } from "react";
import type { Navigate } from "../../../shared/types/navigation";
import { heroSlides } from "../data/homeContent";

export function HomeHeroSection({ navigate }: { navigate: Navigate }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const timeout = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearTimeout(timeout);
  }, [activeSlide]);

  return (
    <section className="shop-hero">
      <div className="shop-hero-slides">
        {heroSlides.map((slide, index) => (
          <img
            className={activeSlide === index ? "shop-hero-image active" : "shop-hero-image"}
            src={slide.image}
            alt={index === 0 ? slide.alt : ""}
            aria-hidden={activeSlide !== index}
            loading={index === 0 ? "eager" : "lazy"}
            key={slide.image}
          />
        ))}
      </div>
      <div className="shop-hero-overlay" />
      <div className="shop-hero-content">
        <span className="hero-kicker">Stofe de calitate</span>
        <h1>Draperii & perdele</h1>
        <p>Eleganță și stil pentru casa ta.</p>
        <div className="hero-actions">
          <button
            className="btn primary light-button"
            onClick={() => navigate("/magazin")}
          >
            Categorii de produse <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <aside className="hero-service-summary" aria-label="Serviciile atelierului">
        <span>Servicii complete</span>
        <h2>De la alegere la montaj.</h2>
        <div className="hero-service-list">
          <p><b>01</b> Consultanță</p>
          <p><b>02</b> Măsurare</p>
          <p><b>03</b> Coasere și montare</p>
        </div>
        <button onClick={() => navigate("/contact")}>Programează o vizită <span aria-hidden="true">→</span></button>
      </aside>
      <div className="hero-image-dots" aria-label="Imaginile principale">
        {heroSlides.map((slide, index) => (
          <button
            className={activeSlide === index ? "active" : ""}
            onClick={() => setActiveSlide(index)}
            aria-label={`Afișează imaginea ${index + 1}: ${slide.alt}`}
            aria-current={activeSlide === index ? "true" : undefined}
            key={slide.image}
          />
        ))}
      </div>
    </section>
  );
}
