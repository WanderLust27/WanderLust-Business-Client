import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import DashboardPreview from "./components/dashboard-preview"
import LatestToolsSection from "./components/latest-tools-section"
import FeaturesSection from "./components/features-section"
import SavingsCalculatorSection from "./components/savings-calculator-section"
import PricingSection from "./components/pricing-section"
import FAQSection from "./components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Base background gradient */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      {/* Sections with their own gradients */}
      <div className="relative">
        {/* Hero section gradient */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-pink-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <Navbar />
        <HeroSection />
      </div>

      <div className="relative overflow-hidden">
        {/* Dashboard preview section gradient */}
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-400/20 via-purple-400/20 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <DashboardPreview />
      </div>

      <div className="relative overflow-hidden">
        {/* Latest tools section */}
        <LatestToolsSection />
      </div>

      <div className="relative overflow-hidden">
        {/* Features section gradient */}
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-400/20 via-pink-400/20 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <FeaturesSection />
      </div>

      <div className="relative overflow-hidden">
        {/* Savings calculator section gradient */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-400/20 via-red-400/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <SavingsCalculatorSection />
      </div>

      <div className="relative overflow-hidden">
        {/* Pricing section gradient */}
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-400/20 via-indigo-400/20 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <PricingSection />
      </div>

      <div className="relative overflow-hidden">
        {/* FAQ section gradient */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-purple-400/20 via-pink-400/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <FAQSection />
      </div>
    </main>
  )
}
