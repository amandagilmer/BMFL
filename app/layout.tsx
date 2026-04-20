import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

const BASE_URL = "https://brightmindsfutureleaders.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Bright Minds Future Leaders | Private School in New Caney, TX",
    template: "%s | Bright Minds Future Leaders",
  },
  description:
    "Bright Minds Future Leaders is a private school in New Caney, TX offering personalized K-5 education with small class sizes, ability-based learning, and strong character development. Serving Kingwood, Porter, Splendora, Humble & Conroe.",
  keywords: [
    "private school New Caney TX",
    "private school Kingwood TX",
    "private school Porter TX",
    "private school Splendora TX",
    "small private school New Caney",
    "private elementary school New Caney",
    "private school near me New Caney",
    "alternative school New Caney TX",
    "private school Humble TX",
    "private school Conroe TX",
    "small class size school New Caney",
    "ability based learning Texas",
    "character development school",
    "Angela Gilmer Bright Minds",
    "Bright Minds Future Leaders",
  ],
  authors: [{ name: "Angela Gilmer", url: BASE_URL }],
  creator: "Bright Minds Future Leaders",
  publisher: "Bright Minds Future Leaders",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Bright Minds Future Leaders | Private School in New Caney, TX",
    description:
      "Private school in New Caney, TX with small classes, ability-based learning & character development. Serving Kingwood, Porter, Splendora, Humble & Conroe.",
    url: BASE_URL,
    siteName: "Bright Minds Future Leaders",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-bright-minds-color.png",
        width: 1200,
        height: 630,
        alt: "Bright Minds Future Leaders private school in New Caney, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Minds Future Leaders | Private School in New Caney, TX",
    description:
      "Private school in New Caney, TX. Small classes, ability-based learning & character development. Serving Kingwood, Porter, Splendora & surrounding areas.",
    images: ["/logo-bright-minds-color.png"],
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
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  verification: {
    google: "verification_token",
  },
  other: {
    "facebook-domain-verification": "e10x1q0ko30szez9aqpz844izlymqi",
  },
  category: "education",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="e10x1q0ko30szez9aqpz844izlymqi" />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5VWCL4RN');`,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VWCL4RN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["EducationalOrganization", "LocalBusiness"],
                  "@id": `${BASE_URL}/#organization`,
                  name: "Bright Minds Future Leaders",
                  alternateName: "BMFL",
                  description:
                    "Private school in New Caney, TX offering personalized K-5 education with small class sizes, ability-based learning, and strong character development.",
                  url: BASE_URL,
                  logo: `${BASE_URL}/logo-bright-minds-color.png`,
                  telephone: "+18329577530",
                  founder: {
                    "@type": "Person",
                    name: "Angela Gilmer",
                    jobTitle: "Founder & Lead Educator",
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "22893 Antique Ln",
                    addressLocality: "New Caney",
                    addressRegion: "TX",
                    postalCode: "77357",
                    addressCountry: "US",
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "08:30",
                      closes: "15:30",
                    },
                  ],
                  areaServed: [
                    "New Caney, TX", "Humble, TX", "Kingwood, TX",
                    "Porter, TX", "Conroe, TX", "Splendora, TX",
                    "Atascocita, TX", "Spring, TX", "The Woodlands, TX",
                  ],
                  hasMap: "https://maps.google.com/?q=22893+Antique+Ln,+New+Caney,+TX+77357",
                },
                {
                  "@type": "WebSite",
                  "@id": `${BASE_URL}/#website`,
                  url: BASE_URL,
                  name: "Bright Minds Future Leaders",
                  publisher: { "@id": `${BASE_URL}/#organization` },
                },
              ],
            }),
          }}
        />

        {children}

        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '414826808258340');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=414826808258340&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Chat Widget */}
        <Script
          id="chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6683b61ddd58563eacbbf34b"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
