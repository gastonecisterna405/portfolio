export const DATA = {
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

  cv: '/cv.pdf',

  about: [
    "I build machine learning systems and data tools for high-stakes industrial problems. My background is in nuclear engineering and physics, which means I approach data science from the simulation side: I care about what the model actually represents, not just whether the numbers fit.",
    "After graduating from Instituto Balseiro, I spent two years in the Erasmus Mundus NUCPHYS program across Spain, Italy, and France, then joined IFIC Valencia as a researcher. The work was radiation detection and machine learning: building tools to localize radioactive sources in real time. The three journal papers above came out of that.",
    "I'm currently a Senior Safety Analyst at AtkinsRéalis, developing deterministic safety solutions for clients in Canada and the UK. Energy regulation requires someone who understands both the reactor specs and the contract, which is why I'm finishing a law degree.",
    "The problems I'm drawn to sit at the boundary between physical models and business decisions: where better simulation or sharper forecasting changes what actually gets built or deployed. I'm Italian-Argentine and operate between Europe and Latin America.",
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
      url:         'https://www.ib.edu.ar/',
    },
    {
      degree:      'M.Sc. Nuclear Physics',
      institution: 'Erasmus Mundus NUCPHYS',
      detail:      'Spain · Italy · France',
      url:         'https://www.emm-nucphys.eu/',
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
      name:        'Lead Scoring Mendoza',
      description: 'Lead scoring and business analytics platform using Places API, machine learning, and data enrichment for commercial decision-making.',
      stack:       ['Python', 'Streamlit', 'Google Places API', 'ML'],
      github:      'https://github.com/gastonecisterna405/lead-scoring-mendoza',
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
      name:        'Global Nuclear Buildout Intelligence',
      description: 'AI platform for forecasting reactor deployment and analyzing global nuclear buildout trends. Combines machine learning with strategic energy insights.',
      stack:       ['Python', 'XGBoost', 'Streamlit', 'ML'],
      github:      'https://github.com/gastonecisterna405/global-nuclear-buildout-intelligence',
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

  contactIntro: 'Open to roles in applied AI, data science, and machine learning consulting. Focused on industrial and energy applications where domain knowledge makes the difference. Operating across Europe and Latin America.',

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

export const NAV = [
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
  { id: 'research',   label: 'Research'   },
  { id: 'writing',    label: 'Writing'    },
  { id: 'contact',    label: 'Contact'    },
]
