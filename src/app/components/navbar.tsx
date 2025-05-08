"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Logo from "../../../public/logo.png"
import { useState } from "react"
import React from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between relative">
      <div className="flex items-center gap-12">
        <Link href="/">
          <Image src={Logo} alt="Swiftpay Logo" width={120} height={120} />
        </Link>
        
        {/* Desktop Navigation */}
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-foreground/80 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Button variant="link" className="text-foreground/80 hover:text-foreground">
          Sign In
        </Button>
        <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] rounded-full">
          Get Started
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <nav className="flex flex-col p-6 gap-4">
          <Link 
            href="#" 
            className="text-foreground/80 hover:text-foreground transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Company
          </Link>
          <Link 
            href="#" 
            className="text-foreground/80 hover:text-foreground transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </Link>
          <Link 
            href="#" 
            className="text-foreground/80 hover:text-foreground transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <div className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors cursor-pointer py-2">
            <span>Our Solutions</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <Button variant="link" className="text-foreground/80 hover:text-foreground justify-start p-0">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] rounded-full justify-start">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}