import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cpu, Zap, Shield, Wifi, BarChart3, RefreshCw, Lock, Layers, Heart, Move } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OxiSureTech Technology",
  description: "Discover OxiSureTech — Montgomery Place's proprietary platform technology powering every product in our respiratory care ecosystem.",
};

const capabilities = [
  {
    icon: RefreshCw,
    title: "Tangle-Free Mobility",
    description: "Stays smooth and untwisted during movement. Perfect for daily use or overnight comfort.",
  },
  {
    icon: Layers,
    title: "Universal Compatibility",
    description: "Fits most oxygen concentrators and regulators with a secure, leak-free connection.",
  },
  {
    icon: Zap,
    title: "Consistent Oxygen Flow",
    description: "Engineered for steady, uninterrupted airflow — every breath, every time.",
  },
  {
    icon: Heart,
    title: "Soft-to-Skin Touch",
    description: "Gentle and latex-free material that minimizes friction and pressure on delicate skin.",
  },
  {
    icon: Shield,
    title: "Kink-Resistant Engineering",
    description: "Internal 6-channel spiral design prevents pinching or blockage, keeping oxygen flowing freely.",
  },
  {
    icon: Move,
    title: "Durable Yet Lightweight",
    description: "Strong, flexible medical-grade PVC that’s easy to manage and built to last through daily active use.",
  },
];

export default function OxiSureTechPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-surface)] via-[var(--bg)] to-[var(--bg)] opacity-60" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--accent)] rounded-full opacity-5 blur-3xl" />
        <Container className="relative">
          <div className="max-w-3xl space-y-8">
            <Badge>Core Foundation</Badge>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--fg)] tracking-tight leading-[1.1]">
              OxiSureTech
            </h1>
            <p className="text-2xl text-[var(--accent)] font-medium">
              Breathing Made Better.
            </p>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
              Experience uninterrupted oxygen flow with our premium kink-resistant oxygen tubing. Engineered for comfort and reliability, our tubing features advanced materials that prevent kinking and ensure consistent oxygen delivery. Perfect for active lifestyles and everyday use.
            </p>
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section variant="muted">
        <Container size="md">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl font-bold text-[var(--fg)]">
              Our Mission
            </h2>
            <div className="space-y-4 text-lg text-[var(--fg-secondary)] leading-relaxed">
              <p>
                OxiSure Tech was founded with one goal: to bring reliable oxygen solutions that improve quality of life. We combine innovation, precision, and compassion to ensure that every breath you take is supported by care you can trust.
              </p>
              <p>
                Whether you need short tubing for bedside comfort or extended lengths for full-home mobility, our six-channel reinforced design helps maintain steady oxygen flow even when the tubing bends during everyday movement.
              </p>
              <p>
                Every product in the Montgomery Place lineup is designed to integrate seamlessly with OxiSureTech Premium Tubing, ensuring a flawless, tangle-free oxygen delivery experience.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities Grid */}
      <Section>
        <Container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl font-bold text-[var(--fg)]">
              Engineered for Real Life
            </h2>
            <p className="text-lg text-[var(--fg-secondary)] max-w-2xl mx-auto">
              Six core features designed to deliver safe, consistent, and comfortable respiratory care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors group"
              >
                <cap.icon className="w-8 h-8 text-[var(--accent)] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-[var(--fg)] mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="accent">
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="font-heading text-4xl font-bold text-[var(--fg)]">
              See OxiSureTech in Action
            </h2>
            <p className="text-lg text-[var(--fg-secondary)]">
              Explore the products built on our platform and discover how
              OxiSureTech is transforming respiratory care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products">
                <Button size="lg">
                  View Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
