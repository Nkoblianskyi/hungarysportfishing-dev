import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Clock, Tag, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Tips | Hungary Sport Fishing',
  description:
    'Practical advice, tactics and articles about sport fishing in Hungary. Useful for beginners and experienced anglers.',
}

const featured = {
  title: 'Spring Carp Fishing: The Best Tactics for Hungarian Waters',
  excerpt:
    'Spring is the golden season for carp anglers. As carp emerge from winter lethargy and feed aggressively, choosing the right spot and bait can produce remarkable results. We share the key tactics and locations to make the most of it.',
  image: '/images/carp-fishing.jpg',
  date: '10 April 2025',
  readTime: '8 min',
  category: 'Tactics',
}

const posts = [
  {
    title: 'Top 5 Crankbaits for Pike Fishing on Lake Balaton',
    excerpt: 'Which crankbait style works best in the shallow reed-lined bays of Balaton? We examine the key characteristics and conditions for each.',
    image: '/images/species-pike.jpg',
    date: '2 April 2025',
    readTime: '5 min',
    category: 'Tackle',
  },
  {
    title: 'Feeder Fishing for Beginners: A Step-by-Step Guide',
    excerpt: 'A detailed guide for anyone trying feeder fishing for the first time — from choosing the right rod to setting up a running rig.',
    image: '/images/feeder-fishing.jpg',
    date: '25 March 2025',
    readTime: '10 min',
    category: 'Beginners',
  },
  {
    title: 'Early Morning Fishing: Why the First Two Hours Are Everything',
    excerpt: 'Experienced anglers know it well: an early start is the key to success. Find out why fish are most active at dawn.',
    image: '/images/blog-morning.jpg',
    date: '18 March 2025',
    readTime: '6 min',
    category: 'Tips',
  },
  {
    title: 'Catfish Rigs for the River Tisza',
    excerpt: 'Hunting for giant catfish is a specialised pursuit. We cover the dedicated tackle, tactics and the best stretches of the Tisza.',
    image: '/images/species-catfish.jpg',
    date: '10 March 2025',
    readTime: '9 min',
    category: 'Tactics',
  },
  {
    title: 'Fishing Knots: 6 Essential Knots Every Angler Must Know',
    excerpt: 'A reliable knot is everything. We break down the 6 most important knots that every angler should have in their repertoire.',
    image: '/images/blog-knots.jpg',
    date: '1 March 2025',
    readTime: '7 min',
    category: 'Skills',
  },
  {
    title: 'Groundbait for Bream: Mix Recipes and Feeding Techniques',
    excerpt: 'The right groundbait can completely transform a session. We share proven groundbait recipes and feeding strategies for bream.',
    image: '/images/blog-tackle.jpg',
    date: '22 February 2025',
    readTime: '6 min',
    category: 'Beginners',
  },
]

const categories = [
  'All',
  'Tactics',
  'Tackle',
  'Beginners',
  'Tips',
  'Skills',
  'Nature',
]

const tips = [
  {
    number: '01',
    title: 'Study the water',
    desc: 'Before every session, research the bottom contours, depths and underwater features. Fish always hold in predictable spots.',
  },
  {
    number: '02',
    title: 'Watch the weather',
    desc: 'Atmospheric pressure and water temperature have a strong influence on fish activity. A falling barometer often triggers a feeding spell.',
  },
  {
    number: '03',
    title: 'Quality groundbait',
    desc: 'Regular pre-baiting of your swim before you start fishing significantly improves results, particularly for carp and bream.',
  },
  {
    number: '04',
    title: 'Silence is your ally',
    desc: 'Fish are highly sensitive to vibrations. Walk quietly along the bank, avoid banging the boat — and your catches will improve noticeably.',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="/images/blog-tips.jpg"
          alt="Blog and fishing tips"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Blog</span>
          </nav>
          <span className="inline-block bg-accent/90 text-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Articles & tips
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">
            Blog & Tips
          </h1>
          <p className="text-white/80 text-xl max-w-2xl leading-relaxed">
            Practical articles from experienced anglers. Tactics, advice, location reviews and useful knowledge for your next session.
          </p>
        </div>
      </section>

      {/* QUICK TIPS */}
      <section className="py-14 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-8 text-center">4 golden rules of fishing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((t) => (
              <div key={t.number} className="flex flex-col gap-3">
                <span className="font-serif text-5xl font-bold text-accent/50 leading-none">{t.number}</span>
                <h3 className="font-semibold text-primary-foreground">{t.title}</h3>
                <p className="text-primary-foreground/65 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-foreground">Featured article</h2>
        </div>
        <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
          <div className="relative h-64 lg:h-auto min-h-64">
            <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center bg-card">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">{featured.category}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" />{featured.readTime}</span>
              <span className="text-xs text-muted-foreground">{featured.date}</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-snug text-balance">{featured.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">{featured.excerpt}</p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Read article <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-2 items-center">
          <Tag className="w-4 h-4 text-muted-foreground" />
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                cat === 'All'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* POST GRID */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-accent/90 text-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2 leading-snug text-balance flex-1">{post.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-pretty line-clamp-3">{post.excerpt}</p>
                <Link href="/blog" className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-3">Have something to share?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Got a question or want to share your own fishing experience? Get in touch with us.
          </p>
          <Link
            href="/about#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Write to us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
