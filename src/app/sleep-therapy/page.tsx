import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Moon, Volume2, BarChart3, Cloud } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Therapy",
  description: "Discover Montgomery Place sleep therapy solutions — whisper-quiet, intelligent oxygen delivery designed for restful, uninterrupted sleep.",
};

export default function SleepTherapyPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge>Sleep Solutions</Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fg)] tracking-tight">
              Sleep <span className="text-[var(--accent)]">Therapy</span>
            </h1>
            <p className="text-xl text-[var(--fg-secondary)] leading-relaxed">
              Better breathing leads to better sleep. Montgomery Place sleep
              therapy solutions are designed for whisper-quiet operation,
              intelligent flow adjustment, and all-night comfort.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Moon, title: "Optimized for Night", desc: "Smart algorithms adjust delivery patterns for peaceful, uninterrupted rest." },
              { icon: Volume2, title: "Whisper-Quiet", desc: "Operating noise levels designed to be inaudible from typical sleeping distance." },
              { icon: BarChart3, title: "Sleep Insights", desc: "Morning wellness reports help you understand and improve your sleep quality." },
              { icon: Cloud, title: "CPAP Compatible", desc: "Seamless integration with existing CPAP systems and respiratory equipment." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)] space-y-4 hover:border-[var(--accent)] transition-colors">
                <item.icon className="w-8 h-8 text-[var(--accent)]" />
                <h3 className="font-heading font-semibold text-[var(--fg)]">{item.title}</h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="font-heading text-4xl font-bold text-[var(--fg)]">
              SleepFlow Is Coming Soon
            </h2>
            <p className="text-lg text-[var(--fg-secondary)]">
              Our dedicated overnight oxygen therapy system is in active
              development. SleepFlow will combine OxiSureTech intelligence with
              purpose-built nighttime design.
            </p>
            <Link href="/contact">
              <Button size="lg">Stay Updated <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
