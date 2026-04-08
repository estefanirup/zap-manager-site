'use client'

import SlideEffect from "@/components/slide-effect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const settings = {
  title: 'Dúvidas frequentes',

  faqs: [
    {
      question: 'Isso substitui minha equipe de atendimento?',
      answer:
        'Não. A plataforma atua junto com sua equipe, automatizando respostas repetitivas e organizando o fluxo. Seus atendentes focam apenas no que realmente importa: fechar vendas e resolver casos complexos.',
    },
    {
      question: 'Funciona com WhatsApp e Instagram?',
      answer:
        'Sim. Você pode conectar WhatsApp, Instagram, Facebook, e-mail e outros canais em um único painel, centralizando todo o atendimento.',
    },
    {
      question: 'Preciso de conhecimento técnico para usar?',
      answer:
        'Não. Nós cuidamos da implementação, configuração e treinamento da sua equipe. Você recebe a operação pronta para uso.',
    },
    {
      question: 'Como funciona a inteligência artificial?',
      answer:
        'A IA responde automaticamente perguntas frequentes, qualifica leads e encaminha para um atendente humano quando necessário, sempre com o contexto completo da conversa.',
    },
    {
      question: 'Meus dados ficam seguros?',
      answer:
        'Sim. A solução pode ser implantada em servidor dedicado (VPS), garantindo controle total sobre os dados e histórico de atendimento.',
    },
    {
      question: 'Quanto tempo leva para começar?',
      answer:
        'A estrutura inicial pode ser configurada rapidamente. Após isso, ajustamos automações e fluxos conforme sua operação evolui.',
    },
  ]
}

export default function FAQ() {
  return (
    <div id='faq' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center px-6">

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl font-medium leading-tight max-w-2xl mx-auto">
          {settings.title}
        </h2>
      </SlideEffect>

      {/* Accordion */}
      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-sm md:text-base text-black text-left">
          {settings.faqs.map((faq, index) => (
            <AccordionItem key={index} value={index + '-item'}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>

    </div>
  )
}