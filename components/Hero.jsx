'use client'

import { useState, useEffect } from 'react'
import { useLang } from './LangProvider'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Hero() {
  const { t, STATIC } = useLang()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let raf
    const onScroll = () => {
      raf = requestAnimationFrame(() => setScrollY(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  const photoY   = scrollY * 0.28
  const contentY = scrollY * 0.10

  return (
    <section className="hero" id="hero">
      <div className="hero__inner container">
        <div
          className="hero__content"
          style={{ transform: `translateY(${contentY}px)`, willChange: 'transform' }}
        >
          <p className="hero__eyebrow">{t.eyebrow}</p>
          <h1 className="hero__name">{STATIC.name}</h1>
          <p className="hero__tagline">{t.tagline}</p>
          <p className="hero__intro">{t.heroIntro}</p>
          <div className="hero__ctas">
            {STATIC.cv && (
              <a href={STATIC.cv} className="btn btn--primary" download>
                {t.btn.downloadCV}
              </a>
            )}
            <button className="btn btn--ghost" onClick={() => scrollTo('projects')}>
              {t.btn.viewProjects}
            </button>
          </div>
        </div>
        <div
          className="hero__photo-wrap"
          style={{ transform: `translateY(${photoY}px)`, willChange: 'transform' }}
        >
          <img src="/photo.jpg" alt="Gastón Cisterna" className="hero__photo" />
        </div>
      </div>
    </section>
  )
}
