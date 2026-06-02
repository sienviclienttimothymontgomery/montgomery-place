import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { getProduct, getFullPageProducts } from "@/content/products";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { absoluteUrl, createMetadata } from "@/lib/seo";

const oxiFaqs = [
  {
    question: "What is 6-channel oxygen tubing?",
    answer:
      "It refers to a multi-channel tubing design intended to support flexibility and help reduce everyday kinking during home oxygen use.",
  },
  {
    question: "Is this tubing kink-proof or kink-resistant?",
    answer:
      "It is more accurate to describe OxiSureTech Premium Tubing as kink-resistant rather than kink-proof.",
  },
  {
    question: "Is it compatible with standard oxygen concentrators?",
    answer:
      "Montgomery Place positions the tubing as designed for standard oxygen therapy setups. Always confirm fit and use according to product labeling and provider guidance.",
  },
  {
    question: "Is it latex-free?",
    answer: "Yes. Current product copy describes OxiSureTech Premium Tubing as latex-free.",
  },
  {
    question: "What lengths are available?",
    answer:
      "Length details are not yet published on this site. Contact Montgomery Place for current product information.",
  },
  {
    question: "How often should oxygen tubing be replaced?",
    answer:
      "Replacement timing depends on provider guidance, product labeling, wear, and the specifics of the user's setup.",
  },
  {
    question: "Can this replace medical advice from my provider?",
    answer:
      "No. This page is for general informational purposes only and is not medical advice.",
  },
  {
    question: "How can professionals or distributors request product information?",
    answer:
      "Use the contact form and choose Healthcare Professional or DME / Distributor / Partner so the inquiry is routed clearly.",
  },
];

const specs = [
  ["Product type", "Premium oxygen tubing"],
  ["Channel design", "6-channel"],
  ["Material", "Product details available on request"],
  ["Latex-free", "Yes"],
  ["Connector compatibility", "Designed for standard oxygen therapy setups"],
  ["Available lengths", "Contact Montgomery Place for current information"],
  ["Intended use", "General home oxygen therapy routines"],
  ["Care / replacement guidance", "Follow provider instructions and product labeling"],
];

const useCases = [
  "Bedroom setups where tubing often twists during sleep or repositioning",
  "Living-room routines with recliners, chairs, or furniture corners",
  "Around-the-home walking paths where drag and slack become frustrating",
  "Caregiver-managed home oxygen setups that benefit from clearer tubing handling",
];

const comparisonRows = [
  ["Line management", "Often depends heavily on setup and can twist easily", "Designed to help reduce kinking and daily friction"],
  ["Mobility around the home", "May drag, catch, or gather loops more easily", "Designed to support smoother everyday movement"],
  ["Material communication", "Varies by product", "Current product copy states latex-free"],
  ["Product positioning", "General oxygen delivery tubing", "Respiratory comfort product for home oxygen routines"],
];

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

  return createMetadata({
    title: "OxiSureTech Premium 6-Channel Kink-Resistant Oxygen Tubing",
    description: product.description,
    path: `/products/${product.slug}`,
    keywords: [
      "kink-resistant oxygen tubing",
      "oxygen tubing for home use",
      "oxygen tubing for oxygen concentrators",
      "6-channel oxygen tubing",
      "latex-free oxygen tubing",
      "tangle-resistant oxygen tubing",
    ],
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product || !product.fullPage || product.hidden) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "OxiSureTech Premium 6-Channel Kink-Resistant Oxygen Tubing",
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Montgomery Place",
    },
    category: "Respiratory comfort products",
    image: product.gallery?.map((image) => absoluteUrl(image)),
    url: absoluteUrl(`/products/${product.slug}`),
    material: "Contact Montgomery Place for current product details",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: oxiFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: absoluteUrl(`/products/${product.slug}`),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                OxiSureTech Product
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--fg)] md:text-5xl lg:text-6xl">
                OxiSureTech Premium 6-Channel Kink-Resistant Oxygen Tubing
              </h1>
              <p className="text-xl leading-relaxed text-[var(--fg-secondary)]">
                Premium oxygen tubing designed to help reduce kinks, support smoother movement around the home, and make daily oxygen use more comfortable.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?type=patient">
                  <Button size="lg">Request Product Info</Button>
                </Link>
                <Link href="#specs">
                  <Button variant="outline" size="lg">
                    View Specs
                  </Button>
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--accent)]" />
                    <span className="text-sm text-[var(--fg-secondary)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-diffuse)]">
                <Image
                  src={product.gallery?.[0] ?? product.image!}
                  alt="OxiSureTech Premium oxygen tubing product image"
                  width={1200}
                  height={1200}
                  priority
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {(product.gallery ?? []).slice(1).map((image) => (
                  <div key={image} className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg-elevated)]">
                    <Image
                      src={image}
                      alt="OxiSureTech Premium tubing detail view"
                      width={700}
                      height={700}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] p-8 shadow-sm">
              <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">Key benefits</h2>
              <ul className="mt-6 space-y-4 text-[var(--fg-secondary)]">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>Helps reduce kinking during everyday home movement.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>Supports easier movement around the home with a lighter, more manageable feel.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>Latex-free construction based on current product information.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>Designed for standard oxygen therapy setups where appropriate.</span>
                </li>
              </ul>
            </article>

            <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] p-8 shadow-sm">
              <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">Use cases</h2>
              <ul className="mt-6 space-y-4 text-[var(--fg-secondary)]">
                {useCases.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section id="specs">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 shadow-sm">
              <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">Product specs</h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)]">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {specs.map(([label, value]) => (
                      <tr key={label} className="border-b border-[var(--border)] last:border-b-0">
                        <th className="w-[38%] bg-[var(--bg)] px-4 py-3 font-semibold text-[var(--fg)]">
                          {label}
                        </th>
                        <td className="px-4 py-3 text-[var(--fg-secondary)]">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 shadow-sm">
              <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">Comparison at a glance</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="px-4 py-3 font-semibold text-[var(--fg)]">Factor</th>
                      <th className="px-4 py-3 font-semibold text-[var(--fg)]">Standard tubing</th>
                      <th className="px-4 py-3 font-semibold text-[var(--fg)]">OxiSureTech Premium Tubing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([factor, standard, oxi]) => (
                      <tr key={factor} className="border-b border-[var(--border)] last:border-b-0">
                        <th className="px-4 py-4 font-medium text-[var(--fg)]">{factor}</th>
                        <td className="px-4 py-4 text-[var(--fg-secondary)]">{standard}</td>
                        <td className="px-4 py-4 text-[var(--fg-secondary)]">{oxi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <Section variant="cool">
        <Container size="md">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Cpu className="h-8 w-8 text-[var(--accent)]" />
              <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">Powered by OxiSureTech</h2>
            </div>
            <p className="mt-4 text-lg text-[var(--fg-secondary)]">
              OxiSureTech is Montgomery Place&apos;s product platform direction for respiratory comfort, mobility, and practical home use. Learn more about the platform context or go directly to contact for product questions.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link href="/technology/oxisuretech">
                <Button variant="outline">Learn About OxiSureTech</Button>
              </Link>
              <Link href="/contact?type=professional">
                <Button>Professional / Partner Inquiry</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 shadow-sm">
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {oxiFaqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
                  <h3 className="font-heading text-xl font-semibold text-[var(--fg)]">{faq.question}</h3>
                  <p className="mt-3 text-[var(--fg-secondary)]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] bg-[var(--accent-surface)] p-8">
            <p className="font-semibold text-[var(--fg)]">Medical disclaimer</p>
            <p className="mt-3 text-[var(--fg-secondary)]">
              This product information is for general informational purposes only and is not medical advice. Use oxygen therapy equipment according to your healthcare provider&apos;s instructions and applicable product labeling.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact?type=patient">
              <Button size="lg">
                Request Product Info
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/education/how-to-keep-oxygen-tubing-from-kinking">
              <Button variant="outline" size="lg">
                Read Oxygen Tubing Guide
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
