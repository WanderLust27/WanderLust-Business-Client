import { DashboardHeader } from "@/app/components/dashboard/header"
import { DashboardMetrics } from "@/app/components/dashboard/metrics"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-transparent rounded-[40rem] blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-blue-400/20 via-purple-400/20 to-transparent rounded-[40rem] blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Content */}
      <div className="relative p-8">
        <DashboardHeader />
        <div className="mt-8">
        <h1 className="mb-6 mt-4 text-3xl font-bold text-gray-800">Bonjour Sur WanderLust</h1>

          <DashboardMetrics />
        </div>
      </div>
    </div>
  )
}
