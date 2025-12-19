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
    <nav className="sticky top-0 z-50 bg-neutral-bg-base border-b border-neutral-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/images/anoa_symbol_1.jpg" 
              alt="Anoa Investama" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <div className="font-serif font-bold text-xl text-brand-900">ANOAK</div>
              <div className="font-sans text-xs text-brand-700 tracking-widest">INVESTAMA</div>
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
                    ? 'text-brand-700 font-bold'
                    : 'text-neutral-text-primary hover:text-brand-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="font-sans text-sm text-brand-500 border border-brand-500 px-4 py-2 rounded-sm hover:bg-brand-500 hover:text-white transition-colors duration-200">
              CLIENT LOGIN
            </button>
            <button className="font-sans text-sm bg-accent-gold text-brand-900 px-6 py-2 rounded-sm hover:bg-accent-gold-hover transition-colors duration-200">
              CONSULTATION
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-700"
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
                      ? 'text-brand-700 font-bold'
                      : 'text-neutral-text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <button className="w-full font-sans text-sm text-brand-500 border border-brand-500 px-4 py-2 rounded-sm">
                  CLIENT LOGIN
                </button>
                <button className="w-full font-sans text-sm bg-accent-gold text-brand-900 px-6 py-2 rounded-sm">
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