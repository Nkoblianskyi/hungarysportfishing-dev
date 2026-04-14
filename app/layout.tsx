import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Hungary Sport Fishing – Fishing in Hungary',
  description:
    'Your complete guide to sport fishing in Hungary: fishing techniques, water bodies, fish species, tips and blog for every angler.',
  keywords: ['fishing Hungary', 'sport fishing Hungary', 'carp fishing Hungary', 'Hungary angling', 'Balaton fishing'],
  metadataBase: new URL('https://hungarysportfishing.com'),
  openGraph: {
    title: 'Hungary Sport Fishing',
    description: 'Everything about sport fishing in Hungary',
    url: 'https://hungarysportfishing.com',
    siteName: 'Hungary Sport Fishing',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
