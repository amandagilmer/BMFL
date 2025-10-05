import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://brightmindsfutureleaders.com"),
  title: {
    default: "Private School in New Caney, TX | Bright Minds Future Leaders",
    template: "%s | Bright Minds Future Leaders",
  },
  description:
    "Private micro school in New Caney, TX. Small class sizes, personalized learning, character development for K-8. Serving Porter, Humble, Kingwood.",
  keywords: [
    "private school New Caney",
    "micro school Texas",
    "small class sizes",
    "personalized learning",
    "K-8 education",
    "character development",
    "Porter TX school",
    "Humble TX school",
    "Kingwood school",
  ],
  authors: [{ name: "Angela Gilmer", url: "https://brightmindsfutureleaders.com/about" }],
  creator: "Bright Minds Future Leaders",
  publisher: "Bright Minds Future Leaders",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://brightmindsfutureleaders.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightmindsfutureleaders.com",
    siteName: "Bright Minds Future Leaders",
    title: "Private School in New Caney, TX | Bright Minds Future Leaders",
    description:
      "Private micro school in New Caney, TX. Small class sizes, personalized learning, character development for K-8. Serving Porter, Humble, Kingwood.",
    images: [
      {
        url: "https://brightmindsfutureleaders.com/hero-students-bg.png",
        width: 1200,
        height: 630,
        alt: "Bright Minds Future Leaders - Private School in New Caney, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private School in New Caney, TX | Bright Minds Future Leaders",
    description:
      "Private micro school in New Caney, TX. Small class sizes, personalized learning, character development for K-8. Serving Porter, Humble, Kingwood.",
    images: ["https://brightmindsfutureleaders.com/hero-students-bg.png"],
    creator: "@brightmindstx",
    site: "@brightmindstx",
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PrivateSchool",
              name: "Bright Minds Future Leaders",
              alternateName: "BMFL",
              description:
                "Private micro school in New Caney, TX offering personalized, ability-based learning for students K-8",
              url: "https://brightmindsfutureleaders.com",
              telephone: "+1-832-957-7530",
              email: "info@brightmindsfutureleaders.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "22893 Antique Ln",
                addressLocality: "New Caney",
                addressRegion: "TX",
                postalCode: "77357",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "30.1588",
                longitude: "-95.1849",
              },
              founder: {
                "@type": "Person",
                name: "Angela Gilmer",
                jobTitle: "Founder & Lead Educator",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "New Caney",
                  containedInPlace: {
                    "@type": "State",
                    name: "Texas",
                  },
                },
                {
                  "@type": "City",
                  name: "Porter",
                },
                {
                  "@type": "City",
                  name: "Humble",
                },
                {
                  "@type": "City",
                  name: "Kingwood",
                },
                {
                  "@type": "City",
                  name: "Atascocita",
                },
                {
                  "@type": "City",
                  name: "Spring",
                },
                {
                  "@type": "City",
                  name: "Conroe",
                },
                {
                  "@type": "City",
                  name: "The Woodlands",
                },
              ],
              sameAs: [
                "https://www.facebook.com/brightmindsfutureleaders",
                "https://www.instagram.com/brightmindsfutureleaders",
              ],
              priceRange: "$$",
              image: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
              logo: {
                "@type": "ImageObject",
                url: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
                width: 200,
                height: 60,
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
