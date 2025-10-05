import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RelatedPost {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  readTime: string
  publishedAt: string
}

interface RelatedPostsProps {
  posts: RelatedPost[]
  currentSlug: string
}

export function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  const relatedPosts = posts.filter((post) => post.slug !== currentSlug).slice(0, 3)

  if (relatedPosts.length === 0) return null

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Keep Learning
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Continue Reading</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore more insights about private education, personalized learning, and student success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {relatedPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
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

                  <h3
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2 leading-tight"
                    itemProp="headline"
                  >
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed" itemProp="description">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-6 text-lg rounded-full transition-all bg-transparent"
          >
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
