  "use client"

  import { Bell, Cog, User } from "lucide-react"
  import { Button } from "../ui/button"
  import Image from "next/image"
  import Link from "next/link"
  import { cn } from "../../../../lib/utils"
  import Logo from "../../../../public/logo.png"
  const navItems = [
    { name: "Accueil", href: "#", active: true },
    { name: "Clients", href: "#", active: false },
    { name: "Voitures", href: "#", active: false },
    { name: "Calendrier", href: "#", active: false },
    { name: "Avis", href: "#", active: false },
  ]

  export function DashboardHeader() {
    return (
      <header className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="WanderLust Logo"
            width={120}
            height={40}
            className="h-24  w-auto"
          />
        </div>

        <nav className="flex flex-wrap items-center justify-center rounded-full bg-gray-100/80 p-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                item.active
                  ? "bg-white text-blue-800 shadow-sm"
                  : "text-gray-600 hover:bg-gray-200/50 hover:text-gray-900",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full bg-white">
            <Cog className="h-5 w-5" />
            <span className="sr-only">Paramètres</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full bg-white">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full bg-white">
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
        </div>
      </header>
    )
  }
