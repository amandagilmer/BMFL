import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { MapPin, Phone, Mail, Clock, Award, Users, BookOpen, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Private School in New Caney, TX | Bright Minds Future Leaders",
  description:
    "Top-rated private micro school in New Caney, TX. Personalized K-8 education with small class sizes (max 12 students). Award-winning character development program. Enroll today!",
  keywords:
    "private school New Caney TX, micro school New Caney, small class sizes, K-8 education New Caney, personalized learning, character development",
  openGraph: {
    title: "Private School in New Caney, TX | Bright Minds Future Leaders",
    description:
      "Award-winning private micro school in New Caney with personalized K-8 education and small class sizes.",
    url: "https://www.brightmindsfutureleaders.com/areas/new-caney",
    images: [
      {
        url: "/hero-students-bg.png",
        width: 1200,
        height: 630,
        alt: "Bright Minds Future Leaders - New Caney",
      },
    ],
  },
}

export default function NewCaneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-blue-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full">
              <span className="text-purple-600 font-semibold">📍 New Caney, TX</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              New Caney's Premier Private Micro School
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Right here in New Caney! Personalized K-8 education with small class sizes and award-winning character
              development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-lg px-8 py-6"
              >
                <Link href="https://book.brightmindsfutureleaders.com/book">Schedule a Tour</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 bg-transparent"
              >
                <Link href="https://book.brightmindsfutureleaders.com/apply-now">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Why New Caney Families Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Small Class Sizes</h3>
                <p className="text-gray-600">Maximum 12 students per class for personalized attention</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Personalized Learning</h3>
                <p className="text-gray-600">Ability-based instruction tailored to each child</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Character First</h3>
                <p className="text-gray-600">Award-winning character development program</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Proven Excellence</h3>
                <p className="text-gray-600">Award-winning private education since 2019</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Conveniently Located in New Caney
            </h2>
            <Card className="shadow-2xl border-2 border-purple-100">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Visit Our Campus</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">Address</p>
                          <p className="text-gray-600">22893 Antique Ln, New Caney, TX 77357</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <a href="tel:832-957-7530" className="text-purple-600 hover:underline">
                            (832) 957-7530
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <a
                            href="mailto:info@brightmindsfutureleaders.com"
                            className="text-purple-600 hover:underline"
                          >
                            info@brightmindsfutureleaders.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">School Hours</p>
                          <p className="text-gray-600">Monday-Friday: 8:30 AM - 3:30 PM</p>
                          <p className="text-gray-600 text-sm">(Office Hours: 7:30 AM - 5:00 PM)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-20 h-20 text-purple-600 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-gray-900 mb-2">Easy to Find!</p>
                      <p className="text-gray-600">Located right in the heart of New Caney</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Visit Our Campus?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a tour today and see why New Caney families trust us with their children's education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Your Tour</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
