'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Landmark, ArrowRight } from 'lucide-react'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Adrian Wijaya',
      title: 'Managing Partner',
      education: 'PhD Economics, Cambridge University',
      experience: '15+ years in Indonesian markets',
      specialization: 'Value Investing & Risk Management',
      initials: 'AW',
      description: 'Former Goldman Sachs analyst with deep expertise in Southeast Asian markets and value investing strategies.'
    },
    {
      name: 'Sarah Indrawati',
      title: 'Senior Portfolio Manager',
      education: 'MSc Finance, London School of Economics',
      experience: '12+ years in wealth management',
      specialization: 'Portfolio Optimization & ESG',
      initials: 'SI',
      description: 'Expert in sustainable investing with proven track record in Indonesian family office management.'
    },
    {
      name: 'Michael Hartono',
      title: 'Investment Director',
      education: 'MBA Finance, Cambridge Judge Business School',
      experience: '10+ years in asset management',
      specialization: 'Alternative Investments & Hedging',
      initials: 'MH',
      description: 'Specializes in alternative investment strategies and currency hedging for Indonesian investors.'
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 border border-accent-bronze/30 rounded-full text-accent-bronze font-sans text-xs font-bold tracking-widest mb-6">
              OUR STEWARDS
            </span>
            <h1 className="font-serif font-bold text-5xl md:text-7xl text-brand-900 mb-8 leading-[1.1]">
              INTELLECTUAL <br/> CAPITAL
            </h1>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-3xl mx-auto leading-relaxed border-l-2 border-accent-gold pl-6">
              Wealth management is not just about numbers; it is about judgment. Our team brings world-class academic rigor from Cambridge and LSE to the Indonesian market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- THE ANOA STANDARD (Narrative) --- */}
      <section className="py-24 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeInUp}
            >
              <h2 className="font-serif font-bold text-4xl text-brand-900 mb-8">
                THE ACADEMIC EDGE
              </h2>
              <div className="space-y-6 font-sans text-lg text-neutral-text-secondary leading-relaxed">
                <p>
                  In a market often driven by speculation and short-term trends, Anoa Investama stands apart through <span className="font-bold text-brand-900">disciplined academic rigor</span>.
                </p>
                <p>
                  Our partners are not just investors; they are scholars of the market. With advanced degrees from the world's most prestigious institutions, we apply institutional-grade risk management frameworks to family wealth.
                </p>
                <p>
                  We believe that preserving wealth across generations requires more than luck—it requires a fundamental understanding of economic cycles and value creation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeInUp}
              className="grid grid-cols-1 gap-8"
            >
              {[
                { icon: GraduationCap, title: "World-Class Alumni", desc: "Cambridge & LSE Graduates" },
                { icon: Landmark, title: "Institutional Grade", desc: "Goldman Sachs Experience" },
                { icon: Award, title: "Fiduciary Standard", desc: "Client Interests First" }
              ].map((item, i) => (
                <div key={i} className="flex items-start p-6 bg-neutral-bg-base border border-neutral-border/50 rounded-sm hover:border-accent-gold transition-colors duration-300">
                  <div className="w-12 h-12 bg-neutral-bg-paper rounded-full flex items-center justify-center mr-6 border border-neutral-border">
                    <item.icon className="w-6 h-6 text-accent-bronze" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-brand-900 mb-1">{item.title}</h3>
                    <p className="font-sans text-sm text-neutral-text-muted tracking-wide uppercase">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- TEAM GRID (Monogram Cards) --- */}
      <section className="py-32 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
             <div className="w-px h-16 bg-accent-gold mx-auto mb-8"></div>
             <h2 className="font-serif font-bold text-4xl text-brand-900">LEADERSHIP</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                variants={fadeInUp}
                className="group relative bg-neutral-bg-paper border border-neutral-border/40 p-10 hover:shadow-hover transition-all duration-500"
              >
                {/* Decorative Monogram */}
                <div className="absolute top-8 right-8 font-serif font-bold text-6xl text-brand-900/5 group-hover:text-accent-gold/10 transition-colors select-none">
                  {member.initials}
                </div>

                <div className="mb-8">
                  <h3 className="font-serif font-bold text-2xl text-brand-900 mb-2">{member.name}</h3>
                  <p className="font-sans text-xs font-bold text-accent-bronze tracking-widest uppercase mb-6">{member.title}</p>
                  <div className="w-12 h-px bg-neutral-border group-hover:bg-accent-gold transition-colors"></div>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <span className="block font-sans text-[10px] text-neutral-text-muted uppercase tracking-widest mb-1">Education</span>
                    <p className="font-serif text-lg text-brand-900 italic">{member.education}</p>
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] text-neutral-text-muted uppercase tracking-widest mb-1">Expertise</span>
                    <p className="font-sans text-sm text-neutral-text-secondary">{member.specialization}</p>
                  </div>
                </div>

                <p className="font-sans text-sm text-neutral-text-secondary/80 leading-relaxed border-t border-neutral-border/30 pt-6">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-brand-900 text-neutral-bg-base">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-4xl mb-8">
            WORK WITH THE BEST
          </h2>
          <p className="font-sans text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Partner with a team that combines global academic excellence with deep local market expertise.
          </p>
          <div className="flex justify-center">
            <button className="bg-accent-gold text-brand-900 font-sans font-bold text-sm tracking-widest px-10 py-4 rounded-sm hover:bg-white transition-colors duration-300 flex items-center">
              SCHEDULE INTRODUCTION
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}