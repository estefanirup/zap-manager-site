'use client'

import { useState } from "react"
import { useTranslations } from 'next-intl'
import Footer from "@/sections/footer"
import Navbar from "@/components/navbar"
import TextRevealEffect from "@/components/text-reveal-effect"
import SlideEffect from "@/components/slide-effect"
import InstagramEmbed from "@/components/instagram-embed"
import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

export default function UltimateDriftClient() {
  const t = useTranslations('ultimate-drift')

  const [lightbox, setLightbox] = useState<string | null>(null)
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((p) => (p === 0 ? gallery.length - 1 : p - 1))
  const next = () => setIndex((p) => (p === gallery.length - 1 ? 0 : p + 1))

  return (
    <div className="px-4 xl:px-0 max-w-5xl mx-auto relative isolate">
      <Navbar />

      <section className="py-12 md:py-20 max-w-3xl mx-auto">

        <Link
          href="/casos-de-sucesso"
          className="inline-flex items-center gap-2 text-sm text-primary mb-10 hover:opacity-70 transition"
        >
          <LucideIcons.ArrowLeft className="w-4 h-4" />
          {t('back')}
        </Link>

        <p className="text-xs text-muted-foreground mb-4">{t('date')}</p>

        <h1 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight whitespace-pre-line">
          <TextRevealEffect>{t('title')}</TextRevealEffect>
        </h1>

        <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed"
           dangerouslySetInnerHTML={{ __html: t('subtitle') }}
        />

        {/* HERO */}
        <div className="mt-14">
          <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-background">
            <Image
              src="/images/ultimate-drift/drift-hero.png"
              alt="Drift"
              width={1400}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* INTRO */}
        <div className="mt-16 space-y-12 max-w-2xl text-[15px] md:text-[17px] leading-[1.75] text-foreground/80">
          <p dangerouslySetInnerHTML={{ __html: t('intro.p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('intro.p2') }} />

          <div className="border-l-2 border-primary pl-4 py-3 bg-primary/5 rounded-r-md">
            <p className="text-foreground/90" dangerouslySetInnerHTML={{ __html: t('intro.highlight') }} />
          </div>

          {/* Precision */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('sections.precision.title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('sections.precision.p1') }} />
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t('sections.precision.p2') }} />
          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-16">
          <Image
            src="/images/ultimate-drift/drift-judges.jpg"
            alt="Judges"
            width={1200}
            height={700}
            className="rounded-xl border border-border"
          />
        </div>

        <div className="mt-12 space-y-12 max-w-2xl text-[15px] md:text-[17px] leading-[1.75] text-foreground/80">
          {/* Platform */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('sections.platform.title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('sections.platform.p1') }} />
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t('sections.platform.p2') }} />
          </div>

          {/* Tech */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('sections.tech.title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('sections.tech.p1') }} />
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t('sections.tech.p2') }} />
          </div>

          {/* Result */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('sections.result.title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('sections.result.p1') }} />
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t('sections.result.p2') }} />
          </div>
        </div>

        {/* TESTIMONIALS */}
        <SlideEffect delay={0.5} className="w-full max-w-3xl mx-auto mt-20">
          <p className="text-xs uppercase tracking-widest text-foreground mb-6 text-center">
            {t('testimonials.title')}
          </p>
          <p className="text-center text-sm text-foreground/70 mb-8 max-w-xl mx-auto">
            {t('testimonials.description')}
          </p>
          <InstagramEmbed url="https://www.instagram.com/p/DVj-35cDUOn/" />
        </SlideEffect>

        {/* GALLERY */}
        <div className="mt-20">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            {t('gallery.title')}
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border bg-background">
              <Image src={gallery[index]} alt="Drift" width={1400} height={800} className="w-full object-cover" />
            </div>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur p-2 rounded-full border">
              <LucideIcons.ChevronLeft />
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur p-2 rounded-full border">
              <LucideIcons.ChevronRight />
            </button>
          </div>
        </div>

        {/* MOCKUPS */}
        <section className="mt-24">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">{t('mockups.title')}</h2>
          <p className="text-sm text-foreground/60 text-center mb-10 max-w-lg mx-auto">{t('mockups.description')}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {mockupImages.map((src, i) => (
              <div key={i} className="cursor-pointer" onClick={() => setLightbox(src)}>
                <Image src={src} alt={`App ${i + 1}`} width={300} height={600} className="w-full h-auto object-contain rounded-2xl border border-border hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX */}
        {lightbox && (
          <>
            <style>{`[class*="from-transparent"] { display: none !important; }`}</style>
            <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
              <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-lg font-medium shadow-lg hover:bg-gray-100 transition z-10">✕</button>
              <div className="relative overflow-auto max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
                <img src={lightbox} alt="Mockup" className="max-h-[85vh] w-auto object-contain rounded-2xl cursor-zoom-in" onClick={(e) => {
                  const img = e.currentTarget
                  if (img.style.maxHeight === 'none') { img.style.maxHeight = '85vh'; img.style.cursor = 'zoom-in' }
                  else { img.style.maxHeight = 'none'; img.style.cursor = 'zoom-out' }
                }} />
              </div>
            </div>
          </>
        )}

        {/* TECHNOLOGIES */}
        <section className="mt-24">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">{t('technologies.title')}</h2>
          <p className="text-sm text-foreground/60 text-center mb-10 max-w-lg mx-auto">{t('technologies.description')}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {technologies.map((tech, i) => (
              <div key={i} className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <img src={tech.icon} alt={tech.name} className="h-5 w-5 object-contain" />
                <span className="text-sm font-medium text-black/70 group-hover:text-black transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA + NAV */}
        <div className="mt-20 space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">{t('cta.title')}</h2>
            <p className="text-sm text-foreground/60 max-w-md mx-auto">{t('cta.description')}</p>
            <Link href="https://wa.me/5511943820623" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="mt-4">
                {t('cta.button')}
                <LucideIcons.ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="pt-8 border-t border-border">
            <Link href="/casos-de-sucesso/app-silicon" className="text-primary hover:opacity-70 transition text-sm">
              {t('next')}
            </Link>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  )
}