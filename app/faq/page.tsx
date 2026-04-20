import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions About Our Private School",
  description:
    "Get answers to your questions about Bright Minds Future Leaders — tuition, schedule, curriculum, enrollment, and more. K-5 private school in New Caney, TX serving Kingwood, Porter, Splendora & surrounding areas.",
  alternates: { canonical: "https://brightmindsfutureleaders.com/faq" },
  openGraph: {
    title: "FAQ | Bright Minds Future Leaders — New Caney TX Private School",
    description:
      "Questions about BMFL? Find answers on tours, curriculum, tuition, daily schedule, enrollment, and more. K-5 private school in New Caney, TX.",
    url: "https://brightmindsfutureleaders.com/faq",
    siteName: "Bright Minds Future Leaders",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Bright Minds Future Leaders — New Caney TX Private School",
    description:
      "Questions about BMFL? Find answers on tours, curriculum, tuition, daily schedule, enrollment, and more. K-5 private school in New Caney, TX.",
  },
}

const faqs = [
  {
    category: "About Our School",
    questions: [
      {
        q: "What makes BMFL different from traditional private schools?",
        a: "BMFL keeps class sizes intentionally small so every child gets real individual attention — not the 20-30 students per classroom that's common in traditional schools. We use ability-based learning instead of age-based learning, which means your child works at their actual level in reading and math rather than being pushed through material they're not ready for — or held back from material they've already mastered. And because Angela is the founder and the teacher, you have direct access to the person who knows your child best.",
      },
      {
        q: "What grades do you serve?",
        a: "We currently serve students in Kindergarten through 5th grade (K-5). We do not offer Pre-K at this time. If enough older students enroll, we may expand to serve upper grades in the future — contact us to discuss your child's specific situation.",
      },
      {
        q: "How many students are in the class?",
        a: "We keep class sizes small by design. Our multi-age classroom brings K-5 students together, which creates natural mentoring opportunities and mirrors real-world environments. Small class sizes mean your child is never invisible.",
      },
    ],
  },
  {
    category: "Enrollment & Admissions",
    questions: [
      {
        q: "How do I get started?",
        a: "The first step is scheduling a tour so you can see the school, meet Angela, and ask questions. From there, if it feels like a good fit, we'll schedule a separate academic placement session to assess your child in reading and math so we know exactly where to start them. You can book a tour at book.brightmindsfutureleaders.com or call (832) 957-7530.",
      },
      {
        q: "Can we schedule a tour?",
        a: "Absolutely — we love showing families around. Tours are scheduled before or after school hours, typically 30 minutes or less. We cannot accommodate tours during the school day since Angela is actively teaching. Call (832) 957-7530 or visit book.brightmindsfutureleaders.com to set one up.",
      },
      {
        q: "Is there an academic assessment before enrollment?",
        a: "Yes. After your tour, we schedule a separate academic placement session where Angela works one-on-one with your child to assess their reading and math ability. This is not a pass/fail test — it's how we figure out exactly where your child is so we can meet them there from day one. There is a testing fee for this session, which is separate from tuition. We'll walk you through the details when you reach that step.",
      },
      {
        q: "Do you accept students mid-year?",
        a: "Yes, we accept new students throughout the year on a rolling basis, as space permits. Our individualized approach makes it easy to bring a new student in without disrupting the rest of the class.",
      },
      {
        q: "Do you have a waitlist?",
        a: "When we reach capacity, we do maintain a waitlist and contact families in order as spots open. Reach out early if you're interested — (832) 957-7530 or info@brightmindsfutureleaders.com.",
      },
    ],
  },
  {
    category: "Curriculum & Academics",
    questions: [
      {
        q: "What curriculum do you use?",
        a: "We use a Science of Reading approach for literacy, which means systematic phonics and decodable readers — the most research-backed method for teaching children to read. Math is hands-on and ability-based. Science and Social Studies are taught through project-based learning. Every subject is taught with mastery in mind, not speed.",
      },
      {
        q: "How does ability-based learning work?",
        a: "Instead of grouping children by age and expecting everyone to learn the same thing at the same pace, we assess where each child actually is in reading and math and build from there. A child might be working above grade level in reading while receiving additional support in math — and that's completely fine. We meet every child where they are.",
      },
      {
        q: "How do you assess students?",
        a: "We assess each child in reading and math at enrollment through a private academic placement session. From there, we track progress throughout the year and adjust learning plans regularly. Our goal is mastery — we don't move on until a child truly understands the concept.",
      },
      {
        q: "Do you give letter grades or do standardized testing?",
        a: "No standardized testing and no traditional letter grades. We focus on real mastery and genuine progress. Our goal is to remove the stigma that comes with grades and help every child experience authentic success and growth at their own pace.",
      },
      {
        q: "Will my child be prepared for middle school?",
        a: "Yes. Students who go through our ability-based program typically have strong foundational skills, developed critical thinking habits, and the self-confidence to advocate for themselves. Because we focus on mastery rather than social promotion, students leave us genuinely prepared — not just passed along.",
      },
      {
        q: "How do you support kids with learning differences?",
        a: "Many of our students have dyslexia, ADHD, and other learning differences — and they thrive here. Small class sizes let us adapt pace, materials, and teaching methods to each child. We collaborate with outside therapists when families are working with them. We're not a specialized intensive services program, but we're often exactly what a child with learning differences needs.",
      },
    ],
  },
  {
    category: "Daily Schedule & Operations",
    questions: [
      {
        q: "What are your school hours?",
        a: "School runs from 8:30 AM to 3:30 PM, Monday through Friday. Drop-off begins at 8:00 AM. We do not currently offer before-school or after-school care — it's something we're actively looking into for the future.",
      },
      {
        q: "What does a typical school day look like?",
        a: "The day begins with Morning Group at 8:30 AM, followed by Reading/Language Arts from 9:00–10:15 AM, Math from 10:30 AM–12:00 PM, and Science/Project-Based Learning from 1:30–3:00 PM. We close with a Reflection period from 3:00–3:15 PM. Fridays are Enrichment days with special activities beyond the core curriculum.",
      },
      {
        q: "What is Enrichment Friday?",
        a: "Every Friday is dedicated to enrichment — extra-curricular activities and hands-on learning experiences that go beyond the core curriculum. It's one of our students' favorite parts of the week.",
      },
      {
        q: "What is your school calendar?",
        a: "BMFL follows a 12-month year-round calendar. During the August through May school year, we take breaks approximately every 6 weeks. Summer includes scheduled breaks as well. This structure keeps learning consistent and helps prevent the regression that often happens with long summer breaks.",
      },
      {
        q: "Is before or after school care available?",
        a: "Not at this time. We currently run 8:30 AM to 3:30 PM with drop-off starting at 8:00 AM. Extended care is something we're exploring for the future — contact us to let us know if this is something your family needs.",
      },
    ],
  },
  {
    category: "Lunch, Food & Safety",
    questions: [
      {
        q: "Do you provide lunch or snacks?",
        a: "Families are responsible for sending lunch and snacks with their child each day. We encourage parents to pack a nutritious lunch and a snack. Students should bring a water bottle — filtered water is available at school. We do not provide snacks or meals.",
      },
      {
        q: "What should my child bring each day?",
        a: "Lunch, a snack, and a water bottle. We have filtered water available so kids can refill throughout the day.",
      },
      {
        q: "Do you accommodate food allergies?",
        a: "Please let us know about any food allergies during enrollment so we can be aware and keep your child safe. Reach out at (832) 957-7530 or info@brightmindsfutureleaders.com to discuss your child's specific needs.",
      },
      {
        q: "What is your sick policy?",
        a: "Please keep your child home if they have a fever of 100.4°F or higher (and must be fever-free for 24 hours without medication before returning), are vomiting or have diarrhea, or are showing symptoms of a contagious illness. When in doubt, call us — we'd rather err on the side of keeping everyone healthy.",
      },
      {
        q: "What safety measures do you have in place?",
        a: "We maintain controlled access to our facility and strict drop-off and pickup procedures. All staff undergo background checks. Please contact us directly at (832) 957-7530 to discuss our current safety and emergency protocols in detail.",
      },
    ],
  },
  {
    category: "Tuition & Fees",
    questions: [
      {
        q: "How much is tuition?",
        a: "Please contact us for current tuition rates — we're happy to walk you through everything during a tour or phone call. One thing worth knowing: we're able to keep tuition more affordable than many private schools in the area because our curriculum fee is billed separately. That means tuition covers instruction, not materials, which keeps base costs lower.",
      },
      {
        q: "What fees are there beyond tuition?",
        a: "There are two additional fees to know about. The curriculum fee is a separate charge that covers all of your child's curriculum materials for the year — books, workbooks, and instructional resources. The testing fee covers the academic placement session we do before enrollment, where Angela works one-on-one with your child to assess their reading and math levels. We'll be transparent about all costs upfront so there are no surprises.",
      },
      {
        q: "What does tuition include?",
        a: "Tuition covers your child's daily instruction, Angela's time and teaching, enrichment activities, and access to outdoor learning spaces. Curriculum materials are covered by a separate curriculum fee. Field trips are not included in tuition. Some summer camps are included while others have an additional cost — we'll let you know specifically which is which.",
      },
      {
        q: "What payment options are available?",
        a: "We offer yearly, monthly (billed over 12 months), and biweekly payment plans. We accept cash, and credit cards are accepted with a processing fee. We do not offer quarterly payment plans.",
      },
      {
        q: "Do you offer financial aid or discounts?",
        a: "We don't have a formal financial aid or scholarship program. However, if your family needs help making tuition work, reach out to Angela directly. She's willing to work with families on customized payment arrangements when possible — she'd rather find a way to make it work than turn a child away.",
      },
    ],
  },
  {
    category: "Location & Transportation",
    questions: [
      {
        q: "Where are you located?",
        a: "We're at 22893 Antique Ln, New Caney, TX 77357. We're conveniently located with access from US 59 and Loop 494, between 99 and FM 1485 — making us reachable from Kingwood, Porter, Humble, Splendora, Spring, Atascocita, Conroe, and surrounding communities.",
      },
      {
        q: "Do you provide transportation?",
        a: "We don't offer bus service. Most families use parent drop-off. Our location between US 59 and Loop 494 is designed to be accessible from across the greater Houston area. Many families carpool as well.",
      },
    ],
  },
  {
    category: "Parent Communication",
    questions: [
      {
        q: "How will I know how my child is doing?",
        a: "Angela believes in open, ongoing communication. You'll have regular progress updates, and because of our small class size, Angela knows every student personally. You're never just a number here — and neither is your child.",
      },
      {
        q: "Can I visit or volunteer?",
        a: "Parents are welcome to schedule observations and volunteer. Because we maintain a focused learning environment, we ask that visits be scheduled in advance so they don't interrupt instruction.",
      },
      {
        q: "How do I reach Angela?",
        a: "Call (832) 957-7530 or email info@brightmindsfutureleaders.com. Angela typically responds within 24 hours on school days. For urgent matters during the school day, phone is best.",
      },
    ],
  },
  {
    category: "Special Programs & Enrichment",
    questions: [
      {
        q: "Do you take field trips?",
        a: "Yes, we take educational field trips to museums, nature centers, historical sites, and other local learning destinations. Field trips are not included in tuition and are priced separately.",
      },
      {
        q: "Do you offer summer programs?",
        a: "We offer summer enrichment programs with hands-on activities and continued learning. Some summer camps are included in enrollment while others have an additional cost — we'll give you specifics when you enroll.",
      },
      {
        q: "What enrichment activities do you offer?",
        a: "Enrichment is built into our weekly schedule — every Friday is dedicated to enrichment activities that go beyond the core subjects. Art, hands-on projects, and special activities are part of the regular school experience.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Bright Minds Future Leaders — curriculum, schedule, tuition,
            enrollment, and more.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Don't see your question?{" "}
            <a href="tel:+18329577530" className="text-green-600 font-semibold hover:text-green-700">
              Call us at (832) 957-7530
            </a>{" "}
            or{" "}
            <Link href="/contact" className="text-green-600 font-semibold hover:text-green-700">
              send us a message
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-green-200">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, i) => (
                  <Card key={i} className="border border-gray-200 hover:border-green-300 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.q}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            The best way to get answers is to come see us in person. Schedule a tour and meet Angela — no pressure,
            just a conversation about whether BMFL is the right fit for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold px-8 py-3 text-lg rounded-lg"
            >
              <Link href="https://book.brightmindsfutureleaders.com/book">Book a Tour</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3 text-lg rounded-lg bg-transparent"
            >
              <a href="tel:+18329577530">Call (832) 957-7530</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* FAQ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.flatMap((section) =>
              section.questions.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              }))
            ),
          }),
        }}
      />
    </div>
  )
}
