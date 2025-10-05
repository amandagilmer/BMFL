import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Heart, Star, Phone, Mail, Clock, ChevronDown, Calendar, MessageCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private School Near The Woodlands, TX | Bright Minds Future Leaders",
  description:
    "Premier private micro school serving The Woodlands, TX. Maximum 8 students per class, individualized K-8 education, character-focused curriculum. Alternative to Conroe ISD. Serving Shenandoah, Oak Ridge. Book your tour today!",
  keywords:
    "private school The Woodlands TX, The Woodlands micro school, Conroe ISD alternative, small class sizes The Woodlands, personalized education The Woodlands, K-8 private school Texas",
}

export default function TheWoodlandsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-blue-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-green-600 mr-3" />
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Private School Serving <span className="text-green-600">The Woodlands, TX</span> Families
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Just 22 minutes from The Woodlands, we provide personalized education that nurtures each child's unique
              potential and builds strong character for your community's families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="https://book.brightmindsfutureleaders.com/book">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Your Tour Now
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-3 text-lg rounded-lg bg-transparent"
              >
                <Link href="https://book.brightmindsfutureleaders.com/parent-packet-intake">
                  Download Our Parent Packet
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Makes BMFL Different for The Woodlands Families
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
            <p>
              The Woodlands is known for its high-quality schools, but even the best traditional schools struggle to
              provide truly individualized attention when classes have 25-30 students. At Bright Minds Future Leaders,
              we've created something fundamentally different: a micro-school where we serve a maximum of 8 students
              total—not per grade, but total. This means your Woodlands child receives daily one-on-one instruction from
              our certified teacher who knows their learning style, strengths, and challenges intimately.
            </p>
            <p>
              Our founder, Angela Gilmer, brings a unique approach to education that has transformed hundreds of
              students' lives. Unlike traditional grade-level teaching, we practice ability-based learning. If your
              Woodlands child is reading at a sixth-grade level but needs support in math, we meet them exactly where
              they are in each subject. This personalized pacing ensures every child is appropriately challenged without
              being overwhelmed or held back by arbitrary age groupings.
            </p>
            <p>
              Character education isn't an afterthought at BMFL—it's woven into everything we do. While Woodlands
              schools focus heavily on academic achievement and test scores, we believe developing integrity, empathy,
              resilience, and leadership is equally crucial. We intentionally teach these skills alongside academics,
              creating well-rounded students who excel both in the classroom and in life. Woodlands families appreciate
              that we're building future leaders, not just test-takers.
            </p>
            <p>
              Many Woodlands families make the 22-minute drive because they've tried everything else—gifted programs,
              private schools, tutoring—and their child still wasn't thriving. At BMFL, parents consistently report that
              their children rediscover their love of learning, develop genuine confidence, and achieve academic growth
              they never thought possible. The small investment in drive time yields transformative results that last a
              lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Why The Woodlands Families Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why The Woodlands Families Choose BMFL</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Woodlands parents choose us because they see real results with personalized care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Woodlands Parents Tell Us:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    "Even in The Woodlands' excellent schools, my daughter was lost in a class of 28. Here, she thrives
                    with individual attention."
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    "The 22-minute drive is worth every second—my son has gained three grade levels in reading this
                    year."
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    "We tried The Woodlands' private schools first, but they still had 20+ students per class. BMFL is
                    truly different."
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    "Angela knows my child better than any teacher ever has—and the academic progress shows it."
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    "The character education combined with personalized academics is exactly what our family wanted."
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What The Woodlands Parents Say:</h3>
              <Card className="border-3 border-yellow-400 bg-yellow-50 mb-6">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "We live in The Woodlands and tried every option here—public, private, gifted programs. Nothing
                    worked until BMFL. The individual attention is incredible. My daughter went from struggling to
                    excelling in just months. Angela's approach is truly transformative."
                  </p>
                  <p className="font-semibold text-gray-900">- Michelle Anderson, The Woodlands Parent</p>
                </CardContent>
              </Card>

              <Card className="border-3 border-blue-400 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "The 22-minute drive from The Woodlands is nothing compared to watching my son finally love
                    learning. The small class size and ability-based approach have unlocked his potential in ways we
                    never imagined possible."
                  </p>
                  <p className="font-semibold text-gray-900">- Brian Williams, The Woodlands Parent</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Community Focus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Easy Access from The Woodlands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Just 22 minutes via I-45 North—an easy drive that Woodlands families say is absolutely worth it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-3 border-green-400 bg-green-50">
              <CardContent className="p-8 text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Convenient Location</h3>
                <p className="text-green-700">
                  22 minutes via I-45 N—Woodlands families find the drive easy and worth it for quality education.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-blue-400 bg-blue-50">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Maximum 8 Students</h3>
                <p className="text-blue-700">
                  Not 8 per class—8 total. True individualized attention impossible in larger Woodlands schools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-purple-400 bg-purple-50">
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-900 mb-2">Whole Child Focus</h3>
                <p className="text-purple-700">
                  Character and academics together—building leaders Woodlands families are proud of.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Questions from Woodlands Families</h2>
          </div>

          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-md p-6 group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                Is the drive from The Woodlands really worth it?
                <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700">
                Absolutely. Woodlands families consistently tell us the 22-minute drive via I-45 is easy and the results
                are transformative. Many parents say it's become quality time with their child before and after school.
                The individualized attention, small class size, and personalized learning your child receives at BMFL
                simply isn't available in larger Woodlands schools, even excellent ones. Parents report their children
                are finally thriving, making the commute a small investment for life-changing education.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                How does BMFL compare to private schools in The Woodlands?
                <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700">
                While The Woodlands has several quality private schools, most still have 15-25 students per class and
                follow traditional grade-level teaching. At BMFL, we have a maximum of 8 students TOTAL (not per class),
                and we teach to ability levels, not age groups. Your Woodlands child receives actual daily one-on-one
                instruction tailored to their exact needs—something impossible in larger settings. Many Woodlands
                families try local private schools first, then come to us when they realize their child still needs more
                individualized attention.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                What if my Woodlands child is gifted or advanced?
                <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700">
                Our ability-based learning model is perfect for gifted students. Unlike traditional schools that hold
                advanced learners back with grade-level curriculum, we let your child work at their actual ability level
                in each subject. Many Woodlands parents with gifted children tell us their kids were bored and
                unmotivated in traditional gifted programs because they were still grouped by age. At BMFL, if your
                third grader reads at an eighth-grade level, they read eighth-grade material. We challenge every child
                appropriately without holding anyone back.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                Can my child return to Conroe ISD or Woodlands schools later?
                <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700">
                Yes! Many Woodlands families plan to return to public schools for middle or high school. Students
                transitioning from BMFL are consistently well-prepared and often ahead academically. We follow Texas
                education standards while providing deeper, more personalized instruction. Woodlands parents report
                their children enter or re-enter traditional schools performing at or above grade level, with strong
                study skills, confidence, and a love of learning that sets them apart. We provide all necessary
                documentation and records for seamless transitions.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                Do other Woodlands families attend BMFL?
                <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700">
                Yes! We serve several families from The Woodlands, and many have connected to carpool together, making
                the commute even easier. During your tour, we can connect you with other Woodlands parents who are happy
                to share their experiences. Many families say finding a Woodlands community at BMFL has been
                wonderful—their children have made friends with other Woodlands kids, and parents have built
                relationships that extend beyond school.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              See Why Woodlands Families Choose BMFL for Their Children
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Schedule your personalized tour and discover how we're transforming education for Woodlands children—one
              student at a time. See our classrooms in action, meet Angela, and learn how we can help your child thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Schedule Your Tour</h3>
                <p className="text-white/90 text-sm">
                  Visit our campus, meet Angela, and see our unique approach in action
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Talk to Woodlands Parents</h3>
                <p className="text-white/90 text-sm">Connect with other families who made the drive—and love it</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Trial Day Available</h3>
                <p className="text-white/90 text-sm">Let your child experience BMFL firsthand before enrolling</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold px-10 py-4 text-xl rounded-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <Link href="https://book.brightmindsfutureleaders.com/book">
                <Calendar className="h-6 w-6 mr-2" />
                Schedule Your Woodlands Family Tour
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold px-10 py-4 text-xl rounded-lg bg-transparent"
            >
              <Link href="tel:+12813545437">
                <Phone className="h-6 w-6 mr-2" />
                Call (281) 354-5437
              </Link>
            </Button>
          </div>

          <p className="text-center mt-8 text-white/80 text-lg">
            <strong>Limited Spots Available:</strong> With only 8 students maximum, spots fill quickly. Schedule your
            tour today!
          </p>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Easy to Reach from The Woodlands</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      21631 Sorters McClellan Rd
                      <br />
                      New Caney, TX 77357
                    </p>
                    <p className="text-sm text-gray-500 mt-1">22 minutes from The Woodlands via I-45 N</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+12813545437" className="text-green-600 hover:text-green-700 transition-colors">
                      (281) 354-5437
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@brightmindsfutureleaders.com"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      info@brightmindsfutureleaders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">School Hours</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving The Woodlands & Surrounding Areas</h2>
              <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-4">We Welcome Families From:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">The Woodlands</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">Shenandoah</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">Oak Ridge North</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">Conroe</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">Spring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
