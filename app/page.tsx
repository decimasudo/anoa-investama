'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, Shield, TrendingUp, Lock } from 'lucide-react'

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
}

// FIX: Added ': Variants' type here to fix the build error
const lineDraw: Variants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: { 
      duration: 1.5, 
      ease: "easeInOut", 
      delay: 0.5 
    }
  }
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-neutral-bg-base">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 border-b border-brand-900/5">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo Mark */}
          <motion.div 
            initial="hidden"
            animate="visible"
            className="mb-10 mx-auto w-32 h-32 md:w-48 md:h-48"
          >
             <motion.img 
               src="/logo.png" 
               alt="Anoa Bull"
               className="w-full h-full object-contain mix-blend-multiply opacity-90 drop-shadow-2xl"
               custom={0}
               variants={fadeInUp}
             />
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-brand-950 mb-6 leading-[1.1]"
          >
            Wealth management for <br/>
            <span className="italic font-light text-brand-500 pb-2">Indonesian families.</span>
          </motion.h1>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={lineDraw}
            className="h-px w-24 bg-brand-900/20 mx-auto mb-8"
          ></motion.div>

          <motion.p 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-sans text-sm md:text-base text-brand-900/70 max-w-xl mx-auto leading-relaxed tracking-wide mb-12"
          >
            An extension of your family office. We focus on making money work harder through disciplined value investing in IDX, private equity, and digital assets.
          </motion.p>

          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeInUp}>
             <Link href="/contact" className="btn-luxury group">
               Start Your Journey
               <ArrowRight className="inline-block ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
             </Link>
          </motion.div>
        </div>
      </section>


      {/* --- PHILOSOPHY SECTION --- */}
      <section id="philosophy" className="py-32 px-6 bg-brand-950 text-neutral-bg-base border-t border-brand-900/5 shadow-inner">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-20">
            <span className="block text-[10px] tracking-[0.3em] uppercase text-brand-500 mb-6">Our Profile</span>
            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight text-neutral-bg-base">
              Value over hype. <br/> Principles over profit.
            </h2>
            <div className="max-w-2xl mx-auto font-sans text-neutral-bg-base/70 leading-loose">
              <p>
                Our portfolio is managed by professionals with years of experience, graduated from reputable 
                universities across the globe. We discuss the industry deeply before deploying capital—never chasing crashes or hype.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            {[
              { 
                icon: TrendingUp, 
                title: "Personalized Risk", 
                desc: "Adjustable and diversified portfolios tailored to your individual risk profile." 
              },
              { 
                icon: Shield, 
                title: "Professional Team", 
                desc: "Sit back and relax. Let professional asset managers make your money work." 
              },
              { 
                icon: Check, 
                title: "Value Investing", 
                desc: "We invest in wonderful companies (Value), not in hype or crash stocks." 
              },
              { 
                icon: Lock, 
                title: "Full Transparency", 
                desc: "Full reporting on every movement and the 'WHY' behind each investment." 
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 border border-brand-500/10 hover:border-brand-500/30 transition-all duration-700 bg-brand-900 hover:-translate-y-1 group">
                <item.icon className="w-6 h-6 mx-auto text-brand-500 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-3 text-neutral-bg-base">{item.title}</h3>
                <p className="font-sans text-xs text-neutral-bg-base/50 leading-relaxed uppercase tracking-wider">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- PLANS SECTION (UPDATED) --- */}
      <section id="plans" className="py-32 px-6 bg-neutral-bg-base">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="block text-[10px] tracking-[0.3em] uppercase text-brand-500 mb-6">The Offering</span>
            <h2 className="font-serif text-4xl text-brand-950">Investment Strategies</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan 1: Anoa Rimba */}
            <div className="relative group border border-brand-900/10 p-12 text-center hover:border-brand-500/30 transition-all duration-500 bg-neutral-surface shadow-sm">
              <h3 className="text-3xl mb-2 font-serif text-brand-900">Anoa Rimba</h3>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] mb-8 text-brand-900/40">Capital Preservation</p>
              
              <ul className="space-y-4 mb-10 font-sans text-sm text-brand-900/70">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                  Primary Allocation: Safe Assets
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                  Initial Investment: IDR 100.000.000
                </li>
              </ul>
              
              <Link href="/plans" className="btn-luxury w-full inline-block">Select Rimba</Link>
            </div>

            {/* Plan 2: Anoa Perkasa */}
            <div className="relative group border border-brand-900/10 bg-brand-950 p-12 text-center text-neutral-bg-base shadow-2xl shadow-brand-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-500 to-brand-400 text-brand-950 text-[10px] uppercase tracking-[0.2em] px-4 py-1 font-bold shadow-lg">
                Recommended
              </div>
              <h3 className="text-3xl mb-2 font-serif text-neutral-bg-base">Anoa Perkasa</h3>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] mb-8 text-brand-500">Preservation + Accumulation</p>
              
              <ul className="space-y-4 mb-10 font-sans text-sm text-neutral-bg-base/70">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                  Higher Risk, Higher Potential
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                  Initial Investment: IDR 500.000.000
                </li>
              </ul>
              
              <Link href="/plans" className="relative inline-block border border-white/20 text-white font-sans text-[11px] tracking-[0.2em] uppercase px-8 py-4 w-full hover:bg-white hover:text-brand-950 transition-colors duration-500">
                Select Perkasa
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* --- PROCESS SECTION --- */}
      <section id="process" className="py-32 px-6 bg-neutral-bg-dark border-t border-brand-900/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="block text-[10px] tracking-[0.3em] uppercase text-brand-500 mb-6">Home Investment (HI)</span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-950">The Protocol.</h2>
          </div>

          <div className="relative border-l border-brand-900/10 ml-6 md:ml-12 space-y-16">
            
            {/* Step 1 */}
            <div className="relative pl-12 md:pl-24 group">
              <span className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-brand-950 ring-4 ring-neutral-bg-dark group-hover:bg-brand-500 transition-colors"></span>
              <span className="font-serif text-4xl text-brand-900/10 absolute -left-8 top-[-5px] -translate-x-full md:left-0 md:-translate-x-16 select-none group-hover:text-brand-500/20 transition-colors">01</span>
              <h3 className="text-2xl font-serif text-brand-900">Budget Determination</h3>
            </div>

            {/* Step 2 */}
            <div className="relative pl-12 md:pl-24 group">
              <span className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-brand-950 ring-4 ring-neutral-bg-dark group-hover:bg-brand-500 transition-colors"></span>
              <span className="font-serif text-4xl text-brand-900/10 absolute -left-8 top-[-5px] -translate-x-full md:left-0 md:-translate-x-16 select-none group-hover:text-brand-500/20 transition-colors">02</span>
              <h3 className="text-2xl font-serif text-brand-900">RDN Opening</h3>
            </div>

            {/* Step 3 */}
            <div className="relative pl-12 md:pl-24 group">
              <span className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-brand-950 ring-4 ring-neutral-bg-dark group-hover:bg-brand-500 transition-colors"></span>
              <span className="font-serif text-4xl text-brand-900/10 absolute -left-8 top-[-5px] -translate-x-full md:left-0 md:-translate-x-16 select-none group-hover:text-brand-500/20 transition-colors">03</span>
              <h3 className="text-2xl font-serif text-brand-900">Legal Signing (SPPD)</h3>
            </div>

            {/* Step 4 */}
            <div className="relative pl-12 md:pl-24 group">
              <span className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-brand-950 ring-4 ring-neutral-bg-dark group-hover:bg-brand-500 transition-colors"></span>
              <span className="font-serif text-4xl text-brand-900/10 absolute -left-8 top-[-5px] -translate-x-full md:left-0 md:-translate-x-16 select-none group-hover:text-brand-500/20 transition-colors">04</span>
              <h3 className="text-2xl font-serif text-brand-900">Periodic Monitoring</h3>
            </div>

          </div>
          
          <div className="mt-20 text-center">
            <Link href="/process" className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-500 hover:text-brand-900 transition-colors border-b border-brand-500 pb-1 hover:border-brand-900">
               View Full Details
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}