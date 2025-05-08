import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] md:leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
                Your All-in-One HR
              </span>
              <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
                Solution</span>{" "}
              <span className="text-foreground">for Growth</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-white px-6 py-5 h-auto rounded-full w-full sm:w-auto text-base">
                Connect with Us
              </Button>
              <Button variant="link" className="text-foreground flex items-center justify-center sm:justify-start gap-2 text-base hover:text-[hsl(var(--primary))] transition-colors">
                Calculate Savings <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-4 mt-8 md:mt-0">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Highlight how your software helps businesses focus on growth by automating HR and payroll, making it simpler
              and efficient
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
