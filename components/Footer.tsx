import Link from 'next/link'
import { Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#EBE7DC] border-t border-brand-900/10 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <h4 className="font-serif text-2xl text-brand-900 mb-6 tracking-wide">Anoa Investama</h4>
            <p className="font-sans text-xs text-brand-900/60 leading-relaxed max-w-xs">
              A private extension for family offices. Preserving wealth through disciplined value investing in the Indonesian market.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h5 className="font-serif text-lg text-brand-900 mb-6">Explore</h5>
            <ul className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-900/60">
              <Link href="/#philosophy" className="hover:text-brand-900 transition-colors">Philosophy</Link>
              <Link href="/#process" className="hover:text-brand-900 transition-colors">Process</Link>
              <Link href="/#plans" className="hover:text-brand-900 transition-colors">Strategies</Link>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h5 className="font-serif text-lg text-brand-900 mb-6">Legal</h5>
            <ul className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-900/60">
              <Link href="#" className="hover:text-brand-900 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-brand-900 transition-colors">Terms (SPPD)</Link>
              <Link href="#" className="hover:text-brand-900 transition-colors">Disclaimer</Link>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h5 className="font-serif text-lg text-brand-900 mb-6">Connect</h5>
            <div className="flex gap-4 text-brand-900/60">
              <Link href="#" className="hover:text-brand-900 transition-colors"><Linkedin size={20} strokeWidth={1} /></Link>
              <Link href="#" className="hover:text-brand-900 transition-colors"><Instagram size={20} strokeWidth={1} /></Link>
              <Link href="mailto:hello@anoa.com" className="hover:text-brand-900 transition-colors"><Mail size={20} strokeWidth={1} /></Link>
            </div>
            <p className="mt-6 font-sans text-xs text-brand-900/40">
              Jakarta, Indonesia
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-900/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] uppercase tracking-widest text-brand-900/40">
            &copy; {new Date().getFullYear()} Anoa Asset Management.
          </p>
          <div className="flex gap-8">
             {/* Optional extra links */}
          </div>
        </div>
      </div>
    </footer>
  )
}