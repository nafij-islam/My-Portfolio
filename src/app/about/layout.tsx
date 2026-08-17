import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Nafij Islam, a Full-Stack Developer, Shopify Expert, and Bubble.io Developer building modern web applications and e-commerce solutions.",
  alternates: {
    canonical: "https://www.nafij.com/about",
  },
  openGraph: {
    title: "About Nafij Islam | Full-Stack Developer & Shopify Expert",
    description:
      "Learn more about Nafij Islam, a Full-Stack Developer, Shopify Expert, and Bubble.io Developer building modern web applications.",
    url: "https://www.nafij.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
