import HomeHero from "@/sections/home/hero"
import Services from "@/sections/home/services"
import Clients from "@/sections/home/clients"
import Cases from "@/sections/home/cases"
import About from "@/sections/home/about"
import CTA from "@/sections/home/cta"
import Footer from "@/sections/footer"

export default function HomePage() {
  return (
    <div className="px-4 xl:px-0 max-w-5xl mx-auto space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40 scroll-smooth">
      <div id="home"><HomeHero /></div>
      <div id="services"><Services /></div>
      <div id="clients"><Clients /></div>
      <div id="cases"><Cases /></div>
      <div id="about"><About /></div>
      <div id="cta"><CTA /></div>
      <Footer />
    </div>
  )
}