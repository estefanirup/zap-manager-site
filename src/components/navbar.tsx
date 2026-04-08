'use client'

import Logo from "./logo"
import Link from "next/link"
import { Button } from "./ui/button"
import * as LucideIcons from "lucide-react";
import { AnimatePresence } from 'motion/react'
import * as motion from "motion/react-m"
import { useState } from "react"

const settings = {
  navLinks: [
    { name: 'início', href: '/' },       
    { name: 'solução', href: '#services' },
    { name: 'clientes', href: '#clients' },
    { name: 'cases', href: '#cases' },
    { name: 'sobre', href: '/sobre' },
    { name: 'contato', href: '#cta' },
  ],
  cta: {
    content: 'agendar diagnóstico',
    href: 'https://wa.me/5511943820623'
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full py-4 flex items-center justify-between px-4 xl:px-0 relative z-50">
      <Link href='/' title="Silicon Village Innovation" id="Logo">
        <Logo />
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-5">
        <ul className="flex gap-5 font-medium text-black select-none text-link">
          {settings.navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:opacity-80 transition-all capitalize"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Link href={settings.cta.href} target="_blank" rel="noopener noreferrer">
          <Button className="capitalize">{settings.cta.content}</Button>
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <motion.div
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.8 }}
        className="md:hidden cursor-pointer text-black"
        onClick={toggleMenu}
      >
        {!isOpen ? <LucideIcons.AlignJustify width={20} height={20} /> : <LucideIcons.X width={20} height={20} />}
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-16 left-0 w-full z-50 bg-white shadow-md overflow-y-auto"
          >
            <div className="flex flex-col p-6 space-y-6">
              <ul className="flex flex-col space-y-2 font-medium text-black text-base select-none">
                {settings.navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={toggleMenu}
                      className="block py-2 capitalize"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Link href={settings.cta.href} target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                <Button className="w-full capitalize">{settings.cta.content}</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}