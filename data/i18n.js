export const STATIC = {
  name: 'Gastón Cisterna',
  social: {
    linkedin: 'https://www.linkedin.com/in/gastonecisterna/',
    github:   'https://github.com/gastonecisterna405',
    email:    'gastonecisterna405@gmail.com',
    whatsapp: 'https://wa.me/34615330209',
  },
  cv: '/cv.pdf',
}

export const TRANSLATIONS = {
  en: {
    tagline:   'Nuclear Engineering · AI & Data · Law · Energy Policy',
    eyebrow:   'Buenos Aires',
    heroIntro: 'Building at the intersection of reactor physics, data science, and energy policy. Operating across Europe and Latin America.',

    nav: [
      { id: 'about',      label: 'About'      },
      { id: 'experience', label: 'Experience' },
      { id: 'projects',   label: 'Projects'   },
      { id: 'research',   label: 'Research'   },
      { id: 'writing',    label: 'Writing'    },
      { id: 'contact',    label: 'Contact'    },
    ],

    btn: {
      downloadCV:   'Download CV',
      viewProjects: 'View Projects ↓',
    },

    sections: {
      about:      'About',
      experience: 'Experience',
      education:  'Education',
      projects:   'Projects',
      research:   'Research',
      writing:    'Writing',
      contact:    'Contact',
    },

    links: {
      github:     'GitHub ↗',
      liveSite:   'Live site ↗',
      doi:        'DOI ↗',
      downloadCV: 'Download CV ↗',
      linkedin:   'LinkedIn ↗',
      email:      'Email ↗',
      whatsapp:   'WhatsApp ↗',
    },

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
        name:        'RAG System from Scratch',
        description: 'End-to-end Retrieval-Augmented Generation system built without frameworks. Covers chunking, embeddings, vector search, hybrid BM25 + semantic retrieval, re-ranking, and grounded generation via Ollama. Local, zero-cost stack.',
        stack:       ['Python', 'sentence-transformers', 'BM25', 'Ollama', 'RAG'],
        github:      'https://github.com/gastonecisterna405',
        live:        null,
        badge:       'In Progress',
      },
      {
        name:        'Lead Scoring Mendoza',
        description: 'Lead scoring and business analytics platform using Places API, machine learning, and data enrichment for commercial decision-making.',
        stack:       ['Python', 'Streamlit', 'Google Places API', 'ML'],
        github:      'https://github.com/gastonecisterna405/lead-scoring-mendoza',
        live:        'https://lead-scoring-mendoza.streamlit.app/',
      },
      {
        name:        'Energy Intelligence Platform',
        description: 'Energy analytics and forecasting platform combining data visualization, machine learning, and strategic insights for complex energy systems.',
        stack:       ['Python', 'XGBoost', 'Streamlit'],
        github:      'https://github.com/gastonecisterna405/energy-intelligence-platform',
        live:        'https://energy-intelligence-platform.streamlit.app/',
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

    contactIntro: 'Open to roles in applied AI, data science, and machine learning consulting. Focused on industrial and energy applications where domain knowledge makes the difference. Operating across Europe and Latin America.',
  },

  es: {
    tagline:   'Ingeniería Nuclear · IA & Datos · Derecho · Política Energética',
    eyebrow:   'Buenos Aires',
    heroIntro: 'Construyendo en la intersección entre física de reactores, ciencia de datos y política energética. Operando entre Europa y América Latina.',

    nav: [
      { id: 'about',      label: 'Sobre mí'      },
      { id: 'experience', label: 'Experiencia'   },
      { id: 'projects',   label: 'Proyectos'     },
      { id: 'research',   label: 'Investigación' },
      { id: 'writing',    label: 'Artículos'     },
      { id: 'contact',    label: 'Contacto'      },
    ],

    btn: {
      downloadCV:   'Descargar CV',
      viewProjects: 'Ver Proyectos ↓',
    },

    sections: {
      about:      'Sobre mí',
      experience: 'Experiencia',
      education:  'Formación',
      projects:   'Proyectos',
      research:   'Investigación',
      writing:    'Artículos',
      contact:    'Contacto',
    },

    links: {
      github:     'GitHub ↗',
      liveSite:   'Sitio web ↗',
      doi:        'DOI ↗',
      downloadCV: 'Descargar CV ↗',
      linkedin:   'LinkedIn ↗',
      email:      'Correo ↗',
      whatsapp:   'WhatsApp ↗',
    },

    about: [
      "Construyo sistemas de machine learning y herramientas de datos para problemas industriales de alta relevancia. Mi formación es en ingeniería y física nuclear, lo que significa que abordo la ciencia de datos desde el lado de la simulación: me importa lo que el modelo representa realmente, no solo si los números encajan.",
      "Tras graduarme del Instituto Balseiro, pasé dos años en el programa Erasmus Mundus NUCPHYS entre España, Italia y Francia, y luego me incorporé al IFIC Valencia como investigador. El trabajo fue detección de radiación y machine learning: construí herramientas para localizar fuentes radiactivas en tiempo real. Los tres artículos de revista surgieron de esa etapa.",
      "Actualmente soy Analista de Seguridad Determinista Senior en AtkinsRéalis, desarrollando soluciones de seguridad determinista para clientes en Canadá y el Reino Unido. La regulación energética requiere a alguien que entienda tanto las especificaciones del reactor como el contrato, por eso estoy terminando una carrera de derecho.",
      "Los problemas que me atraen están en la frontera entre modelos físicos y decisiones de negocio: donde una mejor simulación o una predicción más precisa cambia lo que realmente se construye o despliega. Soy ítalo-argentino y opero entre Europa y América Latina.",
    ],

    experience: [
      {
        role:        'Analista Senior de Seguridad Determinista',
        company:     'AtkinsRéalis',
        period:      'Mar 2025 – Presente',
        description: 'Análisis de seguridad determinista para reactores CANDU. Análisis de LOCA, cobertura de disparo SDS1/SDS2, modelado termohidráulico con CATHENA. Clientes en Canadá y el Reino Unido.',
      },
      {
        role:        'Investigador',
        company:     'IFIC Valencia',
        period:      'Mar 2024 – Feb 2025',
        description: 'Detección de radiación y machine learning. Desarrollo de herramientas de localización de fuentes en tiempo real para el generador de imágenes neutrones-gamma GN-Vision.',
      },
      {
        role:        'Analista de Datos',
        company:     'ExxonMobil',
        period:      '2020 – 2022',
        description: 'Análisis de negocio y toma de decisiones basada en datos en un contexto global de la industria energética.',
      },
      {
        role:        'Asistente de Investigación',
        company:     'LAHN / CNEA',
        period:      '2019 – 2020',
        description: 'Apoyo a la investigación en la Red Latinoamericana de Instrumentación de Neutrones, dentro de la Comisión Nacional de Energía Atómica Argentina.',
      },
    ],

    education: [
      {
        degree:      'Ing. en Física Nuclear',
        institution: 'Instituto Balseiro',
        detail:      'Beca de mérito nacional',
        url:         'https://www.ib.edu.ar/',
      },
      {
        degree:      'M.Sc. Física Nuclear',
        institution: 'Erasmus Mundus NUCPHYS',
        detail:      'España · Italia · Francia',
        url:         'https://www.emm-nucphys.eu/',
      },
      {
        degree:      'Abogacía (en curso)',
        institution: 'Universidad Siglo 21',
        detail:      'Modalidad a distancia',
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
        name:        'RAG System desde Cero',
        description: 'Sistema de Generación Aumentada por Recuperación de extremo a extremo construido sin frameworks. Cubre chunking, embeddings, búsqueda vectorial, recuperación híbrida BM25 + semántica, reranking y generación fundamentada mediante Ollama. Stack local y sin costo.',
        stack:       ['Python', 'sentence-transformers', 'BM25', 'Ollama', 'RAG'],
        github:      'https://github.com/gastonecisterna405',
        live:        null,
        badge:       'En Progreso',
      },
      {
        name:        'Lead Scoring Mendoza',
        description: 'Plataforma de scoring de leads y análisis de negocio que utiliza la Places API, machine learning y enriquecimiento de datos para la toma de decisiones comerciales.',
        stack:       ['Python', 'Streamlit', 'Google Places API', 'ML'],
        github:      'https://github.com/gastonecisterna405/lead-scoring-mendoza',
        live:        'https://lead-scoring-mendoza.streamlit.app/',
      },
      {
        name:        'Plataforma de Inteligencia Energética',
        description: 'Plataforma de análisis y predicción energética que combina visualización de datos, machine learning e insights estratégicos para sistemas energéticos complejos.',
        stack:       ['Python', 'XGBoost', 'Streamlit'],
        github:      'https://github.com/gastonecisterna405/energy-intelligence-platform',
        live:        'https://energy-intelligence-platform.streamlit.app/',
      },
      {
        name:        'Inteligencia Nuclear Global',
        description: 'Plataforma de IA para predecir el despliegue de reactores y analizar las tendencias globales de construcción nuclear. Combina machine learning con insights estratégicos en energía.',
        stack:       ['Python', 'XGBoost', 'Streamlit', 'ML'],
        github:      'https://github.com/gastonecisterna405/global-nuclear-buildout-intelligence',
        live:        null,
      },
      {
        name:        'Estudio Jurídico Barrera',
        description: 'Sitio web profesional para un estudio jurídico y notarial. Diseño limpio y orientado a la conversión con áreas de práctica y flujo de contacto.',
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
        description: 'La energía nuclear como infraestructura crítica para la era de la IA.',
        url:         'https://diploactiva.com/2026/02/16/entre-atomos-e-inteligencia-artificial',
      },
      {
        title:       'La Energía Nuclear en la Crisis Energética: ¿Ángel o Demonio?',
        publication: 'Diplomacia Activa',
        date:        'Sep 2023',
        description: 'El caso de la energía nuclear en la transición energética global.',
        url:         'https://diploactiva.com/2023/09/19/la-energia-nuclear-en-la-crisis-energetica-angel-o-demonio',
      },
    ],

    contactIntro: 'Abierto a roles en IA aplicada, ciencia de datos y consultoría de machine learning. Enfocado en aplicaciones industriales y energéticas donde el conocimiento de dominio marca la diferencia. Operando entre Europa y América Latina.',
  },
}
