'use client'

import { useState, useEffect } from 'react'
import Reveal from '../components/Reveal'
import { DATA, NAV } from '../data/portfolio'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: 'smooth' })
}

// ─── NAV ──────────────────────────────────────────────────────────
function Nav({ active, dark, onToggle }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className={`nav${open ? ' nav--open' : ''}`}>
      <div className="nav__inner container">
        <button className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          G.C.
        </button>
        <ul className="nav__links">
          {NAV.map(({ id, label }) => (
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
          <button className="nav__theme-btn" onClick={onToggle} aria-label="Toggle theme">
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
          {NAV.map(({ id, label }) => (
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

// ─── HERO ──────────────────────────────────────────────────────────
function Hero() {
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
              <a href={DATA.cv} className="btn btn--primary" download>Download CV</a>
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

// ─── SECTION HEADER ────────────────────────────────────────────────
function SectionHeader({ title }) {
  return (
    <Reveal>
      <div className="section-header">
        <h2 className="section-header__title">{title}</h2>
      </div>
    </Reveal>
  )
}

// ─── ABOUT ─────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeader title="About" />
        <div className="about__body">
          {DATA.about.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="about__para">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── EXPERIENCE ────────────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader title="Experience" />
        <div className="timeline">
          {DATA.experience.map((item, i) => (
            <Reveal key={i} rootMargin="0px 0px -80px 0px" className="timeline__item">
              <div className="timeline__dot" />
              <h3 className="timeline__role">{item.role}</h3>
              <p className="timeline__meta">
                <span className="timeline__company">{item.company}</span>
                <span className="timeline__sep">·</span>
                <span>{item.period}</span>
              </p>
              <p className="timeline__desc">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="education__heading">Education</h3>
        </Reveal>
        <div className="education__grid">
          {DATA.education.map((item, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="edu-card">
                <p className="edu-card__degree">{item.degree}</p>
                <p className="edu-card__institution">{item.institution}</p>
                <p className="edu-card__detail">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROJECTS ──────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader title="Projects" />
        <div className="projects__grid">
          {DATA.projects.map((p, i) => (
            <Reveal key={i} delay={i * 80} className="proj-card">
              <div className="proj-card__inner">
                <div>
                  <h3 className="proj-card__name">{p.name}</h3>
                  <p className="proj-card__desc">{p.description}</p>
                </div>
                <div className="proj-card__tags">
                  {p.stack.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <div className="proj-card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-card__link">
                      GitHub ↗
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-card__link">
                      Live site ↗
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── RESEARCH ──────────────────────────────────────────────────────
function Research() {
  return (
    <section id="research" className="section research">
      <div className="container">
        <SectionHeader title="Research" />
        <div className="research__list">
          {DATA.research.map((pub, i) => (
            <Reveal key={i} delay={i * 90} className="pub-card">
              <div className="pub-card__inner">
                <div className="pub-card__body">
                  <p className="pub-card__journal">{pub.journal}</p>
                  <h3 className="pub-card__title">{pub.title}</h3>
                  <p className="pub-card__meta">
                    <span>{pub.year}</span>
                    <span className="pub-card__sep">·</span>
                    <span>{pub.volume}</span>
                  </p>
                </div>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-card__doi"
                >
                  DOI ↗
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── WRITING ───────────────────────────────────────────────────────
function Writing() {
  return (
    <section id="writing" className="section writing">
      <div className="container">
        <SectionHeader title="Writing" />
        <div className="writing__list">
          {DATA.writing.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="writing__item"
              >
                <div>
                  <p className="writing__source">{item.publication} · {item.date}</p>
                  <h3 className="writing__title">{item.title}</h3>
                  <p className="writing__desc">{item.description}</p>
                </div>
                <span className="writing__arrow">↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ───────────────────────────────────────────────────────
function Contact() {
  const { linkedin, github, email, whatsapp } = DATA.social
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader title="Contact" />
        <Reveal>
          <p className="contact__intro">
            Open to roles in nuclear safety, energy policy, and research. Operating across Europe and Latin America.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="contact__links">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
                LinkedIn ↗
              </a>
            )}
            <a href={github} target="_blank" rel="noopener noreferrer" className="contact__link">
              GitHub ↗
            </a>
            <a href={`mailto:${email}`} className="contact__link">
              Email ↗
            </a>
            {whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="contact__link">
                WhatsApp ↗
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── FOOTER ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          © {new Date().getFullYear()} Gastón Cisterna · gastoncisterna.dev
        </p>
      </div>
    </footer>
  )
}

// ─── PAGE ──────────────────────────────────────────────────────────
export default function Page() {
  const [dark, setDark] = useState(true)
  const [active, setActive] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const sections = NAV.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Nav active={active} dark={dark} onToggle={() => setDark(d => !d)} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
