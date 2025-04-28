import Link from "next/link"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"
import Logo from "./logo"

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-foreground/80 hover:text-foreground transition-colors">
            Our Company
          </Link>
          <Link href="#" className="text-foreground/80 hover:text-foreground transition-colors">
            Resources
          </Link>
          <Link href="#" className="text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </Link>
          <div className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors cursor-pointer">
            <span>Our Solutions</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="link" className="text-foreground/80 hover:text-foreground">
          Sign In
        </Button>
        <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] rounded-full">
          Get Started
        </Button>
      </div>
    </header>
  )
}
