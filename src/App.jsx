import { useState, useEffect, useRef } from 'react'
import './App.css'

// ═══════════════════════════════════════════════════════════════════
// DATA  —  edit everything here
// ═══════════════════════════════════════════════════════════════════
const DATA = {
  name:    'Gastón Cisterna',
  tagline: 'Nuclear Engineering · AI & Data · Law · Energy Policy',
  eyebrow: 'Buenos Aires',
  heroIntro:
    'Building at the intersection of reactor physics, data science, and energy policy. Operating across Europe and Latin America.',

  social: {
    linkedin:  'https://www.linkedin.com/in/gastonecisterna/',
    github:    'https://github.com/gastonecisterna405',
    email:     'gastonecisterna405@gmail.com',
    whatsapp:  'https://wa.me/34615330209',
  },

  cv: null, // TODO: add CV path once uploaded, e.g. '/GastonCisterna_CV.pdf'

  about: [
    "I'm a nuclear engineer and physicist. That combination is not something I planned: it's the result of following each problem wherever it led.",
    "After graduating from Instituto Balseiro, I spent two years in the Erasmus Mundus NUCPHYS program across Spain, Italy, and France, then joined IFIC Valencia as a researcher. The work was radiation detection and machine learning: building tools to localize radioactive sources in real time. The three journal papers above came out of that.",
    "I'm currently a Senior Safety Analyst at AtkinsRéalis, developing deterministic safety solutions for clients in Canada and the UK. Energy regulation requires someone who understands both the reactor specs and the contract, which is why I'm finishing a law degree.",
    "The direction I'm working toward is energy economics, geopolitics, and the policy layer that connects technical decisions to political ones. I'm Italian-Argentine and operate between Europe and Latin America. Long game.",
  ],

  experience: [
    {
      role:        'Senior Deterministic Safety Analyst',
      company:     'AtkinsRéalis',
      period:      'Mar 2025 – Present',
      description: 'Deterministic safety analysis for CANDU reactors. LOCA analysis, SDS1/SDS2 trip coverage, thermohydraulic modeling with CATHENA. Clients in Canada and the UK.',
    },
    {
      role:        'Researcher',
      company:     'IFIC Valencia',
      period:      'Mar 2024 – Feb 2025',
      description: 'Radiation detection and machine learning. Developed real-time source localization tools for the GN-Vision neutron-gamma imager.',
    },
    {
      role:        'Data Analyst',
      company:     'ExxonMobil',
      period:      '2020 – 2022',
      description: 'Business analytics and data-driven decision-making in a global energy industry context.',
    },
    {
      role:        'Research Assistant',
      company:     'LAHN / CNEA',
      period:      '2019 – 2020',
      description: 'Research support at the Latin American Network for Neutron Instrumentation, within the Argentine National Atomic Energy Commission.',
    },
  ],

  education: [
    {
      degree:      'B.Eng. Nuclear Engineering',
      institution: 'Instituto Balseiro',
      detail:      'National merit scholarship',
    },
    {
      degree:      'M.Sc. Nuclear Physics',
      institution: 'Erasmus Mundus NUCPHYS',
      detail:      'Spain · Italy · France',
    },
    {
      degree:      'Law Degree (in progress)',
      institution: 'Universidad Siglo 21',
      detail:      'Distance learning',
    },
  ],

  research: [
    {
      title:   'First experimental results and optimization study of the portable neutron-gamma imager GN-Vision',
      journal: 'Applied Radiation and Isotopes',
      year:    2025,
      volume:  'Vol. 224, art. 111826',
      doi:     '10.1016/j.apradiso.2025.111826',
    },
    {
      title:   'Imaging neutrons with a position-sensitive monolithic CLYC detector',
      journal: 'Nuclear Instruments and Methods in Physics Research A',
      year:    2025,
      volume:  'Vol. 1079, art. 170594',
      doi:     '10.1016/j.nima.2025.170594',
    },
    {
      title:   'Experimental proof-of-concept and first field tests of the dual gamma-neutron imager GN-Vision',
      journal: 'EPJ Web of Conferences',
      year:    2025,
      volume:  'Vol. 338, art. 09013',
      doi:     '10.1051/epjconf/202533809013',
    },
  ],

  projects: [
    {
      name:        'Global Nuclear Buildout Intelligence',
      description: 'AI platform for forecasting reactor deployment and analyzing global nuclear buildout trends. Combines machine learning with strategic energy insights.',
      stack:       ['Python', 'XGBoost', 'Streamlit', 'ML'],
      github:      'https://github.com/gastonecisterna405/global-nuclear-buildout-intelligence',
      live:        null,
    },
    {
      name:        'Energy Intelligence Platform',
      description: 'Energy analytics and forecasting platform combining data visualization, machine learning, and strategic insights for complex energy systems.',
      stack:       ['Python', 'XGBoost', 'Streamlit'],
      github:      'https://github.com/gastonecisterna405/energy-intelligence-platform',
      live:        null,
    },
    {
      name:        'Lead Scoring Mendoza',
      description: 'Lead scoring and business analytics platform using Places API, machine learning, and data enrichment for commercial decision-making.',
      stack:       ['Python', 'Streamlit', 'Google Places API', 'ML'],
      github:      'https://github.com/gastonecisterna405/lead-scoring-mendoza',
      live:        null,
    },
    {
      name:        'Estudio Jurídico Barrera',
      description: 'Professional website for a law and notary firm. Clean, conversion-focused design with practice areas and contact flow.',
      stack:       ['HTML', 'CSS', 'Vercel'],
      github:      null,
      live:        'https://estudio-juridico-barrera.vercel.app/',
    },
  ],

  writing: [
    {
      title:       'Entre átomos e inteligencia artificial',
      publication: 'Diplomacia Activa',
      date:        'Feb 2026',
      description: 'Nuclear energy as critical infrastructure for the AI era.',
      url:         'https://diploactiva.com/2026/02/16/entre-atomos-e-inteligencia-artificial',
    },
    {
      title:       'La Energía Nuclear en la Crisis Energética: ¿Ángel o Demonio?',
      publication: 'Diplomacia Activa',
      date:        'Sep 2023',
      description: 'The case for nuclear energy in the global energy transition.',
      url:         'https://diploactiva.com/2023/09/19/la-energia-nuclear-en-la-crisis-energetica-angel-o-demonio',
    },
  ],
}

const NAV = [
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
  { id: 'research',   label: 'Research'   },
  { id: 'writing',    label: 'Writing'    },
  { id: 'contact',    label: 'Contact'    },
]

// ═══════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════
function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: 'smooth' })
}

function Reveal({ children, delay = 0, className = '', rootMargin = '0px' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold: 0.08, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin])
  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ' ' + className : ''}`}
      style={{ '--delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// NAV
// ═══════════════════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════════════════
// SECTION HEADER
// ═══════════════════════════════════════════════════════════════════
function SectionHeader({ num, title }) {
  return (
    <Reveal>
      <div className="section-header">
        <h2 className="section-header__title">{title}</h2>
      </div>
    </Reveal>
  )
}

// ═══════════════════════════════════════════════════════════════════
// ABOUT
// ═══════════════════════════════════════════════════════════════════
function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeader num="01" title="About" />
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

// ═══════════════════════════════════════════════════════════════════
// EXPERIENCE
// ═══════════════════════════════════════════════════════════════════
function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader num="02" title="Experience" />
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

// ═══════════════════════════════════════════════════════════════════
// RESEARCH
// ═══════════════════════════════════════════════════════════════════
function Research() {
  return (
    <section id="research" className="section research">
      <div className="container">
        <SectionHeader num="04" title="Research" />
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

// ═══════════════════════════════════════════════════════════════════
// PROJECTS
// ═══════════════════════════════════════════════════════════════════
function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader num="03" title="Projects" />
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

// ═══════════════════════════════════════════════════════════════════
// WRITING
// ═══════════════════════════════════════════════════════════════════
function Writing() {
  return (
    <section id="writing" className="section writing">
      <div className="container">
        <SectionHeader num="05" title="Writing" />
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

// ═══════════════════════════════════════════════════════════════════
// CONTACT
// ═══════════════════════════════════════════════════════════════════
function Contact() {
  const { linkedin, github, email, whatsapp } = DATA.social
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader num="06" title="Contact" />
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

// ═══════════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════════════════
// APP
// ═══════════════════════════════════════════════════════════════════
export default function App() {
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
