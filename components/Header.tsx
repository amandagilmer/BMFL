"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="h-24 lg:h-32">
        <div className="container mx-auto px-6 lg:px-8 h-full max-w-[1400px] pt-5 pb-0">
          <div className="flex items-center justify-between h-full gap-4 pb-0">
            {/* Logo - Left Side */}
            <Link href="/" className="flex items-center flex-shrink-0 z-10">
              <Image
                src="/logo-bright-minds-color.png"
                alt="Bright Minds Future Leaders"
                width={200}
                height={200}
                priority
                className="h-20 w-20 hover:scale-105 transition-transform duration-300 lg:h-28 lg:w-28"
              />
            </Link>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden lg:flex items-center gap-12 flex-1 justify-end">
              {/* Navigation Links */}
              <nav className="flex items-center gap-8">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-base whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all hover:after:w-full"
                >
                  Home
                </Link>

                {/* About Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium text-base whitespace-nowrap">
                    <span>About</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${aboutDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {aboutDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      <Link
                        href="/about"
                        className="block px-5 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors font-medium"
                        onClick={() => setAboutDropdownOpen(false)}
                      >
                        Our Story
                      </Link>
                      <Link
                        href="/who-we-serve"
                        className="block px-5 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors font-medium"
                        onClick={() => setAboutDropdownOpen(false)}
                      >
                        Who We Serve
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/approach"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-base whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all hover:after:w-full"
                >
                  Our Approach
                </Link>

                <Link
                  href="/success-stories"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-base whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all hover:after:w-full"
                >
                  Success Stories
                </Link>

                <Link
                  href="/faq"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-base whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all hover:after:w-full"
                >
                  FAQ
                </Link>

                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-base whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all hover:after:w-full"
                >
                  Contact
                </Link>
              </nav>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 pl-6 border-l border-gray-200">
                <a
                  href="tel:+18329577530"
                  className="flex items-center gap-2 px-5 py-3 text-purple-600 hover:text-purple-700 transition-all font-semibold text-base hover:bg-purple-50 rounded-lg whitespace-nowrap"
                >
                  <Phone className="h-5 w-5" />
                  <span>(832) 957-7530</span>
                </a>
                <Link
                  href="https://book.brightmindsfutureleaders.com/book"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-7 py-3.5 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 text-base whitespace-nowrap"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Tour</span>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button & CTA */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                href="https://book.brightmindsfutureleaders.com/book"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2.5 rounded-full text-sm font-semibold shadow-md"
              >
                <Calendar className="h-4 w-4" />
                <span>Book</span>
              </Link>
              <button
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                className="px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <details className="group">
                <summary className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium cursor-pointer list-none">
                  <span>About</span>
                  <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    href="/about"
                    className="block px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/who-we-serve"
                    className="block px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Who We Serve
                  </Link>
                </div>
              </details>

              <Link
                href="/approach"
                className="px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Approach
              </Link>

              <Link
                href="/success-stories"
                className="px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Success Stories
              </Link>

              <Link
                href="/faq"
                className="px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+18329577530"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-50 transition-colors font-semibold"
                >
                  <Phone className="h-5 w-5" />
                  <span>(832) 957-7530</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
