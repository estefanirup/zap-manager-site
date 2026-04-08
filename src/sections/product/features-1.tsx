'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"

const settings = {
  badge: {
    number: 1,
    text: 'por que mudar agora',
  },
  title: 'Problemas que sua empresa enfrenta hoje',
  description: 'Se você se identifica com algum desses cenários, sua operação de atendimento está deixando dinheiro na mesa.',
  card_1: {
    title: 'Você não sabe o que acontece no seu atendimento',
    content: 'Qual o tempo médio de resposta da sua equipe? Quantas conversas ficaram sem retorno essa semana? Qual atendente está performando melhor? Sem uma plataforma estruturada, essas respostas simplesmente não existem.',
  },
  card_2: {
    title: 'Crescer significa gastar mais',
    content: 'Quando o volume de mensagens aumenta, a única saída é contratar mais gente. Sem saber se os atendentes atuais estão sendo produtivos, a operação cresce no custo, mas não na eficiência.',
  },
  card_3: {
    title: 'Sua equipe responde as mesmas perguntas o dia inteiro',
    content: 'Horário de funcionamento, preços, status de pedido, informações básicas sobre produtos. São horas por dia gastas com respostas repetitivas que poderiam ser automatizadas.',
  },
  card_4: {
    title: 'Mensagens perdidas são vendas perdidas',
    content: 'Leads que chegam pelo Instagram e ficam sem resposta. Clientes que mandam mensagem no WhatsApp e só recebem retorno no dia seguinte. Cada conversa ignorada é uma oportunidade que foi para o concorrente.',
  },
}

export default function Features1() {
  return (
    <div id='features' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-none text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">{settings.title}</h2>
      </SlideEffect>

      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {settings.description}
      </SlideEffect>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <SlideEffect direction="right" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
            <p>{settings.card_1.content}</p>
          </Card>
        </SlideEffect>

        <SlideEffect direction="left" duration={1.3} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
          </Card>
        </SlideEffect>

        <SlideEffect direction="right" duration={1} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_3.title}</h3>
            <p>{settings.card_3.content}</p>
          </Card>
        </SlideEffect>

        <SlideEffect direction="left" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_4.title}</h3>
            <p>{settings.card_4.content}</p>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}