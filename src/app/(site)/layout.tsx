import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.ascentweb.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ascent - Sites rápidos para pequenos empreendedores",
    template: "%s | Ascent",
  },
  description:
    "Sites e landing pages rápidos no celular para pequenos empreendedores receberem mais contatos pelo Google.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Ascent",
    url: siteUrl,
    title: "Ascent - Sites rápidos para pequenos empreendedores",
    description:
      "Sites e landing pages rápidos no celular para pequenos empreendedores receberem mais contatos pelo Google.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>

      <body className={`${ralewaySans.variable}`}>
        <ToastContainer />
        <ThemeProvider defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  );
}
