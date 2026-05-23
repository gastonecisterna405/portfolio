'use client'

import { useState, useEffect, useRef } from 'react'

export default function Reveal({ children, delay = 0, className = '', rootMargin = '0px' }) {
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
