import type { Metadata } from "next"
import { Public_Sans } from "next/font/google"
import "@/app/globals.css"

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Silicon Village | Inovação Tecnológica com IA, Design e Software",
    template: "%s | Silicon Village",
  },
  description: "Somos especialistas em inovação tecnológica. Desenvolvemos produtos digitais, soluções de IA, gestão de atendimento inteligente e infraestrutura em nuvem.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}