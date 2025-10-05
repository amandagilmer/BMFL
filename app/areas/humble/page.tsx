import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, BookOpen, TrendingUp, Heart, DollarSign, Phone, Mail, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private School Near Humble, TX | Bright Minds Future Leaders",
  description:
    "Serving Humble families seeking alternatives to large HISD classes. Private micro school with maximum 12 students per class. Personalized K-8 education. Tour today!",
  keywords:
    "private school Humble TX, Humble ISD alternative, HISD alternative, micro school Humble, small class sizes Humble, personalized education Humble, K-8 private school Humble Texas, Atascocita private school, Kingwood private school",
  openGraph: {
    title: "Private School Near Humble, TX | Bright Minds Future Leaders",
    description:
      "Serving Humble families seeking alternatives to large HISD classes. Private micro school with maximum 12 students per class.",
    type: "website",
    url: "https://brightmindsfutureleaders.com/areas/humble",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bright Minds Future Leaders",
  description:
    "Award-winning private micro school serving Humble, TX families with personalized K-8 education and maximum 12 students per class.",
  url: "https://brightmindsfutureleaders.com",
  telephone: "+1-832-957-7530",
  address: {
    "@type": "PostalAddress",
    streetAddress: "21631 Sorters McClellan Rd",
    addressLocality: "New Caney",
    addressRegion: "TX",
    postalCode: "77357",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.1533,
    longitude: -95.1855,
  },
  areaServed: {
    "@type": "City",
    name: "Humble",
    "@id": "https://en.wikipedia.org/wiki/Humble,_Texas",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
}

export default function HumblePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center pt-20">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-purple-600 mr-3" />
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  Private School Serving <span className="text-purple-600">Humble, TX</span> Families
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-semibold">
                Award-Winning Private Micro School Near Humble | Personalized K-8 Education
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 text-lg rounded-lg shadow-lg"
                >
                  <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Your Tour</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3 text-lg rounded-lg bg-transparent"
                >
                  <a href="tel:+18329577530">Call (832) 957-7530</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We serve many <strong>Humble families</strong> who are seeking alternatives to{" "}
                <strong>HISD's large class sizes</strong> and looking for more personalized attention where their child
                is not lost in a crowd. Located conveniently to Humble with approximately a{" "}
                <strong>15-20 minute drive</strong>, Bright Minds Future Leaders provides the individualized education
                Humble parents want with <strong>class sizes capped at 12 students</strong>.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Unlike traditional private schools or large public schools, our{" "}
                <strong>private micro school model</strong> provides truly personalized education for each student. Your
                child receives the individualized attention they deserve while building confidence and a genuine love of
                learning.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/hero-students-bg.png"
                alt="Humble TX private school students engaged in personalized learning with small class sizes as alternative to HISD"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </section>

        {/* Why Humble Families Choose Us */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Humble Families Drive to Bright Minds Future Leaders
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover why so many Humble families choose our personalized approach over large HISD classrooms
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-purple-300 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Users className="h-12 w-12 text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Escape Large Class Sizes</h3>
                      <p className="text-gray-700">
                        HISD averages <strong>22-25 students per class</strong>, while we have a{" "}
                        <strong>maximum of 12 students</strong>. Your child won't be lost in the crowd.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-300 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="h-12 w-12 text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">True Personalized Learning</h3>
                      <p className="text-gray-700">
                        Every student has an <strong>individual learning plan</strong> tailored to their unique needs,
                        strengths, and learning style.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-300 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-12 w-12 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Hands-On Education</h3>
                      <p className="text-gray-700">
                        We believe children learn best by doing, not just textbook learning. Our approach emphasizes
                        experiential, project-based education.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-300 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="h-12 w-12 text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Strong Academic Results</h3>
                      <p className="text-gray-700">
                        <strong>95% of our students</strong> exceed grade-level expectations thanks to our personalized
                        approach and small class sizes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-300 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Heart className="h-12 w-12 text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Caring Teachers</h3>
                      <p className="text-gray-700">
                        Our certified teachers <strong>truly know each child</strong> — their learning style, interests,
                        challenges, and dreams.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-300 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <DollarSign className="h-12 w-12 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Affordable Private School Tuition</h3>
                      <p className="text-gray-700">
                        Competitive tuition with <strong>flexible payment plans available</strong> to make quality
                        education accessible to Humble families.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Images */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning by Doing for Humble Students</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our hands-on approach engages Humble students in meaningful, experiential learning
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/parachute-play.png"
                  alt="Humble private school alternative to HISD with cooperative learning and team building activities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/indoor-building-blocks.png"
                  alt="Humble TX private micro school students engaged in hands-on STEAM education with small class sizes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/learning-by-doing-circles.png"
                  alt="Personalized education for Humble families seeking alternatives to large HISD class sizes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Convenient Location */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Convenient from Humble</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Easy access via Highway 59 North makes the commute simple for Humble families
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-purple-300 bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <MapPin className="h-16 w-16 text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Just 15-20 Minutes from Humble</h3>
                      <p className="text-lg text-gray-700 mb-4">
                        We're conveniently located just off <strong>Highway 59 North</strong> in New Caney, making us
                        easily accessible from all Humble neighborhoods including Atascocita, Kingwood, Fall Creek, and
                        surrounding areas.
                      </p>
                      <p className="text-lg text-gray-700">
                        Many <strong>Humble families find the drive worth it</strong> for the quality of education their
                        child receives. The short commute is a small investment for personalized attention, smaller
                        classes, and an educational environment where your child truly thrives.
                      </p>
                      <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-gray-700 font-semibold">
                          <Clock className="inline h-5 w-5 mr-2 text-purple-600" />
                          Easy morning drop-off and afternoon pick-up with convenient Highway 59 access
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions from Humble Families</h2>
              <p className="text-xl text-gray-600">Get answers to common questions about our school</p>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-pink-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    How far is your private school from Humble, TX?
                  </h3>
                  <p className="text-gray-700">
                    Approximately <strong>15-20 minutes from most Humble neighborhoods</strong> via Highway 59 North.
                    We're convenient from Atascocita, Kingwood, Fall Creek, and other Humble areas. Many families find
                    the commute very manageable, especially compared to the educational benefits their children receive.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Why do Humble families choose private school over HISD?
                  </h3>
                  <p className="text-gray-700">
                    Humble families choose us because they're seeking <strong>smaller class sizes</strong>, more{" "}
                    <strong>personalized attention</strong>, and want to escape crowded HISD schools where their child
                    can get lost. With HISD averaging 22-25 students per class and our maximum of 12, the difference in
                    individual attention is significant. Parents also value our flexibility to meet each child where
                    they are academically.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    What makes you different from other Humble private schools?
                  </h3>
                  <p className="text-gray-700">
                    We have even <strong>smaller classes than traditional private schools</strong>. While most private
                    schools have 15-20 students per class, our <strong>micro school model</strong> caps classes at just
                    12 students maximum. This provides maximum flexibility and personalization. Each child gets an
                    individualized learning plan, and our teachers truly know every student's strengths, challenges, and
                    learning style.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do you accept mid-year transfers from HISD?</h3>
                  <p className="text-gray-700">
                    <strong>Yes! We welcome students year-round.</strong> If your child is struggling in HISD or simply
                    needs a change, we can quickly assess their current level and create an{" "}
                    <strong>individualized learning plan</strong> to help them thrive. Many families transfer mid-year
                    and see immediate improvements in their child's confidence and academic progress.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    How does your cost compare to other Humble area private schools?
                  </h3>
                  <p className="text-gray-700">
                    We offer <strong>competitive tuition with flexible payment plans</strong> available. Many families
                    find we're actually <strong>more affordable than larger private schools</strong> while providing
                    even more personalized attention thanks to our smaller class sizes. We believe quality education
                    should be accessible, and we work with families to find payment solutions that fit their budget.
                    Call us at (832) 957-7530 to discuss tuition options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us from Humble</h2>
              <p className="text-xl text-gray-600">We're easy to reach and would love to show you our school</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        21631 Sorters McClellan Rd
                        <br />
                        New Caney, TX 77357
                      </p>
                      <p className="text-sm text-purple-600 mt-1">15-20 minutes from Humble via Highway 59 North</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a
                        href="tel:+18329577530"
                        className="text-purple-600 hover:text-purple-700 transition-colors text-lg font-semibold"
                      >
                        (832) 957-7530
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
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
                      <h4 className="font-semibold text-gray-900 mb-1">School Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 3:00 PM
                        <br />
                        Extended care available until 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Proudly Serving These Humble Areas</h3>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Humble</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Atascocita</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Kingwood</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Fall Creek</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Summer Creek</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Eagle Springs</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-purple-200">
                    <p className="text-sm text-gray-600 text-center">
                      <Link href="/areas/new-caney" className="text-purple-600 hover:text-purple-700 font-semibold">
                        See all areas we serve
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Humble Families: Schedule Your Tour Today</h2>
            <p className="text-xl mb-8 opacity-95 leading-relaxed">
              If you're a <strong>Humble family seeking better educational options</strong>, we invite you to discover
              Bright Minds Future Leaders. Many Humble families have discovered that the short drive to New Caney is
              worth it for the education their child receives — personalized attention, small classes, and a nurturing
              environment where every student thrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg shadow-xl"
              >
                <Link href="https://book.brightmindsfutureleaders.com/book">Book Your Tour Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 text-lg rounded-lg bg-transparent"
              >
                <a href="tel:+18329577530">Call (832) 957-7530</a>
              </Button>
            </div>
            <p className="mt-6 text-lg opacity-90">
              Join the growing community of Humble families choosing personalized education
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
