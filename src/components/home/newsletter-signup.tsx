"use client";

import { useState } from "react";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        setEmail("");
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <Container size="md">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] p-12 text-white md:p-16">
          <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5" />

          <div className="relative space-y-6 text-center">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Join Product Updates from Montgomery Place
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/80">
              Get the latest updates on respiratory comfort products, education, and future Montgomery Place announcements.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-3 py-4">
                <CheckCircle className="h-6 w-6 text-white" />
                <span className="text-lg font-medium">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col items-center gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/15 px-5 py-3.5 text-white placeholder:text-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full whitespace-nowrap bg-white text-[var(--accent)] hover:bg-white/90 sm:w-auto"
                >
                  {loading ? "..." : "Subscribe"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}

            <p className="text-xs text-white/50">
              No spam, ever. Unsubscribe anytime. Read our{" "}
              <a href="/privacy" className="underline hover:text-white/70">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
