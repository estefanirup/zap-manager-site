'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { useTranslations } from "next-intl"

export default function Features2() {
  const t = useTranslations("product.features2")

  const metrics = [0, 1, 2, 3]
  const automations = [0, 1, 2, 3]

  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      
      {/* Badge */}
      <SlideEffect>
        <Badge number={2} text={t("badge")} />
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Card 1 - Metrics */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">
              {t("card1.title")}
            </h3>

            <p className="mb-6">
              {t("card1.content")}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {metrics.map((index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-left">
                  <p className="text-sm md:text-base font-semibold text-black">
                    {t(`card1.metrics.${index}.title`)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {t(`card1.metrics.${index}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </SlideEffect>

        {/* Card 2 - Automations */}
        <SlideEffect direction="left" duration={1.3} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">
              {t("card2.title")}
            </h3>

            <p className="mb-6">
              {t("card2.content")}
            </p>

            <div className="space-y-3 text-left">
              {automations.map((index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-medium mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-sm text-gray-700">
                    {t(`card2.automations.${index}`)}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </SlideEffect>

      </div>
    </div>
  )
}