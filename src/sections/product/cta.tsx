'use client'

import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const settings = {
  title: 'Organize seu atendimento e pare de perder vendas',

  description:
    'Descubra como centralizar seus canais, automatizar respostas e ter controle total do seu atendimento com uma estrutura pensada para escalar.',

  CTA: {
    content: 'Agendar diagnóstico gratuito',
    href: '#'
  }
}

export default function CTA() {
  return (
    <SlideEffect
      isSpring={false}
      className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center p-8 md:p-16 flex flex-col items-center justify-center rounded-2xl bg-secondary"
    >

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-medium leading-tight max-w-2xl mx-auto">
        {settings.title}
      </h2>

      {/* Description */}
      <p className="max-w-xl mx-auto text-sm md:text-base text-muted-foreground">
        {settings.description}
      </p>

      {/* CTA */}
      <Link href={settings.CTA.href}>
        <Button className="w-full md:w-auto" size='lg'>
          {settings.CTA.content}
        </Button>
      </Link>

    </SlideEffect>
  )
}