import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Center",
  description: "Explore Montgomery Place's education center — respiratory health resources, wellness tips, and the science behind OxiSureTech technology.",
};

const topics = [
  {
    title: "Understanding Supplemental Oxygen",
    desc: "Learn about the different types of oxygen therapy, when it's prescribed, and how modern technology is making it more accessible.",
    category: "Respiratory Basics",
  },
  {
    title: "Creating a Respiratory-Friendly Home",
    desc: "Practical guidance on optimizing your home environment — from air quality monitoring to humidity management — for better breathing.",
    category: "Home Wellness",
  },
  {
    title: "The Science Behind OxiSureTech",
    desc: "A deeper look at the adaptive algorithms, safety systems, and engineering principles that power our platform technology.",
    category: "Technology",
  },
  {
    title: "Sleep and Respiratory Health",
    desc: "Understanding the connection between breathing quality and sleep quality, and what you can do to improve both.",
    category: "Sleep Health",
  },
  {
    title: "Traveling with Oxygen Therapy",
    desc: "Planning tips, airline regulations, and product recommendations for oxygen therapy users who want to travel confidently.",
    category: "Lifestyle",
  },
  {
    title: "Caring for Someone on Oxygen",
    desc: "Resources and guidance for family members and caregivers of people who use respiratory support products.",
    category: "Caregiving",
  },
];

export default function EducationPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge>
              <BookOpen className="w-3.5 h-3.5 mr-1" />
              Education Center
            </Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fg)] tracking-tight">
              Learn & <span className="text-[var(--accent)]">Understand</span>
            </h1>
            <p className="text-xl text-[var(--fg-secondary)] leading-relaxed">
              Our education center is growing. Explore the topics below to learn
              more about respiratory health, home wellness, and the technology
              behind Montgomery Place products.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:shadow-lg transition-all duration-300 space-y-4 group"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {topic.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                  {topic.desc}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-surface)] text-[var(--accent)] text-xs font-medium">
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)]">
              Want to Stay Updated?
            </h2>
            <p className="text-lg text-[var(--fg-secondary)]">
              Subscribe to our newsletter to be the first to know when new
              educational content is published.
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Us <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
