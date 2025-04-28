import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { ChevronDown } from "lucide-react"

export default function SavingsCalculatorSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Card className="rounded-2xl overflow-hidden shadow-lg border-0 bg-gray-50 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">Estimated Average Total Savings:</p>
                <div className="flex items-baseline gap-1">
                  <h3 className="text-3xl font-bold">10.8</h3>
                  <span className="text-green-500 font-medium">%</span>
                </div>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-md text-sm font-medium border">
                <span>Monthly</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>

            {/* Chart */}
            <div className="h-32 mb-8">
              <div className="flex h-full items-end">
                {[15, 25, 40, 30, 45, 20, 35].map((height, index) => (
                  <div key={index} className="flex-1 mx-0.5 flex flex-col items-center">
                    <div className="w-full bg-blue-200 rounded-sm" style={{ height: `${height}%` }}></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-500 mb-2">Number Of Employees:</p>
              <div className="flex items-center justify-between">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f0f0f0" strokeWidth="8" strokeLinecap="round" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="50"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span className="text-2xl font-bold">1,200</span>
                    <Badge className="bg-green-500 text-white text-xs px-1">+4%</Badge>
                  </div>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md">Calculate Now</Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-blue-400">Calculate </span>
            <span className="text-gray-900">Your</span>
            <br />
            <span className="text-purple-400">Business </span>
            <span className="text-gray-900">Savings</span>
            <br />
            <span className="text-pink-400">Instantly</span>
          </h2>
          <p className="text-gray-600">
            The average annual cost savings range from nothing with a DIY to $1,700 per employee per year.
          </p>
          <div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Customer Savings Stats */}
      <div className="mt-24">
        <h3 className="text-4xl font-bold mb-12">
          <span className="text-purple-400">customers </span>
          <span className="text-purple-500">save</span>
          <br />
          <span className="text-purple-600">HR costs </span>
          <span className="text-gray-900">40%</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl overflow-hidden shadow-sm border-0 bg-gray-50 p-6">
            <h4 className="text-3xl font-bold mb-4">$2.5K</h4>
            <p className="text-gray-600 text-sm">Saved $25,000 annually on 20 hours of saved time</p>
          </Card>

          <Card className="rounded-2xl overflow-hidden shadow-sm border-0 bg-gray-50 p-6">
            <h4 className="text-3xl font-bold mb-4">$40K</h4>
            <p className="text-gray-600 text-sm">Saved $40,000 annually with Automated Management</p>
          </Card>

          <Card className="rounded-2xl overflow-hidden shadow-sm border-0 bg-gray-50 p-6">
            <h4 className="text-3xl font-bold mb-4">20%</h4>
            <p className="text-gray-600 text-sm">Benefits intro process into just 2 days benefits administration</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
