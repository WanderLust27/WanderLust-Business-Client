"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LineChart, BarChart, PieChart } from "lucide-react"

export default function DataAnalytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 days")
  const [selectedCategory, setSelectedCategory] = useState("All categories")

  const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(e.target.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-medium mb-4">AI-Powered Analytics Dashboard</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <LineChart className="h-8 w-8 mx-auto text-primary mb-2" />
                  <p className="text-sm font-medium">Utilization Trends</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <BarChart className="h-8 w-8 mx-auto text-primary mb-2" />
                  <p className="text-sm font-medium">Revenue Analysis</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <PieChart className="h-8 w-8 mx-auto text-primary mb-2" />
                  <p className="text-sm font-medium">Fleet Distribution</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Analysis Period</label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={selectedPeriod}
                    onChange={handlePeriodChange}
                    aria-label="Select the analysis period"
                  >
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>Last 12 months</option>
                    <option>Custom range</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Categories</label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    aria-label="Select vehicle category"
                  >
                    <option>All categories</option>
                    <option>Economy</option>
                    <option>Compact</option>
                    <option>Premium</option>
                    <option>SUV</option>
                    <option>Luxury</option>
                  </select>
                </div>

                <Button className="w-full gradient-bg-purple">Generate Report</Button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">AI Recommendation</p>
                  <p className="text-sm font-medium">
                    Increase premium vehicle availability on weekends to maximize revenue
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Data-Driven Decisions</span>
              <br />
              Powered by Artificial Intelligence
            </h2>
            <p className="text-gray-600 mb-6">
              WanderLust&apos;s AI analytics engine transforms your rental data into actionable insights, helping you make
              smarter business decisions and optimize your fleet operations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Predictive analytics</span> forecasts demand patterns to
                  optimize pricing and fleet allocation
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Maintenance optimization</span> reduces downtime and
                  extends vehicle lifespan
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Custom reports</span> provide insights tailored to your
                  specific business needs
                </p>
              </li>
            </ul>
            <Button className="mt-6 gradient-bg-purple">Explore Analytics</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
