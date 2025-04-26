import type React from "react"

export interface NavItem {
  title: string
  href: string
}

export interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

export interface Testimonial {
  name: string
  company: string
  quote: string
  image: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
}

export interface Vehicle {
  id: number
  name: string
  category: string
  status: "Available" | "Rented" | "Maintenance"
  rate: string
}

export interface BusinessSize {
  name: string
  description: string
}
