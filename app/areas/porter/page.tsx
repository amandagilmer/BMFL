import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Users, BookOpen, GraduationCap, Heart, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Private School Near Porter TX | Bright Minds Future Leaders",
  description:
    "Top-rated private micro school just 10 minutes from Porter TX. Personalized K-8 education with small classes. Serving Porter families. Schedule a tour today.",
  alternates: {
    canonical: "https://brightmindsfutureleaders.com/areas/porter",
  },
  openGraph: {
    title: "Private School Near Porter TX | Bright Minds Future Leaders",
    description:
      "Top-rated private micro school just 10 minutes from Porter TX. Personalized K-8 education with small classes. Serving Porter families. Schedule a tour today.",
    url: "https://brightmindsfutureleaders.com/areas/porter",
    siteName: "Bright Minds Future Leaders",
    images: [
      {
        url: "https://brightmindsfutureleaders.com/hero-students-bg.png",
        width: 1200,
        height: 630,
        alt: "Private School Near Porter TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private School Near Porter TX | Bright Minds Future Leaders",
    description:
      "Top-rated private micro school just 10 minutes from Porter TX. Personalized K-8 education with small classes. Serving Porter families. Schedule a tour today.",
    images: ["https://brightmindsfutureleaders.com/hero-students-bg.png"],
  },
}

export default function PorterAreaPage() {
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
            "@id": "https://brightmindsfutureleaders.com/areas/porter",
            url: "https://brightmindsfutureleaders.com",
            telephone: "(832) 957-7530",
            email: "info@brightmindsfutureleaders.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "22893 Antique Ln",
              addressLocality: "New Caney",
              addressRegion: "TX",
              postalCode: "77357",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 30.1588,
              longitude: -95.1866,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:30",
              closes: "15:30",
            },
            sameAs: [
              "https://www.facebook.com/BrightMindsFutureLeaders",
              "https://www.instagram.com/brightmindsfutureleaders/",
            ],
            areaServed: {
              "@type": "City",
              name: "Porter",
              "@id": "https://en.wikipedia.org/wiki/Porter,_Texas",
            },
            priceRange: "$$",
            description:
              "Private micro school serving Porter TX families with personalized K-8 education, small class sizes of 12 students or less, and individualized learning plans.",
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10 pt-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-6 w-6" />
                <span className="font-semibold text-lg">Serving Porter, TX Families</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Private School Serving Porter, TX Families
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/95">
                Just 10 Minutes from Porter • Personalized K-8 Education at Bright Minds Future Leaders
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Your Tour</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
                >
                  <Link href="/approach">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Bright Minds Future Leaders is conveniently located in nearby New Caney, just a short 10-15 minute
                  drive from Porter, and we are proud to serve many families from the Porter community. Unlike
                  traditional private schools or large public schools, our{" "}
                  <Link
                    href="/"
                    className="text-purple-600 hover:text-purple-700 underline font-semibold no-underline hover:underline"
                  >
                    private micro school model
                  </Link>{" "}
                  provides truly personalized education for each student, with maximum class sizes of 12 students. Your
                  child receives the individualized attention they deserve while building confidence and a genuine love
                  of learning. Learn more about{" "}
                  <Link
                    href="/approach"
                    className="text-purple-600 hover:text-purple-700 underline font-semibold no-underline hover:underline"
                  >
                    our educational approach and philosophy
                  </Link>
                  , or read what{" "}
                  <Link
                    href="/about"
                    className="text-purple-600 hover:text-purple-700 underline font-semibold no-underline hover:underline"
                  >
                    founder Angela Gilmer has to say about personalized education
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/students-outdoor-learning.png"
                alt="Porter TX students engaged in hands-on outdoor learning at Bright Minds Future Leaders private school"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </div>
        </section>

        {/* Why Porter Families Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                Why Porter Families Choose Bright Minds Future Leaders
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Discover what makes our private micro school the top choice for Porter families. Visit our{" "}
                <Link
                  href="/faq"
                  className="text-purple-600 hover:text-purple-700 underline font-semibold no-underline hover:underline"
                >
                  FAQ page for answers to common questions
                </Link>
                .
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <Users className="h-8 w-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Small Class Sizes</h3>
                        <p className="text-gray-600">
                          Maximum of 12 students means teachers truly know each child, their learning style, strengths,
                          and areas for growth. Read more about{" "}
                          <Link
                            href="/blog/5-signs-your-child-needs-smaller-class-sizes"
                            className="text-purple-600 hover:text-purple-700 underline no-underline hover:underline"
                          >
                            the benefits of smaller class sizes
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-pink-100 hover:border-pink-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-pink-100 p-3 rounded-lg">
                        <GraduationCap className="h-8 w-8 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Learning Plans</h3>
                        <p className="text-gray-600">
                          Every student has an individualized approach tailored to their unique needs, abilities, and
                          interests. Discover{" "}
                          <Link
                            href="/blog/ability-based-learning-explained"
                            className="text-purple-600 hover:text-purple-700 underline no-underline hover:underline"
                          >
                            how ability-based learning works
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <BookOpen className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Hands-On Education</h3>
                        <p className="text-gray-600">
                          We believe children learn best by doing. Our curriculum emphasizes experiential learning and
                          real-world application.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <Heart className="h-8 w-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Close-Knit Community</h3>
                        <p className="text-gray-600">
                          Parents are partners in education. We maintain open communication and collaborative
                          relationships with every family.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-pink-100 hover:border-pink-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-pink-100 p-3 rounded-lg">
                        <Award className="h-8 w-8 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Flexible Approach</h3>
                        <p className="text-gray-600">
                          We meet children where they are, not force them into boxes. Learning happens at each child's
                          optimal pace.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <MapPin className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Convenient Location</h3>
                        <p className="text-gray-600">
                          Easy access from Porter via Highway 59, with a comfortable 10-15 minute commute for most
                          families.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Common questions from Porter families about our private micro school. For more answers, visit our{" "}
                <Link
                  href="/faq"
                  className="text-purple-600 hover:text-purple-700 underline font-semibold no-underline hover:underline"
                >
                  comprehensive FAQ page
                </Link>
                .
              </p>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-2 border-purple-100">
                  <AccordionTrigger className="text-lg font-semibold hover:text-purple-600">
                    How far is your private school from Porter, TX?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    Approximately 10-15 minutes from most Porter neighborhoods via Highway 59. We're conveniently
                    located just off the highway in New Caney, making the commute quick and easy for Porter families.
                    Many of our current families come from Porter, Roman Forest, and surrounding areas in East
                    Montgomery County.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-2 border-pink-100">
                  <AccordionTrigger className="text-lg font-semibold hover:text-pink-600">
                    Do you offer before or after school care for Porter commuters?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    Yes, we offer extended hours to accommodate working parents' schedules. We understand that many
                    Porter families commute to Houston or The Woodlands for work, so we provide flexible care options
                    for early drop-off and late pick-up. Please contact us at{" "}
                    <a href="tel:+18329577530">(832) 957-7530</a> to discuss specific timing needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-2 border-blue-100">
                  <AccordionTrigger className="text-lg font-semibold hover:text-blue-600">
                    What grades do you serve?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    K-8, offering continuous elementary and middle school education. This allows children to develop
                    long-term relationships with teachers and peers while progressing through a cohesive curriculum.
                    Unlike traditional schools where children must transition between elementary and middle school, our
                    students enjoy continuity throughout their educational journey with us. Learn more about{" "}
                    <Link
                      href="/who-we-serve"
                      className="text-purple-600 hover:text-purple-700 underline font-semibold no-underline hover:underline"
                    >
                      who we serve and our student demographics
                    </Link>
                    .
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-2 border-purple-100">
                  <AccordionTrigger className="text-lg font-semibold hover:text-purple-600">
                    How is a micro school different from a traditional private school?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    Micro schools cap classes at 12 students maximum, compared to 15-20 in traditional private schools,
                    allowing even more personalized attention. This smaller setting means teachers can truly customize
                    learning for each child, adapt to different learning styles, and build deeper relationships with
                    students and families. Every child gets the individualized support they need to thrive academically
                    and emotionally. Read our{" "}
                    <Link
                      href="/blog/micro-schools-vs-traditional-schools"
                      className="text-purple-600 hover:text-purple-700 underline font-semibold no-underline hover:underline"
                    >
                      blog post comparing micro schools to traditional schools
                    </Link>
                    .
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-2 border-pink-100">
                  <AccordionTrigger className="text-lg font-semibold hover:text-pink-600">
                    How can I tour your school from Porter?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    Call <a href="tel:+18329577530">(832) 957-7530</a> or schedule online, and many families schedule
                    during morning drop-off to see our approach in action. We encourage you to visit so you can observe
                    our small class sizes, meet our dedicated teachers, and see firsthand how we create a personalized
                    learning environment. Tours typically last 30-45 minutes and include time for all your questions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Porter Families: Discover Education Worth the Drive
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              If you're a Porter area family frustrated with overcrowded classes or limited options, Bright Minds Future
              Leaders may be the perfect fit for your child. Just a short commute for a lifetime of educational
              benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-6 py-3 text-lg rounded-lg"
              >
                <Link href="https://book.brightmindsfutureleaders.com/book">Book Tour</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-6 py-3 text-lg rounded-lg bg-transparent"
              >
                <a href="tel:+18329577530">Call (832) 957-7530</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
