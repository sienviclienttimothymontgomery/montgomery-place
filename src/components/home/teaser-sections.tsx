import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Moon, Home, Move } from "lucide-react";

const expanses = [
  {
    category: "Sleep Wellness",
    tagline: "Intelligent overnight therapy",
    description:
      "Future additions to the ecosystem designed to optimize nighttime operation and adaptive flow management for truly restful sleep.",
    icon: Moon,
    color: "#6366F1",
  },
  {
    category: "Home Environment",
    tagline: "Total home air intelligence",
    description:
      "A connected approach to home air quality that works with your OxiSureTech devices, providing real-time environmental data and smart adjustments.",
    icon: Home,
    color: "#8B5CF6",
  },
  {
    category: "Mobility Solutions",
    tagline: "Unrestricted active support",
    description:
      "Next-generation respiratory support for active lifestyles — designed to integrate with your movement and maintain consistent oxygen delivery.",
    icon: Move,
    color: "#F59E0B",
  },
];

export function TeaserSections() {
  return (
    <Section variant="warm">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline">In Development</Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--fg)] tracking-tight">
            Expanding the Ecosystem
          </h2>
          <p className="text-lg text-[var(--fg-secondary)] max-w-2xl mx-auto">
            We are actively developing new ways to integrate the OxiSureTech
            ecosystem into every aspect of daily life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expanses.map((item) => (
            <div
              key={item.category}
              className="relative p-8 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-5 overflow-hidden hover:shadow-[var(--shadow-diffuse)] transition-all duration-500 hover:-translate-y-1 z-10 group"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
                style={{
                  background: `linear-gradient(to right, ${item.color}, ${item.color}80)`,
                }}
              />
              
              <div className="flex items-center gap-4 pt-2">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}12` }}
                >
                  <item.icon
                    className="w-7 h-7"
                    style={{ color: item.color }}
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--fg)]">
                    {item.category}
                  </h3>
                  <span className="text-xs text-[var(--fg-secondary)] uppercase tracking-wider font-medium">
                    Future Integration
                  </span>
                </div>
              </div>
              <p
                className="text-sm font-medium"
                style={{ color: item.color }}
              >
                {item.tagline}
              </p>
              <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                {item.description}
              </p>
              <Badge variant="outline">In Development</Badge>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
