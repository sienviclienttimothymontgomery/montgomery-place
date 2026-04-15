import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CloudRain, Thermometer, Wind, Leaf } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Climate & Health",
  description: "Understanding the connection between climate change and respiratory health — and how Montgomery Place is building products for a changing world.",
};

export default function ClimateHealthPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge>Climate & Health</Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fg)] tracking-tight">
              Climate and <span className="text-[var(--accent)]">Respiratory Health</span>
            </h1>
            <p className="text-xl text-[var(--fg-secondary)] leading-relaxed">
              Climate change is a respiratory health issue. As environments become more unpredictable, stagnant systems fall short. The Montgomery Place ecosystem is designed to respond to these environmental changes in real time, maintaining reliability when it matters most.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: CloudRain, title: "Air Quality Response", desc: "As poor air quality events increase, passive systems are no longer enough. The OxiSureTech ecosystem monitors environmental shifts to provide real-time response." },
              { icon: Thermometer, title: "Temperature Extremes", desc: "Extreme temperatures compromise standard oxygen delivery efficiency. OxiSureTech utilizes adaptive system behavior to maintain consistent respiratory support regardless of changing external conditions." },
              { icon: Wind, title: "The Home as a Hub", desc: "As outdoor air worsens, indoor air intelligence becomes critical. Our ecosystem integrates your home environment into your care, creating a reliable, integrated sanctuary." },
              { icon: Leaf, title: "Engineered Durability", desc: "We believe in sustainable engineering. By prioritizing energy efficiency, modular components, and long-lasting system architecture, we build resilient tools meant to endure." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[var(--bg)] border border-[var(--border)] space-y-4">
                <item.icon className="w-10 h-10 text-[var(--accent)]" />
                <h3 className="font-heading text-xl font-bold text-[var(--fg)]">{item.title}</h3>
                <p className="text-[var(--fg-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="font-heading text-4xl font-bold text-[var(--fg)]">
              Building for a Changing World
            </h2>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
              Montgomery Place is building connected systems designed to operate reliably in increasingly unpredictable environments. By integrating environmental intelligence into the core of OxiSureTech, we create a more resilient approach to respiratory care.
            </p>
            <Link href="/products">
              <Button size="lg">Explore Our Solutions <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
