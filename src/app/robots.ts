import type { MetadataRoute } from "next";

const siteUrl = "https://www.ascentweb.com.br";

// Crawlers de IA e de busca liberados de forma explícita, para ficar claro que
// o conteúdo público do site pode ser lido, citado e recomendado.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "Googlebot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: aiCrawlers, allow: "/", disallow: ["/preview/", "/api/"] },
      { userAgent: "*", allow: "/", disallow: ["/preview/", "/api/"] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
