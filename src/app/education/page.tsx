import Link from "next/link";
import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { educationArticles } from "@/content/education";
import { createMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Education Center",
  description:
    "Explore practical Montgomery Place education articles about oxygen tubing safety, reducing kinks and tangles, and understanding 6-channel oxygen tubing.",
  path: "/education",
  keywords: [
    "oxygen tubing safety at home",
    "how to keep oxygen tubing from kinking",
    "what is 6-channel oxygen tubing",
    "oxygen therapy home safety",
  ],
});

export default function EducationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Education",
        item: absoluteUrl("/education"),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Education" }]} />
          <div className="mt-8 max-w-3xl space-y-6">
            <Badge>
              <BookOpen className="mr-1 h-3.5 w-3.5" />
              Education Center
            </Badge>
            <h1 className="font-heading text-5xl font-bold tracking-tight text-[var(--fg)] md:text-6xl">
              Helpful guidance for home oxygen users and care teams
            </h1>
            <p className="text-xl leading-relaxed text-[var(--fg-secondary)]">
              Explore plain-language education about oxygen tubing safety at home, reducing kinks and tangles, and understanding 6-channel oxygen tubing. Each article links directly to relevant product information and contact paths.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {educationArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/education/${article.slug}`}
                className="group flex h-full flex-col rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[var(--shadow-diffuse)]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {article.category}
                  </span>
                  <span className="text-xs text-[var(--fg-secondary)]">{article.readTime}</span>
                </div>
                <h2 className="mt-5 font-heading text-2xl font-bold text-[var(--fg)] group-hover:text-[var(--accent)]">
                  {article.title}
                </h2>
                <p className="mt-4 flex-1 text-[var(--fg-secondary)]">{article.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 text-center shadow-sm md:p-12">
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">
              Need product-specific help?
            </h2>
            <p className="mt-4 text-lg text-[var(--fg-secondary)]">
              Review OxiSureTech Premium Tubing details or contact Montgomery Place with a patient, caregiver, professional, or partner inquiry.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/products/oxisuretech">
                <Button size="lg">View Product Details</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Request Information
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
