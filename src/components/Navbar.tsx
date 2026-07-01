import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Language } from "../types";
import Logo from "./Logo";
import FlagIcon, { LANGUAGES } from "./FlagIcon";

interface NavbarProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  translations: Record<string, any>;
}

export default function Navbar({
  currentLang,
  onLangChange,
  activeSection,
  onNavigate,
  translations
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  const navItems = [
    { id: "home", label: translations.nav_home },
    { id: "about", label: translations.nav_about },
    { id: "offers", label: translations.nav_offers },
    { id: "gallery", label: translations.nav_gallery },
    { id: "contact", label: translations.nav_contact },
  ];

  const languages = LANGUAGES;

  const currentLanguageObject = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-dark shadow-xl border-b border-brand-gold/15 py-3"
          : "bg-gradient-to-b from-brand-dark/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div 
            id="nav-logo"
            onClick={() => handleNavClick("home")}
            className="cursor-pointer group"
          >
            <Logo size="sm" className="group-hover:opacity-90 transition-opacity" />
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-xs lg:text-sm font-medium tracking-wider uppercase transition-all duration-300 relative group cursor-pointer ${
                  activeSection === item.id 
                    ? "text-brand-gold font-semibold" 
                    : "text-brand-cream/80 hover:text-brand-gold"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-3 right-3 h-[1px] bg-brand-gold transition-transform duration-300 origin-left ${
                  activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <div className="relative">
              <button
                id="lang-selector-btn"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md border border-brand-gold/20 hover:border-brand-gold/60 bg-brand-dark/40 text-brand-ivory text-xs font-medium uppercase tracking-wider transition-all cursor-pointer"
              >
                <FlagIcon lang={currentLanguageObject.code} className="w-5 h-auto rounded-sm" />
                <span>{currentLanguageObject.code}</span>
              </button>

              {isLangDropdownOpen && (
                <div 
                  id="lang-dropdown-menu"
                  className="absolute right-0 mt-2 w-32 rounded-md glass-dark border border-brand-gold/20 shadow-2xl py-1 z-50 animate-fade-in"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLangChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-2 px-3 py-2 text-xs hover:bg-brand-forest/40 transition-colors text-left ${
                        currentLang === lang.code ? "text-brand-gold font-semibold" : "text-brand-cream"
                      }`}
                    >
                      <FlagIcon lang={lang.code} className="w-5 h-auto rounded-sm" />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              id="nav-book-now"
              onClick={() => onNavigate("contact")}
              className="px-4 py-2 bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-brand-gold hover:to-brand-gold text-brand-dark font-sans text-xs font-bold tracking-widest uppercase rounded shadow-lg hover:shadow-brand-gold/20 transition-all duration-300 cursor-pointer"
            >
              {translations.hero_cta_contact}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              id="lang-cycle-btn"
              onClick={() => {
                const nextLang: Record<Language, Language> = { pl: "en", en: "no", no: "pl" };
                onLangChange(nextLang[currentLang]);
              }}
              className="flex items-center justify-center gap-1.5 px-2.5 h-9 rounded border border-white/60 bg-white/10 text-white text-xs font-medium uppercase tracking-wider"
              title="Change Language"
            >
              <FlagIcon lang={currentLanguageObject.code} className="w-5 h-auto rounded-sm" />
              <span>{currentLanguageObject.code}</span>
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-brand-cream hover:text-brand-gold transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="md:hidden fixed inset-0 top-[65px] bg-brand-dark/95 z-40 flex flex-col justify-between py-8 px-6 animate-fade-in"
        >
          <div className="space-y-4 flex flex-col">
            {navItems.map((item) => (
              <button
                id={`mobile-nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-3 text-lg font-serif tracking-widest text-left border-b border-brand-forest/20 uppercase transition-all ${
                  activeSection === item.id ? "text-brand-gold px-2 border-brand-gold/40" : "text-brand-cream"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <button
              id="mobile-nav-book"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate("contact");
              }}
              className="w-full py-3 bg-brand-gold text-brand-dark font-sans font-bold tracking-widest uppercase rounded shadow-lg text-center block"
            >
              {translations.hero_cta_contact}
            </button>

            <div className="flex justify-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  id={`mobile-lang-${lang.code}`}
                  onClick={() => onLangChange(lang.code)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded border text-xs transition-all cursor-pointer ${
                    currentLang === lang.code
                      ? "border-brand-gold bg-brand-gold/15 text-brand-gold font-semibold"
                      : "border-brand-cream/20 text-brand-cream hover:border-brand-gold/40"
                  }`}
                >
                  <FlagIcon lang={lang.code} className="w-5 h-auto rounded-sm" />
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-center text-xs text-brand-cream/50">
              <span>Support: kontakt@saracenhunting.pl</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
