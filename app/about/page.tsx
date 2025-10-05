import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Award, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Our Private Micro School | Bright Minds Future Leaders",
  description:
    "Learn about our innovative private micro school in New Caney, TX. Meet founder Angela Gilmer and discover our personalized education philosophy.",
  openGraph: {
    title: "About Our Private Micro School | Bright Minds Future Leaders",
    description:
      "Learn about our innovative private micro school in New Caney, TX. Meet founder Angela Gilmer and discover our personalized education philosophy.",
    url: "https://brightmindsfutureleaders.com/about",
    siteName: "Bright Minds Future Leaders",
    images: [
      {
        url: "https://brightmindsfutureleaders.com/angela-gilmer-students.jpeg",
        width: 1200,
        height: 630,
        alt: "Angela Gilmer founder of Bright Minds Future Leaders private micro school New Caney TX with students",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Private Micro School | Bright Minds Future Leaders",
    description:
      "Learn about our innovative private micro school in New Caney, TX. Meet founder Angela Gilmer and discover our personalized education philosophy.",
    images: ["https://brightmindsfutureleaders.com/angela-gilmer-students.jpeg"],
  },
  alternates: {
    canonical: "https://brightmindsfutureleaders.com/about",
  },
}

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Angela Gilmer",
    jobTitle: "Founder & Lead Teacher",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "Bright Minds Future Leaders",
    },
    alumniOf: "Texas Teaching Certification Program",
    knowsAbout: ["Elementary Education", "Montessori Methods", "Individualized Learning", "Early Childhood Education"],
    award: "Texas Certified Teacher",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://brightmindsfutureleaders.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://brightmindsfutureleaders.com/about",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#87CEEB] to-white py-16">
        <div className="container mx-auto px-4 py-9">
          <div className="max-w-4xl mx-auto text-center py-28 pt-20 pb-2.5">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Certified Teacher Behind Our Private Micro School
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Angela Gilmer brings over 20 years of teaching experience and a passion for personalized education to
              every child at Bright Minds Future Leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Angela's Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Image
                  src="/angela-gilmer-students.jpeg"
                  alt="Angela Gilmer founder of Bright Minds Future Leaders private micro school New Caney TX with students"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why I Started This School</h2>
                <p className="text-gray-700 mb-4">
                  As a certified teacher with decades of experience in both public and private education, I saw
                  firsthand how children get lost in overcrowded classrooms. I watched talented teachers struggle to
                  meet individual needs when managing 25-30 students at once.
                </p>
                <p className="text-gray-700 mb-4">
                  I founded Bright Minds Future Leaders because I believe every child deserves personalized attention
                  and the chance to learn at their own pace. Our{" "}
                  <Link href="/" className="text-purple-600 hover:text-purple-700 underline font-semibold">
                    private micro school in New Caney
                  </Link>{" "}
                  model allows me to do what I've always wanted: truly know each student and tailor their education to
                  their unique strengths and challenges. Learn more about{" "}
                  <Link href="/approach" className="text-purple-600 hover:text-purple-700 underline font-semibold">
                    our teaching approach and philosophy
                  </Link>
                  .
                </p>
                <p className="text-gray-700">
                  As a mother and grandmother myself, I understand what parents want most: a safe, nurturing environment
                  where their child is known, valued, and challenged appropriately every single day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Credentials & Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-[#4169E1] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Certified Educator</h3>
                  <p className="text-gray-600">
                    Texas-certified teacher with specialized training in early childhood education, Montessori methods,
                    and individualized learning approaches.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-[#4169E1] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">20+ Years Teaching</h3>
                  <p className="text-gray-600">
                    Extensive experience teaching across all elementary grade levels in public schools, private schools,
                    and one-on-one tutoring settings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-[#4169E1] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Curriculum Expert</h3>
                  <p className="text-gray-600">
                    Skilled in developing individualized learning plans that meet each child where they are and help
                    them progress at their optimal pace.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-[#4169E1] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Mother & Grandmother</h3>
                  <p className="text-gray-600">
                    Personal experience as a parent and grandparent brings deep understanding of what families need from
                    their children's education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Educational Philosophy</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                I believe that education should be personalized, not standardized. Every child learns differently, has
                unique interests and strengths, and progresses at their own pace. Traditional schools, constrained by
                large class sizes and rigid grade levels, can't accommodate this reality.
              </p>
              <p className="mb-6">
                At Bright Minds Future Leaders, we practice ability-based learning. If a child is reading at a
                fourth-grade level but needs support in math, we meet them exactly where they are in each subject. This
                approach prevents both the frustration of being pushed too fast and the boredom of being held back. Read
                our{" "}
                <Link
                  href="/blog/ability-based-learning-explained"
                  className="text-purple-600 hover:text-purple-700 underline font-semibold"
                >
                  blog post explaining ability-based learning
                </Link>{" "}
                to understand how this transforms student outcomes.
              </p>
              <p className="mb-6">
                I also believe in hands-on, experiential learning. Children learn best by doing - building,
                experimenting, creating, and discovering. Our curriculum integrates real-world experiences, community
                connections, and tactile activities that make learning memorable and meaningful.
              </p>
              <p>
                Most importantly, I believe in building relationships. In our small setting, I know every child
                personally - their learning style, their challenges, their dreams. This relationship is the foundation
                of effective teaching and the reason our students thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Information */}
      <section className="py-16 bg-purple-50 rounded-xl p-8 mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Serving Families Throughout the Greater Houston Area
        </h3>
        <p className="text-gray-700 text-center mb-6">
          We proudly serve families from{" "}
          <Link href="/areas/new-caney" className="text-purple-600 hover:text-purple-700 underline font-semibold">
            New Caney
          </Link>
          ,{" "}
          <Link href="/areas/porter" className="text-purple-600 hover:text-purple-700 underline font-semibold">
            Porter
          </Link>
          ,{" "}
          <Link href="/areas/humble" className="text-purple-600 hover:text-purple-700 underline font-semibold">
            Humble
          </Link>
          ,{" "}
          <Link href="/areas/kingwood" className="text-purple-600 hover:text-purple-700 underline font-semibold">
            Kingwood
          </Link>
          ,{" "}
          <Link href="/areas/spring" className="text-purple-600 hover:text-purple-700 underline font-semibold">
            Spring
          </Link>
          , and surrounding communities. Visit our{" "}
          <Link href="/faq" className="text-purple-600 hover:text-purple-700 underline font-semibold">
            FAQ page for common questions
          </Link>{" "}
          or{" "}
          <Link href="/blog" className="text-purple-600 hover:text-purple-700 underline font-semibold">
            read our blog
          </Link>{" "}
          to learn more about private micro school education.
        </p>
      </section>

      {/* Personal Photo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Image
              src="/angela-gilmer-couple.jpeg"
              alt="Angela Gilmer with her husband founders of Bright Minds Future Leaders private micro school New Caney Texas"
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full max-w-2xl mx-auto mb-8"
            />
            <p className="text-gray-700 text-lg">
              Angela and her husband are proud members of the New Caney community and are dedicated to providing
              exceptional private education to families throughout the greater Houston area.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-[#87CEEB] to-[#4169E1] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule a Tour & Meet Angela</h2>
            <p className="text-xl mb-8 text-white/90">
              Come visit our school, see our approach in action, and learn how we can help your child thrive. I look
              forward to meeting you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#FFD700] text-gray-900 hover:bg-[#FFC700] text-lg px-8">
                <Link href="/contact">Schedule a Tour</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-[#4169E1] hover:bg-gray-100 text-lg px-8"
              >
                <Link href="/apply">Start Application</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
