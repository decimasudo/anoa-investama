'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { Shield, TrendingUp, Check, ArrowRight, Lock, Leaf, Zap } from 'lucide-react'

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: custom * 0.1 }
  })
}

export default function Plans() {
  return (
    <div className="overflow-hidden bg-neutral-bg-base min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-32 border-b border-brand-900/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 border border-brand-500/30 rounded-full text-brand-500 font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Investment Strategies
            </span>
            <h1 className="font-serif font-bold text-5xl md:text-7xl text-brand-950 mb-8 leading-[1.1]">
              Defined Outcomes. <br/>
              <span className="italic text-brand-500 font-medium">Disciplined Risk.</span>
            </h1>
            <p className="font-sans text-lg text-brand-900/70 max-w-3xl mx-auto leading-relaxed border-l-2 border-brand-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              We offer two distinct pathways for wealth preservation and growth. Each strategy is managed with institutional-grade rigor, designed to meet specific lifecycle goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PRICING TIERS --- */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* PLAN 1: ANOA RIMBA (Stable/Forest) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeInUp}
              className="group bg-neutral-surface border border-brand-900/5 p-12 hover:border-brand-500/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-900/10 group-hover:bg-brand-500 transition-colors duration-500"></div>
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-serif text-3xl text-brand-950 mb-2">Anoa Rimba</h3>
                  <p className="font-sans text-xs tracking-widest uppercase text-brand-900/40">Capital Preservation</p>
                </div>
                {/* Leaf Icon to symbolize Nature/Rimba */}
                <Leaf className="w-8 h-8 text-brand-500" strokeWidth={1} />
              </div>

              <div className="mb-10 min-h-[80px]">
                <p className="font-serif text-xl text-brand-950 leading-relaxed">
                  Deep roots, steady growth.
                </p>
                <p className="font-sans text-sm text-brand-900/60 mt-2">
                  Designed for stability and protecting the real value of wealth.
                </p>
              </div>

              <div className="space-y-6 mb-12 border-t border-brand-900/5 pt-8 flex-grow">
                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-brand-950">Primary Allocation: Safe Assets</span>
                    <p className="font-sans text-xs text-brand-900/60 mt-1">Focus on government bonds and blue-chip stability.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-brand-950">Low Volatility</span>
                    <p className="font-sans text-xs text-brand-900/60 mt-1">Ideal for retirement planning and risk-averse capital.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lock className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-brand-950">Entry: IDR 100.000.000</span>
                    <p className="font-sans text-xs text-brand-900/60 mt-1">Accessible foundation for long-term wealth.</p>
                  </div>
                </div>
              </div>

              <button className="w-full border border-brand-950 text-brand-950 font-sans text-xs font-bold tracking-[0.2em] uppercase py-4 hover:bg-brand-950 hover:text-neutral-bg-base transition-all duration-300">
                Select Rimba
              </button>
            </motion.div>

            {/* PLAN 2: ANOA PERKASA (Mighty/Strong) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeInUp}
              className="group bg-brand-950 text-neutral-bg-base p-12 relative overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Gold Gradient Border Effect */}
              <div className="absolute inset-0 border border-brand-500/20 pointer-events-none"></div>
              <div className="absolute top-0 right-0 bg-brand-500 text-brand-950 text-[10px] font-bold tracking-widest uppercase px-4 py-1">
                Recommended
              </div>

              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-serif text-3xl text-white mb-2">Anoa Perkasa</h3>
                  <p className="font-sans text-xs tracking-widest uppercase text-white/40">Wealth Accumulation</p>
                </div>
                {/* Zap/Lightning Icon to symbolize Power/Perkasa */}
                <Zap className="w-8 h-8 text-brand-500" strokeWidth={1} />
              </div>

              <div className="mb-10 min-h-[80px]">
                <p className="font-serif text-xl text-white leading-relaxed">
                  Higher risk, higher potential.
                </p>
                <p className="font-sans text-sm text-white/60 mt-2">
                  An aggressive strategy designed for maximum capital appreciation over the long term.
                </p>
              </div>

              <div className="space-y-6 mb-12 border-t border-white/10 pt-8 flex-grow">
                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-white">Primary Allocation: Growth</span>
                    <p className="font-sans text-xs text-white/50 mt-1">Quality equities, private equity, and sector-specific opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-white">Market Exposure</span>
                    <p className="font-sans text-xs text-white/50 mt-1">Includes exposure to more volatile assets for superior returns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lock className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-white">Entry: IDR 500.000.000</span>
                    <p className="font-sans text-xs text-white/50 mt-1">Dedicated portfolio management priority.</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-brand-500 text-brand-950 font-sans text-xs font-bold tracking-[0.2em] uppercase py-4 hover:bg-white transition-all duration-300">
                Apply for Perkasa
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section className="py-24 bg-neutral-surface border-t border-brand-900/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-brand-950">Strategy Comparison</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-900/10">
                  <th className="py-6 pl-4 font-serif text-lg text-brand-950 font-normal">Feature</th>
                  <th className="py-6 px-4 font-sans text-xs font-bold tracking-widest text-brand-900/50 uppercase text-center">Anoa Rimba</th>
                  <th className="py-6 pr-4 font-sans text-xs font-bold tracking-widest text-brand-500 uppercase text-center">Anoa Perkasa</th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm text-brand-900/70">
                {[
                  ['Objective', 'Preservation', 'Accumulation'],
                  ['Risk Profile', 'Low / Stable', 'High / Aggressive'],
                  ['Potential Return', 'Moderate', 'High'],
                  ['Time Horizon', '1-3 Years', '5+ Years'],
                  ['Advisory Access', 'Standard', 'Priority'],
                  ['Entry Requirement', 'IDR 100.000.000', 'IDR 500.000.000']
                ].map(([feature, con, gro], i) => (
                  <tr key={i} className="border-b border-brand-900/5 hover:bg-white transition-colors">
                    <td className="py-6 pl-4 font-medium text-brand-950">{feature}</td>
                    <td className="py-6 px-4 text-center">{con}</td>
                    <td className="py-6 pr-4 text-center font-bold text-brand-900">{gro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-brand-950 text-neutral-bg-base text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">
            Not sure which path to take?
          </h2>
          <p className="font-sans text-white/60 mb-10 leading-relaxed">
            Our team can help assess your risk profile and recommend the optimal allocation for your family's goals.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 text-brand-500 hover:text-white transition-colors font-sans text-xs font-bold tracking-widest uppercase border-b border-brand-500 pb-1 hover:border-white">
            Schedule a Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}