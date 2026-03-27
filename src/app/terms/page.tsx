import { getLegalPage } from "@/content/legal";
import { notFound } from "next/navigation";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Montgomery Place LLC Terms of Service — rules and guidelines for using our website.",
};

export default function TermsPage() {
  const page = getLegalPage("terms");
  if (!page) notFound();

  return (
    <Section className="py-16 md:py-24">
      <Container size="md">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="outline">Legal</Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--fg)]">
              {page.title}
            </h1>
            <p className="text-sm text-[var(--fg-secondary)]">
              Last updated: {page.lastUpdated}
            </p>
          </div>
          <div className="prose max-w-none">
            {page.content.split("\n\n").map((block, i) => {
              if (block.trim().startsWith("## ")) {
                return (
                  <h2 key={i} className="font-heading text-2xl font-bold text-[var(--fg)] mt-10 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-[var(--fg-secondary)] leading-relaxed mb-4">
                  {block}
                </p>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
