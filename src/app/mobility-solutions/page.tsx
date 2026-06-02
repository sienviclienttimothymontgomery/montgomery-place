import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Move, MapPin, Battery, Wind } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobility Solutions",
  description:
    "Montgomery Place mobility solutions and future product concepts for easier movement with oxygen support at home and on the go.",
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
              Oxygen therapy should not add unnecessary friction to moving around the home. Montgomery Place is exploring mobility-focused product directions that support cleaner tubing management and easier daily routines.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[var(--bg)] border border-[var(--border)] space-y-4">
              <Move className="w-10 h-10 text-blue-500" />
              <h2 className="font-heading text-2xl font-bold text-[var(--fg)]">ReelAir</h2>
              <p className="text-[var(--accent)] font-medium">Future oxygen line management concept</p>
              <p className="text-[var(--fg-secondary)] leading-relaxed">
                ReelAir is being developed as a future tubing-management solution for easier movement, cleaner slack control, and less day-to-day frustration with oxygen lines.
              </p>
              <Link href="/contact?type=partner">
                <Button>Request ReelAir Updates <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: MapPin, title: "Go Anywhere", desc: "Concepts designed around real room-to-room movement and daily routines." },
                { icon: Battery, title: "Longer Daily Use", desc: "Mobility thinking that prioritizes practical, all-day usability." },
                { icon: Wind, title: "Lighter Feel", desc: "Product direction focused on reducing drag, clutter, and movement friction." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-start gap-4 hover:border-[var(--accent)] transition-colors">
                  <item.icon className="w-6 h-6 text-[var(--accent)] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-[var(--fg)]">{item.title}</h3>
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
