import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Logo from "./Logo";

interface HeroProps {
  translations: Record<string, string>;
  onExploreOffers: () => void;
  onContactUs: () => void;
}

const HERO_SLIDES = [
  { src: "/hero-bg.png", alt: "Saracen Hunting — polowanie w polskiej przyrodzie" },
  { src: "/hero/slide-2.png", alt: "Saracen Hunting — trofeum rogacza" },
  { src: "/hero/slide-3.png", alt: "Saracen Hunting — polowanie na łące" },
];

const SLIDE_INTERVAL_MS = 6000;

const HERO_GRADIENT =
  "linear-gradient(to bottom, rgba(18, 29, 23, 0.45) 0%, rgba(18, 29, 23, 0.7) 55%, rgba(18, 29, 23, 0.95) 100%)";

export default function Hero({ translations, onExploreOffers, onContactUs }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <header
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden={index !== currentSlide}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `${HERO_GRADIENT}, url('${slide.src}')`,
          }}
        />
      ))}

      <div className="absolute top-1/4 left-10 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-brand-forest/15 rounded-full blur-3xl pointer-events-none z-[1]" />

      <button
        type="button"
        onClick={prevSlide}
        aria-label="Poprzednie zdjęcie"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-brand-cream/25 bg-brand-dark/40 text-brand-cream hover:text-brand-gold hover:border-brand-gold/60 backdrop-blur-sm transition-colors cursor-pointer hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Następne zdjęcie"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-brand-cream/25 bg-brand-dark/40 text-brand-cream hover:text-brand-gold hover:border-brand-gold/60 backdrop-blur-sm transition-colors cursor-pointer hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="mb-6">
          <Logo size="lg" className="h-24 sm:h-28" />
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-ivory font-bold leading-tight tracking-tight max-w-4xl">
          {translations.hero_title}
        </h1>

        <div className="h-[1px] w-32 bg-brand-gold my-8" />

        <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-brand-cream/85 max-w-2xl font-light leading-relaxed mb-10">
          {translations.hero_subtitle}
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <button
            id="hero-cta-offers"
            onClick={onExploreOffers}
            className="group px-8 py-4 bg-brand-gold text-brand-dark font-sans text-xs font-bold tracking-widest uppercase rounded shadow-2xl hover:bg-brand-ivory hover:text-brand-forest hover:shadow-brand-gold/25 transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>{translations.hero_cta_offers}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-cta-contact"
            onClick={onContactUs}
            className="px-8 py-4 bg-transparent hover:bg-brand-forest/30 text-brand-ivory border border-brand-gold/45 hover:border-brand-gold font-sans text-xs font-bold tracking-widest uppercase rounded transition-colors duration-300 cursor-pointer"
          >
            {translations.hero_cta_contact}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Slajd ${index + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? "w-8 h-2 bg-brand-gold"
                : "w-2 h-2 bg-brand-cream/40 hover:bg-brand-cream/70"
            }`}
          />
        ))}
      </div>
    </header>
  );
}
