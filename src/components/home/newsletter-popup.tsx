"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, X, Sparkles } from "lucide-react";

const POPUP_DELAY_MS = 5000;
const DISMISS_KEY = "mp_newsletter_dismissed";

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (typeof window !== "undefined" && sessionStorage.getItem(DISMISS_KEY)) {
      return;
    }
    const timer = setTimeout(() => setVisible(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem(DISMISS_KEY, "1");
      }
    }, 300);
  };

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

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${closing ? "opacity-0" : "opacity-100"}`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`fixed z-[9999] inset-0 flex items-center justify-center p-4 pointer-events-none transition-all duration-300 ${closing ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
      >
        <div
          className="relative w-full max-w-md pointer-events-auto rounded-3xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient card */}
          <div className="relative p-8 md:p-10 bg-gradient-to-br from-[var(--accent)] to-blue-800 text-white overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close newsletter popup"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative space-y-5 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                Stay in the Loop
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
                Join the Montgomery Place Community
              </h2>
              <p className="text-white/75 text-sm leading-relaxed max-w-xs mx-auto">
                Be the first to hear about new products, respiratory wellness
                tips, and exclusive early access.
              </p>

              {submitted ? (
                <div className="flex items-center justify-center gap-3 py-4 animate-fade-up">
                  <CheckCircle className="w-6 h-6 text-white" />
                  <span className="text-lg font-medium">
                    You&apos;re subscribed!
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm text-sm"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-[var(--accent)] hover:bg-white/90 shadow-lg font-semibold"
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}

              <p className="text-[11px] text-white/40">
                No spam, ever. Unsubscribe anytime.{" "}
                <a href="/privacy" className="underline hover:text-white/60">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
