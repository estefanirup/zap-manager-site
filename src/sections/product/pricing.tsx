'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function Pricing() {
  const t = useTranslations("product.pricing")

  const plan1 = t.raw("plan_1")
  const plan2 = t.raw("plan_2")
  const plan3 = t.raw("plan_3")

  const plan1Features = plan1.features as string[]
  const plan2Features = plan2.features as string[]
  const plan3Features = plan3.features as string[]

  return (
    <div id="pricing" className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* PLAN 1 */}
        <SlideEffect isSpring={false} delay={0.1}>
          <Card className="bg-white">

            <div className="capitalize text-start text-black font-medium">
              {plan1.planName}
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-sm text-foreground">a partir de</span>
              <span className="font-medium text-4xl text-black">
                {plan1.currency}{plan1.price}
              </span>
              <span className="text-sm">{plan1.period}</span>
            </div>

            <Link href={plan1.href} target="_blank" className="w-full">
              <Button className="w-full">{plan1.cta}</Button>
            </Link>

            <div className="text-start space-y-6">
              <p className="text-black text-sm">{plan1.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {plan1Features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <LucideIcons.CheckCircle className="text-primary w-4 h-4 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </Card>
        </SlideEffect>

        {/* PLAN 2 */}
        <SlideEffect isSpring={false} delay={0.2}>
          <Card className="bg-secondary">

            <div className="flex items-center justify-between">
              <div className="capitalize text-start text-black font-medium">
                {plan2.planName}
              </div>
              <div className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                mais popular
              </div>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-sm text-foreground">a partir de</span>
              <span className="font-medium text-4xl text-black">
                {plan2.currency}{plan2.price}
              </span>
              <span className="text-sm">{plan2.period}</span>
            </div>

            <Link href={plan2.href} target="_blank" className="w-full">
              <Button className="w-full">{plan2.cta}</Button>
            </Link>

            <div className="text-start space-y-6">
              <p className="text-black text-sm">{plan2.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {plan2Features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <LucideIcons.CheckCircle className="text-primary w-4 h-4 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </Card>
        </SlideEffect>

        {/* PLAN 3 */}
        <SlideEffect isSpring={false} delay={0.3}>
          <Card className="bg-white">

            <div className="capitalize text-start text-black font-medium">
              {plan3.planName}
            </div>

            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">
                {plan3.priceLabel}
              </span>
            </div>

            <Link href={plan3.href} target="_blank" className="w-full">
              <Button className="w-full">{plan3.cta}</Button>
            </Link>

            <div className="text-start space-y-6">
              <p className="text-black text-sm">{plan3.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {plan3Features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <LucideIcons.CheckCircle className="text-primary w-4 h-4 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </Card>
        </SlideEffect>

      </div>

      {/* ADDON */}
      <SlideEffect>
        <Card className="bg-secondary">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">

            <div className="space-y-1 text-start">
              <p className="text-black font-medium text-xl">
                {t("addon.title")}
              </p>
              <p className="text-sm">
                {t("addon.description")}
              </p>
            </div>

            <Link href="https://wa.me/5511916329680" target="_blank">
              <Button>{t("addon.price")}</Button>
            </Link>

          </div>
        </Card>
      </SlideEffect>

    </div>
  )
}