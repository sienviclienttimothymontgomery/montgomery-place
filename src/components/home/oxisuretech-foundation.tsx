import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Cpu, ArrowRight, Zap, Shield, Wifi, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Adaptive Flow",
    description: "Intelligent oxygen delivery that adjusts to your needs in real time",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Continuous monitoring with multi-layer safety protocols",
  },
  {
    icon: Wifi,
    title: "Connected",
    description: "Seamless interoperability across every Montgomery Place product",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Usage insights that help optimize your wellness routine",
  },
];

export function OxiSureTechFoundation() {
  return (
    <Section variant="warm">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold">
              <Cpu className="w-4 h-4" />
              Platform Technology
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--fg)] tracking-tight leading-[1.1]">
              OxiSureTech — The Foundation of{" "}
              <span className="text-[var(--accent)]">Everything We Build</span>
            </h2>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
              OxiSureTech is our proprietary platform technology — the intelligent
              backbone powering every product in the Montgomery Place ecosystem.
              It combines advanced oxygen delivery optimization, real-time
              monitoring, and adaptive flow management.
            </p>
            <Link href="/technology/oxisuretech">
              <Button className="rounded-2xl">
                Learn More About OxiSureTech
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 group"
              >
                <feature.icon className="w-9 h-9 text-[var(--accent)] mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-[var(--fg)] mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
