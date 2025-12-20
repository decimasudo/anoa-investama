'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, TrendingUp, Users, Award } from 'lucide-react'

// Luxury Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center bg-neutral-bg-base">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            >
              <span className="inline-block py-1 px-3 border border-accent-bronze/30 rounded-full text-accent-bronze font-sans text-xs font-bold tracking-widest mb-6">
                EST. 2025
              </span>
              <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-neutral-text-primary mb-8 leading-[1.1]">
                VALUE INVESTING <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-bronze">
                  FOR FAMILIES.
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-sans text-xl text-neutral-text-secondary mb-12 leading-relaxed max-w-2xl border-l-2 border-accent-gold pl-6"
            >
              Professional wealth management by Cambridge and LSE alumni. 
              Conservative strategies, transparent processes, and exceptional returns for the long term.
            </motion.p>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link href="/contact">
                <button className="bg-accent-gold text-neutral-bg-base font-sans font-bold text-sm tracking-widest px-10 py-5 rounded-sm hover:bg-accent-gold-hover hover:shadow-hover transition-all duration-300 flex items-center group">
                  START CONSULTATION
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </Link>
              <Link 
                href="/plans"
                className="border border-neutral-text-primary text-neutral-text-primary font-sans font-bold text-sm tracking-widest px-10 py-5 rounded-sm hover:bg-neutral-text-primary hover:text-neutral-bg-base transition-all duration-300 flex items-center justify-center"
              >
                VIEW PLANS
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INTRODUCTION SECTION --- */}
      <section className="py-32 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-serif font-bold text-4xl text-neutral-text-primary mb-10">
                WHO WE ARE
              </h2>
              <div className="space-y-8 text-lg text-neutral-text-secondary leading-relaxed font-sans">
                <p>
                  Independent wealth managers with prestigious academic credentials from <span className="font-bold text-neutral-text-primary">Cambridge University</span> and the <span className="font-bold text-neutral-text-primary">London School of Economics</span>. We specialize in conservative value investing strategies tailored for Indonesian families.
                </p>
                <p>
                  Our approach emphasizes long-term wealth preservation over short-term gains, focusing on fundamental analysis and patient capital deployment.
                </p>
                <div className="pt-4">
                  <p className="text-accent-bronze font-serif text-2xl italic border-l-4 border-accent-gold pl-6 py-2">
                    "Value over hype. Principles over profit."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative bg-neutral-bg-base border border-neutral-border p-16 shadow-card hover:shadow-hover transition-shadow duration-500">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto bg-neutral-bg-paper rounded-full flex items-center justify-center shadow-inner mb-10 p-8">
                    <img 
                      src="/logo.png" 
                      alt="Anoa Investama" 
                      className="w-full h-full object-contain mix-blend-multiply opacity-80"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-neutral-text-primary mb-4 tracking-wide">PROFESSIONAL EXCELLENCE</h3>
                  <div className="w-24 h-px bg-accent-gold mx-auto my-6"></div>
                  <p className="text-accent-bronze font-sans text-xs font-bold tracking-[0.3em] uppercase">Luxury Wealth Management</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- PLANS SECTION --- */}
      <section className="py-32 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif font-bold text-4xl text-neutral-text-primary mb-6">
              INVESTMENT PLANS
            </h2>
            <p className="font-sans text-lg text-neutral-text-secondary max-w-2xl mx-auto">
              Choose between our conservative or growth-oriented strategies, designed with disciplined risk management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* 6% Plan */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-neutral-bg-paper p-12 rounded-sm shadow-card border border-neutral-border/50"
            >
              <div className="text-center mb-10">
                <div className="font-serif font-bold text-7xl text-accent-bronze mb-4">6%</div>
                <div className="font-sans text-xs font-bold tracking-widest text-neutral-text-muted">ANNUAL TARGET</div>
              </div>
              <div className="space-y-6 mb-12">
                <div className="flex items-center justify-between border-b border-neutral-border/50 pb-4">
                  <span className="font-sans text-neutral-text-muted">Asset Allocation</span>
                  <span className="font-sans font-bold text-neutral-text-primary">&gt;80% Safe Assets</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-border/50 pb-4">
                  <span className="font-sans text-neutral-text-muted">Minimum Entry</span>
                  <span className="font-sans font-bold text-neutral-text-primary">100.000.000</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-border/50 pb-4">
                  <span className="font-sans text-neutral-text-muted">Risk Profile</span>
                  <span className="font-sans font-bold text-accent-success">Conservative</span>
                </div>
              </div>
              <Link href="/plans" className="block">
                <button className="w-full border border-accent-bronze text-accent-bronze font-sans font-bold py-4 px-6 hover:bg-accent-bronze hover:text-neutral-bg-base transition-all duration-300 tracking-widest text-sm">
                  VIEW DETAILS
                </button>
              </Link>
            </motion.div>

            {/* 10% Plan */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-neutral-text-primary p-12 rounded-sm shadow-hover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-accent-gold text-neutral-bg-base text-[10px] font-bold tracking-widest px-4 py-2">
                RECOMMENDED
              </div>
              <div className="text-center mb-10">
                <div className="font-serif font-bold text-7xl text-accent-gold mb-4">10%</div>
                <div className="font-sans text-xs font-bold tracking-widest text-neutral-bg-base/50">ANNUAL TARGET</div>
              </div>
              <div className="space-y-6 mb-12">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-sans text-neutral-bg-base/60">Asset Allocation</span>
                  <span className="font-sans font-bold text-neutral-bg-base">&gt;60% Growth</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-sans text-neutral-bg-base/60">Minimum Entry</span>
                  <span className="font-sans font-bold text-neutral-bg-base">500.000.000</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-sans text-neutral-bg-base/60">Risk Profile</span>
                  <span className="font-sans font-bold text-accent-gold">Growth</span>
                </div>
              </div>
              <Link href="/plans" className="block">
                <button className="w-full bg-accent-gold text-neutral-text-primary font-sans font-bold py-4 px-6 hover:bg-white transition-colors duration-300 tracking-widest text-sm">
                  VIEW DETAILS
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROCESS TEASER --- */}
      <section className="py-32 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif font-bold text-4xl text-neutral-text-primary mb-6">
              THE INVESTMENT JOURNEY
            </h2>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-2xl mx-auto">
              Transparent, compliant, and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { number: '01', title: 'BUDGET', desc: 'Define investment goals and timeline.' },
              { number: '02', title: 'RDN OPENING', desc: 'Ajaib partnership with KYC referral.' },
              { number: '03', title: 'LEGAL', desc: 'SPPD agreement on stamp duty.' },
              { number: '04', title: 'ACCESS', desc: 'Secure handover of credentials.' },
              { number: '05', title: 'MONITORING', desc: 'Regular transparency tracking.' },
              { number: '06', title: 'MANAGEMENT', desc: 'Ongoing portfolio optimization.' }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group p-8 border border-transparent hover:border-neutral-border hover:bg-neutral-bg-base transition-all duration-500"
              >
                <div className="font-serif text-5xl text-neutral-text-primary/10 mb-6 group-hover:text-accent-gold transition-colors duration-500">
                  {step.number}
                </div>
                <h3 className="font-serif font-bold text-lg text-neutral-text-primary mb-3">{step.title}</h3>
                <p className="font-sans text-sm text-neutral-text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link 
              href="/process"
              className="inline-flex items-center text-accent-bronze font-sans font-bold text-sm tracking-widest hover:text-accent-gold transition-colors duration-300 border-b border-accent-bronze pb-1 hover:border-accent-gold"
            >
              VIEW FULL PROCESS DETAILS
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- TRUST SIGNALS --- */}
      <section className="py-24 bg-neutral-text-primary text-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { icon: Shield, title: "REGULATED", sub: "Fully Compliant" },
              { icon: Award, title: "TOP TIER", sub: "Cambridge & LSE" },
              { icon: TrendingUp, title: "PROVEN", sub: "Value Investing" },
              { icon: Users, title: "FOCUSED", sub: "Family Office" },
            ].map((item, i) => (
              <div key={i} className="pt-8 md:pt-0 px-4">
                <item.icon className="w-10 h-10 mx-auto text-accent-gold mb-6" strokeWidth={1} />
                <h3 className="font-serif font-bold text-lg mb-2 tracking-wide">{item.title}</h3>
                <p className="font-sans text-xs text-white/50 tracking-widest uppercase">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}