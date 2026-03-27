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
              to transform respiratory care from a clinical burden into a
              seamless part of healthy living.
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
              Montgomery Place creates respiratory health and home wellness
              products that people are proud to use — products that integrate
              naturally into homes and lifestyles, that feel premium and
              thoughtful, and that work intelligently to deliver better outcomes
              with less friction.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Human First", desc: "Every decision starts with the people who use our products." },
              { icon: Sparkles, title: "Design Excellence", desc: "Premium aesthetics that integrate beautifully into homes." },
              { icon: Target, title: "Precision", desc: "Engineering standards that prioritize safety and comfort." },
              { icon: Users, title: "Community", desc: "Built with and for the respiratory care community." },
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
