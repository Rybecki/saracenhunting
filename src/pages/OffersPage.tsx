import React from "react";
import OffersCatalog from "../components/OffersCatalog";
import { Language } from "../types";

interface OffersPageProps {
  currentLang: Language;
  translations: Record<string, string>;
  onContact: () => void;
}

export default function OffersPage({ currentLang, translations, onContact }: OffersPageProps) {
  return (
    <OffersCatalog
      currentLang={currentLang}
      translations={translations}
      onContact={onContact}
    />
  );
}
