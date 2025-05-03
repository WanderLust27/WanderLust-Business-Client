import { Car, FileText, Users } from "lucide-react"

export function DashboardMetrics() {
  const metrics = [
    {
      icon: <Users className="h-6 w-6 text-blue-700" />,
      value: "50",
      label: "Clients",
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-700" />,
      value: "63",
      label: "Contrats",
    },
    {
      icon: <Car className="h-6 w-6 text-blue-700" />,
      value: "23",
      label: "Voitures",
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="flex items-center justify-end gap-3 rounded-lg bg-gray-50 p-4 shadow-sm">
          {metric.icon}
          <div className="text-right">
            <p className="text-4xl font-bold text-gray-800">{metric.value}</p>
            <p className="text-sm text-gray-600">{metric.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
