"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/images/logo-symbol.jpg"
              alt="Montgomery Place emblem"
              width={36}
              height={36}
              className="h-9 w-9 object-contain transition-all duration-200 group-hover:scale-105"
            />
            <span className="hidden font-heading text-lg font-bold tracking-tight text-[var(--fg)] sm:block">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      "relative flex cursor-pointer items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                      "hover:bg-[var(--accent)]/8 hover:text-[var(--accent)]",
                      openDropdown === link.label ? "text-[var(--accent)]" : "text-[var(--fg-secondary)]"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 transition-transform duration-200", openDropdown === link.label ? "rotate-180" : "")}
                    />
                    <span
                      className={cn(
                        "absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[var(--accent)] transition-all duration-200",
                        openDropdown === link.label ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      )}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute left-0 top-full w-56 pt-2">
                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] py-2 shadow-xl backdrop-blur-xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-150",
                              "hover:bg-[var(--accent)]/8 hover:pl-5 hover:text-[var(--accent)]",
                              isActive(child.href) ? "font-medium text-[var(--accent)]" : "text-[var(--fg-secondary)]"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group/nav relative rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                    "hover:bg-[var(--accent)]/8 hover:text-[var(--accent)]",
                    isActive(link.href!) ? "text-[var(--accent)]" : "text-[var(--fg-secondary)]"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[var(--accent)] transition-all duration-200",
                      isActive(link.href!)
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100"
                    )}
                  />
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="cursor-pointer rounded-xl p-2 text-[var(--fg-secondary)] transition-colors hover:bg-[var(--accent)]/8 hover:text-[var(--fg)] lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-[var(--border)] py-4 lg:hidden">
            <div className="space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="space-y-1">
                    <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--fg-secondary)]">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block rounded-xl px-6 py-2.5 text-sm transition-colors",
                          "hover:bg-[var(--accent)]/8 hover:text-[var(--accent)]",
                          isActive(child.href)
                            ? "bg-[var(--accent)]/5 font-medium text-[var(--accent)]"
                            : "text-[var(--fg-secondary)]"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                      "hover:bg-[var(--accent)]/8 hover:text-[var(--accent)]",
                      isActive(link.href!)
                        ? "bg-[var(--accent)]/5 text-[var(--accent)]"
                        : "text-[var(--fg-secondary)]"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
