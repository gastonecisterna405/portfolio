'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { TRANSLATIONS, STATIC } from '../data/i18n'

const LangCtx = createContext({ lang: 'en', t: TRANSLATIONS.en, setLang: () => {}, STATIC })

export function useLang() {
  return useContext(LangCtx)
}

export default function LangProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangCtx.Provider value={{ lang, setLang, t: TRANSLATIONS[lang], STATIC }}>
      {children}
    </LangCtx.Provider>
  )
}
