'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lock, ArrowLeft } from 'lucide-react'

export default function Login() {
  return (
    <div className="min-h-screen bg-brand-950 flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* Background Ambience (Subtle) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900 via-brand-950 to-brand-950 opacity-40 pointer-events-none"></div>

      {/* Back Button */}
      <Link href="/" className="absolute top-8 left-8 text-brand-500 hover:text-white transition-colors flex items-center gap-2 font-sans text-xs tracking-widest uppercase z-20">
        <ArrowLeft className="w-4 h-4" /> Return Home
      </Link>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm relative z-10"
      >
        
        {/* Simple Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand-900/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-500/20 backdrop-blur-sm">
             <Lock className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-3xl text-neutral-bg-base mb-2">Client Portal</h1>
          <p className="font-sans text-xs tracking-[0.2em] text-white/40 uppercase">Secure Access</p>
        </div>

        {/* Minimalist Form */}
        <div className="space-y-6">
            
            <div className="group">
              <input 
                type="text" 
                className="w-full bg-brand-900/30 border-b border-brand-500/20 py-4 text-center text-neutral-bg-base font-serif text-xl focus:outline-none focus:border-brand-500 transition-colors placeholder:text-white/10"
                placeholder="Client ID"
              />
            </div>

            <div className="group">
              <input 
                type="password" 
                className="w-full bg-brand-900/30 border-b border-brand-500/20 py-4 text-center text-neutral-bg-base font-serif text-xl focus:outline-none focus:border-brand-500 transition-colors placeholder:text-white/10"
                placeholder="Password"
              />
            </div>

            <button className="w-full bg-brand-500 text-brand-950 font-sans font-bold text-xs tracking-[0.2em] uppercase py-5 hover:bg-white transition-all duration-500 mt-8 shadow-lg shadow-brand-900/50">
              Enter Vault
            </button>

            <div className="text-center pt-8">
               <Link href="/contact" className="font-sans text-[10px] text-brand-500/50 hover:text-brand-500 tracking-widest uppercase transition-colors">
                 Trouble accessing account?
               </Link>
            </div>

        </div>

      </motion.div>
    </div>
  )
}