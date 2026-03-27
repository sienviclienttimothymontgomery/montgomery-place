import { getLegalPage } from "@/content/legal";
import { notFound } from "next/navigation";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Montgomery Place LLC Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  const page = getLegalPage("privacy");
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
                  <h2
                    key={i}
                    className="font-heading text-2xl font-bold text-[var(--fg)] mt-10 mb-4"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.trim().startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 mb-6">
                    {block.split("\n").map((li, j) => (
                      <li key={j} className="text-[var(--fg-secondary)] leading-relaxed">
                        {li.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.trim().startsWith("**")) {
                return (
                  <p key={i} className="text-[var(--fg)] font-semibold mb-2">
                    {block.replace(/\*\*/g, "")}
                  </p>
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
