import FeatureHero from "../../components/features/FeatureHero"
import FeatureGrid from "../../components/features/FeatureGrid"
import BusinessSizes from "../../components/features/BusinessSizes"
import DataAnalytics from "../../components/features/DataAnalytics"

export default function Features() {
  return (
    <div className="flex flex-col items-center">
      <FeatureHero />
      <BusinessSizes />
      <FeatureGrid />
      <DataAnalytics />
    </div>
  )
}
