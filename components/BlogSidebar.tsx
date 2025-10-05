"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar, Tag } from "lucide-react"

interface BlogPost {
  slug: string
  title: string
  publishedAt: string
  category: string
  image: string
}

interface BlogSidebarProps {
  recentPosts: BlogPost[]
  categories: { name: string; count: number }[]
  currentCategory?: string
}

export function BlogSidebar({ recentPosts, categories, currentCategory }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/blog?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <aside className="space-y-6">
      <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="bg-gradient-to-br from-purple-50 to-blue-50 border-b-2 border-gray-200">
          <CardTitle className="text-xl flex items-center">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Search className="w-5 h-5 text-white" />
            </div>
            Search Articles
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSearch}>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-2 border-gray-300 focus:border-purple-600 rounded-lg"
              />
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700 rounded-lg px-6">
                <Search className="w-4 h-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="bg-gradient-to-br from-purple-50 to-blue-50 border-b-2 border-gray-200">
          <CardTitle className="text-xl flex items-center">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Tag className="w-5 h-5 text-white" />
            </div>
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={`/blog?category=${encodeURIComponent(category.name)}`}
                  className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all ${
                    currentCategory === category.name
                      ? "bg-purple-600 text-white font-bold shadow-md"
                      : "hover:bg-purple-50 text-gray-700 hover:text-purple-700"
                  }`}
                >
                  <span className="font-medium">{category.name}</span>
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      currentCategory === category.name ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="bg-gradient-to-br from-purple-50 to-blue-50 border-b-2 border-gray-200">
          <CardTitle className="text-xl flex items-center">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-5">
            {recentPosts.map((post) => (
              <li key={post.slug} className="border-b border-gray-200 last:border-0 pb-5 last:pb-0">
                <Link href={`/blog/${post.slug}`} className="group flex gap-4">
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 text-sm mb-2 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1.5" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-500 text-white border-4 border-white shadow-2xl">
        <CardContent className="p-8">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Ready to Learn More?</h3>
            <p className="text-white/95 mb-6 text-base leading-relaxed">
              Schedule a tour to see how our micro school can help your child thrive with personalized learning.
            </p>
          </div>
          <Button
            asChild
            className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            <Link href="https://book.brightmindsfutureleaders.com/book">Schedule a Tour</Link>
          </Button>
        </CardContent>
      </Card>
    </aside>
  )
}
