import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Stethoscope } from "lucide-react";

const benefitPoints = [
  "6-channel oxygen tubing designed to help reduce kinks and tangles",
  "A lighter, smoother daily experience for home oxygen routines",
  "Clear paths for patients, caregivers, professionals, and partners",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E8F1FA] via-white to-[#F2F4F7] dark:from-[#16314D] dark:via-[#111F31] dark:to-[#1A2432]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,109,181,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,154,225,0.16),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(59,154,225,0.18),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:28px_28px] opacity-30 dark:opacity-15" />

      <Container className="relative py-18 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/15 bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--accent)] shadow-sm backdrop-blur dark:bg-white/5">
              <ShieldCheck className="h-4 w-4" />
              Respiratory comfort, mobility, and product clarity
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                Kink-Resistant Oxygen Tubing for Safer, More Comfortable Home Oxygen Use
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-[var(--fg-secondary)] md:text-xl">
                Montgomery Place develops respiratory-care products designed to reduce daily friction for oxygen users, caregivers, and care teams, starting with premium 6-channel oxygen tubing built for comfort, mobility, and reliability.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/products/oxisuretech">
                <Button size="lg" className="w-full rounded-2xl sm:w-auto">
                  Explore OxiSureTech Tubing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact?type=partner">
                <Button variant="outline" size="lg" className="w-full rounded-2xl sm:w-auto">
                  For Professionals &amp; Partners
                </Button>
              </Link>
            </div>

            <ul className="grid gap-3 text-sm text-[var(--fg-secondary)] sm:grid-cols-3 sm:text-base">
              {benefitPoints.map((point) => (
                <li key={point} className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-4 shadow-sm dark:border-white/15 dark:bg-white/10">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[linear-gradient(135deg,rgba(26,109,181,0.18),rgba(59,154,225,0.04))] blur-2xl dark:bg-[linear-gradient(135deg,rgba(125,211,252,0.2),rgba(59,154,225,0.08))]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-5 shadow-[var(--shadow-diffuse)] backdrop-blur dark:border-white/15 dark:bg-white/10">
              <Image
                src="/images/products/oxisuretech.jpg"
                alt="OxiSureTech Premium oxygen tubing displayed in a clean home-care setting"
                width={900}
                height={900}
                priority
                className="w-full rounded-[1.5rem] object-cover"
              />
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[var(--accent-surface)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Built for Home Use
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-secondary)]">
                    Designed around common frustrations like kinks, tangles, drag, and room-to-room movement.
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    <Stethoscope className="h-4 w-4" />
                    General Product Information
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-secondary)]">
                    Product information only, not medical advice. Use oxygen therapy equipment according to provider instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
