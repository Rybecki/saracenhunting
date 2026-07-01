import React from "react";
import { PL, GB, NO } from "country-flag-icons/react/3x2";
import { Language } from "../types";

const FLAGS: Record<Language, React.ComponentType<{ className?: string; title?: string }>> = {
  pl: PL,
  en: GB,
  no: NO,
};

interface FlagIconProps {
  lang: Language;
  className?: string;
  title?: string;
}

export default function FlagIcon({ lang, className = "w-5 h-auto rounded-sm shadow-sm", title }: FlagIconProps) {
  const Flag = FLAGS[lang];
  return <Flag className={className} title={title} />;
}

export const LANGUAGES: { code: Language; name: string }[] = [
  { code: "pl", name: "Polski" },
  { code: "en", name: "English" },
  { code: "no", name: "Norsk" },
];
