import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Users,
  Heart,
  Star,
  Phone,
  Mail,
  Clock,
  Car,
  GraduationCap,
  Target,
  Zap,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private School Near Conroe, TX | Bright Minds Future Leaders",
  description:
    "Top-rated private micro school serving Conroe, TX. Max 8 students, personalized K-8 education, certified teachers. Alternative to Conroe ISD. Serving Montgomery, Willis. Schedule your tour today!",
  keywords:
    "private school Conroe TX, Conroe ISD alternative, micro school Conroe, small class sizes Conroe, personalized education Conroe Texas, K-8 private school",
}

export default function ConroePage() {
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
                Private School Serving <span className="text-green-600">Conroe, TX</span> Families
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Just 20 minutes from Conroe, we provide personalized education that nurtures each child's unique potential
              and builds strong character for your community's families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 text-lg rounded-lg"
              >
                <Link href="https://book.brightmindsfutureleaders.com/book">Book Tour</Link>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes BMFL Different for Conroe Families</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another school - we're a complete reimagining of what education can be.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Conroe ISD serves over 65,000 students across dozens of schools. While the district works hard, the
                reality is that in classes of 25-30+ students, individual children often fall through the cracks. At
                BMFL, we've created something fundamentally different: a micro school where we serve a maximum of 8
                students total. This means your child isn't competing for attention - they receive personalized,
                one-on-one instruction from a certified teacher who knows their learning style, challenges, and goals
                intimately. It's not just smaller class sizes; it's a completely different educational experience.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We don't believe in the traditional grade-level model that holds advanced learners back while leaving
                struggling students behind. Instead, we practice ability-based learning. If your Conroe child is
                excelling in math but needs support in reading, we meet them exactly where they are in each subject.
                This personalized pacing means every child works at their optimal challenge level - never bored, never
                lost, always progressing. Conroe families tell us this approach has transformed their children's
                confidence and love of learning in ways traditional schools never could.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Character education is woven into everything we do at BMFL. While Conroe schools focus heavily on
                standardized test preparation, we believe developing integrity, resilience, empathy, and leadership
                skills is just as crucial as academic achievement. Our students learn to collaborate effectively, think
                critically, solve problems creatively, and develop the emotional intelligence that will serve them
                throughout life. Conroe parents appreciate that we're building the whole child, not just preparing them
                for the next test.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Most importantly, we create a learning environment where every child feels safe, valued, and known. In
                large Conroe ISD schools, even great teachers can't possibly know 150+ students personally. At BMFL, our
                founder Angela Gilmer personally knows each child's strengths, challenges, learning style, and
                personality. There's no getting lost in the system, no struggling in silence, no feeling like just
                another number. Conroe families consistently tell us that the 20-minute drive is a small price to pay
                for watching their child rediscover their love of learning.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-3 border-green-400 bg-green-50">
              <CardContent className="p-8 text-center">
                <Target className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Truly Individual</h3>
                <p className="text-green-700">
                  Not group work with occasional help - actual daily 1-on-1 instruction tailored to your Conroe child's
                  exact needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-blue-400 bg-blue-50">
              <CardContent className="p-8 text-center">
                <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">No More Grade Levels</h3>
                <p className="text-blue-700">
                  Your child learns at their actual ability level in each subject - not held back or pushed ahead by age
                  alone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-purple-400 bg-purple-50">
              <CardContent className="p-8 text-center">
                <Zap className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-900 mb-2">Dramatic Growth</h3>
                <p className="text-purple-700">
                  Most Conroe students gain 2-3 grade levels per year with personalized instruction and proper pacing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Conroe Families Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Conroe Families Choose BMFL</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conroe families make the drive because they want more than what large district schools can provide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Conroe Parents Tell Us:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    "My son was lost in a class of 32 at his Conroe school. Here, he gets the attention he needs every
                    single day."
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    "The 20-minute drive from Conroe is nothing compared to watching my daughter finally love learning
                    again."
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    "Angela identified learning gaps that Conroe ISD teachers missed for three years. Now he's
                    excelling."
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    "We wanted our child to be known, not just another student ID number. BMFL delivers that."
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    "The character education is just as important as academics - exactly what our Conroe family needed."
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Conroe Parents Say:</h3>
              <Card className="border-3 border-yellow-400 bg-yellow-50 mb-6">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "We drive from Conroe every day and it's the best decision we've made. My daughter went from failing
                    math to working two grade levels ahead. Angela's approach actually works."
                  </p>
                  <p className="font-semibold text-gray-900">- Patricia R., Conroe Parent</p>
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
                    "After trying four different Conroe schools, we finally found the right fit. The individual
                    attention and personalized learning are life-changing for our son."
                  </p>
                  <p className="font-semibold text-gray-900">- James H., Conroe Parent</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Convenient Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Easy Commute from Conroe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Just 20 minutes - Conroe families tell us it's a simple drive and absolutely worth it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-3 border-green-400 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Car className="h-12 w-12 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-green-900">Simple Route</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">1.</span>
                    <span>Take I-45 South from Conroe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">2.</span>
                    <span>Exit at FM 1485 toward New Caney</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">3.</span>
                    <span>Approximately 20 minutes door-to-door</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">4.</span>
                    <span>Reverse commute - less traffic than going into Conroe</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-3 border-blue-400 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-blue-900">School Hours</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>School hours: 8:30 AM - 3:30 PM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Office hours: 7:30 AM - 5:00 PM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Monday - Friday</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Flexible arrival time for Conroe commuters</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions from Conroe Families</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are answers to the most common questions we hear from Conroe parents.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Is the 20-minute drive from Conroe really worth it?
                    </h3>
                    <p className="text-gray-700">
                      Absolutely. Conroe families consistently tell us the drive is easy and the results are
                      transformative. Many parents say it's the best 20 minutes of their day because they see their
                      child actually excited about going to school. With I-45 access, it's a straight shot with minimal
                      traffic, and we offer flexible drop-off/pickup times to accommodate your schedule.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      How is BMFL different from Conroe ISD private schools?
                    </h3>
                    <p className="text-gray-700">
                      While Conroe has some excellent private schools, most still have 15-25 students per class and
                      follow traditional grade-level teaching. At BMFL, we have a maximum of 8 students TOTAL (not per
                      class), and we teach to ability levels, not age groups. Your Conroe child receives actual daily
                      one-on-one instruction tailored to their exact needs - something impossible in larger settings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Can my child transition back to Conroe ISD if needed?
                    </h3>
                    <p className="text-gray-700">
                      Yes, absolutely. Many of our Conroe families plan to return to public school for middle or high
                      school. We focus on building strong foundational skills and character that translate to any
                      educational setting. In fact, students who come to us often return to Conroe ISD performing well
                      above their peers because of the strong academic foundation and confidence they've developed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      What if my Conroe child has learning challenges or is gifted?
                    </h3>
                    <p className="text-gray-700">
                      Perfect! Our ability-based model is ideal for both situations. If your child is gifted, they work
                      at their advanced level without being held back by grade-level curriculum. If they have learning
                      challenges, we identify exactly where they need support and work on those specific skills daily
                      with one-on-one attention. Many Conroe parents tell us we've helped their children in ways larger
                      schools simply couldn't.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Do other Conroe families attend BMFL?</h3>
                    <p className="text-gray-700">
                      Yes! We serve several families from Conroe, and many have connected to carpool together. During
                      your tour, we can put you in touch with other Conroe parents who are happy to share their
                      experiences. Many families say finding other Conroe families at BMFL has created a wonderful sense
                      of community and makes the commute even easier.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Community Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Understanding Conroe Families</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We know Conroe parents want more than crowded classrooms and standardized teaching for their children.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-3 border-green-400 bg-green-50">
              <CardContent className="p-8 text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Easy Access</h3>
                <p className="text-green-700">
                  20 minutes via I-45 S - Conroe families tell us it's a simple, straight drive that's absolutely worth
                  it.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-blue-400 bg-blue-50">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Maximum 8 Students</h3>
                <p className="text-blue-700">
                  Not 8 per class - 8 total students. A level of individual attention impossible in Conroe ISD schools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-3 border-purple-400 bg-purple-50">
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-900 mb-2">Character & Academics</h3>
                <p className="text-purple-700">
                  Building well-rounded leaders, not just test-takers - what Conroe families tell us they value most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Easy to Reach from Conroe</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      22893 Antique Ln
                      <br />
                      New Caney, TX 77357
                    </p>
                    <p className="text-sm text-gray-500 mt-1">20 minutes from Conroe via I-45 S</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+18329577530" className="text-green-600 hover:text-green-700 transition-colors">
                      (832) 957-7530
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
                      Monday - Friday: 8:30 AM - 3:30 PM
                      <br />
                      Office Hours: 7:30 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Conroe & Surrounding Areas</h2>
              <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-4">We Welcome Families From:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">Conroe</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">Montgomery</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">Willis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">The Woodlands</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700">New Caney</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Give Your Conroe Child the Best?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Conroe families who've discovered that 20 minutes is a small investment for education that truly
            transforms lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Your Conroe Family Tour</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3 text-lg rounded-lg bg-transparent"
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
