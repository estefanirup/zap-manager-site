'use client'

import SlideEffect from "@/components/slide-effect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl"

export default function FAQ() {
  const t = useTranslations("product.faq")

  const items = [0, 1, 2, 3, 4, 5]

  return (
    <div id='faq' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center px-6">

      <SlideEffect>
        <h2 className="text-2xl md:text-4xl font-medium leading-tight max-w-2xl mx-auto">
          {t("title")}
        </h2>
      </SlideEffect>

      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-sm md:text-base text-black text-left">
          {items.map((index) => (
            <AccordionItem key={index} value={index + '-item'}>
              <AccordionTrigger>
                {t(`items.${index}.question`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {t(`items.${index}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>

    </div>
  )
}