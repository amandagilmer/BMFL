import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Heart, Phone, Mail, Clock, GraduationCap, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private School Serving Kingwood, TX | Bright Minds Future Leaders",
  description:
    "Kingwood families choose our private micro school for elite education at accessible prices. Maximum 12 students, personalized learning plans, 15 minutes away. Tour today!",
  keywords:
    "private school Kingwood TX, Kingwood micro school, Humble ISD alternative Kingwood, small class sizes Kingwood, personalized education Kingwood, K-8 private school Texas, gifted education Kingwood",
  openGraph: {
    title: "Private School Serving Kingwood, TX | Bright Minds Future Leaders",
    description:
      "Kingwood families choose our private micro school for elite education at accessible prices. Maximum 12 students, personalized learning plans.",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bright Minds Future Leaders",
  image: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
  "@id": "https://brightmindsfutureleaders.com",
  url: "https://brightmindsfutureleaders.com",
  telephone: "(832) 957-7530",
  address: {
    "@type": "PostalAddress",
    streetAddress: "22893 Antique Ln",
    addressLocality: "New Caney",
    addressRegion: "TX",
    postalCode: "77357",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.1588,
    longitude: -95.2891,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Kingwood",
      "@id": "https://en.wikipedia.org/wiki/Kingwood,_Texas",
    },
    {
      "@type": "City",
      name: "New Caney",
    },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "18:30",
  },
}

export default function KingwoodPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-16">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-purple-600 mr-3" />
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Private School Serving <span className="text-purple-600">Kingwood, TX</span> Families
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto font-semibold">
              Kingwood's Choice for Personalized Private Education: Small Classes, Big Results
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
              Kingwood families appreciate our unique approach that combines small-town feel with high academic
              standards. Conveniently located just 15 minutes from Kingwood, many Kingwood parents specifically seek us
              out because they want more than what larger schools can provide—even other private schools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 text-lg rounded-lg"
              >
                <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Your Tour</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3 text-lg rounded-lg bg-transparent"
              >
                <a href="tel:+18329577530">Call (832) 957-7530</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/fire-truck-visit.png"
              alt="Kingwood TX private school students engaged in hands-on experiential learning with community connections"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Why Kingwood Families Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Kingwood Families Choose Bright Minds Future Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kingwood parents have high expectations. Here's how we exceed them with our personalized approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Award className="h-12 w-12 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Elite Education Without Elite Price</h3>
                    <p className="text-gray-700">
                      We provide top-tier education at accessible tuition rates. Kingwood families get the quality they
                      expect without the premium price tag of traditional private schools.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Users className="h-12 w-12 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Maximum 12 Students Per Class</h3>
                    <p className="text-gray-700">
                      Compared to 18-22 in other Kingwood area schools, our class sizes ensure every child receives the
                      individualized attention they deserve.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Heart className="h-12 w-12 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Individualized Attention</h3>
                    <p className="text-gray-700">
                      Every child has a personal learning plan customized to their needs and pace. No more
                      one-size-fits-all approach that leaves children behind or holds them back.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-12 w-12 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Learner Support</h3>
                    <p className="text-gray-700">
                      For gifted Kingwood students who need to move faster than traditional grade levels, we provide the
                      acceleration and enrichment they crave without grade skipping.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-12 w-12 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Struggling Learner Support</h3>
                    <p className="text-gray-700">
                      Without stigma or labels, we provide gentle intervention for students who need extra support,
                      meeting them where they are and building confidence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-12 w-12 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Strong Community Connections</h3>
                    <p className="text-gray-700">
                      Real-world learning experiences connect students to their community. Field trips, guest speakers,
                      and hands-on projects make learning meaningful and memorable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Images */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hands-On Learning for Kingwood Students</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our private micro school emphasizes experiential education through engaging activities and real-world
              problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/outdoor-activities-collage.png"
                alt="Kingwood TX private school students engaged in outdoor STEAM learning and nature exploration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
            </div>
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/girl-playing-ball.png"
                alt="Kingwood private school students developing physical education and motor skills through active play"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
            </div>
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/classroom-building-together.png"
                alt="Kingwood TX private school students collaborating on engineering and building projects in small groups"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for Kingwood Families */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Perfect for Kingwood Families</h2>
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Kingwood residents value education highly, and our approach aligns perfectly with those values. We
                  provide:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong className="text-purple-900">Rigor with flexibility</strong> – High standards that adapt to
                      each child's learning style
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong className="text-pink-900">High standards with compassion</strong> – We push students to
                      excel while supporting their emotional well-being
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong className="text-blue-900">Academic excellence with social-emotional growth</strong> –
                      Building both brilliant minds and strong character
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions from Kingwood Families
          </h2>

          <div className="space-y-6">
            <Card className="border-2 border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-3">
                  How far is your private school from Kingwood?
                </h3>
                <p className="text-gray-700">
                  Just 15 minutes via Highway 59! We have easy access from all Kingwood neighborhoods including Kingwood
                  proper, Forest Cove, Lakeshore, and surrounding areas. Many Kingwood families make this short commute
                  daily for the personalized education their child receives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-pink-900 mb-3">
                  Why do Kingwood parents choose a micro school over traditional Kingwood private schools?
                </h3>
                <p className="text-gray-700">
                  Even smaller classes (maximum 12 vs. 18-22), more flexibility in curriculum and pace, the ability to
                  truly customize education for each child, and often better value. Our micro school model provides even
                  more personalized attention than traditional private schools can offer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Do you serve gifted students from Kingwood?</h3>
                <p className="text-gray-700">
                  Yes! Many Kingwood gifted students thrive with us because we can move at their pace without grade
                  level constraints. We provide enrichment, acceleration, and depth without the social challenges of
                  grade skipping. Your gifted child can be challenged academically while staying with age-appropriate
                  peers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-3">
                  How does your cost compare to Kingwood area private schools?
                </h3>
                <p className="text-gray-700">
                  Very competitive! We're often more affordable than larger Kingwood private schools while providing
                  more personalized attention. We offer flexible payment plans to make quality private education
                  accessible to more Kingwood families. Call us at (832) 957-7530 to discuss tuition and payment
                  options.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-pink-900 mb-3">
                  Can my child still participate in Kingwood activities?
                </h3>
                <p className="text-gray-700">
                  Students maintain connections to the Kingwood community through sports, clubs, and activities. Many
                  families appreciate that their child gets personalized academics with us while still enjoying
                  Kingwood's excellent extracurricular offerings and community connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Location Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Easy Commute from Kingwood</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      22893 Antique Ln
                      <br />
                      New Caney, TX 77357
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Just 15 minutes from Kingwood via Highway 59</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+18329577530" className="text-purple-600 hover:text-purple-700 transition-colors">
                      (832) 957-7530
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@brightmindsfutureleaders.com"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      info@brightmindsfutureleaders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">School Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:30 AM - 3:30 PM
                      <br />
                      Office Hours: 7:30 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Kingwood & Surrounding Areas</h2>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-4">We Welcome Families From:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Kingwood</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Forest Cove</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Lakeshore</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <Link href="/areas/humble" className="text-purple-700 hover:text-purple-900 underline">
                      Humble
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <Link href="/areas/atascocita" className="text-purple-700 hover:text-purple-900 underline">
                      Atascocita
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <Link href="/areas/new-caney" className="text-purple-700 hover:text-purple-900 underline">
                      New Caney
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Kingwood Families: Experience the Difference</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Kingwood parents have high expectations, and we exceed them with our personalized approach that honors each
            child's unique gifts. Join the many Kingwood families who've discovered that elite education doesn't require
            an elite price tag—just a 15-minute drive to New Caney.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Your Kingwood Family Tour</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3 text-lg rounded-lg bg-transparent"
            >
              <a href="tel:+18329577530">Call (832) 957-7530</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
