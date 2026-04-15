import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Star, Coffee } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Health Story",
  description: "We use our own products — Montgomery Place team members share their personal experiences with respiratory wellness and OxiSureTech technology.",
};

export default function OurHealthStoryPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge>Personal</Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fg)] tracking-tight">
              We Use <span className="text-[var(--accent)]">Our Own Products</span>
            </h1>
            <p className="text-xl text-[var(--fg-secondary)] leading-relaxed">
              Montgomery Place was built from firsthand experience with the limitations of existing respiratory care. The problem wasn&apos;t just individual devices — it was the lack of a connected system. We experienced this failure, so we built something better.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container size="md">
          <div className="space-y-8">
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">
              Built From Experience
            </h2>
            <div className="space-y-6 text-lg text-[var(--fg-secondary)] leading-relaxed">
              <p>
                Living with traditional respiratory equipment revealed a fundamental truth: devices don&apos;t work together, and home use is entirely different from clinical assumptions. The daily friction of fragmented systems led to a clear realization — building better individual products wasn&apos;t enough; we needed a connected approach.
              </p>
              <p>
                This realization became our turning point. We shifted from frustrated patients to system builders. We created OxiSureTech as the intelligence layer to weave disjointed devices into a cohesive respiratory ecosystem.
              </p>
              <p>
                Today, that firsthand experience is amplified through continuous collaboration. Clinical validation from healthcare professionals and ongoing feedback loops with fellow patients ensure that every decision we make remains fiercely rooted in practical, real-world necessity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Patient Feedback Loops", desc: "Continuous patient insight directly informs system design and usability." },
              { icon: Star, title: "Caregiver Insights", desc: "Real-world observations from daily home care situations drive safety innovations." },
              { icon: Coffee, title: "Clinician Validation", desc: "Professional medical input ensures our connected ecosystem matches clinical rigor." },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-4">
                <item.icon className="w-10 h-10 text-[var(--accent)] mx-auto" />
                <h3 className="font-heading font-bold text-[var(--fg)]">{item.title}</h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="accent">
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">Experience the Difference</h2>
            <p className="text-lg text-[var(--fg-secondary)]">
              Discover products built by people who truly understand what it
              means to live with respiratory wellness needs.
            </p>
            <Link href="/products">
              <Button size="lg">Explore Products <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
