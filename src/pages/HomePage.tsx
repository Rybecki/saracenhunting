import React from "react";
import Hero from "../components/Hero";
import AboutTeaser from "../components/AboutTeaser";
import Offers from "../components/Offers";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import HomeCta from "../components/HomeCta";
import { Language } from "../types";

interface HomePageProps {
  currentLang: Language;
  translations: Record<string, string>;
  onNavigate: (sectionId: string) => void;
}

export default function HomePage({
  currentLang,
  translations,
  onNavigate,
}: HomePageProps) {
  return (
    <>
      <Hero
        translations={translations}
        onExploreOffers={() => onNavigate("offers")}
        onContactUs={() => onNavigate("contact")}
      />

      <AboutTeaser translations={translations} />

      <Offers
        currentLang={currentLang}
        translations={translations}
        onContact={() => onNavigate("contact")}
        variant="teaser"
      />

      <WhyUs translations={translations} />

      <Gallery currentLang={currentLang} translations={translations} variant="teaser" />

      <Testimonials currentLang={currentLang} translations={translations} />

      <HomeCta translations={translations} />
    </>
  );
}
