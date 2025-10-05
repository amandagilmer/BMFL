import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin, ArrowLeft, Tag, User } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "./blogPosts"
import { notFound } from "next/navigation"
import Image from "next/image"
import { TableOfContents } from "@/components/TableOfContents"
import { RelatedPosts } from "@/components/RelatedPosts"
import { InlineScheduleTourCTA } from "@/components/InlineScheduleTourCTA"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Post Not Found | BMFL Blog",
    }
  }

  const categoryMap: Record<string, string> = {
    "micro-schools-vs-traditional-schools": "Private School Tips",
    "5-signs-your-child-needs-smaller-class-sizes": "Parent Resources",
    "ability-based-learning-explained": "Private School Tips",
  }

  return {
    title: `${post.title} | BMFL Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author, url: "https://brightmindsfutureleaders.com/about" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      section: categoryMap[params.slug] || "Education",
      tags: post.tags,
      url: `https://brightmindsfutureleaders.com/blog/${post.slug}`,
      siteName: "Bright Minds Future Leaders",
      locale: "en_US",
      images: [
        {
          url: `https://brightmindsfutureleaders.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://brightmindsfutureleaders.com${post.image}`],
    },
    alternates: {
      canonical: `https://brightmindsfutureleaders.com/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  const categoryMap: Record<string, string> = {
    "micro-schools-vs-traditional-schools": "Private School Tips",
    "5-signs-your-child-needs-smaller-class-sizes": "Parent Resources",
    "ability-based-learning-explained": "Private School Tips",
  }

  const category = categoryMap[params.slug] || "Education"
  const shareUrl = `https://brightmindsfutureleaders.com/blog/${post.slug}`
  const shareTitle = encodeURIComponent(post.title)

  // Prepare related posts data
  const allPosts = Object.values(blogPosts).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    image: p.image,
    category: categoryMap[p.slug] || "Education",
    readTime: p.readTime,
    publishedAt: p.publishedAt,
  }))

  // Enhanced Article schema with complete markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: `https://brightmindsfutureleaders.com${post.image}`,
      width: 1200,
      height: 630,
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://brightmindsfutureleaders.com/about",
      jobTitle: "Founder & Lead Educator",
      description:
        "Angela Gilmer is the founder of Bright Minds Future Leaders with over 15 years of experience in education.",
      worksFor: {
        "@type": "PrivateSchool",
        name: "Bright Minds Future Leaders",
        url: "https://brightmindsfutureleaders.com",
      },
    },
    publisher: {
      "@type": "PrivateSchool",
      name: "Bright Minds Future Leaders",
      description: "Private micro school in New Caney, TX offering personalized, ability-based learning",
      url: "https://brightmindsfutureleaders.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "22893 Antique Ln",
        addressLocality: "New Caney",
        addressRegion: "TX",
        postalCode: "77357",
        addressCountry: "US",
      },
      telephone: "+1-832-957-7530",
      email: "info@brightmindsfutureleaders.com",
      logo: {
        "@type": "ImageObject",
        url: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
        width: 200,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
      url: shareUrl,
      name: post.title,
      description: post.excerpt,
    },
    keywords: post.tags.join(", "),
    articleSection: category,
    wordCount: post.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    commentCount: 0,
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://brightmindsfutureleaders.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://brightmindsfutureleaders.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: shareUrl,
      },
    ],
  }

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "PrivateSchool",
    name: "Bright Minds Future Leaders",
    alternateName: "BMFL",
    description: "Private micro school in New Caney, TX offering personalized, ability-based learning",
    url: "https://brightmindsfutureleaders.com",
    logo: {
      "@type": "ImageObject",
      url: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
    },
    image: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
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
    founder: {
      "@type": "Person",
      name: "Angela Gilmer",
      jobTitle: "Founder & Lead Educator",
    },
    sameAs: ["https://www.facebook.com/brightmindsfutureleaders", "https://www.instagram.com/brightmindsfutureleaders"],
  }

  // Split content to insert inline CTA
  const contentParts = post.content.split("</h2>")
  const firstPart = contentParts.slice(0, 2).join("</h2>") + "</h2>"
  const secondPart = contentParts.slice(2).join("</h2>")

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <div className="min-h-screen bg-white" itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="datePublished" content={post.publishedAt} />
        <meta itemProp="dateModified" content={post.publishedAt} />
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="description" content={post.excerpt} />
        <meta itemProp="image" content={`https://brightmindsfutureleaders.com${post.image}`} />
        <meta itemProp="author" content={post.author} />
        <meta itemProp="publisher" content="Bright Minds Future Leaders" />
        <meta itemProp="inLanguage" content="en-US" />
        <meta
          itemProp="wordCount"
          content={post.content
            .replace(/<[^>]*>/g, "")
            .split(/\s+/)
            .length.toString()}
        />

        <Header />

        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-4 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="text-gray-500 hover:text-gray-700" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/blog" className="text-gray-500 hover:text-gray-700" itemProp="item">
                  <span itemProp="name">Blog</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-gray-900 font-medium truncate max-w-xs" aria-current="page" itemProp="name">
                  {post.title}
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="py-12 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <div className="mb-6">
              <span
                className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                itemProp="articleSection"
              >
                {category}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" itemProp="headline">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900" itemProp="name">
                    {post.author}
                  </p>
                  <p className="text-sm text-gray-500" itemProp="jobTitle">
                    Educator & Founder
                  </p>
                  <meta itemProp="url" content="https://brightmindsfutureleaders.com/about" />
                </div>
              </div>
              <span className="hidden sm:inline">•</span>
              <time className="flex items-center" dateTime={post.publishedAt} itemProp="datePublished">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {post.readTime}
              </span>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
              <Share2 className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-600 mr-2">Share:</span>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 bg-transparent"
                aria-label="Share on Twitter"
              >
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 bg-transparent"
                aria-label="Share on Facebook"
              >
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 bg-transparent"
                aria-label="Share on LinkedIn"
              >
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              <meta itemProp="url" content={`https://brightmindsfutureleaders.com${post.image}`} />
              <meta itemProp="width" content="1200" />
              <meta itemProp="height" content="630" />
            </div>
          </div>
        </section>

        {/* Article Content with Table of Contents */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <article className="lg:col-span-8" itemProp="articleBody">
                {/* First part of content */}
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:scroll-mt-24
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-900 prose-strong:font-semibold
                    prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                    prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-gray-700 prose-li:mb-2
                    prose-blockquote:border-l-4 prose-blockquote:border-purple-500 
                    prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                    prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg
                    prose-img:rounded-lg prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: firstPart }}
                />

                {/* Inline CTA */}
                <InlineScheduleTourCTA />

                {/* Second part of content */}
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:scroll-mt-24
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-900 prose-strong:font-semibold
                    prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                    prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-gray-700 prose-li:mb-2
                    prose-blockquote:border-l-4 prose-blockquote:border-purple-500 
                    prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                    prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg
                    prose-img:rounded-lg prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: secondPart }}
                />
              </article>

              {/* Sidebar with Table of Contents */}
              <aside className="lg:col-span-4">
                <TableOfContents content={post.content} />
              </aside>
            </div>
          </div>
        </div>

        {/* Tags */}
        <section className="py-8 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-gray-900">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 transition-colors"
                  itemProp="keywords"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 shadow-md" itemScope itemType="https://schema.org/Person">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/angela-gilmer-students.jpeg"
                      alt="Angela Gilmer with students"
                      fill
                      className="object-cover"
                      itemProp="image"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" itemProp="name">
                    About Angela Gilmer
                  </h3>
                  <p className="text-purple-600 font-semibold mb-4" itemProp="jobTitle">
                    Founder & Lead Educator
                  </p>
                  <div className="space-y-4 text-gray-700" itemProp="description">
                    <p>
                      Angela Gilmer is the founder of Bright Minds Future Leaders, a private micro school in New Caney,
                      TX. With over 15 years of experience in education, she has dedicated her career to transforming
                      how children learn and grow.
                    </p>
                    <p>
                      Angela's passion for personalized learning stems from witnessing countless children struggle in
                      traditional classroom settings. After years in conventional education, she founded BMFL to create
                      an environment where every child receives the individualized attention they need to truly thrive.
                    </p>
                    <p>
                      Her approach combines ability-based instruction, small class sizes (maximum 12 students), and a
                      nurturing environment where children develop not just academically, but emotionally and socially
                      as well. Angela believes that every child deserves to feel known, valued, and capable of reaching
                      their full potential.
                    </p>
                    <p className="text-sm italic text-gray-600 pt-2">
                      "Education isn't about teaching to grade level—it's about meeting each child exactly where they
                      are and helping them discover their unique gifts. When children feel truly seen and supported,
                      there's no limit to what they can achieve."
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild className="bg-purple-600 hover:bg-purple-700">
                      <Link href="/about">Learn More About Our Approach</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                  <meta itemProp="url" content="https://brightmindsfutureleaders.com/about" />
                  <meta itemProp="worksFor" content="Bright Minds Future Leaders" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <RelatedPosts posts={allPosts} currentSlug={params.slug} />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to See the Difference?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how personalized, ability-based learning in a small classroom can help your child thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6"
              >
                <Link href="https://book.brightmindsfutureleaders.com/book">Schedule a Tour</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold text-lg px-8 py-6 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
