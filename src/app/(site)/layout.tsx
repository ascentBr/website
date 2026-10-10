import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";
import JsonLd from "./components/JsonLd/Index";
import { organizationJsonLd, siteUrl, siteTitle, siteDescription, socialMetadata } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Ascent",
  },
  description: siteDescription,
  applicationName: "Ascent",
  authors: [{ name: "David Lucas Silva Santos", url: `${siteUrl}/sobre` }],
  creator: "David Lucas Silva Santos",
  alternates: { canonical: "/" },
  ...socialMetadata({ title: siteTitle, description: siteDescription, path: "/" }),
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <ToastContainer />
      <ThemeProvider defaultTheme="dark">
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}
