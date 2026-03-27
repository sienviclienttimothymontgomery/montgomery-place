import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Lightbulb, Beaker, Target, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Respiratory Innovation",
  description: "Discover how Montgomery Place is advancing respiratory care through intelligent design, adaptive technology, and human-centered innovation.",
};

export default function InnovationPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge>Innovation</Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fg)] tracking-tight">
              Respiratory <span className="text-[var(--accent)]">Innovation</span>
            </h1>
            <p className="text-xl text-[var(--fg-secondary)] leading-relaxed">
              At Montgomery Place, we believe that respiratory care deserves the
              same level of thoughtful design, intelligent engineering, and
              premium quality that people expect from the best consumer
              technology.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { icon: Lightbulb, title: "Design-First Thinking", desc: "Every Montgomery Place product starts with a question: how can we make this feel less like medical equipment and more like a natural part of daily life? Our design process prioritizes aesthetics, comfort, and seamless home integration alongside clinical effectiveness." },
              { icon: Beaker, title: "Intelligent Technology", desc: "OxiSureTech isn't just a brand name — it's a sophisticated platform of adaptive algorithms, real-time monitoring, and predictive safety systems that work continuously to optimize your experience." },
              { icon: Target, title: "Precision Engineering", desc: "From the micro-textured prongs of FlexCannula to the retractable mechanism in ReelAir, every component is engineered to exacting standards for durability, performance, and comfort." },
              { icon: Heart, title: "Human-Centered Care", desc: "We develop our products in partnership with the people who use them. Real-world feedback drives every improvement, ensuring our innovations solve actual problems, not theoretical ones." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[var(--bg)] border border-[var(--border)] space-y-4">
                <item.icon className="w-10 h-10 text-[var(--accent)]" />
                <h3 className="font-heading text-2xl font-bold text-[var(--fg)]">{item.title}</h3>
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
              The Future of Respiratory Care
            </h2>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
              We&apos;re just getting started. With OxiSureTech as our foundation,
              Montgomery Place is developing the next generation of home
              wellness products — each one designed to make breathing therapy
              invisible, intuitive, and genuinely comfortable.
            </p>
            <Link href="/products">
              <Button size="lg">View Our Products <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
