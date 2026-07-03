import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OffersPage from "./pages/OffersPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import PageSeo from "./components/PageSeo";

import { Language } from "./types";
import { TENANTS } from "./data";
import { translations } from "./translations";

function AppContent() {
  const [currentLang, setCurrentLang] = useState<Language>("pl");
  const selectedTenant = TENANTS[0];
  const [activeSection, setActiveSection] = useState<string>("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedLang = localStorage.getItem("saracen_lang") as Language;
    if (savedLang && ["pl", "en", "no"].includes(savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/o-nas") {
      setActiveSection("about");
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname === "/oferta") {
      setActiveSection("offers");
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname === "/kontakt") {
      setActiveSection("contact");
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname === "/galeria") {
      setActiveSection("gallery");
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname === "/polityka-prywatnosci" || location.pathname === "/regulamin") {
      window.scrollTo(0, 0);
      return;
    }

    if (location.hash) {
      const sectionId = location.hash.slice(1);
      setActiveSection(sectionId);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return;
    }

    if (location.pathname === "/") {
      window.scrollTo(0, 0);
      setActiveSection("home");
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const el = document.getElementById("home");
      if (!el) return;

      const scrollPosition = window.scrollY + 200;
      const offsetTop = el.offsetTop;
      const offsetHeight = el.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem("saracen_lang", lang);
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === "about") {
      navigate("/o-nas");
      return;
    }

    if (sectionId === "offers") {
      navigate("/oferta");
      return;
    }

    if (sectionId === "contact") {
      navigate("/kontakt");
      return;
    }

    if (sectionId === "gallery") {
      navigate("/galeria");
      return;
    }

    if (location.pathname !== "/") {
      navigate(sectionId === "home" ? "/" : `/#${sectionId}`);
      return;
    }

    setActiveSection(sectionId);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const currentTranslations = translations[currentLang];

  return (
    <div id="saracen-app" className="bg-brand-ivory text-brand-dark flex flex-col min-h-screen">
      <PageSeo lang={currentLang} />
      <Navbar
        currentLang={currentLang}
        onLangChange={handleLangChange}
        activeSection={activeSection}
        currentPath={location.pathname}
        onNavigate={handleNavigate}
        translations={currentTranslations}
      />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                currentLang={currentLang}
                translations={currentTranslations}
                onNavigate={handleNavigate}
              />
            }
          />
          <Route
            path="/o-nas"
            element={<AboutPage translations={currentTranslations} />}
          />
          <Route
            path="/oferta"
            element={
              <OffersPage
                currentLang={currentLang}
                translations={currentTranslations}
                onContact={() => handleNavigate("contact")}
              />
            }
          />
          <Route
            path="/galeria"
            element={
              <GalleryPage
                currentLang={currentLang}
                translations={currentTranslations}
              />
            }
          />
          <Route
            path="/kontakt"
            element={
              <ContactPage
                currentLang={currentLang}
                translations={currentTranslations}
                selectedTenant={selectedTenant}
              />
            }
          />
          <Route
            path="/polityka-prywatnosci"
            element={<PrivacyPolicyPage translations={currentTranslations} />}
          />
          <Route
            path="/regulamin"
            element={<TermsPage translations={currentTranslations} />}
          />
        </Routes>
      </main>

      <Footer
        translations={currentTranslations}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
