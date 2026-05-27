'use client'

import { useState, useEffect, useRef } from 'react'

export default function Reveal({
  children,
  delay = 0,
  className = '',
  rootMargin = '0px',
  variant = 'fadeUp',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.08, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin])

  const classes = [
    'reveal',
    `reveal--${variant}`,
    visible ? 'is-visible' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={classes} style={{ '--delay': `${delay}ms` }}>
      {children}
    </div>
  )
}
