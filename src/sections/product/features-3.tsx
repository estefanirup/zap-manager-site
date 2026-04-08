'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Bot, Sparkles, Globe } from "lucide-react"

const settings = {
  badge: {
    number: 3,
    text: 'inteligência artificial',
  },
  title: 'IA que atende, aprende e evolui',
  description: 'Agentes de inteligência artificial construídos sob medida para o seu negócio. Eles respondem clientes, auxiliam sua equipe e evoluem conforme a base de conhecimento cresce.',
  card_1: {
    title: 'Assistente 24h',
    content: 'Um agente de IA que responde clientes automaticamente com base na documentação e no histórico da empresa. Quando não consegue resolver, transfere para um humano com o contexto completo da conversa.',
    icon: Bot,
  },
  card_2: {
    title: 'Assistente inteligente para sua equipe',
    content: 'Enquanto o agente atende, a IA trabalha junto. Sugere respostas com base no contexto, resume conversas longas para handoffs rápidos e qualifica leads coletando dados essenciais antes da intervenção humana.',
    icon: Sparkles,
  },
  card_3: {
    title: 'Tradução em tempo real',
    content: 'Atenda clientes em diversos idiomas sem precisar de uma equipe multilíngue. A IA traduz mensagens automaticamente nos dois sentidos da conversa.',
    icon: Globe,
  },
}

export default function Features3() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* card 1 */}
        <SlideEffect direction="top" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 mx-auto">
              <settings.card_1.icon className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
            <p>{settings.card_1.content}</p>
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="top" delay={0.2} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 mx-auto">
              <settings.card_2.icon className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
          </Card>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="top" delay={0.3} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 mx-auto">
              <settings.card_3.icon className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_3.title}</h3>
            <p>{settings.card_3.content}</p>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}