import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct, getFullPageProducts } from "@/content/products";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, Cpu, Shield, Move, Heart } from "lucide-react";
import type { Metadata } from "next";

const iconMap: Record<string, React.ElementType> = {
  Cpu, Shield, Move, Heart,
};

export async function generateStaticParams() {
  return getFullPageProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product || !product.fullPage) {
    notFound();
  }

  const Icon = iconMap[product.icon] || Cpu;
  const otherProducts = getFullPageProducts().filter(
    (p) => p.slug !== product.slug
  );

  return (
    <>
      {/* Hero */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm text-[var(--fg-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Products
                </Link>
                <Badge>{product.category}</Badge>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fg)] tracking-tight">
                {product.name}
              </h1>
              <p
                className="text-2xl font-medium"
                style={{ color: product.color }}
              >
                {product.tagline}
              </p>
              <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
                {product.description}
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Product visual */}
            <div className="flex flex-col gap-4">
              {product.gallery ? (
                <div className="aspect-square rounded-3xl overflow-hidden relative bg-[var(--bg-elevated)] border border-[var(--border)]">
                  <img src={product.gallery[0]} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ) : product.image ? (
                <div className="aspect-square rounded-3xl overflow-hidden relative bg-[var(--bg-elevated)] border border-[var(--border)]">
                  <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ) : (
                <div
                  className="aspect-square rounded-3xl flex items-center justify-center border border-[var(--border)]"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}15, ${product.color}05)`,
                  }}
                >
                  <Icon
                    className="w-40 h-40 opacity-15"
                    style={{ color: product.color }}
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Long Description */}
      {product.longDescription && (
        <Section variant="muted">
          <Container size="md">
            <div className="prose prose-lg max-w-none">
              {product.longDescription.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[var(--fg-secondary)] leading-relaxed mb-6 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Features */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl font-bold text-[var(--fg)]">
              Key Features
            </h2>
            <p className="text-[var(--fg-secondary)] max-w-xl mx-auto">
              Built on OxiSureTech for intelligent, safe, and seamless
              performance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {product.features.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors group"
              >
                <CheckCircle
                  className="w-6 h-6 mb-4"
                  style={{ color: product.color }}
                />
                <p className="font-medium text-[var(--fg)] text-sm">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* OxiSureTech Connection */}
      <Section variant="accent">
        <Container size="md">
          <div className="text-center space-y-6">
            <Cpu className="w-12 h-12 text-[var(--accent)] mx-auto" />
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">
              Powered by OxiSureTech
            </h2>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
              {product.name} is built on our OxiSureTech platform, ensuring
              intelligent operation, real-time safety monitoring, and seamless
              integration with every other product in the Montgomery Place
              ecosystem.
            </p>
            <Link href="/technology/oxisuretech">
              <Button variant="outline">
                Learn About OxiSureTech
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Related Products */}
      <Section>
        <Container>
          <h2 className="font-heading text-3xl font-bold text-[var(--fg)] mb-12 text-center">
            Explore More Products
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {otherProducts.map((p) => {
              const PIcon = iconMap[p.icon] || Cpu;
              return (
                <Link key={p.slug} href={`/products/${p.slug}`} className="group">
                  <div className="p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 text-center space-y-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${p.color}15` }}
                    >
                      <PIcon className="w-7 h-7" style={{ color: p.color }} />
                    </div>
                    <h3 className="font-heading font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-[var(--fg-secondary)]">
                      {p.tagline}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
