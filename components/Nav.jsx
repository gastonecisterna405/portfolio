'use client'

import { useState, useEffect } from 'react'
import { useLang } from './LangProvider'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Nav() {
  const { lang, setLang, t } = useLang()
  const [dark, setDark]         = useState(false)
  const [active, setActive]     = useState('')
  const [open, setOpen]         = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const sections = t.nav.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }) },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [t.nav])

  useEffect(() => {
    let raf
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const scrolled = window.scrollY
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? scrolled / max : 0)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <nav className={`nav${open ? ' nav--open' : ''}`}>
      <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="nav__inner container">
        <button className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          G.C.
        </button>
        <ul className="nav__links">
          {t.nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav__link${active === id ? ' nav__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav__actions">
          <button
            className="nav__lang-btn"
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button className="nav__theme-btn" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
            {dark ? '○' : '●'}
          </button>
          <button
            className="nav__hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open && (
        <div className="nav__mobile">
          {t.nav.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__mobile-link${active === id ? ' nav__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id); setOpen(false) }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
