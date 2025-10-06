import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-bright-minds.png"
              alt="Bright Minds Future Leaders"
              width={150}
              height={45}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm mb-4">
              Empowering young minds through personalized education and character development in New Caney, TX.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/brightmindsfutureleaders"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/brightmindsfutureleaders"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-gray-400 hover:text-white transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve" className="text-gray-400 hover:text-white transition-colors">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-400 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas We Serve */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/areas/new-caney" className="text-gray-400 hover:text-white transition-colors">
                  New Caney
                </Link>
              </li>
              <li>
                <Link href="/areas/porter" className="text-gray-400 hover:text-white transition-colors">
                  Porter
                </Link>
              </li>
              <li>
                <Link href="/areas/humble" className="text-gray-400 hover:text-white transition-colors">
                  Humble
                </Link>
              </li>
              <li>
                <Link href="/areas/kingwood" className="text-gray-400 hover:text-white transition-colors">
                  Kingwood
                </Link>
              </li>
              <li>
                <Link href="/areas/spring" className="text-gray-400 hover:text-white transition-colors">
                  Spring
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">22893 Antique Ln, New Caney, TX 77357</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <a href="tel:832-957-7530" className="text-gray-400 hover:text-white transition-colors text-sm">
                  (832) 957-7530
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <a
                  href="mailto:info@brightmindsfutureleaders.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@brightmindsfutureleaders.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bright Minds Future Leaders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
