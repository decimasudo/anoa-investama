'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'PLANS', path: '/plans' },
    { name: 'PROCESS', path: '/process' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-neutral-bg-base/95 border-b border-neutral-border backdrop-blur-md shadow-sm' 
        : 'bg-neutral-bg-base border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img 
                src="/logo.png" 
                alt="Anoa Investama" 
                className="h-14 w-14 object-contain"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-neutral-text-primary leading-none tracking-wide group-hover:text-accent-bronze transition-colors">
                ANOA
              </span>
              <span className="font-sans text-[10px] text-neutral-text-muted tracking-[0.25em] leading-tight">
                INVESTAMA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative group py-2"
              >
                <span className={`font-sans text-xs tracking-[0.2em] font-bold transition-colors duration-300 ${
                  isActive(item.path) ? 'text-accent-bronze' : 'text-neutral-text-primary group-hover:text-accent-bronze'
                }`}>
                  {item.name}
                </span>
                
                {/* Animated Gold Underline for Active State */}
                {isActive(item.path) && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-gold"
                  />
                )}
                {/* Hover Underline for non-active items */}
                {!isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-gold/50 transition-all duration-300 group-hover:w-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <button className="font-sans text-xs font-bold tracking-wider text-accent-bronze border border-accent-bronze px-6 py-3 rounded-sm hover:bg-accent-bronze hover:text-neutral-bg-base transition-all duration-300">
                CLIENT LOGIN
              </button>
            </Link>
            <Link href="/contact">
              <button className="font-sans text-xs font-bold tracking-wider bg-accent-gold text-neutral-bg-base px-8 py-3 rounded-sm hover:bg-accent-gold-hover hover:shadow-lg transition-all duration-300">
                CONSULTATION
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-text-primary hover:text-accent-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-neutral-bg-paper border-t border-neutral-border"
            >
              <div className="px-6 py-8 space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`block font-serif text-2xl ${
                      isActive(item.path)
                        ? 'text-accent-gold italic'
                        : 'text-neutral-text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 space-y-4 border-t border-neutral-border/50">
                  <button className="w-full font-sans text-sm font-bold text-accent-bronze border border-accent-bronze px-4 py-3 rounded-sm">
                    CLIENT LOGIN
                  </button>
                  <button className="w-full font-sans text-sm font-bold bg-accent-gold text-neutral-bg-base px-6 py-3 rounded-sm">
                    CONSULTATION
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}