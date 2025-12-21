'use client'

import { motion, Variants } from 'framer-motion'
import { GraduationCap, TrendingUp, Shield, BarChart3, Search, Landmark, CheckCircle2 } from 'lucide-react'

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: custom * 0.1 }
  })
}

export default function About() {
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
              Our Philosophy
            </span>
            <h1 className="font-serif font-bold text-5xl md:text-7xl text-brand-950 mb-8 leading-[1.1]">
              EXPERIENCED <br/>
              <span className="italic text-brand-500 font-medium">APPROACH.</span>
            </h1>
            <p className="font-sans text-lg text-brand-900/70 max-w-3xl mx-auto leading-relaxed border-l-2 border-brand-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              Already experienced over 10 years managing wealth. Anoa Investama operates as a dedicated extension for personal asset management, focusing on making your money work harder through disciplined stewardship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- HOW WE INVEST (Clean Light Version) --- */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-20">
             <h2 className="font-serif text-3xl md:text-5xl text-brand-950">How we invest</h2>
             <div className="w-24 h-px bg-brand-500 mx-auto mt-6 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: The Narrative (Dark Text on Light BG) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeInUp}
            >
              <h3 className="font-serif text-3xl md:text-4xl text-brand-950 mb-8 leading-tight">
                Protecting investors’ capital is our priority
              </h3>
              <div className="font-sans text-brand-900/70 leading-relaxed space-y-6 text-lg font-light">
                <p>
                  All our strategies emphasise absolute over relative returns. We believe that a portfolio that suffers fewer and less destructive drawdowns will be in a better position to compound returns over the long term.
                </p>
                <p>
                  We seek to avoid the common errors that frequently lead to permanent impairment of capital, specifically: Weak business models; Excessive debt; Very high valuations; and Poor corporate behaviours.
                </p>
              </div>
            </motion.div>

            {/* Right Column: The Checklist Box (White Card with Soft Shadow) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeInUp}
              className="bg-white p-10 md:p-12 shadow-[0_20px_50px_rgba(27,24,20,0.08)] border border-brand-900/5 relative"
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-500/20"></div>

              <h4 className="font-sans text-xs font-bold tracking-[0.15em] text-brand-500 uppercase mb-8 leading-relaxed">
                WE SEEK TO MINIMISE THE RISK OF PERMANENT CAPITAL LOSS
              </h4>
              
              <ul className="space-y-6">
                {[
                  "Our approach is conservative, avoiding unnecessary complexity.",
                  "We aim to invest in exceptional companies that can grow at sustainably high returns.",
                  "We seek to capture the compounding power of these great businesses through concentrated portfolios.",
                  "We want to understand all the risks to any investment case."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                    <span className="font-sans text-brand-950/80 leading-relaxed text-sm md:text-base font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- STEWARDSHIP (Anonymized Team) --- */}
      <section className="py-24 bg-neutral-surface border-t border-brand-900/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeInUp}
            className="p-12 relative"
          >
             {/* Decorative Quotes */}
             <span className="block text-6xl font-serif text-brand-900/10 leading-none mb-6">“</span>
             
             <div className="mb-8">
               <Landmark className="w-10 h-10 text-brand-500 mx-auto mb-6" />
               <h3 className="font-serif text-3xl text-brand-950 mb-4">Investment Stewardship</h3>
             </div>

             <p className="font-sans text-lg text-brand-900/70 mb-8 leading-relaxed">
               Our investment committee consists of seasoned professionals with over a decade of experience in Indonesian and global markets. 
             </p>
             
             <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full border border-brand-900/5 shadow-sm">
                <GraduationCap className="w-5 h-5 text-brand-950" />
                <span className="font-serif text-brand-950 font-bold tracking-wide">Alumni of Top Global Universities</span>
             </div>

          </motion.div>

        </div>
      </section>

      {/* --- THE CLIENT ADVANTAGE (Grid) --- */}
      <section className="py-32 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
             <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-brand-500 mb-4">Why Partner With Us?</span>
             <h2 className="font-serif font-bold text-4xl text-brand-950">The Client Advantage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: TrendingUp, 
                title: "Personalized Portfolio", 
                desc: "Adjustable and diversified strategies tailored to your individual risk profile." 
              },
              { 
                icon: Shield, 
                title: "Passive Wealth", 
                desc: "Sit back and relax. Let your money work for you under professional stewardship." 
              },
              { 
                icon: Search, 
                title: "Value Over Hype", 
                desc: "We invest in wonderful companies with fundamentals, avoiding crash stocks and market noise." 
              },
              { 
                icon: BarChart3, 
                title: "Total Transparency", 
                desc: "Full reporting on every movement and the 'WHY' behind each investment decision." 
              },
              { 
                icon: TrendingUp, 
                title: "Competitive Edge", 
                desc: "Deep industry research gives us a sustainable advantage over competitors." 
              },
              { 
                icon: Landmark, 
                title: "Professional Team", 
                desc: "Managed by experienced professionals dedicated to fiduciary standards." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeInUp}
                className={`p-8 border border-brand-900/5 bg-white hover:border-brand-500/30 hover:shadow-xl transition-all duration-500 group ${i >= 4 ? 'lg:col-span-2' : ''}`}
              >
                <item.icon className="w-8 h-8 text-brand-500 mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                <h3 className="font-serif font-bold text-xl text-brand-950 mb-3">{item.title}</h3>
                <p className="font-sans text-xs text-brand-900/60 leading-relaxed uppercase tracking-wider">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}