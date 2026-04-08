'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Brain, MessageSquareDot, Cloud, Shield, Users } from "lucide-react"
import Link from "next/link"

const settings = {
  title: 'Nossos Serviços',
  description: 'Soluções completas de tecnologia para empresas que precisam de performance, segurança e inovação.',
  services: [
    {
      title: 'Produtos Digitais',
      content: 'Construímos produtos digitais de ponta a ponta. Do discovery ao deploy, passando por design, desenvolvimento, arquitetura e implementação.',
      icon: Code,
      href: null,
      highlight: false,
    },
    {
      title: 'Gestão de Atendimento com IA',
      content: 'Centralize WhatsApp, Instagram e todos os seus canais em um painel inteligente com agentes de IA, automação e métricas em tempo real.',
      icon: MessageSquareDot,
      href: '/gestao-atendimento-ia',
      highlight: true,
    },
    {
      title: 'Inteligência Artificial',
      content: 'Da análise de dados à automação inteligente. Potencializamos seu negócio com soluções de IA avançadas que impulsionam inovação e eficiência.',
      icon: Brain,
      href: null,
      highlight: false,
    },
    {
      title: 'Nuvem',
      content: 'Migração, otimização e gerenciamento em nuvem. Sua empresa escala com flexibilidade, segurança e eficiência. AWS Partner oficial.',
      icon: Cloud,
      href: null,
      highlight: false,
    },
    {
      title: 'Cybersegurança',
      content: 'Proteção contra ameaças digitais com soluções robustas e personalizadas. Avaliação de vulnerabilidade, resposta a incidentes e segurança de dados.',
      icon: Shield,
      href: null,
      highlight: false,
    },
    {
      title: 'Outsourcing',
      content: 'Profissionais qualificados de design, frontend, backend e arquitetura para integrar sua equipe com agilidade e qualidade.',
      icon: Users,
      href: null,
      highlight: false,
    },
  ]
}

export default function Services() {
  return (
    <div id="servicos" className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {settings.description}
      </SlideEffect>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settings.services.map((service, index) => (
          <SlideEffect key={index} direction="top" delay={index * 0.1} className="col-span-1 h-full" isSpring={false}>
            <Card className={service.highlight ? 'bg-primary/5 border border-primary/10' : ''}>
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-2">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-title text-black font-medium">{service.title}</h3>
              <p>{service.content}</p>
              {service.href && (
                <Link href={service.href} className="mt-2">
                  <Button variant="link" className="text-primary p-0">
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              )}
              {service.highlight && (
                <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">novo</span>
              )}
            </Card>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}