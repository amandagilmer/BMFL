"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-bright-minds-color.png"
              alt="Bright Minds Future Leaders"
              width={200}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors">
                About
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`} />
              </button>
              {isAboutOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/approach"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Our Approach
                  </Link>
                </div>
              )}
            </div>
            <Link href="/who-we-serve" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Who We Serve
            </Link>
            <Link href="/success-stories" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Success Stories
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <a href="tel:832-957-7530">(832) 957-7530</a>
            </Button>
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
              <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Tour</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/approach"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Approach
              </Link>
              <Link
                href="/who-we-serve"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Serve
              </Link>
              <Link
                href="/success-stories"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <a href="tel:832-957-7530">(832) 957-7530</a>
                </Button>
                <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <Link href="https://book.brightmindsfutureleaders.com/book">Schedule Tour</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
