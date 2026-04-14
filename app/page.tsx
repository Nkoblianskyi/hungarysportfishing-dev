import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Waves, MapPin, Fish, BookOpen } from 'lucide-react'

const sections = [
  {
    href: '/fishing-types',
    icon: Waves,
    title: 'Fishing Types',
    desc: 'From spinning to feeder fishing - discover all the popular techniques practised on Hungarian waters.',
    image: '/images/fishing-types.jpg',
    tag: 'Techniques',
  },
  {
    href: '/water-bodies',
    icon: MapPin,
    title: 'Water Bodies of Hungary',
    desc: 'A complete guide to lakes, rivers and canals in Hungary: the best fishing spots and how to reach them.',
    image: '/images/water-bodies.jpg',
    tag: 'Locations',
  },
  {
    href: '/fish-species',
    icon: Fish,
    title: 'Fish Species',
    desc: 'Carp, pike, catfish, zander - detailed profiles of the fish found in Hungarian waters, their habits and seasons.',
    image: '/images/fish-species.jpg',
    tag: 'Species',
  },
  {
    href: '/blog',
    icon: BookOpen,
    title: 'Blog & Tips',
    desc: 'Practical advice, tactics and personal experience from fellow anglers. Useful for beginners and seasoned fishermen alike.',
    image: '/images/blog-tips.jpg',
    tag: 'Tips',
  },
]

const stats = [
  { value: '50+', label: 'Water bodies covered' },
  { value: '30+', label: 'Fish species' },
  { value: '100+', label: 'Articles & tips' },
  { value: '12', label: 'Regions of Hungary' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-fishing.jpg"
          alt="Fishing on a Hungarian river at dawn"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-16">
          <span className="inline-block bg-accent/90 text-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Sport Fishing · Hungary
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            Fishing in Hungary
          </h1>
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto text-pretty">
            Your complete guide to sport fishing in Hungary - from the finest water bodies to practical advice for anglers of every level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fishing-types"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore fishing types
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/water-bodies"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/25 transition-colors"
            >
              Water bodies of Hungary
            </Link>
          </div>
        </div>


      </section>


      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4 text-balance">
            Hungary - an angler&apos;s paradise
          </h2>
          <div className="w-16 h-1 bg-accent rounded mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            Hungary is one of the most attractive countries in Central Europe for sport fishing. Lake Balaton, the Tisza, the Danube and hundreds of smaller lakes and ponds draw thousands of anglers from across the world every year. Trophy carp, predatory pike and the legendary giant catfish all thrive here. Our site is your trusted companion for everything related to Hungarian fishing.
          </p>
        </div>
      </section>

      {/* PREVIEW SECTION 1 - Fishing Types (image right) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              <Waves className="w-4 h-4" /> Techniques
            </span>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4 text-balance">
              Fishing Types in Hungary
            </h2>
            <div className="w-14 h-1 bg-accent rounded mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Hungary offers an extraordinary variety of sport fishing disciplines. Whether you prefer the patience of carp fishing on a quiet lake, the thrill of spinning for pike along the Danube, or the delicate art of fly fishing on clear tributaries - there is a technique for every angler.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our guide covers the most popular methods practised on Hungarian waters, including feeder fishing, night fishing, and ice fishing in winter. Each technique is explained with practical tips on gear, bait, and the best seasons.
            </p>
            <Link
              href="/fishing-types"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore fishing types <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/fishing-types.jpg"
              alt="Fishing techniques in Hungary"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PREVIEW SECTION 2 - Water Bodies (image left, tinted bg) */}
      <section className="py-20 bg-muted">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[420px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/water-bodies.jpg"
                alt="Water bodies of Hungary"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                <MapPin className="w-4 h-4" /> Locations
              </span>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4 text-balance">
                Water Bodies of Hungary
              </h2>
              <div className="w-14 h-1 bg-accent rounded mb-6" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                From the vast shores of Lake Balaton to the mighty Danube and the winding Tisza, Hungary&apos;s waters are among the most productive fishing grounds in Central Europe. Every region offers something unique - deep reservoirs, slow rivers, oxbow lakes and managed fisheries.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our complete location guide covers accessibility, regulations, best spots, and what species you can expect to catch at each water body throughout the seasons.
              </p>
              <Link
                href="/water-bodies"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View the guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW SECTION 3 - Fish Species (image right) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              <Fish className="w-4 h-4" /> Species
            </span>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4 text-balance">
              Fish Species of Hungarian Waters
            </h2>
            <div className="w-14 h-1 bg-accent rounded mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Hungarian waters are home to an impressive range of freshwater species. Trophy common carp weighing over 30 kg, predatory pike lurking in the reeds, giant Wels catfish in deep river channels, and schooling zander in open lakes - the diversity is remarkable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Browse detailed profiles for each species: habitat, feeding behaviour, recommended tackle, record sizes, and the best time of year to target them.
            </p>
            <Link
              href="/fish-species"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Browse species <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/fish-species.jpg"
              alt="Fish species in Hungary"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PREVIEW SECTION 4 - Blog & Tips (full-width dark bg with image) */}
      <section className="py-20 bg-primary">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[420px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/blog-tips.jpg"
                alt="Fishing tips and blog"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                <BookOpen className="w-4 h-4" /> Tips & Articles
              </span>
              <h2 className="font-serif text-4xl font-bold text-primary-foreground mb-4 text-balance">
                Blog &amp; Practical Advice
              </h2>
              <div className="w-14 h-1 bg-accent rounded mb-6" />
              <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
                Our blog is where experience meets the water. We publish practical how-to guides, seasonal tactics, tackle advice and honest field reports from Hungarian fishing spots throughout the year.
              </p>
              <p className="text-primary-foreground/65 leading-relaxed mb-8">
                Topics range from choosing the right terminal tackle to reading the river, understanding fish behaviour in different weather conditions, and planning a successful fishing trip to Hungary.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-accent text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Read the blog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/lake-balaton.jpg"
          alt="Lake Balaton, Hungary"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-water/80" />
        <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4 text-balance">
            Have a question or want to share your experience?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Get in touch - we are always happy to help and love hearing your fishing stories.
          </p>
          <Link
            href="/about#contact"
            className="inline-flex items-center gap-2 bg-accent text-foreground px-7 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Contact us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
