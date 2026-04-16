"use client"

import { useState } from "react"
import { useTranslations } from 'next-intl'
import Footer from "@/sections/footer"
import Navbar from "@/components/navbar"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import Image from "next/image"
import * as LucideIcons from "lucide-react";

const imagensExtras = [
  "/images/team/team-1.jpg",
  "/images/team/team-2.jpg",
  "/images/team/team-3.jpg",
  "/images/team/team-4.jpg",
  "/images/team/team-5.jpg",
  "/images/team/team-6.jpg",
  "/images/team/team-7.jpg",
  "/images/team/team-8.jpg",
]

const valoresIcons = [LucideIcons.Star, LucideIcons.Target, LucideIcons.Zap, LucideIcons.Users, LucideIcons.Users, LucideIcons.Globe, LucideIcons.BookOpen]
const valoresKeys = ["excellence", "leadership", "simplicity", "transparency", "ego", "frugality", "knowledge"] as const

const internacionalConfig = [
  { key: "pr", flagUrl: "https://flagcdn.com/w160/br.png" },
  { key: "sp", flagUrl: "https://flagcdn.com/w160/br.png" },
  { key: "us", flagUrl: "https://flagcdn.com/w160/us.png" },
  { key: "pt", flagUrl: "https://flagcdn.com/w160/pt.png" },
] as const

export default function HistoriaValores() {
  const t = useTranslations('sobre')
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [valorAtivo, setValorAtivo] = useState<typeof valoresKeys[number] | null>(null)

  return (
    <div className="relative px-4 xl:px-0 max-w-6xl mx-auto scroll-smooth bg-white">
      <Navbar />

      {/* Nossa História */}
      <section className="py-16 md:py-20 text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <TextRevealEffect>{t('title')}</TextRevealEffect>
        </h1>

        <div className="text-lg text-foreground/80 leading-relaxed space-y-6 text-left">
          <p>{t('history.p1')}</p>
          <p>{t('history.p2')}</p>
          <p>{t('history.p3')}</p>
          <p>{t('history.p4')}</p>
          <p>{t('history.p5')}</p>
          <p>{t('history.p6')}</p>
        </div>
      </section>

      {/* Galeria */}
      <section className="mt-24 text-center max-w-6xl mx-auto">
        <SlideEffect>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t('team')}
          </h2>
        </SlideEffect>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {imagensExtras.map((src, index) => (
            <div key={index} onClick={() => setLightbox(src)}>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border cursor-pointer">
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
            <h2 className="text-3xl md:text-4xl font-semibold">{t('mission.title')}</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {t('mission.content')}
            </p>
          </div>
        </SlideEffect>

        <SlideEffect>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">{t('vision.title')}</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {t('vision.content')}
            </p>
          </div>
        </SlideEffect>

        {/* Valores */}
        <div className="space-y-10">
          <SlideEffect>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-semibold">{t('values.title')}</h2>
            </div>
          </SlideEffect>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {valoresKeys.map((key, index) => {
              const Icon = valoresIcons[index]
              return (
                <SlideEffect key={key} direction="top" delay={index * 0.05}>
                  <button
                    onClick={() => setValorAtivo(key)}
                    className="group relative h-full w-full min-h-[180px] flex flex-col items-center justify-center text-center
                               rounded-2xl bg-secondary/90
                               px-6 py-8
                               border border-primary/20
                               hover:border-primary hover:shadow-xl hover:-translate-y-1 hover:bg-white
                               transition-all duration-300
                               cursor-pointer overflow-hidden"
                  >
                    {/* Glow no hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Conteúdo */}
                    <div className="relative z-10 space-y-4">
                      <div className="w-12 h-12 mx-auto flex items-center justify-center bg-white rounded-full
                                      shadow-sm group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-sm md:text-base font-semibold leading-snug">
                        {t(`values.items.${key}.title`)}
                      </h3>
                    </div>

                    {/* Indicador "ler mais" */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-primary
                                    opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
                                    transition-all duration-300">
                      <LucideIcons.ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                </SlideEffect>
              )
            })}
          </div>
        </div>
      </section>

      {/* Presença Internacional */}
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          {t('international.title')}
        </h2>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-foreground mb-10 leading-relaxed">
          {t('international.p1')}
        </p>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-foreground mb-12 leading-relaxed">
          {t('international.p2')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {internacionalConfig.map((loc, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-3 py-6 px-4 border border-gray-200 rounded-xl bg-white hover:shadow-md transition"
            >
              <div className="flex justify-center">
                <Image
                  src={loc.flagUrl}
                  alt={t(`international.locations.${loc.key}.city`)}
                  width={48}
                  height={36}
                  className="object-contain rounded-sm border border-gray-200"
                />
              </div>

              <p className="text-black font-medium text-sm md:text-base">
                {t(`international.locations.${loc.key}.city`)}
              </p>

              <p className="text-xs text-foreground">
                {t(`international.locations.${loc.key}.role`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de Valor */}
      {valorAtivo && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setValorAtivo(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setValorAtivo(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white text-foreground
                         flex items-center justify-center transition-all duration-200"
            >
              <LucideIcons.X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                {(() => {
                  const idx = valoresKeys.indexOf(valorAtivo)
                  const Icon = valoresIcons[idx]
                  return <Icon className="w-8 h-8 text-primary" />
                })()}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
                {t(`values.items.${valorAtivo}.title`)}
              </h3>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                {t(`values.items.${valorAtivo}.description`)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center cursor-pointer z-[100]"
          onClick={() => setLightbox(null)}
        >
          <Image src={lightbox} alt="" width={1200} height={900} className="max-h-[90vh] w-auto object-contain" />
        </div>
      )}

      <Footer />
    </div>
  )
}