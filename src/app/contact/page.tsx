import { ContactPageClient } from "@/components/contact/contact-page-client";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Montgomery Place",
  description:
    "Contact Montgomery Place for patient, caregiver, healthcare professional, DME, distributor, or partner inquiries about OxiSureTech respiratory comfort products.",
  path: "/contact",
  keywords: [
    "oxygen tubing contact",
    "request product information",
    "healthcare professional inquiry",
    "DME distributor inquiry",
  ],
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;

  return <ContactPageClient initialType={params.type} />;
}
