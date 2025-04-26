import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FeatureCalculator() {
  const [companySize, setCompanySize] = useState("");
  const [hrSolution, setHrSolution] = useState("");
  const [industry, setIndustry] = useState("");
  const [savings, setSavings] = useState(0);

  const handleCalculateSavings = () => {
    // Implement your savings calculation logic here
    let estimatedSavings = 0;

    if (companySize === "Small") estimatedSavings += 5000;
    if (hrSolution === "Basic HR software") estimatedSavings += 3000;
    if (industry === "Technology") estimatedSavings += 2450;

    setSavings(estimatedSavings);
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-medium mb-4">Calculate Your ROI</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                  >
                    <option>Small (1-50 employees)</option>
                    <option>Medium (51-200 employees)</option>
                    <option>Large (201-1000 employees)</option>
                    <option>Enterprise (1000+ employees)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current HR Solution</label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={hrSolution}
                    onChange={(e) => setHrSolution(e.target.value)}
                  >
                    <option>Manual processes</option>
                    <option>Basic HR software</option>
                    <option>Multiple HR tools</option>
                    <option>Enterprise HR system</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  >
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Retail</option>
                    <option>Manufacturing</option>
                    <option>Other</option>
                  </select>
                </div>

                <Button className="w-full gradient-bg-purple" onClick={handleCalculateSavings}>Calculate Savings</Button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Estimated Annual Savings</p>
                  <p className="text-3xl font-bold gradient-text">${savings}</p>
                </div>
                <Button className="gradient-bg-purple">Get Full Report</Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Calculate Your</span>
              <br />
              Business Savings
              <br />
              Instantly
            </h2>
            <p className="text-gray-600 mb-6">
              See how much your business can save by implementing SwiftPay&apos;s comprehensive HR solution. Our calculator
              provides a detailed breakdown of potential cost savings.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Time savings</span> from automated HR processes
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Cost reduction</span> from consolidated HR tools
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Productivity gains</span> from streamlined workflows
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
