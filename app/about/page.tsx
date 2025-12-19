import { Award, BookOpen, Globe, Heart } from 'lucide-react'

export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Adrian Wijaya',
      title: 'Managing Partner',
      education: 'PhD Economics, Cambridge University',
      experience: '15+ years in Indonesian markets',
      specialization: 'Value Investing & Risk Management',
      image: '/images/team_member_1_9.webp',
      description: 'Former Goldman Sachs analyst with deep expertise in Southeast Asian markets and value investing strategies.'
    },
    {
      name: 'Sarah Indrawati',
      title: 'Senior Portfolio Manager',
      education: 'MSc Finance, London School of Economics',
      experience: '12+ years in wealth management',
      specialization: 'Portfolio Optimization & ESG',
      image: '/images/team_member_2_8.jpg',
      description: 'Expert in sustainable investing with proven track record in Indonesian family office management.'
    },
    {
      name: 'Michael Hartono',
      title: 'Investment Director',
      education: 'MBA Finance, Cambridge Judge Business School',
      experience: '10+ years in asset management',
      specialization: 'Alternative Investments & Hedging',
      image: '/images/team_member_3_5.jpg',
      description: 'Specializes in alternative investment strategies and currency hedging for Indonesian investors.'
    }
  ]

  return (
    <div className="animate-fade-up">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-bg-base to-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-serif font-bold text-4xl md:text-5xl text-brand-900 mb-8">
                OUR HERITAGE
              </h1>
              <div className="space-y-6 text-lg text-neutral-text-secondary leading-relaxed">
                <p>
                  <strong className="text-brand-700">Anoa</strong> represents endurance, strength, and wisdom in Indonesian culture. 
                  Like the anoa buffalo that traverses Indonesia's diverse landscapes, we navigate the complexities 
                  of global markets with resilience and purpose.
                </p>
                <p>
                  Founded by Cambridge and LSE alumni, Anoa Investama combines international financial expertise 
                  with deep understanding of Indonesian market dynamics and family wealth preservation needs.
                </p>
                <p className="text-brand-700 font-semibold">
                  "Where Indonesian heritage meets global financial excellence."
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/anoa_symbol_1.jpg" 
                alt="Anoa Symbol" 
                className="w-full max-w-md mx-auto rounded-lg shadow-card"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-gold rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-2xl text-brand-900">AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Investing Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 mb-6">
              VALUE INVESTING MANIFESTO
            </h2>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-4xl mx-auto">
              We believe in the timeless principles of value investing over the ephemeral trends of day trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-serif font-bold text-2xl text-brand-900 mb-6">OUR PHILOSOPHY</h3>
              <div className="space-y-6 text-neutral-text-secondary">
                <p className="leading-relaxed">
                  <strong className="text-brand-700">Quality over Quantity:</strong> We prefer owning a few exceptional 
                  businesses at fair prices rather than many mediocre ones at any price.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-brand-700">Patience over Hype:</strong> Wealth is built through time, not timing. 
                  Our strategies focus on long-term value creation rather than short-term market movements.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-brand-700">Principles over Profit:</strong> We maintain disciplined investment 
                  principles even when market sentiment suggests otherwise.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/images/investment_chart_0.jpeg" 
                alt="Value Investing Growth Chart" 
                className="w-full rounded-lg shadow-card"
              />
            </div>
          </div>

          <div className="bg-neutral-bg-paper p-8 rounded-lg">
            <h3 className="font-serif font-bold text-2xl text-brand-900 text-center mb-8">VALUE INVESTING VS DAY TRADING</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans font-bold text-lg text-accent-success mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  VALUE INVESTING (OUR APPROACH)
                </h4>
                <ul className="space-y-2 text-neutral-text-secondary">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Long-term wealth creation (5-10+ years)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Fundamental analysis and intrinsic value</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lower transaction costs and tax efficiency</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Suitable for retirement and family wealth</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-sans font-bold text-lg text-red-600 mb-4">DAY TRADING (WHAT WE AVOID)</h4>
                <ul className="space-y-2 text-neutral-text-secondary">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Short-term speculation (minutes to hours)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Technical analysis and market timing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>High transaction costs and tax burden</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Unsuitable for wealth preservation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 mb-6">
              OUR TEAM
            </h2>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-3xl mx-auto">
              World-class education meets Indonesian market expertise. Our team's credentials speak to our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-neutral-bg-base p-8 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
                <div className="text-center mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                  />
                  <h3 className="font-serif font-bold text-xl text-brand-900">{member.name}</h3>
                  <p className="font-sans text-brand-700 font-semibold">{member.title}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-sm text-neutral-text-secondary">Education</p>
                      <p className="font-sans text-sm text-brand-900 font-semibold">{member.education}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-sm text-neutral-text-secondary">Experience</p>
                      <p className="font-sans text-sm text-brand-900 font-semibold">{member.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-sm text-neutral-text-secondary">Specialization</p>
                      <p className="font-sans text-sm text-brand-900 font-semibold">{member.specialization}</p>
                    </div>
                  </div>
                </div>
                
                <p className="font-sans text-sm text-neutral-text-secondary leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Recognition */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 mb-6">
              CREDENTIALS & RECOGNITION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'CAMBRIDGE UNIVERSITY',
                description: 'PhD Economics, Cambridge Judge Business School',
                icon: Award
              },
              {
                title: 'LONDON SCHOOL OF ECONOMICS',
                description: 'MSc Finance, World-renowned finance program',
                icon: BookOpen
              },
              {
                title: 'INDONESIAN REGULATION',
                description: 'Registered with OJK (Financial Services Authority)',
                icon: Globe
              },
              {
                title: 'PROFESSIONAL CERTIFICATIONS',
                description: 'CFA, CAIA, and other industry certifications',
                icon: Award
              }
            ].map((credential, index) => {
              const IconComponent = credential.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-brand-900" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">{credential.title}</h3>
                  <p className="font-sans text-sm text-neutral-text-secondary">{credential.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Office & Location */}
      <section className="py-24 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 mb-6">
                OUR OFFICE
              </h2>
              <div className="space-y-6 text-neutral-text-secondary">
                <p className="leading-relaxed">
                  Based in Jakarta's prestigious business district, our office reflects the same principles 
                  that guide our investment approach: sophistication, discretion, and excellence.
                </p>
                <p className="leading-relaxed">
                  We maintain a physical presence that allows for face-to-face consultations while leveraging 
                  global technology for portfolio management and client communication.
                </p>
                <div className="bg-neutral-bg-base p-6 rounded-lg">
                  <h4 className="font-serif font-bold text-lg text-brand-900 mb-4">OFFICE DETAILS</h4>
                  <div className="space-y-2">
                    <p className="font-sans text-sm"><strong>Location:</strong> Jakarta, Indonesia</p>
                    <p className="font-sans text-sm"><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM WIB</p>
                    <p className="font-sans text-sm"><strong>Consultation:</strong> By appointment</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/jakarta_skyline_7.jpg" 
                alt="Jakarta Business District" 
                className="w-full rounded-lg shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-6">
            PARTNER WITH PROVEN EXPERTISE
          </h2>
          <p className="font-sans text-xl text-brand-100 mb-8 leading-relaxed">
            Join Indonesian families who trust Anoa Investama for professional wealth management. 
            Experience the difference that Cambridge and LSE education makes.
          </p>
          <button className="bg-accent-gold text-brand-900 font-sans font-bold text-lg px-8 py-4 rounded-sm hover:bg-accent-gold-hover transition-colors duration-200">
            SCHEDULE A MEETING
          </button>
        </div>
      </section>
    </div>
  )
}