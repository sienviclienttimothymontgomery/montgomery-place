import Image from "next/image";
import Link from "next/link";
import { footerLinks, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/section";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-5 lg:col-span-2">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/logo-symbol.jpg"
                  alt="Montgomery Place logo"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
                <span className="font-heading text-xl font-bold text-white">{siteConfig.name}</span>
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-slate-300">{siteConfig.description}</p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm text-[var(--accent)] transition-colors hover:text-blue-300"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contactEmail}
              </a>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h2>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h2>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Resources</h2>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-700 py-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Montgomery Place LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-slate-400 transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
