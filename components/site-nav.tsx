"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Chakra_Petch } from "next/font/google"
import { MagneticButton } from "@/components/magnetic-button"

const chakraPetch = Chakra_Petch({ subsets: ["latin", "thai"], weight: ["400", "500", "600", "700"] })

interface SiteNavProps {
  isLoaded?: boolean
  currentSection?: number
  scrollToSection?: (index: number) => void
}

const navItems = [
  { label: "Home", href: "/", index: 0, hash: "" },
  { label: "Work", href: "/work", index: 1, hash: "work" },
  { label: "Thinking", href: "/thinking", index: 2, hash: "thinking" },
  { label: "About", href: "/about", index: 3, hash: "about" },
  { label: "Contact", href: "/#contact", index: 4, hash: "contact" },
]

/** Maps a home-page URL hash (e.g. "#about") to its section index, or null */
export function sectionIndexFromHash(hash: string) {
  const item = navItems.find((navItem) => navItem.hash && `#${navItem.hash}` === hash)
  return item ? item.index : null
}

export function SiteNav({ isLoaded = true, currentSection = 0, scrollToSection }: SiteNavProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isScrolled, setIsScrolled] = useState(false)

  // Inner pages scroll vertically; give the bar a backdrop so it stays legible over content
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getIsActive = (item: (typeof navItems)[number]) => {
    if (isHome) return currentSection === item.index
    if (item.label === "Contact") return false
    return pathname === item.href || pathname.startsWith(`${item.href}/`)
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 transition-[opacity,background-color,backdrop-filter] duration-700 md:px-12 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } ${isScrolled ? "bg-black/15 backdrop-blur-md" : ""}`}
    >
      <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-foreground/25">
          <Image src="/logo-mark.png" alt="" width={23} height={23} className="object-contain" priority />
        </div>
        <span className={`${chakraPetch.className} text-xl font-semibold tracking-tight text-foreground`}>พริม ไตรโสรัส</span>
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => {
          const active = getIsActive(item)
          if (isHome && scrollToSection) {
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.index)}
                className={`group relative font-sans text-sm font-medium transition-colors ${
                  active ? "text-foreground" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            )
          }

          return (
            // Off the home page, jump back to that section of the home page
            <Link
              key={item.label}
              href={item.hash ? `/#${item.hash}` : "/"}
              className={`group relative font-sans text-sm font-medium transition-colors ${
                active ? "text-foreground" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                  active ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          )
        })}
      </div>

      <MagneticButton variant="secondary" onClick={() => (isHome && scrollToSection ? scrollToSection(4) : (window.location.href = "/#contact"))}>
        Get in touch
      </MagneticButton>
    </nav>
  )
}
