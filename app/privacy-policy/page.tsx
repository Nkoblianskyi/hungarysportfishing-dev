import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hungary Sport Fishing',
  description: 'Privacy Policy of hungarysportfishing.com — how we collect, use and protect your personal data.',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Privacy Policy</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-3 text-balance">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Effective date: 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-10">

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">1. General information</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website <strong className="text-foreground">hungarysportfishing.com</strong> (hereinafter the &quot;Site&quot;) is committed to respecting and protecting the privacy of all its visitors. This Privacy Policy describes what personal data we may collect, how we use it and what rights you have regarding your data under the General Data Protection Regulation (GDPR) and other applicable legislation.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">2. What information we collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following information:
              </p>
              <ul className="space-y-2">
                {[
                  'Personal data you voluntarily provide via the contact form (name, email address, message content)',
                  'Technical data about your browser and device to ensure the Site functions correctly (browser type, IP address, time of visit)',
                  'Cookie files in accordance with our Cookie Policy',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">3. Purpose of data use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the collected information exclusively to:</p>
              <ul className="space-y-2">
                {[
                  'Respond to your enquiries submitted through the contact form',
                  'Improve the functionality and quality of content on the Site',
                  'Ensure the technical security and stable operation of the Site',
                  'Comply with applicable legal obligations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">4. Data retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal data only for as long as is necessary to fulfil the purpose for which it was collected. Data provided through the contact form is retained for no more than 12 months after your enquiry has been resolved. You may contact us at any time to request deletion of your data.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">5. Disclosure to third parties</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, rent or transfer your personal data to third parties for commercial purposes. Data may be disclosed only in cases required by applicable law, or where necessary for the technical operation of the Site (for example, to hosting providers acting in accordance with GDPR).
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">6. Your rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Under GDPR you have the right to:</p>
              <ul className="space-y-2">
                {[
                  'Access your personal data',
                  'Rectification of inaccurate data',
                  'Erasure ("right to be forgotten")',
                  'Restriction of processing',
                  'Object to processing',
                  'Data portability',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                To exercise any of these rights, please contact us at:{' '}
                <a href="mailto:info@hungarysportfishing.com" className="text-primary underline hover:no-underline">
                  info@hungarysportfishing.com
                </a>
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">7. Changes to this Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to make changes to this Privacy Policy. The current version will always be available on this page. We recommend reviewing it periodically.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">8. Contact information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a href="mailto:info@hungarysportfishing.com" className="text-primary underline hover:no-underline">
                  info@hungarysportfishing.com
                </a>
              </p>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
            <Link href="/cookie-policy" className="text-primary hover:underline text-sm font-medium">
              Cookie Policy
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
