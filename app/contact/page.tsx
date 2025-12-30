'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Contact() {
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
              Private Concierge
            </span>
            <h1 className="font-serif font-bold text-5xl md:text-7xl text-brand-950 mb-8 leading-[1.1]">
              Start the <br/>
              <span className="italic text-brand-500 font-medium">Conversation.</span>
            </h1>
            <p className="font-sans text-lg text-brand-900/70 max-w-2xl mx-auto leading-relaxed border-l-2 border-brand-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              We invite you to discuss your wealth preservation goals with our dedicated team. Our partners are available for private consultations by appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT INTERFACE --- */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">
            
            {/* LEFT: INFO (Dark/Rich) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="bg-brand-950 text-neutral-bg-base p-12 lg:p-20 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-bl-full pointer-events-none"></div>

              <div>
                <h3 className="font-serif text-3xl mb-12">Headquarters</h3>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-brand-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm tracking-widest uppercase text-brand-500 mb-2">Hours</h4>
                      <p className="font-sans text-sm text-white/70 leading-relaxed">
                        Monday - Friday<br/>
                        09:00 - 17:00 WIB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-brand-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm tracking-widest uppercase text-brand-500 mb-2">Instagram</h4>
                      <a href="https://instagram.com/anoa.investama" target="_blank" rel="noopener noreferrer" className="font-serif text-xl mb-1 text-white hover:text-brand-500 transition-colors">
                        @anoa.investama
                      </a>
                      <p className="font-sans text-sm text-white/50">Follow for insights</p>
                    </div>
                  </div>

                  
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/10">
                <p className="font-sans text-xs text-white/40 mb-4 uppercase tracking-widest">Existing Client?</p>
                <Link href="/login" className="inline-flex items-center gap-3 text-brand-500 hover:text-white transition-colors font-sans text-sm font-bold tracking-widest uppercase">
                  Access Portal <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT: FORM (Light/Paper) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="bg-neutral-surface p-12 lg:p-20 border-t lg:border-t-0 lg:border-l border-brand-900/5"
            >
              <h3 className="font-serif text-3xl text-brand-950 mb-2">Request Introduction</h3>
              <p className="font-sans text-sm text-brand-900/50 mb-10">Please fill out the details below. Our team will contact you shortly.</p>
              
              <form className="space-y-8">
                <div className="group">
                  <label className="block font-sans text-[10px] font-bold text-brand-900/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-500 transition-colors">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-brand-900/10 py-3 text-brand-950 font-serif text-lg focus:outline-none focus:border-brand-500 transition-colors placeholder:text-brand-900/20"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block font-sans text-[10px] font-bold text-brand-900/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-500 transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-brand-900/10 py-3 text-brand-950 font-serif text-lg focus:outline-none focus:border-brand-500 transition-colors placeholder:text-brand-900/20"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block font-sans text-[10px] font-bold text-brand-900/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-500 transition-colors">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-b border-brand-900/10 py-3 text-brand-950 font-serif text-lg focus:outline-none focus:border-brand-500 transition-colors placeholder:text-brand-900/20"
                      placeholder="+62..."
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block font-sans text-[10px] font-bold text-brand-900/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-500 transition-colors">Inquiry Type</label>
                  <select className="w-full bg-transparent border-b border-brand-900/10 py-3 text-brand-950 font-serif text-lg focus:outline-none focus:border-brand-500 transition-colors cursor-pointer">
                    <option>Investment Management</option>
                    <option>Family Office Services</option>
                    <option>Partnership Inquiry</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block font-sans text-[10px] font-bold text-brand-900/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-500 transition-colors">Message</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-transparent border-b border-brand-900/10 py-3 text-brand-950 font-serif text-lg focus:outline-none focus:border-brand-500 transition-colors placeholder:text-brand-900/20 resize-none"
                    placeholder="How can we assist you?"
                  />
                </div>

                <button className="w-full bg-brand-950 text-neutral-bg-base font-sans font-bold text-xs tracking-[0.2em] uppercase py-5 hover:bg-brand-500 hover:text-brand-950 transition-all duration-300 shadow-lg mt-4">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}