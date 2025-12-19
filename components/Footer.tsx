import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-neutral-bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/anoa_symbol_1.jpg" 
                alt="Anoa Investama" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="font-serif font-bold text-xl">ANOAK</div>
                <div className="font-sans text-xs tracking-widest">INVESTAMA</div>
              </div>
            </div>
            <p className="font-sans text-sm leading-relaxed text-brand-100">
              Professional wealth management services by Cambridge and LSE alumni. 
              Conservative value investing for Indonesian families.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/plans" className="font-sans text-sm text-brand-100 hover:text-accent-gold transition-colors">Investment Plans</Link></li>
              <li><Link href="/process" className="font-sans text-sm text-brand-100 hover:text-accent-gold transition-colors">Our Process</Link></li>
              <li><Link href="/about" className="font-sans text-sm text-brand-100 hover:text-accent-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="font-sans text-sm text-brand-100 hover:text-accent-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li className="font-sans text-sm text-brand-100">6% Annual Plan</li>
              <li className="font-sans text-sm text-brand-100">10% Annual Plan</li>
              <li className="font-sans text-sm text-brand-100">Portfolio Management</li>
              <li className="font-sans text-sm text-brand-100">Wealth Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">CONTACT</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-accent-gold mt-1 flex-shrink-0" />
                <span className="font-sans text-sm text-brand-100">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent-gold flex-shrink-0" />
                <span className="font-sans text-sm text-brand-100">+62 xxx xxxx xxxx</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent-gold flex-shrink-0" />
                <span className="font-sans text-sm text-brand-100">info@anoainvestama.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-sans text-sm text-brand-100">
              © 2025 Anoa Investama. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="font-sans text-xs text-brand-100">Privacy Policy</span>
              <span className="font-sans text-xs text-brand-100">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}