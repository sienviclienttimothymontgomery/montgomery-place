import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "See how Montgomery Place is making a difference in respiratory health — improving lives, advancing technology, and building a healthier future.",
};

const stats = [
  { value: "24/7", label: "Intelligent Monitoring", desc: "OxiSureTech never stops working to keep you safe." },
  { value: "100%", label: "Home Integrated", desc: "Products designed to blend into your living space." },
  { value: "8+", label: "Product Lines", desc: "A growing ecosystem of wellness solutions." },
  { value: "∞", label: "Commitment", desc: "An endless drive to improve respiratory care." },
];

export default function ImpactPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge>Our Impact</Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fg)] tracking-tight">
              Making a <span className="text-[var(--accent)]">Difference</span>
            </h1>
            <p className="text-xl text-[var(--fg-secondary)] leading-relaxed">
              At Montgomery Place, impact isn&apos;t just about numbers — it&apos;s about
              the daily moments when our products make breathing easier, living
              more comfortable, and wellness more accessible.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-[var(--bg)] border border-[var(--border)] space-y-3">
                <div className="text-4xl font-bold text-[var(--accent)] font-heading">{stat.value}</div>
                <h3 className="font-heading font-semibold text-[var(--fg)]">{stat.label}</h3>
                <p className="text-sm text-[var(--fg-secondary)]">{stat.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, title: "Advancing Technology", desc: "Our OxiSureTech platform continues to evolve, bringing new capabilities and intelligence to every product in our ecosystem. Each update makes the entire system smarter and safer." },
              { icon: Globe, title: "Expanding Access", desc: "We're committed to making premium respiratory care accessible to more people. Our products are designed to be approachable and intuitive, removing barriers to better breathing." },
              { icon: Users, title: "Supporting Caregivers", desc: "Montgomery Place products aren't just for patients — they're designed to give caregivers peace of mind through connected monitoring, clear status indicators, and reliable operation." },
              { icon: Heart, title: "Improving Daily Life", desc: "Every feature, every design choice, every technical decision is measured against one question: does this make someone's daily life genuinely better?" },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-4">
                <item.icon className="w-10 h-10 text-[var(--accent)]" />
                <h3 className="font-heading text-xl font-bold text-[var(--fg)]">{item.title}</h3>
                <p className="text-[var(--fg-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
