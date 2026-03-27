"use client";

import { useState } from "react";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge>Get in Touch</Badge>
                <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fg)] tracking-tight">
                  Contact <span className="text-[var(--accent)]">Us</span>
                </h1>
                <p className="text-lg text-[var(--fg-secondary)]">
                  Have questions about our products, technology, or partnerships?
                  We&apos;d love to hear from you.
                </p>
              </div>

              {submitted ? (
                <div className="p-12 rounded-2xl bg-[var(--accent-surface)] text-center space-y-4">
                  <CheckCircle className="w-16 h-16 text-[var(--accent)] mx-auto" />
                  <h2 className="font-heading text-2xl font-bold text-[var(--fg)]">
                    Message Sent!
                  </h2>
                  <p className="text-[var(--fg-secondary)]">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input
                      id="name"
                      label="Name"
                      placeholder="Your full name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <Input
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input
                      id="phone"
                      label="Phone (optional)"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    <Input
                      id="subject"
                      label="Subject"
                      placeholder="How can we help?"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>
                  <Textarea
                    id="message"
                    label="Message"
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8 lg:pt-32">
              <div className="p-8 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-8">
                <h3 className="font-heading text-xl font-bold text-[var(--fg)]">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[var(--accent)] mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--fg)]">Email</p>
                      <a
                        href="mailto:marketplace@montgomeryplacellc.com"
                        className="text-sm text-[var(--accent)] hover:underline"
                      >
                        marketplace@montgomeryplacellc.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[var(--accent)] mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--fg)]">Headquarters</p>
                      <p className="text-sm text-[var(--fg-secondary)]">
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[var(--accent-surface)] space-y-4">
                <h3 className="font-heading text-lg font-bold text-[var(--fg)]">
                  Response Time
                </h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                  We typically respond to inquiries within 1–2 business days.
                  For urgent matters, please include &ldquo;URGENT&rdquo; in your subject
                  line.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
