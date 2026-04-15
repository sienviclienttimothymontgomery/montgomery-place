import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Understanding Supplemental Oxygen Therapy",
    excerpt: "A comprehensive guide to oxygen therapy options, from concentrators to portable systems.",
    category: "Respiratory Health",
    readTime: "5 min read",
  },
  {
    title: "Creating a Respiratory-Friendly Home",
    excerpt: "Practical tips for optimizing your home environment for better breathing and comfort.",
    category: "Home Wellness",
    readTime: "4 min read",
  },
  {
    title: "The Future of Wearable Respiratory Tech",
    excerpt: "How modern technology is making respiratory support more comfortable and less visible.",
    category: "Innovation",
    readTime: "6 min read",
  },
];

export function EducationHub() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-surface)] text-[var(--accent)] text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            Education Hub
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--fg)] tracking-tight">
            Learn, Understand, <span className="text-[var(--accent)]">Breathe Better</span>
          </h2>
          <p className="text-lg text-[var(--fg-secondary)] max-w-2xl mx-auto">
            Explore our growing library of resources on respiratory health, home
            wellness, and the science behind OxiSureTech. Understanding how 
            respiratory systems work together is the first step to better care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:shadow-lg transition-all duration-300 group"
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
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/education">
            <Button variant="outline">
              Visit Education Center
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
