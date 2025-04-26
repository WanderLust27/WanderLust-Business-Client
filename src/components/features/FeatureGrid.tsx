import { Car, FileSpreadsheet, BarChart, Calendar, Settings, Shield } from "lucide-react"

export default function FeatureGrid() {
  const features = [
    {
      id: 1,
      title: "Fleet Management",
      description: "Comprehensive vehicle tracking and management",
      icon: <Car className="h-6 w-6 text-primary" />,
    },
    {
      id: 2,
      title: "Excel Data Import",
      description: "Seamlessly import data from Excel spreadsheets",
      icon: <FileSpreadsheet className="h-6 w-6 text-primary" />,
    },
    {
      id: 3,
      title: "AI Analytics",
      description: "Intelligent insights to optimize your operations",
      icon: <BarChart className="h-6 w-6 text-primary" />,
    },
    {
      id: 4,
      title: "Booking Management",
      description: "Streamlined rental booking and scheduling",
      icon: <Calendar className="h-6 w-6 text-primary" />,
    },
    {
      id: 5,
      title: "Maintenance Tracking",
      description: "Monitor vehicle maintenance and service history",
      icon: <Settings className="h-6 w-6 text-primary" />,
    },
    {
      id: 6,
      title: "Security & Compliance",
      description: "Ensure data security and regulatory compliance",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 responsive-grid">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
