'use client'

import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const settings = {
  title: 'Tem um projeto em mente?',
  description: 'Estamos prontos para transformar suas ideias em soluções digitais inovadoras. Fale com a nossa equipe.',
  cta: {
    content: 'Agendar uma reunião',
    href: 'https://wa.me/5511943820623',
  },
}

export default function CTA() {
  return (
    <div id="contato" className="space-y-6 sm:space-y-7 md:space-y-8 mx-auto text-center">
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {settings.description}
      </SlideEffect>
      <SlideEffect>
        <Link href={settings.cta.href} target="_blank" rel="noopener noreferrer">
          <Button size="lg">
            {settings.cta.content}
            <ArrowRight />
          </Button>
        </Link>
      </SlideEffect>
    </div>
  )
}