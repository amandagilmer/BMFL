"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
    dataLayer: any[]
  }
}

export const trackEvent = {
  phoneClick: () => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if (window.gtag) {
        window.gtag("event", "phone_click", {
          event_category: "engagement",
          event_label: "header_phone",
        })
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq("track", "Contact", {
          method: "phone",
        })
      }
    }
  },

  tourSchedule: () => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if (window.gtag) {
        window.gtag("event", "tour_schedule_click", {
          event_category: "conversion",
          event_label: "header_tour_button",
        })
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq("track", "Schedule", {
          content_name: "Online Tour",
        })
      }
    }
  },

  assessmentSchedule: () => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if (window.gtag) {
        window.gtag("event", "assessment_schedule_click", {
          event_category: "conversion",
          event_label: "hero_assessment_button",
        })
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq("track", "Schedule", {
          content_name: "Child Assessment",
        })
      }
    }
  },

  learnMoreClick: () => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if (window.gtag) {
        window.gtag("event", "learn_more_click", {
          event_category: "engagement",
          event_label: "hero_learn_more_button",
        })
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq("track", "ViewContent", {
          content_name: "Our Approach",
        })
      }
    }
  },
}

export function TrackingEvents() {
  useEffect(() => {
    // Track page view
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView")
    }
  }, [])

  return null
}
