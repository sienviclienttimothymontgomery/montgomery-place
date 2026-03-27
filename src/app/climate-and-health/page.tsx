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
              Climate change is a respiratory health issue. Rising temperatures,
              worsening air quality, and increasing wildfire smoke are creating
              new challenges for everyone — especially those who rely on
              supplemental oxygen.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: CloudRain, title: "Air Quality Challenges", desc: "Climate change is increasing the frequency and severity of poor air quality events. Wildfire smoke, ground-level ozone, and particulate matter are making outdoor air less safe for respiratory patients. Montgomery Place products like AirVista are designed to monitor and respond to these environmental changes." },
              { icon: Thermometer, title: "Temperature Extremes", desc: "Extreme heat and cold both affect respiratory function and oxygen delivery efficiency. OxiSureTech's adaptive algorithms account for environmental temperature changes, ensuring consistent performance regardless of conditions." },
              { icon: Wind, title: "Indoor Air Matters", desc: "As outdoor air quality worsens, the air inside our homes becomes even more important. Montgomery Place is developing products that not only deliver oxygen but also monitor and improve your indoor air environment." },
              { icon: Leaf, title: "Sustainable Design", desc: "We believe in building products that are part of the solution, not the problem. Our engineering priorities include energy efficiency, durable materials that reduce waste, and modular designs that extend product life." },
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
              Montgomery Place is committed to creating products that help people
              breathe better — no matter what the environment throws at them.
              Climate-aware design is built into everything we make.
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
