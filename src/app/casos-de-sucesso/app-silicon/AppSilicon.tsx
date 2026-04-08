'use client'

import { useState } from "react"
import Footer from "@/sections/footer"
import Navbar from "@/components/navbar"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Clock, FileText, Fingerprint, Receipt, RotateCcw, BarChart3, LineChart, MessageSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const features = [
  { title: 'Lançamento de Horas', description: 'Colaboradores PJ e CLT registram horas por projeto, detalham atividades do dia, conquistas e impedimentos.', icon: Clock },
  { title: 'Holerite Eletrônico', description: 'Geração automatizada de contracheques com acesso digital para consulta a qualquer momento.', icon: FileText },
  { title: 'Controle de Ponto', description: 'Registro de entrada, saída, intervalo e retorno. Gestão completa da jornada para colaboradores CLT.', icon: Fingerprint },
  { title: 'Envio de Notas (NFe)', description: 'Colaboradores PJ enviam notas fiscais diretamente pelo app, com campo dedicado e fluxo simplificado.', icon: Receipt },
  { title: 'Pedidos de Reembolso', description: 'Solicitação, aprovação e rejeição de reembolsos com possibilidade de refazer requisições rejeitadas.', icon: RotateCcw },
  { title: 'Avaliação de Desempenho', description: 'Avaliações periódicas para medir performance, identificar melhorias e promover desenvolvimento profissional.', icon: BarChart3 },
  { title: 'Relatórios Analíticos', description: 'Dados sobre custos com pessoal, rotatividade, indicadores de desempenho e horas por projeto.', icon: LineChart },
  { title: 'Comunicação Interna', description: 'Canal direto entre colaboradores e RH, incluindo contato rápido via configuração remota.', icon: MessageSquare },
]

const technologies = [
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

const profiles = [
  { name: 'CLT', description: 'Controle de ponto, holerites, relatório diário e reembolsos.' },
  { name: 'PJ', description: 'Lançamento de horas, envio de notas fiscais (NFe) e relatórios por projeto.' },
  { name: 'Estagiário', description: 'Home dedicada com funcionalidades adaptadas ao perfil INTERN.' },
]

const mockupImages = [
  "/images/app-silicon/mockup-1.jpg",
  "/images/app-silicon/mockup-2.jpg",
  "/images/app-silicon/mockup-3.jpg",
  "/images/app-silicon/mockup-4.jpg",
]

export default function AppSilicon() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div className="px-4 xl:px-0 max-w-5xl mx-auto space-y-20 sm:space-y-24 md:space-y-32 scroll-smooth">
      <div className="space-y-6 md:space-y-8">
        <Navbar />

        <section className="py-10 md:py-16 max-w-3xl mx-auto">

          <Link
            href="/casos-de-sucesso"
            className="inline-flex items-center gap-2 text-sm text-primary mb-8 hover:opacity-80 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Casos de Sucesso
          </Link>

          <p className="text-xs text-foreground mb-4">25 de fevereiro de 2025</p>

          <h1 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight whitespace-pre-line">
            <TextRevealEffect>
              {"Sistema completo de gestão de colaboradores"}
            </TextRevealEffect>
          </h1>

          <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Uma plataforma desenvolvida internamente pela Silicon Village para
            <span className="text-foreground font-medium"> simplificar a administração de RH</span>,
            unificando lançamento de horas, controle de ponto, holerites, envio de notas fiscais e comunicação interna em um único app.
          </p>

          {/* CONTEXTO */}
          <div className="mt-16 space-y-12 max-w-2xl text-[15px] md:text-[17px] leading-[1.75] text-foreground/80">

            <p>
              Na Silicon Village, acreditamos que a tecnologia deve simplificar a vida, não complicá-la. Com uma equipe distribuída entre colaboradores CLT, PJ e estagiários, gerenciar horas, documentos e despesas se tornava cada vez mais complexo. Foi com essa necessidade real que nasceu o App Silicon.
            </p>

            <div className="border-l-2 border-primary pl-4 py-3 bg-primary/5 rounded-r-md">
              <p className="text-foreground/90">
                O objetivo era claro: <strong>empoderar a equipe com métricas precisas e um uso simplificado</strong>, transformando tarefas burocráticas em experiências rápidas e eficientes.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Gestão financeira descomplicada</h2>
              <p>
                Imaginamos um espaço onde o colaborador pudesse gerenciar suas atividades e despesas sem sair do app. Colaboradores PJ e CLT têm a liberdade de lançar horas para diferentes clientes, detalhando como foi o dia, conquistas e impedimentos, tudo com alguns cliques.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Facilidade na palma da mão</h2>
              <p>
                Além de gerenciar atividades, o Silicon permite envio de notas fiscais de despesas rapidamente. Colaboradores PJ têm um campo dedicado para envio de NFe, tornando o processo direto e sem atrito. Pedidos de reembolso podem ser feitos, aprovados ou rejeitados diretamente no app, com possibilidade de refazer requisições.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Três perfis, uma plataforma</h2>
              <p>
                O app se adapta ao tipo de contrato do colaborador, entregando funcionalidades específicas para cada perfil:
              </p>
            </div>
          </div>

          {/* PERFIS */}
          <SlideEffect>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {profiles.map((profile, index) => (
                <div key={index} className="rounded-2xl bg-secondary p-6 space-y-2">
                  <p className="text-black font-semibold text-lg">{profile.name}</p>
                  <p className="text-sm text-foreground/70">{profile.description}</p>
                </div>
              ))}
            </div>
          </SlideEffect>

          {/* FUNCIONALIDADES */}
          <section className="mt-20">
            <SlideEffect>
              <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">
                Funcionalidades do sistema
              </h2>
              <p className="text-sm text-foreground/60 text-center mb-10 max-w-lg mx-auto">
                Tudo o que a equipe precisa para gestão de horas, documentos e desempenho em um só lugar.
              </p>
            </SlideEffect>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <SlideEffect key={index} direction="top" delay={index * 0.05} isSpring={false}>
                  <div className="rounded-2xl bg-secondary p-6 space-y-3 h-full">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-black font-medium">{feature.title}</p>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                  </div>
                </SlideEffect>
              ))}
            </div>
          </section>

          {/* MOCKUPS */}
          <section className="mt-24">
            <SlideEffect>
              <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">
                O app em ação
              </h2>
              <p className="text-sm text-foreground/60 text-center mb-10 max-w-lg mx-auto">
                Interface pensada para ser simples e direta, permitindo que qualquer colaborador use sem treinamento.
              </p>
            </SlideEffect>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {mockupImages.map((src, i) => (
                <div
                  key={i}
                  className="cursor-pointer"
                  onClick={() => setLightbox(src)}
                >
                  <Image
                    src={src}
                    alt={`Tela do app ${i + 1}`}
                    width={300}
                    height={600}
                    className="w-full h-auto object-contain rounded-2xl border border-border hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* TECNOLOGIAS */}
          <section className="mt-24">
            <SlideEffect>
              <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">
                Tecnologias utilizadas
              </h2>
              <p className="text-sm text-foreground/60 text-center mb-10 max-w-lg mx-auto">
                App mobile em Flutter, backoffice em Angular e infraestrutura completa no Firebase com Cloud Functions.
              </p>
            </SlideEffect>

            <SlideEffect>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="h-5 w-5 object-contain"
                    />
                    <span className="text-sm font-medium text-black/70 group-hover:text-black transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </SlideEffect>
          </section>

          {/* LIGHTBOX */}
          {lightbox && (
            <>
              <style>{`[class*="from-transparent"] { display: none !important; }`}</style>
              <div
                className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setLightbox(null)}
              >
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-lg font-medium shadow-lg hover:bg-gray-100 transition z-10"
                >
                  ✕
                </button>
                <div
                  className="relative overflow-auto max-h-[90vh] max-w-[90vw]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={lightbox}
                    alt="Mockup ampliado"
                    className="max-h-[85vh] w-auto object-contain rounded-2xl cursor-zoom-in"
                    onClick={(e) => {
                      const img = e.currentTarget
                      if (img.style.maxHeight === 'none') {
                        img.style.maxHeight = '85vh'
                        img.style.cursor = 'zoom-in'
                      } else {
                        img.style.maxHeight = 'none'
                        img.style.cursor = 'zoom-out'
                      }
                    }}
                  />
                </div>
              </div>
            </>
          )}

          {/* CTA + NAVEGAÇÃO */}
          <div className="mt-20 space-y-10">
            <SlideEffect>
              <div className="text-center space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Precisa de uma solução sob medida para sua equipe?
                </h2>
                <p className="text-sm text-foreground/60 max-w-md mx-auto">
                  Desenvolvemos sistemas internos que simplificam a operação e empoderam sua equipe com dados e agilidade.
                </p>
                <Link href="https://wa.me/5511943820623" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="mt-4">
                    Falar com especialista
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </SlideEffect>

            <div className="pt-8 border-t border-border">
              <Link
                href="/casos-de-sucesso/ultimate-drift"
                className="text-primary hover:opacity-70 transition text-sm"
              >
                ← Case anterior: Ultimate Drift
              </Link>
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  )
}