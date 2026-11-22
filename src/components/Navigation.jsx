import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/help', label: 'Help' },
  { to: '/privacy', label: 'Privacy policy' },
]

export default function Navigation({ footer = false }) {
  return (
    <nav aria-label={footer ? 'Footer navigation' : 'Main navigation'}>
      <ul className={footer ? 'flex flex-wrap gap-x-6 gap-y-3' : 'flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-7'}>
        {links.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink end={end} to={to} className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
