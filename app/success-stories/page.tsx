import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Users, Award, Heart, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoogleReviews from "@/components/GoogleReviews"

export default function SuccessStories() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center px-0 py-28">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Real families, real results. See how our personalized approach has transformed the educational journey of
            our students.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-orange-300" />
              <span>Academic Growth</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-purple-300" />
              <span>Character Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-300" />
              <span>Social Skills</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-purple-200 shadow-xl">
            <CardHeader className="text-center pb-8">
              <Badge className="w-fit mx-auto mb-4 bg-purple-600 text-white">Featured Story</Badge>
              <CardTitle className="text-3xl md:text-4xl text-purple-800">From Struggling to Thriving</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6">
                    "My daughter went from dreading school to asking if she could stay longer. The personalized
                    attention and character development program have been life-changing for our family."
                  </blockquote>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <cite className="text-purple-700 font-semibold">- Sarah M., Parent of Emma (Age 8)</cite>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-purple-200">
                  <h4 className="text-xl font-bold text-purple-800 mb-4">Emma's Journey</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Reading level improved by 2 grades in 6 months</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Developed leadership skills through peer mentoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Increased confidence in public speaking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Built lasting friendships across age groups</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Measurable Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our personalized approach delivers consistent, measurable improvements across all areas of development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-blue-400">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-100" />
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Academic Improvement</div>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-purple-400">
              <Heart className="w-12 h-12 mx-auto mb-4 text-purple-100" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Character Growth</div>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white border-orange-400">
              <Users className="w-12 h-12 mx-auto mb-4 text-orange-100" />
              <div className="text-3xl font-bold mb-2">90%</div>
              <div className="text-orange-100">Social Skills Development</div>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-pink-500 to-pink-600 text-white border-pink-400">
              <Award className="w-12 h-12 mx-auto mb-4 text-pink-100" />
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-pink-100">Parent Satisfaction</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Individual Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Transformations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every child's journey is unique. Here are just a few examples of how our approach has made a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-800">Marcus, Age 10</CardTitle>
                <Badge className="w-fit bg-blue-600 text-white">Math Excellence</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "Marcus came to us struggling with math anxiety. Through our personalized approach and hands-on
                  learning methods, he not only overcame his fear but now helps teach younger students."
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-sm text-blue-700 font-medium">
                  Improved from below grade level to 2 grades ahead in 8 months
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-orange-50 border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-800">Sophia, Age 7</CardTitle>
                <Badge className="w-fit bg-purple-600 text-white">Leadership Growth</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "Sophia was very shy when she started. Our mixed-age environment and character development program
                  helped her find her voice and become a natural leader."
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-sm text-purple-700 font-medium">
                  Now mentors younger students and leads group activities
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-blue-50 border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-orange-800">David, Age 9</CardTitle>
                <Badge className="w-fit bg-orange-600 text-white">Creative Expression</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "David's creativity was being stifled in traditional school. Here, he's able to express himself
                  through art, writing, and innovative problem-solving approaches."
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-sm text-orange-700 font-medium">
                  Won regional art competition and published a short story
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-pink-800">Isabella, Age 11</CardTitle>
                <Badge className="w-fit bg-pink-600 text-white">Academic Excellence</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "Isabella was academically gifted but socially struggling. Our program helped her develop emotional
                  intelligence while challenging her intellectually."
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-sm text-pink-700 font-medium">
                  Advanced 3 grade levels while building strong friendships
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before & After Comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the common challenges our students face and how our approach addresses them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Before Bright Minds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Struggling with one-size-fits-all curriculum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Limited individual attention in large classes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lack of character development focus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Age-segregated learning limiting growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Standardized testing pressure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  After Bright Minds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Personalized learning plans for each child</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>1:6 teacher-to-student ratio ensuring attention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integrated character development program</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mixed-age learning fostering leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ability-based assessment and growth tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join the families who have discovered the difference personalized education makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-4">
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/approach">Learn Our Approach</Link>
            </Button>
          </div>
          <p className="mt-6 text-lg opacity-80">
            Call us today: <span className="font-semibold">(832) 957-7530</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
