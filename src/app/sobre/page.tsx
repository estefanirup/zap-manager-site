'use client'

import { useState } from "react"
import Footer from "@/sections/footer"
import Navbar from "@/components/navbar"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import Image from "next/image"
import { Star, Target, Users, Zap, Globe, BookOpen } from "lucide-react"

const historia = [
  { ano: "2016", texto: "A ideia da Silicon Village surge de uma comunidade de talentos, na 'Vila do Silício', quando o futuro fundador começou a acomodar profissionais de tecnologia." },
  { ano: "2019", texto: "A empresa é formalmente constituída, adotando o nome Silicon Village e consolidando a cultura de colaboração e excelência técnica." },
  { ano: "2021", texto: "A crise da perda de contratos impulsiona a reestruturação interna e foco em performance e resiliência." },
  { ano: "2022", texto: "Reestruturação estratégica e entrada de novo parceiro geram crescimento imediato e robustez operacional." },
]

const valores = [
  { title: "Excelência Técnica", description: "Não aceitamos atalhos. Cada entrega mantém nosso padrão.", icon: Star },
  { title: "Transparência Radical", description: "Comunicamos problemas cedo, de forma objetiva e ética.", icon: Target },
  { title: "Ego Baixo, Impacto Alto", description: "Protagonismo coletivo: time acima da vaidade individual.", icon: Users },
  { title: "Simplicidade Resolutiva", description: "Transformamos complexidade em soluções práticas e funcionais.", icon: Zap },
  { title: "Frugalidade", description: "Mais valor com menos recursos, eficiência é combustível.", icon: Globe },
  { title: "Conhecimento é Copo de Água", description: "Compartilhamos saber livremente, acelerando todos.", icon: BookOpen },
]

const imagensExtras = [
  "/images/team/team-1.jpg",
  "/images/team/team-2.jpg",
  "/images/team/team-3.jpg",
  "/images/team/team-4.jpg",
]

// Usando URLs diretas de bandeiras (flagcdn.com)
const internacional = [
  { city: "Medianeira, PR", role: "Sede & Engenharia", flagUrl: "https://flagcdn.com/w40/br.png" },
  { city: "São Paulo, SP", role: "Operações Comerciais", flagUrl: "https://flagcdn.com/w40/br.png" },
  { city: "Miami, EUA", role: "Operações Internacionais", flagUrl: "https://flagcdn.com/w40/us.png" },
  { city: "Portugal", role: "Presença Europeia", flagUrl: "https://flagcdn.com/w40/pt.png" },
]

export default function HistoriaValores() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div className="relative px-4 xl:px-0 max-w-6xl mx-auto scroll-smooth bg-white">

      <Navbar />

      {/* Nossa História */}
      <section className="py-16 md:py-20 text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <TextRevealEffect>Nossa História</TextRevealEffect>
        </h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
          A Silicon Village nasceu de uma paixão por tecnologia e pessoas. Cada passo que damos é guiado pela ideia de criar soluções que façam sentido para clientes e colaboradores, de forma ética, criativa e comprometida.
        </p>
      </section>

      {/* Timeline */}
      <section className="space-y-16 max-w-4xl mx-auto">
        {historia.map((item, index) => (
          <SlideEffect key={index} direction="left" delay={index * 0.1}>
            <div className="text-left md:text-center border-l-2 border-primary pl-6 md:pl-0 md:border-l-0 md:border-t-2 md:pt-4 md:mt-6">
              <p className="text-primary font-semibold text-xl mb-2">{item.ano}</p>
              <p className="text-foreground/80">{item.texto}</p>
            </div>
          </SlideEffect>
        ))}
      </section>

      {/* Galeria da equipe */}
      <section className="mt-24 text-center max-w-5xl mx-auto">
        <SlideEffect>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Nossa Equipe</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-10">
            Uma equipe que respira inovação, tecnologia e colaboração. Cada vitória é coletiva, cada aprendizado é compartilhado, cada projeto é um passo para transformar o mundo com software de excelência.
          </p>
        </SlideEffect>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {imagensExtras.map((src, index) => (
            <div key={index} onClick={() => setLightbox(src)}>
              <Image
                src={src}
                alt={`Equipe Silicon Village ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded-2xl border border-border hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Missão, Visão & Valores */}
      <section className="mt-24 max-w-6xl mx-auto text-center space-y-12">
        <SlideEffect>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Missão, Visão & Valores</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Na Silicon Village, acreditamos que tecnologia é feita por pessoas apaixonadas. Nossa missão é transformar potencial humano em soluções de alto impacto, com ética, excelência e alegria de construir juntos. Cada desafio é uma oportunidade de aprendizado, cada entrega uma celebração coletiva.
          </p>
        </SlideEffect>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {valores.map((item, index) => (
            <SlideEffect key={index} direction="top" delay={index * 0.1}>
              <div className="rounded-2xl bg-secondary/90 p-8 space-y-4 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center backdrop-blur-sm border border-primary/20">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-foreground/80 text-center">{item.description}</p>
              </div>
            </SlideEffect>
          ))}
        </div>
      </section>

      {/* Seção Internacional sem biblioteca */}
      <section className="relative py-16 md:py-24 flex flex-col items-center text-center px-6 md:px-0 bg-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">Presença Internacional</h2>
        <p className="max-w-3xl text-sm md:text-base text-gray-800 mb-12">
          A Silicon Village nasceu no interior do Paraná, mas nossa visão sempre foi global. Atuamos em diferentes continentes, conectando tecnologia de ponta e talentos excepcionais, e mostrando que inovação não depende de localização, mas de pessoas e cultura.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-6xl">
          {internacional.map((location, index) => (
            <div key={index} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Image
                src={location.flagUrl}
                alt={location.city}
                width={64}
                height={48}
                className="rounded-full object-cover border border-gray-300"
              />
              <h3 className="font-semibold text-lg text-gray-900">{location.city}</h3>
              <p className="text-sm text-gray-700">{location.role}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-gray-800 text-sm md:text-base">
          Amamos ser uma empresa internacional, conectando pessoas, tecnologia e oportunidades em qualquer lugar do mundo.
        </p>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-lg font-medium shadow-lg hover:bg-gray-100 transition"
          >
            ✕
          </button>
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Imagem ampliada"
              width={1200}
              height={900}
              className="object-contain rounded-2xl cursor-zoom-in"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}