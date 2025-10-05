export interface TrackingEvent {
  event: string
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: any
}

export interface FormTrackingData {
  form_name: string
  form_location: string
  user_type?: string
}

export interface ContactTrackingData {
  contact_method: "phone" | "email" | "form"
  location: string
  page: string
}

export interface ButtonTrackingData {
  button_name: string
  button_location: string
  page: string
  section?: string
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
    dataLayer: any[]
  }
}
