'use client'

import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

const settings = {
  socialMedia: [
    { title: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/tech-silicon-village/posts/?feedView=all' },
    { title: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/siliconvillagebr/' },
    { title: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/5511943820623' },
    { title: 'E-mail', icon: Mail, href: 'mailto:contato@siliconvillage.dev' },
  ],
  company: 'Silicon Village Innovation',
  cnpj: 'CNPJ: 33.206.490/0001-36',
  address: 'Rua Somis Feline, 600, Módulo 19 e 20, Medianeira, Paraná',
  local: 'Cientech – Parque Científico e Tecnológico da UTFPR',
  copyright: '© 2026 Silicon Village Innovation. Todos os direitos reservados.'
}

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-16 flex flex-col items-center justify-center gap-7 md:gap-10 text-sm border-t border-border">

      {/* Social links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.socialMedia.map((social, index) => (
          <Link title={social.title} key={index} href={social.href} target="_blank" rel="noopener noreferrer">
            <social.icon />
          </Link>
        ))}
      </div>

      {/* Company info */}
      <div className="flex flex-col items-center gap-1 text-center text-xs text-gray-500">
        <p>{settings.company}</p>
        <p>{settings.cnpj}</p>
        <p>{settings.address}</p>
        <p>{settings.local}</p>
      </div>

      {/* Copyright */}
      <p className="text-center">{settings.copyright}</p>
    </footer>
  )
}