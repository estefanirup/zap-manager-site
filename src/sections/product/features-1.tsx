'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { useTranslations } from "next-intl"

export default function Features1() {
  const t = useTranslations("product.features1")

  return (
    <div id='features' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      <SlideEffect>
        <Badge number={1} text={t("badge")} />
      </SlideEffect>

      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-none text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">
          {t("title")}
        </h2>
      </SlideEffect>

      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {t("description")}
      </SlideEffect>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <SlideEffect direction="right" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">
              {t("card1.title")}
            </h3>
            <p>{t("card1.content")}</p>
          </Card>
        </SlideEffect>

        <SlideEffect direction="left" duration={1.3} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">
              {t("card2.title")}
            </h3>
            <p>{t("card2.content")}</p>
          </Card>
        </SlideEffect>

        <SlideEffect direction="right" duration={1} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">
              {t("card3.title")}
            </h3>
            <p>{t("card3.content")}</p>
          </Card>
        </SlideEffect>

        <SlideEffect direction="left" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">
              {t("card4.title")}
            </h3>
            <p>{t("card4.content")}</p>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}