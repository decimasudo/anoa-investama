import './globals.css'
import type { Metadata } from 'next'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

export const metadata: Metadata = {
  title: 'Anoa Investama | Luxury Asset Management',
  description: 'Value investing strategies for Indonesian families.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* We apply the base background and text color here to ensure 
        no white flashes occur during page loads.
      */}
      <body className="bg-neutral-bg-base text-neutral-text-primary antialiased min-h-screen flex flex-col">
        
        {/* Navigation is bound here */}
        <Navigation />
        
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer is bound here */}
        <Footer />
        
      </body>
    </html>
  )
}