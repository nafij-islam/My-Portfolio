import type { Metadata } from "next";
import AppProviders from "@/components/providers/AppProviders";
import "../index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nafij.com"),
  title: {
    default: "Nafij Islam | Full Stack Developer | Web Developer | Shopify & Bubble.io Expert",
    template: "%s | Nafij Islam - Full Stack Developer",
  },
  description:
    "Nafij Islam is a Full Stack Developer and Web Developer specializing in React, Next.js, Shopify, Bubble.io, SaaS applications, and custom web development solutions.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Shopify Developer",
    "Bubble.io Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "SaaS Developer",
    "E-commerce Developer",
    "Freelance Developer",
    "Custom Web Development",
    "Bubble.io Expert",
    "Shopify Expert",
    "UI Developer",
    "Responsive Web Developer"
  ],
  alternates: {
    canonical: "https://www.nafij.com",
  },
  authors: [{ name: "Nafij Islam", url: "https://www.nafij.com" }],
  creator: "Nafij Islam",
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
    type: "website",
    locale: "en_US",
    url: "https://www.nafij.com/",
    siteName: "Nafij Islam - Full Stack Developer",
    title: "Nafij Islam | Full Stack Developer | Web Developer | Shopify & Bubble.io Expert",
    description:
      "Nafij Islam is a Full Stack Developer and Web Developer specializing in React, Next.js, Shopify, Bubble.io, SaaS applications, and custom web development solutions.",
    images: [
      {
        url: "https://www.nafij.com/nafij-og.png",
        width: 1200,
        height: 630,
        alt: "Nafij Islam - Full Stack Developer, Shopify & Bubble.io Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nafij Islam | Full Stack Developer | Web Developer | Shopify & Bubble.io Expert",
    description:
      "Nafij Islam is a Full Stack Developer and Web Developer specializing in React, Next.js, Shopify, Bubble.io, SaaS applications, and custom web development solutions.",
    images: ["https://www.nafij.com/nafij-og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.nafij.com/#nafij-islam",
      "name": "Nafij Islam",
      "alternateName": "Nafij",
      "url": "https://www.nafij.com/",
      "image": "https://www.nafij.com/Nafij-Islam.png",
      "jobTitle": "Full Stack Developer",
      "description":
        "Nafij Islam is a Full Stack Developer and Web Developer specializing in React, Next.js, Shopify, Bubble.io, SaaS applications, and custom web development solutions.",
      "sameAs": [
        "https://www.facebook.com/nafijislam99/",
        "https://github.com/nafij-islam",
        "https://www.nafij.xyz/",
        "https://nafij.bro.bd/"
      ],
      "knowsAbout": [
        "Full Stack Development",
        "Web Development",
        "Software Development",
        "Frontend Development",
        "Backend Development",
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Shopify Development",
        "Bubble.io Development",
        "SaaS Development",
        "No-Code Development",
        "Responsive Web Development",
        "API Integration",
        "Database Architecture",
        "Git",
        "GitHub",
        "E-commerce Development",
        "Web Performance Optimization"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.nafij.com/#service",
      "name": "Nafij Islam - Full Stack Web & Software Development Services",
      "url": "https://www.nafij.com/",
      "image": "https://www.nafij.com/Nafij-Islam.png",
      "description":
        "Professional Full Stack Web Development, custom Shopify stores, Bubble.io SaaS applications, and responsive digital products for international clients.",
      "priceRange": "$$",
      "provider": {
        "@id": "https://www.nafij.com/#nafij-islam"
      },
      "areaServed": "Worldwide",
      "serviceType": [
        "Full Stack Web Development",
        "Frontend Development",
        "Backend API Development",
        "Shopify Store Development",
        "Bubble.io SaaS Development",
        "Custom Software Development"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nafij.com/#website",
      "url": "https://www.nafij.com/",
      "name": "Nafij Islam | Full Stack Developer | Web Developer | Shopify & Bubble.io Expert",
      "description":
        "Official portfolio of Nafij Islam - Full Stack Developer, Shopify & Bubble.io Expert.",
      "publisher": {
        "@id": "https://www.nafij.com/#nafij-islam"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.nafij.com/#profilepage",
      "url": "https://www.nafij.com/",
      "name": "Nafij Islam Portfolio",
      "mainEntity": {
        "@id": "https://www.nafij.com/#nafij-islam"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
