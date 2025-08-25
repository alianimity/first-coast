import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { SiteFooter } from "../components/site-footer";
import { MobileStickyCTA } from "../components/mobile-sticky-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "First Coast Home Remodeling & Repair",
  description:
    "Cosmetic remodeling and repair in Florida's First Coast — planning, sourcing, hands-on, and logistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <Navbar />
        <main>
          {children}
        </main>
        <SiteFooter />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
