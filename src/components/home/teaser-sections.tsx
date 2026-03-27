import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Moon, Home, Activity } from "lucide-react";

const teasers = [
  {
    name: "SleepFlow",
    tagline: "Silent, intelligent overnight oxygen therapy",
    description:
      "Purpose-built for nighttime use, SleepFlow combines whisper-quiet operation with adaptive flow management for truly restful sleep.",
    icon: Moon,
    color: "#6366F1",
    category: "Sleep Wellness",
  },
  {
    name: "AirVista",
    tagline: "Monitor and optimize your home air environment",
    description:
      "A connected home air quality monitor that works with your OxiSureTech devices, providing real-time environmental data and smart recommendations.",
    icon: Home,
    color: "#8B5CF6",
    category: "Home Environment",
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

        <div className="grid md:grid-cols-3 gap-8">
          {teasers.map((product) => (
            <div
              key={product.name}
              className="relative p-8 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-5 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
                style={{
                  background: `linear-gradient(to right, ${product.color}, ${product.color}80)`,
                }}
              />
              <div className="flex items-center gap-4 pt-2">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${product.color}12` }}
                >
                  <product.icon
                    className="w-7 h-7"
                    style={{ color: product.color }}
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--fg)]">
                    {product.name}
                  </h3>
                  <span className="text-xs text-[var(--fg-secondary)] uppercase tracking-wider font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              <p
                className="text-sm font-medium"
                style={{ color: product.color }}
              >
                {product.tagline}
              </p>
              <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                {product.description}
              </p>
              <Badge variant="outline">Coming Soon</Badge>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
