import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { CircleDot } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.2] sm:leading-tight">
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">Flexible </span>
            <span className="text-foreground">plans and</span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">features </span>
            <span className="text-foreground">Honest pricing</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Get the payroll, benefits, and HR tools your business needs all in one place.
            <br className="hidden sm:block" />
            Plus, now is the easiest time to switch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
          {/* First Plan */}
          <Card className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-0 bg-gradient-to-br from-[hsl(var(--primary)_/_0.05)] to-[hsl(var(--secondary)_/_0.05)] p-6 sm:p-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <CircleDot className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(var(--muted-foreground))]" />
              <span className="font-medium text-base sm:text-lg">Simple Plan</span>
            </div>

            <div className="mb-6 sm:mb-8">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-bold">Plus $12</span>
                <span className="text-3xl sm:text-4xl font-bold text-[hsl(var(--muted-foreground))]">$9</span>
              </div>
              <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))]">/Month Per Person</p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--muted-foreground))] mt-2" />
                <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))]">Time tracking and project tracking</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--muted-foreground))] mt-2" />
                <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))]">Integrations for accounting, time tracking, expense management, and more</p>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] rounded-full py-4 sm:py-6 text-base sm:text-lg font-medium">
              Talk To Sales
            </Button>
          </Card>

        {/* Second Plan */}
        <Card className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-0 bg-gradient-to-br from-[hsl(var(--primary)_/_0.05)] to-[hsl(var(--secondary)_/_0.05)] p-6 sm:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <CircleDot className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(var(--muted-foreground))]" />
            <span className="font-medium text-base sm:text-lg">Enterprise Plan</span>
          </div>

          <div className="mb-6 sm:mb-8">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-bold">Plus $12</span>
              <span className="text-3xl sm:text-4xl font-bold text-[hsl(var(--muted-foreground))]">$9</span>
            </div>
            <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))]">/Month Per Person</p>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--muted-foreground))] mt-2" />
              <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))]">Special pricing for eligible companies</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--muted-foreground))] mt-2" />
              <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))]">Dedicated customer success manager and full-service payroll migration and account setup</p>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] rounded-full py-4 sm:py-6 text-base sm:text-lg font-medium">
            Talk To Sales
          </Button>
        </Card>
        </div>
      </div>
    </section>
  )
}
