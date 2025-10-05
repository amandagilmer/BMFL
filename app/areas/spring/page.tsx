import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Award, Users, BookOpen, TrendingUp, DollarSign, ArrowRight, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Private School for Spring, TX Families | Bright Minds Future Leaders",
  description:
    "Spring area families choose personalized micro school education. Max 12 students, individualized plans, 20 minutes away. Better than Klein/Spring ISD. Affordable elite education.",
}

export default function SpringAreaPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bright Minds Future Leaders",
            image: "https://brightmindsfutureleaders.com/logo-full.png",
            "@id": "https://brightmindsfutureleaders.com",
            url: "https://brightmindsfutureleaders.com",
            telephone: "(832) 957-7530",
            address: {
              "@type": "PostalAddress",
              streetAddress: "23526 FM 2090",
              addressLocality: "Splendora",
              addressRegion: "TX",
              postalCode: "77372",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 30.2305,
              longitude: -95.1618,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:00",
              closes: "18:00",
            },
            sameAs: ["https://www.facebook.com/BrightMindsFutureLeaders"],
            areaServed: {
              "@type": "City",
              name: "Spring",
              "@id": "https://en.wikipedia.org/wiki/Spring,_Texas",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 py-20">
          <div className="absolute inset-0 bg-black/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white pt-24">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-6 w-6" />
                <span className="font-semibold text-lg">Serving Spring, TX Families</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Private School Serving Spring, TX Families
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/95">
                Spring Families Discover Personalized Education - Elite Quality, Accessible Price, Just 20 Minutes Away
              </p>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Spring families have many private school options but choose us because we provide truly personalized
                micro school education with maximum 12 students per class—not 20-25 like other Spring area schools.
                Convenient 20-25 minute drive via I-45 to Highway 59. Many Spring parents specifically seek us out
                because they want more individualized attention than larger Klein or Spring ISD schools or even
                traditional private schools can provide with our one-on-one customized learning plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
                  <Link href="/contact">Schedule Your Tour</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                >
                  <Link href="/apply">Start Application</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/learning-by-doing-circles.png"
                alt="Spring TX private school students engaged in personalized hands-on learning with maximum 12 students per class"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </section>

        {/* Why Spring Families Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Why Spring Families Choose Bright Minds Future Leaders Over Other Options
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Spring families discover the perfect alternative to overcrowded public schools and overpriced private
                schools
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-t-4 border-purple-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Truly Small Classes</h3>
                    <p className="text-gray-600">
                      12 maximum actually means individualized attention—unlike Klein ISD averaging 28 or Spring ISD
                      averaging 26 students per class. Every child is truly known.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-pink-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <DollarSign className="h-12 w-12 text-pink-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Elite Education Without Elite Price</h3>
                    <p className="text-gray-600">
                      We provide private school quality that rivals expensive Spring area schools at accessible tuition
                      rates. Payment plans available for working families.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Advanced Learner Paradise</h3>
                    <p className="text-gray-600">
                      Gifted Spring students can accelerate beyond grade levels without being held back by
                      one-size-fits-all curriculum. Challenge meets capability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-purple-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Struggling Student Support</h3>
                    <p className="text-gray-600">
                      Children who need extra help get it without stigma or labels—just gentle individualized
                      intervention. We meet every child where they are.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-pink-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <BookOpen className="h-12 w-12 text-pink-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Real Academic Results</h3>
                    <p className="text-gray-600">
                      95% of students exceed grade-level expectations and parents see measurable growth. Our approach
                      delivers results traditional schools cannot match.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <Clock className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Convenient from Spring</h3>
                    <p className="text-gray-600">
                      Easy I-45 to Highway 59 route taking 20-25 minutes from most Spring neighborhoods. Worth every
                      minute for the education your child receives.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Images */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Personalized Learning in Action for Spring Students
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/girl-playing-ball.png"
                  alt="Spring TX private school students developing skills through hands-on play in small class setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/classroom-building-together.png"
                  alt="Spring area private school students collaborating on personalized STEAM projects with individualized attention"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/outdoor-activities-collage.png"
                  alt="Spring TX micro school students engaged in outdoor exploration and nature-based learning activities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Perfect Alternative Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Perfect Alternative for Spring Area Families
              </h2>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  Spring residents often feel caught between overcrowded public schools and overpriced private schools,
                  but our micro school model provides the best of both worlds with personalized attention of an elite
                  private school at an accessible price point.
                </p>
                <p className="text-lg text-gray-700">
                  Many Spring families from The Woodlands, Tomball, Klein, and surrounding areas have discovered we're
                  the missing link they were seeking—exceptional education quality without compromise on
                  individualization or affordability.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-purple-500">
                  <div className="text-4xl font-bold text-purple-600 mb-2">20-25</div>
                  <div className="text-gray-600">Minutes from Spring via I-45</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-pink-500">
                  <div className="text-4xl font-bold text-pink-600 mb-2">12 Max</div>
                  <div className="text-gray-600">Students Per Class</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-600">Exceed Grade Level</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions from Spring Families
              </h2>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-lg px-6 shadow-md">
                  <AccordionTrigger className="text-lg font-semibold hover:text-purple-600">
                    How far from Spring, Texas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    About 20-25 minutes via I-45 South to Highway 59 East. Accessible from Spring, The Woodlands,
                    Tomball, Klein, and surrounding North Houston areas. Many families find the drive easy and worth it
                    for the personalized education their children receive.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-lg px-6 shadow-md">
                  <AccordionTrigger className="text-lg font-semibold hover:text-purple-600">
                    Why choose you over Spring area private schools?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Even smaller classes with 12 maximum versus 18-25 at traditional private schools, plus truly
                    individualized learning plans for every student. We often provide better value—comparable or lower
                    tuition with more personalized attention. Our micro school model allows flexibility that larger
                    private schools simply cannot match.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-lg px-6 shadow-md">
                  <AccordionTrigger className="text-lg font-semibold hover:text-purple-600">
                    Do you serve gifted students from Spring?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Many Spring gifted students thrive with us because we can accelerate them without grade-level
                    constraints and provide appropriate challenge. If your child is bored in traditional school or needs
                    to move faster, our individualized approach allows them to progress at their optimal pace without
                    being held back.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-lg px-6 shadow-md">
                  <AccordionTrigger className="text-lg font-semibold hover:text-purple-600">
                    How does cost compare to Spring/Woodlands private schools?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Very competitive—often more affordable than larger brand-name private schools while providing more
                    personalized attention. We offer flexible payment plans designed for working families. When you
                    factor in the individualized education your child receives with maximum 12 students per class, we
                    provide tremendous value.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-lg px-6 shadow-md">
                  <AccordionTrigger className="text-lg font-semibold hover:text-purple-600">
                    Can you handle Klein ISD transfers or Spring ISD students switching mid-year?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! We welcome students from any district year-round and quickly assess to create a personalized
                    plan that addresses any gaps or advances any strengths. Many families transfer mid-year when they
                    realize their child is struggling in overcrowded classrooms or not being challenged appropriately.
                    We make the transition smooth and supportive.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Visit Our Campus</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Address</div>
                        <div className="text-gray-600">
                          22893 Antique Ln
                          <br />
                          New Caney, TX 77357
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Phone</div>
                        <a href="tel:8329577530" className="text-purple-600 hover:text-purple-700 font-semibold">
                          (832) 957-7530
                        </a>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Directions from Spring</div>
                        <div className="text-gray-600">I-45 South to Highway 59 East • 20-25 minutes</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">School Hours</div>
                        <div className="text-gray-600">Monday-Friday: 8:30 AM - 3:30 PM</div>
                        <div className="text-gray-600 text-sm mt-1">Office Hours: 7:30 AM - 5:00 PM</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Areas We Serve</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">Spring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-pink-600 flex-shrink-0" />
                        <span className="text-gray-700">The Woodlands</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">Tomball</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">Klein</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-pink-600 flex-shrink-0" />
                        <span className="text-gray-700">Champions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">New Caney</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Spring Families: Experience Truly Personalized Education
              </h2>
              <p className="text-xl mb-8 text-white/95">
                If you're a Spring area family frustrated with overcrowded classes or overpriced options, discover how
                our micro school provides elite education quality at an accessible price with truly individualized
                attention your child deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="/contact">
                    Schedule Your Tour Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
                >
                  <Link href="/apply">Start Application</Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-white/80">
                Serving Spring, The Woodlands, Tomball, Klein, Champions, and surrounding North Houston communities
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
