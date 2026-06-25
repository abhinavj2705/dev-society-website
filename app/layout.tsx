import type { Metadata } from "next";
import { Inter, Jost, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { Nav } from "@/components/layout/Nav";
import { BlurTop } from "@/components/layout/BlurTop";
import { BuyPill } from "@/components/layout/BuyPill";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });

export const metadata: Metadata = {
  title: "Developer Society Portfolio",
  description: "Designer and developer portfolio for Developer Society, Christ University."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${jost.variable}`}>
      <body>
        <LenisProvider>
          <BlurTop />
          <Nav />
          {children}
          <Footer />
          <BuyPill />
        </LenisProvider>
      </body>
    </html>
  );
}
