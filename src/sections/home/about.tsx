'use client'

import {useTranslations} from 'next-intl'
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"

export default function About() {
  const t = useTranslations('about.international')

  const locations = [
    {
      city: t('locations.pr.city'),
      role: t('locations.pr.role')
    },
    {
      city: t('locations.sp.city'),
      role: t('locations.sp.role')
    },
    {
      city: t('locations.us.city'),
      role: t('locations.us.role')
    },
    {
      city: t('locations.pt.city'),
      role: t('locations.pt.role')
    }
  ]

  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">
          {t('title')}
        </h2>
      </SlideEffect>

      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {t('p1')}
      </SlideEffect>

      <SlideEffect>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((loc, index) => (
            <Card key={index} className="items-center text-center">
              <p className="text-black font-medium text-sm md:text-base">
                {loc.city}
              </p>
              <p className="text-xs text-foreground">
                {loc.role}
              </p>
            </Card>
          ))}
        </div>
      </SlideEffect>
    </div>
  )
}