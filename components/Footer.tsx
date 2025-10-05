import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  href="/who-we-serve"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog & Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Blog & Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/micro-schools-vs-traditional-schools"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Micro-Schools vs Traditional
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/5-signs-your-child-needs-smaller-class-sizes"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Signs Your Child Needs Smaller Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/ability-based-learning-explained"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Ability-Based Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations We Serve */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Locations We Serve</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/areas/new-caney"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  New Caney, TX
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/porter"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Porter, TX
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/humble"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Humble, TX
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/kingwood"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Kingwood, TX
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/splendora"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Splendora, TX
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/shepherd"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Shepherd, TX
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/cleveland"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Cleveland, TX
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/huffman"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Huffman, TX
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/spring"
                  className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                >
                  Spring, TX
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-gray-300 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  22893 Antique Ln
                  <br />
                  New Caney, TX 77357
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-300 flex-shrink-0" />
                <a href="tel:+18329577530" className="text-gray-300 hover:text-white transition-colors text-sm">
                  (832) 957-7530
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-300 flex-shrink-0" />
                <a
                  href="mailto:info@brightmindsfutureleaders.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm break-all"
                >
                  info@brightmindsfutureleaders.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 text-gray-300 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>School: 8:30 AM - 3:30 PM</div>
                  <div>Office: 7:30 AM - 5:00 PM</div>
                  <div>Monday - Friday</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://www.facebook.com/brightmindsfutureleaders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/brightmindsfutureleaders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2025 Bright Minds Future Leaders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
