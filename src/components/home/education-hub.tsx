import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { educationArticles } from "@/content/education";

export function EducationHub() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-surface)] px-3 py-1.5 text-sm font-medium text-[var(--accent)]">
            <BookOpen className="h-4 w-4" />
            Education Hub
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--fg)] tracking-tight">
            Helpful guidance for home oxygen routines
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--fg-secondary)]">
            Practical articles for oxygen users, caregivers, professionals, and partners, with plain-language answers and direct links back to product information.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {educationArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/education/${article.slug}`}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {article.category}
                  </span>
                  <span className="text-xs text-[var(--fg-secondary)]">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/education">
            <Button variant="outline">
              Visit Education Center
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
