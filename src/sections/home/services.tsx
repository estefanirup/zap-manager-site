'use client'

import {useTranslations} from 'next-intl'
import { Link } from '@/i18n/navigation'
import Card from "@/components/card";
import SlideEffect from "@/components/slide-effect";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";

export default function Services() {
  const t = useTranslations('services')

  const services = [
    {
      title: t('digitalCore.title'),
      content: t('digitalCore.content'),
      icon: LucideIcons.RefreshCcw,
      href: null,
      highlight: false,
    },
    {
      title: t('atendimento.title'),
      content: t('atendimento.content'),
      icon: LucideIcons.MessageSquareDot,
      href: '/gestao-atendimento-ia',
      highlight: true,
      badge: t('atendimento.badge'),
    },
    {
      title: t('ventureBuilding.title'),
      content: t('ventureBuilding.content'),
      icon: LucideIcons.Rocket,
      href: null,
      highlight: false,
    },
    {
      title: t('squadAI.title'),
      content: t('squadAI.content'),
      icon: LucideIcons.BrainCircuit,
      href: null,
      highlight: false,
    },
    {
      title: t('consultoria.title'),
      content: t('consultoria.content'),
      icon: LucideIcons.Lightbulb,
      href: null,
      highlight: false,
    },
    {
      title: t('outsourcing.title'),
      content: t('outsourcing.content'),
      icon: LucideIcons.Users,
      href: null,
      highlight: false,
    },
  ] as const

  return (
    <div
      id="servicos"
      className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center"
    >
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">
          {t('title')}
        </h2>
      </SlideEffect>

      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {t('description')}
      </SlideEffect>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <SlideEffect
            key={index}
            direction="top"
            delay={index * 0.1}
            className="col-span-1 h-full"
            isSpring={false}
          >
            <Card
              className={
                service.highlight ? "bg-primary/5 border border-primary/10" : ""
              }
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-2">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl md:text-title text-black font-medium">
                {service.title}
              </h3>

              <p>{service.content}</p>

              {service.href && (
                <Link href={service.href} className="mt-2">
                  <Button variant="link" className="text-primary p-0">
                    {t('learnMore')}{" "}
                    <LucideIcons.ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              )}

              {service.highlight && (
                <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                  {service.badge}
                </span>
              )}
            </Card>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}