import Link from "next/link";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#E0F2F1] via-white to-[#F0F9FF] dark:from-[#0A1A1A] dark:via-[#0A0A0A] dark:to-[#0C1929]">
      {/* Background accents */}
      <div className="absolute top-1/4 right-[15%] w-[500px] h-[500px] bg-[var(--accent)] rounded-full opacity-[0.04] blur-3xl" />
      <div className="absolute bottom-1/4 left-[10%] w-[400px] h-[400px] bg-teal-400 rounded-full opacity-[0.04] blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03] dark:opacity-[0.02]" />

      <Container className="relative py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold tracking-wide backdrop-blur-md border border-[var(--accent)]/10">
              <Sparkles className="w-4 h-4" />
              Powered by OxiSureTech
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              <span className="text-slate-900 dark:text-white">Healthier Living,</span>{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[var(--accent)] to-teal-400 bg-clip-text text-transparent">
                At Home
              </span>{" "}
              <span className="text-slate-900 dark:text-white">and</span>{" "}
              <span className="bg-gradient-to-r from-teal-400 to-[var(--accent)] bg-clip-text text-transparent">
                On the Go
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--fg-secondary)] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Montgomery Place is reimagining respiratory care with intelligent,
              beautifully designed products that integrate seamlessly into your
              daily life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link href="/products">
                <Button size="lg" className="text-base px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[var(--accent)]/20 hover:-translate-y-1 transition-all duration-300">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/technology/oxisuretech">
                <Button variant="outline" size="lg" className="text-base px-10 py-4 rounded-2xl border-2 border-[var(--accent)]/30 text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
                  Discover OxiSureTech
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)] to-teal-400 rounded-full blur-3xl opacity-20 animate-pulse-slow object-cover" />
            <img 
              src="/images/products/sleepflow.png" 
              alt="Montgomery Place SleepFlow Oxygent Concentrator" 
              className="relative z-10 w-full h-auto drop-shadow-2xl hero-float rounded-3xl border border-white/10"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
