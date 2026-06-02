"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, CheckCircle, Mail, MapPin, HeartHandshake, Stethoscope, Briefcase, MessageSquare } from "lucide-react";

const inquiryOptions = [
  {
    value: "patient",
    label: "Patient / Caregiver",
    helper: "Questions about product information, comfort, and home oxygen routines.",
    icon: HeartHandshake,
  },
  {
    value: "professional",
    label: "Healthcare Professional",
    helper: "Clinical teams, respiratory therapists, and care professionals.",
    icon: Stethoscope,
  },
  {
    value: "partner",
    label: "DME / Distributor / Partner",
    helper: "Distribution, sourcing, or broader product partnership conversations.",
    icon: Briefcase,
  },
  {
    value: "general",
    label: "General Inquiry",
    helper: "Anything else you would like to ask Montgomery Place.",
    icon: MessageSquare,
  },
] as const;

export function ContactPageClient({ initialType }: { initialType?: string }) {
  const normalizedType = inquiryOptions.some((option) => option.value === initialType)
    ? initialType!
    : "patient";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: normalizedType,
    subject: "",
    message: "",
  });

  const activeOption =
    inquiryOptions.find((option) => option.value === form.inquiryType) ?? inquiryOptions[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setError("We could not send your message right now. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("We could not send your message right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge>Contact Montgomery Place</Badge>
              <h1 className="font-heading text-5xl font-bold tracking-tight text-[var(--fg)] md:text-6xl">
                Clear next steps for every inquiry
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[var(--fg-secondary)]">
                Reach out as a patient, caregiver, healthcare professional, distributor, or partner. We use your information only to respond to your inquiry. Do not submit urgent medical questions through this form.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {inquiryOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setForm((current) => ({ ...current, inquiryType: option.value }))}
                  className={`rounded-2xl border p-4 text-left ${
                    form.inquiryType === option.value
                      ? "border-[var(--accent)] bg-[var(--accent-surface)]"
                      : "border-[var(--border)] bg-[var(--bg-elevated)]"
                  }`}
                >
                  <option.icon className="h-5 w-5 text-[var(--accent)]" />
                  <p className="mt-3 text-sm font-bold text-[var(--fg)]">{option.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--fg-secondary)]">
                    {option.helper}
                  </p>
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="rounded-[2rem] bg-[var(--accent-surface)] p-10 text-center">
                <CheckCircle className="mx-auto h-16 w-16 text-[var(--accent)]" />
                <h2 className="mt-5 font-heading text-2xl font-bold text-[var(--fg)]">
                  Inquiry received
                </h2>
                <p className="mt-3 text-[var(--fg-secondary)]">
                  Thanks for reaching out. We&apos;ll respond as soon as we can.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 shadow-sm">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-4 text-sm text-[var(--fg-secondary)]">
                  <p className="font-semibold text-[var(--fg)]">{activeOption.label}</p>
                  <p className="mt-1">{activeOption.helper}</p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    id="name"
                    label="Full name *"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <Input
                    id="email"
                    label="Email address *"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    id="phone"
                    label="Phone (optional)"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-[var(--fg)]">
                      Inquiry type *
                    </label>
                    <select
                      id="inquiryType"
                      value={form.inquiryType}
                      onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                      className="flex h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    >
                      {inquiryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Input
                  id="subject"
                  label="Subject *"
                  placeholder="How can we help?"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />

                <Textarea
                  id="message"
                  label="Message *"
                  placeholder="Share the product question, use case, or partnership need you have in mind."
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />

                <p className="text-sm text-[var(--fg-secondary)]">
                  We use your information only to respond to your inquiry. Do not send urgent medical questions through this form.
                </p>

                {error ? <p className="text-sm text-red-600">{error}</p> : null}

                <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto rounded-2xl">
                  {loading ? "Sending..." : "Send Request"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>

          <aside className="space-y-6 lg:pt-12">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[var(--fg)]">
                Quick contact paths
              </h2>
              <div className="mt-6 space-y-4">
                <Link href="/products/oxisuretech" className="block rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 hover:border-[var(--accent)]">
                  <p className="font-semibold text-[var(--fg)]">Request Product Information</p>
                  <p className="mt-2 text-sm text-[var(--fg-secondary)]">
                    Review OxiSureTech benefits, specs, FAQs, and safety guidance first.
                  </p>
                </Link>
                <Link href="/contact?type=partner" className="block rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 hover:border-[var(--accent)]">
                  <p className="font-semibold text-[var(--fg)]">Professional / Partner Inquiry</p>
                  <p className="mt-2 text-sm text-[var(--fg-secondary)]">
                    Start a conversation about clinical audiences, DME interest, or distribution planning.
                  </p>
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-[var(--fg)]">
                Other ways to reach us
              </h2>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-[var(--accent)]" />
                  <div>
                    <p className="font-medium text-[var(--fg)]">Email</p>
                    <a href="mailto:marketplace@montgomeryplacellc.com" className="text-sm text-[var(--accent)] hover:underline">
                      marketplace@montgomeryplacellc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-[var(--accent)]" />
                  <div>
                    <p className="font-medium text-[var(--fg)]">Location</p>
                    <p className="text-sm text-[var(--fg-secondary)]">United States</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
