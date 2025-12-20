export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Adrian Wijaya',
      title: 'Managing Partner',
      education: 'PhD Economics, Cambridge University',
      experience: '15+ years in Indonesian markets',
      specialization: 'Value Investing & Risk Management',
      initials: 'AW',
      description: 'Former Goldman Sachs analyst with deep expertise in Southeast Asian markets and value investing strategies.'
    },
    {
      name: 'Sarah Indrawati',
      title: 'Senior Portfolio Manager',
      education: 'MSc Finance, London School of Economics',
      experience: '12+ years in wealth management',
      specialization: 'Portfolio Optimization & ESG',
      initials: 'SI',
      description: 'Expert in sustainable investing with proven track record in Indonesian family office management.'
    },
    {
      name: 'Michael Hartono',
      title: 'Investment Director',
      education: 'MBA Finance, Cambridge Judge Business School',
      experience: '10+ years in asset management',
      specialization: 'Alternative Investments & Hedging',
      initials: 'MH',
      description: 'Specializes in alternative investment strategies and currency hedging for Indonesian investors.'
    }
  ]

  return (
    <div>
      <h1>About Page</h1>
      <p>Team Members: {teamMembers.length}</p>
    </div>
  )
}