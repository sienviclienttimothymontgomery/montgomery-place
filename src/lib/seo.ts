import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const siteUrl = siteConfig.url;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path,
  image = "/images/products/oxisuretech.jpg",
  keywords,
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
