import Link from "next/link";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#E0F2F1] via-white to-[#F0F9FF] dark:from-[#0A1A1A] dark:via-[#0A0A0A] dark:to-[#0C1929]">
      {/* Background accents */}
      <div className="absolute top-1/4 right-[15%] w-[500px] h-[500px] bg-[var(--accent)] rounded-full opacity-[0.04] blur-3xl" />
      <div className="absolute bottom-1/4 left-[10%] w-[400px] h-[400px] bg-teal-400 rounded-full opacity-[0.04] blur-3xl" />

      <Container className="relative py-20">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4" />
            Powered by OxiSureTech
          </div>

          <h1 className="font-heading text-[3.5rem] md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
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

          <p className="text-xl md:text-2xl text-[var(--fg-secondary)] max-w-2xl mx-auto leading-relaxed font-light">
            Montgomery Place is reimagining respiratory care with intelligent,
            beautifully designed products that integrate seamlessly into your
            daily life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/products">
              <Button size="lg" className="text-base px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/technology/oxisuretech">
              <Button variant="outline" size="lg" className="text-base px-10 py-4 rounded-2xl">
                Discover OxiSureTech
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
