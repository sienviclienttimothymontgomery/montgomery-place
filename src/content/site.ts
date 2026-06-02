import { NavLink } from "@/types";

export const siteConfig = {
  name: "Montgomery Place",
  tagline: "Respiratory Comfort Products for Real Life",
  description:
    "Montgomery Place develops respiratory comfort products designed to reduce daily friction for oxygen users, caregivers, and care teams, starting with OxiSureTech Premium 6-channel kink-resistant oxygen tubing.",
  contactEmail: "marketplace@montgomeryplacellc.com",
  url: "https://montgomeryplacellc.com",
};

export const navLinks: NavLink[] = [
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "OxiSureTech",
    href: "/technology/oxisuretech",
  },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "Mobility Solutions", href: "/mobility-solutions" },
      { label: "Respiratory Innovation", href: "/innovation" },
      { label: "Sleep Therapy", href: "/sleep-therapy" },
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
    { label: "All Products", href: "/products" },
    { label: "OxiSureTech Premium Tubing", href: "/products/oxisuretech" },
    { label: "OxiSureTech Platform", href: "/technology/oxisuretech" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Impact", href: "/impact" },
    { label: "Our Health Story", href: "/our-health-story" },
    { label: "Climate & Health", href: "/climate-and-health" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Education Center", href: "/education" },
    { label: "Oxygen Tubing Safety", href: "/education/oxygen-tubing-safety-at-home" },
    { label: "Prevent Kinking", href: "/education/how-to-keep-oxygen-tubing-from-kinking" },
    { label: "What Is 6-Channel Tubing?", href: "/education/what-is-6-channel-oxygen-tubing" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Medical Disclaimer", href: "/medical-disclaimer" },
  ],
};
