import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ContactFormEmbed } from "@/components/ContactFormEmbed"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Bright Minds Future Leaders private school in New Caney, TX. Schedule a tour, ask questions, or learn more about our personalized K-8 education program.",
  openGraph: {
    title: "Contact Us | Bright Minds Future Leaders",
    description:
      "Get in touch with Bright Minds Future Leaders. Schedule a tour of our New Caney private school or ask questions about our personalized K-8 program.",
    url: "https://brightmindsfutureleaders.com/contact",
  },
}

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Bright Minds Future Leaders",
    description: "Contact information and form for Bright Minds Future Leaders private school in New Caney, TX",
    url: "https://brightmindsfutureleaders.com/contact",
    mainEntity: {
      "@type": "PrivateSchool",
      name: "Bright Minds Future Leaders",
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
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <Header />

        <main className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our private school in New Caney? We'd love to hear from you. Schedule a tour or
                reach out to learn more about how we can support your child's educational journey.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 border-purple-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <a href="tel:+18329577530" className="text-purple-600 hover:text-purple-700 font-semibold">
                    (832) 957-7530
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Mail className="h-10 w-10 text-pink-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a
                    href="mailto:info@brightmindsfutureleaders.com"
                    className="text-pink-600 hover:text-pink-700 font-semibold break-all text-sm"
                  >
                    info@brightmindsfutureleaders.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-gray-700 text-sm">
                    22893 Antique Ln
                    <br />
                    New Caney, TX 77357
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Clock className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Hours</h3>
                  <p className="text-gray-700 text-sm">
                    School: 8:30 AM - 3:30 PM
                    <br />
                    Office: 7:30 AM - 5:00 PM
                    <br />
                    Monday - Friday
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Form and Map Section */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Form */}
                <div className="p-8 lg:p-12 flex flex-col" style={{ minHeight: "800px" }}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <ContactFormEmbed />
                </div>

                {/* Map */}
                <div className="bg-gray-100 p-8 lg:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Campus</h2>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.5!2d-95.1849!3d30.1588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzMxLjciTiA5NcKwMTEnMDUuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Bright Minds Future Leaders Location"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600">22893 Antique Ln, New Caney, TX 77357</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <a href="tel:+18329577530" className="text-purple-600 hover:text-purple-700">
                          (832) 957-7530
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a
                          href="mailto:info@brightmindsfutureleaders.com"
                          className="text-purple-600 hover:text-purple-700 break-all"
                        >
                          info@brightmindsfutureleaders.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Hours</p>
                        <p className="text-gray-600">
                          School: Monday-Friday, 8:30 AM - 3:30 PM
                          <br />
                          Office: Monday-Friday, 7:30 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="https://book.brightmindsfutureleaders.com/book"
                      className="inline-block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                    >
                      Schedule a Tour
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
