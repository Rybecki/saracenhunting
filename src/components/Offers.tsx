import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Calendar, Clock, Euro, ShieldCheck, X } from "lucide-react";
import { HuntOffer, Language } from "../types";
import { HUNT_OFFERS } from "../data";

interface OffersProps {
  currentLang: Language;
  translations: Record<string, any>;
  onContact: () => void;
}

export default function Offers({ currentLang, translations, onContact }: OffersProps) {
  const [selectedOffer, setSelectedOffer] = useState<HuntOffer | null>(null);

  const handleContactClick = () => {
    setSelectedOffer(null);
    onContact();
  };

  return (
    <section id="offers" className="py-24 bg-brand-dark relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-forest/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
            {translations.offers_title}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-ivory font-bold tracking-tight mb-4">
            {translations.offers_subtitle}
          </h2>
          <div className="h-[1px] w-24 bg-brand-gold mx-auto mt-4" />
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {HUNT_OFFERS.map((offer) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={offer.id}
                id={`offer-card-${offer.id}`}
                className="group flex flex-col justify-between bg-brand-moss/30 rounded-lg overflow-hidden border border-brand-forest/40 hover:border-brand-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/5"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={offer.image}
                    alt={offer.title[currentLang]}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-brand-dark/90 border border-brand-gold/30 rounded px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-[10px] text-brand-cream/60 uppercase tracking-widest block text-right font-mono -mb-1">
                      {translations.offers_price_from}
                    </span>
                    <span className="font-mono text-base font-bold text-brand-gold">
                      €{offer.priceEuro.toLocaleString()}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-brand-forest/80 border border-brand-cream/10 rounded px-2.5 py-1 text-xs text-brand-ivory font-mono backdrop-blur-sm">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{offer.durationDays} {translations.offers_days}</span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-semibold">
                      {offer.category.replace("_", " ")}
                    </span>
                    <h3 className="font-serif text-xl text-brand-ivory font-bold mt-1.5 mb-3 group-hover:text-brand-gold transition-colors duration-300">
                      {offer.title[currentLang]}
                    </h3>
                    <p className="text-brand-cream/75 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                      {offer.description[currentLang]}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-brand-forest/20 flex items-center justify-between">
                    <button
                      id={`offer-learn-more-${offer.id}`}
                      onClick={() => setSelectedOffer(offer)}
                      className="text-xs font-mono uppercase tracking-widest text-brand-gold hover:text-brand-ivory transition-colors duration-300 flex items-center space-x-1 cursor-pointer"
                    >
                      <span>{translations.offers_learn_more}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <button
                      id={`offer-quick-book-${offer.id}`}
                      onClick={onContact}
                      className="px-3 py-1.5 bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-brand-dark text-xs font-semibold rounded border border-brand-gold/30 hover:border-brand-gold transition-all cursor-pointer"
                    >
                      {translations.hero_cta_contact}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedOffer && (
            <div 
              id="offer-modal"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-md overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                className="relative bg-brand-dark border border-brand-gold/30 rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl"
              >
                <button
                  id="close-offer-modal"
                  onClick={() => setSelectedOffer(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-brand-dark/80 border border-brand-cream/10 flex items-center justify-center text-brand-cream hover:text-brand-gold hover:border-brand-gold transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="relative h-64 sm:h-80">
                  <img
                    src={selectedOffer.image}
                    alt={selectedOffer.title[currentLang]}
                    className="w-full h-full object-cover filter brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
                      {selectedOffer.category.replace("_", " ")}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-brand-ivory font-bold mt-1">
                      {selectedOffer.title[currentLang]}
                    </h3>
                    <p className="text-brand-gold/85 text-xs font-serif italic mt-1">
                      {selectedOffer.subtitle[currentLang]}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-brand-cream/40 uppercase mb-2">
                      Description
                    </h4>
                    <p className="text-brand-cream/85 text-sm leading-relaxed font-light">
                      {selectedOffer.description[currentLang]}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-brand-cream/40 uppercase mb-3">
                      Technical Specifications & Guidelines
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedOffer.specifications[currentLang].map((spec, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-brand-cream/95 font-light bg-brand-moss/15 rounded-md p-2.5 border border-brand-forest/20">
                          <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-brand-forest/20 text-center">
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-brand-cream/40">Price Package</span>
                      <span className="font-mono text-base font-bold text-brand-gold">€{selectedOffer.priceEuro}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-brand-cream/40">Duration</span>
                      <span className="font-mono text-base font-bold text-brand-gold">{selectedOffer.durationDays} Days</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-brand-cream/40">Rating</span>
                      <span className="font-mono text-base font-bold text-brand-gold">★★★★★</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-brand-moss/20 border-t border-brand-forest/20 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-end">
                  <button
                    id="modal-cancel-btn"
                    onClick={() => setSelectedOffer(null)}
                    className="px-5 py-2.5 text-xs font-bold tracking-wider text-brand-cream hover:text-brand-ivory transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    id="modal-plan-btn"
                    onClick={handleContactClick}
                    className="px-6 py-2.5 bg-brand-gold text-brand-dark hover:bg-brand-ivory hover:text-brand-forest font-sans text-xs font-bold tracking-widest uppercase rounded shadow-lg transition-all cursor-pointer"
                  >
                    {translations.hero_cta_contact}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
