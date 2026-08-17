import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "Explore featured projects by Nafij Islam, including custom Shopify stores, Bubble.io web applications, and full-stack React / Next.js web applications.",
  alternates: {
    canonical: "https://www.nafij.com/projects",
  },
  openGraph: {
    title: "Featured Projects | Nafij Islam - Full-Stack Developer",
    description:
      "Explore featured projects by Nafij Islam, including custom Shopify stores, Bubble.io web applications, and React / Next.js projects.",
    url: "https://www.nafij.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
