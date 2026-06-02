import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, AlertTriangle, Shield } from "lucide-react";

const problemPoints = [
  "Standard oxygen tubing can kink or twist during everyday movement.",
  "Extra loops on the floor can add clutter and mobility friction.",
  "Managing tubing around chairs, beds, and walking paths can be frustrating for users and caregivers.",
];

const solutionPoints = [
  "6-channel construction designed to help reduce kinking",
  "A lightweight feel for around-the-home movement",
  "Latex-free construction based on current product copy",
  "General compatibility language for standard oxygen setups",
];

export function OxiSureTechFoundation() {
  return (
    <Section variant="warm">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] p-8 shadow-sm md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FDF3E6] px-4 py-2 text-sm font-semibold text-[#9A5A08]">
              <AlertTriangle className="h-4 w-4" />
              Common home oxygen pain points
            </div>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Clearer product messaging starts with the real problem
            </h2>
            <ul className="mt-6 space-y-4">
              {problemPoints.map((item) => (
                <li key={item} className="flex gap-3 text-[var(--fg-secondary)]">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D97706]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 shadow-[var(--shadow-diffuse)] md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent)]">
              <Shield className="h-4 w-4" />
              OxiSureTech Premium Tubing
            </div>
            <h3 className="mt-5 font-heading text-3xl font-bold tracking-tight text-[var(--fg)]">
              Designed to reduce daily friction without overpromising
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-[var(--fg-secondary)]">
              OxiSureTech Premium Tubing is Montgomery Place&apos;s product-first response to the everyday realities of home oxygen therapy: kinks, tangles, drag, and the effort it takes to keep moving comfortably.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {solutionPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-4 text-sm text-[var(--fg-secondary)]">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-[var(--accent)]" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/products/oxisuretech">
                <Button className="rounded-2xl">
                  View Product Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact?type=patient">
                <Button variant="outline" className="rounded-2xl">
                  Request Information
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[var(--fg-secondary)]">
              This product information is for general informational purposes only and is not medical advice.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
