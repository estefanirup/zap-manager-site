'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const settings = {
  title: 'Casos de Sucesso',
  cases: [
    {
      title: 'Ultimate Drift',
      description: 'Como a tecnologia transformou o maior campeonato de drift do Brasil. App para juízes, pilotos e público com notas ao vivo e histórico em tempo real.',
      href: '/casos-de-sucesso/ultimate-drift',
    },
    {
      title: 'App Silicon',
      description: 'Plataforma interna completa para gestão financeira, lançamento de horas e envio de documentos. Simplificando o dia a dia dos colaboradores.',
      href: '/casos-de-sucesso/app-silicon',
    },
  ]
}

export default function Cases() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {settings.cases.map((item, index) => (
          <SlideEffect key={index} direction={index === 0 ? 'right' : 'left'} className="col-span-1 h-full" isSpring={false}>
            <Card>
              <h3 className="text-xl md:text-title text-black font-medium">{item.title}</h3>
              <p>{item.description}</p>
              <Link href={item.href} className="mt-2">
                <Button variant="link" className="text-primary p-0">
                  Ler case completo <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}