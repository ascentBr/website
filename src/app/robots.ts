import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/preview/"],
      },
    ],
    sitemap: "https://www.ascentweb.com.br/sitemap.xml",
  };
}