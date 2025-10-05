export const siteConfig = {
  name: "Bright Minds Future Leaders",
  shortName: "BMFL",
  description:
    "Private micro school in New Caney, TX offering personalized, ability-based learning for students ages 5-12. Small class sizes (max 12 students) ensure every child receives individual attention.",
  url: "https://brightmindsfutureleaders.com",
  ogImage: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
  keywords: [
    "private school New Caney TX",
    "micro school Texas",
    "small class sizes",
    "personalized learning",
    "ability-based education",
    "private elementary school",
    "New Caney education",
    "Porter TX schools",
    "Humble private school",
    "Kingwood education",
  ],
  author: {
    name: "Angela Gilmer",
    title: "Founder & Lead Educator",
    email: "info@brightmindsfutureleaders.com",
  },
  contact: {
    phone: "+1-832-957-7530",
    email: "info@brightmindsfutureleaders.com",
    address: {
      street: "22893 Antique Ln",
      city: "New Caney",
      state: "TX",
      zip: "77357",
      country: "US",
    },
  },
  social: {
    facebook: "https://www.facebook.com/brightmindsfutureleaders",
    instagram: "https://www.instagram.com/brightmindsfutureleaders",
  },
  business: {
    hours: "Monday-Friday: 8:00 AM - 3:00 PM",
    founded: "2023",
    type: "PrivateSchool",
    priceRange: "$$",
  },
  areas: [
    {
      name: "New Caney",
      slug: "new-caney",
      distance: "Our primary location",
      priority: 0.95,
    },
    {
      name: "Porter",
      slug: "porter",
      distance: "5 miles from Porter",
      priority: 0.85,
    },
    {
      name: "Humble",
      slug: "humble",
      distance: "15 miles from Humble",
      priority: 0.85,
    },
    {
      name: "Kingwood",
      slug: "kingwood",
      distance: "12 miles from Kingwood",
      priority: 0.85,
    },
    {
      name: "Atascocita",
      slug: "atascocita",
      distance: "10 miles from Atascocita",
      priority: 0.85,
    },
    {
      name: "Spring",
      slug: "spring",
      distance: "18 miles from Spring",
      priority: 0.85,
    },
    {
      name: "Conroe",
      slug: "conroe",
      distance: "20 miles from Conroe",
      priority: 0.85,
    },
    {
      name: "The Woodlands",
      slug: "the-woodlands",
      distance: "22 miles from The Woodlands",
      priority: 0.85,
    },
  ],
}

export const defaultMetadata = {
  title: {
    default: "Bright Minds Future Leaders | Private Micro School in New Caney, TX",
    template: "%s | Bright Minds Future Leaders",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
    icon: "/logo-bright-minds.png",
    shortcut: "/logo-bright-minds.png",
    apple: "/logo-bright-minds.png",
  },
  manifest: "/manifest.json",
}
