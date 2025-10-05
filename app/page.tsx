import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, BookOpen, Heart, Star, Target, TrendingUp } from "lucide-react"
import { TrackingEvents } from "@/components/TrackingEvents"
import GoogleReviews from "@/components/GoogleReviews"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "PrivateSchool",
    name: "Bright Minds Future Leaders",
    alternateName: "BMFL",
    description:
      "Private micro school in New Caney Texas offering personalized K-8 education with maximum 12 students per class",
    url: "https://brightmindsfutureleaders.com",
    telephone: "+18329577530",
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
      longitude: -95.1849,
    },
    founder: {
      "@type": "Person",
      name: "Angela Gilmer",
      jobTitle: "Founder & Lead Educator",
      description: "Certified teacher with over 15 years of experience in education",
    },
    areaServed: [
      "New Caney TX",
      "Porter TX",
      "Humble TX",
      "Kingwood TX",
      "Splendora TX",
      "Shepherd TX",
      "Cleveland TX",
      "Huffman TX",
      "Spring TX",
      "Montgomery County TX",
    ],
    sameAs: ["https://www.facebook.com/brightmindsfutureleaders", "https://www.instagram.com/brightmindsfutureleaders"],
    priceRange: "$$",
    foundingDate: "2023",
    image: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
    logo: {
      "@type": "ImageObject",
      url: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
      width: 200,
      height: 60,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Educational Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "K-8 Private Education",
            description: "Personalized education for students kindergarten through 8th grade",
            provider: {
              "@type": "PrivateSchool",
              name: "Bright Minds Future Leaders",
            },
          },
        },
      ],
    },
  }

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bright Minds Future Leaders",
    description:
      "Private micro school in New Caney Texas offering personalized K-8 education with maximum 12 students per class",
    url: "https://brightmindsfutureleaders.com",
    telephone: "+18329577530",
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
      longitude: -95.1849,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30", // Updated from 08:00
        closes: "15:30",
      },
    ],
    priceRange: "$$",
    image: "https://brightmindsfutureleaders.com/logo-bright-minds.png",
    sameAs: ["https://www.facebook.com/brightmindsfutureleaders", "https://www.instagram.com/brightmindsfutureleaders"],
  }

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Private School in New Caney, TX | Bright Minds Future Leaders",
    description:
      "Private micro school in New Caney, TX. Small class sizes, personalized learning, character development for K-8. Serving Porter, Humble, Kingwood.",
    url: "https://brightmindsfutureleaders.com",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Bright Minds Future Leaders",
      url: "https://brightmindsfutureleaders.com",
    },
    about: {
      "@type": "EducationalOrganization",
      name: "Bright Minds Future Leaders",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://brightmindsfutureleaders.com/hero-students-bg.png",
      width: 1200,
      height: 630,
    },
  }

  // Breadcrumb Schema
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
    ],
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Private Education",
    name: "Private Elementary Education",
    provider: {
      "@type": "PrivateSchool",
      name: "Bright Minds Future Leaders",
    },
    areaServed: {
      "@type": "City",
      name: "New Caney",
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Educational Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Individualized Learning Plans",
            description: "Personalized learning plans tailored to each child's unique strengths and challenges",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Small Class Sizes",
            description: "Class sizes of 12 students or less for individual attention",
          },
        },
        {
          "@type": "Service", // Added this missing type definition
          name: "Multi-Age Classrooms",
          description: "Mixed-age learning environment that fosters leadership and mentorship",
        },
      ],
    },
  }

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen bg-white">
        <TrackingEvents />
        <Header />

        {/* Hero Section - WITH PROPER TOP PADDING */}
        <section className="pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Text Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Private School in New Caney, TX with Small Class Sizes & Personalized Learning
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple-700 leading-tight">
                    Where Every Child Gets Individual Attention in Our Micro School Environment
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    When teachers say "they'll catch up by third grade," what they really mean is they don't have time
                    to help your child now.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    At Bright Minds Future Leaders, Angela Gilmer doesn't make children wait. She meets them exactly
                    where they are and helps them succeed today—not someday.
                  </p>
                </div>

                {/* Quote section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-l-4 border-yellow-400 shadow-lg">
                  <p className="text-base sm:text-lg text-gray-800 mb-3 italic font-medium">
                    "I don't want my child to just 'catch up.' I want them to thrive from day one. That's why I chose a
                    micro school."
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 font-semibold">
                    - Angela Gilmer, Founder & Certified Teacher
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    asChild
                    className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  >
                    <Link href="https://book.brightmindsfutureleaders.com/apply-now">
                      Schedule Your Child's Assessment
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg rounded-lg bg-white shadow-lg"
                  >
                    <Link href="https://book.brightmindsfutureleaders.com/parent-packet-intake">
                      Download Parent Packet
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Student Photo */}
              <div className="relative order-first lg:order-last">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/hero-students-bg.png"
                    alt="Students engaged in hands-on learning at Bright Minds Future Leaders private school New Caney TX"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  {/* Subtle overlay for brand consistency */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent"></div>

                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                    Real BMFL Students!
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400 rounded-full opacity-60 hidden lg:block"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-60 hidden lg:block"></div>
                <div className="absolute top-1/2 -left-6 w-6 h-6 bg-yellow-400 rounded-full opacity-80 hidden lg:block"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning By Doing Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-purple-600">Learning</span> By <span className="text-pink-500">Doing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Our New Caney private school students don't just read about the world – they experience it through
                hands-on activities, community connections, and real-world learning opportunities.{" "}
                <Link href="/approach" className="text-purple-600 hover:text-purple-700 underline font-semibold">
                  Learn more about Angela Gilmer's educational approach
                </Link>
                .
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
              <div className="relative">
                <Image
                  src="/learning-by-doing-circles.png"
                  alt="Hands-on STEAM education activities at Bright Minds Future Leaders micro school New Caney"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Hands-On Learning That Sticks</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Research shows that children learn best when they can touch, manipulate, and interact with their
                  learning materials. Our private school approach combines traditional academics with engaging, tactile
                  experiences that make learning memorable and fun.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Building and construction activities develop spatial reasoning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Letter and number recognition through multi-sensory methods</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Problem-solving through hands-on challenges and games</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="relative group">
                <Image
                  src="/indoor-building-blocks.png"
                  alt="Students collaborating on building projects at Bright Minds Future Leaders private micro school"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">STEM Building</h4>
                    <p className="text-sm">Developing engineering skills</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/students-outdoor-learning.png"
                  alt="Outdoor learning experience at private school New Caney Texas with small class size"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">Outdoor Learning</h4>
                    <p className="text-sm">Nature-based education</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/parachute-play.png"
                  alt="Multi-age classroom teamwork activities at New Caney micro school promoting cooperation"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">Team Building</h4>
                    <p className="text-sm">Cooperation & coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Boxes */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="border-3 border-blue-400 bg-blue-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <Users className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">Small Class Sizes</h3>
                  <p className="text-sm sm:text-base text-blue-700">
                    Intimate learning environments ensure every child gets the individual attention they deserve. No
                    child gets lost in the crowd.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-3 border-pink-400 bg-pink-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <GraduationCap className="h-12 w-12 sm:h-16 sm:w-16 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-pink-900 mb-2">Multi-Age Classrooms</h3>
                  <p className="text-sm sm:text-base text-pink-700">
                    Our multi-age classrooms foster natural leadership as older students mentor younger ones while
                    learning at their own pace. This approach builds confidence, empathy, and collaborative skills.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-3 border-orange-400 bg-orange-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-2">Self-Directed Learning</h3>
                  <p className="text-sm sm:text-base text-orange-700">
                    Children develop independence and critical thinking skills through guided self-directed learning
                    experiences that build confidence and natural leadership abilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Connections */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Real-World <span className="text-purple-600">Community Connections</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  Learning extends beyond our New Caney private school classroom walls. We believe in connecting our
                  students with their local community through meaningful experiences that bring lessons to life.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Fire safety education with local firefighters</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Community service projects that build character</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Field trips that connect to curriculum topics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Guest speakers who share real-world expertise</span>
                  </li>
                </ul>
              </div>
              <div className="relative order-first lg:order-last">
                <Image
                  src="/fire-truck-visit.png"
                  alt="New Caney firefighters teaching fire safety to private school students at Bright Minds Future Leaders"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                  Community Heroes!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Is This Your Child?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Struggling to keep up with grade-level expectations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Lost in overcrowded classrooms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Behavior issues from frustration and boredom</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">You're worried about their self-esteem</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                  Here's What Changes at BMFL
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Learning at their own pace with confidence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Personal attention from a caring teacher</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Positive behavior through engagement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Building confidence and love for learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Families Choose Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Families Choose Our <span className="text-yellow-500">Private School</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just another school. We're a New Caney community dedicated to nurturing each child's unique
                potential and preparing them for a bright future as thoughtful leaders.{" "}
                <Link href="/who-we-serve" className="text-purple-600 hover:text-purple-700 underline font-semibold">
                  See who we serve
                </Link>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="border-3 border-orange-400 bg-orange-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600 mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-orange-900 mb-3">
                    Class Sizes of 12 Students or Less
                  </h3>
                  <p className="text-sm sm:text-base text-orange-700">
                    With class sizes of 12 students or less, every child receives the individual attention they need to
                    succeed and thrive academically. No child gets lost in the crowd in our intimate learning
                    environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-3 border-purple-400 bg-purple-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Target className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-purple-900 mb-3">
                    Individualized Learning Plans for Every Child
                  </h3>
                  <p className="text-sm sm:text-base text-purple-700">
                    Every child receives a personalized learning plan tailored to their unique strengths, challenges,
                    and learning style. We meet students where they are and help them grow at their own pace.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-3 border-blue-400 bg-blue-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">Hands-On, Experiential Education</h3>
                  <p className="text-sm sm:text-base text-blue-700">
                    Learning comes alive through tactile, hands-on experiences. Our students don't just read about
                    concepts—they build, create, explore, and discover through engaging real-world activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-3 border-red-400 bg-red-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-red-600 mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-red-900 mb-3">
                    Multi-Age Classrooms That Foster Leadership
                  </h3>
                  <p className="text-sm sm:text-base text-red-700">
                    Our mixed-age approach creates natural mentorship opportunities where older students develop
                    leadership skills while younger students benefit from peer guidance, all while learning at their own
                    pace.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-3 border-green-400 bg-green-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-3">Real-World Community Connections</h3>
                  <p className="text-sm sm:text-base text-green-700">
                    Students learn beyond classroom walls through meaningful community partnerships, field trips, guest
                    speakers, and service projects that connect academic concepts to real-world experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-3 border-pink-400 bg-pink-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-pink-600 mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-pink-900 mb-3">
                    Private School Quality with Affordable Tuition
                  </h3>
                  <p className="text-sm sm:text-base text-pink-700">
                    Unlike traditional private schools, our micro school model allows us to provide even more
                    personalized attention while keeping costs accessible for New Caney families.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 sm:mt-10 text-center">
              <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-2xl p-6 sm:p-8 shadow-xl">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Private School Quality with Affordable Tuition
                </p>
                <p className="text-lg sm:text-xl text-gray-800">Excellence shouldn't break the bank</p>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl p-6 sm:p-8 lg:p-10 border-l-4 border-purple-500 shadow-lg">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed text-center">
                  <span className="font-bold text-purple-700">Here's the truth:</span> Most schools can't give your
                  child what they need because they're managing 25-30 kids per classroom. That's not the teacher's
                  fault—it's impossible. At our New Caney private school, Angela Gilmer works with small groups where
                  every child gets the <span className="font-semibold text-pink-600">individual attention</span> that
                  makes the difference between{" "}
                  <span className="font-semibold text-blue-600">struggling and thriving</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Serving Families Throughout the Greater Houston Area
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                We proudly serve families from New Caney, Humble, Kingwood, Spring, and surrounding communities with our
                personalized approach to education.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <Link href="/areas/new-caney" className="block group">
                <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      New Caney
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Learn more →</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/areas/humble" className="block group">
                <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      Humble
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Learn more →</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/areas/kingwood" className="block group">
                <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      Kingwood
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Learn more →</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/areas/atascocita" className="block group">
                <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      Atascocita
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Learn more →</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/areas/spring" className="block group">
                <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      Spring
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Learn more →</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/areas/porter" className="block group">
                <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      Porter
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Learn more →</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/areas/the-woodlands" className="block group">
                <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      The Woodlands
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Learn more →</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/areas/conroe" className="block group">
                <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      Conroe
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Learn more →</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Parents Are Saying</h2>
              <p className="text-lg text-gray-600">
                Read more{" "}
                <Link href="/success-stories" className="text-purple-600 hover:text-purple-700 underline font-semibold">
                  success stories from our families
                </Link>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="border-3 border-yellow-400 bg-yellow-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 mb-4">
                    "My child has thrived in this environment. The small class sizes and personalized attention have
                    made all the difference. She's confident, engaged, and actually loves learning now!"
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">- Sarah M.</p>
                </CardContent>
              </Card>

              <Card className="border-3 border-purple-400 bg-purple-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 mb-4">
                    "After struggling in traditional school, my son is finally succeeding. Angela really understands how
                    to reach each child and help them grow. We couldn't be happier!"
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">- Michael R.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Educational Insights & Resources</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our blog for expert insights on private education, micro schools, and personalized learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Link href="/blog/micro-schools-vs-traditional-schools" className="block group">
                <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-3">
                      Micro-Schools vs Traditional Schools
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover how micro-schools provide individualized attention that traditional schools can't match.
                    </p>
                    <span className="text-purple-600 font-semibold">Read more →</span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/5-signs-your-child-needs-smaller-class-sizes" className="block group">
                <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-3">
                      5 Signs Your Child Needs Smaller Class Sizes
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn the key indicators that your child would thrive in a more intimate learning environment.
                    </p>
                    <span className="text-purple-600 font-semibold">Read more →</span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/ability-based-learning-explained" className="block group">
                <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-3">
                      Ability-Based Learning Explained
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Understand how teaching to ability level instead of age transforms student outcomes.
                    </p>
                    <span className="text-purple-600 font-semibold">Read more →</span>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Your Child Deserves More Than "They'll Catch Up Eventually"
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Every day your child spends struggling is a day of lost confidence and missed opportunities. At Bright
              Minds Future Leaders, we believe every child deserves to thrive from day one.
            </p>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-80">
              Limited spots available for the 2024-2025 school year. Don't wait - your child's future starts now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg rounded-lg shadow-lg"
              >
                <Link href="https://book.brightmindsfutureleaders.com/apply-now">Schedule Your Child's Assessment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg rounded-lg bg-transparent shadow-lg"
              >
                <Link href="https://book.brightmindsfutureleaders.com/parent-packet-intake">
                  Download Our Parent Packet
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <GoogleReviews />

        <Footer />
      </div>
    </>
  )
}
