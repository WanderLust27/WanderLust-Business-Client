import Hero from "../components/home/Hero"
import Dashboard from "../components/home/Dashboard"
import AiFeatures from "../components/home/AiFeatures"
import DataImport from "../components/home/DataImport"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Dashboard />
      <AiFeatures />
      <DataImport />
    </div>
  )
}
