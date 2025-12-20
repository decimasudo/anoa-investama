'use client'

import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Shield, DollarSign } from 'lucide-react'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Plans() {
  return (
    <div className="overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="py-32 bg-neutral-bg-base border-b border-neutral-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 border border-accent-bronze/30 rounded-full text-accent-bronze font-sans text-xs font-bold tracking-widest mb-6">
              INVESTMENT TIERS
            </span>
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-brand-900 mb-6">
              VALUE OVER HYPE
            </h1>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our conservative approach prioritizes wealth preservation and consistent returns over speculative trading. Choose the plan that aligns with your legacy goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INVESTMENT PLANS --- */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* 6% Conservative Plan */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-neutral-bg-paper p-12 rounded-sm shadow-card border border-neutral-border relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-neutral-text-primary text-neutral-bg-base font-sans font-bold text-xs tracking-widest px-6 py-2 shadow-lg">
                  CONSERVATIVE
                </div>
              </div>
              
              <div className="text-center mb-10 pt-4">
                <div className="font-serif font-bold text-7xl text-accent-bronze mb-2">6%</div>
                <div className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-text-muted">ANNUAL RETURN TARGET</div>
              </div>

              <div className="space-y-8 mb-10">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-accent-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-brand-900 mb-1">Asset Allocation</h4>
                    <p className="font-sans text-sm text-neutral-text-secondary leading-relaxed">
                      Over 80% allocation in safe, income-generating assets including government bonds and blue-chip stocks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-brand-900 mb-1">Lower Volatility</h4>
                    <p className="font-sans text-sm text-neutral-text-secondary leading-relaxed">
                      Designed for capital preservation with steady, predictable returns suitable for retirement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <DollarSign className="w-6 h-6 text-accent-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-brand-900 mb-1">Minimum Investment</h4>
                    <p className="font-sans text-neutral-text-secondary">
                      <span className="text-xl font-bold text-brand-900">100.000.000</span> minimum entry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-border/50 pt-8 bg-neutral-bg-base/50 -mx-12 -mb-12 p-8 text-center">
                <button className="text-accent-bronze font-sans font-bold text-xs tracking-widest border-b border-accent-bronze pb-1 hover:text-brand-900 hover:border-brand-900 transition-all">
                  VIEW FULL TERM SHEET
                </button>
              </div>
            </motion.div>

            {/* 10% Growth Plan */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-brand-900 p-12 rounded-sm shadow-hover relative border border-brand-900 text-neutral-bg-base"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-accent-gold text-brand-900 font-sans font-bold text-xs tracking-widest px-6 py-2 shadow-lg">
                  RECOMMENDED
                </div>
              </div>
              
              <div className="text-center mb-10 pt-4">
                <div className="font-serif font-bold text-7xl text-accent-gold mb-2">10%</div>
                <div className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-bg-base/60">ANNUAL RETURN TARGET</div>
              </div>

              <div className="space-y-8 mb-10">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-white mb-1">Growth Strategy</h4>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">
                      Over 60% allocation in quality growth stocks, sector ETFs, and international exposure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-white mb-1">Higher Potential</h4>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">
                      Designed for wealth accumulation with moderate risk and longer investment horizons.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <DollarSign className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-white mb-1">Minimum Investment</h4>
                    <p className="font-sans text-white/70">
                      <span className="text-xl font-bold text-white">500.000.000</span> minimum entry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 bg-white/5 -mx-12 -mb-12 p-8 text-center">
                <button className="bg-accent-gold text-brand-900 font-sans font-bold text-xs tracking-widest px-8 py-3 rounded-sm hover:bg-white transition-colors">
                  START APPLICATION
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section className="py-24 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-neutral-bg-base rounded-sm shadow-card border border-neutral-border overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-brand-900 text-neutral-bg-base">
              <div className="p-6 font-serif font-bold tracking-wide">FEATURE</div>
              <div className="p-6 text-center font-serif font-bold text-accent-bronze border-l border-white/10">6% PLAN</div>
              <div className="p-6 text-center font-serif font-bold text-accent-gold border-l border-white/10">10% PLAN</div>
            </div>

            {[
              { feature: 'Annual Return Target', plan6: '6%', plan10: '10%' },
              { feature: 'Minimum Investment', plan6: '100.000.000', plan10: '500.000.000' },
              { feature: 'Conservative Assets', plan6: '>80%', plan10: '>40%' },
              { feature: 'Growth Assets', plan6: '<20%', plan10: '>60%' },
              { feature: 'Risk Profile', plan6: 'Low', plan10: 'Moderate' },
              { feature: 'Time Horizon', plan6: '3-5 years', plan10: '5-10 years' },
              { feature: 'Phone Consultation', plan6: 'Monthly', plan10: 'Bi-weekly' }
            ].map((row, index) => (
              <div key={index} className={`grid grid-cols-3 p-5 border-b border-neutral-border/50 ${index % 2 === 0 ? 'bg-neutral-bg-base' : 'bg-neutral-bg-paper'}`}>
                <div className="font-sans font-bold text-brand-900 text-sm">{row.feature}</div>
                <div className="text-center font-sans text-neutral-text-secondary text-sm">{row.plan6}</div>
                <div className="text-center font-sans font-bold text-brand-900 text-sm">{row.plan10}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900">
              FREQUENTLY ASKED
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                q: 'What are the expected returns and how are they calculated?',
                a: 'Our 6% and 10% targets are based on historical performance of conservative and balanced portfolio strategies in the Indonesian market.'
              },
              {
                q: 'What are the risks associated with these investment plans?',
                a: 'All investments carry risk. The 6% plan focuses on capital preservation with lower volatility, while the 10% plan accepts moderate risk for higher return potential.'
              },
              {
                q: 'Can I withdraw my money before the minimum period?',
                a: 'We recommend a minimum commitment period to optimize returns. Early withdrawals may be subject to penalties. Please refer to our service agreement.'
              },
              {
                q: 'How often will I receive performance reports?',
                a: 'All clients receive monthly performance reports and quarterly portfolio reviews. Additional communication is available upon request.'
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-bg-paper p-8 rounded-sm shadow-sm hover:shadow-card transition-shadow border border-neutral-border/30"
              >
                <h3 className="font-serif font-bold text-lg text-brand-900 mb-3">{faq.q}</h3>
                <p className="font-sans text-sm text-neutral-text-secondary leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}