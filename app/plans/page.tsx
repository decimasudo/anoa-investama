import { CheckCircle, TrendingUp, Shield, DollarSign } from 'lucide-react'

export default function Plans() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-neutral-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-brand-900 mb-6">
              VALUE OVER HYPE
            </h1>
            <p className="font-sans text-xl text-neutral-text-secondary max-w-4xl mx-auto leading-relaxed">
              Our conservative approach prioritizes wealth preservation and consistent returns over 
              speculative trading. Choose the plan that aligns with your risk tolerance and investment goals.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 6% Conservative Plan */}
            <div className="bg-neutral-bg-paper p-12 rounded-lg shadow-card relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent-gold text-brand-900 font-sans font-bold px-6 py-2 rounded-sm">
                  CONSERVATIVE
                </div>
              </div>
              
              <div className="text-center mb-8 pt-4">
                <div className="font-serif font-bold text-7xl text-brand-500 mb-2">6%</div>
                <div className="font-sans text-2xl text-brand-700 font-semibold">ANNUAL RETURN TARGET</div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-accent-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-brand-900 mb-2">Conservative Asset Allocation</h4>
                    <p className="font-sans text-neutral-text-secondary">
                      Over 80% allocation in safe, income-generating assets including government bonds, 
                      blue-chip stocks, and established REITs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-brand-900 mb-2">Lower Volatility</h4>
                    <p className="font-sans text-neutral-text-secondary">
                      Designed for capital preservation with steady, predictable returns suitable for 
                      conservative investors and retirement planning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <DollarSign className="w-6 h-6 text-accent-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-brand-900 mb-2">Minimum Investment</h4>
                    <p className="font-sans text-neutral-text-secondary">
                      <span className="text-2xl font-bold text-brand-500">100jt IDR</span> minimum entry, 
                      with flexible contribution options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-border pt-8">
                <h4 className="font-serif font-bold text-lg text-brand-900 mb-4">IDEAL FOR:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent-success" />
                    <span className="font-sans text-neutral-text-secondary">Risk-averse investors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent-success" />
                    <span className="font-sans text-neutral-text-secondary">Retirement planning</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent-success" />
                    <span className="font-sans text-neutral-text-secondary">Capital preservation focus</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent-success" />
                    <span className="font-sans text-neutral-text-secondary">Income generation priority</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 10% Growth Plan */}
            <div className="bg-neutral-bg-paper p-12 rounded-lg shadow-card relative border-2 border-brand-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent-gold text-brand-900 font-sans font-bold px-6 py-2 rounded-sm">
                  GROWTH
                </div>
              </div>
              
              <div className="text-center mb-8 pt-4">
                <div className="font-serif font-bold text-7xl text-brand-500 mb-2">10%</div>
                <div className="font-sans text-2xl text-brand-700 font-semibold">ANNUAL RETURN TARGET</div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-brand-900 mb-2">Balanced Growth Strategy</h4>
                    <p className="font-sans text-neutral-text-secondary">
                      Over 60% allocation in growth-oriented assets including quality growth stocks, 
                      sector ETFs, and international exposure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-brand-900 mb-2">Higher Return Potential</h4>
                    <p className="font-sans text-neutral-text-secondary">
                      Designed for investors seeking wealth accumulation with moderate risk tolerance 
                      and longer investment horizons.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <DollarSign className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-bold text-brand-900 mb-2">Minimum Investment</h4>
                    <p className="font-sans text-neutral-text-secondary">
                      <span className="text-2xl font-bold text-brand-500">500jt IDR</span> minimum entry, 
                      reflecting the higher commitment level.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-border pt-8">
                <h4 className="font-serif font-bold text-lg text-brand-900 mb-4">IDEAL FOR:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-brand-500" />
                    <span className="font-sans text-neutral-text-secondary">Growth-focused investors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-brand-500" />
                    <span className="font-sans text-neutral-text-secondary">Wealth accumulation goals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-brand-500" />
                    <span className="font-sans text-neutral-text-secondary">Moderate risk tolerance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-brand-500" />
                    <span className="font-sans text-neutral-text-secondary">Long-term horizon (5+ years)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-neutral-bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-900 text-center mb-16">
            PLAN COMPARISON
          </h2>
          
          <div className="bg-neutral-bg-base rounded-lg overflow-hidden shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Headers */}
              <div className="bg-brand-900 text-white p-6">
                <h3 className="font-serif font-bold text-lg">FEATURES</h3>
              </div>
              <div className="bg-brand-500 text-white p-6 text-center">
                <h3 className="font-serif font-bold text-xl">6% PLAN</h3>
              </div>
              <div className="bg-brand-700 text-white p-6 text-center">
                <h3 className="font-serif font-bold text-xl">10% PLAN</h3>
              </div>

              {/* Rows */}
              {[
                { feature: 'Annual Return Target', plan6: '6%', plan10: '10%' },
                { feature: 'Minimum Investment', plan6: '100jt IDR', plan10: '500jt IDR' },
                { feature: 'Conservative Assets', plan6: '>80%', plan10: '>40%' },
                { feature: 'Growth Assets', plan6: '<20%', plan10: '>60%' },
                { feature: 'Risk Profile', plan6: 'Low', plan10: 'Moderate' },
                { feature: 'Time Horizon', plan6: '3-5 years', plan10: '5-10 years' },
                { feature: 'Monthly Reporting', plan6: 'Yes', plan10: 'Yes' },
                { feature: 'Quarterly Reviews', plan6: 'Yes', plan10: 'Yes' },
                { feature: 'Phone Consultation', plan6: 'Monthly', plan10: 'Bi-weekly' }
              ].map((row, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'bg-neutral-bg-base' : 'bg-neutral-bg-paper'} p-4`}>
                  <div className="md:col-span-1 font-sans text-brand-900 font-semibold">{row.feature}</div>
                  <div className="md:col-span-1 text-center font-sans text-neutral-text-secondary">{row.plan6}</div>
                  <div className="md:col-span-1 text-center font-sans text-neutral-text-secondary">{row.plan10}</div>
                </div>
              ))}
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
                q: 'What are the expected returns and how are they calculated?',
                a: 'Our 6% and 10% targets are based on historical performance of conservative and balanced portfolio strategies in the Indonesian market. Returns are calculated using a combination of dividend income, capital appreciation, and currency hedging strategies.'
              },
              {
                q: 'What are the risks associated with these investment plans?',
                a: 'All investments carry risk. The 6% plan focuses on capital preservation with lower volatility, while the 10% plan accepts moderate risk for higher return potential. We minimize risk through diversification, quality asset selection, and active management.'
              },
              {
                q: 'Can I withdraw my money before the minimum period?',
                a: 'We recommend a minimum commitment period to optimize returns. Early withdrawals may be subject to penalties. Please refer to our service agreement for specific terms and conditions.'
              },
              {
                q: 'How often will I receive performance reports?',
                a: 'All clients receive monthly performance reports and quarterly portfolio reviews. Additional communication is available upon request, and the 10% plan includes bi-weekly consultation calls.'
              },
              {
                q: 'What makes Anoa Investama different from other wealth managers?',
                a: 'Our Cambridge and LSE education, value investing philosophy, focus on Indonesian families, and transparent 6-step process set us apart. We prioritize long-term wealth preservation over short-term gains.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-neutral-bg-paper p-8 rounded-lg shadow-card">
                <h3 className="font-serif font-bold text-lg text-brand-900 mb-4">{faq.q}</h3>
                <p className="font-sans text-neutral-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}