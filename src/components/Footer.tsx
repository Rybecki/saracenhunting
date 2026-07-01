import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Language } from "../types";
import Logo from "./Logo";

interface FooterProps {
  currentLang: Language;
  translations: Record<string, any>;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ currentLang, translations, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-cream py-16 border-t border-brand-forest/35 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-12 border-b border-brand-forest/20">
          
          <div className="md:col-span-4 space-y-4">
            <div className="cursor-pointer" onClick={() => onNavigate("home")}>
              <Logo size="md" />
            </div>
            
            <p className="text-xs text-brand-cream/60 leading-relaxed font-light">
              Organizing premium, fully certified hunting expeditions in Central Europe and Scandinavia. Providing absolute ethics, luxury lodging, and world-class trophy guides.
            </p>

            <div className="flex space-x-3.5 pt-2">
              <a href="#facebook" className="w-8 h-8 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream/70 hover:text-brand-gold hover:border-brand-gold transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#instagram" className="w-8 h-8 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream/70 hover:text-brand-gold hover:border-brand-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-8 h-8 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream/70 hover:text-brand-gold hover:border-brand-gold transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
              Explore
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              <button onClick={() => onNavigate("home")} className="text-left text-brand-cream/70 hover:text-brand-gold transition-colors">
                {translations.nav_home}
              </button>
              <button onClick={() => onNavigate("about")} className="text-left text-brand-cream/70 hover:text-brand-gold transition-colors">
                {translations.nav_about}
              </button>
              <button onClick={() => onNavigate("offers")} className="text-left text-brand-cream/70 hover:text-brand-gold transition-colors">
                {translations.nav_offers}
              </button>
              <button onClick={() => onNavigate("gallery")} className="text-left text-brand-cream/70 hover:text-brand-gold transition-colors">
                {translations.nav_gallery}
              </button>
              <button onClick={() => onNavigate("contact")} className="text-left text-brand-cream/70 hover:text-brand-gold transition-colors">
                {translations.nav_contact}
              </button>
            </div>
          </div>

          <div className="md:col-span-4 relative min-h-[180px] flex items-center justify-end">
            <div className="opacity-[0.05] pointer-events-none select-none pr-4">
              <Logo size="xl" className="h-52 w-auto" />
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-cream/40 font-light space-y-4 sm:space-y-0">
          <div>
            &copy; {currentYear} Saracen Hunting. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <span>•</span>
            <span className="font-mono text-[9px] text-brand-gold/60">SYSTEM TIME: 2026 UTC</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
