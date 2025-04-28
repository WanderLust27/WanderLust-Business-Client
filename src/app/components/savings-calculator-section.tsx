import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { ChevronDown } from "lucide-react"

export default function SavingsCalculatorSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="relative">
          <Card className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-0 bg-background p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Estimated Average Total Savings</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl font-bold">10,8</h3>
                  <Badge className="bg-[hsl(var(--success)_/_0.2)] text-[hsl(var(--success))] rounded-full text-xs px-2">+5%</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-full">
                Monthly
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Chart */}
            <div className="h-40 mb-8">
              <div className="flex h-full items-end gap-2">
                {[60, 80, 40, 70, 50, 90, 65].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)] rounded-t-lg transition-all duration-300 hover:from-[hsl(var(--primary)_/_0.2)] hover:to-[hsl(var(--secondary)_/_0.2)]" 
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm text-[hsl(var(--muted-foreground))]">
                <span>Mon</span>
                <span>Sun</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
            </div>

            <div className="border-t border-[hsl(var(--border))] pt-6">
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">Number Of Employees</p>
              <div className="flex items-center justify-between">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="12"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      strokeDasharray="377"
                      strokeDashoffset="94"
                      className="transition-all duration-500"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">1,200</span>
                    <Badge className="bg-[hsl(var(--success)_/_0.2)] text-[hsl(var(--success))] rounded-full text-xs px-2 mt-1">+4%</Badge>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] rounded-full px-8 py-6 text-lg font-medium">
                  Calculate Now
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">Calculate </span>
            <span className="text-foreground">Your</span>
            <br />
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">Business </span>
            <span className="text-foreground">Savings</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Instantly</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg">
            The average annual cost savings from working with a PEO is $1,775 per employee in every year.
          </p>
          <div>
            <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] rounded-full px-8 py-6 text-lg font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Customer Savings Stats */}
      <div className="mt-32 max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">Customers </span>
            <span className="text-foreground">save</span>
          </h3>
          <h3 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">HR </span>
            <span className="text-foreground">costs </span>
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">40%</span>
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] text-lg mt-4">
            With SwiftPay, businesses can save hundreds of hours by automating time-consuming HR tasks payroll.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-0 bg-gradient-to-br from-[hsl(var(--primary)_/_0.05)] to-[hsl(var(--secondary)_/_0.05)] p-8">
            <h4 className="text-4xl font-bold mb-4">$2.5K</h4>
            <p className="text-[hsl(var(--muted-foreground))]">Saved $25,000 annually and 20 hours a week with Swiftpay</p>
          </Card>

          <Card className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-0 bg-gradient-to-br from-[hsl(var(--primary)_/_0.05)] to-[hsl(var(--secondary)_/_0.05)] p-8">
            <h4 className="text-4xl font-bold mb-4">$40K</h4>
            <p className="text-[hsl(var(--muted-foreground))]">Saved $40,000 annually with Performance Management.</p>
          </Card>

          <Card className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-0 bg-gradient-to-br from-[hsl(var(--primary)_/_0.05)] to-[hsl(var(--secondary)_/_0.05)] p-8">
            <h4 className="text-4xl font-bold mb-4">20%</h4>
            <p className="text-[hsl(var(--muted-foreground))]">Benefits admin process into just 2 days Benefits Administration</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
