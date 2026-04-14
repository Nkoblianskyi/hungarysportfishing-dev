import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, ArrowLeft } from 'lucide-react'

const articles: Record<string, {
  title: string
  metaDesc: string
  category: string
  image: string
  imageAlt: string
  body: React.ReactNode
}> = {
  'spring-carp-fishing-tactics': {
    title: 'Spring Carp Fishing: The Best Tactics for Hungarian Waters',
    metaDesc: 'Spring is the golden season for carp in Hungary. Learn the best tactics, locations and bait choices to make the most of it.',
    category: 'Tactics',
    image: '/images/carp-fishing.jpg',
    imageAlt: 'Spring carp fishing on a Hungarian lake',
    body: (
      <div className="article-body">
        <h2>Why Spring is the Best Season for Carp</h2>
        <p>
          As water temperatures rise above 10°C in late March and April, common carp in Hungarian lakes and rivers enter an intense feeding phase to recover lost condition after winter and prepare for spawning. This window - typically from mid-April through to late May - represents the single best period of the year to target large carp.
        </p>
        <p>
          The fish move into shallower, warmer water first. South-facing bays and margins that receive the most sunlight are the obvious starting points. Look for areas with dark silt bottoms, which absorb heat faster than gravel or sand.
        </p>
        <h2>Reading the Water in Spring</h2>
        <p>
          One of the most reliable signs of spring carp activity is visual: fish rolling or basking near the surface in the early morning sun. Walk the banks before setting up and take the time to observe. A carp spotted sunning itself in a shallow bay at 7am is almost certainly a catchable fish by midday.
        </p>
        <p>
          Plateaus and bars at 1–2 metres depth are prime spring feeding areas, particularly where silt meets gravel. These transition zones concentrate natural food - bloodworm, snails, and small invertebrates - which carp are actively rooting for in spring.
        </p>
        <h2>Bait Selection for Spring</h2>
        <p>
          In cooler spring water, high-protein baits outperform high-carbohydrate mixes. Fishmeal-based boilies in the 15–18mm range are an excellent starting point. Natural flavours - krill, squid, and shellfish - tend to work particularly well in the early season when water is still relatively cold and clear.
        </p>
        <p>
          Do not overload your swim with bait. In spring, carp are feeding selectively rather than gorging. A single PVA bag of crushed boilies and pellets with each cast is more effective than a full spread of loose feed. Once you start catching, you can gradually increase the amount of bait in the swim.
        </p>
        <h2>Rig Choices</h2>
        <p>
          Keep rigs simple and reliable. A basic hair rig with a size 6–8 wide gape hook is hard to beat. The pop-up rig - a buoyant bait balanced just off the bottom - can be particularly effective in spring when carp are feeding confidently and moving with purpose over the lakebed.
        </p>
        <h2>Practical Tips</h2>
        <ul>
          <li>Fish during the warmest part of the day in early spring - afternoon sessions outperform dawn sessions until water temperatures stabilise above 14°C.</li>
          <li>Keep noise and bank disturbance to an absolute minimum - carp in shallow spring water spook very easily.</li>
          <li>Use fluorocarbon hooklinks in clear spring conditions for better concealment.</li>
          <li>Pre-bait regularly if you have access to a specific swim - even small amounts placed consistently over several days before your session can transform results.</li>
        </ul>
      </div>
    ),
  },

  'crankbaits-pike-balaton': {
    title: 'Top 5 Crankbaits for Pike Fishing on Lake Balaton',
    metaDesc: 'Which crankbait style works best in the shallow reed-lined bays of Balaton? An in-depth look at the key characteristics and conditions for each.',
    category: 'Tackle',
    image: '/images/species-pike.jpg',
    imageAlt: 'Pike caught on Lake Balaton',
    body: (
      <div className="article-body">
        <h2>Why Crankbaits Work So Well on Balaton</h2>
        <p>
          Lake Balaton is a vast, relatively shallow water body with extensive reed margins, gravel bars and submerged weed beds. These features make it perfect habitat for pike - and ideal conditions for crankbait fishing. The ability to cover large areas quickly and trigger reaction strikes from ambush predators gives crankbaits a clear advantage over slower presentations.
        </p>
        <h2>1. Shallow-Running Minnow Style</h2>
        <p>
          In the reed-lined bays of Balaton that rarely exceed 1.5 metres in depth, a slim shallow-running minnow crankbait running at 30–60cm is often the most productive option. The tight, high-frequency wobble mimics small roach and rudd - the pike&apos;s preferred prey on Balaton. Work it with a steady retrieve broken by occasional pauses.
        </p>
        <h2>2. Jointed Crankbait</h2>
        <p>
          The S-motion of a jointed crankbait is particularly effective in colder water when pike are less willing to chase. The exaggerated swimming action triggers strikes from fish that would ignore a standard minnow. Jointed crankbaits are especially productive in autumn when Balaton pike are actively feeding ahead of winter.
        </p>
        <h2>3. Diving Crankbait (2–3m)</h2>
        <p>
          Along the deeper drop-offs and rocky bars on the northern shore of Balaton, a medium-diving crankbait running at 2–3 metres will intercept pike that have moved off the margins to follow baitfish. Deflecting the lure off rocks and gravel is one of the most reliable pike-triggering techniques available on this section of the lake.
        </p>
        <h2>4. Rattling Crankbait</h2>
        <p>
          In coloured water or on overcast days with low light penetration, a crankbait with an internal rattle helps pike locate the lure. The additional sound and vibration is particularly useful in the stained water that can occur around the reed beds after wind-driven surface mixing.
        </p>
        <h2>5. Suspending Crankbait</h2>
        <p>
          The suspending crankbait - one that hangs motionless in the water column when the retrieve is paused - is arguably the deadliest cold-water pike lure in existence. Work it with a twitch-pause-twitch retrieve. On Balaton, the strike almost always comes on the pause.
        </p>
        <h2>General Balaton Pike Tips</h2>
        <ul>
          <li>Pike on Balaton are most active from September through to mid-November, and again briefly in March–April.</li>
          <li>Focus on the first and last two hours of daylight for the most aggressive feeding activity.</li>
          <li>Use a short wire or heavy fluorocarbon trace - Balaton pike have sharp teeth and the clear water demands a relatively fine presentation.</li>
          <li>Practise catch and release where possible - Balaton pike stocks benefit greatly from it.</li>
        </ul>
      </div>
    ),
  },

  'feeder-fishing-beginners-guide': {
    title: 'Feeder Fishing for Beginners: A Step-by-Step Guide',
    metaDesc: 'A complete beginner guide to feeder fishing - from choosing the right rod and reel to setting up a running rig and selecting the right groundbait.',
    category: 'Beginners',
    image: '/images/feeder-fishing.jpg',
    imageAlt: 'Feeder fishing setup on a Hungarian lake',
    body: (
      <div className="article-body">
        <h2>What is Feeder Fishing?</h2>
        <p>
          Feeder fishing is a method where a small wire or plastic cage - the feeder - is filled with groundbait or loose feed and attached to your line above the hook. When cast, the feeder deposits bait precisely where your hook bait lands, creating a concentrated food source that draws fish to your swim. It is one of the most effective methods for bream, tench, roach, and smaller carp on still and slow-moving waters.
        </p>
        <h2>Choosing the Right Rod</h2>
        <p>
          A dedicated feeder rod is typically 3–3.6 metres long with a sensitive quiver tip - a flexible extension at the top section that acts as a visual bite indicator. For lake fishing up to 50 metres range, a medium-action feeder rod with interchangeable tips of 1, 2, and 3 oz (28–85g) covers most situations. Avoid using a general carp rod - the sensitivity of a purpose-built quiver tip makes a significant difference when bites are subtle.
        </p>
        <h2>Reel and Line</h2>
        <p>
          A medium-sized fixed-spool reel in the 3000–4000 size range is ideal. Spool it with 6–10 lb monofilament main line. Monofilament has natural stretch that acts as a shock absorber when a fish makes a sudden run - important when you are fishing relatively light. Attach a 30cm fluorocarbon hooklink of 4–6 lb as a less visible connection between your line and hook.
        </p>
        <h2>Setting Up the Running Rig</h2>
        <p>
          The most beginner-friendly feeder rig is the running rig. Thread your main line through a small plastic or rubber sleeve, then thread it through the feeder swivel. Tie on a small barrel swivel as a stop. Attach a 25–35cm hooklink to the bottom eye of the barrel swivel. Tie on a size 12–16 hook. This rig allows fish to pull line through the feeder freely, reducing the chance of dropped bites.
        </p>
        <h2>Groundbait and Hook Bait</h2>
        <p>
          For a first session, use a simple commercial groundbait mixed to a firm, slightly damp consistency that holds together in the feeder but breaks down quickly on the bottom. Good hook baits to start with are maggots (2 on the hook), corn, or small worm sections - all of which are widely available and consistently effective for the species you are likely to encounter.
        </p>
        <h2>Casting and Fishing</h2>
        <p>
          Choose a spot at a comfortable casting distance - 20–30 metres is ideal to start. Cast to exactly the same spot every time to concentrate bait in a small area. Place the rod in a rod rest, engage the reel, and watch the quiver tip. A typical bite appears as a slow pull or a sharp knock on the tip. Strike with a smooth sideways sweep of the rod.
        </p>
        <h2>Tips for Your First Session</h2>
        <ul>
          <li>Cast frequently in the first hour to build up a bed of bait - every 3–5 minutes is not too often.</li>
          <li>Once bites start coming, slow down casting frequency to avoid disturbing feeding fish.</li>
          <li>Start with a lighter feeder (15–20g) and increase weight only if drift or undertow is moving your rig.</li>
          <li>Keep a landing net close - even modest-sized bream can be surprisingly difficult to land without one.</li>
        </ul>
      </div>
    ),
  },

  'early-morning-fishing': {
    title: 'Early Morning Fishing: Why the First Two Hours Are Everything',
    metaDesc: 'Experienced anglers know it well - an early start is the key to success. Find out why fish are most active at dawn and how to make the most of it.',
    category: 'Tips',
    image: '/images/blog-morning.jpg',
    imageAlt: 'Misty early morning on a Hungarian lake',
    body: (
      <div className="article-body">
        <h2>The Dawn Window</h2>
        <p>
          The first two hours after sunrise are, for most freshwater species, the single most productive feeding period of the day. This is not a myth or an old angler&apos;s tale - it is backed by decades of catch records and has a straightforward biological explanation. Understanding why it happens gives you a meaningful edge on the water.
        </p>
        <h2>Light, Temperature and Fish Behaviour</h2>
        <p>
          At dawn, light levels are low and water temperatures are at their coolest following the night. For predatory fish such as pike and zander, low light reduces their visibility to prey, making ambush far easier. This is why spinning and lure fishing almost always produces more in the first and last hours of daylight than at midday.
        </p>
        <p>
          For bottom-feeding species like carp and bream, the early morning period coincides with natural feeding rhythms built up over millions of years. Invertebrates and natural food sources are most abundant and active in the margins and on the lakebed in the hours around dawn - and fish have evolved to exploit this.
        </p>
        <h2>Water Oxygen Levels</h2>
        <p>
          Dissolved oxygen in still waters typically peaks in the early morning as a result of overnight respiration and the absence of photosynthesis during the night hours. Higher oxygen levels increase fish metabolism and appetite. As the day progresses and photosynthesis resumes, oxygen levels fluctuate - and fish feeding activity often follows.
        </p>
        <h2>Minimal Disturbance</h2>
        <p>
          On popular Hungarian lakes and rivers, early morning simply means fewer anglers, fewer boats, and less bank disturbance. On hard-fished waters, this alone can make a significant difference. Fish that have been scared from the margins during the day will return to feed confidently in the calm of early morning.
        </p>
        <h2>How to Make the Most of the Dawn Session</h2>
        <p>
          Arrive at least 30 minutes before first light. Set up in the dark. If you arrive when fish are already feeding and immediately begin making noise and splashing leads into the water, you have already wasted the best part of the session.
        </p>
        <ul>
          <li>Pre-bait the swim the evening before where possible - fish will already be feeding when you arrive.</li>
          <li>Use a head torch with a red light setting to preserve your night vision and avoid spooking fish.</li>
          <li>For lure fishing, start with darker, more visible patterns - black, purple and dark blue work well in low light conditions before the sun rises.</li>
          <li>In summer, be prepared to switch tactics as the sun climbs and fish move to deeper, cooler water - the morning window can close quickly.</li>
          <li>In autumn and spring, the productive window is longer - fish continue feeding into mid-morning as temperatures remain comfortable.</li>
        </ul>
        <h2>When Evening Outperforms Morning</h2>
        <p>
          In high summer when water temperatures exceed 22°C, the evening session can actually outperform morning. Fish that have been inactive during the heat of the day often begin a second feeding spell in the last 90 minutes of light. On Lake Balaton in July and August, the evening rise is as reliable as any dawn session.
        </p>
      </div>
    ),
  },

  'catfish-rigs-tisza': {
    title: 'Catfish Rigs for the River Tisza',
    metaDesc: 'Hunting for giant Wels catfish on the River Tisza requires dedicated tackle and tactics. A complete guide to rigs, bait and the best stretches.',
    category: 'Tactics',
    image: '/images/species-catfish.jpg',
    imageAlt: 'Giant Wels catfish caught on the River Tisza',
    body: (
      <div className="article-body">
        <h2>The Tisza and Its Catfish</h2>
        <p>
          The River Tisza is home to one of the largest and most established populations of Wels catfish in Central Europe. The river&apos;s slow deep stretches, extensive flood banks, and warm summer water temperatures create ideal conditions for catfish to reach exceptional sizes. Fish exceeding 100kg have been recorded, and catches of 50–70kg are not uncommon for experienced catfish anglers targeting the right sections in peak season.
        </p>
        <h2>Understanding Catfish Behaviour on the Tisza</h2>
        <p>
          Wels catfish on the Tisza are largely nocturnal hunters, particularly in summer. They spend the day in the deepest available holes - bends in the river where the current has scoured the bottom to depths of 6–12 metres are the classic holding spots. At night they move into shallower, marginal areas to hunt for frogs, small mammals, large fish and crayfish.
        </p>
        <p>
          Water temperature is the key variable. Catfish become highly active above 20°C and the peak season on the Tisza runs from late June through to late September. Below 15°C activity drops sharply, though fish can still be caught in the deep holding spots with a slow, static presentation.
        </p>
        <h2>Recommended Rigs</h2>
        <p>
          <strong>The paternoster rig</strong> is the most widely used catfish rig on the Tisza. A heavy running sinker (150–300g depending on current) sits on the main line, stopped by a swivel. A 50–80cm hooklink of 80–120lb monofilament or steel-coated braid connects to one or two large wide-gape hooks in size 4/0–8/0. The paternoster presents the bait just off the bottom in the strike zone while keeping the terminal tackle pinned in strong current.
        </p>
        <p>
          <strong>The float rig</strong> is exceptionally effective for fishing catfish in marginal areas at night. A large pike float set to fish the bait 30–60cm off the bottom, combined with a slow drift downstream along the reed margins, covers water efficiently and allows natural bait presentation. The visual take on a float in a head torch beam is one of the most dramatic moments in Hungarian fishing.
        </p>
        <h2>Bait for Tisza Catfish</h2>
        <p>
          Large live or dead baits are the first choice - roach, bream and chub in the 300–700g range are standard. Dead baits can be enhanced with a cut to release scent into the current. Squid is a highly effective alternative and has the practical advantage of staying on the hook better than soft fish baits in strong current.
        </p>
        <p>
          For surface and night fishing in summer, worm clusters - a large ball of several dozen worms - produce excellent results along the margins. The scent trail in moving water can attract catfish from considerable distances.
        </p>
        <h2>Best Sections of the Tisza for Catfish</h2>
        <ul>
          <li>The deep bends between Szolnok and Csongrád hold the highest concentration of large catfish.</li>
          <li>Below Tiszafüred, the combination of deep pools and extensive backwaters provides excellent habitat.</li>
          <li>The confluence with the Maros near Szeged is a renowned hotspot, particularly in late summer.</li>
        </ul>
        <h2>Tackle and Safety</h2>
        <p>
          Use a minimum 80lb braid main line. A robust carp or specialist catfish rod rated to 200g casting weight is needed to handle both the heavy terminal tackle and the run of a large fish. Always use a short wire or heavy-coated hooklink - the rough mouth of a large Wels will quickly destroy standard fluorocarbon.
        </p>
        <p>
          Night fishing on the Tisza requires care. Banks can be slippery and unstable in the dark. Always fish with a partner if possible, wear a life jacket when boating, and inform someone of your location before an overnight session.
        </p>
      </div>
    ),
  },

  'fishing-knots-essential': {
    title: 'Fishing Knots: 6 Essential Knots Every Angler Must Know',
    metaDesc: 'A reliable knot is the difference between a landed fish and a lost one. Here are the 6 most important fishing knots with step-by-step instructions.',
    category: 'Skills',
    image: '/images/blog-knots.jpg',
    imageAlt: 'Tying a fishing knot with monofilament line',
    body: (
      <div className="article-body">
        <h2>Why Knots Matter</h2>
        <p>
          The weakest point in any fishing setup is the knot. A correctly tied knot in quality monofilament retains 90–95% of the line&apos;s stated breaking strain. A poorly tied or incorrect knot can reduce this to 50% or less - meaning you are fishing with half the strength you think you have. On Hungarian waters where large carp, catfish and pike are realistic targets, a failed knot at the critical moment is a painful experience.
        </p>
        <h2>1. The Palomar Knot</h2>
        <p>
          The Palomar is arguably the strongest and most reliable all-round fishing knot, and it is fast to tie. Double 15cm of line and pass the loop through the hook eye. Tie a simple overhand knot with the doubled line, leaving a large loop hanging. Pass the loop over the hook. Wet the knot and pull tight. The Palomar tests to above 95% line strength consistently and works equally well with monofilament, fluorocarbon and braid.
        </p>
        <h2>2. The Improved Clinch Knot</h2>
        <p>
          One of the most widely used knots in freshwater fishing. Thread the line through the hook eye, double back and make 5–7 wraps around the main line. Pass the tag end back through the small loop directly above the eye, then through the large loop just created. Wet and pull tight. The improved clinch is reliable, quick to tie, and ideal for attaching hooks and swivels to monofilament hooklinks up to 15 lb.
        </p>
        <h2>3. The Grinner Knot (Uni Knot)</h2>
        <p>
          The Grinner is the preferred knot for attaching hooks and swivels to heavier monofilament. Thread the line through the eye, fold it back parallel with the main line, and form a loop. Make 5–6 turns of the tag end around both strands inside the loop. Pull the tag end to tighten the coils, then slide the completed knot down to the eye. The Grinner maintains strength in heavy mono where clinch knots can slip.
        </p>
        <h2>4. The Blood Knot</h2>
        <p>
          For joining two lines of similar diameter - connecting a hooklink to a main line, or joining two sections of monofilament. Overlap the two lines for 10cm. Wrap one tag end around the other line 5 times and pass it back through the central gap. Repeat with the other tag end in the opposite direction. Wet thoroughly and pull both main lines simultaneously until the coils slide together. Trim tags.
        </p>
        <h2>5. The Loop-to-Loop Connection</h2>
        <p>
          The quickest method for connecting and changing hooklinks, particularly when feeder fishing or carp fishing with pre-tied rigs. Form a small overhand loop at the end of your main line using a loop knot. Form an identical loop at the end of your hooklink. Pass the hooklink loop through the main line loop, then pass the hook end of the hooklink through the hooklink loop and pull tight. This creates a fast, reliable connection that can be changed in seconds.
        </p>
        <h2>6. The Half-Blood Knot for Braid</h2>
        <p>
          Standard knots often slip on braid because the surface is too smooth. For connecting braid to swivels, double the braid and thread both strands through the eye. Make 5–6 turns of both strands around the main braid, pass the doubled end back through the first loop, then through the large loop. Wet with saliva and pull very slowly until the knot beds down. Never jerk a braid knot tight - it will slip.
        </p>
        <h2>Practise Before You Fish</h2>
        <ul>
          <li>Tie each knot at home on spare line until the muscle memory is there - fumbling with a knot in the dark or cold is when mistakes happen.</li>
          <li>Always wet the knot before pulling tight - friction heat weakens line significantly.</li>
          <li>Cut the tag end close but leave 1–2mm - knots can draw under load and a tiny tag prevents slippage.</li>
          <li>Test every knot with a firm steady pull before you cast out.</li>
        </ul>
      </div>
    ),
  },

  'groundbait-bream': {
    title: 'Groundbait for Bream: Mix Recipes and Feeding Techniques',
    metaDesc: 'The right groundbait can completely transform a bream fishing session. Proven mix recipes and strategic feeding approaches for Hungarian still and moving waters.',
    category: 'Beginners',
    image: '/images/blog-tackle.jpg',
    imageAlt: 'Fishing groundbait and tackle preparation',
    body: (
      <div className="article-body">
        <h2>Why Groundbait is Crucial for Bream</h2>
        <p>
          Bream are shoal fish with a highly developed sense of smell. A well-constructed groundbait mix creates a scent plume that travels considerable distances in still or slow-moving water, drawing fish into your swim and holding them there while they feed. Fishing for bream without groundbait on Hungarian lakes is like fishing without a hook - you might get lucky, but you are making the task far harder than it needs to be.
        </p>
        <h2>Understanding What Bream Want</h2>
        <p>
          Bream are bottom feeders with a preference for soft, easily digestible natural food sources: bloodworm, small worms, maggots, and organic silt material. A good bream groundbait should break down slowly into fine particles that create a cloud at the bottom, mimicking the natural stirred-up bottom material that bream associate with safe feeding. It should not contain large hard particles that fill fish up quickly without encouraging continued feeding.
        </p>
        <h2>Basic Bream Groundbait Recipe</h2>
        <p>
          A reliable all-round bream mix consists of: 2 parts fine lake or river breadcrumb, 1 part brown crumb, 1 part fishmeal, and a small quantity of finely ground hemp. Add water gradually and mix thoroughly - the consistency should allow you to form a firm ball that breaks apart on impact with the water and produces a fine cloud of particles on the bottom. This mix works well as a base throughout the season.
        </p>
        <h2>Summer Bream Mix</h2>
        <p>
          In warm water, bream become pickier and more easily satisfied. Reduce the bulk of the mix and increase the attractors: add liquidised maggot or fine crushed hemp to the basic mix, and include a good quantity of live or dead maggots. The increased movement of live maggots in and around the feeder creates a highly visible and stimulating presentation that keeps bream interested and feeding for longer.
        </p>
        <h2>Cold Water Bream Mix</h2>
        <p>
          Below 10°C, bream metabolism slows and a heavy, bulky mix can quickly overfeed the shoal. Switch to a leaner mix: fine continental style groundbait mixed very dry so it barely holds together, with just a small quantity of red maggots or bloodworm added. The aim is to introduce scent and attract fish without offering a large food source. The hook bait - one or two red maggots or a small worm section - becomes the focal point.
        </p>
        <h2>Feeding Strategy</h2>
        <p>
          The traditional approach is to introduce 8–12 balls of groundbait at the start of the session, then top up with 2–3 smaller balls every 20–30 minutes. This maintains a consistent food source without overfeeding. On heavily fished Hungarian lakes where bream have learned to associate excessive feeding with danger, a lighter touch often produces better results - fewer, smaller balls introduced more frequently.
        </p>
        <ul>
          <li>Always mix groundbait at least 15 minutes before use - dry spots in the mix create inconsistent break-up.</li>
          <li>In warm weather, add a small amount of liquid attractant - betaine or molasses - to increase the scent range of your mix.</li>
          <li>Match the colour of your groundbait to the bottom: darker mixes on silt, lighter mixes on gravel or sand.</li>
          <li>If bites stop suddenly, introduce two or three balls immediately - the shoal may simply have moved slightly and needs to be drawn back.</li>
        </ul>
      </div>
    ),
  },
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  if (!article) return {}
  return {
    title: `${article.title} | Hungary Sport Fishing`,
    description: article.metaDesc,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug]
  if (!article) notFound()

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{article.title}</span>
          </nav>
          <span className="inline-block bg-accent/90 text-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
            {article.category}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight text-balance">
            {article.title}
          </h1>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.body}

          <div className="mt-14 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
