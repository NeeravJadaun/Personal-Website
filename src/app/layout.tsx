import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"]
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"]
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d2738"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://neeravjadaun.com"),
  title: "Neerav Jadaun — Mathematics · Fintech · SWE",
  description:
    "University of Waterloo Mathematics student building data-driven systems for finance. Open to fintech, SWE, and quantitative finance internships.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Neerav Jadaun — Mathematics · Fintech · SWE",
    description:
      "Dark precision-engineered portfolio for fintech, software engineering, and quantitative finance internship recruiters.",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Neerav Jadaun portfolio" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
