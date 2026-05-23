import { Cormorant_Garamond, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gastón Cisterna',
  jobTitle: 'Senior Deterministic Safety Analyst',
  description: 'Data scientist and ML engineer with a background in nuclear physics and engineering. Building machine learning systems for energy and industrial decision-making.',
  url: 'https://gastoncisterna.dev',
  email: 'gastonecisterna405@gmail.com',
  nationality: ['Italian', 'Argentine'],
  worksFor: { '@type': 'Organization', name: 'AtkinsRéalis' },
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Instituto Balseiro' },
    { '@type': 'EducationalOrganization', name: 'Erasmus Mundus NUCPHYS' },
  ],
  knowsAbout: [
    'Nuclear Safety', 'Deterministic Safety Analysis', 'CANDU Reactors',
    'Thermohydraulic Modeling', 'CATHENA', 'LOCA Analysis',
    'Machine Learning', 'Radiation Detection', 'Python',
    'Energy Policy', 'Energy Economics', 'Law',
  ],
  sameAs: [
    'https://www.linkedin.com/in/gastonecisterna/',
    'https://github.com/gastonecisterna405',
  ],
}

export const metadata = {
  title: 'Gastón Cisterna',
  description: 'Applied AI and data science for energy and industrial decision-making. Nuclear Engineer, Physicist, and Lawyer building ML systems where simulation meets strategy.',
  keywords: ['machine learning', 'applied AI', 'data science', 'energy analytics', 'nuclear engineering', 'ML consulting', 'simulation', 'Python'],
  authors: [{ name: 'Gastón Cisterna' }],
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    title: 'Gastón Cisterna — Data, Simulation & Applied AI',
    description: 'Applied AI and data science for energy and industrial decision-making. Nuclear Engineer, Physicist, and Lawyer.',
    url: 'https://gastoncisterna.dev',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Gastón Cisterna — Data, Simulation & Applied AI',
    description: 'Applied AI and data science for energy and industrial decision-making. Nuclear Engineer, Physicist, and Lawyer.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${cormorant.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
