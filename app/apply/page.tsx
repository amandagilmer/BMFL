import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Apply Now - Bright Minds Future Leaders",
  description:
    "Apply for enrollment at Bright Minds Future Leaders micro school. Start your child's journey to becoming a confident, capable leader.",
  keywords: "apply, enrollment, micro school, Bright Minds Future Leaders, application form",
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 pt-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Apply to Bright Minds Future Leaders</h1>
            <p className="text-xl text-gray-700 mb-8">
              Take the first step in your child's journey to becoming a confident, capable leader. Complete our
              application form below to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Application Form</h2>

                {/* Form Container */}
                <div className="relative" style={{ minHeight: "1263px" }}>
                  <iframe
                    src="https://sites.brightmindsfutureleaders.com/widget/form/aGzQa28ZnfXW2tO6gMP6"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "1263px",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    id="inline-aGzQa28ZnfXW2tO6gMP6"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Application form"
                    data-height="1263"
                    data-layout-iframe-id="inline-aGzQa28ZnfXW2tO6gMP6"
                    data-form-id="aGzQa28ZnfXW2tO6gMP6"
                    title="Application form"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions About Your Application?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team is here to help guide you through the application process.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
                <p className="text-gray-700 mb-2">Speak directly with our enrollment team</p>
                <a href="tel:+18329577530" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                  (832) 957-7530
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
                <p className="text-gray-700 mb-2">Get answers to your questions</p>
                <a
                  href="mailto:info@brightmindsfutureleaders.com"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  info@brightmindsfutureleaders.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Form Script */}
      <script src="https://sites.brightmindsfutureleaders.com/js/form_embed.js" async />
    </div>
  )
}
