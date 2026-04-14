import Link from 'next/link'
import { Fish } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Fish className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-lg text-white leading-tight">
                Hungary<br />
                <span className="text-accent text-sm font-normal">Sport Fishing</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Your guide to sport fishing in Hungary. Guides, tips and inspiration for anglers of all levels.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/fishing-types', label: 'Fishing Types' },
                { href: '/water-bodies', label: 'Water Bodies' },
                { href: '/fish-species', label: 'Fish Species' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: '/blog', label: 'Blog & Tips' },
                { href: '/about', label: 'About Us' },
                { href: '/about#contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/cookie-policy', label: 'Cookie Policy' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-white/60 text-sm">Email:</p>
              <a
                href="mailto:info@hungarysportfishing.com"
                className="text-accent hover:text-accent/80 text-sm transition-colors"
              >
                info@hungarysportfishing.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} hungarysportfishing.com - All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
