import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Cpu, ArrowRight, Zap, Shield, Wifi, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Adaptive Oxygen Delivery",
    description: "Intelligent oxygen delivery that adjusts to your precise needs in real time",
  },
  {
    icon: Shield,
    title: "Continuous Safety Monitoring",
    description: "Real-time monitoring with multi-layer safety protocols and ambient awareness",
  },
  {
    icon: Wifi,
    title: "Cross-Device Integration",
    description: "Seamless interoperability across the Montgomery Place ecosystem and existing devices",
  },
  {
    icon: BarChart3,
    title: "Usage Intelligence",
    description: "Advanced system insights that help optimize daily operational wellness",
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
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed font-medium">
              OxiSureTech is designed to work across devices — including existing
              respiratory systems — enhancing performance, safety, and usability
              through a unified intelligence layer.
            </p>
            <Link href="https://oxisuretechsolutions.com/" target="_blank" rel="noopener noreferrer">
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
