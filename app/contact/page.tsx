'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentRange: '',
    preferredPlan: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-brand-900 mb-6">
              START YOUR INVESTMENT JOURNEY
            </h1>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-4xl mx-auto leading-relaxed">
              Ready to explore professional wealth management? Schedule a consultation with our team 
              to discuss your financial goals and investment strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-neutral-bg-paper p-8 rounded-lg shadow-card">
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-900 mb-8">
                SCHEDULE CONSULTATION
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-sm font-semibold text-brand-900 mb-2">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-gold"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-semibold text-brand-900 mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-gold"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-sm font-semibold text-brand-900 mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-gold"
                      placeholder="+62 xxx xxxx xxxx"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-semibold text-brand-900 mb-2">
                      INVESTMENT RANGE
                    </label>
                    <select
                      name="investmentRange"
                      value={formData.investmentRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-gold"
                    >
                      <option value="">Select range</option>
                      <option value="1.000.000-250jt">1.000.000 - 250jt IDR</option>
                      <option value="250jt-500jt">250jt - 500jt IDR</option>
                      <option value="500jt-1m">500jt - 1M IDR</option>
                      <option value="1m-5m">1M - 5M IDR</option>
                      <option value="5m+">5M+ IDR</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-sm font-semibold text-brand-900 mb-2">
                    PREFERRED PLAN
                  </label>
                  <select
                    name="preferredPlan"
                    value={formData.preferredPlan}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-gold"
                  >
                    <option value="">Select a plan</option>
                    <option value="6plan">6% Annual Plan (Conservative)</option>
                    <option value="10plan">10% Annual Plan (Growth)</option>
                    <option value="custom">Custom Portfolio</option>
                    <option value="consultation">Just want to consult</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-sm font-semibold text-brand-900 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-gold"
                    placeholder="Tell us about your investment goals and any specific questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-gold text-brand-900 font-sans font-bold py-4 px-6 rounded-sm hover:bg-accent-gold-hover transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  SCHEDULE CONSULTATION
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-900 mb-8">
                  GET IN TOUCH
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-brand-900" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-brand-900 mb-1">PHONE</h3>
                      <p className="font-sans text-neutral-text-secondary">+62 21 xxxx xxxx</p>
                      <p className="font-sans text-sm text-brand-700">WhatsApp available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-brand-900" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-brand-900 mb-1">EMAIL</h3>
                      <p className="font-sans text-neutral-text-secondary">info@anoainvestama.com</p>
                      <p className="font-sans text-sm text-brand-700">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-brand-900" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-brand-900 mb-1">OFFICE</h3>
                      <p className="font-sans text-neutral-text-secondary">Jakarta Business District</p>
                      <p className="font-sans text-sm text-brand-700">Consultations by appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-brand-900" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-brand-900 mb-1">BUSINESS HOURS</h3>
                      <p className="font-sans text-neutral-text-secondary">Monday - Friday: 9:00 AM - 6:00 PM WIB</p>
                      <p className="font-sans text-sm text-brand-700">Saturday: 9:00 AM - 1:00 PM WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-neutral-bg-paper p-6 rounded-lg">
                <h3 className="font-serif font-bold text-lg text-brand-900 mb-4">QUICK CONTACT</h3>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/6281234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-brand-700 hover:text-accent-gold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-sans">WhatsApp Consultation</span>
                  </a>
                  <a 
                    href="mailto:info@anoainvestama.com"
                    className="flex items-center space-x-3 text-brand-700 hover:text-accent-gold transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-sans">Email Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Investment Calculator Teaser */}
              <div className="bg-brand-900 p-6 rounded-lg text-white">
                <h3 className="font-serif font-bold text-lg mb-3">CALCULATE YOUR POTENTIAL</h3>
                <p className="font-sans text-sm mb-4 text-brand-100">
                  Get an estimate of your potential investment returns with our simple calculator.
                </p>
                <button className="bg-accent-gold text-brand-900 font-sans font-bold py-2 px-4 rounded-sm hover:bg-accent-gold-hover transition-colors">
                  OPEN CALCULATOR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 mb-6">
              VISIT OUR OFFICE
            </h2>
            <p className="font-sans text-xl text-neutral-text-secondary">
              Located in Jakarta's premier business district for your convenience.
            </p>
          </div>
          
          <div className="bg-neutral-bg-base p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif font-bold text-xl text-brand-900 mb-4">OFFICE LOCATION</h3>
                <div className="space-y-4 text-neutral-text-secondary">
                  <p className="font-sans">
                    <strong className="text-brand-700">Address:</strong><br />
                    Anoa Investama<br />
                    Jakarta Business District<br />
                    Sudirman Central Business District<br />
                    Jakarta 12930, Indonesia
                  </p>
                  <p className="font-sans">
                    <strong className="text-brand-700">Nearest MRT:</strong> Sudirman Station (5 minutes walk)
                  </p>
                  <p className="font-sans">
                    <strong className="text-brand-700">Parking:</strong> Available in building basement
                  </p>
                </div>
              </div>
              <div className="bg-neutral-border h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                  <p className="font-sans text-brand-700">Interactive Map</p>
                  <p className="font-sans text-sm text-neutral-text-secondary">Jakarta Business District</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 text-center mb-16">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="space-y-8">
            {[
              {
                q: 'How quickly can I start investing?',
                a: 'Once we complete the Home Investment Process (typically 2-4 weeks), you can begin investing. This includes RDN opening, KYC verification, and legal documentation.'
              },
              {
                q: 'What documents do I need for consultation?',
                a: 'Bring identification (KTP/Passport), proof of address, and bank statements. We\'ll guide you through any additional requirements during the consultation.'
              },
              {
                q: 'Do you offer virtual consultations?',
                a: 'Yes, we offer both in-person and virtual consultations via video call. Many of our clients prefer the convenience of virtual meetings.'
              },
              {
                q: 'What are your consultation fees?',
                a: 'Initial consultations are complimentary. If you decide to proceed with our services, our fees are built into the investment management structure.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-neutral-bg-paper p-6 rounded-lg">
                <h3 className="font-serif font-bold text-lg text-brand-900 mb-3">{faq.q}</h3>
                <p className="font-sans text-neutral-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}