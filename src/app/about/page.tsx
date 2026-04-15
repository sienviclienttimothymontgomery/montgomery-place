import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Users, Target, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Montgomery Place",
  description: "Learn about Montgomery Place LLC — our mission to transform respiratory care through intelligent, beautifully designed home wellness products.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge>Our Story</Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fg)] tracking-tight">
              About <span className="text-[var(--accent)]">Montgomery Place</span>
            </h1>
            <p className="text-xl text-[var(--fg-secondary)] leading-relaxed">
              Montgomery Place LLC was founded with a simple but ambitious goal:
              to build the intelligent, connected ecosystem that the future of respiratory care will run on.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container size="md">
          <div className="space-y-8">
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">Our Mission</h2>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
              Millions of people depend on supplemental oxygen and respiratory
              support every day. Yet the products available to them are often
              noisy, cumbersome, clinical-looking, and uncomfortable. We believe
              they deserve better.
            </p>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
              Montgomery Place creates an intelligent respiratory ecosystem — integrating
              system awareness and adaptive functionality across existing devices and our own premium hardware. 
              We build platforms that work intelligently to deliver better clinical outcomes 
              with significantly less daily friction. We are building the infrastructure, not just the accessories.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Human First", desc: "Every decision starts with real patient experience and clinical awareness." },
              { icon: Sparkles, title: "Ecosystem Design", desc: "A connected approach that integrates seamlessly with existing respiratory devices." },
              { icon: Target, title: "Engineering Precision", desc: "Rigorous standards prioritizing system reliability, safety, and continuous monitoring." },
              { icon: Users, title: "Collaborative Care", desc: "Built with ongoing input from the patient, caregiver, and professional respiratory community." },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-4">
                <item.icon className="w-10 h-10 text-[var(--accent)] mx-auto" />
                <h3 className="font-heading font-bold text-[var(--fg)]">{item.title}</h3>
                <p className="text-sm text-[var(--fg-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="default">
        <Container size="md">
          <div className="space-y-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">The OxiSureTech Ecosystem</h2>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed max-w-2xl mx-auto">
              We understand that true innovation doesn&apos;t mean replacing everything you already own. 
              The Montgomery Place ecosystem is powered by OxiSureTech — an intelligence layer designed to work with what already exists. 
              By connecting to your current CPAP machine or oxygen delivery system, we enhance performance, safety, and usability. 
              We are not replacing your care; we are elevating it.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="accent">
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="font-heading text-4xl font-bold text-[var(--fg)]">Join Our Journey</h2>
            <p className="text-lg text-[var(--fg-secondary)]">
              We&apos;re always looking for partners, caregivers, and community
              members who share our vision for better respiratory care.
            </p>
            <Link href="/contact">
              <Button size="lg">Get in Touch <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
