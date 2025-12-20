'use client'

import { motion } from 'framer-motion'
import { Calculator, FileText, Shield, Key, Eye, BarChart3, Check } from 'lucide-react'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'BUDGET DETERMINATION',
      subtitle: 'Define Your Investment Goals',
      description: 'We begin by understanding your financial objectives, risk tolerance, and investment timeline. Determine whether you need fixed income or growth-oriented strategies.',
      icon: Calculator,
      details: [
        'Investment goal assessment',
        'Risk profile evaluation',
        'Time horizon determination',
        'Budget allocation planning'
      ]
    },
    {
      number: '02',
      title: 'RDN OPENING',
      subtitle: 'Ajaib Partnership & KYC',
      description: 'Open your Rekening Dana Nasabah (RDN) through our Ajaib partnership. Complete KYC process using referral code "wealthypeople" for streamlined onboarding.',
      icon: FileText,
      details: [
        'RDN account opening with Ajaib',
        'KYC documentation with referral',
        'Bank account verification',
        'Initial deposit setup'
      ]
    },
    {
      number: '03',
      title: 'LEGAL FRAMEWORK',
      subtitle: 'SPPD Agreement & Compliance',
      description: 'Sign the Surat Perjanjian Pengelolaan Dana (SPPD) with proper stamp duty. This legal framework ensures transparency and protects both parties.',
      icon: Shield,
      details: [
        'SPPD agreement signing',
        'Stamp duty payment',
        'Legal compliance verification',
        'Terms and conditions review'
      ]
    },
    {
      number: '04',
      title: 'ACCESS PROVISION',
      subtitle: 'Secure Login Credentials',
      description: 'Provide secure login credentials for portfolio management access. We ensure you have full visibility into your investment account and performance.',
      icon: Key,
      details: [
        'Secure credential setup',
        'Account access verification',
        'Dashboard orientation',
        'Security protocols explanation'
      ]
    },
    {
      number: '05',
      title: 'MONITORING',
      subtitle: 'Regular Transparency & Tracking',
      description: 'Enjoy complete transparency with regular performance monitoring. Track your portfolio growth through detailed monthly reports and quarterly reviews.',
      icon: Eye,
      details: [
        'Monthly performance reports',
        'Portfolio tracking dashboard',
        'Risk monitoring alerts',
        'Quarterly review meetings'
      ]
    },
    {
      number: '06',
      title: 'MANAGEMENT',
      subtitle: 'Ongoing Optimization & Reporting',
      description: 'Benefit from active portfolio management with ongoing optimization strategies. Receive comprehensive reporting and strategic adjustments as needed.',
      icon: BarChart3,
      details: [
        'Active portfolio management',
        'Strategic rebalancing',
        'Tax optimization strategies',
        'Annual performance reviews'
      ]
    }
  ]

  return (
    <div className="overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="py-32 bg-neutral-bg-base border-b border-neutral-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 border border-accent-bronze/30 rounded-full text-accent-bronze font-sans text-xs font-bold tracking-widest mb-6">
              THE JOURNEY
            </span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-brand-900 mb-6">
              HOME INVESTMENT <br/> PROCESS
            </h1>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our transparent 6-step investment journey ensures clarity, compliance, and optimal results. No hidden processes—just professional wealth management done right.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS TIMELINE (The Gold Thread) --- */}
      <section className="py-24 bg-neutral-bg-base relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="relative">
            
            {/* The Gold Thread (Vertical Line) */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-accent-gold/30"></div>

            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className={`relative mb-24 flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                >
                  
                  {/* Step Content Card */}
                  <div className={`lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12 text-left'}`}>
                    <div className="bg-neutral-bg-paper p-10 rounded-sm shadow-card hover:shadow-hover transition-all duration-500 border border-neutral-border/40 relative group">
                      
                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-gold/20 -mt-2 -mr-2 group-hover:border-accent-gold transition-colors duration-500"></div>

                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 bg-neutral-bg-base border border-neutral-border rounded-full flex items-center justify-center text-accent-bronze">
                            <IconComponent size={20} strokeWidth={1.5} />
                         </div>
                         <div>
                            <span className="font-serif font-bold text-3xl text-brand-900 block leading-none">{step.number}</span>
                            <span className="font-sans text-[10px] tracking-[0.2em] text-accent-gold uppercase font-bold">Step</span>
                         </div>
                      </div>

                      <h3 className="font-serif font-bold text-2xl text-brand-900 mb-2">{step.title}</h3>
                      <p className="font-sans text-xs font-bold text-accent-bronze mb-6 tracking-wide uppercase">{step.subtitle}</p>

                      <p className="font-sans text-neutral-text-secondary mb-8 leading-relaxed text-sm">
                        {step.description}
                      </p>

                      <div className="space-y-3 pt-6 border-t border-neutral-border/30">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <Check className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                            <span className="font-sans text-xs font-bold text-neutral-text-primary/70">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node (The Gem) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 bg-accent-gold rounded-full border-4 border-neutral-bg-base shadow-md"></div>
                  </div>

                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- DASHBOARD PREVIEW (The "Report") --- */}
      <section className="py-24 bg-neutral-bg-paper border-t border-neutral-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            >
              <h2 className="font-serif font-bold text-4xl text-brand-900 mb-8 leading-tight">
                COMPLETE <br/> <span className="text-accent-gold">TRANSPARENCY</span>
              </h2>
              <p className="font-sans text-lg text-neutral-text-secondary mb-10 leading-relaxed border-l-2 border-brand-900 pl-6">
                Monitor your investment performance in real-time through our secure client portal. Full visibility into portfolio composition, returns, and risk metrics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Real-time Performance',
                  'Asset Breakdown',
                  'Monthly Reports',
                  'Risk Monitoring',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-neutral-bg-base rounded-sm border border-neutral-border/50">
                    <div className="w-2 h-2 bg-accent-gold rounded-full flex-shrink-0"></div>
                    <span className="font-sans font-bold text-xs tracking-widest text-brand-900 uppercase">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Dashboard Interface - Styled like a High-End Paper Report */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="bg-[#FDFBF7] p-8 rounded-sm shadow-card border border-neutral-border relative overflow-hidden">
                {/* Header of Report */}
                <div className="flex justify-between items-end mb-8 border-b-2 border-brand-900 pb-4">
                  <div>
                    <h4 className="font-serif font-bold text-2xl text-brand-900">PORTFOLIO REPORT</h4>
                    <p className="font-sans text-[10px] tracking-[0.2em] text-neutral-text-muted uppercase">Client ID: 8829-ANOA</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-serif font-bold text-accent-bronze">1.200.000.000 <span className="text-sm text-brand-900">IDR</span></div>
                    <p className="font-sans text-[10px] tracking-[0.2em] text-neutral-text-muted uppercase">Total Asset Value</p>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: 'YTD Return', value: '+8.5%', color: 'text-accent-success' },
                    { label: 'Risk Score', value: 'Low', color: 'text-brand-900' },
                    { label: 'Dividends', value: '2.500.000', color: 'text-accent-gold' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-neutral-bg-base p-4 border border-neutral-border/30 text-center">
                      <div className="text-[10px] font-bold tracking-widest text-neutral-text-muted uppercase mb-2">{stat.label}</div>
                      <div className={`text-xl font-serif font-bold ${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>
                
                {/* "Chart" Visualization */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-sans text-xs font-bold tracking-widest text-brand-900">ASSET ALLOCATION</span>
                    <span className="font-serif italic text-neutral-text-muted text-sm">Conservative Strategy</span>
                  </div>
                  <div className="flex w-full h-4 rounded-full overflow-hidden">
                    <div className="w-[65%] bg-brand-900"></div>
                    <div className="w-[25%] bg-accent-gold"></div>
                    <div className="w-[10%] bg-neutral-border"></div>
                  </div>
                  <div className="flex justify-between mt-3 text-[10px] font-sans text-neutral-text-muted uppercase tracking-widest">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-brand-900 rounded-full"></span> 65% Bonds</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-accent-gold rounded-full"></span> 25% Equity</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-neutral-border rounded-full"></span> 10% Cash</span>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-neutral-border/30">
                  <span className="font-serif italic text-accent-bronze text-sm">Generated by Anoa Investama Private Client Systems</span>
                </div>
              </div>
              
              {/* Background accent */}
              <div className="absolute -z-10 top-6 -right-6 w-full h-full bg-brand-900/5 rounded-sm"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS --- */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 mb-6">
              WHY OUR PROCESS WORKS
            </h2>
            <div className="w-24 h-px bg-accent-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'TRANSPARENT', desc: 'Full documentation and visibility.' },
              { title: 'COMPLIANT', desc: 'Adhering to strict ID regulations.' },
              { title: 'EFFICIENT', desc: 'Streamlined, digital-first process.' },
              { title: 'CLIENT-CENTRIC', desc: 'Designed around your legacy goals.' }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                variants={fadeInUp}
                className="text-center group p-6 hover:bg-neutral-bg-paper transition-colors duration-500 rounded-sm"
              >
                <div className="w-12 h-12 bg-neutral-bg-paper border border-neutral-border rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-accent-gold transition-colors">
                  <span className="font-serif font-bold text-lg text-accent-bronze">{index + 1}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-900 mb-3 tracking-wide">{benefit.title}</h3>
                <p className="font-sans text-xs text-neutral-text-secondary leading-relaxed uppercase tracking-widest">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-brand-900 text-neutral-bg-base">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-4xl mb-8">
            READY TO BEGIN?
          </h2>
          <p className="font-sans text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Our team is ready to guide you through every stage of the Home Investment Process. Secure your financial future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-accent-gold text-brand-900 font-sans font-bold text-sm tracking-widest px-10 py-4 rounded-sm hover:bg-white transition-colors duration-300">
              SCHEDULE CONSULTATION
            </button>
            <button className="border border-neutral-bg-base text-neutral-bg-base font-sans font-bold text-sm tracking-widest px-10 py-4 rounded-sm hover:bg-neutral-bg-base hover:text-brand-900 transition-colors duration-300">
              DOWNLOAD GUIDE
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}