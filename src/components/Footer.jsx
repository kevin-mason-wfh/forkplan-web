import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import { SUPPORT_EMAIL } from '../utils/constants'

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-2">
        <div>
          <Link to="/" className="text-2xl font-bold">ForkPlan<span className="text-lime">.</span></Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">A little more plan, a lot less mealtime stress.</p>
        </div>
        <div className="space-y-5 md:justify-self-end">
          <Navigation footer />
          <p className="text-sm text-white/75">Support: <a className="underline underline-offset-4 hover:text-lime" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> {SUPPORT_EMAIL === 'support@example.com' && <span>(placeholder)</span>}</p>
        </div>
      </div>
      <div className="container-page border-t border-white/15 py-5 text-xs text-white/70">© {new Date().getFullYear()} ForkPlan. All rights reserved.</div>
    </footer>
  )
}
