'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"

const settings = {
  badge: {
    number: 2,
    text: 'a solução',
  },
  title: 'Visibilidade total, controle real',
  description: 'Um painel único onde você acompanha cada conversa, mede a performance da equipe e toma decisões com base em dados, não em achismos.',
  card_1: {
    title: 'Métricas que mostram a verdade',
    content: 'Acompanhe a performance da sua operação em tempo real. Sem achismo, sem depender de relatos manuais.',
    metrics: [
      { title: 'Tempo de resposta', description: 'Saiba em segundos quanto sua equipe demora para responder cada cliente' },
      { title: 'Volume por canal', description: 'Veja quais canais geram mais demanda e onde concentrar esforços' },
      { title: 'Satisfação (CSAT)', description: 'Pesquisa automática após cada atendimento resolvido' },
      { title: 'Performance por agente', description: 'Compare produtividade, velocidade e qualidade entre atendentes' },
    ]
  },
  card_2: {
    title: 'Automação que trabalha por você',
    content: 'Fluxos inteligentes no n8n que distribuem conversas, rotulam atendimentos, enviam respostas automáticas e alertam gestores quando tempos de resposta ultrapassam o limite. Sua equipe foca no que importa.',
    automations: [
      'Conversa criada no Instagram → atribuir ao time de vendas',
      'Mensagem contém "cancelar" → encaminhar para retenção',
      'Sem resposta há 5 min → alerta ao supervisor',
      'Conversa resolvida → enviar pesquisa de satisfação',
    ]
  },
}

export default function Features2() {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* card 1: Métricas */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
            <p className="mb-6">{settings.card_1.content}</p>
            <div className="grid grid-cols-2 gap-3">
              {settings.card_1.metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-left">
                  <p className="text-sm md:text-base font-semibold text-black">{metric.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </SlideEffect>

        {/* card 2: Automação */}
        <SlideEffect direction="left" duration={1.3} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p className="mb-6">{settings.card_2.content}</p>
            <div className="space-y-3 text-left">
              {settings.card_2.automations.map((rule, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-medium mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-sm text-gray-700">{rule}</p>
                </div>
              ))}
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}