export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  features: string[];
  category: ProductCategory;
  icon: string;
  image?: string;
  gallery?: string[];
  fullPage: boolean;
  color: string;
  hidden?: boolean;
}

export type ProductCategory =
  | "platform"
  | "safety"
  | "mobility"
  | "comfort"
  | "sleep"
  | "home"
  | "wellness"
  | "portable"
  | "hub";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date?: string;
  image?: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface NewsletterSubscriber {
  email: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface LegalPage {
  slug: string;
  title: string;
  lastUpdated: string;
  content: string;
}
