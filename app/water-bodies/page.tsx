import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight, MapPin, Droplets, Fish, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Water Bodies of Hungary | Hungary Sport Fishing',
  description:
    'Complete guide to fishing locations in Hungary: Lake Balaton, the Danube, the Tisza, Lake Velence, canals and ponds. Where to fish in Hungary.',
}

const lakes = [
  {
    name: 'Lake Balaton',
    region: 'Transdanubia',
    area: '594 km²',
    depth: 'up to 3.5 m',
    image: '/images/lake-balaton.jpg',
    rating: 5,
    fish: ['Pike', 'Perch', 'Bream', 'Crucian Carp', 'Common Carp'],
    desc: 'The largest lake in Central Europe and a true jewel of Hungary. Balaton is renowned for its trophy pike and perch. The shallow, warm water makes it ideal for a wide variety of fishing methods.',
    tips: 'The best spots are among the reed beds in the western basin. Early morning and evening are the most productive times.',
  },
  {
    name: 'River Danube',
    region: 'Central Hungary',
    area: '417 km within Hungary',
    depth: 'up to 15+ m',
    image: '/images/danube-river.jpg',
    rating: 5,
    fish: ['Catfish', 'Zander', 'Bream', 'Carp', 'Asp'],
    desc: 'The Danube is the lifeblood of Hungary, offering an extraordinary variety of fish. Truly trophy-class catfish exceeding 100 kg inhabit its depths, and spinning for zander and asp is considered among the finest in Europe.',
    tips: 'Fish along shipping lane edges and in sheltered bank bays. Large catfish are most active at night. A licence is required for fishing in navigable zones.',
  },
  {
    name: 'River Tisza',
    region: 'Eastern Hungary',
    area: '596 km within Hungary',
    depth: 'up to 10 m',
    image: '/images/tisza-river.jpg',
    rating: 5,
    fish: ['Catfish', 'Carp', 'Zander', 'Bream', 'Roach'],
    desc: 'The Tisza is the longest river flowing entirely within Hungary and an outstanding venue for large catfish and carp. Its slow current, numerous side-channels and oxbow lakes create perfect conditions for both fish and angler.',
    tips: 'The oxbow lakes along the Tisza are a treasure trove for carp anglers. Fishing licences are available from local angling associations.',
  },
  {
    name: 'Lake Velence',
    region: 'Fejér County',
    area: '26 km²',
    depth: 'up to 1.5 m',
    image: '/images/water-bodies.jpg',
    rating: 4,
    fish: ['Pike', 'Crucian Carp', 'Bream', 'Roach', 'Perch'],
    desc: 'The shallow, warm Lake Velence is ideal for pike and perch fishing among dense reed beds. Located close to Budapest, it makes for a convenient day-trip destination.',
    tips: 'Combine reed-bed fishing with light spinning lures. Spring is the best time for trophy pike.',
  },
  {
    name: 'Fishing Ponds & Canals',
    region: 'Across Hungary',
    area: 'Over 1,000 venues',
    depth: '1–5 m',
    image: '/images/feeder-fishing.jpg',
    rating: 4,
    fish: ['Carp', 'Crucian Carp', 'Bream', 'Rainbow Trout', 'Common Carp'],
    desc: 'Hundreds of fishing ponds exist throughout Hungary, many managed by angling associations and private fisheries. Some specialize in day-ticket catch-and-release fishing, offering excellent sport in well-stocked water.',
    tips: 'Ideal for beginners and family fishing. Strict rules typically apply regarding catch limits and minimum sizes.',
  },
]

const seasons = [
  {
    name: 'Spring',
    months: 'March – May',
    color: 'bg-green-100 text-green-800',
    activity: 'High',
    desc: 'Fish feed actively after winter. Ideal time for pike and carp.',
  },
  {
    name: 'Summer',
    months: 'June – August',
    color: 'bg-amber-100 text-amber-800',
    activity: 'Moderate',
    desc: 'Fish move to deeper, cooler water. Best results early morning and evening.',
  },
  {
    name: 'Autumn',
    months: 'September – November',
    color: 'bg-orange-100 text-orange-800',
    activity: 'Very high',
    desc: 'The best season of all. Fish feed heavily before winter. Expect trophy catches.',
  },
  {
    name: 'Winter',
    months: 'December – February',
    color: 'bg-blue-100 text-blue-800',
    activity: 'Low',
    desc: 'Fish are slow and lethargic. Best suited to experienced anglers using passive methods.',
  },
]

export default function WaterBodiesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="/images/water-bodies.jpg"
          alt="Water bodies of Hungary"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Water Bodies</span>
          </nav>
          <span className="inline-block bg-accent/90 text-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Location guide
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">
            Water Bodies of Hungary
          </h1>
          <p className="text-white/80 text-xl max-w-2xl leading-relaxed">
            A detailed guide to the best fishing spots - from Lake Balaton to the quiet ponds of the Hungarian plain.
          </p>
        </div>
      </section>

      {/* SEASON GUIDE */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Seasonal calendar</h2>
            <p className="text-muted-foreground">When is the best time to fish in Hungary?</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seasons.map((s) => (
              <div key={s.name} className="bg-card rounded-xl p-5 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{s.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.color}`}>
                    {s.activity}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs font-medium mb-2">{s.months}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WATER BODIES GUIDE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-3">Best fishing locations</h2>
            <div className="w-16 h-1 bg-accent rounded" />
          </div>

          <div className="flex flex-col gap-12">
            {lakes.map((lake, i) => (
              <article
                key={lake.name}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
              >
                <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
                    <Image src={lake.image} alt={lake.name} fill className="object-cover" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-1">
                      {[...Array(lake.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                      {[...Array(5 - lake.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-white/40" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-3 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-accent font-semibold text-sm">{lake.region}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-foreground mb-3">{lake.name}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Droplets className="w-4 h-4 text-primary" />
                      <span>Area: <strong className="text-foreground">{lake.area}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Droplets className="w-4 h-4 text-primary" />
                      <span>Depth: <strong className="text-foreground">{lake.depth}</strong></span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{lake.desc}</p>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Fish className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Main fish species</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {lake.fish.map((f) => (
                        <span key={f} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/8 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong className="text-primary">Tip:</strong> {lake.tips}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PERMITS INFO */}
      <section className="py-16 bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white mb-4">Licences and regulations</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                To fish in Hungary you need a state fishing licence and, in most cases, a separate permit from the local angling association that manages the specific water body.
              </p>
              <ul className="space-y-3">
                {[
                  'State fishing licence (mandatory for all anglers)',
                  'Permit from the local angling association',
                  'Observe closed seasons for spawning fish',
                  'Minimum size limits apply for each species',
                  'Daily catch limits must be respected',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-semibold text-white mb-4">Ready to explore?</h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Before you head out, we recommend familiarising yourself with the fish species and the rules that apply to each one.
              </p>
              <Link
                href="/fish-species"
                className="inline-flex items-center gap-2 bg-accent text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Fish species <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
