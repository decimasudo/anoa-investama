'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, LogOut, Bell, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import { Session } from '@supabase/supabase-js'

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Auth State
  const [session, setSession] = useState<Session | null>(null)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  // 1. Check Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 2. Real-time Auth Listener
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUserEmail(session?.user?.email ?? null)
    })

    // Listen for changes (login, logout, register)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUserEmail(session?.user?.email ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
    router.push('/login')
  }

  // --- MENU CONFIGURATION ---
  // Base links available to everyone
  const baseLinks = [
    { name: 'About', path: '/about' },
    { name: 'Plans', path: '/plans' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ]

  // If logged in, add Dashboard to the list
  const navLinks = session 
    ? [...baseLinks, { name: 'Dashboard', path: '/dashboard' }]
    : baseLinks

  // Check strict equality for active state
  const isActive = (path: string) => pathname === path

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 px-6 md:px-12 transition-all duration-700 ease-out border-b ${
          scrolled || pathname.startsWith('/dashboard')
            ? 'bg-neutral-bg-base/95 backdrop-blur-md border-brand-900/10 py-4 shadow-sm' 
            : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* --- LEFT: LOGO --- */}
          <Link href={"/"} className="group relative z-50 flex items-center gap-4">
             <div className={`transition-all duration-700 ${scrolled || pathname.startsWith('/dashboard') ? 'opacity-100 scale-100' : 'opacity-0 scale-90 hidden md:block'}`}>
                <img src="/logo.png" alt="Anoa" className="w-10 h-10 object-contain mix-blend-multiply opacity-90" />
             </div>
             <div className="flex flex-col">
               <span className="font-serif text-xl md:text-2xl tracking-wide text-brand-950 font-bold leading-none group-hover:opacity-70 transition-opacity">
                 ANOA
               </span>
               <span className={`font-sans text-[10px] tracking-[0.3em] text-brand-900/60 uppercase ${scrolled || pathname.startsWith('/dashboard') ? 'block' : 'hidden md:block'}`}>
                 {session ? 'Private Client' : 'Investama'}
               </span>
             </div>
          </Link>

          {/* --- CENTER: DYNAMIC LINKS --- */}
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
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -bottom-3 left-1/2 w-1.5 h-1.5 bg-brand-500 rounded-full -translate-x-1/2"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* --- RIGHT: ACTIONS (Auth State) --- */}
          <div className="hidden md:flex items-center gap-6">
            
            {session ? (
              // LOGGED IN STATE
              <>
                 <button className="text-brand-900/40 hover:text-brand-500 transition-colors">
                   <Bell className="w-5 h-5" />
                 </button>
                 <div className="h-6 w-px bg-brand-900/10"></div>
                 <div className="flex flex-col text-right">
                   <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-950">
                     {userEmail?.split('@')[0]}
                   </span>
                 </div>
                 <button 
                   onClick={handleLogout} 
                   className="flex items-center gap-2 bg-brand-950 text-white px-5 py-2 hover:bg-brand-500 hover:text-brand-950 transition-all duration-300 font-sans text-[10px] font-bold tracking-widest uppercase shadow-lg"
                 >
                   <LogOut className="w-3 h-3" /> Sign Out
                 </button>
              </>
            ) : (
              // LOGGED OUT STATE
              <>
                <div className="w-px h-6 bg-brand-900/10 mx-2"></div>
                <Link 
                  href="/login" 
                  className="text-xs md:text-sm uppercase tracking-[0.15em] font-bold text-brand-950 hover:text-brand-500 transition-all duration-500 border border-brand-950/20 px-8 py-3 hover:bg-brand-950 hover:text-neutral-bg-base"
                >
                  Client Login
                </Link>
              </>
            )}
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

      {/* MOBILE MENU */}
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
              
              {session ? (
                 <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="font-sans text-sm uppercase tracking-widest text-red-500 font-bold">
                   Sign Out
                 </button>
              ) : (
                 <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="font-sans text-sm uppercase tracking-widest text-brand-500 font-bold">
                   Client Portal
                 </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}