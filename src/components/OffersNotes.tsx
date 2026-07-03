import React from "react";

interface OffersNotesProps {
  translations: Record<string, string>;
}

const NOTE_KEYS = [
  "offers_individual_rut_note",
  "offers_note_roe_buck",
  "offers_note_fallow_deer",
] as const;

export default function OffersNotes({ translations }: OffersNotesProps) {
  return (
    <div className="mt-10 max-w-2xl mx-auto border-t border-brand-forest/25 pt-8 space-y-5">
      {NOTE_KEYS.map((key) => (
        <p
          key={key}
          className="text-sm text-brand-cream/75 font-light leading-relaxed text-center sm:text-left pl-0 sm:pl-4 border-l-0 sm:border-l-2 sm:border-brand-gold/40"
        >
          {translations[key]}
        </p>
      ))}
    </div>
  );
}
