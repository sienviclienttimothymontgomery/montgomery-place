import Image from "next/image";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ShieldCheck, Milestone, Stethoscope, Eye } from "lucide-react";

export function ProofAndRoadmap() {
  const milestones = [
    {
      quarter: "Q1 2026",
      title: "OxiSureTech Tubing Launch",
      description: "Successfully commercialized 6-channel kink-resistant tubing for DME sourcing and clinics.",
      status: "completed",
    },
    {
      quarter: "Q3 2026",
      title: "GlowSafe Lab Validation",
      description: "Active lab tests on ambient visual alerts, nighttime auto-dimming sensor boards, and housing prototypes.",
      status: "active",
    },
    {
      quarter: "Q4 2026",
      title: "ReelAir Stress Testing",
      description: "Mechanical tension tests on retractable slack control and connector dynamics for bedroom setups.",
      status: "planned",
    },
    {
      quarter: "Q2 2027",
      title: "Co-Design Pilot Phase",
      description: "Beta release of connected monitoring models and CareDock platform to select patient focus groups.",
      status: "planned",
    },
  ];

  const prototypeImages = [
    {
      src: "/images/products/glowsafe-lifestyle.jpg",
      alt: "GlowSafe ambient light prototype integrated in bedroom environment",
      caption: "GlowSafe Bedroom Integration",
      tag: "Mockup/Prototype",
    },
    {
      src: "/images/products/glowsafe-features.jpg",
      alt: "GlowSafe sensor board layout and optical features diagram",
      caption: "Sensor Board & Optical Blueprint",
      tag: "Engineering Spec",
    },
    {
      src: "/images/products/glowsafe-packaging.jpg",
      alt: "GlowSafe packaging prototype model",
      caption: "Ambient Light Enclosure Design",
      tag: "Form Factor",
    },
    {
      src: "/images/products/oxisuretech-single.jpg",
      alt: "Close-up of OxiSureTech 6-channel kink-resistant cross section",
      caption: "6-Channel Cross Section Proof",
      tag: "Production Ready",
    },
  ];

  return (
    <Section variant="muted" className="border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-[#0D1826]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] items-start">
          {/* Column 1: Clinical Guidance & Timeline */}
          <div className="space-y-10">
            {/* Clinical Guidance Card */}
            <div className="rounded-[2rem] border border-slate-200/60 dark:border-white/5 bg-white dark:bg-white/5 p-8 shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                <Stethoscope className="h-4 w-4" />
                Clinical Integrity
              </div>
              <h3 className="font-heading text-3xl font-bold tracking-tight text-[var(--fg)]">
                Advisor Notes &amp; Clinical Guidance
              </h3>
              <p className="text-[var(--fg-secondary)] leading-relaxed text-sm md:text-base">
                Montgomery Place products are developed in close consultation with pulmonologists, sleep medicine clinical advisors, and DME coordinators. 
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 text-xs text-[var(--fg-secondary)]">
                  <ShieldCheck className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Verified 6-channel extrusion flow safety guidelines.</span>
                </div>
                <div className="flex gap-3 text-xs text-[var(--fg-secondary)]">
                  <ShieldCheck className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Compliant with standard medical FDA material rules for home respiratory accessories.</span>
                </div>
                <div className="flex gap-3 text-xs text-[var(--fg-secondary)]">
                  <ShieldCheck className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Safety-first alarm escalation criteria to guarantee patient security during sleep.</span>
                </div>
              </div>
            </div>

            {/* Timeline/Milestones */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                <Milestone className="h-4 w-4" />
                Montgomery Place Roadmap
              </div>
              <h3 className="font-heading text-3xl font-bold tracking-tight text-[var(--fg)]">
                Our Path to Connected Wellness
              </h3>
              
              <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 pl-6 space-y-8">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle Indicator */}
                    <span className={`absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-white dark:bg-slate-900 ${
                      milestone.status === "completed"
                        ? "border-blue-500 bg-blue-500"
                        : milestone.status === "active"
                        ? "border-emerald-500 animate-pulse bg-emerald-500"
                        : "border-slate-300 dark:border-slate-700"
                    }`} />
                    
                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                        {milestone.quarter}
                      </span>
                      <h4 className="font-heading text-lg font-bold text-[var(--fg)]">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Prototype Showcase */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
              <Eye className="h-4 w-4" />
              Prototype Showcase
            </div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[var(--fg)]">
              Concrete Proof of Prototyping
            </h3>
            <p className="text-[var(--fg-secondary)] leading-relaxed">
              We stand behind our roadmap. Below are active prototype models, sensor board blueprints, 
              and cross-sections demonstrating our engineering team&apos;s development process.
            </p>

            {/* Prototype Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {prototypeImages.map((image, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200/60 dark:border-white/5 bg-white dark:bg-white/5 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 dark:hover:border-purple-500"
                >
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-slate-950">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-slate-900/80 text-white border-0 text-[10px] uppercase font-semibold tracking-wider">
                        {image.tag}
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="font-heading font-bold text-sm text-[var(--fg)]">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
