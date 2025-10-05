import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock, Users, GraduationCap, Heart } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private School Serving Shepherd, TX | Bright Minds Future Leaders",
  description:
    "Shepherd families drive 20 minutes for elite private education. Micro school with max 12 students, personalized learning plans. Worth the drive - see why!",
  keywords:
    "private school Shepherd TX, Shepherd private school, micro school Shepherd, personalized education Shepherd Texas, small class sizes Shepherd, alternatives to Shepherd ISD, San Jacinto County private school",
  openGraph: {
    title: "Private School Serving Shepherd, TX | Bright Minds Future Leaders",
    description:
      "Shepherd families drive 20 minutes for elite private education. Micro school with max 12 students, personalized learning plans. Worth the drive - see why!",
    url: "https://bmflschool.com/areas/shepherd",
    siteName: "Bright Minds Future Leaders",
    locale: "en_US",
    type: "website",
  },
}

export default function ShepherdPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bmflschool.com/areas/shepherd",
    name: "Bright Minds Future Leaders - Serving Shepherd, TX",
    image: "https://bmflschool.com/logo-horizontal.png",
    description:
      "Private micro school serving Shepherd, TX families with personalized K-8 education, maximum 12 students per class.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "21334 FM 2100 Rd",
      addressLocality: "New Caney",
      addressRegion: "TX",
      postalCode: "77357",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.1688,
      longitude: -95.1877,
    },
    url: "https://bmflschool.com",
    telephone: "+18329577530",
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Shepherd, Texas",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "15:30",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 pt-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Serving Shepherd, TX Families
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Private School Serving Shepherd, TX Families</h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Exceptional Private Education for Shepherd Families - Small Classes, Personal Attention
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:832-957-7530"
                  className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (832) 957-7530
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-purple-900/30 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900/50 transition-colors text-lg"
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
                  Many <strong>Shepherd families</strong> drive to our New Caney location because they want more than
                  what's available locally. With an approximately{" "}
                  <strong>20-25 minute drive south on Highway 59</strong>, we provide the individualized education
                  Shepherd parents want without having to compromise on quality or drive all the way to Houston.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Our <strong>private micro school</strong> offers what Shepherd families are seeking:{" "}
                  <strong>class sizes of maximum 12 students</strong>, truly personalized learning plans for each child,
                  and an education experience where your child is known, valued, and challenged—not lost in an
                  overcrowded classroom.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong>Bright Minds Future Leaders</strong> serves families throughout San Jacinto County who refuse
                  to settle for one-size-fits-all education. We combine small-town values with exceptional academic
                  quality, making the short drive from Shepherd absolutely worthwhile for your child's future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Shepherd Families Make the Drive to Bright Minds Future Leaders
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Education quality that makes the 20-25 minute commute absolutely worthwhile
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Benefit 1 */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Worth the Short Drive</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>20-25 minutes</strong> gets you education quality typically found only in expensive
                        Houston private schools—without the hour-long commute or premium price tag.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-pink-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-pink-500 to-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Micro School Advantage</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Maximum 12 students</strong> per class compared to 25-30 in local schools. Your child
                        receives genuine individualized attention every single day.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-3 rounded-lg flex-shrink-0">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">True Individualized Learning</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Personal learning plans for each child—not a one-size-fits-all approach. We meet your child
                        where they are and help them grow at their own pace.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-lg flex-shrink-0">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Escape Crowded Classrooms</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Your child isn't just a number in overcrowded San Jacinto County schools. With us, every student
                        is known, supported, and celebrated.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 5 */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-pink-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-pink-500 to-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Hands-On Education</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Students learn by <strong>doing</strong>—not just worksheets and textbooks. Engaging,
                        experiential learning that brings concepts to life.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 6 */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-3 rounded-lg flex-shrink-0">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Strong Academic Results</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>95% of our students exceed grade-level expectations</strong>—proof that personalized
                        education delivers real results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Convenient Location Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Convenient from Shepherd</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-6 w-6 text-purple-600" />
                    <h3 className="text-lg font-bold text-gray-900">Easy Highway 59 Access</h3>
                  </div>
                  <p className="text-gray-700">
                    Straight shot south on Highway 59 from Shepherd. Simple, straightforward drive with no complicated
                    routes.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl p-6 border-2 border-pink-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-6 w-6 text-pink-600" />
                    <h3 className="text-lg font-bold text-gray-900">20-25 Minute Commute</h3>
                  </div>
                  <p className="text-gray-700">
                    Comfortable morning drive that many Shepherd families coordinate through carpools, making it even
                    easier.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed text-center">
                  Many <strong>Shepherd families coordinate carpools</strong>, making the commute even easier. The
                  education quality makes the drive <strong>absolutely worthwhile</strong> compared to settling for
                  overcrowded local options where your child becomes just another face in a crowded classroom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See Our Approach in Action</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/students-outdoor-learning.png"
                  alt="Small class outdoor learning at Bright Minds Future Leaders serving Shepherd TX families"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/learning-by-doing-puzzle.png"
                  alt="Hands-on learning activities alternative to Shepherd ISD crowded classrooms"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/classroom-building-together.png"
                  alt="Personalized education for Shepherd Texas students maximum 12 per class"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Common Questions from Shepherd Families
              </h2>

              <div className="space-y-6">
                {/* FAQ 1 */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    How far is Bright Minds Future Leaders from Shepherd, Texas?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're located approximately <strong>20-25 minutes south via Highway 59</strong>—a straightforward
                    drive from Shepherd and surrounding San Jacinto County areas. Many families report an easy morning
                    commute that's well worth the quality education their children receive.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl p-8 border-l-4 border-pink-500">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Is the drive worth it from Shepherd?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Absolutely.</strong> Shepherd families consistently tell us the education quality far
                    exceeds the short commute. Their children thrive with the personalized attention that's simply
                    impossible in larger schools with 25-30 students per class. When you consider the alternative is
                    settling for overcrowded classrooms or driving over an hour to Houston, the 20-25 minute drive to
                    New Caney offers the perfect balance of convenience and quality.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Do you offer carpool coordination for Shepherd families?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes! We help connect Shepherd families for carpooling, and many find this makes the commute even
                    easier. Several Shepherd families have formed carpool groups that rotate driving responsibilities,
                    making the daily commute more convenient and building community connections along the way.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    How does the cost compare to other options for Shepherd families?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Very competitive, especially when you consider the full picture. We offer{" "}
                    <strong>flexible payment plans</strong> designed to work with family budgets. When you factor in the
                    gas and time saved from not driving to Houston (45-60 minutes each way), plus the superior education
                    quality we provide with truly small classes, we offer <strong>tremendous value</strong>. Many
                    Shepherd families find we're actually more affordable than Houston private schools while providing
                    even more personalized attention.
                  </p>
                </div>

                {/* FAQ 5 */}
                <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl p-8 border-l-4 border-pink-500">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Can we start mid-year if transferring from Shepherd ISD?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Yes, we accept students year-round!</strong> We understand that sometimes families realize
                    mid-year that their child needs a different educational environment. We'll quickly assess your
                    child's current level and create an individualized learning plan, ensuring a smooth transition from
                    Shepherd ISD or any other school. Our small class sizes mean we can integrate new students
                    seamlessly without disrupting the learning environment.
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Ready to Visit from Shepherd?</h2>
              <p className="text-xl text-gray-700 text-center mb-12">
                Schedule your tour and see why so many Shepherd families choose Bright Minds Future Leaders
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <a href="tel:832-957-7530" className="text-2xl font-bold text-purple-600 hover:text-purple-700">
                    (832) 957-7530
                  </a>
                  <p className="text-gray-600 mt-2">
                    Monday - Friday, 8:30 AM - 3:30 PM (Office Hours: 7:30 AM - 5:00 PM)
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <MapPin className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-lg text-gray-700">
                    22893 Antique Ln
                    <br />
                    New Caney, TX 77357
                  </p>
                  <p className="text-purple-600 font-semibold mt-2">Just 20-25 minutes from Shepherd via Hwy 59</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-center">Proudly Serving Shepherd Area Families</h3>
                <p className="text-gray-700 text-center mb-4">
                  We welcome students from throughout San Jacinto County:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">Shepherd</span>
                  <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-semibold">Cleveland</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">Coldspring</span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">Goodrich</span>
                  <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-semibold">Oakhurst</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                    Rural San Jacinto County
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Shepherd Families: Experience Education Worth the Drive
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Many Shepherd families have discovered that{" "}
                <strong>20 minutes in the car means years of better education</strong> for their children. Instead of
                settling for overcrowded classrooms where kids get lost in the shuffle, they choose personalized
                learning where every child is known, valued, and challenged.
              </p>
              <p className="text-xl mb-8 text-white/90">
                Don't let distance be the reason your child misses out on the education they deserve. The short drive
                from Shepherd is a small investment for a lifetime of educational success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:832-957-7530"
                  className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (832) 957-7530
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-purple-900/30 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900/50 transition-colors text-lg"
                >
                  Schedule Your Tour Today
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
