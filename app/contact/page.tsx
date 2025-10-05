import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ContactFormEmbed } from "@/components/ContactFormEmbed"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bright Minds Future Leaders. Schedule a tour, ask questions, or learn more about our private micro school in New Caney, TX.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 text-white py-20">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              We'd love to hear from you! Schedule a tour or ask us anything about our school.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Form */}
                <div className="p-8 lg:p-12 flex flex-col">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                    Send Us a Message
                  </h2>
                  <div className="flex-grow">
                    <ContactFormEmbed />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Visit Us</h2>

                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                        <a href="tel:+18329577530" className="text-gray-700 hover:text-purple-600 transition-colors">
                          (832) 957-7530
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <a
                          href="mailto:info@brightmindsfutureleaders.com"
                          className="text-gray-700 hover:text-pink-600 transition-colors"
                        >
                          info@brightmindsfutureleaders.com
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Address</h3>
                        <address className="text-gray-700 not-italic">
                          22893 Antique Ln
                          <br />
                          New Caney, TX 77357
                        </address>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=22893+Antique+Ln+New+Caney+TX+77357"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-blue-600 hover:text-blue-800 underline"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">School Hours</h3>
                        <p className="text-gray-700">Monday - Friday</p>
                        <p className="text-gray-700">8:30 AM - 3:30 PM</p>
                        <p className="text-gray-600 text-sm mt-1">(Office Hours: 7:30 AM - 5:00 PM)</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-8 border-t border-gray-300">
                    <h3 className="font-semibold text-lg mb-4">Ready to Visit?</h3>
                    <a
                      href="https://book.brightmindsfutureleaders.com/book"
                      className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Schedule a Tour
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12">
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: "450px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456789!2d-95.1849!3d30.1588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzMxLjciTiA5NcKwMTEnMDUuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bright Minds Future Leaders Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
