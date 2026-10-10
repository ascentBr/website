import type { Metadata } from "next";

export const siteUrl = "https://www.ascentweb.com.br";
export const siteName = "Ascent";
export const siteTitle = "Ascent - Sites rápidos para pequenos empreendedores";
export const siteDescription =
  "Sites e landing pages rápidos no celular para pequenos empreendedores receberem mais contatos pelo Google.";

const founder = {
  "@type": "Person",
  "@id": `${siteUrl}/sobre#david`,
  name: "David Lucas Silva Santos",
  givenName: "David",
  jobTitle: "Desenvolvedor web",
  description:
    "Desenvolvedor formado em Engenharia de Software, com mais de 7 anos de experiência em e-commerces e desenvolvimento web.",
  url: `${siteUrl}/sobre`,
  knowsAbout: [
    "Desenvolvimento web",
    "Landing pages",
    "E-commerce",
    "Shopify",
    "WordPress",
    "SEO",
    "Performance web",
  ],
  sameAs: [
    "https://www.linkedin.com/in/david-silva-santos/",
    "https://github.com/delkz",
  ],
};

const services = [
  {
    name: "Site ou landing page para o seu negócio",
    description:
      "Página clara, com seus serviços e um botão para o cliente falar com você, para quem quer mostrar o negócio na internet e receber contatos.",
  },
  {
    name: "Site rápido no celular",
    description:
      "Site que carrega rápido e funciona bem em qualquer tela, para o visitante não desistir antes de ver a oferta.",
  },
  {
    name: "Site preparado para o Google",
    description:
      "Estrutura, títulos e textos preparados para que pessoas da sua região encontrem o negócio quando pesquisarem pelo que ele faz.",
  },
  {
    name: "Suporte depois da entrega",
    description:
      "Atualização de preços, fotos e textos depois que o site está no ar.",
  },
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      legalName: "68.010.885 DAVID LUCAS SILVA SANTOS",
      taxID: "68.010.885/0001-43",
      url: siteUrl,
      description: siteDescription,
      slogan: "Sites rápidos para pequenos empreendedores",
      inLanguage: "pt-BR",
      areaServed: { "@type": "Country", name: "Brasil" },
      audience: {
        "@type": "Audience",
        audienceType: "Pequenos empreendedores, profissionais autônomos e negócios locais",
      },
      knowsAbout: founder.knowsAbout,
      founder: { "@id": founder["@id"] },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços da Ascent",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", ...service },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${siteUrl}/sobre#page`,
      url: `${siteUrl}/sobre`,
      name: "Sobre mim",
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": founder["@id"] },
    },
    { ...founder, worksFor: { "@id": `${siteUrl}/#organization` } },
  ],
};

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: siteTitle,
};

export function socialMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: siteName,
      url: path,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
