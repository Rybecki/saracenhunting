import React from "react";
import { Link } from "react-router-dom";
import { Users, ArrowRight } from "lucide-react";

interface OffersGroupHuntProps {
  translations: Record<string, string>;
}

const DETAIL_KEYS = [
  "offers_group_rate",
  "offers_group_included",
  "offers_group_surcharge",
  "offers_group_transfer",
  "offers_group_trophy",
] as const;

export default function OffersGroupHunt({ translations }: OffersGroupHuntProps) {
  return (
    <div className="mb-16 rounded-xl border border-brand-gold/25 bg-brand-moss/10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-56 sm:h-64 lg:h-auto lg:min-h-[320px] overflow-hidden">
          <img
            src="/gallery/02-polowanie-zbiorowe.png"
            alt={translations.offers_group_title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent lg:opacity-0" />

          <div className="absolute top-4 right-4 bg-brand-dark/90 border border-brand-gold/30 rounded px-3 py-1.5 backdrop-blur-sm">
            <span className="text-[10px] text-brand-cream/60 uppercase tracking-widest block text-right font-mono -mb-1">
              {translations.offers_group_size_label}
            </span>
            <div className="flex items-center justify-end gap-2">
              <Users className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span className="font-mono text-base font-bold text-brand-gold">20–45</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
            {translations.offers_group_title}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-ivory font-bold tracking-tight mb-4">
            {translations.offers_group_heading}
          </h2>
          <p className="text-brand-cream/80 text-sm font-light leading-relaxed mb-6">
            {translations.offers_group_intro}
          </p>

          <ul className="space-y-3.5">
            {DETAIL_KEYS.map((key) => (
              <li key={key} className="flex gap-3 text-sm text-brand-cream/85 font-light leading-relaxed">
                <span className="mt-2 h-1 w-1 rounded-full bg-brand-gold flex-shrink-0" />
                <span>{translations[key]}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-brand-forest/25 flex justify-center sm:justify-start">
            <Link
              to="/kontakt"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-dark font-sans text-xs font-bold tracking-widest uppercase rounded shadow-lg hover:bg-brand-ivory transition-colors duration-300 text-center"
            >
              <span>{translations.offers_group_cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
