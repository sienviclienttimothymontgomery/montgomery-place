import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Move, MapPin, Battery, Wind } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobility Solutions",
  description: "Montgomery Place mobility solutions — portable, lightweight respiratory products that move with you, not against you.",
};

export default function MobilityPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge>Mobility</Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fg)] tracking-tight">
              Mobility <span className="text-[var(--accent)]">Solutions</span>
            </h1>
            <p className="text-xl text-[var(--fg-secondary)] leading-relaxed">
              Oxygen therapy should never limit your freedom. Montgomery Place
              mobility products are designed to move with you — at home, around
              town, and on the go.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[var(--bg)] border border-[var(--border)] space-y-4">
              <Move className="w-10 h-10 text-blue-500" />
              <h3 className="font-heading text-2xl font-bold text-[var(--fg)]">ReelAir</h3>
              <p className="text-[var(--accent)] font-medium">Freedom of Movement, Reimagined</p>
              <p className="text-[var(--fg-secondary)] leading-relaxed">
                Our patented retractable tubing system eliminates tangles and
                trip hazards while keeping you connected to your oxygen supply.
                Walk room to room with complete confidence.
              </p>
              <Link href="/products/reelair">
                <Button>Explore ReelAir <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: MapPin, title: "Go Anywhere", desc: "Products designed for daily life outside the home." },
                { icon: Battery, title: "All-Day Battery", desc: "Extended power for full days of freedom." },
                { icon: Wind, title: "Lightweight Design", desc: "Premium materials keep everything portable." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-start gap-4 hover:border-[var(--accent)] transition-colors">
                  <item.icon className="w-6 h-6 text-[var(--accent)] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold text-[var(--fg)]">{item.title}</h4>
                    <p className="text-sm text-[var(--fg-secondary)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
