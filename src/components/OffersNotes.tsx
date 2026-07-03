import React from "react";
import { Crown, Leaf, Award } from "lucide-react";

interface OffersNotesProps {
  translations: Record<string, string>;
}

const NOTES = [
  {
    titleKey: "offers_note_rut_title",
    textKey: "offers_note_rut_text",
    Icon: Crown,
  },
  {
    titleKey: "offers_note_roe_title",
    textKey: "offers_note_roe_text",
    Icon: Leaf,
  },
  {
    titleKey: "offers_note_fallow_title",
    textKey: "offers_note_fallow_text",
    Icon: Award,
  },
] as const;

export default function OffersNotes({ translations }: OffersNotesProps) {
  return (
    <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {NOTES.map(({ titleKey, textKey, Icon }) => (
        <div
          key={titleKey}
          className="relative rounded-lg border border-brand-forest/30 bg-brand-moss/15 p-5 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-gold/60 via-brand-gold/20 to-transparent" />
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center">
              <Icon className="w-4 h-4 text-brand-gold" />
            </div>
            <h3 className="font-serif text-sm text-brand-ivory font-semibold leading-snug pt-1">
              {translations[titleKey]}
            </h3>
          </div>
          <p className="text-xs text-brand-cream/70 font-light leading-relaxed pl-11">
            {translations[textKey]}
          </p>
        </div>
      ))}
    </div>
  );
}
