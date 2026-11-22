import { Link } from 'react-router-dom'
import { APP_STORE_URL } from '../utils/constants'

const features = [
  { icon: '✳', title: 'Make a little plan', text: 'Bring your meal ideas together and make space for the week ahead.' },
  { icon: '▦', title: 'Know what you have', text: 'Keep your pantry in mind when deciding what to make next.' },
  { icon: '♡', title: 'Enjoy the everyday', text: 'Spend less time wondering what’s for dinner and more time enjoying it.' },
]

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-forest text-white">
        <div className="container-page grid items-center gap-12 py-16 sm:py-24 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">A fresh take on meal planning</p>
            <h1 className="mt-5 max-w-xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Make room for <em className="font-normal text-lime">good food.</em></h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/80">A little more plan, a lot less mealtime stress. Meet ForkPlan, your companion for making meals feel simpler.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button button-light" to={{ pathname: '/', hash: '#download' }}>Meet ForkPlan <span aria-hidden="true">↗</span></Link>
              <Link className="button border border-white/40 hover:bg-white/10" to="/help">Explore help</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md rounded-[3rem] bg-[#bdd69d] p-8 sm:p-12" aria-hidden="true">
            <div className="absolute -left-6 top-14 h-24 w-24 rounded-full bg-lime/60" />
            <div className="relative mx-auto max-w-[240px] rounded-[2rem] border-8 border-forest bg-cream p-5 text-forest shadow-xl">
              <div className="mx-auto mb-7 h-1.5 w-16 rounded-full bg-forest" />
              <p className="text-xs font-semibold text-leaf">YOUR WEEK, SORTED</p>
              <p className="mt-2 font-serif text-3xl">Good food<br />starts here.</p>
              <div className="mt-6 rounded-2xl bg-lime p-4"><span className="text-3xl">✳</span><p className="mt-2 text-sm font-bold">A little inspiration</p><p className="mt-1 text-xs">for the days ahead</p></div>
              <div className="mt-4 h-3 w-3/4 rounded-full bg-forest/10" />
              <div className="mt-2 h-3 w-1/2 rounded-full bg-forest/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28" aria-labelledby="features-title">
        <p className="eyebrow">Good food, made simpler</p>
        <div className="mt-4 grid gap-5 md:grid-cols-2 md:items-end">
          <h2 id="features-title" className="page-title max-w-lg">A little structure goes a long way.</h2>
          <p className="max-w-md leading-7 text-forest/75 md:justify-self-end">From the first idea to the final bite, make a little more room for the things you love.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((feature) => <article key={feature.title} className="rounded-3xl bg-white p-7">
            <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-2xl">{feature.icon}</span>
            <h3 className="mt-7 font-serif text-2xl">{feature.title}</h3>
            <p className="mt-3 leading-7 text-forest/75">{feature.text}</p>
          </article>)}
        </div>
      </section>

      <section className="bg-[#eaf0df] py-20 sm:py-24" aria-labelledby="screenshots-title">
        <div className="container-page">
          <p className="eyebrow">A peek inside</p>
          <h2 id="screenshots-title" className="page-title mt-4">Your kitchen, a little more organized.</h2>
          <p className="mt-4 max-w-xl leading-7 text-forest/75">A look at ForkPlan is coming soon. App screenshots will be added here.</p>
          {/* TODO: Add app screenshots here */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {['Plan', 'Discover', 'Pantry', 'Enjoy'].map((label, index) => <div key={label} className="flex aspect-[4/5] flex-col justify-between rounded-3xl border border-dashed border-leaf/40 bg-white/60 p-5"><span className="text-sm font-bold text-leaf">0{index + 1}</span><div><p className="font-serif text-2xl">{label}</p><p className="mt-1 text-xs text-forest/70">Screenshot coming soon</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="download" className="container-page py-20 sm:py-28">
        <div className="rounded-[2rem] bg-lime px-7 py-12 text-center sm:px-14 sm:py-16">
          <p className="eyebrow">A better kind of busy</p>
          <h2 className="page-title mx-auto mt-4 max-w-xl">Ready to make meals feel easier?</h2>
          <p className="mx-auto mt-4 max-w-md leading-7 text-forest/75">{APP_STORE_URL ? 'Get ForkPlan on the App Store and start planning your next meal.' : 'ForkPlan is coming to the App Store. Stay tuned for the download link.'}</p>
          {APP_STORE_URL ? <a href={APP_STORE_URL} className="button button-dark mt-8">Download on the App Store <span aria-hidden="true">↗</span></a> : <span className="button mt-8 bg-forest/10">App Store link coming soon</span>}
          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm"><Link className="text-link" to="/help">Visit help & support</Link><Link className="text-link" to="/privacy">Read our privacy policy</Link></div>
        </div>
      </section>
    </>
  )
}
