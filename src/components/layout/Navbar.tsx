"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-gray-100 sticky top-0 bg-white z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Car className="h-6 w-6 text-primary" />
          <span className="gradient-text">WanderLust</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Accueil
          </Link>
          <Link href="/fonctionnalites" className="text-sm font-medium hover:text-primary">
            Fonctionnalités
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            À propos
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Se connecter
          </Button>
          <Button size="sm">Essai gratuit</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden p-4 bg-white border-b">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Accueil
            </Link>
            <Link href="/functionalities" className="text-sm font-medium hover:text-primary">
              Fonctionnalités
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              À propos
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" size="sm" className="w-full">
                Se connecter
              </Button>
              <Button size="sm" className="w-full">
                Essai gratuit
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
