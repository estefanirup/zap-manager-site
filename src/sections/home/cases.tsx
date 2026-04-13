'use client'

import {useTranslations} from 'next-intl'
import { Link } from '@/i18n/navigation'
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react";

export default function Cases() {
  const t = useTranslations('cases')

  const cases = [
    {
      title: t('drift.title'),
      description: t('drift.description'),
      href: '/casos-de-sucesso/ultimate-drift',
    },
    {
      title: t('silicon.title'),
      description: t('silicon.description'),
      href: '/casos-de-sucesso/app-silicon',
    },
  ] as const

  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">
          {t('title')}
        </h2>
      </SlideEffect>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cases.map((item, index) => (
          <SlideEffect
            key={index}
            direction={index === 0 ? 'right' : 'left'}
            className="col-span-1 h-full"
            isSpring={false}
          >
            <Card>
              <h3 className="text-xl md:text-title text-black font-medium">
                {item.title}
              </h3>

              <p>{item.description}</p>

              <Link href={item.href} className="mt-2">
                <Button variant="link" className="text-primary p-0">
                  {t('readMore')}{" "}
                  <LucideIcons.ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}