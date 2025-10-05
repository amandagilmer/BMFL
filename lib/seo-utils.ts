import { siteConfig } from "./seo-config"

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PrivateSchool",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.1588,
      longitude: -95.1866,
    },
    founder: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.title,
    },
    priceRange: siteConfig.business.priceRange,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "15:00",
      },
    ],
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    image: siteConfig.ogImage,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo-bright-minds.png`,
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: article.author,
      url: `${siteConfig.url}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo-bright-minds.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateLocationPageSchema(location: {
  city: string
  state: string
  distance: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/areas/${location.city.toLowerCase().replace(/\s+/g, "-")}`,
    name: `${siteConfig.name} - Serving ${location.city}, ${location.state}`,
    description: `Private micro school serving families in ${location.city}, TX. ${location.distance} away. Small class sizes, personalized learning, ability-based education.`,
    url: `${siteConfig.url}/areas/${location.city.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: siteConfig.contact.address.country,
    },
    areaServed: {
      "@type": "City",
      name: location.city,
      containedIn: {
        "@type": "State",
        name: "Texas",
      },
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 30.1588,
        longitude: -95.1866,
      },
      geoRadius: "25000",
    },
  }
}
