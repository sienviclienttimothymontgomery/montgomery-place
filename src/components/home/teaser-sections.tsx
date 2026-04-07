import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Moon, Home, Activity, Package } from "lucide-react";

const teasers = [
  {
    name: "SleepFlow",
    tagline: "Silent, intelligent overnight oxygen therapy",
    description:
      "Purpose-built for nighttime use, SleepFlow combines whisper-quiet operation with adaptive flow management for truly restful sleep.",
    icon: Moon,
    image: "/montgomery-place/images/products/sleepflow.png",
    color: "#6366F1",
    category: "Sleep Wellness",
  },
  {
    name: "AirVista",
    tagline: "Monitor and optimize your home air environment",
    description:
      "A connected home air quality monitor that works with your OxiSureTech devices, providing real-time environmental data and smart recommendations.",
    icon: Home,
    image: "/montgomery-place/images/products/airvista.png",
    color: "#8B5CF6",
    category: "Home Environment",
  },
  {
    name: "Premium Oxygen Tubing - 25 ft",
    tagline: "Compact, kink-resistant tubing for smaller spaces",
    description:
      "Our 25 ft Premium Oxygen Tubing delivers the same six-channel, kink-resistant performance in a shorter length — ideal for single-room use, travel, or as a convenient backup.",
    icon: Package,
    image: "/montgomery-place/images/products/oxisuretech.png",
    color: "#1A6DB5",
    category: "OxiSureTech Tubing",
    href: "/products/oxisuretech",
    available: true,
  },
  {
    name: "BreatheActive",
    tagline: "Respiratory support designed for active lifestyles",
    description:
      "Lightweight, body-conforming respiratory support for exercise, physical therapy, and daily activity — designed to move with you.",
    icon: Activity,
    color: "#F59E0B",
    category: "Active Wellness",
  },
];

export function TeaserSections() {
  return (
    <Section variant="warm">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline">Coming Soon</Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--fg)] tracking-tight">
            What&apos;s Next
          </h2>
          <p className="text-lg text-[var(--fg-secondary)] max-w-2xl mx-auto">
            More OxiSureTech-powered products are in active development,
            each designed to serve a specific wellness need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teasers.map((product) => {
            const card = (
              <div
                className="relative flex flex-col rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] overflow-hidden hover:shadow-[var(--shadow-diffuse)] transition-all duration-500 hover:-translate-y-1 z-10 group h-full"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl z-20"
                  style={{
                    background: `linear-gradient(to right, ${product.color}, ${product.color}80)`,
                  }}
                />
                {/* Image section */}
                {product.image ? (
                  <div className="relative h-44 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] to-transparent z-10" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ) : null}

                {/* Content section */}
                <div className="flex flex-col flex-1 p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    {!product.image && (
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${product.color}12` }}
                      >
                        <product.icon
                          className="w-6 h-6"
                          style={{ color: product.color }}
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[var(--fg)] leading-tight">
                        {product.name}
                      </h3>
                      <span className="text-xs text-[var(--fg-secondary)] uppercase tracking-wider font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-sm font-medium leading-snug"
                    style={{ color: product.color }}
                  >
                    {product.tagline}
                  </p>
                  <p className="text-sm text-[var(--fg-secondary)] leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="pt-1">
                    {product.available ? (
                      <Badge className="bg-[#1A6DB5] text-white border-[#1A6DB5]">Available Now</Badge>
                    ) : (
                      <Badge variant="outline">Coming Soon</Badge>
                    )}
                  </div>
                </div>
              </div>
            );

            return product.href ? (
              <Link key={product.name} href={product.href} className="block h-full">
                {card}
              </Link>
            ) : (
              <div key={product.name} className="h-full">{card}</div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
