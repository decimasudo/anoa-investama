'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { Calculator, FileText, Shield, Eye, BarChart3, ArrowRight } from 'lucide-react'

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: custom * 0.1 }
  })
}

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Budget Determination',
      subtitle: 'Definition',
      icon: Calculator,
    },
    {
      number: '02',
      title: 'RDN Opening',
      subtitle: 'Partnership',
      icon: FileText,
    },
    {
      number: '03',
      title: 'Legal Framework',
      subtitle: 'Compliance',
      icon: Shield,
    },
    {
      number: '04',
      title: 'Active Management',
      subtitle: 'Execution',
      icon: BarChart3,
    },
    {
      number: '05',
      title: 'Transparency',
      subtitle: 'Monitoring',
      icon: Eye,
    }
  ]

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
              The Journey
            </span>
            <h1 className="font-serif font-bold text-5xl md:text-7xl text-brand-950 mb-8 leading-[1.1]">
              The Home Investment <br/>
              <span className="italic text-brand-500 font-medium">Protocol.</span>
            </h1>
            <p className="font-sans text-lg text-brand-900/70 max-w-2xl mx-auto leading-relaxed border-l-2 border-brand-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              A streamlined onboarding process designed for clarity and security. We handle the complexity so you can focus on the results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS TIMELINE (Minimalist Gold Thread) --- */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative">
            
            {/* The Vertical Gold Thread */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-brand-900/10 md:-translate-x-1/2"></div>

            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={fadeInUp}
                  className={`relative flex items-center mb-24 md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Center Node (Step Number) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-brand-950 border-4 border-neutral-bg-base flex items-center justify-center z-10 shadow-xl group hover:scale-110 transition-transform duration-300">
                    <span className="font-serif text-xl font-bold text-brand-500">{step.number}</span>
                  </div>

                  {/* Content Card (Minimal) */}
                  <div className={`ml-24 md:ml-0 md:w-[45%] ${isEven ? 'text-left' : 'text-left md:text-right'}`}>
                    <div className="group cursor-default">
                      
                      <div className={`mb-4 flex items-center gap-3 ${isEven ? 'flex-row' : 'flex-row md:flex-row-reverse'}`}>
                        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-500 font-bold">{step.subtitle}</span>
                        <div className="h-px w-8 bg-brand-500/30"></div>
                      </div>

                      <h3 className="font-serif text-3xl text-brand-950 mb-2 group-hover:text-brand-500 transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      {/* Icon (Subtle Watermark feel) */}
                      <div className={`mt-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500 text-brand-950 ${isEven ? '' : 'md:flex md:justify-end'}`}>
                        <step.icon className="w-8 h-8" strokeWidth={1} />
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block md:w-[45%]"></div>

                </motion.div>
              )
            })}

          </div>
        </div>
      </section>

      {/* --- PROTOCOLS (Grid) --- */}  
      <section className="py-24 bg-brand-950 text-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">Operational Safeguards</h2>
            <div className="w-24 h-px bg-brand-500 mx-auto opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Legal Safety", desc: "Comprehensive legal protection under Indonesian law, ensuring full compliance with regulatory requirements including Materai stamp duty." },
              { title: "Segregated Accounts", desc: "Client assets are maintained in dedicated segregated accounts under your exclusive control. We provide investment management without assuming custodial responsibilities." },
              { title: "Data Privacy", desc: "Rigorous confidentiality protocols safeguard all personal and financial information in accordance with international data protection standards." }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 border border-white/5 hover:bg-white/5 transition-colors duration-300">
                <Shield className="w-8 h-8 text-brand-500 mx-auto mb-6" strokeWidth={1} />
                <h3 className="font-serif text-xl font-bold mb-4">{item.title}</h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-neutral-bg-base text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-950 mb-8">
            Ready to deploy capital?
          </h2>
          <p className="font-sans text-brand-900/60 mb-10 leading-relaxed">
            Begin the onboarding process today. Our team is ready to guide you.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-950 text-neutral-bg-base px-10 py-4 font-sans text-xs font-bold tracking-[0.2em] hover:bg-brand-500 transition-colors duration-300">
            INITIATE ONBOARDING <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}