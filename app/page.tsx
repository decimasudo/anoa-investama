import Link from 'next/link'
import { ArrowRight, Shield, TrendingUp, Users, Award } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-neutral-bg-base">
        {/* Clean corporate background */}
        <div className="absolute inset-0 bg-neutral-bg-base"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-neutral-text-primary mb-8 leading-tight">
              VALUE INVESTING FOR
              <span className="block text-accent-gold">INDONESIAN FAMILIES</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-neutral-text-secondary mb-12 leading-relaxed max-w-2xl">
              Professional wealth management by Cambridge and LSE alumni. 
              Conservative strategies, transparent processes, and exceptional returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-accent-gold text-neutral-bg-base font-sans font-bold text-lg px-8 py-4 rounded-sm hover:bg-accent-gold-hover transition-colors duration-200 flex items-center justify-center shadow-md">
                START CONSULTATION
                <ArrowRight className="ml-2" size={20} />
              </button>
              <Link 
                href="/plans"
                className="border-2 border-neutral-text-primary text-neutral-text-primary font-sans font-bold text-lg px-8 py-4 rounded-sm hover:bg-neutral-text-primary hover:text-neutral-bg-base transition-colors duration-200 flex items-center justify-center"
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
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-primary mb-8">
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
                <p className="text-accent-bronze font-semibold text-xl italic">
                  "Value over hype. Principles over profit."
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Clean corporate illustration */}
              <div className="relative bg-neutral-bg-base border border-neutral-border rounded-lg p-12 shadow-md">
                <div className="text-center">
                  {/* Professional logo display */}
                  <div className="w-32 h-32 mx-auto bg-accent-gold rounded-full flex items-center justify-center shadow-md mb-8">
                    <img 
                      src="/logo.png" 
                      alt="Anoa Investama" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-neutral-text-primary mb-4">PROFESSIONAL EXCELLENCE</h3>
                  <div className="w-16 h-1 bg-accent-gold mx-auto"></div>
                  <p className="text-accent-bronze font-sans text-sm mt-4 tracking-wider">LUXURY WEALTH MANAGEMENT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plans Teaser */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-primary mb-6">
              INVESTMENT PLANS
            </h2>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-3xl mx-auto">
              Choose between our conservative 6% annual plan or growth-oriented 10% annual plan, 
              both designed with disciplined risk management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 6% Plan */}
            <div className="bg-neutral-bg-paper p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-neutral-border">
              <div className="text-center mb-6">
                <div className="font-serif font-bold text-6xl text-accent-bronze mb-2">6%</div>
                <div className="font-sans text-lg text-neutral-text-secondary font-semibold">ANNUAL TARGET</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-muted">Asset Allocation</span>
                  <span className="font-sans font-bold text-neutral-text-primary">&gt;80% Safe Assets</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-muted">Minimum Entry</span>
                  <span className="font-sans font-bold text-neutral-text-primary">100jt IDR</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-muted">Risk Profile</span>
                  <span className="font-sans font-bold text-accent-success">Conservative</span>
                </div>
              </div>
              <Link 
                href="/plans"
                className="block text-center bg-accent-gold text-neutral-bg-base font-sans font-bold py-3 px-6 rounded-sm hover:bg-accent-gold-hover transition-colors duration-200"
              >
                LEARN MORE
              </Link>
            </div>

            {/* 10% Plan */}
            <div className="bg-neutral-bg-paper p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-accent-gold relative">
              {/* Featured badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-gold text-neutral-bg-base px-4 py-1 rounded-full text-sm font-bold">POPULAR</span>
              </div>
              <div className="text-center mb-6 mt-4">
                <div className="font-serif font-bold text-6xl text-accent-bronze mb-2">10%</div>
                <div className="font-sans text-lg text-neutral-text-secondary font-semibold">ANNUAL TARGET</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-muted">Asset Allocation</span>
                  <span className="font-sans font-bold text-neutral-text-primary">&gt;60% Growth Assets</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-muted">Minimum Entry</span>
                  <span className="font-sans font-bold text-neutral-text-primary">500jt IDR</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-neutral-text-muted">Risk Profile</span>
                  <span className="font-sans font-bold text-accent-bronze">Growth</span>
                </div>
              </div>
              <Link 
                href="/plans"
                className="block text-center bg-accent-gold text-neutral-bg-base font-sans font-bold py-3 px-6 rounded-sm hover:bg-accent-gold-hover transition-colors duration-200"
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
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-primary mb-6">
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
              <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <span className="font-serif font-bold text-xl text-neutral-bg-base">{step.number}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-neutral-text-primary mb-3">{step.title}</h3>
                <p className="font-sans text-sm text-neutral-text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/process"
              className="inline-flex items-center bg-accent-bronze text-neutral-bg-base font-sans font-bold py-4 px-8 rounded-sm hover:bg-accent-gold hover:text-neutral-bg-base transition-all duration-200 shadow-md"
            >
              VIEW FULL PROCESS
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <Shield className="w-8 h-8 text-neutral-bg-base" />
              </div>
              <h3 className="font-serif font-bold text-lg text-neutral-text-primary mb-3">REGULATED</h3>
              <p className="font-sans text-sm text-neutral-text-muted leading-relaxed">Fully compliant with Indonesian financial regulations</p>
            </div>
            <div className="text-center group hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <Award className="w-8 h-8 text-neutral-bg-base" />
              </div>
              <h3 className="font-serif font-bold text-lg text-neutral-text-primary mb-3">TOP-TIER EDUCATION</h3>
              <p className="font-sans text-sm text-neutral-text-muted leading-relaxed">Cambridge and LSE alumni with proven expertise</p>
            </div>
            <div className="text-center group hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <TrendingUp className="w-8 h-8 text-neutral-bg-base" />
              </div>
              <h3 className="font-serif font-bold text-lg text-neutral-text-primary mb-3">PROVEN TRACK RECORD</h3>
              <p className="font-sans text-sm text-neutral-text-muted leading-relaxed">Consistent value investing performance</p>
            </div>
            <div className="text-center group hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <Users className="w-8 h-8 text-neutral-bg-base" />
              </div>
              <h3 className="font-serif font-bold text-lg text-neutral-text-primary mb-3">FAMILY FOCUSED</h3>
              <p className="font-sans text-sm text-neutral-text-muted leading-relaxed">Wealth preservation for Indonesian families</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}