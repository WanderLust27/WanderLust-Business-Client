import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { CheckCircle } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-blue-400">Flexible </span>
          <span className="text-gray-900">plans and</span>
          <br />
          <span className="text-purple-400">features </span>
          <span className="text-gray-900">Honest pricing</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Get the payroll, benefits, and HR tools your business needs all in one place.
          <br />
          Plus, here is the simplest fine line pricing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* First Plan */}
        <Card className="rounded-2xl overflow-hidden shadow-sm border-0 bg-gray-50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            </div>
            <span className="font-medium">Simple Plan</span>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">Plus $12</span>
              <span className="text-2xl font-bold ml-1">$9</span>
            </div>
            <p className="text-sm text-gray-500">/Month Per Person</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Time tracking and project tracking</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Integrations for accounting, time tracking, expense management, and more</span>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-90 text-white rounded-full w-full">
            Talk To Sales
          </Button>
        </Card>

        {/* Second Plan */}
        <Card className="rounded-2xl overflow-hidden shadow-sm border-0 bg-gray-50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            </div>
            <span className="font-medium">Simple Plan</span>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">Plus $12</span>
              <span className="text-2xl font-bold ml-1">$9</span>
            </div>
            <p className="text-sm text-gray-500">/Month Per Person</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Special pricing for eligible companies</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                Dedicated customer success manager and full-service payroll migration and account setup
              </span>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-90 text-white rounded-full w-full">
            Talk To Sales
          </Button>
        </Card>
      </div>
    </section>
  )
}
