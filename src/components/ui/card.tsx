import { cn } from "@/lib/utils";
import { type ReactNode, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-sm overflow-hidden",
        hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden aspect-[16/10] bg-[var(--accent-surface)]", className)}>
      <div className="absolute inset-0 flex items-center justify-center text-[var(--accent)] text-6xl font-bold opacity-20">
        {alt.charAt(0)}
      </div>
    </div>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
