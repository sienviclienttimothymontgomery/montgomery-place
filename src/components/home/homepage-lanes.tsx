import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  PackageCheck,
  Cpu,
  Sparkles,
  Handshake,
  HeartHandshake,
  Stethoscope,
  Briefcase,
  Users,
} from "lucide-react";

export function HomepageLanes() {
  const lanes = [
    {
      id: "available",
      title: "Available Now",
      subtitle: "Commercial ready",
      description: "Proven solutions designed to improve daily home oxygen comfort and reduce movement friction.",
      bestFor: "Patients, Caregivers, Providers",
      badgeText: "Active Sourcing",
      badgeVariant: "default" as const,
      colorClass: "border-sky-500/20 bg-sky-50/50 dark:bg-sky-950/10 hover:border-sky-500 dark:hover:border-sky-500",
      accentText: "text-sky-600 dark:text-sky-400",
      accentBg: "bg-sky-500/10",
      icon: PackageCheck,
      bullets: [
        "OxiSureTech Premium Tubing (6-channel design)",
        "Latex-free material, kink-resistant structure",
        "Compatible with standard home oxygen concentrators",
      ],
      cta: {
        text: "Explore Specs & FAQs",
        href: "/products/oxisuretech",
        variant: "primary" as const,
      },
      secondaryCta: {
        text: "Request Product Info",
        href: "/contact?type=patient",
      },
    },
    {
      id: "development",
      title: "In Development",
      subtitle: "Active prototyping",
      description: "Upcoming connected products and safety concepts designed to expand the OxiSureTech ecosystem.",
      bestFor: "Forward-Looking Care Teams",
      badgeText: "Roadmap Stage",
      badgeVariant: "outline" as const,
      colorClass: "border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/10 hover:border-emerald-500 dark:hover:border-emerald-500",
      accentText: "text-emerald-600 dark:text-emerald-400",
      accentBg: "bg-emerald-500/10",
      icon: Cpu,
      bullets: [
        "GlowSafe: Ambient LED visual alerts (whisper-quiet status)",
        "ReelAir: Smart retractable tubing line-management concept",
        "FlexCannula: Extended-wear soft nasal cannula concept",
      ],
      cta: {
        text: "View Concept Roadmap",
        href: "/products",
        variant: "outline" as const,
      },
    },
    {
      id: "early-access",
      title: "Early Access",
      subtitle: "Co-design community",
      description: "Join patient & caregiver focus groups to test initial mockups, prototypes, and shape future designs.",
      bestFor: "Beta Testers, Early Adopters",
      badgeText: "Join Waitlist",
      badgeVariant: "accent" as const,
      colorClass: "border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-950/10 hover:border-indigo-500 dark:hover:border-indigo-500",
      accentText: "text-indigo-600 dark:text-indigo-400",
      accentBg: "bg-indigo-500/10",
      icon: Sparkles,
      bullets: [
        "Get early updates on product milestones",
        "Provide direct feedback on concept models",
        "Join pilot testing lists for upcoming releases",
      ],
      cta: {
        text: "Join the Waitlist",
        href: "#newsletter-signup-section",
        variant: "primary" as const,
      },
    },
    {
      id: "partners",
      title: "Partners & Investors",
      subtitle: "Strategic scaling",
      description: "Collaborations with DME providers, distributors, healthcare networks, and medical investors.",
      bestFor: "DME Providers, Distributors, Investors",
      badgeText: "Inquiries Open",
      badgeVariant: "outline" as const,
      colorClass: "border-slate-500/20 bg-slate-50/50 dark:bg-slate-900/10 hover:border-slate-500 dark:hover:border-slate-500",
      accentText: "text-slate-600 dark:text-slate-400",
      accentBg: "bg-slate-500/10",
      icon: Handshake,
      bullets: [
        "Inquire about wholesale DME distribution setups",
        "Collaborate on clinical evaluations & pilot data flows",
        "Discuss investment in the OxiSureTech platform",
      ],
      cta: {
        text: "Partner Inquiry",
        href: "/contact?type=partner",
        variant: "outline" as const,
      },
    },
  ];

  return (
    <Section className="relative bg-gradient-to-b from-white to-slate-50 dark:from-[#111F31] dark:to-[#0B1320] border-t border-slate-100 dark:border-slate-900">
      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="px-3 py-1 text-sm font-semibold tracking-wider uppercase border-[var(--accent)] text-[var(--accent)]">
            Explore Our Paths
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-[var(--fg)]">
            Who is Montgomery Place for?
          </h2>
          <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
            We split our portfolio into clear directions so you know exactly what is available today, 
            what is in active prototyping, and how you can get involved.
          </p>
        </div>

        {/* Lanes Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className={`flex flex-col h-full rounded-[2rem] border p-8 shadow-sm hover:shadow-[var(--shadow-diffuse)] transition-all duration-300 transform hover:-translate-y-1 ${lane.colorClass}`}
            >
              {/* Header */}
              <div className="space-y-4 flex-grow-0">
                <div className="flex justify-between items-center">
                  <div className={`p-3 rounded-2xl ${lane.accentBg} ${lane.accentText}`}>
                    <lane.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-secondary)]">
                    {lane.subtitle}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-2xl font-bold text-[var(--fg)]">
                    {lane.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge variant={lane.badgeVariant} className="text-xs py-0.5">
                      {lane.badgeText}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-5 space-y-4 flex-1">
                <div className="rounded-xl bg-white/70 dark:bg-white/5 border border-slate-100 dark:border-white/5 p-3 text-xs leading-relaxed text-[var(--fg-secondary)]">
                  <span className="font-semibold text-[var(--fg)] block mb-1">Target Audience:</span>
                  {lane.bestFor}
                </div>
                <p className="text-sm leading-relaxed text-[var(--fg-secondary)]">
                  {lane.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 text-xs text-[var(--fg-secondary)] pt-2 border-t border-slate-200/50 dark:border-white/5">
                  {lane.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${lane.accentText} bg-current`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-8 pt-4 border-t border-slate-200/50 dark:border-white/5 flex flex-col gap-3">
                <Link href={lane.cta.href} className="w-full">
                  <Button
                    variant={lane.cta.variant}
                    className="w-full rounded-2xl text-xs font-bold py-5 flex items-center justify-center gap-1.5 group"
                  >
                    {lane.cta.text}
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                {lane.secondaryCta && (
                  <Link href={lane.secondaryCta.href} className="w-full text-center">
                    <span className="text-xs text-[var(--accent)] hover:underline font-semibold block py-1.5">
                      {lane.secondaryCta.text}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
