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

  // Handle Background Change on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Plans', path: '/plans' }, // Renamed from Plans for clarity
    { name: 'Process', path: '/process' }, // Renamed from Process
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 px-6 md:px-12 transition-all duration-700 ease-out border-b ${
          scrolled 
            ? 'bg-neutral-bg-base/95 backdrop-blur-md border-brand-900/10 py-4 shadow-sm' 
            : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* LOGO SECTION - Made smoother */}
          <Link href="/" className="group relative z-50 flex items-center gap-4">
             {/* Logo Image - Blended nicely */}
             <div className={`transition-all duration-700 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-90 hidden md:block'}`}>
                {/* mix-blend-multiply makes the white background of a logo transparent against the cream bg */}
                <img 
                  src="/logo.png" 
                  alt="Anoa" 
                  className="w-14 h-14 object-contain mix-blend-multiply opacity-90" 
                />
             </div>
             
             <div className="flex flex-col">
               <span className="font-serif text-xl md:text-2xl tracking-wide text-brand-950 font-bold leading-none group-hover:opacity-70 transition-opacity">
                 ANOA
               </span>
               {/* Show full name only if desired, or keep it minimal */}
               <span className={`font-sans text-[10px] tracking-[0.3em] text-brand-900/60 uppercase ${scrolled ? 'hidden' : 'block'}`}>
                 Investama
               </span>
             </div>
          </Link>

          {/* DESKTOP MENU - Font Size Increased */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className={`relative text-xs md:text-sm uppercase tracking-[0.15em] font-bold transition-colors duration-500 ${
                  isActive(link.path) ? 'text-brand-500' : 'text-brand-900/70 hover:text-brand-950'
                }`}
              >
                {link.name}
                
                {/* Gold Active Indicator Dot */}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -bottom-3 left-1/2 w-1.5 h-1.5 bg-brand-500 rounded-full -translate-x-1/2"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            <div className="w-px h-6 bg-brand-900/10 mx-4"></div>
            
            <Link 
              href="/login" 
              className="text-xs md:text-sm uppercase tracking-[0.15em] font-bold text-brand-950 hover:text-brand-500 transition-all duration-500 border border-brand-950/20 px-8 py-3 hover:bg-brand-950 hover:text-neutral-bg-base"
            >
              Client Login
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-brand-950 relative z-50 hover:opacity-70 transition-opacity p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            <div className="flex flex-col gap-10 relative z-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-4xl transition-colors ${
                    isActive(link.path) ? 'text-brand-500 italic' : 'text-brand-950'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-12 h-px bg-brand-900/10 mx-auto my-4"></div>
              <Link 
                  href="/login" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-sm uppercase tracking-widest text-brand-500 font-bold"
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