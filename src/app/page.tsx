import { Hero } from "@/components/home/hero";
import { OxiSureTechFoundation } from "@/components/home/oxisuretech-foundation";
import { ProductSpotlights } from "@/components/home/product-spotlights";
import { TeaserSections } from "@/components/home/teaser-sections";
import { EducationHub } from "@/components/home/education-hub";
import { NewsletterSignup } from "@/components/home/newsletter-signup";
import { NewsletterPopup } from "@/components/home/newsletter-popup";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Kink-Resistant Oxygen Tubing for Home Use",
  description:
    "Montgomery Place highlights OxiSureTech Premium 6-channel kink-resistant oxygen tubing with clearer paths for patients, caregivers, professionals, and partners.",
  path: "/",
  keywords: [
    "kink-resistant oxygen tubing",
    "non-kinking oxygen tubing",
    "oxygen tubing for home use",
    "oxygen tubing for oxygen concentrators",
    "home oxygen therapy tubing",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <OxiSureTechFoundation />
      <ProductSpotlights />
      <TeaserSections />
      <EducationHub />
      <NewsletterSignup />
      <NewsletterPopup />
    </>
  );
}
