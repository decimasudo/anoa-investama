'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { TrendingUp, PieChart, Wallet, ArrowUpRight, Calendar } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  // 1. Check Auth on Load
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
      } else {
        setLoading(false)
      }
    }
    checkUser()
  }, [router])

  if (loading) return (
    <div className="min-h-screen bg-neutral-bg-base flex items-center justify-center">
      <div className="animate-pulse text-brand-500 font-serif text-xl">Loading Secure Data...</div>
    </div>
  )

  return (
    // 'pt-32' pushes content down so it doesn't collide with the fixed Navigation bar
    <div className="min-h-screen bg-neutral-bg-base pt-32">
      
      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* TITLE ROW */}
        <div className="mb-12">
            <h1 className="font-serif text-4xl text-brand-950 mb-2">Portfolio Overview</h1>
            <p className="font-sans text-[10px] uppercase tracking-widest text-brand-900/40">Real-time Performance Metrics</p>
        </div>

        {/* TOP STATS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           
           {/* Total Balance (Highlighted Card) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }} 
             animate={{ opacity: 1, y: 0 }} 
             className="bg-brand-950 p-8 text-neutral-bg-base shadow-2xl relative overflow-hidden group rounded-sm"
           >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-white/5 rounded-full">
                  <Wallet className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-brand-500 bg-brand-500/10 px-2 py-1 rounded">
                  Live
                </span>
              </div>
              
              <p className="font-sans text-[10px] uppercase tracking-widest text-white/40 mb-2">Net Asset Value</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">IDR 1.250.000.000</h2>
              <div className="flex items-center gap-2 text-green-400 text-xs font-sans font-bold tracking-wide">
                 <ArrowUpRight className="w-3 h-3" /> +12.5% <span className="text-white/30 font-normal">YTD Performance</span>
              </div>
           </motion.div>

           {/* Monthly Gain */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ delay: 0.1 }} 
             className="bg-white p-8 border border-brand-900/5 shadow-lg rounded-sm hover:border-brand-500/30 transition-colors duration-300"
           >
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-brand-950/5 rounded-full">
                  <TrendingUp className="w-6 h-6 text-brand-950" strokeWidth={1.5} />
                </div>
              </div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-brand-900/40 mb-2">Monthly Dividend</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-950 mb-4">IDR 8.450.000</h2>
              <div className="flex items-center gap-2 text-brand-500 text-xs font-sans font-bold">
                 <Calendar className="w-3 h-3" /> Payout: 31 Dec 2025
              </div>
           </motion.div>

           {/* Active Strategy */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ delay: 0.2 }} 
             className="bg-white p-8 border border-brand-900/5 shadow-lg rounded-sm hover:border-brand-500/30 transition-colors duration-300"
           >
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-brand-950/5 rounded-full">
                  <PieChart className="w-6 h-6 text-brand-950" strokeWidth={1.5} />
                </div>
              </div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-brand-900/40 mb-2">Current Strategy</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-950 mb-4">Anoa Perkasa</h2>
              <div className="flex items-center gap-2 text-brand-900/60 text-xs font-sans">
                 <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                 High Risk • Accumulation
              </div>
           </motion.div>
        </div>

        {/* CHARTS ROW (Keep existing chart code) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CHART 1: GROWTH */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 border border-brand-900/5 shadow-xl rounded-sm"
          >
            <div className="flex justify-between items-center mb-10">
               <h3 className="font-serif text-2xl text-brand-950">Performance History</h3>
               <select className="bg-neutral-bg-base border border-brand-900/10 px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-widest text-brand-900 focus:outline-none rounded-sm">
                 <option>Last 12 Months</option>
                 <option>YTD</option>
                 <option>All Time</option>
               </select>
            </div>
            
            <div className="relative h-64 w-full flex items-end justify-between px-2 pb-6 border-b border-brand-900/10">
               <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-brand-900/5 dashed"></div>
                  ))}
               </div>

               <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <motion.path
                   d="M0,80 Q25,70 50,40 T100,10" 
                   fill="none"
                   stroke="#B08D55" 
                   strokeWidth="3"
                   strokeLinecap="round"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 2, ease: "easeInOut" }}
                 />
                 <motion.path
                   d="M0,80 Q25,70 50,40 T100,10 L100,100 L0,100 Z" 
                   fill="url(#goldGradient)"
                   stroke="none"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 0.1 }}
                   transition={{ delay: 1, duration: 1 }}
                 />
                 <defs>
                   <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="#B08D55" />
                     <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                   </linearGradient>
                 </defs>
               </svg>

               {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((m) => (
                 <span key={m} className="text-[10px] font-sans font-bold text-brand-900/30 relative top-8">{m}</span>
               ))}
            </div>
          </motion.div>

          {/* CHART 2: ALLOCATION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 border border-brand-900/5 shadow-xl rounded-sm"
          >
            <div className="flex justify-between items-center mb-10">
               <h3 className="font-serif text-2xl text-brand-950">Asset Allocation</h3>
               <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-green-600 bg-green-50 px-2 py-1 rounded-full">Live Data</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
               
               <div className="relative w-48 h-48 rounded-full flex items-center justify-center"
                    style={{
                      background: `conic-gradient(#B08D55 0% 60%, #D4C5A9 60% 85%, #1F1A17 85% 100%)`
                    }}
               >
                 <div className="absolute w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                    <span className="font-serif text-3xl text-brand-950">12</span>
                    <span className="font-sans text-[8px] uppercase tracking-widest text-brand-900/40">Positions</span>
                 </div>
               </div>

               <div className="flex-1 space-y-4 w-full">
                  <div className="flex items-center justify-between p-3 border-b border-brand-900/5 hover:bg-neutral-bg-base transition-colors">
                     <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-brand-500"></span>
                        <span className="font-sans text-xs uppercase tracking-widest text-brand-950 font-bold">Equities</span>
                     </div>
                     <span className="font-serif text-lg text-brand-950">60%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border-b border-brand-900/5 hover:bg-neutral-bg-base transition-colors">
                     <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-brand-400"></span>
                        <span className="font-sans text-xs uppercase tracking-widest text-brand-950 font-bold">Bonds</span>
                     </div>
                     <span className="font-serif text-lg text-brand-950">25%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border-b border-brand-900/5 hover:bg-neutral-bg-base transition-colors">
                     <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-brand-950"></span>
                        <span className="font-sans text-xs uppercase tracking-widest text-brand-950 font-bold">Cash</span>
                     </div>
                     <span className="font-serif text-lg text-brand-950">15%</span>
                  </div>
               </div>

            </div>
          </motion.div>

        </div>
      </main>
    </div>
  )
}