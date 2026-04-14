'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {  X } from 'lucide-react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent notice"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-50 bg-card border border-border rounded-xl shadow-xl p-5"
    >
      <div className="flex items-start gap-3 mb-4">

        <div>
          <h3 className="font-semibold text-foreground text-sm mb-1">We use cookies</h3>
          <p className="text-muted-foreground text-xs leading-relaxed">
            This site uses cookies to improve your browsing experience. Learn more in our{' '}
            <Link href="/cookie-policy" className="text-primary underline hover:no-underline">
              Cookie Policy
            </Link>{' '}
            and{' '}
            <Link href="/privacy-policy" className="text-primary underline hover:no-underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <button
          onClick={decline}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 bg-primary text-primary-foreground text-xs font-semibold py-2 px-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Accept all
        </button>
        <button
          onClick={decline}
          className="flex-1 bg-secondary text-secondary-foreground text-xs font-semibold py-2 px-3 rounded-lg hover:bg-muted transition-colors"
        >
          Essential only
        </button>
      </div>
    </div>
  )
}
