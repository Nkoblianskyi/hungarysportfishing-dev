import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fish Species of Hungary | Hungary Sport Fishing',
  description:
    'Detailed profiles of freshwater fish in Hungary: carp, pike, catfish, zander, bream and more. Habits, habitat, fishing seasons and record sizes.',
}

const species = [
  {
    name: 'Common Carp',
    latin: 'Cyprinus carpio',
    image: '/images/species-carp.jpg',
    category: 'Coarse fish',
    categoryColor: 'bg-green-100 text-green-700',
    maxWeight: '40+ kg',
    maxLength: 'up to 120 cm',
    difficulty: 'Moderate',
    desc: 'The common carp is the undisputed king of Hungarian fishing. Large, powerful and intelligent, it demands a skilled approach. Both wild and farmed carp thrive in Hungary, with stocked waters producing truly impressive specimens.',
    habitat: 'Lakes, ponds and slow river sections with soft bottom',
    season: 'Year-round, peak in spring and autumn',
    bait: 'Boilies, sweetcorn, pellets, worms',
    record: 'Hungarian record: over 35 kg',
  },
  {
    name: 'Northern Pike',
    latin: 'Esox lucius',
    image: '/images/species-pike.jpg',
    category: 'Predator',
    categoryColor: 'bg-red-100 text-red-700',
    maxWeight: '25+ kg',
    maxLength: 'up to 150 cm',
    difficulty: 'High',
    desc: 'The pike is the premier freshwater predator of Hungarian waters. Fast, aggressive and unpredictable, it is a prized trophy for spinning anglers. Lake Balaton is home to particularly large specimens, which are strictly protected by fishing regulations.',
    habitat: 'Lakes, river bays and reed-bed margins',
    season: 'Spring and autumn; avoid the winter spawning period',
    bait: 'Crankbaits, large soft plastics, live bait',
    record: 'Trophy specimens from 15 kg',
  },
  {
    name: 'European Catfish',
    latin: 'Silurus glanis',
    image: '/images/species-catfish.jpg',
    category: 'Predator',
    categoryColor: 'bg-red-100 text-red-700',
    maxWeight: '100+ kg',
    maxLength: 'up to 3 m',
    difficulty: 'Very high',
    desc: 'The catfish is the largest freshwater fish in Hungary and across Europe. The Danube and Tisza are home to legendary giants exceeding 100 kg. Targeting catfish is no ordinary fishing trip — it is a true adventure.',
    habitat: 'Deep holes in large rivers and sunken structures',
    season: 'May to October, peak on summer nights',
    bait: 'Large soft plastics, live bait, dead fish',
    record: 'Official Hungarian record: over 100 kg',
  },
  {
    name: 'Zander',
    latin: 'Sander lucioperca',
    image: '/images/species-zander.jpg',
    category: 'Predator',
    categoryColor: 'bg-red-100 text-red-700',
    maxWeight: '12+ kg',
    maxLength: 'up to 100 cm',
    difficulty: 'High',
    desc: 'Zander is the finest table fish among Hungarian species. Its delicate, flavoursome flesh combined with its sporting character makes it a dream catch. It is particularly well targeted on the Danube and larger Hungarian lakes using jigs and small crankbaits.',
    habitat: 'Large rivers and lakes with clear water',
    season: 'April to October; observe the closed spawning season',
    bait: 'Jig heads, small soft plastics, crankbaits',
    record: 'Record specimens over 10 kg from the Danube',
  },
  {
    name: 'Common Bream',
    latin: 'Abramis brama',
    image: '/images/water-bodies.jpg',
    category: 'Coarse fish',
    categoryColor: 'bg-green-100 text-green-700',
    maxWeight: '8+ kg',
    maxLength: 'up to 80 cm',
    difficulty: 'Moderate',
    desc: 'Bream is a popular target for feeder and float anglers. Found throughout Hungary in rivers and lakes, it forms large shoals and responds well to groundbait. Particularly popular with beginners due to its willingness to feed.',
    habitat: 'Slow rivers, lakes and canals with a muddy bottom',
    season: 'April to October, peak in autumn',
    bait: 'Worms, maggots, cereals, groundbait',
    record: 'Specimens over 5 kg are not uncommon',
  },
  {
    name: 'Perch',
    latin: 'Perca fluviatilis',
    image: '/images/spinning.jpg',
    category: 'Predator',
    categoryColor: 'bg-red-100 text-red-700',
    maxWeight: '3+ kg',
    maxLength: 'up to 60 cm',
    difficulty: 'Low',
    desc: 'The boldly striped perch is an excellent species for light spinning and a perfect introduction to predator fishing. An aggressive hunter that attacks small lures, it is widely distributed in Lake Balaton and smaller rivers.',
    habitat: 'Lakes, rivers and bank margins with snags',
    season: 'Most active in spring and autumn',
    bait: 'Small soft plastics, mini crankbaits, twisters',
    record: 'Rewarding trophies up to 1–2 kg',
  },
]

export default function FishSpeciesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="/images/fish-species.jpg"
          alt="Fish species of Hungary"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Fish Species</span>
          </nav>
          <span className="inline-block bg-accent/90 text-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Angler&apos;s reference
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">
            Fish Species of Hungary
          </h1>
          <p className="text-white/80 text-xl max-w-2xl leading-relaxed">
            Detailed profiles of the freshwater fish found in Hungarian waters: behaviour, habitat, seasons and fishing methods.
          </p>
        </div>
      </section>

      {/* FILTER TAGS */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 items-center">
          <span className="text-sm font-semibold text-foreground">Jump to species:</span>
          {species.map((s) => (
            <a
              key={s.name}
              href={`#${s.latin.toLowerCase().replace(' ', '-')}`}
              className="text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 px-3 py-1 rounded-full border border-border transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </section>

      {/* SPECIES CARDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {species.map((s, i) => (
            <article
              key={s.name}
              id={s.latin.toLowerCase().replace(' ', '-')}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
            >
              <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md">
                  <Image src={s.image} alt={s.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.categoryColor}`}>
                      {s.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`lg:col-span-3 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-muted-foreground text-sm italic mb-1">{s.latin}</p>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-2">{s.name}</h2>
                <div className="w-12 h-1 bg-primary rounded mb-4" />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Max weight', value: s.maxWeight },
                    { label: 'Max length', value: s.maxLength },
                    { label: 'Difficulty', value: s.difficulty },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-secondary rounded-lg p-3 text-center">
                      <div className="font-semibold text-foreground text-sm">{stat.value}</div>
                      <div className="text-muted-foreground text-xs mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Habitat', value: s.habitat },
                    { label: 'Fishing season', value: s.season },
                    { label: 'Baits & lures', value: s.bait },
                    { label: 'Records', value: s.record },
                  ].map((item) => (
                    <div key={item.label} className="border border-border rounded-lg p-3">
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Want more tips?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Read our blog — practical advice, tactics and fishing stories from experienced anglers.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-accent text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Go to the blog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
