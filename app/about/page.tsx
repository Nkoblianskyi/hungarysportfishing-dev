'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Mail, CheckCircle2, Fish, Compass, BookOpen } from 'lucide-react'

const values = [
  {
    icon: Fish,
    title: 'Sport fishing',
    desc: 'We promote the catch-and-release principle and responsible stewardship of the natural environment.',
  },
  {
    icon: Compass,
    title: 'Reliable information',
    desc: 'All content is verified by practitioners. We do not write theory - we share real experience from Hungarian waters.',
  },
  {
    icon: BookOpen,
    title: 'Education & development',
    desc: 'From beginner to expert - our content is valuable for anglers of every level of experience.',
  },
]

export default function AboutPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Please enter your name'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email address'
    if (!message.trim() || message.length < 10) e.message = 'Message is too short'
    if (!agreed) e.agreed = 'You must agree to the policy'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
    setAgreed(false)
    setErrors({})
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image src="/images/about.jpg" alt="About us" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About Us</span>
          </nav>
          <span className="inline-block bg-accent/90 text-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Who we are
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">
            About Us
          </h1>
          <p className="text-white/80 text-xl max-w-2xl leading-relaxed">
            We are a team of passionate anglers brought together by a shared love of Hungarian nature and sport fishing.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4 text-balance">
                Our mission - your successful session
              </h2>
              <div className="w-16 h-1 bg-accent rounded mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hungary Sport Fishing is an independent information resource dedicated to sport fishing in Hungary. We collect, verify and publish useful information about water bodies, fish species, fishing methods and the rules that govern angling in this remarkable country.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hungary holds a special place among Europe&apos;s anglers: the quality and variety of its waters, the diversity of fish and the accessibility for visiting anglers make it a true fishing paradise. Our aim is for every angler - from complete beginner to seasoned expert - to find everything they need here for a successful trip.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We represent no commercial interests whatsoever - only honest, practical experience and a genuine love of fishing.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/about.jpg" alt="Hungary Sport Fishing team" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-xl max-w-xs hidden lg:block">
                <div className="font-serif text-3xl font-bold text-accent mb-1">10+</div>
                <div className="text-primary-foreground/80 text-sm">Years of fishing experience in Hungary</div>
              </div>
            </div>
          </div>

          {/* VALUES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-secondary rounded-2xl p-6 border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Get in touch</h2>
              <div className="w-16 h-1 bg-accent rounded mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Have a question about fishing in Hungary? Want to share your own angling story or suggest a topic for an article? Write to us - we respond within 24–48 hours.
              </p>
              <div className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <a
                    href="mailto:info@hungarysportfishing.com"
                    className="text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    info@hungarysportfishing.com
                  </a>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-3">What you can write to us about:</h3>
                <ul className="space-y-2">
                  {[
                    'Questions about licences and regulations',
                    'Fishing location recommendations',
                    'Requests for specific articles',
                    'Your own experience and tips',
                    'General collaboration',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Send a message</h3>
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">
                      Your name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Smith"
                      className={`w-full px-4 py-2.5 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.name ? 'border-destructive' : 'border-input'}`}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-2.5 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.email ? 'border-destructive' : 'border-input'}`}
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder="Your question or message..."
                      className={`w-full px-4 py-2.5 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${errors.message ? 'border-destructive' : 'border-input'}`}
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            agreed ? 'bg-primary border-primary' : 'bg-background border-input group-hover:border-primary'
                          }`}
                        >
                          {agreed && (
                            <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 12 12">
                              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        I agree to the{' '}
                        <Link href="/privacy-policy" className="text-primary underline hover:no-underline">
                          Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link href="/cookie-policy" className="text-primary underline hover:no-underline">
                          Cookie Policy
                        </Link>
                        , and consent to the processing of the data entered in order to respond to my enquiry. <span className="text-destructive">*</span>
                      </span>
                    </label>
                    {errors.agreed && <p className="text-destructive text-xs mt-1 ml-8">{errors.agreed}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 active:bg-primary/80 transition-colors"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Message sent"
        >
          <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Message sent!</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Thank you for getting in touch. We will reply to your email address within 24–48 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
