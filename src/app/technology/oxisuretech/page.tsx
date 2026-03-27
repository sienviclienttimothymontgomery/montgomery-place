import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cpu, Zap, Shield, Wifi, BarChart3, RefreshCw, Lock, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OxiSureTech Technology",
  description: "Discover OxiSureTech — Montgomery Place's proprietary platform technology powering every product in our respiratory care ecosystem.",
};

const capabilities = [
  {
    icon: Zap,
    title: "Adaptive Flow Engine",
    description: "Continuously adjusts oxygen delivery based on environmental conditions, usage patterns, and real-time safety thresholds.",
  },
  {
    icon: Shield,
    title: "Multi-Layer Safety",
    description: "Intelligent monitoring with automatic shutoff protocols, environmental awareness, and predictive fault detection.",
  },
  {
    icon: Wifi,
    title: "Cross-Device Connectivity",
    description: "Seamless interoperability between every Montgomery Place product — unified data, coordinated performance.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Usage insights and wellness data presented in clear, actionable formats for users and caregivers.",
  },
  {
    icon: RefreshCw,
    title: "Over-the-Air Updates",
    description: "Future-ready firmware architecture that improves performance and adds capabilities without hardware changes.",
  },
  {
    icon: Lock,
    title: "Privacy-First Design",
    description: "All data collection follows strict privacy principles with user control over sharing and retention.",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description: "Clean separation of concerns allows rapid development of new products on the same trusted foundation.",
  },
  {
    icon: Cpu,
    title: "Energy Efficient",
    description: "Optimized power management extends battery life for portable products and reduces energy costs at home.",
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
            <Badge>Platform Technology</Badge>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--fg)] tracking-tight leading-[1.1]">
              OxiSureTech
            </h1>
            <p className="text-2xl text-[var(--accent)] font-medium">
              The Foundation of Smarter Respiratory Care
            </p>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
              OxiSureTech is Montgomery Place&apos;s proprietary platform technology
              — the intelligent backbone that powers every product in our
              ecosystem. It combines advanced oxygen delivery optimization,
              real-time monitoring, and adaptive flow management to ensure
              safety, efficiency, and comfort in every breath.
            </p>
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section variant="muted">
        <Container size="md">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl font-bold text-[var(--fg)]">
              A New Approach to Respiratory Technology
            </h2>
            <div className="space-y-4 text-lg text-[var(--fg-secondary)] leading-relaxed">
              <p>
                OxiSureTech represents a fundamental rethinking of how
                respiratory technology should work in the home. Rather than
                treating oxygen delivery as a simple utility, OxiSureTech applies
                intelligent monitoring, adaptive algorithms, and seamless
                connectivity to create a living system that responds to your
                needs in real time.
              </p>
              <p>
                At the heart of OxiSureTech is our proprietary flow optimization
                engine, which continuously adjusts delivery parameters based on
                environmental conditions, usage patterns, and safety thresholds.
                This means you&apos;re always receiving precisely what you need — no
                more, no less.
              </p>
              <p>
                Every product in the Montgomery Place lineup is built on
                OxiSureTech, ensuring consistent quality, interoperability, and a
                unified experience across your entire home wellness setup.
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
              Platform Capabilities
            </h2>
            <p className="text-lg text-[var(--fg-secondary)] max-w-2xl mx-auto">
              Eight core technologies working together to deliver intelligent,
              safe, and seamless respiratory care.
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
