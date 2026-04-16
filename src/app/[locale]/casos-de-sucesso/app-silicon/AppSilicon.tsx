'use client'

import { useState } from "react"
import Footer from "@/sections/footer"
import Navbar from "@/components/navbar"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import * as Icons from "@/components/ui/icons"

export default function AppSilicon() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  const t = useTranslations("app-silicon")

  const features = t.raw("features") as {
    title: string
    description: string
  }[]

  const profiles = t.raw("profiles") as {
    name: string
    description: string
  }[]

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

  const mockupImages = [
    "/images/app-silicon/mockup-1.jpg",
    "/images/app-silicon/mockup-2.jpg",
    "/images/app-silicon/mockup-3.jpg",
    "/images/app-silicon/mockup-4.jpg",
  ]

  return (
    <>
      <div className="px-4 xl:px-0 max-w-5xl mx-auto space-y-20 sm:space-y-24 md:space-y-32 scroll-smooth">
        <div className="space-y-6 md:space-y-8">

          {/* NAVBAR */}
          <Navbar />

          <section className="py-10 md:py-16 max-w-3xl mx-auto">

            {/* BOTÃO VOLTAR */}
            <Link
              href="/casos-de-sucesso"
              className="inline-flex items-center gap-2 text-sm text-primary mb-8 hover:opacity-80 transition-all"
            >
              <Icons.ArrowLeft className="w-4 h-4" />
              {t("back")}
            </Link>

            {/* CABEÇALHO (DATA + TÍTULO + SUBTÍTULO) */}
            <p className="text-xs text-foreground mb-4">{t("date")}</p>

            <h1 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight whitespace-pre-line">
              <TextRevealEffect>
                {t("title")}
              </TextRevealEffect>
            </h1>

            <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed">
              {t("subtitle")}
            </p>

            {/* CONTEXTO */}
            <div className="mt-16 space-y-12 max-w-2xl text-[15px] md:text-[17px] leading-[1.75] text-foreground/80">

              <p>{t("context.p1")}</p>

              <div className="border-l-2 border-primary pl-4 py-3 bg-primary/5 rounded-r-md">
                <p className="text-foreground/90">
                  {t("context.highlight")}
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  {t("context.p2_title")}
                </h2>
                <p>{t("context.p2")}</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  {t("context.p3_title")}
                </h2>
                <p>{t("context.p3")}</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  {t("context.p4_title")}
                </h2>
                <p>{t("context.p4")}</p>
              </div>
            </div>

            {/* PERFIS DE USUÁRIO */}
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

            {/* FEATURES */}
            <section className="mt-20">
              <SlideEffect>
                <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">
                  {t("featuresTitle")}
                </h2>
                <p className="text-sm text-foreground/60 text-center mb-10 max-w-lg mx-auto">
                  {t("featuresDescription")}
                </p>
              </SlideEffect>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = [
                    Icons.Clock,
                    Icons.FileText,
                    Icons.Fingerprint,
                    Icons.Receipt,
                    Icons.RotateCcw,
                    Icons.BarChart,
                    Icons.LineChart,
                    Icons.MessageSquare
                  ][index]

                  return (
                    <SlideEffect key={index} direction="top" delay={index * 0.05} isSpring={false}>
                      <div className="rounded-2xl bg-secondary p-6 space-y-3 h-full">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-black font-medium">{feature.title}</p>
                        <p className="text-sm text-foreground/70">{feature.description}</p>
                      </div>
                    </SlideEffect>
                  )
                })}
              </div>
            </section>

            {/* MOCKUPS */}
            <section className="mt-24">
              <SlideEffect>
                <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">
                  {t("mockupsTitle")}
                </h2>
                <p className="text-sm text-foreground/60 text-center mb-10 max-w-lg mx-auto">
                  {t("mockupsDescription")}
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

            {/* TECNOLOGIAS UTILIZADAS */}
            <section className="mt-24">
              <SlideEffect>
                <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">
                  {t("techTitle")}
                </h2>
                <p className="text-sm text-foreground/60 text-center mb-10 max-w-lg mx-auto">
                  {t("techDescription")}
                </p>
              </SlideEffect>

              <SlideEffect>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                    >
                      <img src={tech.icon} alt={tech.name} className="h-5 w-5 object-contain" />
                      <span className="text-sm font-medium text-black/70 group-hover:text-black transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </SlideEffect>
            </section>

            {/* CTA + NAVEGAÇÃO ENTRE CASES */}
            <div className="mt-20 space-y-10">
              <SlideEffect>
                <div className="text-center space-y-4">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {t("ctaTitle")}
                  </h2>

                  <p className="text-sm text-foreground/60 max-w-md mx-auto">
                    {t("ctaDescription")}
                  </p>

                  <Link href="https://wa.me/5511916329680" target="_blank">
                    <Button size="lg" className="mt-4">
                      {t("ctaButton")}
                      <Icons.ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </SlideEffect>

              <div className="pt-8 border-t border-border">
                <Link
                  href="/casos-de-sucesso/ultimate-drift"
                  className="text-primary text-sm"
                >
                  {t("navPrev")}
                </Link>
              </div>
            </div>

          </section>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>

      {/* LIGHTBOX — renderizado FORA de qualquer container com transform/animação,
          no nível mais externo do componente (fragment raiz) para que o
          position: fixed funcione corretamente em relação à viewport */}
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
                alt="Mockup"
                className="max-h-[85vh] w-auto object-contain rounded-2xl cursor-zoom-in"
                onClick={(e) => {
                  const img = e.currentTarget

                  if (img.style.maxHeight === "none") {
                    img.style.maxHeight = "85vh"
                    img.style.cursor = "zoom-in"
                  } else {
                    img.style.maxHeight = "none"
                    img.style.cursor = "zoom-out"
                  }
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}