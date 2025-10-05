import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, HelpCircle, Phone, Mail, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Bright Minds Future Leaders",
  description:
    "Get answers to common questions about our private micro school in New Caney, TX. Learn about enrollment, tuition, curriculum, class sizes, and more.",
  keywords:
    "private school FAQ, micro school questions, New Caney school enrollment, tuition questions, class size, curriculum questions",
  openGraph: {
    title: "Frequently Asked Questions | Bright Minds Future Leaders",
    description: "Get answers to common questions about our private micro school in New Caney, TX.",
    url: "https://brightmindsfutureleaders.com/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Bright Minds Future Leaders",
    description: "Get answers to common questions about our private micro school in New Caney, TX.",
  },
  alternates: {
    canonical: "https://brightmindsfutureleaders.com/faq",
  },
}

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  // About Our School
  {
    category: "About Our School",
    question: "What is a micro school?",
    answer:
      "A micro school is a small, intentional learning environment that typically serves 15 or fewer students with a low student-to-teacher ratio. Unlike traditional schools, micro schools offer highly personalized education, flexible curricula, and a tight-knit community atmosphere. At Bright Minds Future Leaders, our micro school model allows us to provide individualized attention, ability-based learning, and a family-like environment where every child is known, valued, and supported in their unique learning journey.",
  },
  {
    category: "About Our School",
    question: "How is BMFL different from traditional private schools?",
    answer:
      "While traditional private schools often have 20-30 students per class and follow age-based grade levels, BMFL offers a truly individualized approach with a maximum 8:1 student-to-teacher ratio. We use ability-based learning rather than age-based grouping, meaning your child learns at their own pace in each subject. Our hands-on, experiential approach emphasizes real-world learning over textbooks and standardized testing. We also maintain a family-like atmosphere where parents are true partners in education, and our founder is actively involved in daily operations. This personalized, flexible model simply isn't possible in larger institutional settings.",
  },
  {
    category: "About Our School",
    question: "What grades do you serve?",
    answer:
      "We serve students from Pre-K through 5th grade (ages 4-11). However, because we use ability-based learning rather than traditional grade levels, we meet each child exactly where they are academically in every subject. This means a student might be working at different 'grade levels' across subjects based on their individual abilities and progress. Our multi-age classroom environment allows children to learn from and with peers of varying ages, which builds leadership skills, empathy, and social-emotional growth.",
  },

  // Enrollment & Admissions
  {
    category: "Enrollment & Admissions",
    question: "How do I enroll my child?",
    answer:
      "The enrollment process is designed to be simple and personal. Step 1: Schedule a tour by calling us or filling out our online tour request form. During your visit, you'll meet our team, see our facility, observe our learning environment, and ask questions. Step 2: Complete our online application form, which includes basic information about your child and family. Step 3: We'll review your application and contact you within 2-3 business days to discuss next steps. Step 4: Schedule an informal assessment where we'll spend time with your child to understand their learning style, interests, and current abilities. This isn't a test—it's a conversation that helps us create their personalized learning plan. Step 5: Once accepted, you'll receive enrollment paperwork, tuition information, and your welcome packet. We're here to guide you through every step!",
  },
  {
    category: "Enrollment & Admissions",
    question: "Can we schedule a tour?",
    answer:
      "We encourage all prospective families to schedule a tour before enrolling. Tours are a wonderful opportunity to see our facility, meet our teachers and staff, observe our learning environment in action, and get a feel for our school's warm, family-like atmosphere. During your tour, you'll see our classrooms, outdoor spaces, and learning materials, and we'll answer all your questions about our program, curriculum, and philosophy. Tours typically last 45-60 minutes and can be scheduled during school hours so you can see our students engaged in learning. To schedule your tour, simply call us, fill out our online tour request form, or send us an email. We offer flexible scheduling including morning and afternoon time slots to accommodate your schedule. We look forward to showing you why Bright Minds Future Leaders is the perfect place for your child!",
  },
  {
    category: "Enrollment & Admissions",
    question: "When does enrollment open?",
    answer:
      "We accept applications year-round! While many families begin the enrollment process in the spring for the upcoming fall semester, our rolling admissions policy means you can apply at any time. We recommend starting the process early, especially if you're interested in fall enrollment, as our limited class sizes fill quickly. Priority consideration is given to applications received by March 1st for the following school year. However, if you're interested in mid-year enrollment or need to start immediately, contact us to discuss current availability. The sooner you schedule a tour and submit your application, the better we can accommodate your family's needs and timeline.",
  },
  {
    category: "Enrollment & Admissions",
    question: "Is there an entrance exam?",
    answer:
      "No, we do not have a traditional entrance exam or standardized testing requirement. Instead, we conduct an informal assessment that feels more like a play date than a test. During this relaxed session, we spend time with your child doing age-appropriate activities, reading together, solving puzzles, and having conversations. Our goal is to understand your child's current abilities, learning style, interests, and personality—not to judge or exclude them. This information helps us create a personalized learning plan that meets your child exactly where they are. We believe every child can succeed with the right support and approach, and our assessment process reflects that philosophy.",
  },
  {
    category: "Enrollment & Admissions",
    question: "Do you have waitlists?",
    answer:
      "Yes, when our enrollment reaches capacity, we maintain a waitlist for interested families. Due to our intentionally small class sizes (maximum 8:1 student-to-teacher ratio), spots are limited and highly sought after. Families on the waitlist are contacted in order of application date when space becomes available. We encourage you to apply early and schedule a tour even if we're currently at capacity—enrollment situations can change throughout the year as families relocate or circumstances change. Being on the waitlist also gives you priority consideration for the next enrollment period. If you're added to our waitlist, we'll keep you updated on availability and reach out as soon as a spot opens. Contact us to check current enrollment status and waitlist information.",
  },
  {
    category: "Enrollment & Admissions",
    question: "What ages do you accept?",
    answer:
      "We serve students from Pre-K through 5th grade (ages 4-11). Our ability-based learning model allows us to meet each child where they are academically, regardless of their chronological age or traditional grade level.",
  },
  {
    category: "Enrollment & Admissions",
    question: "Do you offer mid-year enrollment?",
    answer:
      "Yes! We accept new students throughout the school year as space permits. Our flexible, individualized approach makes it easy for students to transition into our program at any time. Contact us to discuss current availability.",
  },

  // Tuition & Financial
  {
    category: "Tuition & Financial",
    question: "How much is tuition?",
    answer:
      "Our tuition is competitively priced to provide exceptional value for the high-quality, individualized education your child receives. While we prefer to discuss specific tuition rates during your tour or consultation (as we can explain what's included and answer your questions in detail), we want to be transparent that our small class sizes, 8:1 student-to-teacher ratio, and personalized approach represent a significant investment in your child's future. Tuition covers all core curriculum materials, individualized learning plans, hands-on activities, field trips, daily snacks, and enrichment programs—no hidden fees for standard school activities. We offer flexible payment plans including monthly, quarterly, and annual options to fit your family's budget. We also work with families individually to discuss financial arrangements. Contact us to schedule a tour and receive detailed tuition information, or call us directly to discuss rates and payment options. We're committed to making quality private education accessible to New Caney families.",
  },
  {
    category: "Tuition & Financial",
    question: "What's included in tuition?",
    answer:
      "Our comprehensive tuition covers everything your child needs for an exceptional educational experience with no surprise fees or hidden costs. Included in tuition: All core curriculum materials for reading, math, science, social studies, and language arts; individualized learning plans customized to your child's abilities and learning style; all textbooks, workbooks, and instructional materials; hands-on learning supplies including art materials, science equipment, and manipulatives; educational field trips to museums, nature centers, historical sites, and local learning destinations; daily healthy snacks (families provide lunch); enrichment activities including art, music, physical education, and special projects; access to our outdoor learning spaces and playground; progress reports and parent-teacher conferences; and daily communication about your child's learning and development. NOT included in tuition: Extended care (before 8 AM or after 3 PM); optional after-school programs and clubs; summer camp programs; family lunches (you pack these); and special optional activities or trips beyond our standard curriculum. We believe in transparent pricing with no hidden fees—what you see is what you pay. During your tour, we'll provide a detailed breakdown of what's included so you can see the exceptional value of our program.",
  },
  {
    category: "Tuition & Financial",
    question: "Are there additional fees?",
    answer:
      "We pride ourselves on transparent, straightforward pricing with minimal additional fees beyond tuition. The only additional fees you might encounter are completely optional services that families choose based on their needs: Extended care fees (if you need drop-off before 8:00 AM or pick-up after 3:00 PM), optional after-school enrichment programs or clubs that go beyond our included curriculum, and optional summer camp programs. Everything else—all curriculum materials, textbooks, field trips, daily snacks, art supplies, science materials, enrichment activities during the school day, and standard school programs—is included in your tuition with no surprise charges. Unlike many schools that nickel-and-dime families with fees for supplies, activities, technology, testing, or special events, we include these essentials in our tuition. We never want families to be surprised by unexpected costs. During your enrollment process and tour, we provide a clear, written breakdown of tuition and any optional services so you know exactly what to expect. Our philosophy is simple: be upfront, be fair, and focus on education rather than hidden fees. If you have questions about costs or want to understand the full financial picture before enrolling, we're happy to have that conversation.",
  },
  {
    category: "Tuition & Financial",
    question: "Are payment plans available?",
    answer:
      "Yes! We understand that families have different financial situations and preferences, so we offer several flexible payment plan options to make tuition more manageable. Our payment plans include monthly payments (paid over 10 or 12 months), quarterly payments (four payments throughout the school year), and annual payment (paid in full at the beginning of the year, often with a small discount). All payment plans can be set up with automatic payments for your convenience, and we accept credit cards, debit cards, ACH bank transfers, and checks. There are no additional fees or interest charges for choosing a payment plan—we simply want to make quality education accessible. During your enrollment process, we'll work with you to select the payment schedule that best fits your family's budget. If you have questions about payment plans or need to discuss a customized arrangement, please don't hesitate to contact us. We're here to work with you.",
  },
  {
    category: "Tuition & Financial",
    question: "Do you offer financial aid?",
    answer:
      "Yes, we are deeply committed to making our exceptional educational program accessible to families from diverse financial backgrounds. While we don't have a formal scholarship program, we work with families individually to explore financial solutions that make enrollment possible. This may include flexible payment arrangements, extended payment plans, family discounts for multiple enrolled children, or customized tuition assistance based on your family's specific circumstances. We believe that if our school is the right fit for your child's educational needs, finances shouldn't be an insurmountable barrier. We handle all financial discussions with complete confidentiality and respect. During your tour or initial consultation, we encourage you to have an honest conversation about your financial situation so we can explore what options might be available. Many families have found creative solutions that work for their budgets while giving their children access to our personalized, ability-based learning environment. Please don't let tuition concerns prevent you from reaching out—contact us to discuss your family's situation and see how we might be able to help.",
  },
  {
    category: "Tuition & Financial",
    question: "What is the tuition cost?",
    answer:
      "Our tuition is competitively priced to make private education accessible to New Caney families. We offer various payment plans and flexible options. Please contact us directly for current tuition rates and to discuss which payment plan works best for your family.",
  },
  {
    category: "Tuition & Financial",
    question: "Do you offer financial aid or scholarships?",
    answer:
      "We are committed to making our program accessible to families who value our educational approach. We offer flexible payment plans and work with families on an individual basis. Contact us to discuss your specific situation and available options.",
  },
  {
    category: "Tuition & Financial",
    question: "What is included in the tuition?",
    answer:
      "Tuition includes all core curriculum materials, individualized learning plans, hands-on learning activities, field trips, special programs, daily snacks, and access to our enrichment activities. There are no hidden fees for standard school activities and materials.",
  },
  {
    category: "Tuition & Financial",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit cards, debit cards, ACH bank transfers, and checks. We offer monthly, quarterly, and annual payment plans to accommodate different family budgets.",
  },

  // Academic Program
  {
    category: "Academic Program",
    question: "What curriculum do you use?",
    answer:
      "We use a carefully curated, eclectic approach that combines the best research-based curricula to create truly individualized learning experiences for each student. Rather than limiting ourselves to a single curriculum publisher or philosophy, we select proven, high-quality materials from multiple sources and adapt them to each child's ability level, learning style, and interests. Our approach draws from classical education principles (emphasizing foundational knowledge, critical thinking, and logical reasoning), Charlotte Mason methods (using living books and nature study), hands-on learning philosophies (learning by doing with manipulatives and real-world applications), and ability-based progression (allowing students to move at their own pace in each subject). For literacy, we use phonics-based reading programs supplemented with rich literature and comprehension strategies tailored to each student's reading level. For mathematics, we combine conceptual understanding with computational fluency, using visual models and manipulatives to build deep mathematical thinking. For science and social studies, we emphasize hands-on exploration, experiments, projects, and field trips that make learning come alive. Each child receives an individualized learning plan that outlines their current placement in each subject, specific goals, and the materials and methods we'll use to help them progress. This flexibility is one of the greatest advantages of our micro school model—we're not locked into a one-size-fits-all curriculum, but instead can provide exactly what each child needs to thrive academically.",
  },
  {
    category: "Academic Program",
    question: "How do you handle different learning levels?",
    answer:
      "Handling different learning levels is at the very heart of what makes our micro school unique and effective. Unlike traditional schools that force all students of the same age to learn the same material at the same pace, we embrace and celebrate the fact that every child learns differently and progresses at their own rate. Here's how we make it work: First, we conduct comprehensive assessments when each child enrolls to determine their current ability level in every subject area—reading, writing, math, science, and more. We don't assume that because a child is 7 years old they should be doing second-grade work. Instead, we discover where they actually are. A child might be reading at a fourth-grade level while working on first-grade math concepts, and that's perfectly fine. Second, we create individualized learning plans for each student that outline exactly what they'll be learning in each subject, at what level, using which materials, and at what pace. These plans are living documents that we update regularly as the child progresses. Third, our 8:1 student-to-teacher ratio makes this individualization possible in practice, not just in theory. With only eight students maximum, our teachers can provide one-on-one instruction, small group lessons for students working at similar levels, and differentiated activities that meet each child where they are. Fourth, we use flexible grouping—students might work with different peers for different subjects based on their ability levels rather than their ages. A younger student who excels in math might work alongside older students for that subject, while working with age-peers for another. This builds confidence, challenges students appropriately, and creates a collaborative rather than competitive atmosphere. Fifth, we allow students to progress when they're ready, not when the calendar says so. If a student masters a concept quickly, they move forward. If they need more time and practice, they get it without the stigma of falling behind. Our goal is mastery and understanding, not just coverage. Finally, our hands-on, project-based approach allows multiple entry points—the same activity can challenge both struggling and advanced learners when designed thoughtfully. This individualized, flexible approach means your child will never be bored because the work is too easy, or frustrated because it's too hard. They'll be appropriately challenged, supported, and able to progress at their optimal pace in every subject.",
  },
  {
    category: "Academic Program",
    question: "Do you teach standardized test prep?",
    answer:
      "We take a different approach to standardized testing than most schools. Rather than dedicating weeks or months to test prep that interrupts real learning, we focus on building strong foundational skills, deep understanding, and critical thinking abilities that naturally prepare students to perform well on any assessment. Our philosophy is that if students truly understand concepts and can think critically, they'll do well on tests without extensive drilling. That said, we recognize that many families plan to transition their children to public or traditional private schools at some point, where standardized testing may be required. For students in upper elementary grades who will be taking standardized tests (whether for middle school admissions or state requirements), we do provide targeted test preparation that familiarizes them with test formats, timing, and question types. This focused prep typically happens in the weeks leading up to testing, not throughout the entire year. We teach test-taking strategies like how to eliminate obviously wrong answers, manage time effectively, and approach different question formats with confidence. However, we firmly believe that test scores are just one limited measure of a child's abilities and should never define their worth or potential. Our individualized approach means that students develop strong reading comprehension, mathematical reasoning, writing skills, and problem-solving abilities throughout their time with us—skills that serve them well beyond any single test. We also help students develop a healthy perspective on testing: it's simply one tool to show what you know, not a measure of who you are as a person. If your child needs to take a specific standardized test for admissions purposes or state requirements, we're happy to work with your family to ensure they're adequately prepared while maintaining our focus on meaningful, engaging education that builds lifelong learners rather than test-takers.",
  },
  {
    category: "Academic Program",
    question: "What about special needs?",
    answer:
      "Our micro school environment is uniquely suited to support students with a wide range of special needs, and many families find that our individualized approach provides exactly what their child needs to thrive. While we are not a specialized therapeutic school and cannot provide intensive services for students requiring full-time one-on-one aides or highly specialized therapeutic interventions, we have successfully supported many students with learning differences, ADHD, autism spectrum disorder (high-functioning), dyslexia, dysgraphia, dyscalculia, sensory processing differences, anxiety, and other needs. Here's why our model works so well for many students with special needs: Our 8:1 student-to-teacher ratio means your child receives significantly more individual attention than they would in a traditional classroom of 20-30 students. Our teachers can adapt instruction moment-by-moment based on how your child is responding, provide frequent breaks when needed, and offer alternative ways to demonstrate learning. Our ability-based approach means we meet your child exactly where they are in each subject without the stigma of being behind grade level. A child might work at different levels across subjects based on their strengths and challenges, which builds confidence and reduces frustration. Our multi-sensory, hands-on teaching methods naturally accommodate different learning styles and can be particularly effective for students who struggle with traditional textbook-based instruction. Our calm, structured environment with predictable routines provides security for students who thrive on consistency while remaining flexible enough to adjust when a child needs a different approach or extra support on a challenging day. Our small, family-like community reduces the social overwhelm that many students with special needs experience in larger school settings, while still providing opportunities to develop social skills and friendships. We work closely with parents as true partners in education and welcome open communication about what strategies work best for your child at home and school. If your child has an IEP or 504 plan from a previous school, we'll review it carefully during the enrollment process and discuss how we can address their needs within our model. We can implement many accommodations such as extended time, preferential seating, movement breaks, alternative testing formats, modified assignments, assistive technology, and more. We also collaborate with outside therapists and specialists when students receive services like occupational therapy, speech therapy, or counseling, and we're happy to implement recommendations and strategies from these professionals in our classroom. The best way to determine if we're a good fit for your child's specific needs is to schedule a tour and consultation where we can discuss your child's individual situation, review any documentation or evaluations, and honestly assess whether our program can provide the support they need to succeed. We never want to accept a student we can't adequately serve, but we've found that many students with special needs absolutely flourish in our personalized, nurturing environment.",
  },
  {
    category: "Academic Program",
    question: "How does ability-based learning work?",
    answer:
      "Unlike traditional schools that group children by age, we assess each child's current abilities in different subjects and place them at the appropriate instructional level. A child might be working above grade level in reading while receiving additional support in math. This ensures every student is appropriately challenged without being frustrated or bored.",
  },
  {
    category: "Academic Program",
    question: "Will my child be prepared for middle school?",
    answer:
      "Our rigorous, individualized approach often means students are working at or above traditional grade levels by the time they complete our program. We also focus on developing critical thinking, self-advocacy, and study skills that prepare students for academic success beyond our school.",
  },
  {
    category: "Academic Program",
    question: "Do you offer gifted education?",
    answer:
      "Yes! Our ability-based model is ideal for gifted learners. We allow advanced students to progress at their own pace without being held back by grade-level constraints. Gifted students receive appropriately challenging material and can explore subjects in greater depth.",
  },
  {
    category: "Academic Program",
    question: "How do you handle learning differences?",
    answer:
      "Our small class sizes and individualized approach make us ideal for students with learning differences. We can adapt our teaching methods, pacing, and materials to meet each child's unique needs. Many students with dyslexia, ADHD, and other learning differences thrive in our personalized environment.",
  },

  // Daily Operations
  {
    category: "Daily Operations",
    question: "What are your school hours?",
    answer:
      "Our standard school day runs from 8:00 AM to 3:00 PM, Monday through Friday. We understand that working families need flexibility, so we offer extended care options with early drop-off starting at 7:00 AM and aftercare until 6:00 PM. Extended care includes supervised activities, homework time, and free play. There is an additional fee for extended care services. Contact us for current extended care rates and to discuss your family's scheduling needs.",
  },
  {
    category: "Daily Operations",
    question: "Is before/after care available?",
    answer:
      "Yes! We understand that working parents need flexible childcare options that accommodate their schedules, so we offer both before-care and after-care programs designed to provide a safe, engaging, and supportive environment for your child outside of regular school hours. Our extended care program is available Monday through Friday and seamlessly integrates with our regular school day, so your child experiences a smooth transition rather than feeling like they're bouncing between different programs. Before-care (early drop-off) is available starting at 7:00 AM. This gives parents who need to be at work early the flexibility to drop off their children up to an hour before our regular school day begins at 8:00 AM. During before-care, students enjoy a calm morning routine that might include quiet activities like reading, puzzles, drawing, board games, or free play. We provide a peaceful environment that helps children ease into their day rather than rushing them. Students can also finish any breakfast they bring and socialize with friends before the academic day begins. After-care is available from 3:00 PM (when regular school ends) until 6:00 PM. This three-hour window gives working parents peace of mind knowing their child is in a safe, supervised environment until they can pick them up. After-care includes a variety of engaging activities: supervised homework time for students who want to complete assignments before going home, indoor and outdoor free play that lets kids decompress and be active after a day of learning, structured enrichment activities like art projects, science experiments, building challenges, or games, snack time (families provide snacks), and opportunities for social interaction and friendship building. Our after-care maintains the same low ratio and personalized attention that defines our school day, so your child continues to receive excellent supervision and care. The environment is more relaxed than the school day—we want children to have fun, unwind, and enjoy their time while staying safe and engaged. Extended care is available on a flexible basis. You can sign up for regular daily extended care (every day of the week), select specific days of the week based on your work schedule, or use it on an occasional drop-in basis when you have a late meeting or appointment. We understand that work schedules vary, so we try to accommodate different family needs. There is an additional fee for extended care services, which is separate from tuition. Pricing depends on whether you use before-care, after-care, or both, and whether you need it daily or occasionally. Contact us for current extended care rates and to discuss a schedule that works for your family. Many families find that our extended care program is more affordable than hiring a nanny or using separate childcare providers, plus your child remains in the familiar, nurturing environment they know and love. During your tour, we're happy to show you the spaces used for extended care and answer any questions about our program. We want you to feel completely confident that your child is well cared for during every hour they spend with us, whether during the school day or extended care hours.",
  },
  {
    category: "Daily Operations",
    question: "What about transportation?",
    answer:
      "We do not provide bus transportation or shuttle services at this time. As a small private micro school, we focus our resources on providing exceptional individualized education rather than operating a transportation fleet. This means families are responsible for their child's transportation to and from school. However, we understand that transportation can be a concern for busy families, and we want to help you find solutions that work for your situation. Here are some options that many of our families use successfully: Parent drop-off and pick-up is the most common arrangement. Our convenient location in New Caney with easy access from US-59 and FM 1485 makes us accessible to families throughout the greater Houston area, including Humble, Kingwood, Atascocita, Porter, Spring, The Woodlands, and Conroe. Many families find that our location is on or near their regular commute route. We also offer flexible drop-off and pick-up windows with extended care options. Our before-care starts at 7:00 AM for early drop-off, regular school hours are 8:00 AM to 3:00 PM, and after-care extends until 6:00 PM. This flexibility helps families who need to drop off early or pick up late accommodate their work schedules. Carpooling has become popular among our families, and we're happy to help facilitate connections between families who live in the same area or have similar schedules. Many parents have formed carpool groups where they take turns driving students to and from school, which reduces the daily transportation burden on any single family. Some families use rideshare services designed for children, though we require that parents notify us in advance if someone other than a parent or authorized adult will be picking up their child, and we follow strict pick-up verification procedures for safety. We also have families who employ nannies or au pairs who handle school transportation as part of their childcare responsibilities. Grandparents and extended family members often help with transportation, especially for families where multiple generations live nearby or are actively involved in the child's care. For families considering enrollment but concerned about transportation logistics, we encourage you to reach out during your tour or consultation to discuss your specific situation. We've found that most families are able to work out transportation arrangements that fit their needs, and the small size of our school community often leads to natural carpool partnerships between families in the same neighborhood. While we understand that the lack of bus service may require some planning, many families tell us that the short commute time is worth it for the exceptional education and personalized attention their child receives. Our small class sizes mean fewer traffic delays at drop-off and pick-up compared to larger schools, and the close-knit community atmosphere often results in families becoming friends who help each other with transportation when needed. If you have specific questions or concerns about transportation, please don't hesitate to discuss them with us. We're here to help you find solutions that work for your family so that your child can benefit from our program.",
  },
  {
    category: "Daily Operations",
    question: "What's your sick policy?",
    answer:
      "The health and safety of all our students, staff, and families is our top priority, so we have clear sick policies designed to prevent the spread of illness while being understanding and supportive of families. We ask that parents keep their child home if they exhibit any of the following symptoms or conditions: Fever of 100.4°F (38°C) or higher—your child must be fever-free for at least 24 hours WITHOUT the use of fever-reducing medication before returning to school. This 24-hour fever-free period is crucial because it ensures your child is truly recovering and not contagious, rather than just masking symptoms with medication. Vomiting or diarrhea—children who have vomited or had diarrhea must stay home and be symptom-free for at least 24 hours before returning. These symptoms can indicate contagious stomach viruses that spread rapidly in group settings. Suspected contagious illness such as strep throat, pink eye (conjunctivitis), flu, COVID-19, hand-foot-and-mouth disease, or other communicable diseases. If your child is diagnosed with a contagious condition, they must complete the appropriate treatment period (usually 24 hours of antibiotics for bacterial infections) and be cleared by a healthcare provider before returning. Undiagnosed rash—if your child develops a rash that hasn't been evaluated by a doctor, please keep them home until you can determine the cause. Some rashes indicate contagious conditions while others are harmless, but we need medical clearance to ensure the safety of all students. Persistent cough or cold symptoms that interfere with learning or suggest contagious illness. We understand that young children often have runny noses, but if symptoms are severe, accompanied by fever, or clearly making your child uncomfortable, please keep them home to rest and recover. Lethargy or general malaise—if your child is too tired, uncomfortable, or unwell to participate meaningfully in school activities, they should stay home and rest. School requires energy and focus, and sick children need time to recover. Head lice—if live lice or nits are discovered, your child must be treated and cleared before returning. We'll work with families discreetly and supportively to address head lice situations, which are common in school settings and not a reflection on cleanliness or parenting. We understand that having a sick child can create challenges for working parents, but sending sick children to school puts the entire community at risk and often prolongs the illness for your own child. Our small class size means that illnesses can spread quickly if we're not vigilant about keeping sick students home. When your child is home sick, there's no need to make up missed work immediately—we focus on recovery first. Once your child returns and is feeling better, we'll work with them individually to catch up on anything important they missed. Because we use individualized learning plans and ability-based instruction, your child can easily pick up where they left off without falling behind. We ask that parents notify us as soon as possible if their child will be absent due to illness, ideally before school starts that day. You can call, email, or text us with this information. If your child has been diagnosed with a contagious illness like strep throat, flu, or COVID-19, please let us know so we can alert other families to watch for symptoms (we will never disclose which specific child was ill—we simply notify families that there's been an exposure). For COVID-19 specifically, we follow current CDC guidelines regarding isolation periods, testing, and return-to-school protocols. These guidelines evolve based on current conditions, so we'll communicate our specific policies to enrolled families and update them as needed. If your child develops symptoms of illness during the school day—such as fever, vomiting, or severe symptoms—we will contact you immediately for pick-up. We have a comfortable, quiet space where your child can rest while waiting for you to arrive, but we ask that you pick them up as soon as possible. We know it's not always easy to leave work, but prompt pick-up helps protect other students and allows your child to rest at home. We also maintain rigorous cleaning and sanitization protocols throughout our facility, including frequent handwashing routines for students, regular disinfection of high-touch surfaces and shared materials, proper ventilation in all learning spaces, and teaching students proper hygiene practices like covering coughs and sneezes. These preventive measures help minimize illness transmission even when everyone is healthy. For families with specific health concerns—such as immunocompromised children or those with chronic conditions—we're happy to discuss additional precautions or accommodations during enrollment. We want every child to feel safe and healthy in our environment. We appreciate your partnership in keeping our school community healthy. By following these sick policies, we can minimize disruptions to learning and ensure that school remains a safe, healthy environment for everyone. If you're ever unsure whether your child should attend school due to illness, please call us—we're happy to discuss specific symptoms and help you make the best decision for your child and our community.",
  },
  {
    category: "Daily Operations",
    question: "What is your student-to-teacher ratio?",
    answer:
      "We maintain a maximum ratio of 8:1 students to teacher. This low ratio ensures every child receives personalized attention and allows our teachers to truly know and support each student's individual learning journey.",
  },
  {
    category: "Daily Operations",
    question: "Do you provide lunch or snacks?",
    answer:
      "We provide healthy snacks throughout the day. Families pack their child's lunch, which allows parents to accommodate dietary restrictions and preferences. We have a refrigerator and microwave available for student use.",
  },
  {
    category: "Daily Operations",
    question: "Do you follow a traditional school calendar?",
    answer:
      "We generally follow the local school district calendar for major holidays and breaks, but we also build in additional flexibility. We provide a detailed school calendar to enrolled families at the beginning of each school year.",
  },

  // Location & Facilities
  {
    category: "Location & Facilities",
    question: "Where are you located in New Caney?",
    answer:
      "Bright Minds Future Leaders is conveniently located in New Caney, Texas, with easy access from US-59 and FM 1485. Our location makes us easily accessible to families throughout the greater Houston area, including Humble, Kingwood, Atascocita, Porter, Spring, The Woodlands, and Conroe. We're just minutes from major residential areas and offer a safe, welcoming campus for your child. Contact us to schedule a tour and get specific directions to our facility.",
  },
  {
    category: "Location & Facilities",
    question: "Do you have outdoor space?",
    answer:
      "Yes! We believe outdoor time is essential for child development. Our facility includes outdoor play areas where students engage in physical activity, nature exploration, and outdoor learning experiences throughout the day.",
  },
  {
    category: "Location & Facilities",
    question: "What safety measures do you have in place?",
    answer:
      "Student safety is our top priority. Our facility has controlled access entry, security cameras, emergency preparedness plans, and strict pick-up/drop-off procedures. All staff members undergo background checks and are trained in first aid and emergency response.",
  },

  // Parent Communication
  {
    category: "Parent Communication",
    question: "How will I know how my child is progressing?",
    answer:
      "We maintain open communication with parents through regular progress reports, parent-teacher conferences, and daily communication. Parents have access to their child's individualized learning plan and can schedule additional meetings at any time to discuss progress.",
  },
  {
    category: "Parent Communication",
    question: "Can I visit or volunteer?",
    answer:
      "We welcome parent involvement! Parents can schedule observations and we offer various volunteer opportunities throughout the year. Because we maintain a focused learning environment, we ask that visits be scheduled in advance.",
  },
  {
    category: "Parent Communication",
    question: "How can I contact my child's teacher?",
    answer:
      "Teachers are available via email and phone. We typically respond to parent communications within 24 hours on school days. For urgent matters, you can always call our main office during school hours.",
  },

  // Special Programs
  {
    category: "Special Programs",
    question: "Do you offer extracurricular activities?",
    answer:
      "Yes! We incorporate enrichment activities into our school day, including art, music, physical education, and special projects. We also offer optional after-school programs and seasonal camps. Check with us about current offerings.",
  },
  {
    category: "Special Programs",
    question: "Do you take field trips?",
    answer:
      "Field trips are an important part of our hands-on learning approach. We take regular educational trips to museums, nature centers, historical sites, and other local learning destinations. All field trips are included in tuition.",
  },
  {
    category: "Special Programs",
    question: "Do you offer summer programs?",
    answer:
      "We offer summer enrichment programs for both current students and new families who want to experience our approach. Our summer programs feature hands-on activities, field trips, and continued academic growth in a fun, relaxed environment.",
  },
]

// Group FAQs by category
const categories = Array.from(new Set(faqs.map((faq) => faq.category)))

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "FAQ",
                item: "https://brightmindsfutureleaders.com/faq",
              },
            ],
          }),
        }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li className="text-gray-900 font-medium" aria-current="page">
              FAQ
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4" />
              Frequently Asked Questions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About Our Private School
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about Bright Minds Future Leaders, our micro school model, enrollment process,
              and more.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 mb-3 font-medium">Jump to category:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {categories.map((category) => (
              <div key={category} id={category.toLowerCase().replace(/\s+/g, "-")}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-200">{category}</h2>
                <div className="space-y-4">
                  {faqs
                    .filter((faq) => faq.category === category)
                    .map((faq, index) => (
                      <details
                        key={index}
                        className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <summary className="flex items-start justify-between p-6 cursor-pointer list-none">
                          <span className="text-lg font-semibold text-gray-900 pr-8 group-open:text-purple-700">
                            {faq.question}
                          </span>
                          <ChevronRight className="h-5 w-5 text-purple-600 flex-shrink-0 transform group-open:rotate-90 transition-transform" />
                        </summary>
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-purple-100 mb-8">
              We're here to help! Reach out to us and we'll be happy to answer any questions you have about our program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors shadow-lg"
              >
                <Mail className="h-5 w-5" />
                Contact Us
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-800 transition-colors border-2 border-white"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Tour
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-800 transition-colors border-2 border-white"
              >
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
