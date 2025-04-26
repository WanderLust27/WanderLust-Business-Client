import AboutHero from "../../components/about/AboutHero"
import Team from "../../components/about/Team"
import Mission from "../../components/about/Mission"
import Testimonials from "../../components/about/Testimonials"

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <AboutHero />
      <Mission />
      <Team />
      <Testimonials />
    </div>
  )
}