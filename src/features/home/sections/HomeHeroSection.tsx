import { useEffect, useState } from "react";
import type { Navigate } from "../../../shared/types/navigation";
import { heroSlides } from "../data/homeContent";

export function HomeHeroSection({ navigate }: { navigate: Navigate }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = (direction: number) => {
    setActiveSlide(
      (current) =>
        (current + direction + heroSlides.length) % heroSlides.length,
    );
  };

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="shop-hero">
      <div className="shop-hero-slides" aria-live="polite">
        {heroSlides.map((slide, index) => (
          <img
            className={
              activeSlide === index
                ? "shop-hero-image active"
                : "shop-hero-image"
            }
            src={slide.image}
            alt={activeSlide === index ? slide.alt : ""}
            key={slide.image}
          />
        ))}
      </div>
      <div className="shop-hero-overlay" />
      <div className="shop-hero-content">
        <span className="hero-kicker">{heroSlides[activeSlide].label}</span>
        <h1>
          Textile care fac casa
          <br />
          să se simtă <em>acasă.</em>
        </h1>
        <p>Perdele și draperii făcute pentru spațiul tău.</p>
        <div className="hero-actions">
          <button
            className="btn primary light-button"
            onClick={() => navigate("/magazin")}
          >
            Vezi colecțiile
          </button>
          <button
            className="hero-text-link"
            onClick={() => navigate("/contact")}
          >
            Cere o consultație <span>↗</span>
          </button>
        </div>
      </div>
      <div className="hero-service-card">
        <span>De la idee la montaj</span>
        <div>
          <b>01</b> Alegem
        </div>
        <div>
          <b>02</b> Măsurăm
        </div>
        <div>
          <b>03</b> Montăm
        </div>
      </div>
      <div className="hero-slider-controls" aria-label="Galerie principală">
        <button
          onClick={() => changeSlide(-1)}
          aria-label="Imaginea precedentă"
        >
          ←
        </button>
        <div className="hero-slider-dots">
          {heroSlides.map((slide, index) => (
            <button
              className={activeSlide === index ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Afișează: ${slide.label}`}
              key={slide.image}
            />
          ))}
        </div>
        <span>
          0{activeSlide + 1} / 0{heroSlides.length}
        </span>
        <button onClick={() => changeSlide(1)} aria-label="Imaginea următoare">
          →
        </button>
      </div>
    </section>
  );
}
