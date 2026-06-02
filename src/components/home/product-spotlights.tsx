import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, HeartHandshake, Stethoscope } from "lucide-react";

const audienceCards = [
  {
    title: "Patients & Caregivers",
    description:
      "Get practical product information about oxygen tubing for home use, comfort, and room-to-room mobility.",
    href: "/contact?type=patient",
    cta: "Request Product Info",
    icon: HeartHandshake,
  },
  {
    title: "Healthcare Professionals",
    description:
      "Review product details, FAQs, and educational resources that support informed respiratory-care conversations.",
    href: "/contact?type=professional",
    cta: "Professional Inquiry",
    icon: Stethoscope,
  },
  {
    title: "DME / Distribution Partners",
    description:
      "Connect with Montgomery Place about product information, availability planning, and future partner conversations.",
    href: "/contact?type=partner",
    cta: "Partner Inquiry",
    icon: Briefcase,
  },
];

export function ProductSpotlights() {
  return (
    <Section>
      <Container>
        <div className="text-center space-y-4">
          <Badge>Choose Your Path</Badge>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-[var(--fg)] md:text-5xl">
            Built for the people who have to live with the details
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[var(--fg-secondary)]">
            Whether you are managing oxygen use at home, supporting a patient, or evaluating product options professionally, the next step should be obvious and easy to reach.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {audienceCards.map((card) => (
            <Link key={card.title} href={card.href} className="group block">
              <article className="flex h-full flex-col rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[var(--shadow-diffuse)]">
                <card.icon className="h-10 w-10 text-[var(--accent)]" />
                <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--fg)] group-hover:text-[var(--accent)]">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-[var(--fg-secondary)]">
                  {card.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                  {card.cta}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/products/oxisuretech">
            <Button variant="outline" className="rounded-2xl">
              Review OxiSureTech Specs &amp; FAQs
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
