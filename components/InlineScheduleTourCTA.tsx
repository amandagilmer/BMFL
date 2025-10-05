import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Star } from "lucide-react"

export function InlineScheduleTourCTA() {
  return (
    <div className="my-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 md:p-10 shadow-2xl border-4 border-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-white">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold">See It For Yourself</h3>
          </div>
          <p className="text-white/95 text-lg leading-relaxed mb-4">
            Experience our personalized approach firsthand. Schedule a tour to see how we help every child thrive in a
            small, nurturing environment with ability-based learning.
          </p>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            <span className="ml-2 font-semibold">Rated 5.0 by parents</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all font-bold"
          >
            <Link href="https://book.brightmindsfutureleaders.com/book">
              Schedule Your Tour
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
