'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"
import Link from "next/link"

const settings = {
  title: 'Planos',
  description: 'Todos os planos entregam a plataforma completa, sem restrição de funcionalidades. O que muda é o escopo de automação, IA e acompanhamento.',
  plan_1: {
    planName: 'Essencial',
    price: 497,
    currency: 'R$',
    period: '/mês',
    description: 'Para empresas que estão profissionalizando o atendimento digital.',
    cta: 'Falar com consultor',
    href: 'https://wa.me/5511943820623',
    features: [
      'Todos os canais (WhatsApp, Instagram, Facebook, TikTok, Telegram, e-mail, SMS)',
      'Inbox unificada com equipes e auto-assignment',
      'Relatórios por agente, canal, equipe e CSAT',
      'Help Center e base de conhecimento',
      'Perfis de clientes com histórico completo',
      'Respostas prontas, labels e notas internas',
      'Horário comercial configurável',
      'Hospedagem em VPS dedicado',
      'Treinamento da equipe (2h)',
    ]
  },
  plan_2: {
    planName: 'Profissional',
    price: 897,
    currency: 'R$',
    period: '/mês',
    description: 'Para operações que precisam de automação inteligente e integração com outros sistemas.',
    cta: 'Falar com consultor',
    href: 'https://wa.me/5511943820623',
    features: [
      'Tudo do plano Essencial',
      'Fluxos de automação customizados (n8n)',
      'Distribuição inteligente de conversas',
      'Integração com CRM, ERP e sistemas internos',
      'Campanhas automatizadas de follow-up',
      'Alertas de tempo de resposta para gestores',
      'Governança com encontros quinzenais',
      'Suporte técnico com 2h mensais inclusas',
    ]
  },
  plan_3: {
    planName: 'Enterprise',
    price: null,
    currency: '',
    period: '',
    priceLabel: 'Sob consulta',
    description: 'Para operações que exigem IA avançada, integrações complexas e acompanhamento dedicado.',
    cta: 'Solicitar proposta',
    href: 'https://wa.me/5511943820623',
    features: [
      'Tudo do plano Profissional',
      'Agentes de IA para atendimento automatizado',
      'Qualificação de leads com inteligência artificial',
      'Resumo e tradução automática de conversas',
      'Integrações ilimitadas via n8n',
      'Customização da plataforma sob medida',
      'Account manager dedicado',
      'Suporte prioritário',
    ]
  },
  addon: {
    title: 'Agentes de IA',
    price: 'a partir de R$ 550',
    description: 'por agente (implantação única). Inclui modelagem do fluxo no n8n, configuração do prompt, treinamento com a base do cliente e testes. Custo operacional mensal variável conforme consumo de API.',
  }
}

export default function Pricing() {
  return (
    <div id='pricing' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SlideEffect isSpring={false} delay={0.1} className="text-base">
          <Card className="bg-white">
            <div className="capitalize text-start text-black font-medium">{settings.plan_1.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="text-sm text-foreground">a partir de</span>
              <span className="font-medium text-4xl text-black">{settings.plan_1.currency}{settings.plan_1.price}</span>
              <span className="text-sm">{settings.plan_1.period}</span>
            </div>
            <Link href={settings.plan_1.href} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">{settings.plan_1.cta}</Button>
            </Link>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_1.description}</p>
              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CircleCheck className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        <SlideEffect isSpring={false} delay={0.2} className="flex flex-col gap-6 text-base">
          <Card className="bg-secondary">
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="capitalize text-start text-black font-medium">{settings.plan_2.planName}</div>
              <div className="text-xs bg-primary text-white px-2 py-1 rounded-full capitalize">mais popular</div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-sm text-foreground">a partir de</span>
              <span className="font-medium text-4xl text-black">{settings.plan_2.currency}{settings.plan_2.price}</span>
              <span className="text-sm">{settings.plan_2.period}</span>
            </div>
            <Link href={settings.plan_2.href} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">{settings.plan_2.cta}</Button>
            </Link>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_2.description}</p>
              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CircleCheck className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        <SlideEffect isSpring={false} delay={0.3} className="flex flex-col gap-6 text-base">
          <Card className="bg-white">
            <div className="capitalize text-start text-black font-medium">{settings.plan_3.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_3.priceLabel}</span>
            </div>
            <Link href={settings.plan_3.href} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">{settings.plan_3.cta}</Button>
            </Link>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_3.description}</p>
              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_3.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CircleCheck className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>
      </div>

      <SlideEffect>
        <Card className="bg-secondary">
          <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-4">
            <div className="space-y-1 text-start">
              <p className="text-black font-medium text-xl">{settings.addon.title}</p>
              <p className="text-sm">{settings.addon.description}</p>
            </div>
            <Link href="https://wa.me/5511943820623" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
              <Button>{settings.addon.price}</Button>
            </Link>
          </div>
        </Card>
      </SlideEffect>
    </div>
  )
}