'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Fish } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/fishing-types', label: 'Fishing Types' },
  { href: '/water-bodies', label: 'Water Bodies' },
  { href: '/fish-species', label: 'Fish Species' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-card/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Fish className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className={cn('font-serif font-bold text-lg leading-tight transition-colors', scrolled ? 'text-foreground' : 'text-white')}>
            Hungary<br />
            <span className="text-accent text-sm font-normal leading-none">Sport Fishing</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                scrolled
                  ? 'text-foreground hover:text-primary hover:bg-secondary'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            'lg:hidden p-2 rounded-md transition-colors',
            scrolled ? 'text-foreground hover:bg-secondary' : 'text-white hover:bg-white/10'
          )}
          aria-label="Open menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-foreground hover:text-primary hover:bg-secondary rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
