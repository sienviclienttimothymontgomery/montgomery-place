"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--bg)]/80 border-b border-[var(--border)]">
      <nav className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:shadow-md transition-shadow">
              M
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-bold text-[var(--fg)] tracking-tight">
                {siteConfig.name}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors rounded-xl hover:bg-[var(--accent-surface)] cursor-pointer">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2 w-56">
                      <div className="rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-xl py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:bg-[var(--accent-surface)] transition-colors"
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
                  className="px-4 py-2 text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors rounded-xl hover:bg-[var(--accent-surface)]"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:bg-[var(--accent-surface)] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--border)]">
            <div className="space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="space-y-1">
                    <div className="px-4 py-2 text-xs uppercase tracking-wider text-[var(--fg-secondary)] font-semibold">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-2.5 text-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:bg-[var(--accent-surface)] rounded-xl transition-colors"
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
                    className="block px-4 py-2.5 text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:bg-[var(--accent-surface)] rounded-xl transition-colors"
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
