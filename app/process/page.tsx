import { Calculator, FileText, Shield, Key, Eye, BarChart3 } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'BUDGET DETERMINATION',
      subtitle: 'Define Your Investment Goals',
      description: 'We begin by understanding your financial objectives, risk tolerance, and investment timeline. Determine whether you need fixed income or growth-oriented strategies.',
      icon: Calculator,
      details: [
        'Investment goal assessment',
        'Risk profile evaluation',
        'Time horizon determination',
        'Budget allocation planning'
      ]
    },
    {
      number: '02',
      title: 'RDN OPENING',
      subtitle: 'Ajaib Partnership & KYC',
      description: 'Open your Rekening Dana Nasabah (RDN) through our Ajaib partnership. Complete KYC process using referral code "wealthypeople" for streamlined onboarding.',
      icon: FileText,
      details: [
        'RDN account opening with Ajaib',
        'KYC documentation with referral',
        'Bank account verification',
        'Initial deposit setup'
      ]
    },
    {
      number: '03',
      title: 'LEGAL FRAMEWORK',
      subtitle: 'SPPD Agreement & Compliance',
      description: 'Sign the Surat Perjanjian Pengelolaan Dana (SPPD) with proper stamp duty. This legal framework ensures transparency and protects both parties.',
      icon: Shield,
      details: [
        'SPPD agreement signing',
        'Stamp duty payment',
        'Legal compliance verification',
        'Terms and conditions review'
      ]
    },
    {
      number: '04',
      title: 'ACCESS PROVISION',
      subtitle: 'Secure Login Credentials',
      description: 'Provide secure login credentials for portfolio management access. We ensure you have full visibility into your investment account and performance.',
      icon: Key,
      details: [
        'Secure credential setup',
        'Account access verification',
        'Dashboard orientation',
        'Security protocols explanation'
      ]
    },
    {
      number: '05',
      title: 'MONITORING',
      subtitle: 'Regular Transparency & Tracking',
      description: 'Enjoy complete transparency with regular performance monitoring. Track your portfolio growth through detailed monthly reports and quarterly reviews.',
      icon: Eye,
      details: [
        'Monthly performance reports',
        'Portfolio tracking dashboard',
        'Risk monitoring alerts',
        'Quarterly review meetings'
      ]
    },
    {
      number: '06',
      title: 'MANAGEMENT',
      subtitle: 'Ongoing Optimization & Reporting',
      description: 'Benefit from active portfolio management with ongoing optimization strategies. Receive comprehensive reporting and strategic adjustments as needed.',
      icon: BarChart3,
      details: [
        'Active portfolio management',
        'Strategic rebalancing',
        'Tax optimization strategies',
        'Annual performance reviews'
      ]
    }
  ]

  return (
    <div className="animate-fade-up">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-bg-base to-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-brand-900 mb-6">
              THE HI PROCESS
            </h1>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-4xl mx-auto leading-relaxed">
              Our transparent 6-step investment journey ensures clarity, compliance, and optimal results. 
              No hidden processes, no complex procedures – just professional wealth management done right.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-300"></div>

            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <div key={index} className="relative mb-16 lg:mb-24">
                  {/* Step Content */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:ml-auto lg:pl-16'} ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <div className="bg-neutral-bg-paper p-8 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
                      {/* Mobile Step Number */}
                      <div className="lg:hidden flex items-center mb-6">
                        <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mr-4">
                          <span className="font-serif font-bold text-2xl text-brand-900">{step.number}</span>
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-xl text-brand-900">{step.title}</h3>
                          <p className="font-sans text-brand-700 font-semibold">{step.subtitle}</p>
                        </div>
                      </div>

                      {/* Desktop Step Number */}
                      <div className="hidden lg:flex items-center mb-6">
                        <IconComponent className={`w-8 h-8 text-brand-500 ${isEven ? 'mr-4' : 'ml-4'}`} />
                        <div className={`${isEven ? 'text-right' : ''}`}>
                          <h3 className="font-serif font-bold text-xl text-brand-900">{step.title}</h3>
                          <p className="font-sans text-brand-700 font-semibold">{step.subtitle}</p>
                        </div>
                      </div>

                      <p className="font-sans text-neutral-text-secondary mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent-gold rounded-full flex-shrink-0"></div>
                            <span className="font-sans text-sm text-neutral-text-secondary">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="font-serif font-bold text-xl text-brand-900">{step.number}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-24 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 mb-6">
              WHY OUR PROCESS WORKS
            </h2>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-3xl mx-auto">
              Every step is designed for transparency, compliance, and optimal client outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'TRANSPARENT',
                description: 'Every step is clearly explained with full documentation and client visibility.'
              },
              {
                title: 'COMPLIANT',
                description: 'All procedures follow Indonesian financial regulations and industry best practices.'
              },
              {
                title: 'EFFICIENT',
                description: 'Streamlined process minimizes paperwork while maintaining thoroughness.'
              },
              {
                title: 'CLIENT-CENTRIC',
                description: 'Designed around client needs with regular communication and feedback loops.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif font-bold text-xl text-brand-500">{index + 1}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-900 mb-3">{benefit.title}</h3>
                <p className="font-sans text-sm text-neutral-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 mb-6">
                COMPLETE TRANSPARENCY
              </h2>
              <p className="font-sans text-lg text-neutral-text-secondary mb-8 leading-relaxed">
                Monitor your investment performance in real-time through our secure dashboard. 
                Full visibility into portfolio composition, returns, and risk metrics.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time portfolio performance',
                  'Detailed asset allocation breakdown',
                  'Monthly and quarterly reports',
                  'Risk assessment and monitoring',
                  'Direct communication with your manager'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-gold rounded-full flex-shrink-0"></div>
                    <span className="font-sans text-neutral-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/dashboard_mockup_5.jpg" 
                alt="Investment Dashboard Interface" 
                className="w-full rounded-lg shadow-card"
              />
              <div className="absolute inset-0 bg-brand-900 bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-6">
            READY TO START YOUR INVESTMENT JOURNEY?
          </h2>
          <p className="font-sans text-xl text-brand-100 mb-8 leading-relaxed">
            Take the first step towards professional wealth management. Our team is ready to guide you through every stage of the HI Process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-accent-gold text-brand-900 font-sans font-bold text-lg px-8 py-4 rounded-sm hover:bg-accent-gold-hover transition-colors duration-200">
              SCHEDULE CONSULTATION
            </button>
            <button className="border-2 border-white text-white font-sans font-bold text-lg px-8 py-4 rounded-sm hover:bg-white hover:text-brand-900 transition-colors duration-200">
              DOWNLOAD PROCESS GUIDE
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}