import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, BookOpen, Target, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WhoWeServePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-purple-100 lg:py-5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-32 pt-40 pb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Who We <span className="text-purple-600">Serve</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Student Profiles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect for These Students</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every child is unique, and we celebrate those differences. Here are some of the students who thrive in our
              environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-3 border-blue-400 bg-blue-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">The Overwhelmed Student</h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Gets lost in large classrooms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Needs more individual attention</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Struggles with fast-paced curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Benefits from smaller peer groups</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-3 border-green-400 bg-green-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Heart className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">The Sensitive Learner</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Highly empathetic and caring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Needs emotional support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Thrives in nurturing environments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Values meaningful relationships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-3 border-purple-400 bg-purple-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <BookOpen className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">The Unique Learner</h3>
                <ul className="space-y-3 text-purple-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Learns differently than peers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Needs customized approaches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Has specific learning challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Benefits from multi-sensory learning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-3 border-orange-400 bg-orange-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Target className="h-16 w-16 text-orange-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-orange-900 mb-4 text-center">The Gifted Student</h3>
                <ul className="space-y-3 text-orange-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Needs academic challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Craves deeper learning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Benefits from accelerated pace</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Enjoys intellectual discussions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-3 border-red-400 bg-red-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Heart className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">The Struggling Student</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Behind grade level expectations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Needs confidence building</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Benefits from patient instruction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Needs success experiences</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-3 border-pink-400 bg-pink-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-16 w-16 text-pink-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-pink-900 mb-4 text-center">The Social Learner</h3>
                <ul className="space-y-3 text-pink-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Thrives in small groups</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Learns through collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Values peer relationships</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Enjoys group projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Age Groups We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-age approach allows students to learn at their own pace while building relationships across
              grade levels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-blue-600">K-2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Elementary</h3>
                <p className="text-gray-600 mb-6">
                  Building foundational skills in reading, writing, and math while developing social and emotional
                  intelligence.
                </p>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Phonics and early reading</li>
                  <li>• Number sense and basic math</li>
                  <li>• Social skills development</li>
                  <li>• Creative expression</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-600">3-5</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Upper Elementary</h3>
                <p className="text-gray-600 mb-6">
                  Expanding academic skills while developing critical thinking, problem-solving, and leadership
                  abilities.
                </p>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Advanced reading comprehension</li>
                  <li>• Multi-step problem solving</li>
                  <li>• Research and writing skills</li>
                  <li>• Leadership opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-purple-600">6-8</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Middle School</h3>
                <p className="text-gray-600 mb-6">
                  Preparing for high school with advanced academics, character development, and real-world applications.
                </p>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Pre-algebra and algebra</li>
                  <li>• Advanced writing and literature</li>
                  <li>• Science and social studies</li>
                  <li>• Character and leadership focus</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our personalized approach has transformed the educational experience for these students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emma's Transformation</h3>
                <p className="text-gray-700 mb-6 italic">
                  "Emma was struggling in her large public school classroom. She was shy, falling behind in reading, and
                  losing confidence daily. After joining BMFL, she blossomed. The small class size allowed her to
                  participate more, and the personalized attention helped her catch up and even excel in reading. She's
                  now a confident leader in her class."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">JM</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Jennifer Martinez</p>
                    <p className="text-gray-600">Emma's Mom, Humble</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marcus's Growth</h3>
                <p className="text-gray-700 mb-6 italic">
                  "Marcus is gifted but was bored in traditional school. He was acting out because he wasn't challenged.
                  At BMFL, he can work ahead in subjects where he excels while getting support in areas where he needs
                  it. The multi-age classroom lets him mentor younger students, which has developed his leadership
                  skills tremendously."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">TW</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Tanya Williams</p>
                    <p className="text-gray-600">Marcus's Mom, Kingwood</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Easy Access */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Easy Access</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located with easy access from Highway 494 and other main access roads throughout the greater
              Houston area.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">22893 Antique Ln, New Caney, TX 77357</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Phone: (832) 957-7530</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Email: info@brightmindsfutureleaders.com</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">School Hours: 8:30 AM - 3:30 PM</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Office Hours: 7:30 AM - 5:00 PM, Monday - Friday</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Is Your Child Ready to Thrive?</h2>
          <p className="text-xl mb-8 opacity-90">
            Every child deserves an education that meets their unique needs. Let's discuss how we can help your child
            succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 font-semibold px-8 py-3 text-lg rounded-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/book">Schedule a Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3 text-lg rounded-lg bg-transparent"
            >
              <Link href="https://book.brightmindsfutureleaders.com/parent-packet-intake">
                Download Our Parent Packet <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
