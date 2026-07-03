import React from "react";
import LegalDocument, { LegalSection } from "../components/LegalDocument";

interface PrivacyPolicyPageProps {
  translations: Record<string, unknown>;
}

export default function PrivacyPolicyPage({ translations }: PrivacyPolicyPageProps) {
  return (
    <div className="pt-20">
      <LegalDocument
        title={translations.privacy_title as string}
        lastUpdated={translations.privacy_last_updated as string}
        sections={translations.privacy_sections as LegalSection[]}
      />
    </div>
  );
}
