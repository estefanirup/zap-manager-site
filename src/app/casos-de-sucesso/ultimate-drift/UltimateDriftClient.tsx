'use client'

import { useState } from "react"
import Footer from "@/sections/footer"
import Navbar from "@/components/navbar"
import TextRevealEffect from "@/components/text-reveal-effect"
import * as LucideIcons from "lucide-react";
import Link from "next/link"
import Image from "next/image"
import SlideEffect from "@/components/slide-effect"
import InstagramEmbed from "@/components/instagram-embed"
import { Button } from "@/components/ui/button"
export default function UltimateDrift() {

  const [lightbox, setLightbox] = useState<string | null>(null)

  const gallery = [
    "/images/ultimate-drift/drift-action-1.jpg",
    "/images/ultimate-drift/drift-action-2.jpg",
    "/images/ultimate-drift/drift-action-3.jpg",
    "/images/ultimate-drift/drift-crowd.jpg",
    "/images/ultimate-drift/drift-judges.jpg",
    "/images/ultimate-drift/drift-night.jpg",
  ]

  const mockupImages = [
    "/images/ultimate-drift/mockup-1.png",
    "/images/ultimate-drift/mockup-2.png",
    "/images/ultimate-drift/mockup-3.png",
    "/images/ultimate-drift/mockup-4.png",
  ]


  const technologies = [
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "SQLAlchemy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" },
    { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ]

  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
  }

  const next = () => {
    setIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="px-4 xl:px-0 max-w-5xl mx-auto relative isolate">

      <Navbar />

      <section className="py-12 md:py-20 max-w-3xl mx-auto">

        <Link
          href="/casos-de-sucesso"
          className="inline-flex items-center gap-2 text-sm text-primary mb-10 hover:opacity-70 transition"
        >
          <LucideIcons.ArrowLeft className="w-4 h-4" />
          Voltar para Casos de Sucesso
        </Link>

        <p className="text-xs text-muted-foreground mb-4">
          24 de fevereiro de 2025
        </p>

        <h1 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight whitespace-pre-line">          <TextRevealEffect>
          {"Plataforma completa para o maior campeonato de drift do Brasil"}
        </TextRevealEffect>
        </h1>

        <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed">
          Um ecossistema digital que conecta
          <span className="text-foreground font-medium"> juízes, pilotos e público </span>
          em tempo real, elevando a clareza das decisões e a experiência do evento.
        </p>

        {/* HERO */}
        <div className="mt-14">
          <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-background">
            <Image
              src="/images/ultimate-drift/drift-hero.png"
              alt="Drift ao vivo"
              width={1400}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="mt-16 space-y-12 max-w-2xl text-[15px] md:text-[17px] leading-[1.75] text-foreground/80">

          <p>
            Quando a Ultimate Drift nos procurou, o cenário era claro. O campeonato crescia rapidamente, mas a tecnologia existente não acompanhava essa evolução. Havia <strong>desorganização operacional</strong>, limitações no sistema e uma necessidade urgente de estruturar uma base sólida capaz de sustentar o crescimento.
          </p>

          <p>
            Foi nesse contexto que a Silicon Village assumiu o desafio, com o objetivo de <strong>redefinir completamente a forma como o campeonato operava</strong>.
          </p>

          <div className="border-l-2 border-primary pl-4 py-3 bg-primary/5 rounded-r-md">
            <p className="text-foreground/90">
              O foco era transformar a operação em algo <strong>confiável, claro e preparado para escalar</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Precisão na avaliação
            </h2>
            <p>
              O primeiro movimento foi atuar diretamente no ponto mais crítico do campeonato. Desenvolvemos um aplicativo dedicado aos juízes, permitindo votações de qualquer lugar, com <strong>critérios totalmente parametrizáveis</strong> e adaptáveis a cada etapa.
            </p>
            <p className="mt-4">
              O impacto foi imediato. Houve <strong>ganho de precisão</strong>, redução de subjetividade e mais agilidade no processo. O que antes era inconsistente passou a ser <strong>padronizado e confiável</strong>.
            </p>
          </div>

        </div>

        {/* IMAGEM */}
        <div className="mt-16">
          <Image
            src="/images/ultimate-drift/drift-judges.jpg"
            alt="Juízes avaliando"
            width={1200}
            height={700}
            className="rounded-xl border border-border"
          />
        </div>

        <div className="mt-12 space-y-12 max-w-2xl text-[15px] md:text-[17px] leading-[1.75] text-foreground/80">

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Plataforma integrada
            </h2>
            <p>
              Com a base consolidada, evoluímos para uma solução mais ampla. Criamos uma plataforma que conecta <strong>juízes, pilotos e público</strong> em um único ecossistema.
            </p>
            <p className="mt-4">
              As notas passaram a ser exibidas em tempo real, com histórico completo acessível. Isso elevou significativamente o nível de <strong>transparência e engajamento</strong> do campeonato.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Base tecnológica sólida
            </h2>
            <p>
              O diferencial não esteve apenas na interface. Toda a lógica do campeonato foi estruturada em um backoffice robusto, com regras de negócio bem definidas e controle centralizado.
            </p>
            <p className="mt-4">
              Isso garantiu <strong>consistência operacional, estabilidade e escalabilidade</strong>, mesmo em momentos críticos onde decisões precisam ser rápidas e seguras.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Resultado
            </h2>
            <p>
              Hoje, a Ultimate Drift se posiciona como <strong>referência no segmento</strong>. A tecnologia deixou de ser um obstáculo e passou a ser um dos principais pilares do campeonato.
            </p>
            <p className="mt-4">
              A experiência se tornou mais clara para os pilotos, mais confiável para os juízes e muito mais envolvente para o público. Na prática, houve uma transformação completa na forma como o evento é percebido.
            </p>
          </div>

        </div>

        {/* DEPOIMENTOS */}
        <SlideEffect delay={0.5} className="w-full max-w-3xl mx-auto mt-20">
          <p className="text-xs uppercase tracking-widest text-foreground mb-6 text-center">
            O que estão dizendo
          </p>

          <p className="text-center text-sm text-foreground/70 mb-8 max-w-xl mx-auto">
            Feedback real de quem vive o campeonato: pilotos, público e equipe.
          </p>

          <InstagramEmbed url="https://www.instagram.com/p/DVj-35cDUOn/" />
        </SlideEffect>

        {/* GALERIA */}
        <div className="mt-20">

          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            O campeonato em ação
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border bg-background">
              <Image
                src={gallery[index]}
                alt="Drift"
                width={1400}
                height={800}
                className="w-full object-cover"
              />
            </div>

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur p-2 rounded-full border"
            >
              <LucideIcons.ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur p-2 rounded-full border"
            >
              <LucideIcons.ChevronRight />
            </button>
          </div>

        </div>

        {/* MOCKUPS */}
        <section className="mt-24">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">
            O app em ação
          </h2>
          <p className="text-sm text-foreground/60 text-center mb-10 max-w-lg mx-auto">
            Interface desenvolvida para ser rápida e intuitiva em qualquer dispositivo, mesmo em ambientes de alta pressão como a pista.
          </p>

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

        {/* TECNOLOGIAS */}
        <section className="mt-24">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">
            Tecnologias utilizadas
          </h2>
          <p className="text-sm text-foreground/60 text-center mb-10 max-w-lg mx-auto">
            Stack escolhida para garantir performance em tempo real, escalabilidade e estabilidade durante os eventos.
          </p>

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
        </section>

        {/* CTA + NAVEGAÇÃO */}
        <div className="mt-20 space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Quer um resultado assim para o seu negócio?
            </h2>
            <p className="text-sm text-foreground/60 max-w-md mx-auto">
              Fale com a nossa equipe e descubra como a tecnologia pode transformar a sua operação.
            </p>
            <Link href="https://wa.me/5511943820623" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="mt-4">
                Falar com especialista
                <LucideIcons.ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-border">
            <Link
              href="/casos-de-sucesso/app-silicon"
              className="text-primary hover:opacity-70 transition text-sm"
            >
              Próximo case → App Silicon
            </Link>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  )
}