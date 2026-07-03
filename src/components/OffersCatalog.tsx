import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Language } from "../types";
import { HUNT_OFFERS } from "../data";
import {
  BOAR_PRICING,
  COMMON_SERVICES,
  DEER_PRICING,
  HUNT_TABS,
  HuntPricingType,
  PricingRow,
  PricingSection,
  ROE_PRICING,
} from "../data/pricing";
import OffersNotes from "./OffersNotes";

interface OffersCatalogProps {
  currentLang: Language;
  translations: Record<string, string>;
  onContact: () => void;
}

function PricingRows({
  sections,
  currentLang,
  translations,
}: {
  sections: PricingSection[];
  currentLang: Language;
  translations: Record<string, string>;
}) {
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <div key={section.title.pl}>
          <h4 className="font-serif text-lg text-brand-gold mb-4">{section.title[currentLang]}</h4>

          <div className="hidden sm:grid sm:grid-cols-[1.4fr_0.6fr_0.8fr] gap-x-6 gap-y-1 px-4 pb-2 border-b border-brand-gold/20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cream/40">
              {translations.offers_col_range}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cream/40">
              {translations.offers_col_price}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cream/40">
              {translations.offers_col_extra}
            </span>
          </div>

          <div className="space-y-2 sm:space-y-0">
            {section.rows.map((row: PricingRow, idx) => (
              <div
                key={`${section.title.pl}-${idx}`}
                className="sm:grid sm:grid-cols-[1.4fr_0.6fr_0.8fr] sm:gap-x-6 sm:px-4 sm:py-3 sm:border-b sm:border-brand-forest/15 p-4 sm:p-0 rounded-lg sm:rounded-none bg-brand-moss/20 sm:bg-transparent border border-brand-forest/25 sm:border-0 sm:border-b"
              >
                <div className="flex sm:block justify-between sm:justify-start gap-4">
                  <span className="text-sm text-brand-cream/90 font-light leading-snug">
                    {row.range[currentLang]}
                  </span>
                  <span className="sm:hidden font-mono text-sm font-bold text-brand-gold whitespace-nowrap">
                    {row.price}
                  </span>
                </div>
                <span className="hidden sm:block font-mono text-sm font-bold text-brand-gold">
                  {row.price}
                </span>
                <span className="text-xs text-brand-cream/55 mt-1 sm:mt-0 font-mono">
                  {row.extra ? row.extra[currentLang] : "—"}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function OffersCatalog({
  currentLang,
  translations,
  onContact,
}: OffersCatalogProps) {
  const [activeHunt, setActiveHunt] = useState<HuntPricingType>("deer");

  const huntOffers = {
    deer: HUNT_OFFERS.find((o) => o.id === "hunt-deer")!,
    boar: HUNT_OFFERS.find((o) => o.id === "hunt-boar")!,
    roe: HUNT_OFFERS.find((o) => o.id === "hunt-roe")!,
  };

  const activeOffer = huntOffers[activeHunt];

  return (
    <section className="py-24 pt-28 bg-brand-dark relative min-h-screen">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-forest/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
            {translations.offers_title}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-ivory font-bold tracking-tight mb-4">
            {translations.offers_subtitle}
          </h1>
          <div className="h-[1px] w-24 bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold mb-6 text-center sm:text-left">
            {translations.offers_common_title}
          </h2>

          <div className="hidden sm:grid sm:grid-cols-[1.6fr_0.5fr_0.6fr] gap-x-6 gap-y-1 px-5 pb-3 border-b border-brand-gold/25">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cream/40">
              {translations.offers_col_service}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cream/40">
              {translations.offers_col_price}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cream/40">
              {translations.offers_col_unit}
            </span>
          </div>

          <div className="space-y-2 sm:space-y-0 rounded-xl border border-brand-forest/30 overflow-hidden sm:border-0 sm:overflow-visible">
            {COMMON_SERVICES.map((service) => (
              <div
                key={service.id}
                className="sm:grid sm:grid-cols-[1.6fr_0.5fr_0.6fr] sm:gap-x-6 sm:px-5 sm:py-4 sm:border-b sm:border-brand-forest/15 p-4 sm:p-0 bg-brand-moss/15 sm:bg-transparent"
              >
                <span className="text-sm text-brand-cream/90 font-light leading-snug block mb-2 sm:mb-0">
                  {service.name[currentLang]}
                </span>
                <div className="flex sm:contents justify-between items-center gap-4">
                  <span className="font-mono text-sm font-bold text-brand-gold">{service.price}</span>
                  <span className="text-xs text-brand-cream/55 font-mono">{service.unit[currentLang]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xs font-mono tracking-[0.2em] text-brand-cream/50 uppercase text-center mb-4">
            {translations.offers_hunt_select}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {HUNT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveHunt(tab.id)}
                className={`flex-1 px-5 py-3.5 rounded-lg text-xs sm:text-sm font-sans font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${
                  activeHunt === tab.id
                    ? "bg-brand-gold text-brand-dark border-brand-gold shadow-lg shadow-brand-gold/20"
                    : "bg-brand-moss/20 text-brand-cream/80 border-brand-forest/40 hover:border-brand-gold/50 hover:text-brand-gold"
                }`}
              >
                {tab.label[currentLang]}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeHunt}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="rounded-xl border border-brand-gold/25 bg-brand-moss/10 overflow-hidden"
          >
            <div className="relative h-48 sm:h-56 md:h-80 lg:h-96 overflow-hidden">
              <img
                src={activeOffer.image}
                alt={activeOffer.title[currentLang]}
                className={`w-full h-full object-cover ${
                  activeHunt === "roe" ? "object-center md:object-[center_40%]" : "object-center"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-ivory font-bold">
                  {activeOffer.title[currentLang]}
                </h3>
                <p className="text-brand-gold/90 text-sm font-serif italic mt-1">
                  {activeOffer.subtitle[currentLang]}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-8 space-y-8">
              <p className="text-brand-cream/85 text-sm sm:text-base font-light leading-relaxed">
                {activeOffer.description[currentLang]}
              </p>

              {activeHunt === "deer" && (
                <PricingRows
                  sections={DEER_PRICING}
                  currentLang={currentLang}
                  translations={translations}
                />
              )}

              {activeHunt === "boar" && (
                <PricingRows
                  sections={BOAR_PRICING}
                  currentLang={currentLang}
                  translations={translations}
                />
              )}

              {activeHunt === "roe" && (
                <PricingRows
                  sections={ROE_PRICING}
                  currentLang={currentLang}
                  translations={translations}
                />
              )}

              <div className="pt-4 border-t border-brand-forest/20 flex justify-center">
                <button
                  onClick={onContact}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-dark font-sans text-xs font-bold tracking-widest uppercase rounded shadow-lg hover:bg-brand-ivory transition-colors cursor-pointer"
                >
                  {translations.hero_cta_book}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <OffersNotes translations={translations} />
      </div>
    </section>
  );
}
