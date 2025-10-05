import type { Metadata } from "next"

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/hero-students-bg.png",
}: {
  title: string
  description: string
  path?: string
  image?: string
}): Metadata {
  const url = `https://brightmindsfutureleaders.com${path}`
  const fullTitle = `${title} | Bright Minds Future Leaders`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Bright Minds Future Leaders",
      images: [
        {
          url: `https://brightmindsfutureleaders.com${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`https://brightmindsfutureleaders.com${image}`],
      creator: "@brightmindstx",
      site: "@brightmindstx",
    },
  }
}

export function generateAreaMetadata({
  city,
  state = "TX",
  distance,
  neighborhoods,
}: {
  city: string
  state?: string
  distance: string
  neighborhoods: string[]
}): Metadata {
  const title = `Private School Near ${city}, ${state}`
  const description = `Private micro school serving ${city}, TX families. Small classes, personalized learning for K-8. Just ${distance} from ${city}. Enroll today!`
  const path = `/areas/${city.toLowerCase().replace(/\s+/g, "-")}`

  return generatePageMetadata({ title, description, path })
}
