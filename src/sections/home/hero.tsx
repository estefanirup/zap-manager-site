'use client'

import Navbar from "@/components/navbar"
import SlideEffect from "@/components/slide-effect"
import TextBlurEffect from "@/components/text-blur-effect"
import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react";
import Link from "next/link"

const settings = {
  headline: 'Tecnologia que transforma   negócios.',
  subheadline: 'Somos especialistas em inovação tecnológica com mais de 20 anos de mercado. Desenvolvemos produtos digitais, soluções de IA e infraestrutura em nuvem para empresas que exigem performance, segurança e resultado.',
  mainCTA: {
    content: 'Conheça nossos serviços',
    href: '#servicos'
  },
  secondaryCTA: {
    content: 'Falar com especialista',
    href: 'https://wa.me/5511943820623'
  },
  stats: [
    { value: '+20', label: 'anos de mercado' },
    { value: '4', label: 'países de atuação' },
    { value: 'AWS', label: 'Partner oficial' },
  ]
}

export default function HomeHero() {
  return (
    <div className="space-y-6 md:space-y-8 z-50 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-primary/6 blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/8 blur-[130px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotgrid-home" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1" fill="#3146B8" />
            </pattern>
            <radialGradient id="dotfade-home" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid-home)" />
          <rect width="100%" height="100%" fill="url(#dotfade-home)" />
        </svg>
      </div>
      <Navbar />
      <section className="flex flex-col gap-8 lg:gap-11 items-center text-center py-10 md:py-16">
        <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-3xl mx-auto">
          <TextBlurEffect className="text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">
            {settings.headline}
          </TextBlurEffect>
        </h1>
        <SlideEffect delay={0} className="text-sm lg:text-base px-6 sm:px-10 md:px-0 md:max-w-2xl mx-auto">
          {settings.subheadline}
        </SlideEffect>
        <SlideEffect className="flex flex-col gap-6 items-center justify-center w-full md:w-fit">
          <div className="flex flex-col md:flex-row items-center w-full justify-center gap-3 md:gap-4 mt-1">
            <Link href={settings.mainCTA.href} className="w-full">
              <Button size='lg' className="capitalize w-full hidden lg:flex">
                {settings.mainCTA.content}
                <LucideIcons.ArrowRight />
              </Button>
              <Button size='default' className="capitalize w-full flex lg:hidden">
                {settings.mainCTA.content}
                <LucideIcons.ArrowRight />
              </Button>
            </Link>
            <Link href={settings.secondaryCTA.href} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size='lg' className="capitalize w-full hidden lg:flex" variant='secondary'>
                {settings.secondaryCTA.content}
              </Button>
              <Button size='default' className="capitalize w-full flex lg:hidden" variant='secondary'>
                {settings.secondaryCTA.content}
              </Button>
            </Link>
          </div>
        </SlideEffect>
        <SlideEffect delay={0.4} className="w-full max-w-2xl mx-auto mt-8">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {settings.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-4xl font-semibold text-primary">{stat.value}</p>
                <p className="text-xs md:text-sm text-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </SlideEffect>
      </section>
    </div>
  )
}