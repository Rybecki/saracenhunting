import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Language } from "../types";
import { applyPageSeo } from "../seo";

interface PageSeoProps {
  lang: Language;
}

export default function PageSeo({ lang }: PageSeoProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    applyPageSeo(pathname, lang);
  }, [pathname, lang]);

  return null;
}
