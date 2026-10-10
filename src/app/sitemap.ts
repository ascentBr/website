import type { MetadataRoute } from "next";

const siteUrl = "https://www.ascentweb.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/sobre`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
