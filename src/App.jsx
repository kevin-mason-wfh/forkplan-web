import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import HelpSupport from './pages/HelpSupport'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      target?.scrollIntoView()
      if (hash === '#main-content') target?.focus({ preventScroll: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <div className="min-h-screen">
      <a className="skip-link" href={`#${pathname}#main-content`}>Skip to content</a>
      <Header />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<section className="container-page py-24"><h1 className="page-title">Page not found</h1><p className="mt-4">Let’s get you back to the table.</p><Link className="text-link mt-6 inline-block" to="/">Return home</Link></section>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
