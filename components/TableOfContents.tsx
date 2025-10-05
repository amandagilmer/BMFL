"use client"

import { useEffect, useState } from "react"
import { List } from "lucide-react"

interface Heading {
  id: string
  text: string
}

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = content
    const h2Elements = tempDiv.querySelectorAll("h2")

    const extractedHeadings: Heading[] = Array.from(h2Elements).map((h2, index) => {
      const text = h2.textContent || ""
      const id = `heading-${index}`
      return { id, text }
    })

    setHeadings(extractedHeadings)

    const actualH2s = document.querySelectorAll(".prose h2")
    actualH2s.forEach((h2, index) => {
      h2.id = `heading-${index}`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-100px 0px -80% 0px",
      },
    )

    actualH2s.forEach((h2) => observer.observe(h2))

    return () => {
      actualH2s.forEach((h2) => observer.unobserve(h2))
    }
  }, [content])

  if (headings.length === 0) return null

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="sticky top-24">
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
            <List className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">Table of Contents</h3>
        </div>
        <nav>
          <ul className="space-y-1">
            {headings.map((heading) => (
              <li key={heading.id}>
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`text-left text-sm w-full px-4 py-3 rounded-lg transition-all ${
                    activeId === heading.id
                      ? "bg-purple-600 text-white font-semibold shadow-sm"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
