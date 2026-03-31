import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JOY'S Personal Shopper — Claire Combaluzier",
    template: "%s | JOY'S Personal Shopper",
  },
  description:
    "Accompagnement shopping personnalisé à Montpellier et partout en France. Claire Combaluzier vous aide à trouver un style authentique qui vous ressemble.",
  keywords: [
    "personal shopper",
    "Montpellier",
    "conseil en image",
    "shopping personnalisé",
    "relooking",
    "garde-robe",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-cream text-charcoal font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
