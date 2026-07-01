import React from "react";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

interface HeroProps {
  translations: Record<string, any>;
  onExploreOffers: () => void;
  onContactUs: () => void;
}

export default function Hero({ translations, onExploreOffers, onContactUs }: HeroProps) {
  return (
    <header
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(18, 29, 23, 0.5) 0%, rgba(18, 29, 23, 0.75) 60%, rgba(18, 29, 23, 0.95) 100%), url('/hero-bg.png')`,
        }}
      />

      <div className="absolute top-1/4 left-10 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-brand-forest/15 rounded-full blur-3xl pointer-events-none" />

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
    </header>
  );
}
