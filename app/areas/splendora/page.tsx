import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Phone, MapPin, Clock, Mail, CheckCircle2, Users, BookOpen, Heart, Sprout, DollarSign } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Private School Near Splendora, TX | Bright Minds Future Leaders",
  description:
    "Serving Splendora families with small-town values and big-city education quality. Private micro school, max 12 students, 15 minutes away. Affordable tuition with payment plans.",
  openGraph: {
    title: "Private School Near Splendora, TX | Bright Minds Future Leaders",
    description:
      "Serving Splendora families with small-town values and big-city education quality. Private micro school, max 12 students, 15 minutes away. Affordable tuition with payment plans.",
    url: "https://brightmindsfutureleaders.com/areas/splendora",
    siteName: "Bright Minds Future Leaders",
    locale: "en_US",
    type: "website",
  },
}

export default function SplendoraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bright Minds Future Leaders",
    description: "Private micro school serving Splendora, TX families with personalized K-8 education",
    url: "https://brightmindsfutureleaders.com/areas/splendora",
    telephone: "+1-832-957-7530",
    address: {
      "@type": "PostalAddress",
      streetAddress: "20770 U.S. 59",
      addressLocality: "New Caney",
      addressRegion: "TX",
      postalCode: "77357",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.1127,
      longitude: -95.1894,
    },
    areaServed: {
      "@type": "City",
      name: "Splendora, TX",
    },
    priceRange: "$$",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 opacity-10" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
                <span className="text-purple-800 font-semibold text-sm md:text-base">
                  Serving Splendora, TX Families
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Private School Serving{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
                  Splendora, TX
                </span>{" "}
                Families
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Quality Private Education Just Minutes from Splendora – Personalized K-8 Learning
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-purple-500">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Bright Minds Future Leaders serves many <strong>Splendora families</strong> who want small-town values
                  with exceptional education quality. Located just{" "}
                  <strong>15 minutes from Splendora via Highway 59</strong>, our private micro school approach resonates
                  with Splendora's close-knit community feel where everyone knows everyone, and we provide that same
                  personal touch in education with a <strong>maximum of 12 students per class</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Unlike larger schools that lose the individual child in crowded classrooms, our micro school model
                  ensures that every Splendora student receives the individualized attention they deserve while building
                  confidence, character, and a genuine love of learning. We understand rural family values and bring
                  quality education right to your community.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+18329577530"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (832) 957-7530
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Splendora Families Choose Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
                Splendora Families
              </span>{" "}
              Choose Bright Minds Future Leaders
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Small-town values meet exceptional educational quality
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Benefit 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Small Town Values with Big City Quality</h3>
                    <p className="text-gray-700">
                      We understand Splendora's community-focused lifestyle and bring that same caring, personal
                      approach to education while providing exceptional academic quality that rivals any Houston school.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Users className="w-8 h-8 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">True Small Class Sizes</h3>
                    <p className="text-gray-700">
                      Maximum 12 students per class – never more. Unlike larger schools claiming to be "small," we
                      guarantee truly intimate learning environments where teachers know each child deeply.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Attention</h3>
                    <p className="text-gray-700">
                      Teachers know each child's strengths, challenges, and learning style. We create individualized
                      learning plans that honor where your child is and guide them to where they're going.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Sprout className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-On Rural Learning</h3>
                    <p className="text-gray-700">
                      We incorporate nature, outdoor education, and real-world experiences that resonate with rural
                      life. Learning extends beyond textbooks to include gardening, nature studies, and practical
                      skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Age Classrooms</h3>
                    <p className="text-gray-700">
                      Older students mentor younger ones, just like Splendora's family community. This builds
                      leadership, empathy, and creates the supportive family atmosphere rural families value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <DollarSign className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Tuition for Rural Families</h3>
                    <p className="text-gray-700">
                      Flexible payment plans that work for Splendora budgets. We believe exceptional education should be
                      accessible to hardworking rural families without breaking the bank.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect for Splendora Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-gradient-to-r from-purple-500 to-pink-500">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Perfect for{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
                  Splendora's Community-Minded Families
                </span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Splendora residents value tight-knit community connections, and our micro school extends that same
                  philosophy to education. Every child is known, supported, and celebrated – not just as a student, but
                  as a whole person with unique gifts, interests, and dreams.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Splendora families don't have to choose between small-town life and quality education because we bring
                  both together. You get the personal, caring environment of a small rural school combined with the
                  academic rigor and innovative teaching methods of the best private schools.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether your child is gifted and needs acceleration, struggling and needs extra support, or right on
                  track and needs enrichment, we meet them exactly where they are with compassion, expertise, and the
                  individual attention that only comes from truly small classes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Convenient Location for Splendora Families
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Easy Highway 59 Access</h3>
                    <p className="text-purple-100">
                      Just 15 minutes south via Highway 59 from Splendora proper and surrounding areas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quick Morning Commute</h3>
                    <p className="text-purple-100">
                      Many Splendora families report comfortable 15-minute drives making drop-off and pick-up convenient
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-lg text-center">
                  <strong>Address:</strong> 20770 U.S. 59, New Caney, TX 77357
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Images */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Hands-On Learning at{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
                Bright Minds Future Leaders
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/students-outdoor-learning.png"
                  alt="Splendora students enjoying outdoor hands-on learning at private micro school near Splendora TX"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
                  <h3 className="font-semibold text-lg text-gray-900">Outdoor Education</h3>
                  <p className="text-gray-700 text-sm mt-2">Nature-based learning that rural families value</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/classroom-building-together.png"
                  alt="Small class sizes at New Caney private school serving Splendora families maximum 12 students"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-gradient-to-br from-pink-50 to-blue-50">
                  <h3 className="font-semibold text-lg text-gray-900">Collaborative Learning</h3>
                  <p className="text-gray-700 text-sm mt-2">Building community through teamwork</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/learning-by-doing-puzzle.png"
                  alt="Personalized learning plans for Splendora students at Bright Minds private school"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50">
                  <h3 className="font-semibold text-lg text-gray-900">Hands-On Projects</h3>
                  <p className="text-gray-700 text-sm mt-2">Learning by doing, not just textbooks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions from{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
                Splendora Families
              </span>
            </h2>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  How far is your private school from Splendora, TX?
                </h3>
                <p className="text-gray-700 ml-9 leading-relaxed">
                  Just 15 minutes south via Highway 59 – easy morning commute from Splendora proper and surrounding
                  areas. Many families find the short drive completely manageable and worth it for the quality of
                  education their child receives.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  Do you understand rural family needs?
                </h3>
                <p className="text-gray-700 ml-9 leading-relaxed">
                  Yes! Many of our families come from Splendora and surrounding rural communities. We respect
                  agricultural schedules, family businesses, and small-town values while providing exceptional
                  education. We understand that rural life has unique rhythms and demands, and we work with families
                  accordingly.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  How do costs compare to driving to Houston private schools?
                </h3>
                <p className="text-gray-700 ml-9 leading-relaxed">
                  Much more affordable and convenient than driving 45-60 minutes into Houston! Plus, we offer flexible
                  payment plans designed specifically for rural family budgets. You get exceptional education quality
                  without the Houston commute or price tag.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  Can my child maintain Splendora friendships and activities?
                </h3>
                <p className="text-gray-700 ml-9 leading-relaxed">
                  Many students maintain strong connections through church, youth sports, 4-H, FFA, and community
                  activities. Our school schedule is designed to support participation in these important community
                  connections that Splendora families value.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  What if we need to help on the family farm or business?
                </h3>
                <p className="text-gray-700 ml-9 leading-relaxed">
                  We work with families on flexible scheduling for harvest season, family obligations, and understand
                  that rural life has unique demands. We can accommodate reasonable absences for genuine family needs
                  while ensuring your child stays on track academically. Education and family responsibilities can work
                  together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Contact Us from Splendora</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Call Us</p>
                    <a href="tel:+18329577530" className="text-lg font-semibold text-purple-600 hover:text-purple-700">
                      (832) 957-7530
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-pink-600" />
                  <div>
                    <p className="text-sm text-gray-600">Email Us</p>
                    <a
                      href="mailto:info@brightmindsfutureleaders.com"
                      className="text-lg font-semibold text-pink-600 hover:text-pink-700"
                    >
                      info@brightmindsfutureleaders.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="text-lg font-semibold text-blue-600">22893 Antique Ln, New Caney, TX 77357</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">School Hours</p>
                    <p className="text-lg font-semibold text-purple-600">Mon-Fri 8:30 AM - 3:30 PM</p>
                    <p className="text-sm text-gray-600">Office: 7:30 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Splendora Families: Discover Education That Matches Your Values
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
              We honor Splendora's small-town community spirit while providing education quality that rivals any Houston
              school. Your child deserves both exceptional academics and the personal attention that only comes from
              truly small classes.
            </p>
            <p className="text-lg mb-10 text-purple-100">
              Join the growing number of Splendora families who have discovered that quality education doesn't require
              sacrificing rural values or enduring long Houston commutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18329577530"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all text-lg shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call (832) 957-7530
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-800 transition-all text-lg border-2 border-white shadow-xl hover:shadow-2xl"
              >
                Schedule Your Tour Today
              </Link>
            </div>
            <p className="mt-8 text-purple-100 text-sm">
              Experience the difference that truly personalized education makes. Many Splendora families schedule tours
              during morning drop-off to see our approach in action!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
