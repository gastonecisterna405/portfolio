'use client'

import Nav    from '../components/Nav'
import Hero   from '../components/Hero'
import Reveal from '../components/Reveal'
import { useLang } from '../components/LangProvider'

// ─── SECTION HEADER ────────────────────────────────────────────────
function SectionHeader({ title }) {
  return (
    <Reveal variant="shrink">
      <div className="section-header">
        <h2 className="section-header__title">{title}</h2>
      </div>
    </Reveal>
  )
}

// ─── ABOUT ─────────────────────────────────────────────────────────
function About() {
  const { t } = useLang()
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeader title={t.sections.about} />
        <div className="about__body">
          {t.about.map((p, i) => (
            <Reveal key={i} delay={i * 100} variant="slideRight">
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
  const { t } = useLang()
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader title={t.sections.experience} />
        <div className="timeline">
          {t.experience.map((item, i) => (
            <Reveal key={i} rootMargin="0px 0px -80px 0px" className="timeline__item" variant="slideLeft">
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
        <Reveal variant="shrink">
          <h3 className="education__heading">{t.sections.education}</h3>
        </Reveal>
        <div className="education__grid">
          {t.education.map((item, i) => (
            <Reveal key={i} delay={i * 90} variant="zoom">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="edu-card">
                  <p className="edu-card__degree">{item.degree}</p>
                  <p className="edu-card__institution">{item.institution}</p>
                  <p className="edu-card__detail">{item.detail}</p>
                </a>
              ) : (
                <div className="edu-card">
                  <p className="edu-card__degree">{item.degree}</p>
                  <p className="edu-card__institution">{item.institution}</p>
                  <p className="edu-card__detail">{item.detail}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROJECTS ──────────────────────────────────────────────────────
function Projects() {
  const { t } = useLang()
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader title={t.sections.projects} />
        <div className="projects__grid">
          {t.projects.map((p, i) => (
            <Reveal key={i} delay={i * 80} className="proj-card" variant="zoom">
              <div className="proj-card__inner">
                <div>
                  <div className="proj-card__title-row">
                    <h3 className="proj-card__name">{p.name}</h3>
                    {p.badge && <span className="proj-card__badge">{p.badge}</span>}
                  </div>
                  <p className="proj-card__desc">{p.description}</p>
                </div>
                <div className="proj-card__tags">
                  {p.stack.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <div className="proj-card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-card__link">
                      {t.links.github}
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-card__link">
                      {t.links.liveSite}
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
  const { t } = useLang()
  return (
    <section id="research" className="section research">
      <div className="container">
        <SectionHeader title={t.sections.research} />
        <div className="research__list">
          {t.research.map((pub, i) => (
            <Reveal key={i} delay={i * 90} className="pub-card" variant="zoom">
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
                  {t.links.doi}
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
  const { t } = useLang()
  return (
    <section id="writing" className="section writing">
      <div className="container">
        <SectionHeader title={t.sections.writing} />
        <div className="writing__list">
          {t.writing.map((item, i) => (
            <Reveal key={i} delay={i * 80} variant="slideLeft">
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
  const { t, STATIC } = useLang()
  const { linkedin, github, email, whatsapp } = STATIC.social
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader title={t.sections.contact} />
        <Reveal>
          <p className="contact__intro">{t.contactIntro}</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="contact__links">
            {STATIC.cv && (
              <a href={STATIC.cv} className="contact__link" download>
                {t.links.downloadCV}
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
                {t.links.linkedin}
              </a>
            )}
            <a href={github} target="_blank" rel="noopener noreferrer" className="contact__link">
              {t.links.github}
            </a>
            <a href={`mailto:${email}`} className="contact__link">
              {t.links.email}
            </a>
            {whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="contact__link">
                {t.links.whatsapp}
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
  return (
    <>
      <Nav />
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
