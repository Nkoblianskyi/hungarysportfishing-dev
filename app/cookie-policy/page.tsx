import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy | Hungary Sport Fishing',
  description: 'Information about the use of cookies on hungarysportfishing.com.',
  robots: { index: false, follow: false },
}

const cookieTypes = [
  {
    name: 'Strictly necessary',
    required: true,
    purpose: 'These cookies ensure the basic functions of the Site work correctly, including saving your cookie preferences and session data.',
    examples: 'cookie-consent (stores your cookie consent preference)',
    retention: 'Up to 12 months',
  },
  {
    name: 'Analytical',
    required: false,
    purpose: 'These help us understand how visitors interact with the Site - which pages are viewed most often and where difficulties arise.',
    examples: 'Anonymous visit statistics',
    retention: 'Up to 24 months',
  },
  {
    name: 'Functional',
    required: false,
    purpose: 'These allow the Site to remember your choices and provide a personalised experience.',
    examples: 'Language preferences, regional settings',
    retention: 'Up to 12 months',
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Cookie Policy</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-3 text-balance">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground">Effective date: 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">What are cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files stored in your browser when you visit a website. They allow the site to remember your actions and preferences over a period of time, so you do not have to re-enter them on your next visit.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">How we use cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              The website <strong className="text-foreground">hungarysportfishing.com</strong> uses cookies solely to ensure the Site operates correctly, to improve navigation and to collect anonymous statistical data for analysing Site performance. We do not use cookies to track your behaviour outside our Site or for targeted advertising.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-5">Types of cookies we use</h2>
            <div className="flex flex-col gap-4">
              {cookieTypes.map((ct) => (
                <div key={ct.name} className="border border-border rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 bg-secondary">
                    <h3 className="font-semibold text-foreground">{ct.name}</h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${ct.required ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                        }`}
                    >
                      {ct.required ? 'Always active' : 'With your consent'}
                    </span>
                  </div>
                  <div className="px-5 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Purpose</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ct.purpose}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Examples</p>
                      <p className="text-sm text-muted-foreground">{ct.examples}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Retention period</p>
                      <p className="text-sm text-muted-foreground">{ct.retention}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Managing cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you first visit the Site you will be invited to accept or decline non-essential cookies via the cookie banner. Strictly necessary cookies are always active as they enable the basic functionality of the Site.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can also manage cookies directly through your browser settings. Most browsers allow you to:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'View stored cookies and delete them',
                'Block cookies from specific or all sites',
                'Set up warnings before a cookie is stored',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Please note: if you block all cookies, some features of the Site may not function correctly.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Third-party cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site may use cookies from third parties (for example, analytics services). These services provide their own privacy policies. We recommend reviewing them on their official websites.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Changes to this Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Policy from time to time. The current version will always be available on this page. Continued use of the Site after any changes constitutes your acceptance of the updated version.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any questions regarding the use of cookies, please contact us at:{' '}
              <a href="mailto:info@hungarysportfishing.com" className="text-primary underline hover:no-underline">
                info@hungarysportfishing.com
              </a>
            </p>
          </div>

          <div className="pt-8 border-t border-border flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="text-primary hover:underline text-sm font-medium">
              Privacy Policy
            </Link>
            <Link href="/about#contact" className="text-primary hover:underline text-sm font-medium">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
