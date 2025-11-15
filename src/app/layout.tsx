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

export const metadata: Metadata = {
  title: "Ascent - Web & Performance",
  description: "Transforme seu negócio com estratégias digitais de alta performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_br" suppressHydrationWarning={true}>

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
