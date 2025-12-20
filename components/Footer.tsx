import Link from 'next/link'
import { Instagram, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-neutral-bg-base pt-24 pb-12 px-6 md:px-12 border-t border-brand-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
               <img src="/logo.png" alt="Anoa Investama" className="w-8 h-8 object-contain opacity-90" />
               <span className="font-serif text-xl tracking-wide uppercase">Anoa</span>
            </div>
            <p className="font-sans text-xs text-neutral-bg-base/60 leading-relaxed max-w-xs mb-8">
              Private wealth management for Indonesian families. Principles over profit, value over hype.
            </p>
            <div className="flex gap-4 text-neutral-bg-base/60">
              <Link href="#" className="hover:text-brand-500 transition-colors"><Linkedin size={18} strokeWidth={1.5} /></Link>
              <Link href="#" className="hover:text-brand-500 transition-colors"><Instagram size={18} strokeWidth={1.5} /></Link>
              <Link href="mailto:hello@anoainvestama.com" className="hover:text-brand-500 transition-colors"><Mail size={18} strokeWidth={1.5} /></Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h5 className="font-serif text-lg text-brand-500 mb-6 italic">Sitemap</h5>
            <ul className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-bg-base/60">
              <Link href="/about" className="hover:text-neutral-bg-base transition-colors flex items-center gap-2 group">
                About Us <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/plans" className="hover:text-neutral-bg-base transition-colors flex items-center gap-2 group">
                Investments <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/process" className="hover:text-neutral-bg-base transition-colors flex items-center gap-2 group">
                Our Process <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/contact" className="hover:text-neutral-bg-base transition-colors flex items-center gap-2 group">
                Concierge <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h5 className="font-serif text-lg text-brand-500 mb-6 italic">Governance</h5>
            <ul className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-bg-base/60">
              <Link href="#" className="hover:text-neutral-bg-base transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-neutral-bg-base transition-colors">Terms (SPPD)</Link>
              <Link href="#" className="hover:text-neutral-bg-base transition-colors">Risk Disclosure</Link>
            </ul>
          </div>

          {/* Column 4: Location */}
          <div>
            <h5 className="font-serif text-lg text-brand-500 mb-6 italic">Headquarters</h5>
            <div className="flex items-start gap-3 text-neutral-bg-base/60 mb-4">
              <MapPin className="w-4 h-4 mt-1 text-brand-500" />
              <p className="font-sans text-xs leading-relaxed">
                Sudirman Central Business District<br/>
                Jakarta, Indonesia 12190
              </p>
            </div>
            <p className="font-sans text-[10px] uppercase tracking-widest text-brand-500/50 mt-6">
              Est. MMXXV
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-bg-base/30">
            &copy; {new Date().getFullYear()} Anoa Asset Management.
          </p>
          <div className="font-sans text-[10px] uppercase tracking-widest text-neutral-bg-base/30">
            Jakarta &bull; Singapore &bull; London
          </div>
        </div>
      </div>
    </footer>
  )
}