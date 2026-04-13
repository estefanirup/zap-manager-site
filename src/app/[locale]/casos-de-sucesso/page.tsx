'use client'

import Card from "@/components/card"
import Footer from "@/sections/footer"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function CasosDeSucesso() {
  const t = useTranslations("cases")

  const cases = t.raw("items") as Array<{
    title: string
    description: string
    date: string
    href: string
  }>

  return (
    <div className="px-4 xl:px-0 max-w-5xl mx-auto space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40 scroll-smooth">

      <div className="space-y-6 md:space-y-8">
        <Navbar />

        <section className="py-10 md:py-16">
          <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-3xl mx-auto text-center text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">
            {t("title")}
          </h1>

          <p className="text-sm lg:text-base text-center mt-6 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cases.map((item, index) => (
          <Card key={index}>
            <p className="text-xs text-foreground">{item.date}</p>

            <h2 className="text-xl md:text-title text-black font-medium">
              {item.title}
            </h2>

            <p>{item.description}</p>

            <Link href={item.href} className="mt-2">
              <Button variant="link" className="text-primary p-0">
                Ler case completo <LucideIcons.ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      <Footer />
    </div>
  )
}