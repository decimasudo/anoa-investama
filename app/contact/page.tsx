'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Contact() {
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
              CONCIERGE
            </span>
            <h1 className="font-serif font-bold text-5xl md:text-7xl text-brand-900 mb-6">
              START THE <br/> CONVERSATION
            </h1>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-2xl mx-auto leading-relaxed">
              We invite you to discuss your wealth preservation goals with our dedicated team. Our partners are available for private consultations by appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="py-24 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left Column: Contact Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="space-y-12"
            >
              <div>
                <h3 className="font-serif font-bold text-3xl text-brand-900 mb-8">HEADQUARTERS</h3>
                <div className="p-10 bg-neutral-bg-base border border-neutral-border/50 rounded-sm shadow-card hover:shadow-hover transition-shadow duration-500 group">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-10 h-10 bg-neutral-bg-paper border border-neutral-border rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-accent-gold transition-colors">
                      <MapPin className="w-5 h-5 text-accent-bronze" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl text-brand-900 mb-2">Jakarta Office</h4>
                      <p className="font-sans text-neutral-text-secondary leading-relaxed">
                        Sudirman Central Business District<br/>
                        District 8, Treasury Tower<br/>
                        Jakarta, Indonesia 12190
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 border-t border-neutral-border/50 pt-8">
                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent-bronze" />
                      </div>
                      <div>
                        <span className="block font-sans text-[10px] text-neutral-text-muted uppercase tracking-widest mb-1">Email Us</span>
                        <a href="mailto:hello@anoainvestama.com" className="font-serif text-lg text-brand-900 hover:text-accent-gold transition-colors">
                          hello@anoainvestama.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent-bronze" />
                      </div>
                      <div>
                        <span className="block font-sans text-[10px] text-neutral-text-muted uppercase tracking-widest mb-1">Call Us</span>
                        <p className="font-serif text-lg text-brand-900">
                          +62 21 5555 0000
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-accent-bronze" />
                      </div>
                      <div>
                        <span className="block font-sans text-[10px] text-neutral-text-muted uppercase tracking-widest mb-1">Hours</span>
                        <p className="font-sans text-sm text-brand-900 font-bold">
                          Mon - Fri: 09:00 - 17:00 WIB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signal Small */}
              <div className="p-8 bg-brand-900 text-neutral-bg-base rounded-sm text-center">
                <h4 className="font-serif font-bold text-xl mb-2 text-accent-gold">EXISTING CLIENT?</h4>
                <p className="font-sans text-sm text-white/70 mb-6">Access your dedicated portal for direct support.</p>
                <button className="border border-accent-gold text-accent-gold font-sans font-bold text-xs tracking-widest px-8 py-3 hover:bg-accent-gold hover:text-brand-900 transition-colors">
                  LOGIN TO PORTAL
                </button>
              </div>
            </motion.div>

            {/* Right Column: Inquiry Form (Stationery Style) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="bg-neutral-bg-base p-10 lg:p-16 border border-neutral-border/50 shadow-lg relative"
            >
              {/* Decorative 'Stamp' */}
              <div className="absolute top-8 right-8 w-20 h-20 border-2 border-accent-bronze/10 rounded-full flex items-center justify-center opacity-50 rotate-12 pointer-events-none">
                <span className="font-sans text-[10px] font-bold text-accent-bronze/30 uppercase tracking-widest text-center">Reply<br/>Requested</span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-brand-900 mb-8">REQUEST INTRODUCTION</h3>
              
              <form className="space-y-10">
                <div className="group">
                  <label className="block font-sans text-xs font-bold text-neutral-text-muted uppercase tracking-widest mb-2 group-focus-within:text-accent-gold transition-colors">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-neutral-border py-2 text-brand-900 font-serif text-lg focus:outline-none focus:border-accent-gold transition-colors placeholder:text-neutral-border/50"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="group">
                  <label className="block font-sans text-xs font-bold text-neutral-text-muted uppercase tracking-widest mb-2 group-focus-within:text-accent-gold transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-neutral-border py-2 text-brand-900 font-serif text-lg focus:outline-none focus:border-accent-gold transition-colors placeholder:text-neutral-border/50"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="group">
                  <label className="block font-sans text-xs font-bold text-neutral-text-muted uppercase tracking-widest mb-2 group-focus-within:text-accent-gold transition-colors">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b border-neutral-border py-2 text-brand-900 font-serif text-lg focus:outline-none focus:border-accent-gold transition-colors placeholder:text-neutral-border/50"
                    placeholder="+62"
                  />
                </div>

                <div className="group">
                  <label className="block font-sans text-xs font-bold text-neutral-text-muted uppercase tracking-widest mb-2 group-focus-within:text-accent-gold transition-colors">Inquiry Type</label>
                  <select className="w-full bg-transparent border-b border-neutral-border py-2 text-brand-900 font-serif text-lg focus:outline-none focus:border-accent-gold transition-colors cursor-pointer">
                    <option>Investment Management</option>
                    <option>Family Office Services</option>
                    <option>Partnership Inquiry</option>
                    <option>Media & Press</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block font-sans text-xs font-bold text-neutral-text-muted uppercase tracking-widest mb-2 group-focus-within:text-accent-gold transition-colors">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-neutral-border py-2 text-brand-900 font-serif text-lg focus:outline-none focus:border-accent-gold transition-colors placeholder:text-neutral-border/50 resize-none"
                    placeholder="How can we assist you?"
                  />
                </div>

                <div className="pt-6">
                  <button className="w-full bg-brand-900 text-neutral-bg-base font-sans font-bold text-sm tracking-widest py-5 hover:bg-accent-gold hover:text-brand-900 transition-all duration-300 flex items-center justify-center group">
                    SUBMIT INQUIRY
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center mt-4 font-sans text-[10px] text-neutral-text-muted">
                    By submitting this form, you agree to our privacy policy regarding confidential information.
                  </p>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}