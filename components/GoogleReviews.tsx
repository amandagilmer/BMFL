"use client"

import { useEffect } from "react"

export default function GoogleReviews() {
  useEffect(() => {
    // Load the review widget script
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://sites.brightmindsfutureleaders.com/reputation/assets/review-widget.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector(
        'script[src="https://sites.brightmindsfutureleaders.com/reputation/assets/review-widget.js"]',
      )
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Families Are <span className="text-purple-600">Saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what families in our community have to say about their experience.
          </p>
        </div>

        <div className="w-full">
          <iframe
            className="lc_reviews_widget w-full min-h-[400px] border-0"
            src="https://sites.brightmindsfutureleaders.com/reputation/widgets/review_widget/9ktSIDF2DRY18w15KbcH"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%" }}
            title="Google Reviews for Bright Minds Future Leaders"
          />
        </div>
      </div>
    </section>
  )
}
