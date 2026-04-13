'use client'

import Navbar from "@/components/navbar";
import SlideEffect from "@/components/slide-effect";
import TextBlurEffect from "@/components/text-blur-effect";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("product.hero")

  const channels = [
    { name: 'WhatsApp', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
    { name: 'Instagram', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' },
    { name: 'Facebook', icon: 'https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg' },
    { name: 'TikTok', icon: 'https://cdn.worldvectorlogo.com/logos/tiktok-icon-2.svg' },
    { name: 'Telegram', icon: 'https://cdn.worldvectorlogo.com/logos/telegram.svg' },
    { name: 'E-mail', icon: 'https://cdn.worldvectorlogo.com/logos/gmail-icon-1.svg' },
    { name: 'Slack', icon: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
    { name: 'Shopify', icon: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  ]

  const headline = t.raw("headline") as string[]

  return (
    <div className="space-y-6 md:space-y-8 z-50 relative">

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/12 blur-[130px]" />
        <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] rounded-full bg-primary-light/8 blur-[100px]" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.22]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotgrid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1.2" fill="#3146B8" />
            </pattern>
            <radialGradient id="dotfade" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid)" />
          <rect width="100%" height="100%" fill="url(#dotfade)" />
        </svg>
      </div>

      <Navbar />

      <section className="flex flex-col gap-8 lg:gap-11 items-center text-center py-10 md:py-16">

        {/* Headline */}
        <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-3xl mx-auto">
          {headline.map((line, lineIndex) => (
            <div key={lineIndex}>
              <TextBlurEffect
                className="text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60"
                transition={{ delay: lineIndex * 0.4 }}
              >
                {line}
              </TextBlurEffect>
            </div>
          ))}
        </h1>

        {/* Subheadline */}
        <SlideEffect className="text-sm lg:text-base px-6 sm:px-10 md:px-0 md:max-w-2xl mx-auto">
          {t("subheadline")}
        </SlideEffect>

        {/* CTA */}
        <SlideEffect className="flex flex-col gap-6 items-center justify-center w-full md:w-fit">
          <div className="flex flex-col md:flex-row items-center w-full justify-center gap-3 md:gap-4 mt-1">

            <Link href="#">
              <Button size='lg' className="w-full hidden lg:flex">
                {t("mainCTA")}
                <LucideIcons.ArrowRight />
              </Button>
              <Button size='default' className="w-full flex lg:hidden">
                {t("mainCTA")}
                <LucideIcons.ArrowRight />
              </Button>
            </Link>

            <Link href="#demo">
              <Button size='lg' variant='secondary' className="w-full hidden lg:flex">
                {t("secondaryCTA")}
              </Button>
              <Button size='default' variant='secondary' className="w-full flex lg:hidden">
                {t("secondaryCTA")}
              </Button>
            </Link>

          </div>
        </SlideEffect>

        {/* Channels */}
        <SlideEffect delay={0.4} className="w-full max-w-3xl mx-auto mt-8">
          <p className="text-xs uppercase tracking-widest text-foreground mb-6">
            {t("channelsLabel")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {channels.map((channel, index) => (
              <div
                key={index}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <img
                  src={channel.icon}
                  alt={channel.name}
                  className="h-5 w-5 object-contain"
                />
                <span className="text-sm font-medium text-black/70 group-hover:text-black transition-colors">
                  {channel.name}
                </span>
              </div>
            ))}
          </div>
        </SlideEffect>

      </section>
    </div>
  )
}