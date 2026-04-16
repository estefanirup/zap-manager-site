'use client'

import Logo from "./logo"
import { Link, usePathname } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { Button } from "./ui/button"
import * as LucideIcons from "lucide-react"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-m"
import { useState } from "react"
import LocaleSwitcher from "./locale-switcher"

interface NavLink {
  key: string
  href: string
}

interface NavbarProps {
  variant?: "home" | "product"
}

export default function Navbar({ variant = "home" }: NavbarProps) {
  const t = useTranslations("nav")
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isHome = pathname === "/"

  const links: NavLink[] =
    variant === "product"
      ? [
          { key: "home", href: "/" },
          { key: "features", href: "#features" },
          { key: "pricing", href: "#pricing" },
          { key: "faq", href: "#faq" },
          { key: "about", href: "/sobre" },
        ]
      : [
          { key: "home", href: "/" },
          { key: "services", href: "#services" },
          { key: "clients", href: "#clients" },
          { key: "cases", href: "#cases" },
          { key: "about", href: "/sobre" },
          { key: "contact", href: "#cta" },
        ]

  const toggleMenu = () => setIsOpen((v) => !v)

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return isHome ? href : `/${href}`
    }
    return href
  }

  const renderLink = (link: NavLink, className: string, onClick?: () => void) => {
    const href = resolveHref(link.href)

    if (href.startsWith("#") || href.startsWith("/#")) {
      return (
        <a href={href} className={className} onClick={onClick}>
          {t(link.key)}
        </a>
      )
    }

    return (
      <Link href={href as any} className={className} onClick={onClick}>
        {t(link.key)}
      </Link>
    )
  }

  return (
    <nav className="w-full py-4 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO (fixa, não encolhe) */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
          
          {/* LINKS (limitados) */}
          <ul className="flex gap-4 font-medium text-black max-w-[600px] w-full justify-center truncate">
            {links.map((link) => (
              <li key={link.key} className="whitespace-nowrap">
                {renderLink(
                  link,
                  "hover:opacity-80 transition capitalize text-sm"
                )}
              </li>
            ))}
          </ul>

          {/* AÇÕES (fixas) */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <LocaleSwitcher />

            <a href="https://wa.me/5511916329680" target="_blank">
              <Button className="capitalize whitespace-nowrap">
                {t("cta")}
              </Button>
            </a>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <LucideIcons.X /> : <LucideIcons.AlignJustify />}
        </motion.div>
      </div>

      {/* MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-16 left-0 w-full bg-white shadow-md z-50"
          >
            <div className="p-6 flex flex-col gap-4">
              {links.map((link) => (
                <div key={link.key}>
                  {renderLink(
                    link,
                    "block py-2 capitalize",
                    toggleMenu
                  )}
                </div>
              ))}

              <LocaleSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}