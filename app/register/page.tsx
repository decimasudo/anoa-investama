'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { UserPlus, ArrowLeft, Loader2, ShieldCheck } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function Register() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) throw error

      setSuccess(true)
      // Optional: Auto redirect after few seconds if no email confirmation needed
      // setTimeout(() => router.push('/login'), 2000)
    } catch (err: any) {
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand-950 flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900 via-brand-950 to-brand-950 opacity-40 pointer-events-none"></div>

      <Link href="/" className="absolute top-8 left-8 text-brand-500 hover:text-white transition-colors flex items-center gap-2 font-sans text-xs tracking-widest uppercase z-20">
        <ArrowLeft className="w-4 h-4" /> Return Home
      </Link>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm relative z-10"
      >
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand-900/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-500/20 backdrop-blur-sm">
             <UserPlus className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-3xl text-neutral-bg-base mb-2">New Portfolio</h1>
          <p className="font-sans text-xs tracking-[0.2em] text-white/40 uppercase">Create Secure Access</p>
        </div>

        {/* Success State */}
        {success ? (
          <div className="bg-green-500/10 border border-green-500/20 p-6 text-center">
            <ShieldCheck className="w-8 h-8 text-green-500 mx-auto mb-4" />
            <h3 className="text-green-400 font-serif text-xl mb-2">Account Created</h3>
            <p className="text-green-300/70 text-xs font-sans mb-6">
              Please check your email to confirm your registration.
            </p>
            <Link href="/login" className="inline-block bg-green-500/20 text-green-400 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-green-500 hover:text-brand-950 transition-colors">
              Proceed to Login
            </Link>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleRegister} className="space-y-6">
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 p-3 text-red-400 text-xs text-center font-sans">
                  {error}
                </div>
              )}

              <div className="group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-brand-900/30 border-b border-brand-500/20 py-4 text-center text-neutral-bg-base font-serif text-xl focus:outline-none focus:border-brand-500 transition-colors placeholder:text-white/10"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="group">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-brand-900/30 border-b border-brand-500/20 py-4 text-center text-neutral-bg-base font-serif text-xl focus:outline-none focus:border-brand-500 transition-colors placeholder:text-white/10"
                  placeholder="Create Password"
                  required
                  minLength={6}
                />
              </div>

              <button 
                disabled={loading}
                className="w-full bg-brand-500 text-brand-950 font-sans font-bold text-xs tracking-[0.2em] uppercase py-5 hover:bg-white transition-all duration-500 mt-8 shadow-lg shadow-brand-900/50 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : 'Register Account'}
              </button>

              <div className="text-center pt-8">
                 <Link href="/login" className="font-sans text-[10px] text-brand-500/50 hover:text-brand-500 tracking-widest uppercase transition-colors">
                   Already have an account? Login
                 </Link>
              </div>
          </form>
        )}

      </motion.div>
    </div>
  )
}