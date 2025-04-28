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
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-grid-pattern z-0"></div>

      {/* Top left gradient */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-400/40 via-purple-400/30 to-transparent rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 z-0"></div>

      {/* Bottom right gradient */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl translate-x-1/4 translate-y-1/4 z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <DashboardPreview />
        <LatestToolsSection />
        <FeaturesSection />
        <SavingsCalculatorSection />
        <PricingSection />
        <FAQSection />
      </div>
    </main>
  )
}
