import Link from "next/link";
import { products, getFullPageProducts } from "@/content/products";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cpu, Shield, Move, Heart, Moon, Home, Activity, Briefcase, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the complete Montgomery Place product ecosystem — intelligent respiratory care and home wellness solutions powered by OxiSureTech.",
};

const iconMap: Record<string, React.ElementType> = {
  Cpu, Shield, Move, Heart, Moon, Home, Activity, Briefcase, Users,
};

export default function ProductsPage() {
  const fullProducts = getFullPageProducts();

  return (
    <>
      {/* Hero */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge>Product Ecosystem</Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fg)] tracking-tight">
              Our <span className="text-[var(--accent)]">Products</span>
            </h1>
            <p className="text-xl text-[var(--fg-secondary)] leading-relaxed">
              Every Montgomery Place product is powered by OxiSureTech — our
              proprietary platform technology that ensures safety, intelligence,
              and seamless integration across your entire home wellness setup.
            </p>
          </div>
        </Container>
      </Section>

      {/* Full Products Grid */}
      <Section variant="muted">
        <Container>
          <h2 className="font-heading text-3xl font-bold text-[var(--fg)] mb-12">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {fullProducts.map((product) => {
              const Icon = iconMap[product.icon] || Cpu;
              return (
                  <Link
                    key={product.slug}
                    href={
                      product.slug === "oxisuretech"
                        ? "https://oxisuretechsolutions.com/"
                        : `/products/${product.slug}`
                    }
                    target={product.slug === "oxisuretech" ? "_blank" : undefined}
                    rel={product.slug === "oxisuretech" ? "noopener noreferrer" : undefined}
                    className="group block"
                  >
                  <div className="h-full rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Image placeholder */}
                    <div
                      className="relative aspect-[16/9] flex items-center justify-center overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${product.color}15, ${product.color}05)` }}
                    >
                      <Icon
                        className="absolute w-20 h-20 opacity-15 z-0"
                        style={{ color: product.color }}
                      />
                      {product.image && (
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="p-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${product.color}15` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: product.color }} />
                        </div>
                        <span className="text-xs uppercase tracking-wider text-[var(--fg-secondary)] font-semibold">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[var(--accent)] font-medium">{product.tagline}</p>
                      <p className="text-sm text-[var(--fg-secondary)] leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-[var(--accent)] group-hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Ecosystem Expansions */}
      <Section>
        <Container>
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">
              Expanding the Ecosystem
            </h2>
            <p className="text-[var(--fg-secondary)] max-w-xl mx-auto">
              We are actively developing new ways to integrate the OxiSureTech ecosystem into every aspect of daily life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Sleep Wellness", icon: Moon, color: "#6366F1", tagline: "Intelligent overnight therapy" },
              { category: "Home Environment", icon: Home, color: "#8B5CF6", tagline: "Total home air intelligence" },
              { category: "Mobility Solutions", icon: Move, color: "#F59E0B", tagline: "Unrestricted active support" },
            ].map((product, i) => {
              const Icon = product.icon;
              return (
                <div
                  key={i}
                  className="relative p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-4 overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-60"
                    style={{ background: `linear-gradient(to right, ${product.color}, ${product.color}80)` }}
                  />
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${product.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: product.color }} />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--fg)]">{product.category}</h3>
                  </div>
                  <p className="text-sm text-[var(--accent)] font-medium">{product.tagline}</p>
                  <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                    Designed to integrate seamlessly with the growing OxiSureTech ecosystem.
                  </p>
                  <Badge variant="outline">In Development</Badge>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
