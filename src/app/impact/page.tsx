import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "See how Montgomery Place is making a difference in respiratory health — improving lives, advancing technology, and building a healthier future.",
};

const stats = [
  { value: "24/7", label: "Continuous Monitoring", desc: "OxiSureTech provides uninterrupted system awareness." },
  { value: "100%", label: "Home Integrated", desc: "Designed specifically for daily living environments." },
  { value: "8+", label: "Ecosystem Nodes", desc: "A connected, expanding approach to respiratory support." },
  { value: "Yr 1", label: "Long-Term Innovation", desc: "An ongoing commitment to improving system behavior." },
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
              At Montgomery Place, impact isn&apos;t an abstract philosophy — it&apos;s about 
              how our system changes real-world respiratory care. It&apos;s about reducing 
              daily friction, adapting to changing environments, and improving how 
              connected devices perform in your home.
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
              { icon: TrendingUp, title: "Advancing Technology", desc: "Our OxiSureTech platform continuously learns, adapts, and improves across connected devices. The entire ecosystem works together to raise the standard of safety and performance." },
              { icon: Globe, title: "Expanding Access", desc: "We reduce the barriers to respiratory care through seamless integration and usability. By simplifying disjointed systems, we make advanced functionality naturally accessible at home." },
              { icon: Users, title: "Supporting Caregivers", desc: "Our connected ecosystem provides caregivers with unprecedented visibility and system awareness. By offering real-time reassurance, we reduce the ambient anxiety of continuous home care." },
              { icon: Heart, title: "Improving Daily Life", desc: "We measure impact by friction reduction. By integrating intelligence across systems — including those already in use — we make daily respiratory care more reliable, comfortable, and intuitive." },
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
