import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anoa Investama - Value Investing for Indonesian Families',
  description: 'Professional wealth management services by Cambridge and LSE alumni. Conservative value investing for Indonesian families with 6% and 10% annual return plans.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} min-h-screen bg-neutral-bg-base`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}