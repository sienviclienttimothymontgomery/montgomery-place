import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Move, Heart } from "lucide-react";

const spotlights = [
  {
    slug: "glowsafe",
    name: "GlowSafe",
    tagline: "Intelligent Safety, Always Visible",
    description:
      "Ambient LED safety indicators that communicate system status through intuitive color gradients — calm, clear, and integrated into your home aesthetic. No clinical alarms, just ambient intelligence.",
    category: "Safety Innovation",
    icon: Shield,
    color: "#10B981",
    features: [
      "Ambient LED status indicators",
      "Color-coded safety communication",
      "Night-friendly dimming",
      "Environmental monitoring",
    ],
    reverse: false,
  },
  {
    slug: "reelair",
    name: "ReelAir",
    tagline: "Freedom of Movement, Reimagined",
    description:
      "A patented retractable tubing system that eliminates tangled lines and restricted movement. Walk freely, sit down without gathering loops, and live without the constant reminder of medical equipment.",
    category: "Mobility Solution",
    icon: Move,
    color: "#3B82F6",
    features: [
      "Patented retractable system",
      "Tangle-free movement",
      "Lightweight design",
      "Auto-tension adjustment",
    ],
    reverse: true,
  },
  {
    slug: "flexcannula",
    name: "FlexCannula",
    tagline: "Comfort You Can Wear All Day",
    description:
      "Next-generation nasal cannula engineered with medical-grade silicone and an adaptive flex frame. It conforms to your unique facial geometry, reducing pressure points for all-day, all-night comfort.",
    category: "Comfort & Wearables",
    icon: Heart,
    color: "#EC4899",
    features: [
      "Adaptive flex-frame design",
      "Medical-grade silicone",
      "Pressure-point-free prongs",
      "Body-heat responsive fitting",
    ],
    reverse: false,
  },
];

export function ProductSpotlights() {
  return (
    <>
      {spotlights.map((product) => (
        <Section
          key={product.slug}
          variant={product.reverse ? "cool" : "default"}
        >
          <Container>
            <div
              className={`grid lg:grid-cols-2 gap-20 items-center ${
                product.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text column */}
              <div
                className={`space-y-7 ${product.reverse ? "lg:order-2" : ""}`}
              >
                <Badge>{product.category}</Badge>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[var(--fg)] tracking-tight leading-[1.1]">
                  {product.name}
                </h2>
                <p
                  className="text-xl font-medium"
                  style={{ color: product.color }}
                >
                  {product.tagline}
                </p>
                <p className="text-[var(--fg-secondary)] text-lg leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {product.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-[var(--fg-secondary)]"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: product.color }}
                      />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href={`/products/${product.slug}`}>
                  <Button className="rounded-2xl mt-2">
                    Explore {product.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Image placeholder */}
              <div className={product.reverse ? "lg:order-1" : ""}>
                <div
                  className="aspect-[4/3] rounded-3xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}12, ${product.color}04)`,
                  }}
                >
                  <product.icon
                    className="w-28 h-28 opacity-15"
                    style={{ color: product.color }}
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}
