import { Language } from "./types";

export const SITE_NAME = "Saracen Hunting";
export const SITE_URL = "https://saracenhunting.pl";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export interface PageSeo {
  title: string;
  description: string;
  path: string;
}

type SeoByLang = Record<Language, PageSeo>;

const PAGE_SEO: Record<string, SeoByLang> = {
  "/": {
    pl: {
      title: "Saracen Hunting — Polowania w Polsce | Jeleń, Dzik, Rogacz",
      description:
        "Profesjonalne polowania w Polsce od 1998 roku. Jeleń szlachetny, dzik i rogacz. Luksusowe zakwaterowanie, doświadczeni przewodnicy i pełna organizacja wyprawy.",
      path: "/",
    },
    en: {
      title: "Saracen Hunting — Hunting in Poland | Red Deer, Boar, Roe Buck",
      description:
        "Professional hunting expeditions in Poland since 1998. Red deer, wild boar and roe buck. Luxury lodging, expert guides and complete trip organization.",
      path: "/",
    },
    no: {
      title: "Saracen Hunting — Jakt i Polen | Kronhjort, Villsvin, Råbukk",
      description:
        "Profesjonelle jaktekspedisjoner i Polen siden 1998. Kronhjort, villsvin og råbukk. Luksuriøs innkvartering, erfarne guider og komplett organisering.",
      path: "/",
    },
  },
  "/o-nas": {
    pl: {
      title: "O nas — Saracen Hunting | Tradycja od 1998",
      description:
        "Poznaj Saracen Hunting — organizatora polowań z ponad 25-letnim doświadczeniem. Tradycja, pasja i najwyższy standard obsługi myśliwych z całego świata.",
      path: "/o-nas",
    },
    en: {
      title: "About Us — Saracen Hunting | Tradition Since 1998",
      description:
        "Discover Saracen Hunting — hunting organizers with over 25 years of experience. Tradition, passion and the highest service standards for hunters worldwide.",
      path: "/o-nas",
    },
    no: {
      title: "Om oss — Saracen Hunting | Tradisjon siden 1998",
      description:
        "Bli kjent med Saracen Hunting — jaktarrangør med over 25 års erfaring. Tradisjon, lidenskap og høyeste servicestandard for jegere fra hele verden.",
      path: "/o-nas",
    },
  },
  "/oferta": {
    pl: {
      title: "Oferta polowań — Saracen Hunting | Cennik i pakiety",
      description:
        "Sprawdź ofertę polowań na jelenia szlachetnego, dzika i rogacza. Przejrzysty cennik, usługi podstawowe i indywidualne pakiety polowania w Polsce.",
      path: "/oferta",
    },
    en: {
      title: "Hunting Offers — Saracen Hunting | Pricing & Packages",
      description:
        "Browse hunting offers for red deer, wild boar and roe buck. Transparent pricing, base services and tailored hunting packages in Poland.",
      path: "/oferta",
    },
    no: {
      title: "Jakttilbud — Saracen Hunting | Priser og pakker",
      description:
        "Se jakttilbud for kronhjort, villsvin og råbukk. Oversiktlige priser, grunnleggende tjenester og skreddersydde jaktpakker i Polen.",
      path: "/oferta",
    },
  },
  "/galeria": {
    pl: {
      title: "Galeria — Saracen Hunting | Zdjęcia z polowań",
      description:
        "Galeria zdjęć z polowań Saracen Hunting — trofea, tradycje łowieckie, polowania zbiorowe i dzika polska przyroda.",
      path: "/galeria",
    },
    en: {
      title: "Gallery — Saracen Hunting | Hunting Photos",
      description:
        "Photo gallery from Saracen Hunting expeditions — trophies, hunting traditions, driven hunts and Polish wilderness.",
      path: "/galeria",
    },
    no: {
      title: "Galleri — Saracen Hunting | Jaktbilder",
      description:
        "Bildegalleri fra Saracen Hunting — trofeer, jakttradisjoner, drivjakt og polsk villmark.",
      path: "/galeria",
    },
  },
  "/kontakt": {
    pl: {
      title: "Kontakt — Saracen Hunting | Zapytaj o polowanie",
      description:
        "Skontaktuj się z Saracen Hunting. Formularz zapytania, adres siedziby w Gołkowicach, telefon i e-mail. Zaplanuj swoją wyprawę łowiecką.",
      path: "/kontakt",
    },
    en: {
      title: "Contact — Saracen Hunting | Inquire About a Hunt",
      description:
        "Contact Saracen Hunting. Inquiry form, headquarters in Gołkowice, phone and email. Plan your hunting expedition with us.",
      path: "/kontakt",
    },
    no: {
      title: "Kontakt — Saracen Hunting | Spør om jakt",
      description:
        "Kontakt Saracen Hunting. Forespørselsskjema, hovedkontor i Gołkowice, telefon og e-post. Planlegg din jaktekspedisjon med oss.",
      path: "/kontakt",
    },
  },
  "/polityka-prywatnosci": {
    pl: {
      title: "Polityka prywatności — Saracen Hunting",
      description: "Polityka prywatności i ochrony danych osobowych Saracen Hunting zgodna z RODO.",
      path: "/polityka-prywatnosci",
    },
    en: {
      title: "Privacy Policy — Saracen Hunting",
      description: "Saracen Hunting privacy policy and personal data protection information.",
      path: "/polityka-prywatnosci",
    },
    no: {
      title: "Personvernregler — Saracen Hunting",
      description: "Saracen Hunting personvernregler og informasjon om behandling av personopplysninger.",
      path: "/polityka-prywatnosci",
    },
  },
  "/regulamin": {
    pl: {
      title: "Regulamin — Saracen Hunting",
      description: "Regulamin korzystania ze strony i warunki organizacji wypraw łowieckich Saracen Hunting.",
      path: "/regulamin",
    },
    en: {
      title: "Terms of Service — Saracen Hunting",
      description: "Terms of service and conditions for Saracen Hunting expeditions and website use.",
      path: "/regulamin",
    },
    no: {
      title: "Vilkår for bruk — Saracen Hunting",
      description: "Vilkår for bruk av nettstedet og betingelser for Saracen Hunting jaktekspedisjoner.",
      path: "/regulamin",
    },
  },
};

const FALLBACK_SEO = PAGE_SEO["/"];

export function getPageSeo(pathname: string, lang: Language): PageSeo {
  return PAGE_SEO[pathname]?.[lang] ?? FALLBACK_SEO[lang];
}

export function getHtmlLang(lang: Language): string {
  if (lang === "no") return "nb";
  return lang;
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: DEFAULT_OG_IMAGE,
  description:
    "Organizator profesjonalnych polowań w Polsce — jeleń szlachetny, dzik, rogacz. Działamy od 1998 roku.",
  telephone: "+48-607-040-396",
  email: "kontakt@saracenhunting.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Cmentarna 28",
    addressLocality: "Gołkowice",
    postalCode: "44-341",
    addressCountry: "PL",
  },
  areaServed: {
    "@type": "Country",
    name: "Poland",
  },
  foundingDate: "1998",
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function upsertJsonLd(id: string, data: object) {
  let element = document.getElementById(id) as HTMLScriptElement | null;
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

export function applyPageSeo(pathname: string, lang: Language) {
  const seo = getPageSeo(pathname, lang);
  const canonicalUrl = `${SITE_URL}${seo.path}`;
  const ogImage = DEFAULT_OG_IMAGE;

  document.title = seo.title;
  document.documentElement.lang = getHtmlLang(lang);

  upsertMeta("name", "description", seo.description);
  upsertMeta("name", "robots", "index, follow");
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:title", seo.title);
  upsertMeta("property", "og:description", seo.description);
  upsertMeta("property", "og:url", canonicalUrl);
  upsertMeta("property", "og:image", ogImage);
  upsertMeta("property", "og:locale", lang === "pl" ? "pl_PL" : lang === "no" ? "nb_NO" : "en_GB");
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", seo.title);
  upsertMeta("name", "twitter:description", seo.description);
  upsertMeta("name", "twitter:image", ogImage);

  upsertLink("canonical", canonicalUrl);

  if (pathname === "/" || pathname === "/kontakt") {
    upsertJsonLd("seo-organization-jsonld", ORGANIZATION_JSON_LD);
  } else {
    document.getElementById("seo-organization-jsonld")?.remove();
  }
}
