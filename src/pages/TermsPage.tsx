import React from "react";
import LegalDocument, { LegalSection } from "../components/LegalDocument";

interface TermsPageProps {
  translations: Record<string, unknown>;
}

export default function TermsPage({ translations }: TermsPageProps) {
  return (
    <div className="pt-20">
      <LegalDocument
        title={translations.terms_title as string}
        lastUpdated={translations.terms_last_updated as string}
        sections={translations.terms_sections as LegalSection[]}
      />
    </div>
  );
}
