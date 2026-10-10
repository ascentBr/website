import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ascentweb.com.br"),
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={ralewaySans.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}