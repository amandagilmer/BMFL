import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Bright Minds Future Leaders | Private Micro School in New Caney, TX",
    template: "%s | Bright Minds Future Leaders",
  },
  description:
    "Award-winning private micro school in New Caney, TX. Personalized K-8 education with small class sizes (max 12 students). Enroll today!",
  keywords:
    "private school New Caney TX, micro school, small class sizes, K-8 education, personalized learning, character development",
  authors: [{ name: "Bright Minds Future Leaders" }],
  creator: "Bright Minds Future Leaders",
  publisher: "Bright Minds Future Leaders",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.brightmindsfutureleaders.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bright Minds Future Leaders | Private Micro School in New Caney, TX",
    description:
      "Award-winning private micro school in New Caney, TX. Personalized K-8 education with small class sizes.",
    url: "https://www.brightmindsfutureleaders.com",
    siteName: "Bright Minds Future Leaders",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero-students-bg.png",
        width: 1200,
        height: 630,
        alt: "Bright Minds Future Leaders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Minds Future Leaders | Private Micro School in New Caney, TX",
    description:
      "Award-winning private micro school in New Caney, TX. Personalized K-8 education with small class sizes.",
    images: ["/hero-students-bg.png"],
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
    generator: 'v0.app'
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
      </head>
      <body className={inter.className}>
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
