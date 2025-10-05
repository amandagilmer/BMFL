import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BlogSidebar } from "@/components/BlogSidebar"
import { blogPosts } from "./[slug]/blogPosts"

export const metadata: Metadata = {
  title: "Private School Resources & Insights | BMFL Blog",
  description:
    "Expert insights on private education, micro schools, ability-based learning, and personalized education for students in New Caney, TX and surrounding areas.",
  keywords:
    "private school blog, micro school insights, ability-based learning, personalized education, New Caney education, small class sizes, private school tips",
  authors: [{ name: "Angela Gilmer", url: "https://brightmindsfutureleaders.com/about" }],
  openGraph: {
    title: "Private School Resources & Insights | BMFL Blog",
    description:
      "Expert insights on private education, micro schools, and personalized learning from Bright Minds Future Leaders.",
    type: "website",
    url: "https://brightmindsfutureleaders.com/blog",
    siteName: "Bright Minds Future Leaders",
    locale: "en_US",
    images: [
      {
        url: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
        width: 1200,
        height: 630,
        alt: "Bright Minds Future Leaders Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private School Resources & Insights | BMFL Blog",
    description: "Expert insights on private education and personalized learning.",
    images: ["https://brightmindsfutureleaders.com/logo-bright-minds.png"],
  },
  alternates: {
    canonical: "https://brightmindsfutureleaders.com/blog",
  },
}

export default function BlogPage() {
  const categoryMap: Record<string, string> = {
    "micro-schools-vs-traditional-schools": "Private School Tips",
    "5-signs-your-child-needs-smaller-class-sizes": "Parent Resources",
    "ability-based-learning-explained": "Private School Tips",
  }

  const posts = Object.values(blogPosts).map((post) => ({
    ...post,
    category: categoryMap[post.slug] || "Education",
  }))

  const categories = [
    { name: "Private School Tips", count: 2 },
    { name: "New Caney Education", count: 0 },
    { name: "Parent Resources", count: 1 },
    { name: "Student Success", count: 0 },
  ]

  const recentPosts = posts.slice(0, 3)

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Bright Minds Future Leaders Blog",
    description:
      "Expert insights on private education, micro schools, ability-based learning, and personalized education.",
    url: "https://brightmindsfutureleaders.com/blog",
    publisher: {
      "@type": "PrivateSchool",
      name: "Bright Minds Future Leaders",
      description: "Private micro school in New Caney, TX",
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
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: `https://brightmindsfutureleaders.com${post.image}`,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author,
        url: "https://brightmindsfutureleaders.com/about",
      },
      url: `https://brightmindsfutureleaders.com/blog/${post.slug}`,
    })),
  }

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
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        <Header />

        <nav className="bg-white py-4 shadow-sm" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-4 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-semibold" aria-current="page">
                  Blog
                </span>
              </li>
            </ol>
          </div>
        </nav>

        <section className="py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold">
                Educational Insights
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Private School Resources & Insights</h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Expert guidance on private education, micro schools, ability-based learning, and helping your child thrive
              in a personalized learning environment.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <main className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {posts.map((post) => (
                    <article
                      key={post.slug}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-200"
                      itemScope
                      itemType="https://schema.org/BlogPosting"
                    >
                      <Link href={`/blog/${post.slug}`} className="block">
                        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            itemProp="image"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <time className="flex items-center" dateTime={post.publishedAt} itemProp="datePublished">
                              <Calendar className="w-4 h-4 mr-1.5" />
                              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </time>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1.5" />
                              {post.readTime}
                            </span>
                          </div>

                          <h2
                            className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2 leading-tight"
                            itemProp="headline"
                          >
                            {post.title}
                          </h2>

                          <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed" itemProp="description">
                            {post.excerpt}
                          </p>

                          <Button
                            variant="ghost"
                            className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 h-auto font-bold group"
                          >
                            Read More
                            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                          </Button>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </main>

              <aside className="lg:col-span-4">
                <BlogSidebar recentPosts={recentPosts} categories={categories} />
              </aside>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the BMFL Difference?</h2>
            <p className="text-xl mb-10 text-white/95 leading-relaxed">
              Discover how personalized, ability-based learning in a small classroom environment can transform your
              child's educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all"
              >
                <Link href="https://book.brightmindsfutureleaders.com/book">Schedule a Tour</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-4 border-white text-white hover:bg-white hover:text-purple-600 font-bold text-lg px-10 py-7 rounded-full bg-transparent shadow-2xl transition-all"
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
