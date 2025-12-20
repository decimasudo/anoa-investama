'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calculator, FileText, Shield, Key, Eye, BarChart3, CheckCircle, ArrowRight } from 'lucide-react'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Budget & Horizon',
      subtitle: 'Definition',
      description: 'We begin by determining the capital to be entrusted. You select a fixed budget or growth strategy (monthly installments) and define the management timeline.',
      icon: Calculator,
      details: ['Capital assessment', 'Risk tolerance check', 'Timeline (Jangka Waktu) setup']
    },
    {
      number: '02',
      title: 'RDN Opening',
      subtitle: 'Partnership',
      description: 'Open your Rekening Dana Nasabah (RDN) through our Ajaib partnership. Complete the KYC process using our referral code for streamlined onboarding.',
      icon: FileText,
      details: ['Ajaib account setup', 'KYC Verification (2 days)', 'Referral: "wealthypeople"']
    },
    {
      number: '03',
      title: 'Legal Framework',
      subtitle: 'Compliance',
      description: 'Sign the Surat Perjanjian Pengelolaan Dana (SPPD). This agreement is signed on stamp duty (Materai) to ensure full legal protection and transparency.',
      icon: Shield,
      details: ['SPPD Agreement drafting', 'Stamp duty (Materai) signing', 'Compliance review']
    },
    {
      number: '04',
      title: 'Access Handover',
      subtitle: 'Security',
      description: 'Securely provide login credentials for portfolio management. We establish a secure protocol for ongoing access while ensuring you retain full ownership.',
      icon: Key,
      details: ['Secure credential transfer', '2FA Setup', 'Ownership verification']
    },
    {
      number: '05',
      title: 'Active Management',
      subtitle: 'Execution',
      description: 'Our team takes over the daily management. We execute the value investing strategy, rebalancing and optimizing based on the agreed risk profile.',
      icon: BarChart3,
      details: ['Value stock selection', 'Portfolio rebalancing', 'Dividend reinvestment']
    },
    {
      number: '06',
      title: 'Transparency',
      subtitle: 'Monitoring',
      description: 'Sit back and relax. You perform periodic checks on your personal stock account to monitor growth, receiving full reports on every movement.',
      icon: Eye,
      details: ['Real-time monitoring', 'Periodic reporting', 'Full transparency']
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
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 border border-brand-500/30 rounded-full text-brand-500 font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              The Journey
            </span>
            <h1 className="font-serif font-bold text-5xl md:text-7xl text-brand-950 mb-8 leading-[1.1]">
              The Home Investment <br/>
              <span className="italic text-brand-500 font-medium">Protocol.</span>
            </h1>
            <p className="font-sans text-lg text-brand-900/70 max-w-3xl mx-auto leading-relaxed border-l-2 border-brand-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              A seamless, six-step onboarding process designed for clarity, security, and legal compliance. We handle the complexity so you can focus on the results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS TIMELINE (The Gold Thread) --- */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
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
                  variants={fadeInUp}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start mb-20 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Step Number Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-neutral-bg-base border-2 border-brand-500 flex items-center justify-center z-10 shadow-lg">
                    <span className="font-serif text-xl font-bold text-brand-950">{step.number}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                    <div className="bg-neutral-surface p-8 border border-brand-900/5 hover:border-brand-500/30 hover:shadow-xl transition-all duration-500 group relative">
                      
                      {/* Icon */}
                      <div className="mb-6 inline-block p-3 bg-brand-950 text-brand-500 rounded-sm">
                        <step.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>

                      <div className="mb-4">
                        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-500 font-bold block mb-1">{step.subtitle}</span>
                        <h3 className="font-serif text-2xl text-brand-950">{step.title}</h3>
                      </div>

                      <p className="font-sans text-sm text-brand-900/70 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <ul className="space-y-2 border-t border-brand-900/5 pt-4">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-brand-500" />
                            <span className="font-sans text-xs text-brand-900/60 font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2"></div>

                </motion.div>
              )
            })}

          </div>
        </div>
      </section>

      {/* --- PROTOCOLS (Grid) --- */}
      <section className="py-32 bg-brand-950 text-neutral-bg-base relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-accent-gold/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent-gold/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-accent-gold/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-8">
              <span className="inline-block py-2 px-4 border border-accent-gold/30 rounded-full text-accent-gold font-sans text-xs font-bold tracking-widest uppercase mb-4">
                Our Commitment
              </span>
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
              Operational
              <span className="block text-accent-gold italic font-medium">Standards</span>
            </h2>
            <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Institutional-grade protocols ensuring your wealth is managed with the highest standards of security, compliance, and transparency.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-16 h-px bg-accent-gold/50"></div>
              <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
              <div className="w-16 h-px bg-accent-gold/50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Legal Safety", desc: "All agreements are executed on stamp duty (Materai) to ensure binding legal protection for both parties under Indonesian law." },
              { title: "Segregated Accounts", desc: "Your funds remain in your personal RDN (Rekening Dana Nasabah) at all times. We manage; we do not hold custody." },
              { title: "Data Privacy", desc: "Strict confidentiality protocols regarding your personal data, login credentials, and portfolio value." }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <Shield className="w-8 h-8 text-accent-gold mx-auto mb-6" strokeWidth={1} />
                <h3 className="font-serif text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="font-sans text-sm text-white/80 leading-relaxed">{item.desc}</p>
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
            Begin the onboarding process today. Our team is ready to guide you through RDN setup and strategy selection.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-950 text-neutral-bg-base px-10 py-4 font-sans text-xs font-bold tracking-[0.2em] hover:bg-brand-500 transition-colors duration-300">
            INITIATE ONBOARDING <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}