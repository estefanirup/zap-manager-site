import ProductHero from "@/sections/product/hero"
import Features1 from "@/sections/product/features-1"
import Features2 from "@/sections/product/features-2"
import Features3 from "@/sections/product/features-3"
import Features4 from "@/sections/product/features-4"
import Pricing from "@/sections/product/pricing"
import FAQ from "@/sections/product/faq"
import Footer from "@/sections/footer"

export default function GestaoAtendimentoIA() {
  return (
    <div className="px-4 xl:px-0 max-w-5xl mx-auto space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40 scroll-smooth">
      <ProductHero />
      <Features1 />
      <Features2 />
      <Features3 />
      <Features4 />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}