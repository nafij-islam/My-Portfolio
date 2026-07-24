import type { Metadata } from "next";
import AppProviders from "@/components/providers/AppProviders";
import "../index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nafij.com"),
  title: {
    default: "Nafij Islam | Full-Stack Developer, Shopify Expert & Bubble.io Creator",
    template: "%s | Nafij Islam",
  },
  description: "Nafij Islam (Saharian Nafis) is a professional Full-Stack Developer specializing in Frontend (React, Next.js), Backend APIs, Shopify Expert theme development, and high-performance Bubble.io web and mobile applications.",
  keywords: [
    "Nafij Islam",
    "Saharian Nafis",
    "Frontend Developer",
    "Backend Developer",
    "Shopify Expert",
    "Bubble.io Developer",
    "Next.js Developer",
    "React Developer",
    "Full-Stack Web Developer",
    "Shopify Custom Theme Developer",
    "Bubble.io No-Code Developer",
    "Web Developer Dhaka",
    "Portfolio Web Developer"
  ],
  authors: [{ name: "Nafij Islam" }],
  verification: {
    google: "NHNrDYmGz-4MGt0_HW8C7Os273Ih2zXmr4Z0usyitpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Nafij Islam | Full-Stack, Shopify & Bubble.io Expert",
    description: "High-performance Frontend & Backend Web Development, custom Shopify stores, and Bubble.io web/mobile app solutions.",
    type: "website",
    images: ["https://www.nafij.com/nafij-og.png"],
    url: "https://www.nafij.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nafij Islam | Full-Stack, Shopify & Bubble.io Expert",
    description: "High-performance Frontend & Backend Web Development, custom Shopify stores, and Bubble.io web/mobile app solutions.",
    site: "@nafij",
    images: ["https://www.nafij.com/nafij-og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
