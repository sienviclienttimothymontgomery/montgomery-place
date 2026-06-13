import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "oxisuretech",
    name: "OxiSureTech Premium Tubing",
    tagline: "Premium 6-channel oxygen tubing for easier home use",
    description:
      "Kink-resistant oxygen tubing designed to help reduce tangles, support smoother movement around the home, and make daily oxygen routines more comfortable.",
    longDescription:
      "OxiSureTech Premium Tubing was developed around the everyday realities of home oxygen use: tubing that catches, kinks, twists, or feels like one more obstacle in the room.\n\nMontgomery Place focuses on practical respiratory comfort products that are easier to live with. This premium 6-channel oxygen tubing is designed to help reduce kinking, support mobility, and create a calmer daily setup for oxygen users, caregivers, and care teams.\n\nProduct information on this website is provided for general informational purposes only. Use oxygen therapy equipment according to your healthcare provider's instructions and applicable product labeling.",
    features: [
      "6-channel kink-resistant design",
      "Tangle-conscious daily movement",
      "Latex-free tubing",
      "Designed for standard oxygen therapy setups",
      "Lightweight everyday feel",
    ],
    category: "platform",
    icon: "Cpu",
    image: "/images/products/oxisuretech.jpg",
    gallery: [
      "/images/products/oxisuretech.jpg",
      "/images/products/oxisuretech-single.jpg",
    ],
    fullPage: true,
    color: "#1A6DB5",
    status: "available",
  },
  {
    slug: "glowsafe",
    name: "GlowSafe",
    tagline: "Intelligent Safety, Always Visible",
    description:
      "GlowSafe is Montgomery Place's ambient safety indicator system. Using soft, color-coded LED illumination, GlowSafe provides at-a-glance status updates for oxygen levels, system health, and environmental conditions without intrusive alarms.",
    longDescription:
      "Traditional oxygen safety systems rely on loud alarms and blinking warning lights that create anxiety and disrupt daily life. GlowSafe takes a fundamentally different approach: ambient intelligence.\n\nGlowSafe integrates into the home environment using soft LED indicators that communicate system status through intuitive color gradients. Green means everything is operating normally. A gentle amber glow signals that attention may be needed soon. More prominent notifications are reserved for higher-priority events.\n\nBuilt on OxiSureTech, GlowSafe monitors equipment conditions and environmental factors like room ventilation and humidity that affect respiratory comfort.",
    features: [
      "Ambient LED status indicators",
      "Color-coded safety communication",
      "Environmental monitoring integration",
      "Night-friendly dimming modes",
      "Smart alert escalation",
      "OxiSureTech connected",
      "Low-power standby operation",
      "Modern home-integrated design",
    ],
    category: "safety",
    icon: "Shield",
    image: "/images/products/glowsafe.jpg",
    gallery: [
      "/images/products/glowsafe.jpg",
      "/images/products/glowsafe-features.jpg",
      "/images/products/glowsafe-lifestyle.jpg",
      "/images/products/glowsafe-packaging.jpg",
    ],
    fullPage: true,
    color: "#10B981",
    status: "development",
  },
  {
    slug: "reelair",
    name: "ReelAir",
    tagline: "Freedom of Movement, Reimagined",
    description:
      "ReelAir is Montgomery Place's oxygen line management concept for easier around-the-home mobility and cleaner tubing control.",
    longDescription:
      "For many people who rely on supplemental oxygen, tangled tubing is more than an inconvenience. It can add daily friction and complicate movement through the home.\n\nReelAir is being developed to help manage slack, reduce clutter, and make movement with oxygen support feel easier and more natural.\n\nReelAir is not publicly available yet. Contact Montgomery Place if you would like to request future product information.",
    features: [
      "Retractable line-management concept",
      "Tangle-conscious daily movement",
      "Lightweight portable design",
      "Built-in line organization",
      "Future OxiSureTech integration",
    ],
    category: "mobility",
    icon: "Move",
    fullPage: true,
    color: "#3B82F6",
    status: "development",
  },
  {
    slug: "flexcannula",
    name: "FlexCannula",
    tagline: "Comfort You Can Wear All Day",
    description:
      "FlexCannula is Montgomery Place's next-generation nasal cannula concept designed around extended-wear comfort.",
    longDescription:
      "Standard nasal cannulas are often designed for function first. FlexCannula is being explored as a more comfort-focused option for people who wear respiratory equipment for long periods.\n\nMontgomery Place is studying design directions centered on softer materials, reduced pressure points, and easier all-day wear.\n\nFlexCannula is not publicly available yet.",
    features: [
      "Adaptive flex-frame concept",
      "Comfort-focused wearability",
      "Reduced pressure-point design goals",
      "Extended-wear positioning",
    ],
    category: "comfort",
    icon: "Heart",
    fullPage: true,
    color: "#EC4899",
    status: "development",
  },
  {
    slug: "gooxi",
    name: "GoOxi",
    tagline: "Portable Power, Anywhere You Go",
    description:
      "GoOxi is Montgomery Place's ultra-portable oxygen concentrator concept for travel and on-the-go lifestyles.",
    features: [
      "Ultra-compact portable design",
      "Travel-focused concept",
      "Extended battery goals",
      "Quick-charge planning",
    ],
    category: "portable",
    icon: "Briefcase",
    image: "/images/products/gooxi.png",
    fullPage: false,
    color: "#EF4444",
    status: "development",
  },
  {
    slug: "caredock",
    name: "CareDock",
    tagline: "Connected Care, Simplified",
    description:
      "CareDock is Montgomery Place's family and caregiver connection platform concept for shared visibility and coordination.",
    features: [
      "Status sharing concept",
      "Caregiver notifications",
      "Provider-facing planning",
      "Privacy-first thinking",
    ],
    category: "hub",
    icon: "Users",
    fullPage: false,
    color: "#06B6D4",
    status: "development",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFullPageProducts(): Product[] {
  return products.filter((p) => p.fullPage && !p.hidden);
}

export function getTeaserProducts(): Product[] {
  return products.filter((p) => !p.fullPage && !p.hidden);
}

export function getVisibleProducts(): Product[] {
  return products.filter((p) => !p.hidden);
}
