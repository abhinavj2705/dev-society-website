import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollToAnchor } from "@/components/layout/ScrollToAnchor";
import { Nav } from "@/components/layout/Nav";
import { BlurTop } from "@/components/layout/BlurTop";
import { BuyPill } from "@/components/layout/BuyPill";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  title: "Developer Society Portfolio",
  description: "Designer and developer portfolio for Developer Society, Christ University."
};

import { BackgroundArtifacts } from "@/components/ui/BackgroundArtifacts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="overflow-x-clip relative">
        <ScrollToAnchor>
          <BackgroundArtifacts />
          <div className="relative z-10 flex min-h-screen flex-col">
            <BlurTop />
            <Nav />
            {children}
            <Footer />
            <BuyPill />
          </div>
        </ScrollToAnchor>
      </body>
    </html>
  );
}
