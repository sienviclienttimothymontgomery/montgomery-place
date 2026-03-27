import { Section, Container } from "@/components/ui/section";
import { Cpu, Shield, Move, Heart, Moon, Home, Activity, Briefcase, Users } from "lucide-react";

const ecosystemItems = [
  { name: "GlowSafe", icon: Shield, color: "#10B981", category: "Safety" },
  { name: "ReelAir", icon: Move, color: "#3B82F6", category: "Mobility" },
  { name: "FlexCannula", icon: Heart, color: "#EC4899", category: "Comfort" },
  { name: "SleepFlow", icon: Moon, color: "#6366F1", category: "Sleep" },
  { name: "AirVista", icon: Home, color: "#8B5CF6", category: "Home" },
  { name: "BreatheActive", icon: Activity, color: "#F59E0B", category: "Wellness" },
  { name: "GoOxi", icon: Briefcase, color: "#EF4444", category: "Portable" },
  { name: "CareDock", icon: Users, color: "#06B6D4", category: "Connected" },
];

export function ProductEcosystem() {
  return (
    <Section variant="cool">
      <Container>
        <div className="text-center mb-20 space-y-5">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--fg)] tracking-tight">
            One Platform, <span className="text-[var(--accent)]">Infinite Possibilities</span>
          </h2>
          <p className="text-lg text-[var(--fg-secondary)] max-w-2xl mx-auto leading-relaxed">
            Every Montgomery Place product is built on OxiSureTech, creating a
            unified ecosystem where all your respiratory wellness needs work
            together seamlessly.
          </p>
        </div>

        {/* Ecosystem Visual */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Hub */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[var(--accent)] to-teal-400 flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <Cpu className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-1" />
                  <span className="text-sm md:text-base font-bold">OxiSureTech</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-[var(--accent)] opacity-20 animate-ping" />
            </div>
          </div>

          {/* Product Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-6">
            {ecosystemItems.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-4 p-6 md:p-7 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}12` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-sm text-[var(--fg)]">{item.name}</p>
                  <p className="text-xs text-[var(--fg-secondary)]">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Connection line */}
          <div className="absolute top-[175px] md:top-[215px] left-1/2 transform -translate-x-1/2 w-px h-14 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-30 hidden sm:block" />
        </div>
      </Container>
    </Section>
  );
}
