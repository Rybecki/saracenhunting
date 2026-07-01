export type Language = "pl" | "en" | "no";

export interface Tenant {
  id: string; // e.g. "saracen-pl", "saracen-no", "saracen-uk"
  name: string;
  country: string;
  currency: string;
  flag: string;
  email: string;
  phone: string;
  address: string;
}

export interface HuntOffer {
  id: string;
  category: "deer" | "wild_boar" | "roe_deer" | "trophy" | "individual" | "group";
  priceEuro: number;
  durationDays: number;
  image: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  specifications: Record<Language, string[]>;
}

export interface BookingInquiry {
  id: string;
  tenantId: string; // Multi-tenant isolation context
  name: string;
  email: string;
  phone: string;
  chosenHuntId: string;
  huntTitle: string;
  groupSize: number;
  customMessage: string;
  preferredDate: string;
  status: "pending" | "approved" | "completed" | "cancelled";
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  image: string;
  content: Record<Language, string>;
  huntType: Record<Language, string>;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: "traditions" | "group_hunts" | "red_deer" | "wild_boar" | "mouflon";
  title: Record<Language, string>;
}
