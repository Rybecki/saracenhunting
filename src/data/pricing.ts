import { Language } from "../types";

export type HuntPricingType = "deer" | "boar" | "roe";

export interface CommonService {
  id: string;
  name: Record<Language, string>;
  price: string;
  unit: Record<Language, string>;
}

export interface PricingRow {
  range: Record<Language, string>;
  price: string;
  extra?: Record<Language, string>;
}

export interface PricingSection {
  title: Record<Language, string>;
  rows: PricingRow[];
}

export const COMMON_SERVICES: CommonService[] = [
  {
    id: "lodging",
    name: {
      pl: "Nocleg, wyżywienie, obsługa tłumacza, wstępna preparacja trofeum",
      en: "Lodging, meals, interpreter service, preliminary trophy preparation",
      no: "Overnatting, måltider, tolkehjelp, foreløpig trofépreparering",
    },
    price: "100,00 €",
    unit: { pl: "Osoba / dzień", en: "Person / day", no: "Person / dag" },
  },
  {
    id: "single-room",
    name: {
      pl: "Dopłata do pokoju jednoosobowego",
      en: "Single room supplement",
      no: "Tillegg for enkeltrom",
    },
    price: "20,00 €",
    unit: { pl: "Za dzień", en: "Per day", no: "Per dag" },
  },
  {
    id: "companion",
    name: {
      pl: "Osoba towarzysząca",
      en: "Accompanying person",
      no: "Ledsager",
    },
    price: "50,00 €",
    unit: { pl: "Za dzień", en: "Per day", no: "Per dag" },
  },
  {
    id: "companion-hunt",
    name: {
      pl: "Osoba towarzysząca biorąca udział w polowaniu",
      en: "Accompanying person participating in the hunt",
      no: "Ledsager som deltar på jakten",
    },
    price: "30,00 €",
    unit: { pl: "Za dzień", en: "Per day", no: "Per dag" },
  },
  {
    id: "voucher",
    name: {
      pl: "Voucher",
      en: "Voucher",
      no: "Voucher",
    },
    price: "100,00 €",
    unit: { pl: "Za myśliwego", en: "Per hunter", no: "Per jeger" },
  },
];

export const DEER_PRICING: PricingSection[] = [
  {
    title: { pl: "Byk", en: "Stag", no: "Hjort" },
    rows: [
      { range: { pl: "Do 1,99 kg", en: "Up to 1.99 kg", no: "Opptil 1,99 kg" }, price: "350 €" },
      { range: { pl: "2,00 – 2,49 kg", en: "2.00 – 2.49 kg", no: "2,00 – 2,49 kg" }, price: "650 €" },
      { range: { pl: "2,50 – 2,99 kg", en: "2.50 – 2.99 kg", no: "2,50 – 2,99 kg" }, price: "750 €" },
      {
        range: { pl: "3,00 – 3,49 kg", en: "3.00 – 3.49 kg", no: "3,00 – 3,49 kg" },
        price: "835 €",
        extra: { pl: "+ 1,00 €/10g", en: "+ €1.00/10g", no: "+ 1,00 €/10g" },
      },
      {
        range: { pl: "3,50 – 3,99 kg", en: "3.50 – 3.99 kg", no: "3,50 – 3,99 kg" },
        price: "885 €",
        extra: { pl: "+ 1,90 €/10g", en: "+ €1.90/10g", no: "+ 1,90 €/10g" },
      },
      {
        range: { pl: "4,00 – 4,49 kg", en: "4.00 – 4.49 kg", no: "4,00 – 4,49 kg" },
        price: "980 €",
        extra: { pl: "+ 1,90 €/10g", en: "+ €1.90/10g", no: "+ 1,90 €/10g" },
      },
      {
        range: { pl: "4,50 – 4,99 kg", en: "4.50 – 4.99 kg", no: "4,50 – 4,99 kg" },
        price: "1 075 €",
        extra: { pl: "+ 2,00 €/10g", en: "+ €2.00/10g", no: "+ 2,00 €/10g" },
      },
      {
        range: { pl: "5,00 – 5,99 kg", en: "5.00 – 5.99 kg", no: "5,00 – 5,99 kg" },
        price: "1 275 €",
        extra: { pl: "+ 3,50 €/10g", en: "+ €3.50/10g", no: "+ 3,50 €/10g" },
      },
      {
        range: { pl: "6,00 – 6,99 kg", en: "6.00 – 6.99 kg", no: "6,00 – 6,99 kg" },
        price: "1 625 €",
        extra: { pl: "+ 5,00 €/10g", en: "+ €5.00/10g", no: "+ 5,00 €/10g" },
      },
      {
        range: { pl: "7,00 – 7,99 kg", en: "7.00 – 7.99 kg", no: "7,00 – 7,99 kg" },
        price: "2 125 €",
        extra: { pl: "+ 10,00 €/10g", en: "+ €10.00/10g", no: "+ 10,00 €/10g" },
      },
      {
        range: { pl: "8,00 – 8,99 kg", en: "8.00 – 8.99 kg", no: "8,00 – 8,99 kg" },
        price: "3 125 €",
        extra: { pl: "+ 13,00 €/10g", en: "+ €13.00/10g", no: "+ 13,00 €/10g" },
      },
      {
        range: { pl: "Powyżej 9,00 kg", en: "Above 9.00 kg", no: "Over 9,00 kg" },
        price: "4 425 €",
        extra: { pl: "+ 14,00 €/10g", en: "+ €14.00/10g", no: "+ 14,00 €/10g" },
      },
      {
        range: { pl: "Postrzelenie byka", en: "Stag shot fee", no: "Skuddavgift hjort" },
        price: "600 €",
      },
      {
        range: {
          pl: "Postrzelenie łani / cielęcia",
          en: "Hind / calf shot fee",
          no: "Skuddavgift hind / kalv",
        },
        price: "50 €",
      },
    ],
  },
];

export const BOAR_PRICING: PricingSection[] = [
  {
    title: { pl: "Odyniec", en: "Tusker", no: "Villsvin" },
    rows: [
      {
        range: { pl: "140 mm – 159 mm", en: "140 mm – 159 mm", no: "140 mm – 159 mm" },
        price: "450 €",
        extra: { pl: "+ 2,50 €/mm", en: "+ €2.50/mm", no: "+ 2,50 €/mm" },
      },
      {
        range: { pl: "160 mm – 199 mm", en: "160 mm – 199 mm", no: "160 mm – 199 mm" },
        price: "580 €",
        extra: { pl: "+ 11,50 €/mm", en: "+ €11.50/mm", no: "+ 11,50 €/mm" },
      },
      {
        range: { pl: "200 mm i więcej", en: "200 mm and over", no: "200 mm og over" },
        price: "995 €",
        extra: { pl: "+ 14,50 €/mm", en: "+ €14.50/mm", no: "+ 14,50 €/mm" },
      },
      {
        range: {
          pl: "Postrzelenie dzika orężnego",
          en: "Trophy boar shot fee",
          no: "Skuddavgift villsvin",
        },
        price: "550 €",
      },
    ],
  },
];

export const ROE_PRICING: PricingSection[] = [
  {
    title: { pl: "Kozioł", en: "Roe buck", no: "Råbukk" },
    rows: [
      {
        range: { pl: "Kozioł do 349 g", en: "Buck up to 349 g", no: "Bukk opptil 349 g" },
        price: "340 €",
      },
      {
        range: { pl: "Kozioł 350–449 g", en: "Buck 350–449 g", no: "Bukk 350–449 g" },
        price: "550 €",
      },
      {
        range: { pl: "Kozioł 450 g i więcej", en: "Buck 450 g and over", no: "Bukk 450 g og over" },
        price: "750 €",
      },
      {
        range: { pl: "Kozioł perukarz", en: "Peruke buck", no: "Perukebukk" },
        price: "3 100 €",
      },
      {
        range: {
          pl: "Kozioł selekcyjny / ranny",
          en: "Selective / wounded buck",
          no: "Selektiv / skadet bukk",
        },
        price: "340 €",
      },
    ],
  },
];

export const HUNT_TABS: { id: HuntPricingType; label: Record<Language, string> }[] = [
  {
    id: "deer",
    label: { pl: "Jelenie szlachetne", en: "Red Deer", no: "Kronhjort" },
  },
  {
    id: "boar",
    label: { pl: "Dziki", en: "Wild Boar", no: "Villsvin" },
  },
  {
    id: "roe",
    label: { pl: "Majowe Rogacze", en: "May Roe Bucks", no: "Mai-råbukk" },
  },
];
