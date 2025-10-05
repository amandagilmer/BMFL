import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock, Users, BookOpen, Heart } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private School for Cleveland, TX Families | Bright Minds Future Leaders",
  description:
    "Cleveland families drive 25 minutes for personalized private education. Max 12 students per class, individualized learning. Affordable for Liberty County families.",
  openGraph: {
    title: "Private School for Cleveland, TX Families | Bright Minds Future Leaders",
    description:
      "Cleveland families drive 25 minutes for personalized private education. Max 12 students per class, individualized learning. Affordable for Liberty County families.",
    url: "https://brightmindsfutureleaders.com/areas/cleveland",
    siteName: "Bright Minds Future Leaders",
    locale: "en_US",
    type: "website",
  },
}

export default function ClevelandPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bright Minds Future Leaders",
    image: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
    "@id": "https://brightmindsfutureleaders.com",
    url: "https://brightmindsfutureleaders.com",
    telephone: "832-957-7530",
    address: {
      "@type": "PostalAddress",
      streetAddress: "21640 Valley Forge Drive",
      addressLocality: "New Caney",
      addressRegion: "TX",
      postalCode: "77357",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.1188,
      longitude: -95.1869,
    },
    areaServed: {
      "@type": "City",
      name: "Cleveland, Texas",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "15:30",
    },
    sameAs: ["https://www.facebook.com/BrightMindsFutureLeaders"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10 pt-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Private School Serving Cleveland, TX Families
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-50">
                Cleveland Families Choose Excellence - Private Micro School Education Just 25 Minutes Away
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-lg shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Your Tour
                </Link>
                <a
                  href="tel:832-957-7530"
                  className="inline-flex items-center justify-center bg-purple-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg border-2 border-white/30"
                >
                  Call (832) 957-7530
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Cleveland families appreciate our unique micro school model that provides private school quality
                  education without the high Houston prices. Located just a convenient{" "}
                  <strong>25-30 minute drive south on Highway 59</strong>, Bright Minds Future Leaders makes morning
                  drop-off reasonable for Cleveland parents seeking better educational options.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Many Cleveland parents specifically choose us because they want their children to have{" "}
                  <strong>individualized attention that's impossible in larger Liberty County schools</strong>. With our
                  maximum of <strong>12 students per class</strong>, we ensure every child is truly known, valued, and
                  challenged at their own pace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Why Cleveland Families Drive to Bright Minds Future Leaders
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-lg flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Elite Education Accessible to Cleveland</h3>
                    <p className="text-gray-700">
                      We bring Houston-quality private education within reach of Cleveland families at affordable rates.
                      No need to drive an hour or pay elite prices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-pink-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-pink-500 to-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Escape Overcrowded Schools</h3>
                    <p className="text-gray-700">
                      Cleveland ISD averages 25-28 students per class. We cap at just 12 students, ensuring your child
                      receives the individual attention they deserve.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-3 rounded-lg flex-shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Learning Plans</h3>
                    <p className="text-gray-700">
                      Every child gets a customized education tailored to their unique learning style, pace, and
                      goals—not a one-size-fits-all curriculum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Age Classrooms</h3>
                    <p className="text-gray-700">
                      Our multi-age approach fosters leadership and mentoring, reflecting Cleveland's tight-knit
                      community values where everyone supports each other.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-pink-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-pink-500 to-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Real Academic Results</h3>
                    <p className="text-gray-700">
                      95% of our students exceed grade-level expectations, and many advance beyond traditional pace.
                      Your Cleveland child will thrive academically.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-3 rounded-lg flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Plans for Working Families</h3>
                    <p className="text-gray-700">
                      We believe Cleveland families deserve access to quality private education. We offer flexible
                      payment plans that work for your budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Worth the Drive Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Worth the Drive from Cleveland
              </h2>
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-2xl p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Highway 59 Access</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Highway 59 southbound is a straightforward <strong>25-30 minute commute</strong> from Cleveland.
                      Cleveland families consistently tell us their children's academic growth and confidence make the
                      drive worthwhile every single day.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Many Cleveland families coordinate carpools with other families, making the commute even easier
                      and building community connections before school even starts!
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <Clock className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600 mb-2">25-30</div>
                  <div className="text-gray-700 font-medium">Minutes from Cleveland</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl">
                  <Users className="w-12 h-12 text-pink-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-pink-600 mb-2">12</div>
                  <div className="text-gray-700 font-medium">Max Students Per Class</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-700 font-medium">Exceed Grade Level</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Images */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              See Our Micro School in Action
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="/students-outdoor-learning.png"
                  alt="Cleveland TX students enjoying hands-on outdoor learning at private micro school"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-white p-4">
                  <h3 className="font-bold text-gray-900">Hands-On Learning</h3>
                  <p className="text-sm text-gray-600">Cleveland students thrive with experiential education</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="/classroom-building-together.png"
                  alt="Small class sizes for Cleveland families seeking alternatives to overcrowded Liberty County schools"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-white p-4">
                  <h3 className="font-bold text-gray-900">Small Class Sizes</h3>
                  <p className="text-sm text-gray-600">Maximum 12 students vs 25-28 in Cleveland ISD</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="/learning-by-doing-puzzle.png"
                  alt="Personalized learning plans for Cleveland TX private school students"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-white p-4">
                  <h3 className="font-bold text-gray-900">Individualized Attention</h3>
                  <p className="text-sm text-gray-600">Every Cleveland child gets a personal learning plan</p>
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
                Frequently Asked Questions from Cleveland Families
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    How far is your school from Cleveland, Texas?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're about <strong>25-30 minutes south via Highway 59</strong>—a straightforward drive from
                    Cleveland, Liberty, Dayton, and surrounding Liberty County areas. Many families find the commute
                    very manageable, especially with carpool options.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl p-6 border-l-4 border-pink-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Why do Cleveland families choose you over local options?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Cleveland families choose us for{" "}
                    <strong>personalized attention with a maximum of 12 students</strong>, individualized learning
                    plans, and micro school flexibility that large schools simply cannot provide. Plus, our education
                    quality rivals expensive Houston private schools at a fraction of the cost and distance.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How affordable is it for Cleveland families?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Very competitive tuition with <strong>flexible payment plans designed for working families</strong>.
                    It's often more affordable than you'd expect for this level of personalized education, and we work
                    with families to make it accessible.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do you help coordinate Cleveland carpools?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes! We actively connect families from the Cleveland area for carpooling. Many families find this
                    makes the commute manageable and builds wonderful community connections. Parents often share the
                    driving responsibility.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl p-6 border-l-4 border-pink-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Can students transfer from Cleveland ISD mid-year?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We welcome students year-round. Our experienced teachers quickly assess each child and create a{" "}
                    <strong>personalized learning plan</strong> to help them thrive. The transition is smooth and
                    supportive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Ready to Visit from Cleveland?
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                      <a
                        href="tel:832-957-7530"
                        className="text-purple-600 hover:text-purple-700 text-lg font-semibold"
                      >
                        (832) 957-7530
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">School Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday
                        <br />
                        8:30 AM - 3:30 PM
                      </p>
                      <p className="text-sm text-gray-600 mt-1">Office Hours: 7:30 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Visit Our School</h3>
                      <p className="text-gray-700">
                        22893 Antique Ln
                        <br />
                        New Caney, TX 77357
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-gray-900 mb-3 text-center">
                    Proudly Serving Cleveland and Liberty County:
                  </h3>
                  <p className="text-gray-700 text-center">
                    Cleveland • Liberty • Dayton • Hardin • Rye • Tarkington • North Cleveland • Plum Grove
                  </p>
                </div>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Your Cleveland Family Tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Cleveland Families: Your Child Deserves Personalized Education
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-purple-50">
                Cleveland parents don't have to settle for overcrowded classrooms or drive all the way to Houston.
                Exceptional private micro school education is just <strong>25 minutes away</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-lg shadow-lg"
                >
                  Schedule Your Tour Today
                </Link>
                <a
                  href="tel:832-957-7530"
                  className="inline-flex items-center justify-center bg-purple-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg border-2 border-white/30"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (832) 957-7530
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
