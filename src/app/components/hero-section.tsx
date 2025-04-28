import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Your All-in-One HR
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Solution</span>{" "}
            <span className="text-foreground">for Growth</span>
          </h1>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 text-white px-6 py-6 h-auto rounded-full">
              Connect with Us
            </Button>
            <Button variant="link" className="text-foreground flex items-center gap-2 text-base">
              Calculate Savings <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-foreground/80">
            Highlight how your software helps businesses focus on growth by automating HR and payroll, making it simpler
            and efficient
          </p>
        </div>
      </div>
    </section>
  )
}
