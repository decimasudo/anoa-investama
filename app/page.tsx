import Link from 'next/link'
import { ArrowRight, Shield, TrendingUp, Users, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="animate-fade-up">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/images/hero_team_meeting_6.png" 
            alt="Professional Investment Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900 bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
              VALUE INVESTING FOR
              <span className="block text-accent-gold">INDONESIAN FAMILIES</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-brand-100 mb-12 leading-relaxed">
              Professional wealth management by Cambridge and LSE alumni. 
              Conservative strategies, transparent processes, and exceptional returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-accent-gold text-brand-900 font-sans font-bold text-lg px-8 py-4 rounded-sm hover:bg-accent-gold-hover transition-colors duration-200 flex items-center justify-center">
                START CONSULTATION
                <ArrowRight className="ml-2" size={20} />
              </button>
              <Link 
                href="/plans"
                className="border-2 border-white text-white font-sans font-bold text-lg px-8 py-4 rounded-sm hover:bg-white hover:text-brand-900 transition-colors duration-200 flex items-center justify-center"
              >
                VIEW PLANS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 mb-8">
                WHO WE ARE
              </h2>
              <div className="space-y-6 text-lg text-neutral-text-secondary leading-relaxed">
                <p>
                  Independent wealth managers with prestigious academic credentials from Cambridge University 
                  and the London School of Economics. We specialize in conservative value investing strategies 
                  tailored for Indonesian families.
                </p>
                <p>
                  Our approach emphasizes long-term wealth preservation over short-term gains, focusing on 
                  fundamental analysis and patient capital deployment in the Indonesian market with global diversification.
                </p>
                <p className="text-brand-700 font-semibold">
                  "Value over hype. Principles over profit."
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/team_member_1_9.webp" 
                alt="Professional Investment Team" 
                className="w-full rounded-lg shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plans Teaser */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 mb-6">
              INVESTMENT PLANS
            </h2>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-3xl mx-auto">
              Choose between our conservative 6% annual plan or growth-oriented 10% annual plan, 
              both designed with disciplined risk management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 6% Plan */}
            <div className="bg-neutral-bg-paper p-8 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="font-serif font-bold text-6xl text-brand-500 mb-2">6%</div>
                <div className="font-sans text-lg text-brand-700 font-semibold">ANNUAL TARGET</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-secondary">Asset Allocation</span>
                  <span className="font-sans font-bold text-brand-900">&gt;80% Safe Assets</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-secondary">Minimum Entry</span>
                  <span className="font-sans font-bold text-brand-900">100jt IDR</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-secondary">Risk Profile</span>
                  <span className="font-sans font-bold text-accent-success">Conservative</span>
                </div>
              </div>
              <Link 
                href="/plans"
                className="block text-center bg-accent-gold text-brand-900 font-sans font-bold py-3 px-6 rounded-sm hover:bg-accent-gold-hover transition-colors duration-200"
              >
                LEARN MORE
              </Link>
            </div>

            {/* 10% Plan */}
            <div className="bg-neutral-bg-paper p-8 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300 border-2 border-brand-300">
              <div className="text-center mb-6">
                <div className="font-serif font-bold text-6xl text-brand-500 mb-2">10%</div>
                <div className="font-sans text-lg text-brand-700 font-semibold">ANNUAL TARGET</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-secondary">Asset Allocation</span>
                  <span className="font-sans font-bold text-brand-900">&gt;60% Growth Assets</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-secondary">Minimum Entry</span>
                  <span className="font-sans font-bold text-brand-900">500jt IDR</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-secondary">Risk Profile</span>
                  <span className="font-sans font-bold text-brand-700">Growth</span>
                </div>
              </div>
              <Link 
                href="/plans"
                className="block text-center bg-accent-gold text-brand-900 font-sans font-bold py-3 px-6 rounded-sm hover:bg-accent-gold-hover transition-colors duration-200"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HI Process Teaser */}
      <section className="py-24 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 mb-6">
              THE HI PROCESS
            </h2>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-3xl mx-auto">
              Our transparent 6-step investment journey ensures clarity, compliance, and optimal results 
              for every client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: '01', title: 'BUDGET DETERMINATION', desc: 'Define investment goals and time horizon' },
              { number: '02', title: 'RDN OPENING', desc: 'Ajaib partnership with KYC referral' },
              { number: '03', title: 'LEGAL FRAMEWORK', desc: 'SPPD agreement with proper stamp duty' },
              { number: '04', title: 'ACCESS PROVISION', desc: 'Secure login credentials for account management' },
              { number: '05', title: 'MONITORING', desc: 'Regular transparency and performance tracking' },
              { number: '06', title: 'MANAGEMENT', desc: 'Ongoing portfolio optimization and reporting' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif font-bold text-2xl text-brand-900">{step.number}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">{step.title}</h3>
                <p className="font-sans text-sm text-neutral-text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/process"
              className="inline-flex items-center bg-brand-500 text-white font-sans font-bold py-3 px-8 rounded-sm hover:bg-brand-700 transition-colors duration-200"
            >
              VIEW FULL PROCESS
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">REGULATED</h3>
              <p className="font-sans text-sm text-neutral-text-secondary">Fully compliant with Indonesian financial regulations</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">TOP-TIER EDUCATION</h3>
              <p className="font-sans text-sm text-neutral-text-secondary">Cambridge and LSE alumni with proven expertise</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">PROVEN TRACK RECORD</h3>
              <p className="font-sans text-sm text-neutral-text-secondary">Consistent value investing performance</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">FAMILY FOCUSED</h3>
              <p className="font-sans text-sm text-neutral-text-secondary">Wealth preservation for Indonesian families</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}