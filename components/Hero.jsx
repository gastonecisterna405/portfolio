'use client'

import { DATA } from '../data/portfolio'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__eyebrow">{DATA.eyebrow}</p>
          <h1 className="hero__name">{DATA.name}</h1>
          <p className="hero__tagline">{DATA.tagline}</p>
          <p className="hero__intro">{DATA.heroIntro}</p>
          <div className="hero__ctas">
            {DATA.cv && (
              <a href={DATA.cv} className="btn btn--primary" download>
                Download CV
              </a>
            )}
            <button className="btn btn--ghost" onClick={() => scrollTo('projects')}>
              View Projects ↓
            </button>
          </div>
        </div>
        <div className="hero__photo-wrap">
          <img src="/photo.jpg" alt="Gastón Cisterna" className="hero__photo" />
        </div>
      </div>
    </section>
  )
}
