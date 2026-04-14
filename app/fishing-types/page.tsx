import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fishing Types in Hungary | Hungary Sport Fishing',
  description:
    'An overview of all popular sport fishing methods in Hungary: carp fishing, spinning, feeder, fly fishing, night fishing and more. Detailed descriptions and tips.',
}

const types = [
  {
    id: 'carp',
    title: 'Carp Fishing',
    subtitle: 'The most popular method',
    image: '/images/carp-fishing.jpg',
    desc: 'Carp fishing is an art of patience and strategy. In Hungary the carp is the most coveted trophy for the majority of anglers. Giants weighing 20–30 kg and more inhabit these waters, making Hungarian fisheries world-famous among carp enthusiasts.',
    details: [
      'Season: year-round, peak in spring and autumn',
      'Tackle: carp rods 3.5–3.75 lb, high-capacity reels, bite alarms',
      'Baits: boilies, sweetcorn, pellets, hemp, tiger nuts',
      'Rigs: hair rig on the bottom, method feeder',
    ],
  },
  {
    id: 'spinning',
    title: 'Spinning',
    subtitle: 'Active predator hunting',
    image: '/images/spinning.jpg',
    desc: 'Spinning in Hungary is an exciting pursuit of pike, zander and perch. Particularly popular on the Danube, Tisza and their tributaries, where strong currents create ideal conditions for predatory fish.',
    details: [
      'Season: spring to autumn, also partially in winter',
      'Tackle: spinning rods 10–50 g, fast reels',
      'Lures: crankbaits, soft plastics, jig heads, spoons',
      'Target species: pike, zander, perch, asp',
    ],
  },
  {
    id: 'feeder',
    title: 'Feeder Fishing',
    subtitle: 'Precision and skill',
    image: '/images/feeder-fishing.jpg',
    desc: 'Feeder fishing is gaining increasing popularity in Hungary thanks to its effectiveness and sporting element. It is a method of precise ground-baiting using a cage feeder, allowing you to fish at various distances and depths.',
    details: [
      'Season: spring to autumn',
      'Tackle: feeder rods 60–150 g, reels, cage feeders',
      'Groundbait: feeder mixes, live components',
      'Target species: bream, crucian carp, roach, carp',
    ],
  },
  {
    id: 'fly',
    title: 'Fly Fishing',
    subtitle: 'An elegant art',
    image: '/images/fly-fishing.jpg',
    desc: 'Fly fishing in Hungary is practised mainly on rivers with clear, cool water. This refined technique demands practice and skill but delivers immense satisfaction from the process itself.',
    details: [
      'Season: spring to autumn',
      'Tackle: fly rods class 5–7, fly lines',
      'Flies: dry flies, wet flies, nymphs, streamers',
      'Target species: trout, grayling, chub',
    ],
  },
  {
    id: 'night',
    title: 'Night Fishing',
    subtitle: 'Trophy fish after dark',
    image: '/images/carp-fishing.jpg',
    desc: 'Night fishing in Hungary is legally permitted on most water bodies with the appropriate licence. It is particularly effective for large carp and catfish, which become noticeably more active after sunset.',
    details: [
      'Season: May to September',
      'Tackle: bite alarms, head torches, bivvy shelter',
      'Tactics: static fishing from the bank overnight',
      'Target species: large carp, catfish, eel',
    ],
  },
  {
    id: 'ice',
    title: 'Ice Fishing',
    subtitle: 'Fishing in every season',
    image: '/images/feeder-fishing.jpg',
    desc: 'Ice fishing is possible in certain winters when water bodies freeze over. This type of fishing requires special caution and preparation but provides a truly unique experience.',
    details: [
      'Season: December to February (when frozen)',
      'Tackle: short winter rods, warm clothing',
      'Small lures and live baits',
      'Target species: perch, roach, crucian carp',
    ],
  },
]

export default function FishingTypesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="/images/fishing-types.jpg"
          alt="Fishing types in Hungary"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Fishing Types</span>
          </nav>
          <span className="inline-block bg-accent/90 text-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Complete guide
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">
            Fishing Types in Hungary
          </h1>
          <p className="text-white/80 text-xl max-w-2xl leading-relaxed">
            From carp to fly fishing - learn everything about the methods and techniques used by anglers on Hungarian waters.
          </p>
        </div>
      </section>

      {/* TYPES ARTICLES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
          {types.map((t, i) => (
            <article
              key={t.id}
              id={t.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}
            >
              <div className={`order-1 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <Image src={t.image} alt={t.title} fill className="object-cover" />
                </div>
              </div>
              <div className={`order-2 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t.subtitle}</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-1 mb-4">{t.title}</h2>
                <div className="w-12 h-1 bg-primary rounded mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">{t.desc}</p>
                <div className="bg-secondary rounded-xl p-5">
                  <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Key information</h3>
                  <ul className="space-y-2">
                    {t.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NEXT CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Find your perfect fishing spot</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Now that you know the methods, discover exactly where to fish in Hungary.
          </p>
          <Link
            href="/water-bodies"
            className="inline-flex items-center gap-2 bg-accent text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Water bodies of Hungary <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
