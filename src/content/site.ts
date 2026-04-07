import { NavLink, LegalPage } from "@/types";

export const siteConfig = {
  name: "Montgomery Place",
  tagline: "Healthier Living — At Home and On the Go",
  description:
    "Montgomery Place LLC is a respiratory health and home wellness company. Our OxiSureTech platform powers a complete ecosystem of products designed to make breathing therapy safer, more comfortable, and beautifully integrated into daily life.",
  contactEmail: "marketplace@montgomeryplacellc.com",
  url: "https://montgomeryplacellc.com",
};

export const navLinks: NavLink[] = [
  {
    label: "Technology",
    href: "/technology/oxisuretech",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "Respiratory Innovation", href: "/innovation" },
      { label: "Sleep Therapy", href: "/sleep-therapy" },
      { label: "Mobility Solutions", href: "/mobility-solutions" },
    ],
  },
  {
    label: "About",
    href: "#",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Our Impact", href: "/impact" },
      { label: "Our Health Story", href: "/our-health-story" },
      { label: "Climate & Health", href: "/climate-and-health" },
    ],
  },
  {
    label: "Education",
    href: "/education",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerLinks = {
  products: [
    { label: "OxiSureTech", href: "/products/oxisuretech" },
    { label: "Premium Oxygen Tubing - 50 ft", href: "/products/oxisuretech" },
    { label: "Premium Oxygen Tubing - 50 ft x 2", href: "/products/oxisuretech" },
    { label: "Premium Oxygen Tubing - 25 ft", href: "/products/oxisuretech" },
    { label: "Premium Oxygen Tubing - 25 ft x 2", href: "/products/oxisuretech" },
    // TEMPORARILY HIDDEN — not yet available
    // { label: "GlowSafe", href: "/products/glowsafe" },
    // { label: "ReelAir", href: "/products/reelair" },
    // { label: "FlexCannula", href: "/products/flexcannula" },
    { label: "All Products", href: "/technology/oxisuretech" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Impact", href: "/impact" },
    { label: "Our Health Story", href: "/our-health-story" },
    { label: "Climate & Health", href: "/climate-and-health" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Education", href: "/education" },
    { label: "OxiSureTech Technology", href: "/technology/oxisuretech" },
    { label: "Respiratory Innovation", href: "/innovation" },
    { label: "Sleep Therapy", href: "/sleep-therapy" },
    { label: "Mobility Solutions", href: "/mobility-solutions" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Medical Disclaimer", href: "/medical-disclaimer" },
  ],
};
