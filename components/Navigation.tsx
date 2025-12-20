'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'PLANS', path: '/plans' },
    { name: 'PROCESS', path: '/process' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-neutral-bg-base border-b border-neutral-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Anoa Investama" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="font-serif font-bold text-xl text-neutral-text-primary">ANOA</div>
              <div className="font-sans text-xs text-neutral-text-muted tracking-widest">INVESTAMA</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`font-sans text-sm tracking-wider uppercase transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-accent-bronze font-bold'
                    : 'text-neutral-text-primary hover:text-accent-bronze'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="font-sans text-sm text-accent-bronze border border-accent-bronze px-4 py-2 rounded-sm hover:bg-accent-bronze hover:text-neutral-bg-base transition-colors duration-200">
              CLIENT LOGIN
            </button>
            <button className="font-sans text-sm bg-accent-gold text-neutral-bg-base px-6 py-2 rounded-sm hover:bg-accent-gold-hover transition-colors duration-200 shadow-md">
              CONSULTATION
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent-bronze"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-bg-paper border-t border-neutral-border">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block font-sans text-sm tracking-wider uppercase ${
                    isActive(item.path)
                      ? 'text-accent-bronze font-bold'
                      : 'text-neutral-text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <button className="w-full font-sans text-sm text-accent-bronze border border-accent-bronze px-4 py-2 rounded-sm">
                  CLIENT LOGIN
                </button>
                <button className="w-full font-sans text-sm bg-accent-gold text-neutral-bg-base px-6 py-2 rounded-sm">
                  CONSULTATION
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}