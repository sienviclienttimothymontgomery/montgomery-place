import Image from "next/image";
import Link from "next/link";
import { Cpu, Shield, Move, Heart, Briefcase, Users, HelpCircle, ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { products } from "@/content/products";
import { createMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Respiratory Comfort Products",
  description:
    "Explore Montgomery Place respiratory comfort products, including OxiSureTech Premium 6-channel kink-resistant oxygen tubing and upcoming home wellness concepts.",
  path: "/products",
  keywords: [
    "respiratory comfort products",
    "kink-resistant oxygen tubing",
    "oxygen tubing for home use",
    "home oxygen therapy tubing",
  ],
});

const iconMap: Record<string, any> = {
  Cpu,
  Shield,
  Move,
  Heart,
  Briefcase,
  Users,
};

function ProductIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent className={className} />;
}

export default function ProductsPage() {
  const availableProducts = products.filter((p) => p.status === "available");
  const developmentProducts = products.filter((p) => p.status === "development");

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
        name: "Products",
        item: absoluteUrl("/products"),
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

      {/* Hero Header */}
      <Section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <div className="mt-8 max-w-3xl space-y-6">
            <Badge>Montgomery Place Portfolio</Badge>
            <h1 className="font-heading text-5xl font-bold tracking-tight text-[var(--fg)] md:text-6xl">
              Respiratory comfort products built for real life
            </h1>
            <p className="text-xl leading-relaxed text-[var(--fg-secondary)]">
              We separate our products into clear categories: what is ready to support you today, 
              and what we are currently engineering for the future of respiratory home care.
            </p>
          </div>
        </Container>
      </Section>

      {/* Available Now Section */}
      <Section variant="muted" className="border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-[#0D1826]">
        <Container>
          <div className="mb-10 space-y-3">
            <Badge variant="default" className="bg-sky-500 hover:bg-sky-600 text-white border-0">Available Now</Badge>
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">
              Commercial Products &amp; Sourcing
            </h2>
            <p className="text-[var(--fg-secondary)] max-w-2xl text-sm md:text-base">
              These products are fully designed, tested, and available for DME sourcing, clinic orders, and individual patient requests.
            </p>
          </div>

          <div className="grid gap-8">
            {availableProducts.map((product) => (
              <article
                key={product.slug}
                className="grid overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] shadow-sm lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="relative border-b border-[var(--border)] lg:border-b-0 lg:border-r min-h-[300px] bg-slate-100 dark:bg-slate-950">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[var(--accent)] bg-sky-50 dark:bg-sky-950/20">
                      <ProductIcon name={product.icon} className="h-16 w-16" />
                    </div>
                  )}
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-sky-500/10 p-3 text-sky-600 dark:text-sky-400">
                        <ProductIcon name={product.icon} className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                        Featured Product
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-bold text-[var(--fg)]">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-lg font-medium text-[var(--accent)]">{product.tagline}</p>
                      <p className="mt-4 text-[var(--fg-secondary)] text-sm md:text-base leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-xs md:text-sm text-[var(--fg-secondary)]"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row pt-6 border-t border-slate-100 dark:border-slate-800">
                    <Link href={`/products/${product.slug}`}>
                      <Button className="rounded-2xl">
                        View Product Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact?type=patient">
                      <Button variant="outline" className="rounded-2xl">Request Product Information</Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* In Development Section */}
      <Section className="border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-[#0B1320]">
        <Container>
          <div className="mb-12 space-y-3">
            <Badge variant="outline" className="border-emerald-500 text-emerald-600 dark:text-emerald-400">In Development</Badge>
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">
              Future Roadmap Concepts
            </h2>
            <p className="text-[var(--fg-secondary)] max-w-2xl text-sm md:text-base">
              These systems are in active prototyping, laboratory validation, or mechanical design. 
              They represent our vision of a connected home respiratory ecosystem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {developmentProducts.map((product) => (
              <article
                key={product.slug}
                className="flex flex-col rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] border-b border-[var(--border)] bg-slate-100 dark:bg-slate-950">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-emerald-600 dark:text-emerald-400 bg-emerald-50/40 dark:bg-emerald-950/10">
                      <ProductIcon name={product.icon} className="h-16 w-16" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 text-[10px] uppercase font-bold tracking-wider">
                      Prototype Stage
                    </Badge>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <ProductIcon name={product.icon} className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <h3 className="font-heading text-xl font-bold text-[var(--fg)]">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-sm font-semibold text-[var(--accent)]">{product.tagline}</p>
                    <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200/50 dark:border-white/5 flex flex-col gap-2">
                    {product.fullPage ? (
                      <Link href={`/products/${product.slug}`} className="w-full">
                        <Button variant="outline" className="w-full rounded-xl text-xs font-semibold py-4">
                          View Concept &amp; Specs
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    ) : (
                      <Link href="/contact?type=partner" className="w-full">
                        <Button variant="outline" className="w-full rounded-xl text-xs font-semibold py-4">
                          Request Future Info
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
