'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, Shield, TrendingUp, Lock } from 'lucide-react'

// --- Animation Variants (Slow & Elegant) ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const lineDraw = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 }
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo Mark - Blended into 'paper' */}
          <motion.div 
            initial="hidden"
            animate="visible"
            className="mb-10 mx-auto w-32 h-32 md:w-48 md:h-48"
          >
             {/* mix-blend-multiply makes it look like ink printed on the paper */}
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
            {/* RICH CHANGE: Added 'text-gold' for metallic effect */}
            <span className="italic font-light text-gold pb-2">Indonesian families.</span>
          </motion.h1>

          {/* Elegant Divider */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={lineDraw}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="h-px w-24 bg-brand-900/20 mx-auto mb-8"
          ></motion.div>

          {/* Subtext */}
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-sans text-sm md:text-base text-brand-900/70 max-w-xl mx-auto leading-relaxed tracking-wide mb-12"
          >
            An extension of your family office. We focus on making money work harder through disciplined value investing in IDX, private equity, and digital assets.
          </motion.p>

          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeInUp}>
             <Link href="#process" className="btn-luxury group">
               Start Your Journey
               <ArrowRight className="inline-block ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
             </Link>
          </motion.div>
        </div>
      </section>


      {/* --- PHILOSOPHY SECTION (Why Anoa) --- */}
      {/* RICH CHANGE: Darker background (bg-neutral-bg-dark) for contrast */}
      <section id="philosophy" className="py-32 px-6 bg-neutral-bg-dark border-t border-brand-900/5 shadow-inner">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="block text-[10px] tracking-[0.3em] uppercase text-brand-500 mb-6">Our Profile</span>
            <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
              Value over hype. <br/> Principles over profit.
            </h2>
            <div className="max-w-2xl mx-auto font-sans text-brand-900/80 leading-loose">
              <p>
                Our portfolio is managed by professionals with years of experience, graduated from reputable 
                universities like <span className="font-semibold text-brand-950">Cambridge</span> and <span className="font-semibold text-brand-950">LSE</span>. 
                We discuss the industry deeply before deploying capital—never chasing crashes or hype.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
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
              <div key={i} className="text-center p-6 border border-brand-900/5 hover:border-brand-500/30 transition-all duration-700 bg-neutral-surface shadow-sm hover:shadow-xl hover:-translate-y-1">
                <item.icon className="w-6 h-6 mx-auto text-brand-500 mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-3 text-brand-950">{item.title}</h3>
                <p className="font-sans text-xs text-brand-900/60 leading-relaxed uppercase tracking-wider">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- PLANS SECTION --- */}
      <section id="plans" className="py-32 px-6 bg-neutral-bg-base">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="block text-[10px] tracking-[0.3em] uppercase text-brand-500 mb-6">The Offering</span>
            <h2 className="text-4xl text-brand-950">Investment Plans</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan 1: Conservative (Paper Style) */}
            <div className="relative group border border-brand-900/10 p-12 text-center hover:border-brand-500/30 transition-all duration-500 bg-neutral-surface shadow-sm">
              <h3 className="text-2xl mb-2 font-serif text-brand-900">Conservative</h3>
              <div className="text-5xl font-serif text-brand-500 mb-6 mt-4">6%</div>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] mb-8 text-brand-900/40">Annual Target</p>
              
              <ul className="space-y-4 mb-10 font-sans text-sm text-brand-900/70">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                  Allocation &gt;80:20
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                  Minimal 100 Juta IDR
                </li>
              </ul>
              
              <button className="btn-luxury w-full">Select Plan</button>
            </div>

            {/* Plan 2: Growth (Dark/Rich Style) */}
            <div className="relative group border border-brand-900/10 bg-brand-950 p-12 text-center text-neutral-bg-base shadow-2xl shadow-brand-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-500 to-brand-400 text-brand-950 text-[10px] uppercase tracking-[0.2em] px-4 py-1 font-bold shadow-lg">
                Recommended
              </div>
              <h3 className="text-2xl mb-2 font-serif text-neutral-bg-base">Growth</h3>
              {/* Gold Text Gradient for the percentage */}
              <div className="text-5xl font-serif text-gold mb-6 mt-4">10%</div>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] mb-8 text-white/30">Annual Target</p>
              
              <ul className="space-y-4 mb-10 font-sans text-sm text-neutral-bg-base/70">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                  Allocation &gt;60:40
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                  Minimal 500 Juta IDR
                </li>
              </ul>
              
              <button className="relative inline-block border border-white/20 text-white font-sans text-[11px] tracking-[0.2em] uppercase px-8 py-4 w-full hover:bg-white hover:text-brand-950 transition-colors duration-500">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* --- PROCESS SECTION (HI Steps) --- */}
      <section id="process" className="py-32 px-6 bg-neutral-bg-dark border-t border-brand-900/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="block text-[10px] tracking-[0.3em] uppercase text-brand-500 mb-6">Home Investment (HI)</span>
            <h2 className="text-3xl md:text-5xl text-brand-950">The onboarding journey.</h2>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l border-brand-900/10 ml-6 md:ml-12 space-y-20">
            
            {/* Step 1 */}
            <div className="relative pl-12 md:pl-24">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-500 ring-4 ring-neutral-bg-dark"></span>
              <span className="font-serif text-6xl text-brand-900/5 absolute -left-8 top-[-20px] -translate-x-full md:left-0 md:-translate-x-16 select-none">01</span>
              <h3 className="text-2xl mb-4 font-serif text-brand-900">Budget Determination</h3>
              <div className="font-sans text-brand-900/70 text-sm leading-relaxed max-w-lg space-y-2">
                <p>Determine the capital to be entrusted.</p>
                <ul className="list-disc pl-5 space-y-1 opacity-80">
                  <li><strong>Budget:</strong> Fix or Growth (Monthly Installment/Fees).</li>
                  <li><strong>Timeframe:</strong> Define how long funds will be held.</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-12 md:pl-24">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-500 ring-4 ring-neutral-bg-dark"></span>
              <span className="font-serif text-6xl text-brand-900/5 absolute -left-8 top-[-20px] -translate-x-full md:left-0 md:-translate-x-16 select-none">02</span>
              <h3 className="text-2xl mb-4 font-serif text-brand-900">RDN Opening</h3>
              <p className="font-sans text-brand-900/70 text-sm leading-relaxed max-w-lg">
                Open an RDN account with <strong>Ajaib</strong>. <br/>
                Complete KYC using referral code: <span className="font-mono text-brand-950 bg-brand-500/10 px-2 py-0.5 rounded">wealthypeople</span>. <br/>
                <span className="italic opacity-60 text-xs">(Wait time approx 2 days).</span>
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative pl-12 md:pl-24">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-500 ring-4 ring-neutral-bg-dark"></span>
              <span className="font-serif text-6xl text-brand-900/5 absolute -left-8 top-[-20px] -translate-x-full md:left-0 md:-translate-x-16 select-none">03</span>
              <h3 className="text-2xl mb-4 font-serif text-brand-900">Legal Signing (SPPD)</h3>
              <p className="font-sans text-brand-900/70 text-sm leading-relaxed max-w-lg">
                Sign the <em>Surat Perjanjian Pengelolaan Dana</em> (SPPD). <br/>
                This is signed on stamp duty (Materai) to ensure full legal compliance.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative pl-12 md:pl-24">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-500 ring-4 ring-neutral-bg-dark"></span>
              <span className="font-serif text-6xl text-brand-900/5 absolute -left-8 top-[-20px] -translate-x-full md:left-0 md:-translate-x-16 select-none">04</span>
              <h3 className="text-2xl mb-4 font-serif text-brand-900">Access Handover</h3>
              <p className="font-sans text-brand-900/70 text-sm leading-relaxed max-w-lg">
                Securely handover Gmail login/Password or use another login method that is convenient for you.
              </p>
            </div>

             {/* Step 5 */}
             <div className="relative pl-12 md:pl-24">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-500 ring-4 ring-neutral-bg-dark"></span>
              <span className="font-serif text-6xl text-brand-900/5 absolute -left-8 top-[-20px] -translate-x-full md:left-0 md:-translate-x-16 select-none">05</span>
              <h3 className="text-2xl mb-4 font-serif text-brand-900">Periodic Monitoring</h3>
              <p className="font-sans text-brand-900/70 text-sm leading-relaxed max-w-lg">
                Perform periodic checks on your personal stock account. <br/>
                Sit back, relax, and watch the transparency of your investment.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}