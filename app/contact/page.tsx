import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { ContactFormEmbed } from "@/components/ContactFormEmbed"

export const metadata = {
  title: "Contact Us | Bright Minds Future Leaders - Get in Touch",
  description:
    "Contact Bright Minds Future Leaders to schedule a tour, ask questions, or learn more about our neurodiversity-affirming school in New Caney, TX. We're here to help!",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions about our neurodiversity-affirming approach? Ready to schedule a tour? We're here to help
            your family find the right educational fit.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Quick Contact Cards */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <a href="tel:+18329577530" className="text-purple-600 hover:text-purple-700 font-semibold">
                  (832) 957-7530
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <a
                  href="mailto:info@brightmindsfutureleaders.com"
                  className="text-pink-600 hover:text-pink-700 font-semibold"
                >
                  info@brightmindsfutureleaders.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <a
                  href="https://maps.google.com/?q=22893+Antique+Ln,+New+Caney,+TX+77357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  22893 Antique Ln
                  <br />
                  New Caney, TX 77357
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Main Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Form */}
              <div className="p-8 lg:p-12 flex flex-col" style={{ minHeight: "850px" }}>
                <ContactFormEmbed />
              </div>

              {/* Info Sidebar */}
              <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 p-8 lg:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Why Reach Out?</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Schedule a Tour</h3>
                      <p className="text-white/90">
                        See our classrooms, meet our educators, and experience our neurodiversity-affirming approach
                        firsthand.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Ask Questions</h3>
                      <p className="text-white/90">
                        Every child and family is unique. We're here to answer your specific questions about our
                        programs and approach.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Discuss Enrollment</h3>
                      <p className="text-white/90">
                        Learn about our enrollment process, tuition options, and how we can support your child's
                        educational journey.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">School Hours</h4>
                      <p className="text-white/90 text-sm">Monday - Friday</p>
                      <p className="text-white/90 text-sm">8:30 AM - 3:30 PM</p>
                      <p className="text-white/90 text-sm mt-2">Office Hours: 7:30 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-600">Conveniently located in New Caney, serving families throughout the area</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.123456789!2d-95.123456!3d30.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z22893+Antique+Ln,+New+Caney,+TX+77357!5e0!3m2!1sen!2sus!4v1234567890"
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a tour to see how we celebrate neurodiversity and support every child's unique learning style.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Your Tour</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
