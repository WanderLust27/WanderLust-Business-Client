import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { CircleDot } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">Flexible </span>
          <span className="text-foreground">plans and</span>
          <br />
          <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">features </span>
          <span className="text-foreground">Honest pricing</span>
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto text-lg">
          Get the payroll, benefits, and HR tools your business needs all in one place.
          <br />
          Plus, now is the easiest time to switch.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* First Plan */}
        <Card className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-0 bg-gradient-to-br from-[hsl(var(--primary)_/_0.05)] to-[hsl(var(--secondary)_/_0.05)] p-8">
          <div className="flex items-center gap-3 mb-8">
            <CircleDot className="w-6 h-6 text-[hsl(var(--muted-foreground))]" />
            <span className="font-medium text-lg">Simple Plan</span>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold">Plus $12</span>
              <span className="text-4xl font-bold text-[hsl(var(--muted-foreground))]">$9</span>
            </div>
            <p className="text-[hsl(var(--muted-foreground))]">/Month Per Person</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--muted-foreground))] mt-2" />
              <p className="text-[hsl(var(--muted-foreground))]">Time tracking and project tracking</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--muted-foreground))] mt-2" />
              <p className="text-[hsl(var(--muted-foreground))]">Integrations for accounting, time tracking, expense management, and more</p>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] rounded-full py-6 text-lg font-medium">
            Talk To Sales
          </Button>
        </Card>

        {/* Second Plan */}
        <Card className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-0 bg-gradient-to-br from-[hsl(var(--primary)_/_0.05)] to-[hsl(var(--secondary)_/_0.05)] p-8">
          <div className="flex items-center gap-3 mb-8">
            <CircleDot className="w-6 h-6 text-[hsl(var(--muted-foreground))]" />
            <span className="font-medium text-lg">Simple Plan</span>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold">Plus $12</span>
              <span className="text-4xl font-bold text-[hsl(var(--muted-foreground))]">$9</span>
            </div>
            <p className="text-[hsl(var(--muted-foreground))]">/Month Per Person</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--muted-foreground))] mt-2" />
              <p className="text-[hsl(var(--muted-foreground))]">Special pricing for eligible companies</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--muted-foreground))] mt-2" />
              <p className="text-[hsl(var(--muted-foreground))]">Dedicated customer success manager and full-service payroll migration and account setup</p>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] rounded-full py-6 text-lg font-medium">
            Talk To Sales
          </Button>
        </Card>
      </div>
    </section>
  )
}
