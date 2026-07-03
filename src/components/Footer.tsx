import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

interface FooterProps {
  translations: Record<string, string>;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ translations, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinkClass =
    "text-center md:text-left text-brand-cream/70 hover:text-brand-gold transition-colors";

  return (
    <footer className="bg-brand-dark text-brand-cream py-16 border-t border-brand-forest/35 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-12 border-b border-brand-forest/20">
          <div className="md:col-span-5 space-y-4 flex flex-col items-center text-center">
            <Link to="/" onClick={() => onNavigate("home")} className="cursor-pointer block">
              <Logo size="lg" />
            </Link>

            <p className="text-xs text-brand-cream/60 leading-relaxed font-light max-w-sm mx-auto">
              {translations.footer_desc}
            </p>
          </div>

          <div className="md:col-span-7 relative overflow-hidden min-h-[200px] flex flex-col items-center md:items-start justify-center py-2 md:py-6">
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 md:hidden"
              aria-hidden="true"
            >
              <Logo size="xl" className="h-44 sm:h-52 w-auto opacity-[0.05]" />
            </div>

            <div className="relative z-10 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
                {translations.footer_explore}
              </h4>
              <div className="flex flex-col space-y-2.5 text-xs items-center md:items-start">
                <button onClick={() => onNavigate("home")} className={navLinkClass}>
                  {translations.nav_home}
                </button>
                <Link to="/o-nas" className={navLinkClass}>
                  {translations.nav_about}
                </Link>
                <Link to="/oferta" className={navLinkClass}>
                  {translations.nav_offers}
                </Link>
                <Link to="/galeria" className={navLinkClass}>
                  {translations.nav_gallery}
                </Link>
                <Link to="/kontakt" className={navLinkClass}>
                  {translations.nav_contact}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pt-8 md:pt-12">
          <div
            className="hidden md:flex absolute right-10 lg:right-14 bottom-[calc(100%+3rem)] lg:bottom-[calc(100%+4.5rem)] pointer-events-none select-none z-0"
            aria-hidden="true"
          >
            <Logo size="xl" className="h-44 lg:h-52 w-auto opacity-[0.05]" />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-cream/40 font-light space-y-4 sm:space-y-0">
            <div>&copy; {currentYear} Saracen Hunting. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:mr-8 md:mr-12 lg:mr-16">
              <Link to="/polityka-prywatnosci" className="hover:text-brand-gold transition-colors">
                {translations.footer_privacy}
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link to="/regulamin" className="hover:text-brand-gold transition-colors">
                {translations.footer_terms}
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-[10px] text-brand-cream/35 font-light leading-relaxed relative z-10">
          <span className="block">{translations.footer_credits}</span>
          <a
            href="https://patryktomczyk.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-1 text-brand-cream/55 hover:text-brand-gold transition-colors font-mono tracking-wide"
          >
            patryktomczyk.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
