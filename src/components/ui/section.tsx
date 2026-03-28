import { cn } from "@/lib/utils";
import { type ReactNode, type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "accent" | "dark" | "warm" | "cool";
}

export function Section({
  children,
  className,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        {
          "bg-[var(--bg)]": variant === "default",
          "bg-[var(--bg-elevated)]": variant === "muted",
          "bg-[var(--accent-surface)]": variant === "accent",
          "bg-[var(--accent)] text-white": variant === "dark",
          "bg-[var(--warm-bg)]": variant === "warm",
          "bg-[var(--cool-bg)]": variant === "cool",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Container({
  children,
  className,
  size = "lg",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 md:px-8",
        {
          "max-w-3xl": size === "sm",
          "max-w-5xl": size === "md",
          "max-w-7xl": size === "lg",
          "max-w-[1400px]": size === "xl",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
