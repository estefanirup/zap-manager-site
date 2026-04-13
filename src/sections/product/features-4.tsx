'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import Spinner from "@/components/spinner"
import TextRevealEffect from "@/components/text-reveal-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function Features4() {
  const t = useTranslations("product.features4")

  const labels = [0, 1, 2, 3, 4, 5, 6]

  const avatars = [
    'https://ui-avatars.com/api/?name=A+S&background=EEF0F8&color=3146B8&size=150',
    'https://ui-avatars.com/api/?name=C+M&background=EEF0F8&color=3146B8&size=150',
    'https://ui-avatars.com/api/?name=J+R&background=EEF0F8&color=3146B8&size=150',
    'https://ui-avatars.com/api/?name=P+L&background=EEF0F8&color=3146B8&size=150',
    'https://ui-avatars.com/api/?name=B+F&background=EEF0F8&color=3146B8&size=150',
    'https://ui-avatars.com/api/?name=L+T&background=EEF0F8&color=3146B8&size=150',
    'https://ui-avatars.com/api/?name=M+K&background=EEF0F8&color=3146B8&size=150'
  ]

  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      
      {/* Badge */}
      <SlideEffect>
        <Badge number={4} text={t("badge")} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">
        {t("title")}
      </TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {t("description")}
      </SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <SlideEffect direction="top" className="grid-cols-1 lg:col-span-2 h-full" isSpring={false}>
          <Card className="flex flex-col lg:flex-row justify-center items-center">
            
            <div className="space-y-3 md:space-y-5 flex-1">
              <h3 className="text-xl md:text-title text-black font-medium">
                {t("card1.title")}
              </h3>

              <p className="mb-8 lg:mb-16">
                {t("card1.content")}
              </p>

              <Link href="#">
                <Button className="bg-accent">
                  {t("card1.cta")}
                </Button>
              </Link>
            </div>

            <Spinner
              labels={labels.map((i) => t(`card1.labels.${i}`))}
              avatars={avatars}
            />
          </Card>
        </SlideEffect>

        {/* Card 2 */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">
              {t("card2.title")}
            </h3>
            <p>{t("card2.content")}</p>
          </Card>
        </SlideEffect>

        {/* Card 3 */}
        <SlideEffect direction="left" delay={0.2} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">
              {t("card3.title")}
            </h3>
            <p>{t("card3.content")}</p>
          </Card>
        </SlideEffect>

      </div>
    </div>
  )
}