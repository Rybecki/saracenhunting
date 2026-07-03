import React from "react";
import Gallery from "../components/Gallery";
import { Language } from "../types";

interface GalleryPageProps {
  currentLang: Language;
  translations: Record<string, string>;
}

export default function GalleryPage({ currentLang, translations }: GalleryPageProps) {
  return (
    <Gallery currentLang={currentLang} translations={translations} variant="full" />
  );
}
