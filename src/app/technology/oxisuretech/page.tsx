"use client";

import { useEffect } from "react";
import { Container, Section } from "@/components/ui/section";

export default function OxiSureTechPage() {
  useEffect(() => {
    window.location.replace("https://oxisuretechsolutions.com/");
  }, []);

  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <Container className="text-center">
        <h1 className="font-heading text-3xl font-bold text-[var(--fg)] mb-4">
          Redirecting to OxiSureTech Platform...
        </h1>
        <p className="text-[var(--fg-secondary)]">
          If you are not redirected automatically, please{" "}
          <a
            href="https://oxisuretechsolutions.com/"
            className="text-[var(--accent)] hover:underline font-medium"
          >
            click here
          </a>
          .
        </p>
      </Container>
    </Section>
  );
}
