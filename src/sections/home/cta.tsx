'use client'

import {useTranslations} from 'next-intl'
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react";

export default function CTA() {
  const t = useTranslations('cta')

  return (
    <div id="contato" className="space-y-6 sm:space-y-7 md:space-y-8 mx-auto text-center">
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">
          {t('title')}
        </h2>
      </SlideEffect>

      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {t('description')}
      </SlideEffect>

      <SlideEffect>
        <a
          href="https://wa.me/5511943820623"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg">
            {t('button')}
            <LucideIcons.ArrowRight />
          </Button>
        </a>
      </SlideEffect>
    </div>
  )
}