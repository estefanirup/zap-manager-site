'use client'

import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"

const settings = {
  title: 'Quem confia na Silicon Village',
  logos: [
    '/images/stellantis.png',
    '/images/sicredi.png',
    '/images/ultimatedrift.png',
    '/images/yamaha.png',
    '/images/tegma.png',
    '/images/semparar.svg',
    '/images/itau.png',
  ],
  partner: {
    label: 'Parceiro oficial',
    text: 'AWS Partner',
    logo: '/images/aws.png',
    description: 'Infraestrutura, segurança e escalabilidade com o respaldo da maior plataforma de nuvem do mundo.',
  }
}

export default function Clients() {
  return (
    <div className="space-y-16 md:space-y-20 mx-auto text-center">
      <div className="space-y-8">
        <SlideEffect>
          <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</TextRevealEffect>
        </SlideEffect>
        <SlideEffect>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70">
            {settings.logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Cliente Silicon Village"
                className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </SlideEffect>
      </div>
      <SlideEffect>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-widest text-foreground">{settings.partner.label}</p>
          <img
            src={settings.partner.logo}
            alt={settings.partner.text}
            className="h-16 md:h-20 w-auto object-contain"
          />
          <p className="text-sm max-w-sm text-foreground">{settings.partner.description}</p>
        </div>
      </SlideEffect>
    </div>
  )
}