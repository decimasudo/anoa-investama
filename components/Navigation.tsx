'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visitedPages, setVisitedPages] = useState<Set<string>>(new Set())

  // 1. Handle Background Change on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 2. Track Visited Pages
  useEffect(() => {
    const stored = localStorage.getItem('visitedPages')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed) && parsed.every(item => typeof item === 'string')) {
          setVisitedPages(new Set(parsed))
        }
      } catch (error) {
        // Invalid stored data, ignore
      }
    }
  }, [])

  useEffect(() => {
    if (pathname && pathname !== '/') {
      setVisitedPages(prev => {
        const newVisited = new Set(prev)
        newVisited.add(pathname)
        localStorage.setItem('visitedPages', JSON.stringify([...newVisited]))
        return newVisited
      })
    }
  }, [pathname])

  // Helper to determine active state
  const isActive = (path: string) => pathname === path
  const isVisited = (path: string) => visitedPages.has(path)

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Plans', path: '/plans' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 px-6 md:px-12 transition-all duration-700 ease-out border-b ${
          scrolled 
            ? 'bg-neutral-bg-base/90 backdrop-blur-md border-brand-900/10 py-4 shadow-sm' 
            : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="group relative z-50 flex items-center gap-3">
             {/* Logo Icon - Reveals on Scroll or Hover */}
             <div className={`transition-all duration-500 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-90 hidden md:block'}`}>
                <img src="/logo.png" alt="Anoa" className="w-8 h-8 object-contain mix-blend-multiply opacity-90" />
             </div>
             <h1 className="font-serif text-xl tracking-[0.15em] text-brand-950 uppercase group-hover:opacity-70 transition-opacity">
               Anoa Investama
             </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className={`relative text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors duration-500 ${
                  isActive(link.path) 
                    ? 'text-brand-500' 
                    : isVisited(link.path)
                    ? 'text-brand-900/80'
                    : 'text-brand-900/60 hover:text-brand-950'
                }`}
              >
                {link.name}
                
                {/* Gold Active Indicator Dot */}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -bottom-2 left-1/2 w-1 h-1 bg-brand-500 rounded-full -translate-x-1/2"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Visited Indicator */}
                {isVisited(link.path) && !isActive(link.path) && (
                  <div className="absolute -bottom-1 left-1/2 w-0.5 h-0.5 bg-brand-900/40 rounded-full -translate-x-1/2"></div>
                )}
              </Link>
            ))}
            
            <div className="w-px h-4 bg-brand-900/10 mx-2"></div>
            
            <Link 
              href="/login" 
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-950 hover:text-brand-500 transition-all duration-500 border border-brand-950/20 px-6 py-2 hover:bg-brand-950 hover:text-neutral-bg-base"
            >
              Client Portal
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-brand-950 relative z-50 hover:opacity-70 transition-opacity"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-neutral-bg-base flex flex-col items-center justify-center text-center"
          >
            {/* Background Texture (Optional) */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-[0.03] pointer-events-none"></div>

            <div className="flex flex-col gap-10 relative z-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-3xl transition-colors ${
                    isActive(link.path) 
                      ? 'text-brand-500 italic' 
                      : isVisited(link.path)
                      ? 'text-brand-900/70'
                      : 'text-brand-950'
                  }`}
                >
                  {link.name}
                  {isVisited(link.path) && !isActive(link.path) && (
                    <span className="ml-2 text-sm opacity-50">✓</span>
                  )}
                </Link>
              ))}
              <div className="w-12 h-px bg-brand-900/10 mx-auto my-4"></div>
              <Link 
                  href="/login" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-xs uppercase tracking-widest text-brand-500 font-bold"
                >
                  Client Portal
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}