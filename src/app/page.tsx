import { Hero } from "@/components/home/hero";
import { OxiSureTechFoundation } from "@/components/home/oxisuretech-foundation";
import { ProductSpotlights } from "@/components/home/product-spotlights";
import { TeaserSections } from "@/components/home/teaser-sections";
import { EducationHub } from "@/components/home/education-hub";
import { ProductEcosystem } from "@/components/home/product-ecosystem";
import { NewsletterSignup } from "@/components/home/newsletter-signup";
import { NewsletterPopup } from "@/components/home/newsletter-popup";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OxiSureTechFoundation />
      <ProductSpotlights />
      <TeaserSections />
      <EducationHub />
      {/* TEMPORARILY HIDDEN — risk of patent disclosure */}
      {/* <ProductEcosystem /> */}
      <NewsletterSignup />
      <NewsletterPopup />
    </>
  );
}
