import { Section, Container } from "@/components/ui/section";
import { Cpu, Shield, Wifi, BarChart3 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OxiSureTech Platform",
  description: "The intelligent foundation of the Montgomery Place respiratory ecosystem.",
};

const features = [
  {
    icon: Cpu,
    title: "Adaptive Oxygen Delivery",
    description: "Intelligent oxygen delivery that adjusts to your precise needs in real time.",
  },
  {
    icon: Shield,
    title: "Continuous Safety Monitoring",
    description: "Real-time monitoring with multi-layer safety protocols and ambient awareness.",
  },
  {
    icon: Wifi,
    title: "Cross-Device Integration",
    description: "Seamless interoperability across the Montgomery Place ecosystem and existing devices.",
  },
  {
    icon: BarChart3,
    title: "Usage Intelligence",
    description: "Advanced system insights that help optimize daily operational wellness.",
  },
];

export default function OxiSureTechPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold">
              <Cpu className="w-4 h-4" />
              Platform Technology
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fg)] tracking-tight">
              OxiSureTech <span className="text-[var(--accent)]">Platform</span>
            </h1>
            <p className="text-xl text-[var(--fg-secondary)] leading-relaxed">
              OxiSureTech is our proprietary platform technology — the intelligent
              backbone powering every product in the Montgomery Place ecosystem.
              It combines advanced oxygen delivery optimization, real-time
              monitoring, and adaptive flow management.
            </p>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed font-medium">
              OxiSureTech is designed to work across devices — including existing
              respiratory systems — enhancing performance, safety, and usability
              through a unified intelligence layer.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 group"
              >
                <feature.icon className="w-10 h-10 text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-[var(--fg)] mb-3 text-xl">
                  {feature.title}
                </h3>
                <p className="text-[var(--fg-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
