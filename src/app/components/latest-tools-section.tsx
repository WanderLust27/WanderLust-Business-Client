import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card } from "./ui/card"
import { Search } from "lucide-react"
import Logo from "./logo"

export default function LatestToolsSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-background">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[hsl(var(--primary))]">Stay </span>
            <span className="text-foreground">Updated</span>
            <br />
            <span className="text-[hsl(var(--primary))]">with </span>
            <span className="text-foreground">SwiftPay's</span>
            <br />
            <span className="text-[hsl(var(--secondary))]">Latest </span>
            <span className="text-foreground">Tools</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg">
            SwiftPay's latest tool is the focus of the chat where 
            users discuss its enhanced capabilities including
            automated payroll easier.
          </p>
          <div>
            <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] rounded-full px-8 py-6 text-md font-medium">Connect with Us</Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl transform scale-105 -rotate-1"></div>
          <Card className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-0 bg-background p-4 relative z-10">
            <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] pb-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center text-[hsl(var(--primary-foreground))]">
                  <span className="text-xs font-bold">S</span>
                </div>
                <span className="font-bold ml-2">Swiftpay</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-[hsl(var(--muted))] rounded-md text-sm font-medium ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Conversation</span>
              </div>
              <div className="ml-auto relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-1.5 rounded-full bg-[hsl(var(--muted))] text-sm w-32 focus:outline-none"
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