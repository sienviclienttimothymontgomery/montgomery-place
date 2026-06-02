import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { educationArticles, getEducationArticle } from "@/content/education";
import { absoluteUrl, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return educationArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getEducationArticle(slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/education/${article.slug}`,
    keywords: article.keywords,
  });
}

export default async function EducationArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getEducationArticle(slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: "Montgomery Place",
    },
    publisher: {
      "@type": "Organization",
      name: "Montgomery Place",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo-symbol.jpg"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/education/${article.slug}`),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
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
        name: "Education",
        item: absoluteUrl("/education"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: absoluteUrl(`/education/${article.slug}`),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
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
        <Container size="md">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Education", href: "/education" },
              { label: article.title },
            ]}
          />
          <div className="mt-8 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              {article.category}
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--fg)] md:text-5xl">
              {article.title}
            </h1>
            <p className="text-lg leading-relaxed text-[var(--fg-secondary)]">
              {article.description}
            </p>
            <p className="text-sm text-[var(--fg-secondary)]">
              Published {article.publishedAt} | Updated {article.updatedAt} | {article.readTime}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container size="md">
          <div className="space-y-10">
            {article.sections.map((section) => (
              <article key={section.heading} className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-[var(--fg)]">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[var(--fg-secondary)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list ? (
                  <ul className="mt-5 space-y-3 text-[var(--fg-secondary)]">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 shadow-sm">
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-4">
              {article.faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
                  <h3 className="font-heading text-xl font-semibold text-[var(--fg)]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-[var(--fg-secondary)]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] bg-[var(--accent-surface)] p-8">
            <p className="font-semibold text-[var(--fg)]">Medical disclaimer</p>
            <p className="mt-3 text-[var(--fg-secondary)]">
              This article is for general informational purposes only and is not medical advice. Use oxygen therapy equipment according to your healthcare provider&apos;s instructions and applicable product labeling.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/products/oxisuretech">
              <Button size="lg">View OxiSureTech Product Details</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Montgomery Place
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
