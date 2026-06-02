import Link from "next/link";
import { Cpu, Shield, Wifi, BarChart3, ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { createMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = createMetadata({
  title: "OxiSureTech Platform",
  description:
    "Learn how Montgomery Place describes the OxiSureTech platform context behind its respiratory comfort products, including OxiSureTech Premium Tubing.",
  path: "/technology/oxisuretech",
  keywords: [
    "OxiSureTech platform",
    "respiratory comfort products",
    "oxygen tubing for home use",
  ],
});

const features = [
  {
    icon: Cpu,
    title: "Product-first respiratory design",
    description: "OxiSureTech frames how Montgomery Place thinks about comfort, movement, and easier daily use.",
  },
  {
    icon: Shield,
    title: "Conservative safety language",
    description: "The platform is described with careful claims and clear disclaimers instead of unsupported guarantees.",
  },
  {
    icon: Wifi,
    title: "Cross-device thinking",
    description: "Montgomery Place positions OxiSureTech as a direction for products that work alongside existing oxygen routines.",
  },
  {
    icon: BarChart3,
    title: "Future product planning",
    description: "The platform page supports current product understanding without turning the site into a vague ecosystem pitch.",
  },
];

export default function OxiSureTechPage() {
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
        name: "OxiSureTech",
        item: absoluteUrl("/technology/oxisuretech"),
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "OxiSureTech" }]} />
          <div className="mt-8 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent)]">
              <Cpu className="h-4 w-4" />
              Platform context
            </div>
            <h1 className="font-heading text-5xl font-bold tracking-tight text-[var(--fg)] md:text-6xl">
              OxiSureTech supports clearer product thinking
            </h1>
            <p className="text-xl leading-relaxed text-[var(--fg-secondary)]">
              OxiSureTech is how Montgomery Place describes the broader product direction behind respiratory comfort, mobility, and easier daily oxygen routines. The clearest expression of that work today is OxiSureTech Premium Tubing.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/products/oxisuretech">
                <Button size="lg">
                  Explore OxiSureTech Tubing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact?type=professional">
                <Button variant="outline" size="lg">
                  Professional / Partner Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 shadow-sm"
              >
                <feature.icon className="h-10 w-10 text-[var(--accent)]" />
                <h2 className="mt-6 font-heading text-2xl font-bold text-[var(--fg)]">
                  {feature.title}
                </h2>
                <p className="mt-3 text-[var(--fg-secondary)]">{feature.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
