import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-serif" });
const terminal = VT323({ subsets: ["latin"], weight: "400", variable: "--font-terminal" });

export const metadata: Metadata = {
  title: "6XARCHIVE — Exhibition 00",
  description: "A digital archive for curated objects, images, and experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${serif.variable} ${terminal.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
