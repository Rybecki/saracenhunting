import React from "react";

export interface LegalSection {
  title: string;
  body: string[];
}

interface LegalDocumentProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalDocument({ title, lastUpdated, sections }: LegalDocumentProps) {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
          Saracen Hunting
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-brand-forest font-bold tracking-tight mb-4">
          {title}
        </h1>
        <div className="h-[2px] w-20 bg-brand-gold mb-6" />
        <p className="text-xs text-brand-dark/50 font-mono mb-12">{lastUpdated}</p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-lg sm:text-xl text-brand-forest font-semibold mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-sm text-brand-dark/75 leading-relaxed font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
