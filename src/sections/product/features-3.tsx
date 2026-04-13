'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { useTranslations } from "next-intl"
import * as LucideIcons from "lucide-react"

export default function Features3() {
  const t = useTranslations("product.features3")

  const cards = [
    { key: "assistant", icon: LucideIcons.Bot },
    { key: "copilot", icon: LucideIcons.Sparkles },
    { key: "translation", icon: LucideIcons.Globe },
  ]

  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      
      {/* Badge */}
      <SlideEffect>
        <Badge number={3} text={t("badge")} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">
          {t("title")}
        </h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {t("description")}
      </SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon

          return (
            <SlideEffect
              key={card.key}
              direction="top"
              delay={index * 0.2}
              className="col-span-1 h-full"
              isSpring={false}
            >
              <Card>
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-black" />
                </div>

                <h3 className="text-xl md:text-title text-black font-medium">
                  {t(`cards.${card.key}.title`)}
                </h3>

                <p>
                  {t(`cards.${card.key}.content`)}
                </p>
              </Card>
            </SlideEffect>
          )
        })}
      </div>
    </div>
  )
}