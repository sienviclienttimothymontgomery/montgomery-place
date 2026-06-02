import Image from "next/image";
import Link from "next/link";
import { Cpu, ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getFullPageProducts } from "@/content/products";
import { createMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Respiratory Comfort Products",
  description:
    "Explore Montgomery Place respiratory comfort products, including OxiSureTech Premium 6-channel kink-resistant oxygen tubing for home oxygen use.",
  path: "/products",
  keywords: [
    "respiratory comfort products",
    "kink-resistant oxygen tubing",
    "oxygen tubing for home use",
    "home oxygen therapy tubing",
  ],
});

export default function ProductsPage() {
  const fullProducts = getFullPageProducts();
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

      <Section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <div className="mt-8 max-w-3xl space-y-6">
            <Badge>Products</Badge>
            <h1 className="font-heading text-5xl font-bold tracking-tight text-[var(--fg)] md:text-6xl">
              Product information that starts with real oxygen-use friction
            </h1>
            <p className="text-xl leading-relaxed text-[var(--fg-secondary)]">
              Montgomery Place is currently focused on OxiSureTech Premium Tubing, a product designed to help reduce kinks, tangles, and daily mobility frustration in home oxygen routines.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid gap-8">
            {fullProducts.map((product) => (
              <article
                key={product.slug}
                className="grid overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] shadow-sm lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="border-b border-[var(--border)] lg:border-b-0 lg:border-r">
                  <Image
                    src={product.image!}
                    alt={product.name}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[var(--accent-surface)] p-3">
                      <Cpu className="h-6 w-6 text-[var(--accent)]" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      Featured product
                    </span>
                  </div>
                  <h2 className="mt-6 font-heading text-4xl font-bold text-[var(--fg)]">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-lg font-medium text-[var(--accent)]">{product.tagline}</p>
                  <p className="mt-4 text-[var(--fg-secondary)]">{product.description}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-4 text-sm text-[var(--fg-secondary)]">
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link href={`/products/${product.slug}`}>
                      <Button>
                        View Product Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact?type=patient">
                      <Button variant="outline">Request Product Information</Button>
                    </Link>
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
