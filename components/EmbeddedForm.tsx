"use client"

import { useEffect } from "react"

interface EmbeddedFormProps {
  title?: string
  description?: string
  embedCode: string
  className?: string
}

export default function EmbeddedForm({ title, description, embedCode, className = "" }: EmbeddedFormProps) {
  useEffect(() => {
    // Re-execute any scripts in the embed code after component mounts
    const container = document.getElementById("embedded-form-container")
    if (!container) return

    const scripts = container.querySelectorAll("script")
    scripts.forEach((script) => {
      const newScript = document.createElement("script")
      Array.from(script.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value)
      })
      if (script.src) {
        newScript.src = script.src
      } else {
        newScript.textContent = script.textContent
      }
      script.parentNode?.replaceChild(newScript, script)
    })
  }, [embedCode])

  return (
    <div className={className}>
      {title && <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>}
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      <div id="embedded-form-container" dangerouslySetInnerHTML={{ __html: embedCode }} />
    </div>
  )
}
