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
              At Montgomery Place, respiratory wellness isn&apos;t abstract — it&apos;s
              personal. Members of our team use OxiSureTech products in their
              own homes, for their own health. This page shares why that
              matters.
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
                The best products come from people who understand the problem
                firsthand. Several members of the Montgomery Place team live
                with respiratory conditions or care for family members who do.
                This isn&apos;t just a business — it&apos;s a deeply personal mission.
              </p>
              <p>
                When we test a new FlexCannula design, we wear it ourselves for
                days. When we adjust GlowSafe&apos;s notification thresholds, we do it
                in our own living rooms. When we evaluate ReelAir&apos;s retractable
                mechanism, we walk our own hallways.
              </p>
              <p>
                This firsthand experience drives a level of quality and
                thoughtfulness that no amount of market research can replicate.
                We build products we trust enough to use ourselves — and we
                believe you&apos;ll feel the difference.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Real Testing", desc: "Our products are tested in real homes by the people who build them — not just in laboratories." },
              { icon: Star, title: "Genuine Feedback", desc: "Internal users provide honest, unfiltered feedback that shapes every improvement and update." },
              { icon: Coffee, title: "Daily Use", desc: "We don't just test products — we live with them. Every day. That's how we know they're right." },
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
