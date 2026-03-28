import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "oxisuretech",
    name: "OxiSureTech",
    tagline: "The Foundation of Smarter Respiratory Care",
    description:
      "OxiSureTech is Montgomery Place's proprietary platform technology — the intelligent backbone that powers every product in our ecosystem. It combines advanced oxygen delivery optimization, real-time monitoring, and adaptive flow management to ensure safety, efficiency, and comfort in every breath.",
    longDescription:
      "OxiSureTech represents a fundamental rethinking of how respiratory technology should work in the home. Rather than treating oxygen delivery as a simple utility, OxiSureTech applies intelligent monitoring, adaptive algorithms, and seamless connectivity to create a living system that responds to your needs in real time.\n\nAt the heart of OxiSureTech is our proprietary flow optimization engine, which continuously adjusts delivery parameters based on environmental conditions, usage patterns, and safety thresholds. This means you're always receiving precisely what you need — no more, no less.\n\nEvery product in the Montgomery Place lineup is built on OxiSureTech, ensuring consistent quality, interoperability, and a unified experience across your entire home wellness setup.",
    features: [
      "Adaptive oxygen flow optimization",
      "Real-time safety monitoring",
      "Cross-device interoperability",
      "Energy-efficient operation",
      "Whisper-quiet performance",
      "Smart usage analytics",
      "Automatic safety shutoff protocols",
      "Future-ready firmware updates",
    ],
    category: "platform",
    icon: "Cpu",
    image: "/images/products/oxisuretech.png",
    fullPage: true,
    color: "#0D6E6E",
  },
  {
    slug: "glowsafe",
    name: "GlowSafe",
    tagline: "Intelligent Safety, Always Visible",
    description:
      "GlowSafe is Montgomery Place's ambient safety indicator system. Using soft, color-coded LED illumination, GlowSafe provides at-a-glance status updates for oxygen levels, system health, and environmental conditions — all without intrusive alarms or clinical aesthetics.",
    longDescription:
      "Traditional oxygen safety systems rely on loud alarms and blinking warning lights that create anxiety and disrupt daily life. GlowSafe takes a fundamentally different approach: ambient intelligence.\n\nGlowSafe integrates seamlessly into your home environment using soft, warm LED indicators that communicate system status through intuitive color gradients. Green means everything is operating perfectly. A gentle amber glow signals that attention may be needed soon. Only genuine safety events trigger more prominent notifications — and even then, GlowSafe prioritizes calm, clear communication over panic.\n\nBuilt on OxiSureTech, GlowSafe monitors not just your equipment but also environmental factors like room ventilation and humidity that affect respiratory comfort.",
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
    image: "/images/products/glowsafe.png",
    fullPage: true,
    color: "#10B981",
  },
  {
    slug: "reelair",
    name: "ReelAir",
    tagline: "Freedom of Movement, Reimagined",
    description:
      "ReelAir is Montgomery Place's portable oxygen management solution. Featuring a patented retractable tubing system and lightweight design, ReelAir eliminates tangled lines and restricted movement — giving you the freedom to move naturally throughout your home and beyond.",
    longDescription:
      "For millions of people who rely on supplemental oxygen, tangled tubing is more than an inconvenience — it's a safety hazard and a constant reminder of limitation. ReelAir changes that narrative entirely.\n\nInspired by modern retractable cord technology, ReelAir houses your oxygen line in a sleek, compact unit that automatically manages slack. Walk from room to room without worrying about tripping hazards. Sit down without gathering loops of tubing. Stand up and move freely while ReelAir smoothly extends and retracts as needed.\n\nThe result isn't just more convenient oxygen delivery — it's a fundamental shift in how it feels to live with respiratory support. ReelAir makes supplemental oxygen feel less like medical equipment and more like a natural part of your daily routine.",
    features: [
      "Patented retractable tubing system",
      "Tangle-free daily movement",
      "Lightweight portable design",
      "Smooth auto-tension adjustment",
      "Built-in line management",
      "OxiSureTech flow optimization",
      "Travel-friendly form factor",
      "Durable premium materials",
    ],
    category: "mobility",
    icon: "Move",
    image: "/images/products/reelair.png",
    fullPage: true,
    color: "#3B82F6",
  },
  {
    slug: "flexcannula",
    name: "FlexCannula",
    tagline: "Comfort You Can Wear All Day",
    description:
      "FlexCannula is Montgomery Place's next-generation nasal cannula designed for extended wear comfort. Using medical-grade silicone with an adaptive flex frame, FlexCannula conforms to your unique facial geometry — reducing pressure points and skin irritation for all-day, all-night comfort.",
    longDescription:
      "Standard nasal cannulas are designed for function, not comfort. After hours of wear, rigid prongs create pressure points, hard tubing causes ear irritation, and one-size-fits-all designs leave most users constantly adjusting their fit.\n\nFlexCannula was engineered from the ground up to solve these problems. Its adaptive flex frame uses medical-grade silicone that softens with body heat, gradually conforming to your unique facial contours. The result is a custom-feeling fit that improves over time rather than degrading.\n\nThe prong design features micro-textured surfaces that maintain position without creating pressure, while the over-ear routing uses a cushioned channel that eliminates the hot spots and irritation common with standard designs.",
    features: [
      "Adaptive flex-frame design",
      "Medical-grade silicone construction",
      "Pressure-point-free prongs",
      "Cushioned over-ear routing",
      "All-day extended wear comfort",
      "Body-heat responsive fitting",
      "Hypoallergenic materials",
      "Multiple size options",
    ],
    category: "comfort",
    icon: "Heart",
    image: "/images/products/flexcannula.png",
    fullPage: true,
    color: "#EC4899",
  },
  {
    slug: "sleepflow",
    name: "SleepFlow",
    tagline: "Breathe Better, Sleep Deeper",
    description:
      "SleepFlow is Montgomery Place's overnight oxygen therapy system. Designed specifically for nighttime use, SleepFlow combines whisper-quiet operation with intelligent flow adjustment to support restful, uninterrupted sleep.",
    features: [
      "Ultra-quiet nighttime operation",
      "Sleep-optimized flow patterns",
      "Morning wellness reports",
      "Compatible with CPAP systems",
    ],
    category: "sleep",
    icon: "Moon",
    image: "/images/products/sleepflow.png",
    fullPage: false,
    color: "#6366F1",
  },
  {
    slug: "airvista",
    name: "AirVista",
    tagline: "Your Home Air Quality Command Center",
    description:
      "AirVista is Montgomery Place's whole-home air quality monitoring and optimization hub. It tracks particulates, humidity, VOCs, and oxygen levels to maintain the ideal respiratory environment throughout your living space.",
    features: [
      "Multi-room air quality monitoring",
      "Particulate and VOC tracking",
      "Humidity optimization",
      "Smart ventilation recommendations",
    ],
    category: "home",
    icon: "Home",
    image: "/images/products/airvista.png",
    fullPage: false,
    color: "#8B5CF6",
  },
  {
    slug: "breatheactive",
    name: "BreatheActive",
    tagline: "Stay Active, Stay Confident",
    description:
      "BreatheActive is Montgomery Place's activity-focused respiratory companion. Designed for exercise, rehabilitation, and daily movement, BreatheActive adapts oxygen delivery to your activity level in real time.",
    features: [
      "Activity-responsive flow adjustment",
      "Exercise performance tracking",
      "Rehabilitation program support",
      "Lightweight active design",
    ],
    category: "wellness",
    icon: "Activity",
    image: "/images/products/breatheactive.png",
    fullPage: false,
    color: "#F59E0B",
  },
  {
    slug: "gooxi",
    name: "GoOxi",
    tagline: "Portable Power, Anywhere You Go",
    description:
      "GoOxi is Montgomery Place's ultra-portable oxygen concentrator. Built for travel and on-the-go lifestyles, GoOxi delivers reliable supplemental oxygen in a compact, airline-approved package.",
    features: [
      "Ultra-compact portable design",
      "Airline-approved",
      "Extended battery life",
      "Quick-charge capability",
    ],
    category: "portable",
    icon: "Briefcase",
    image: "/images/products/gooxi.png",
    fullPage: false,
    color: "#EF4444",
  },
  {
    slug: "caredock",
    name: "CareDock",
    tagline: "Connected Care, Simplified",
    description:
      "CareDock is Montgomery Place's family and caregiver connection platform. It provides secure, real-time status sharing and remote monitoring so loved ones and healthcare providers stay informed and connected.",
    features: [
      "Real-time status sharing",
      "Caregiver notifications",
      "Healthcare provider portal",
      "Privacy-first data sharing",
    ],
    category: "hub",
    icon: "Users",
    image: "/images/products/caredock.png",
    fullPage: false,
    color: "#06B6D4",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFullPageProducts(): Product[] {
  return products.filter((p) => p.fullPage);
}

export function getTeaserProducts(): Product[] {
  return products.filter((p) => !p.fullPage);
}
