import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Language } from "../types";
import Logo from "./Logo";
import FlagIcon, { LANGUAGES } from "./FlagIcon";

interface NavbarProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  activeSection: string;
  currentPath: string;
  onNavigate: (sectionId: string) => void;
  translations: Record<string, string>;
}

type NavItem =
  | { id: string; label: string; type: "page"; path: string }
  | { id: string; label: string; type: "section"; sectionId: string };

function LanguageSwitcher({
  currentLang,
  onLangChange,
  compact = false,
}: {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  compact?: boolean;
}) {
  return (
    <div
      className="flex items-center rounded-md border border-brand-gold/25 overflow-hidden bg-brand-dark/50"
      role="group"
      aria-label="Wybór języka"
    >
      {LANGUAGES.map((lang) => {
        const isActive = currentLang === lang.code;
        return (
          <button
            key={lang.code}
            id={`lang-btn-${lang.code}`}
            type="button"
            onClick={() => onLangChange(lang.code)}
            className={`flex items-center justify-center gap-1 transition-all duration-200 cursor-pointer border-r border-brand-gold/15 last:border-r-0 ${
              compact ? "px-1.5 py-1.5 min-w-[2.5rem]" : "px-2.5 py-1.5 min-w-[2.75rem]"
            } text-xs font-medium uppercase tracking-wider ${
              isActive
                ? "bg-brand-gold text-brand-dark font-bold"
                : "text-brand-cream/75 hover:text-brand-gold hover:bg-brand-forest/35"
            }`}
            aria-pressed={isActive}
          >
            <FlagIcon
              lang={lang.code}
              className={`h-auto rounded-sm ${compact ? "w-3" : "w-4 hidden sm:block"}`}
            />
            <span>{lang.code}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function Navbar({
  currentLang,
  onLangChange,
  activeSection,
  currentPath,
  onNavigate,
  translations,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: "home", label: translations.nav_home, type: "section", sectionId: "home" },
    { id: "about", label: translations.nav_about, type: "page", path: "/o-nas" },
    { id: "offers", label: translations.nav_offers, type: "page", path: "/oferta" },
    { id: "gallery", label: translations.nav_gallery, type: "page", path: "/galeria" },
    { id: "contact", label: translations.nav_contact, type: "page", path: "/kontakt" },
  ];

  const isItemActive = (item: NavItem) => {
    if (item.type === "page") {
      return currentPath === item.path;
    }
    return currentPath === "/" && activeSection === item.sectionId;
  };

  const handleNavClick = (item: NavItem) => {
    setIsMobileMenuOpen(false);
    if (item.type === "page") {
      return;
    }
    onNavigate(item.sectionId);
  };

  const navButtonClass = (active: boolean) =>
    `px-3 py-2 text-xs lg:text-sm font-medium tracking-wider uppercase transition-all duration-300 relative group cursor-pointer ${
      active ? "text-brand-gold font-semibold" : "text-brand-cream/80 hover:text-brand-gold"
    }`;

  const underlineClass = (active: boolean) =>
    `absolute bottom-0 left-3 right-3 h-[1px] bg-brand-gold transition-transform duration-300 origin-left ${
      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
    }`;

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isMobileMenuOpen
          ? "bg-brand-dark shadow-xl border-b border-brand-gold/15 py-3"
          : isScrolled
            ? "glass-dark shadow-xl border-b border-brand-gold/15 py-3"
            : "bg-gradient-to-b from-brand-dark/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            id="nav-logo"
            to="/"
            onClick={() => onNavigate("home")}
            className="cursor-pointer group flex-shrink-0"
          >
            <Logo size="sm" className="group-hover:opacity-90 transition-opacity" />
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) =>
              item.type === "page" ? (
                <Link
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  to={item.path}
                  className={navButtonClass(isItemActive(item))}
                >
                  {item.label}
                  <span className={underlineClass(isItemActive(item))} />
                </Link>
              ) : (
                <button
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={navButtonClass(isItemActive(item))}
                >
                  {item.label}
                  <span className={underlineClass(isItemActive(item))} />
                </button>
              )
            )}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher currentLang={currentLang} onLangChange={onLangChange} />

            <button
              id="nav-book-now"
              onClick={() => onNavigate("contact")}
              className="px-4 py-2 bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-brand-gold hover:to-brand-gold text-brand-dark font-sans text-xs font-bold tracking-widest uppercase rounded shadow-lg hover:shadow-brand-gold/20 transition-all duration-300 cursor-pointer"
            >
              {translations.hero_cta_contact}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher
              currentLang={currentLang}
              onLangChange={onLangChange}
              compact
            />

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

      {isMobileMenuOpen &&
        createPortal(
          <div
            id="mobile-nav-drawer"
            className="md:hidden fixed top-[65px] left-0 right-0 bg-brand-dark z-[60] py-6 px-6 animate-fade-in shadow-xl border-b border-brand-gold/15"
          >
            <div className="space-y-0 flex flex-col">
              {navItems.map((item) =>
                item.type === "page" ? (
                  <Link
                    id={`mobile-nav-item-${item.id}`}
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-3 text-lg font-serif tracking-widest text-left border-b border-brand-forest/20 uppercase transition-all ${
                      isItemActive(item) ? "text-brand-gold px-2 border-brand-gold/40" : "text-brand-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    id={`mobile-nav-item-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`py-3 text-lg font-serif tracking-widest text-left border-b border-brand-forest/20 uppercase transition-all ${
                      isItemActive(item) ? "text-brand-gold px-2 border-brand-gold/40" : "text-brand-cream"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>

            <button
              id="mobile-nav-book"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate("contact");
              }}
              className="w-full mt-6 py-3 bg-brand-gold text-brand-dark font-sans font-bold tracking-widest uppercase rounded shadow-lg text-center block"
            >
              {translations.hero_cta_contact}
            </button>
          </div>,
          document.body
        )}
    </nav>
  );
}
