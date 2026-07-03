import React from "react";
import Contact from "../components/Contact";
import { Language } from "../types";
import { Tenant } from "../types";

interface ContactPageProps {
  currentLang: Language;
  translations: Record<string, string>;
  selectedTenant: Tenant;
}

export default function ContactPage({
  currentLang,
  translations,
  selectedTenant,
}: ContactPageProps) {
  return (
    <div className="pt-20">
      <Contact
        currentLang={currentLang}
        translations={translations}
        selectedTenant={selectedTenant}
      />
    </div>
  );
}
