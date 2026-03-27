import { cn } from "@/lib/utils";
import { type ReactNode, type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
}

export function Badge({
  children,
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        {
          "bg-[var(--accent-surface)] text-[var(--accent)]":
            variant === "default",
          "bg-[var(--accent)] text-white": variant === "accent",
          "border border-[var(--border)] text-[var(--fg-secondary)]":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
