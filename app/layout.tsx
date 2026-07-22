import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Background from "@/components/Background";
import StrategyCallPopup from "@/components/StrategyCallPopup";

export const metadata: Metadata = {
  title: {
    default: "WeDigMark",
    template: "%s | WeDigMark",
  },
  description:
    "Creative Strategy, SEO, Performance Marketing, and Email Marketing built for businesses that want sustainable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} relative bg-[#0D0D0D] antialiased`}
      >
        <Background />
        <Navbar />
        <StrategyCallPopup />

        <main className="relative z-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}