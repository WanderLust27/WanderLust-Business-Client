import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card } from "./ui/card"
import { Search } from "lucide-react"
import Logo from "./logo"

export default function LatestToolsSection() {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-24 bg-background overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="text-[hsl(var(--primary))]">Stay </span>
            <span className="text-foreground">Updated</span>
            <br className="hidden sm:block" />
            <span className="text-[hsl(var(--primary))]">with </span>
            <span className="text-foreground">SwiftPay's</span>
            <br className="hidden sm:block" />
            <span className="text-[hsl(var(--secondary))]">Latest </span>
            <span className="text-foreground">Tools</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            SwiftPay's latest tool is the focus of the chat where 
            users discuss its enhanced capabilities including
            automated payroll easier.
          </p>
          <div className="mt-8">
            <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-md font-medium transition-all duration-200 shadow-lg hover:shadow-xl">Connect with Us</Button>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="absolute inset-0 rounded-3xl transform scale-105 -rotate-1 bg-gradient-to-r from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"></div>
          <Card className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-0 bg-background p-3 sm:p-4 relative z-10 max-w-xl mx-auto lg:mx-0">
            <div className="flex flex-wrap items-center gap-3 border-b border-[hsl(var(--border))] pb-3">
              <div className="flex items-center flex-shrink-0">
                <div className="h-7 sm:h-8 w-7 sm:w-8 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center text-[hsl(var(--primary-foreground))]">
                  <span className="text-xs font-bold">S</span>
                </div>
                <span className="font-bold ml-2 text-sm sm:text-base">Swiftpay</span>
              </div>
              <div className="flex items-center gap-2 px-2 sm:px-3 py-1 bg-[hsl(var(--muted))] rounded-md text-xs sm:text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:block">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Conversation</span>
              </div>
              <div className="ml-auto relative w-full sm:w-auto mt-2 sm:mt-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full sm:w-32 pl-10 pr-4 py-1.5 rounded-full bg-[hsl(var(--muted))] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)_/_0.2)] transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="py-4">
              <div className="flex items-start gap-3 mb-8">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="bg-[hsl(var(--primary)_/_0.1)] text-[hsl(var(--primary))]">MJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Mirriam Jelly</span>
                  </div>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm">Typing...</p>
                </div>
              </div>

              <div className="bg-[hsl(var(--muted))] rounded-lg p-4 mb-6">
                <p className="text-sm">
                  They've added new automation features to the tracking system.
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-[hsl(var(--secondary))]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l1.67 5.66h5.33l-4.33 3.33 1.67 5.66-4.34-3.33-4.33 3.33 1.67-5.66-4.34-3.33h5.34z"></path>
                  </svg>
                  <span>1</span>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="bg-[hsl(var(--primary)_/_0.1)] text-[hsl(var(--primary))]">MJ</AvatarFallback>
                </Avatar>
                <div className="w-full">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">Mirriam Jelly</span>
                    <span className="text-xs text-[hsl(var(--muted-foreground))]">04:30 PM</span>
                  </div>
                  <p className="text-sm mt-1 bg-[hsl(var(--muted))] p-3 rounded-lg">
                    Well, they rolled out some really cool features. For starters, payroll automation is faster now, and they've improved the benefits tracking.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}