"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import logoImg from "./Galeri/Logo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
              <Image
                src={logoImg}
                alt="Gespheng Alumunium Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-base sm:text-lg font-bold text-foreground leading-tight">Gespheng Alumunium</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition text-sm lg:text-base">
              Layanan
            </a>
            <a href="#why" className="text-muted-foreground hover:text-primary transition text-sm lg:text-base">
              Kenapa Kami
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition text-sm lg:text-base">
              Galeri
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition text-sm lg:text-base">
              Kontak
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition animate-fade-in"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-1 animate-slide-down">
            <a
              href="#services"
              className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded transition text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Layanan
            </a>
            <a
              href="#why"
              className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded transition text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Kenapa Kami
            </a>
            <a
              href="#gallery"
              className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded transition text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Galeri
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded transition text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
