import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import LenisProvider from "@/providers/lenis"
import { Public_Sans } from "next/font/google"

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${publicSans.className} antialiased w-full min-h-screen overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>
            {children}
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}