'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useState } from 'react'
import Image from 'next/image'
import * as LucideIcons from "lucide-react"

const locales = [
  { code: 'pt', label: 'PT-BR', flag: 'https://flagcdn.com/w40/br.png' },
  { code: 'pt-pt', label: 'PT-PT', flag: 'https://flagcdn.com/w40/pt.png' },
  { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'es', label: 'ES', flag: 'https://flagcdn.com/w40/es.png' },
] as const

type LocaleCode = typeof locales[number]['code']

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const currentLocale =
    locales.find(l => l.code === locale) ?? locales[0]

  const switchLocale = (newLocale: LocaleCode) => {
    router.replace(pathname, { locale: newLocale })
    setOpen(false)
  }

  return (
    <div className="relative">
      {/* BOTÃO ATUAL */}
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-primary/40 transition-all text-sm font-medium text-black bg-white"
      >
        <Image
          src={currentLocale.flag}
          alt={currentLocale.label}
          width={18}
          height={14}
          className="rounded-sm"
        />

        <span>{currentLocale.label}</span>

        <LucideIcons.ChevronDown
          className={`w-3 h-3 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          {/* menu */}
          <div className="absolute right-0 top-full mt-2 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-50 min-w-[150px]">
            {locales.map((loc) => (
              <button
                key={loc.code}
                onClick={() => switchLocale(loc.code)}
                className={`
                  flex items-center gap-2 w-full px-4 py-2.5 text-sm text-left
                  hover:bg-secondary transition-colors
                  ${
                    loc.code === locale
                      ? 'bg-secondary/50 font-medium text-primary'
                      : 'text-black'
                  }
                `}
              >
                <Image
                  src={loc.flag}
                  alt={loc.label}
                  width={18}
                  height={14}
                  className="rounded-sm"
                />

                <span>{loc.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}