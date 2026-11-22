import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import { APP_STORE_URL } from '../utils/constants'

export default function Header() {
  return (
    <header className="border-b border-forest/10 bg-cream">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-forest" aria-label="ForkPlan home">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="" className="h-10 w-10" />
          ForkPlan<span className="text-leaf">.</span>
        </Link>
        <div className="order-3 w-full sm:order-none sm:w-auto"><Navigation /></div>
        {APP_STORE_URL ? <a className="button button-dark text-sm" href={APP_STORE_URL}>Download app <span aria-hidden="true">↗</span></a> : <span className="rounded-full bg-forest/5 px-4 py-2 text-xs font-semibold text-forest">App coming soon</span>}
      </div>
    </header>
  )
}
