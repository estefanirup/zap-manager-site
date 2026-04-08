'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"

const settings = {
  title: 'Sobre a Silicon Village',
  content: 'Nossa sede está em Medianeira, no interior do Paraná, dentro do Cientech, o parque tecnológico da UTFPR. Estar fisicamente dentro de um parque científico e tecnológico nos posiciona no centro do ecossistema de inovação da região, com proximidade direta a pesquisadores e profissionais altamente qualificados.',
  locations: [
    { city: 'Medianeira, PR', role: 'Sede e engenharia' },
    { city: 'São Paulo, SP', role: 'Operações comerciais' },
    { city: 'Miami, EUA', role: 'Operações internacionais' },
    { city: 'Portugal', role: 'Presença europeia' },
  ]
}

export default function About() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {settings.content}
      </SlideEffect>
      <SlideEffect>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {settings.locations.map((loc, index) => (
            <Card key={index} className="items-center text-center">
              <p className="text-black font-medium text-sm md:text-base">{loc.city}</p>
              <p className="text-xs text-foreground">{loc.role}</p>
            </Card>
          ))}
        </div>
      </SlideEffect>
    </div>
  )
}