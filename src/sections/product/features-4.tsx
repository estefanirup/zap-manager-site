'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import Spinner from "@/components/spinner"
import TextRevealEffect from "@/components/text-reveal-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const settings = {
  badge: {
    number: 4,
    text: 'sua equipe no controle',
  },
  title: 'Gestão real do atendimento',
  description: 'Distribua conversas entre equipes, acompanhe a performance de cada agente e garanta que nenhum cliente fique sem resposta.',
  card_1: {
    title: 'Equipes, canais e agentes em um só painel',
    content: 'Crie times separados para vendas, suporte e pós-venda. Atribua agentes a canais específicos, defina limites de conversas simultâneas e acompanhe quem está online e quem está sobrecarregado. Tudo com visibilidade total para o gestor.',
    CTA: {
      content: 'Agendar diagnóstico gratuito',
      href: '#'
    },
    labels: [
      'Vendas',
      'Suporte',
      'Pós-venda',
      'Financeiro',
      'Retenção',
      'Técnico',
      'Triagem',
    ],
    avatars: [
      'https://ui-avatars.com/api/?name=A+S&background=EEF0F8&color=3146B8&size=150',
      'https://ui-avatars.com/api/?name=C+M&background=EEF0F8&color=3146B8&size=150',
      'https://ui-avatars.com/api/?name=J+R&background=EEF0F8&color=3146B8&size=150',
      'https://ui-avatars.com/api/?name=P+L&background=EEF0F8&color=3146B8&size=150',
      'https://ui-avatars.com/api/?name=B+F&background=EEF0F8&color=3146B8&size=150',
      'https://ui-avatars.com/api/?name=L+T&background=EEF0F8&color=3146B8&size=150',
      'https://ui-avatars.com/api/?name=M+K&background=EEF0F8&color=3146B8&size=150'
    ]
  },
  card_2: {
    title: 'Alertas de tempo de resposta',
    content: 'Defina metas de tempo de primeira resposta, tempo de acompanhamento e tempo de resolução. Fluxos automatizados no n8n monitoram esses prazos e alertam gestores antes que o limite seja ultrapassado.',
  },
  card_3: {
    title: 'Relatórios que geram decisão',
    content: 'Seis tipos de relatórios prontos: por conversa, por agente, por equipe, por canal, por label e CSAT. Todos exportáveis para análise offline ou apresentação à diretoria.',
  },
}

export default function Features4() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* card 1 */}
        <SlideEffect direction="top" className="grid-cols-1 lg:col-span-2 h-full" isSpring={false}>
          <Card className="flex flex-col lg:flex-row justify-center items-center">
            <div className="space-y-3 md:space-y-5 flex-1">
              <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
              <p className="mb-8 lg:mb-16">{settings.card_1.content}</p>
              <Link href={settings.card_1.CTA.href}>
                <Button className="bg-accent">{settings.card_1.CTA.content}</Button>
              </Link>
            </div>

            <Spinner labels={settings.card_1.labels} avatars={settings.card_1.avatars} />
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
          </Card>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="left" delay={0.2} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_3.title}</h3>
            <p>{settings.card_3.content}</p>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}