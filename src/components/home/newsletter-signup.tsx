"use client";

import { useState } from "react";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      // Silently handle — form still shows success for UX
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <Container size="md">
        <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative space-y-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Stay Connected with Montgomery Place
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Get the latest updates on our products, respiratory wellness tips,
              and exclusive early access to new innovations.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-3 py-4">
                <CheckCircle className="w-6 h-6 text-white" />
                <span className="text-lg font-medium">
                  Thank you for subscribing!
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-white text-[var(--accent)] hover:bg-white/90 shadow-lg whitespace-nowrap"
                >
                  {loading ? "..." : "Subscribe"}
                  <Send className="w-4 h-4 ml-2" />
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
