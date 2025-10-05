"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"

const FACEBOOK_PIXEL_ID = "414826608258340"

export function FacebookPixel() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page view on route change
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "PageView")
    }
  }, [pathname, searchParams])

  return (
    <>
      {/* Facebook Pixel Script */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Facebook Pixel Noscript */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

// Helper function for tracking custom events
export const trackFacebookEvent = (eventName: string, data?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    ;(window as any).fbq("track", eventName, data)
  }
}

// Helper function for tracking custom conversions
export const trackFacebookConversion = (eventName: string, data?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    ;(window as any).fbq("trackCustom", eventName, data)
  }
}
