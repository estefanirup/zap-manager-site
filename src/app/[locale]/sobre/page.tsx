"use client";

import { useState } from "react";
import Footer from "@/sections/footer";
import Navbar from "@/components/navbar";
import SlideEffect from "@/components/slide-effect";
import TextRevealEffect from "@/components/text-reveal-effect";
import Image from "next/image";
import {
  Star,
  Target,
  Users,
  Zap,
  Globe,
  BookOpen,
} from "@/components/ui/icons";

const imagensExtras = [
  "/images/team/team-1.jpg",
  "/images/team/team-2.jpg",
  "/images/team/team-3.jpg",
  "/images/team/team-4.jpg",
  "/images/team/team-5.jpg",
  "/images/team/team-6.jpg",
  "/images/team/team-7.jpg",
  "/images/team/team-8.jpg",
];

const internacional = [
  {
    city: "Medianeira, PR",
    role: "Sede & Engenharia",
    flagUrl: "https://flagcdn.com/w160/br.png",
  },
  {
    city: "São Paulo, SP",
    role: "Operações Comerciais",
    flagUrl: "https://flagcdn.com/w160/br.png",
  },
  {
    city: "Miami, EUA",
    role: "Operações Internacionais",
    flagUrl: "https://flagcdn.com/w160/us.png",
  },
  {
    city: "Portugal",
    role: "Presença Europeia",
    flagUrl: "https://flagcdn.com/w160/pt.png",
  },
];

const valores = [
  { title: "EXCELÊNCIA TÉCNICA INEGOCIÁVEL", icon: Star },
  { title: "TRANSFORME POTENCIAL EM LIDERANÇA", icon: Target },
  { title: "SIMPLICIDADE RESOLUTIVA", icon: Zap },
  { title: "TRANSPARÊNCIA RADICAL (SEM DRAMA)", icon: Users },
  { title: "EGO BAIXO, IMPACTO ALTO", icon: Users },
  { title: "FRUGALIDADE (FAÇA MAIS COM MENOS)", icon: Globe },
  { title: "CONHECIMENTO É IGUAL COPO DE ÁGUA", icon: BookOpen },
];

export default function HistoriaValores() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="relative px-4 xl:px-0 max-w-6xl mx-auto scroll-smooth bg-white">
      <Navbar />

      {/* Nossa História */}
      <section className="py-16 md:py-20 text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <TextRevealEffect>Nossa História</TextRevealEffect>
        </h1>

        <div className="text-lg text-foreground/80 leading-relaxed space-y-6 text-left">
          <p>
            A Silicon Village começou a ganhar vida de forma orgânica e
            colaborativa em 2016. Após se mudar para São Paulo, o fundador
            Jeferson Guardezi foi morar em uma charmosa vila residencial
            composta por oito casas. Conforme ele formava equipes e trazia novos
            talentos para trabalhar em projetos de tecnologia, esses
            profissionais acabaram se mudando para lá, chegando a ocupar cerca
            de seis das casas da vila.
          </p>

          <p>
            Esse ambiente de proximidade, inovação e colaboração fez com que o
            local fosse carinhosamente apelidado de "Vila do Silício" ou
            "Silicon Village", nome que inspirou e batizou oficialmente a
            empresa em sua fundação, no ano de 2019.
          </p>

          <p>
            Desde o início de suas operações, a Silicon Village apresentou um
            crescimento acelerado, conseguindo dobrar de tamanho ano após ano. O
            grande motor desse sucesso é a nossa forte aposta no potencial
            humano, buscando talentos promissores em instituições de excelência,
            como a UTFPR.
          </p>

          <p>
            Consolidamos uma cultura de empoderamento, onde acreditamos que a
            fome de aprender e a proatividade são os maiores diferenciais para a
            construção de soluções excepcionais.
          </p>

          <p>
            Nossas maiores conquistas vão além dos números, refletindo-se
            diretamente na excelência técnica e no desenvolvimento contínuo da
            nossa equipe. Um marco importante em nossa trajetória foi o
            reconhecimento da nossa qualidade de entrega com a obtenção do selo
            Partner Select da AWS.
          </p>

          <p>
            Além disso, investimos na evolução acadêmica dos nossos talentos,
            financiando capacitações como MBAs. Celebramos profundamente cada
            história de sucesso, vendo profissionais que moldaram suas bases
            conosco conquistarem carreiras brilhantes e reconhecimento.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section className="mt-24 text-center max-w-6xl mx-auto">
        <SlideEffect>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Nossa Equipe
          </h2>
        </SlideEffect>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {imagensExtras.map((src, index) => (
            <div key={index} onClick={() => setLightbox(src)}>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="mt-24 max-w-6xl mx-auto text-center space-y-16">
        <SlideEffect>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">Missão</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Transformar potencial humano e incerteza tecnológica em valor
              real, atuando como a ponte que conecta engenharia de excelência a
              desafios complexos de negócio, garantindo o crescimento contínuo
              de clientes e colaboradores.
            </p>
          </div>
        </SlideEffect>

        <SlideEffect>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">Visão</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Ser um polo de engenharia e inovação onde pessoas extraordinárias
              constroem tecnologia extraordinária. Tornar-se referência
              internacional em soluções digitais e Inteligência Artificial,
              unindo excelência técnica, desenvolvimento humano e impacto real
              nos negócios.
            </p>
          </div>
        </SlideEffect>

        {/* Valores */}
        <div className="space-y-10">
          <SlideEffect>
            <h2 className="text-3xl md:text-4xl font-semibold">Valores</h2>
          </SlideEffect>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {valores.map((item, index) => {
              const Icon = item.icon;
              return (
                <SlideEffect key={index} direction="top" delay={index * 0.05}>
                  <div
                    className="h-full flex flex-col items-center justify-center text-center 
                                  rounded-2xl bg-secondary/90 
                                  px-6 py-8 min-h-[160px]
                                  border border-primary/20 
                                  hover:shadow-lg transition"
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center 
                                    bg-white rounded-full mb-4"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    <h3 className="text-sm md:text-base font-semibold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </SlideEffect>
              );
            })}
          </div>
        </div>
      </section>

      {/* Presença Internacional */}
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Presença Internacional
        </h2>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-foreground mb-10 leading-relaxed">
          O talento que cultivamos não tem fronteiras, e a nossa capacidade de
          expansão global já é uma realidade sólida e implementada. Ao longo da
          nossa trajetória, nós cruzamos as fronteiras do Brasil e estruturamos
          formalmente a nossa presença internacional com a constituição de
          empresas nos Estados Unidos e em Portugal.
        </p>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-foreground mb-12 leading-relaxed">
          Essa infraestrutura internacional que já construímos permite não
          apenas atestar a qualidade global da nossa engenharia de software, mas
          também conecta nossos talentos de forma direta a um ecossistema
          mundial de inovação.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {internacional.map((loc, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-3 py-6 px-4 border border-gray-200 rounded-xl bg-white hover:shadow-md transition"
            >
              <div className="flex justify-center">
                <Image
                  src={loc.flagUrl}
                  alt={loc.city}
                  width={48}
                  height={36}
                  className="object-contain rounded-sm border border-gray-200"
                />
              </div>

              <p className="text-black font-medium text-sm md:text-base">
                {loc.city}
              </p>

              <p className="text-xs text-foreground">{loc.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <Image src={lightbox} alt="" width={1200} height={900} />
        </div>
      )}

      <Footer />
    </div>
  );
}
