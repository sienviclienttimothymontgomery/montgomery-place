import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, FileText, Link2 } from "lucide-react";

const trustPoints = [
  {
    title: "Conservative product language",
    description:
      "We describe products in terms like designed to, helps reduce, and intended to support, without inventing outcomes or approvals.",
    icon: ShieldCheck,
  },
  {
    title: "Helpful education",
    description:
      "Published education pages now answer real questions about oxygen tubing kinks, tangles, home safety, and 6-channel design.",
    icon: FileText,
  },
  {
    title: "Stronger internal paths",
    description:
      "Key calls to action connect homepage, product, education, and contact flows so users are not left at dead ends.",
    icon: Link2,
  },
];

export function TeaserSections() {
  return (
    <Section variant="cool">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Badge variant="outline">Trust &amp; Clarity</Badge>
            <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-[var(--fg)] md:text-5xl">
              Stronger trust signals for a medical-adjacent product site
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--fg-secondary)]">
              Montgomery Place is focused on clearer product information, accessible design, and safer user journeys for respiratory-care visitors. That means fewer vague promises and more concrete next steps.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/education">
                <Button className="rounded-2xl">
                  Explore Education
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/medical-disclaimer">
                <Button variant="outline" className="rounded-2xl">
                  Read Medical Disclaimer
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            {trustPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-sm"
              >
                <item.icon className="h-8 w-8 text-[var(--accent)]" />
                <h3 className="mt-4 font-heading text-xl font-bold text-[var(--fg)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[var(--fg-secondary)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
