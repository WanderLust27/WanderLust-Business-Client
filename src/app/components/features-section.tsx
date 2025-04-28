import { Card } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Plus } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-blue-400">Every </span>
          <span className="text-gray-900">Business </span>
          <span className="text-purple-500">Size</span>
          <br />
          <span className="text-purple-400">Comprehensive </span>
          <span className="text-gray-900">Features</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At SwiftPay, we understand that every business has unique HR and payroll needs, regardless of its size. Our
          platform is designed to provide:
        </p>
      </div>

      <Tabs defaultValue="midsize" className="w-full">
        <TabsList className="flex justify-center space-x-4 bg-transparent h-auto mb-12">
          <TabsTrigger
            value="midsize"
            className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Midsize Business
          </TabsTrigger>
          <TabsTrigger
            value="large"
            className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Large Business
          </TabsTrigger>
          <TabsTrigger
            value="small"
            className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Small Business
          </TabsTrigger>
          <TabsTrigger
            value="remote"
            className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Remote Teams
          </TabsTrigger>
          <TabsTrigger
            value="new"
            className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            New Community
          </TabsTrigger>
        </TabsList>

        <TabsContent value="midsize" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Expert HR Consulting"
              description="Get expert advice on complex HR issues to ensure business follows industry best practices."
              bgColor="bg-blue-50"
            />
            <FeatureCard
              title="Employee Benefits"
              description="Easily manage payrolls and taxes with a wide range of benefits, from health insurance."
              bgColor="bg-white"
            />
            <FeatureCard
              title="Effortless Management"
              description="Simplify payroll processing by automating every step to be without any delay."
              bgColor="bg-blue-50"
            />
            <FeatureCard
              title="Risk Management"
              description="Stay ahead of ever-changing business, state, and local regulations with..."
              bgColor="bg-pink-50"
            />
            <FeatureCard
              title="All-in-One Platform"
              description="Get instant access to complete HR features to serve all business needs entirely seamless."
              bgColor="bg-white"
            />
            <FeatureCard
              title="Expert HR Consulting"
              description="Let us solve HR tasks that overwhelm. HR issues such as time tracking, payroll management."
              bgColor="bg-blue-50"
            />
          </div>
        </TabsContent>

        <TabsContent value="large" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Enterprise Solutions"
              description="Scalable HR solutions designed for large organizations with complex structures."
              bgColor="bg-blue-50"
            />
            <FeatureCard
              title="Advanced Analytics"
              description="Comprehensive data insights to optimize workforce management and planning."
              bgColor="bg-white"
            />
            <FeatureCard
              title="Global Compliance"
              description="Stay compliant with regulations across multiple countries and jurisdictions."
              bgColor="bg-blue-50"
            />
          </div>
        </TabsContent>

        <TabsContent value="small" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Affordable Plans"
              description="Cost-effective HR solutions tailored for small business budgets and needs."
              bgColor="bg-blue-50"
            />
            <FeatureCard
              title="Easy Setup"
              description="Get started quickly with minimal configuration and user-friendly interfaces."
              bgColor="bg-white"
            />
            <FeatureCard
              title="Growth Support"
              description="Scalable features that grow with your business without complicated transitions."
              bgColor="bg-blue-50"
            />
          </div>
        </TabsContent>

        <TabsContent value="remote" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Global Timesheets"
              description="Track hours across multiple time zones with automated calculations."
              bgColor="bg-blue-50"
            />
            <FeatureCard
              title="Virtual Onboarding"
              description="Streamlined remote employee onboarding with digital document management."
              bgColor="bg-white"
            />
            <FeatureCard
              title="Team Collaboration"
              description="Built-in tools to enhance communication and productivity for distributed teams."
              bgColor="bg-blue-50"
            />
          </div>
        </TabsContent>

        <TabsContent value="new" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Startup Essentials"
              description="Core HR functions to establish proper foundations for new businesses."
              bgColor="bg-blue-50"
            />
            <FeatureCard
              title="Guided Setup"
              description="Step-by-step assistance to configure your HR system with best practices."
              bgColor="bg-white"
            />
            <FeatureCard
              title="Scaling Support"
              description="Resources and tools designed to support rapid growth and changing needs."
              bgColor="bg-blue-50"
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  bgColor: string
}

function FeatureCard({ title, description, bgColor }: FeatureCardProps) {
  return (
    <Card className={`${bgColor} border-0 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 bg-white">
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </Card>
  )
}
