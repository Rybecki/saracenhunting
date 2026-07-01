import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Offers from "./components/Offers";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Language } from "./types";
import { TENANTS } from "./data";
import { translations } from "./translations";

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>("pl");
  const selectedTenant = TENANTS[0];
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const savedLang = localStorage.getItem("saracen_lang") as Language;
    if (savedLang && ["pl", "en", "no"].includes(savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem("saracen_lang", lang);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "offers", "gallery", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTranslations = translations[currentLang];

  return (
    <div id="saracen-app" className="bg-brand-ivory text-brand-dark flex flex-col min-h-screen">
      <Navbar
        currentLang={currentLang}
        onLangChange={handleLangChange}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        translations={currentTranslations}
      />

      <main className="flex-grow">
        <Hero
          translations={currentTranslations}
          onExploreOffers={() => handleNavigate("offers")}
          onContactUs={() => handleNavigate("contact")}
        />

        <About translations={currentTranslations} />

        <Offers
          currentLang={currentLang}
          translations={currentTranslations}
          onContact={() => handleNavigate("contact")}
        />

        <WhyUs translations={currentTranslations} />

        <Gallery
          currentLang={currentLang}
          translations={currentTranslations}
        />

        <Testimonials
          currentLang={currentLang}
          translations={currentTranslations}
        />

        <div className="bg-brand-cream px-4 sm:px-6" aria-hidden="true">
          <div className="max-w-4xl mx-auto flex items-center gap-4 py-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-forest/25 to-brand-gold/50" />
            <div className="w-2 h-2 rotate-45 border border-brand-gold/60 bg-brand-gold/10 flex-shrink-0" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-forest/25 to-brand-gold/50" />
          </div>
        </div>

        <Contact
          currentLang={currentLang}
          translations={currentTranslations}
          selectedTenant={selectedTenant}
        />
      </main>

      <Footer
        currentLang={currentLang}
        translations={currentTranslations}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
