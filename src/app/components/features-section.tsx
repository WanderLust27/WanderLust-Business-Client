import { Card } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ChevronRight } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  gradient: string
}

function FeatureCard({ title, description, gradient }: FeatureCardProps) {
  return (
    <Card className={`p-6 sm:p-8 border-0 rounded-3xl bg-gradient-to-br ${gradient} hover:scale-105 transition-transform duration-300 cursor-pointer group h-full`}>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">{title}</h3>
          <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-background shadow-sm group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--primary))] group-hover:to-[hsl(var(--secondary))] transition-colors duration-300">
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary-foreground))] transition-colors duration-300" />
          </div>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.2] sm:leading-tight">
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">Every </span>
            <span className="text-foreground">Business Size</span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-transparent bg-clip-text">Comprehensive </span>
            <span className="text-foreground">Features</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            At SwiftPay, we understand that every business has unique HR and payroll needs, regardless of its size. Our platform is designed to provide
          </p>
        </div>

        <Tabs defaultValue="small" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-transparent h-auto mb-8 sm:mb-12 md:mb-16 px-4">
            <TabsTrigger
              value="midsize"
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(var(--primary))] data-[state=active]:to-[hsl(var(--secondary))] data-[state=active]:text-[hsl(var(--primary-foreground))] transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Midsized Business
            </TabsTrigger>
            <TabsTrigger
              value="large"
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(var(--primary))] data-[state=active]:to-[hsl(var(--secondary))] data-[state=active]:text-[hsl(var(--primary-foreground))] transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Large Business
            </TabsTrigger>
            <TabsTrigger
              value="small"
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(var(--primary))] data-[state=active]:to-[hsl(var(--secondary))] data-[state=active]:text-[hsl(var(--primary-foreground))] transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Small Business
            </TabsTrigger>
            <TabsTrigger
              value="remote"
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(var(--primary))] data-[state=active]:to-[hsl(var(--secondary))] data-[state=active]:text-[hsl(var(--primary-foreground))] transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Remote Teams
            </TabsTrigger>
            <TabsTrigger
              value="new"
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(var(--primary))] data-[state=active]:to-[hsl(var(--secondary))] data-[state=active]:text-[hsl(var(--primary-foreground))] transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              New Community
            </TabsTrigger>
          </TabsList>

          <TabsContent value="small" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
              <FeatureCard
                title="Expert HR Consulting"
                description="Get expert advice on complex HR issues to ensure business follows industry practices."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Employee Benefits"
                description="Easily manage, provide employees with a wide range of benefits, from health insurance."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Effortless Management"
                description="Simplify payroll processing, ensuring timely payments without the stress."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Risk Management"
                description="Stay ahead of ever-changing federal, state, and local regulations with."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="All-in-One Platform"
                description="Get expert advice on complex HR issues to ensure business follows industry practices."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Expert HR Consulting"
                description="Utilize easy-to-use tools that streamline HR tasks such as time tracking, leave management."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
            </div>
          </TabsContent>

          <TabsContent value="midsize" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Enterprise Solutions"
                description="Scalable HR solutions designed for large organizations with complex structures."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Advanced Analytics"
                description="Comprehensive data insights to optimize workforce management and planning."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Global Compliance"
                description="Stay compliant with regulations across multiple countries and jurisdictions."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
            </div>
          </TabsContent>

          <TabsContent value="large" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Affordable Plans"
                description="Cost-effective HR solutions tailored for small business budgets and needs."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Easy Setup"
                description="Get started quickly with minimal configuration and user-friendly interfaces."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Growth Support"
                description="Scalable features that grow with your business without complicated transitions."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
            </div>
          </TabsContent>

          <TabsContent value="remote" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Global Timesheets"
                description="Track hours across multiple time zones with automated calculations."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Virtual Onboarding"
                description="Streamlined remote employee onboarding with digital document management."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Team Collaboration"
                description="Built-in tools to enhance communication and productivity for distributed teams."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
            </div>
          </TabsContent>

          <TabsContent value="new" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Startup Essentials"
                description="Core HR functions to establish proper foundations for new businesses."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Guided Setup"
                description="Step-by-step assistance to configure your HR system with best practices."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
              <FeatureCard
                title="Scaling Support"
                description="Resources and tools designed to support rapid growth and changing needs."
                gradient="from-[hsl(var(--primary)_/_0.1)] to-[hsl(var(--secondary)_/_0.1)]"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
