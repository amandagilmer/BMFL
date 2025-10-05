import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { TrackingEvents } from "@/components/TrackingEvents"
import Image from "next/image"
import { generatePageMetadata } from "@/lib/metadata-utils"

export const metadata: Metadata = generatePageMetadata({
  title: "Our Educational Approach | Bright Minds Future Leaders",
  description:
    "Discover our unique educational approach: ability-based learning, small class sizes (max 12 students), hands-on activities, and character development. Private micro school in New Caney, TX serving K-8 students.",
  path: "/approach",
  image: "/learning-by-doing-puzzle.png",
})

export default function ApproachPage() {
  return (
    <>
      <TrackingEvents />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Approach</h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                At Bright Minds Future Leaders, we believe every child deserves an education tailored to their unique
                abilities, interests, and learning style. Our approach combines personalized, ability-based learning
                with small class sizes and hands-on experiences to help each student thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Ability-Based Learning */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ability-Based Learning, Not Age-Based
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Traditional schools group children by age, but we know that children develop at different rates. One
                  child might excel in math while needing extra support in reading—and that's perfectly normal.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Our ability-based approach means each student works at their own level in each subject. This ensures
                  no child is held back or left behind. Instead, they build confidence through mastery and progress at a
                  pace that's right for them.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">What This Looks Like:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-700">
                        A 7-year-old reading at a 4th grade level can advance without waiting for classmates
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-700">
                        A 9-year-old struggling with multiplication gets targeted support at their exact level
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-700">
                        Students experience success daily because the work is appropriately challenging—not too easy,
                        not too hard
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  src="/learning-by-doing-puzzle.png"
                  alt="Students engaged in hands-on learning at Bright Minds Future Leaders private school New Caney TX"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Small Class Sizes */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/classroom-building-together.png"
                  alt="Small class size at Bright Minds Future Leaders private micro school New Caney"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Small Class Sizes Matter</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  With a maximum of 12 students per class, we provide the individual attention every child deserves.
                  This isn't just a nice-to-have—it's essential to our educational model.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Small classes allow us to truly know each student: their learning style, their interests, their
                  challenges, and their strengths. We can identify gaps quickly, celebrate victories personally, and
                  adapt instruction in real-time.
                </p>
                <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-center">
                      <p className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">12:1</p>
                      <p className="text-gray-700 font-semibold text-lg">Maximum Student-to-Teacher Ratio</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">The Benefits:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">•</span>
                      <span className="text-gray-700">More one-on-one instruction time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">•</span>
                      <span className="text-gray-700">Stronger teacher-student relationships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">•</span>
                      <span className="text-gray-700">
                        More opportunities for students to ask questions and participate
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">•</span>
                      <span className="text-gray-700">A calm, focused learning environment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hands-On, Real-World Learning */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hands-On, Real-World Learning</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Children learn best by doing, not just by listening. Our curriculum emphasizes hands-on activities,
                projects, and real-world applications that make learning engaging and memorable.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">STEM & Science</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hands-on experiments, engineering challenges, coding projects, and problem-solving activities that
                  bring STEM concepts to life.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Arts</h3>
                <p className="text-gray-700 leading-relaxed">
                  Art, music, drama, and creative projects that develop imagination, self-expression, and confidence.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🌳</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Outdoor Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nature exploration, gardening, physical activities, and learning that extends beyond classroom walls.
                </p>
              </div>
            </div>
            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Why Hands-On Learning Works</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Deeper Understanding</h4>
                    <p className="text-gray-600">Students remember what they do, not just what they hear</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Increased Engagement</h4>
                    <p className="text-gray-600">Active learning keeps students motivated and focused</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real-World Skills</h4>
                    <p className="text-gray-600">Students learn to apply knowledge to solve actual problems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Critical Thinking</h4>
                    <p className="text-gray-600">Hands-on projects develop problem-solving abilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Character Development */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Character Development</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Academic skills are important, but character is the foundation for lifelong success and fulfillment. We
                intentionally cultivate virtues that help children become kind, responsible, resilient individuals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="font-bold text-gray-900 mb-2 text-xl">Integrity</h3>
                <p className="text-gray-600">
                  Honesty, accountability, and doing the right thing even when no one is watching
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">💪</div>
                <h3 className="font-bold text-gray-900 mb-2 text-xl">Resilience</h3>
                <p className="text-gray-600">
                  Bouncing back from challenges, learning from mistakes, and developing perseverance
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="font-bold text-gray-900 mb-2 text-xl">Compassion</h3>
                <p className="text-gray-600">Empathy, kindness, respect for others, and caring for our community</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-bold text-gray-900 mb-2 text-xl">Responsibility</h3>
                <p className="text-gray-600">
                  Taking ownership of actions, choices, and learning; being dependable and trustworthy
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How We Teach Character</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-blue-600">→</span>
                    Daily Modeling
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Teachers demonstrate the values we want to see in students through their own actions and choices
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-blue-600">→</span>
                    Explicit Instruction
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We teach character traits directly, discussing what they mean and why they matter
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-blue-600">→</span>
                    Practice & Reflection
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Students practice character skills through real situations and reflect on their choices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Age Learning */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Multi-Age Learning Community</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Our classrooms bring together students of different ages, creating a family-like atmosphere where
                  older students mentor younger ones and younger students learn from older peers.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  This approach mirrors real-world relationships and provides unique social-emotional benefits that
                  traditional single-grade classrooms cannot offer.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">For Younger Students:</h4>
                    <p className="text-gray-700">
                      They have positive role models, receive peer mentoring, and see what they'll be capable of in the
                      future
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">For Older Students:</h4>
                    <p className="text-gray-700">
                      They develop leadership skills, reinforce their own learning by teaching others, and build
                      confidence
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/learning-by-doing-circles.png"
                  alt="Multi-age classroom at New Caney micro school"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Result */}
        <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-blue-100">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Result</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                When you combine ability-based learning, small class sizes, hands-on activities, character development,
                and a multi-age community, you get something special: students who are confident, curious, kind, and
                capable.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <p className="text-2xl font-semibold text-blue-600 mb-4">
                  "Every child can succeed when given the right environment and support."
                </p>
                <p className="text-gray-700 font-medium">— The Bright Minds Future Leaders Philosophy</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Approach Firsthand</h2>
            <p className="text-xl mb-8 leading-relaxed">
              The best way to understand our educational approach is to see it in action. Schedule a tour and visit our
              campus to see how we create a learning environment where every child thrives.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
            >
              Schedule a Tour Today
            </a>
            <p className="mt-6 text-blue-100">
              Have questions?{" "}
              <a href="/faq" className="underline hover:text-white">
                Visit our FAQ page
              </a>{" "}
              or call us at (281) 651-5258
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
