"use client"

import { useEffect } from "react"

export function ContactFormEmbed() {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement("script")
    script.src = "https://sites.brightmindsfutureleaders.com/js/form_embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="w-full h-full min-h-[800px]">
      <iframe
        src="https://sites.brightmindsfutureleaders.com/widget/form/uKJPQPNxVzsvHoa4OsRJ"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "800px",
          border: "none",
          borderRadius: "20px",
        }}
        id="inline-uKJPQPNxVzsvHoa4OsRJ"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Drop us a message"
        data-height="755"
        data-layout-iframe-id="inline-uKJPQPNxVzsvHoa4OsRJ"
        data-form-id="uKJPQPNxVzsvHoa4OsRJ"
        title="Drop us a message"
      />
    </div>
  )
}

export default ContactFormEmbed
