import type { Metadata } from "next";
import AppProviders from "@/components/providers/AppProviders";
import "../index.css";

export const metadata: Metadata = {
  title: {
    default: "Nafij Islam",
    template: "%s | Nafij Islam",
  },
  description: "Nafij is a passionate Frontend Developer and Shopify Expert crafting beautiful, performant websites and e-commerce solutions that drive results.",
  authors: [{ name: "Nafij" }],
  verification: {
    google: "NHNrDYmGz-4MGt0_HW8C7Os273Ih2zXmr4Z0usyitpg",
  },
  openGraph: {
    title: "Nafij | Frontend & Shopify Developer",
    description: "Passionate Frontend Developer and Shopify Expert crafting beautiful, performant websites and e-commerce solutions.",
    type: "website",
    images: ["https://www.nafij.com/nafij-og.png"],
    url: "https://www.nafij.com/",
  },
  twitter: {
    card: "summary_large_image",
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
