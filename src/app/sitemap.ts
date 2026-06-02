import type { MetadataRoute } from "next";
import { educationArticles } from "@/content/education";
import { getFullPageProducts } from "@/content/products";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes: Array<{
  route: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { route: "/", changeFrequency: "weekly", priority: 1 },
  { route: "/about", changeFrequency: "monthly", priority: 0.7 },
  { route: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { route: "/education", changeFrequency: "monthly", priority: 0.8 },
  { route: "/innovation", changeFrequency: "monthly", priority: 0.6 },
  { route: "/medical-disclaimer", changeFrequency: "monthly", priority: 0.5 },
  { route: "/mobility-solutions", changeFrequency: "monthly", priority: 0.6 },
  { route: "/products", changeFrequency: "monthly", priority: 0.9 },
  { route: "/technology/oxisuretech", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((entry) => ({
    url: absoluteUrl(entry.route),
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const productEntries: MetadataRoute.Sitemap = getFullPageProducts().map((product) => ({
    url: absoluteUrl(`/products/${product.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const articleEntries: MetadataRoute.Sitemap = educationArticles.map((article) => ({
    url: absoluteUrl(`/education/${article.slug}`),
    lastModified: article.updatedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...productEntries, ...articleEntries];
}
