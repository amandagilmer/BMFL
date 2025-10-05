import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Phone, MapPin, Clock, Users, Award, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Private School Near Huffman, TX | Bright Minds Future Leaders",
  description:
    "Huffman families choose personalized private education just 15 minutes away. Micro school with max 12 students, flexible learning pace. Serving East Harris County.",
  openGraph: {
    title: "Private School Near Huffman, TX | Bright Minds Future Leaders",
    description:
      "Huffman families choose personalized private education just 15 minutes away. Micro school with max 12 students, flexible learning pace. Serving East Harris County.",
    url: "https://brightmindsfutureleaders.com/areas/huffman",
    siteName: "Bright Minds Future Leaders",
    locale: "en_US",
    type: "website",
  },
}

export default function HuffmanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bright Minds Future Leaders",
    image: "https://brightmindsfutureleaders.com/logo-full.png",
    "@id": "https://brightmindsfutureleaders.com",
    url: "https://brightmindsfutureleaders.com",
    telephone: "832-957-7530",
    address: {
      "@type": "PostalAddress",
      streetAddress: "20870 Eva St",
      addressLocality: "New Caney",
      addressRegion: "TX",
      postalCode: "77357",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.1488,
      longitude: -95.1869,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Huffman",
        "@id": "https://en.wikipedia.org/wiki/Huffman,_Texas",
      },
      {
        "@type": "City",
        name: "Crosby",
      },
      {
        "@type": "City",
        name: "New Caney",
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:30",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10 pt-28">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Private School Serving Huffman, TX Families
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Huffman's Choice for Private Education - Small Classes, Individual Attention, Real Results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:832-957-7530"
                  className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 832-957-7530
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-purple-900/50 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900/70 transition-colors border-2 border-white/30"
                >
                  Schedule Your Tour
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Huffman families love our <strong>private micro school</strong> because we're conveniently located
                  just <strong>15-20 minutes away via FM 1960 and Highway 59</strong>. We provide the personalized
                  education Huffman parents want without having to drive into Humble or Houston.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Our approach resonates with Huffman's family-oriented community, where people value personal
                  relationships. We extend that same philosophy to education with{" "}
                  <strong>maximum 12 students per class</strong>, ensuring every child receives the individualized
                  attention they deserve.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Unlike traditional private schools or large public schools, our private micro school model means your
                  child is never lost in the crowd. Every student is truly known, valued, and challenged at their own
                  pace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Why Huffman Families Choose Bright Minds Future Leaders
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Benefit 1 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-4">
                    <MapPin className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Convenient Location</h3>
                      <p className="text-gray-700">
                        We're closer than most Humble private schools and much closer than Houston schools. Just 15-20
                        minutes from Huffman means easy morning drop-off even for working parents.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-pink-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-4">
                    <Users className="w-8 h-8 text-pink-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">True Small Classes</h3>
                      <p className="text-gray-700">
                        <strong>12 students maximum</strong> - not 20-25 like other area private schools claim is
                        "small." This ensures genuine personalized attention for every child.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-4">
                    <Heart className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Every Child Truly Known</h3>
                      <p className="text-gray-700">
                        Teachers know each student's learning style, strengths, challenges, and interests - not just
                        their name. Your child is seen, heard, and supported every single day.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-4">
                    <Award className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Hands-On Learning</h3>
                      <p className="text-gray-700">
                        We engage Huffman kids through real-world experiences, not just textbooks. Learning by doing
                        creates deeper understanding and genuine love of learning.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 5 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-pink-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-4">
                    <Clock className="w-8 h-8 text-pink-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Personalized Pace</h3>
                      <p className="text-gray-700">
                        Advanced learners can accelerate and struggling students get support without labels or stigma.
                        We meet every child exactly where they are.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 6 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-4">
                    <Phone className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable for Huffman Families</h3>
                      <p className="text-gray-700">
                        Competitive tuition with payment plans that work for East Harris County budgets. Quality private
                        education shouldn't be out of reach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect Location Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Perfect Location for Huffman Families
              </h2>
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-2xl p-8 md:p-12 shadow-xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-600 mb-2">15-20 min</div>
                    <div className="text-gray-700 font-medium">From Huffman</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <Users className="w-12 h-12 text-pink-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-pink-600 mb-2">Max 12</div>
                    <div className="text-gray-700 font-medium">Students Per Class</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-gray-700 font-medium">Exceed Grade Level</div>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <strong>Easy access via FM 1960 to Highway 59</strong> takes just 15-20 minutes from Huffman, making
                    morning drop-off convenient even for working parents. The drive is straightforward and manageable
                    for busy families.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Many Huffman families already make the drive because the personalized education their children
                    receive is <strong>worth every minute</strong>. Parents tell us that seeing their child thrive with
                    individual attention makes the commute feel like nothing at all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Images */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/students-outdoor-learning.png"
                    alt="Huffman students engaged in hands-on outdoor learning at private micro school"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/classroom-building-together.png"
                    alt="Small class size personalized learning for Huffman families at Bright Minds Future Leaders"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/learning-by-doing-puzzle.png"
                    alt="Huffman private school alternative with individualized education and max 12 students"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions from Huffman Families
              </h2>
              <div className="space-y-8">
                {/* FAQ 1 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">How far is your school from Huffman, TX?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Just <strong>15-20 minutes via FM 1960 to Highway 59</strong>. It's an easy drive from Huffman,
                    Crosby area, and throughout east Harris County. Many families find the commute very manageable,
                    especially compared to driving into Humble or Houston.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Why do Huffman parents choose a micro school over Humble private schools?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're <strong>closer, more affordable, and provide even smaller classes</strong> with maximum 12
                    students compared to 18-25 in traditional Humble area private schools. Our micro school model offers
                    true personalization that larger private schools simply cannot provide. Plus, you save time and gas
                    by not driving as far.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Do you understand Huffman area families?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes! Many of our families come from Huffman, Crosby, and surrounding areas. We appreciate the{" "}
                    <strong>family-oriented community values of East Harris County</strong>. Our approach emphasizes
                    personal relationships, knowing every child deeply, and creating a close-knit educational community
                    - values that resonate with Huffman families.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    How does your cost compare to Humble and Kingwood private schools?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Very competitive - often more affordable</strong> than larger private schools while
                    providing more personalized attention. Plus, we're closer, saving you gas money and time. We offer
                    flexible payment plans that work for East Harris County family budgets. Quality private education
                    doesn't have to break the bank.
                  </p>
                </div>

                {/* FAQ 5 */}
                <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What if my child is behind or ahead of grade level?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Perfect for our model!</strong> We meet every child exactly where they are with a
                    personalized learning plan. Advanced students can accelerate beyond traditional grade levels without
                    being held back. Struggling students get gentle, individualized support without labels or stigma.
                    Your child progresses at their own pace, building confidence and competence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Visit Us from Huffman
              </h2>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="font-bold text-xl mb-4 text-gray-900">Contact Information</h3>
                    <div className="space-y-3">
                      <a
                        href="tel:832-957-7530"
                        className="flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                      >
                        <Phone className="w-5 h-5 mr-3" />
                        (832) 957-7530
                      </a>
                      <div className="flex items-start text-gray-700">
                        <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-pink-600" />
                        <div>
                          <div className="font-semibold">22893 Antique Ln</div>
                          <div>New Caney, TX 77357</div>
                        </div>
                      </div>
                      <div className="flex items-start text-gray-700">
                        <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-600" />
                        <div>
                          <div className="font-semibold">School Hours:</div>
                          <div>Monday-Friday: 8:30 AM - 3:30 PM</div>
                          <div className="text-sm text-gray-600 mt-1">Office Hours: 7:30 AM - 5:00 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-4 text-gray-900">Areas We Serve</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Huffman
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                        Crosby
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        New Caney
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        East Harris County
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                        Highlands
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Barrett Station
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Huffman Families: See Why Your Neighbors Choose Us
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Many Huffman families have already discovered that <strong>15-20 minutes</strong> means their child gets
                education where they're truly seen, known, and supported every single day.
              </p>
              <p className="text-lg md:text-xl mb-10 text-white/90">
                Don't settle for crowded classrooms or drive all the way to Houston. Exceptional private micro school
                education is just minutes from Huffman.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:832-957-7530"
                  className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 832-957-7530 Today
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-purple-900/50 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900/70 transition-colors border-2 border-white/30 text-lg"
                >
                  Schedule Your Huffman Tour
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
