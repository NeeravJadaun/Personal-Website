import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Neerav Jadaun | Portfolio",
  description:
    "Mathematics student at the University of Waterloo building data-driven solutions across software, fintech, and embedded systems.",
  openGraph: {
    title: "Neerav Jadaun | Portfolio",
    description:
      "Projects, experience, and technical skills spanning software engineering, AI applications, and quantitative problem-solving.",
    url: "https://YOUR_DOMAIN",
    siteName: "Neerav Jadaun Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Neerav Jadaun portfolio preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Neerav Jadaun | Portfolio",
    description:
      "Mathematics student building practical software and fintech-focused systems.",
    images: ["/og-image.svg"]
  },
  metadataBase: new URL("https://YOUR_DOMAIN")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFont.variable} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
