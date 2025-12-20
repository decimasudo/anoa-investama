'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, TrendingUp, Check, ArrowRight, Lock } from 'lucide-react'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
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
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0 }}
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
            
            {/* PLAN 1: CONSERVATIVE */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="group bg-neutral-surface border border-brand-900/5 p-12 hover:border-brand-500/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-900/10 group-hover:bg-brand-500 transition-colors duration-500"></div>
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-serif text-3xl text-brand-950 mb-2">Conservative</h3>
                  <p className="font-sans text-xs tracking-widest uppercase text-brand-900/40">Capital Preservation</p>
                </div>
                <Shield className="w-8 h-8 text-brand-500" strokeWidth={1} />
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-6xl font-bold text-brand-950">6%</span>
                  <span className="font-sans text-sm text-brand-900/60 font-medium">/ Annual Target</span>
                </div>
              </div>

              <div className="space-y-6 mb-12 border-t border-brand-900/5 pt-8">
                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-brand-950">Allocation &gt;80% Safe Assets</span>
                    <p className="font-sans text-xs text-brand-900/60 mt-1">Government bonds, blue-chip dividends, and cash equivalents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-brand-950">Low Volatility</span>
                    <p className="font-sans text-xs text-brand-900/60 mt-1">Designed for steady income and retirement planning.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lock className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-brand-950">Minimum Entry: 100.000.000 IDR</span>
                    <p className="font-sans text-xs text-brand-900/60 mt-1">Accessible entry for foundational wealth building.</p>
                  </div>
                </div>
              </div>

              <button className="w-full border border-brand-950 text-brand-950 font-sans text-xs font-bold tracking-[0.2em] uppercase py-4 hover:bg-brand-950 hover:text-neutral-bg-base transition-all duration-300">
                Select Strategy
              </button>
            </motion.div>

            {/* PLAN 2: GROWTH */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="group bg-brand-950 text-neutral-bg-base p-12 relative overflow-hidden shadow-2xl"
            >
              {/* Gold Gradient Border Effect */}
              <div className="absolute inset-0 border border-brand-500/20 pointer-events-none"></div>
              <div className="absolute top-0 right-0 bg-brand-500 text-brand-950 text-[10px] font-bold tracking-widest uppercase px-4 py-1">
                Recommended
              </div>

              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-serif text-3xl text-white mb-2">Growth</h3>
                  <p className="font-sans text-xs tracking-widest uppercase text-white/40">Wealth Accumulation</p>
                </div>
                <TrendingUp className="w-8 h-8 text-brand-500" strokeWidth={1} />
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">10%</span>
                  <span className="font-sans text-sm text-white/60 font-medium">/ Annual Target</span>
                </div>
              </div>

              <div className="space-y-6 mb-12 border-t border-white/10 pt-8">
                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-white">Allocation &gt;60% Growth</span>
                    <p className="font-sans text-xs text-white/50 mt-1">Quality equities, private equity, and sector-specific ETFs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-white">Moderate Risk</span>
                    <p className="font-sans text-xs text-white/50 mt-1">Balanced approach for long-term capital appreciation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lock className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-sm font-bold text-white">Minimum Entry: 500.000.000 IDR</span>
                    <p className="font-sans text-xs text-white/50 mt-1">Dedicated portfolio management and bi-weekly reviews.</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-brand-500 text-brand-950 font-sans text-xs font-bold tracking-[0.2em] uppercase py-4 hover:bg-white transition-all duration-300">
                Apply for Access
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section className="py-24 bg-neutral-surface border-t border-brand-900/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-brand-950">Comparative Analysis</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-900/10">
                  <th className="py-6 pl-4 font-serif text-lg text-brand-950 font-normal">Feature</th>
                  <th className="py-6 px-4 font-sans text-xs font-bold tracking-widest text-brand-900/50 uppercase text-center">Conservative</th>
                  <th className="py-6 pr-4 font-sans text-xs font-bold tracking-widest text-brand-500 uppercase text-center">Growth</th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm text-brand-900/70">
                {[
                  ['Annual Target', '6%', '10%'],
                  ['Risk Profile', 'Low', 'Moderate'],
                  ['Time Horizon', '1-3 Years', '5+ Years'],
                  ['Reporting', 'Monthly', 'Bi-Weekly'],
                  ['Advisory Access', 'Standard', 'Priority'],
                  ['Dividends', 'Reinvested/Payout', 'Reinvested']
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
            Not sure which plan fits?
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