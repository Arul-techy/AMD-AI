import React, { useEffect, useRef, useState } from 'react'

type EdgeItem = {
  id: string
  title: string
  text: string
  Icon: React.ReactNode
}

const ITEMS: EdgeItem[] = [
  {
    id: 'qc',
    title: 'Enterprise-grade QC and secure workflow',
    text: 'Strong multilayer quality control and fully secure processes.',
    Icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 12h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 20v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'quick',
    title: 'Quick turnaround with flexible team scalability',
    text: 'Teams scale up fast for urgent or large projects.',
    Icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'multilingual',
    title: 'Multilingual capabilities in one integrated system',
    text: '90+ languages supported across translation, media, and AI services.',
    Icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 'reliable',
    title: 'Reliable delivery supported by AI-enhanced processes',
    text: 'AI tools + human experts ensure consistent & fast output.',
    Icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'pm',
    title: 'Dedicated project managers for long-term clients',
    text: 'Priority support and tailored workflow optimization.',
    Icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2a5 5 0 015 5v3a5 5 0 01-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22a5 5 0 01-5-5v-3a5 5 0 015-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'nda',
    title: 'NDA, confidentiality, and professional standards maintained',
    text: 'Strict protective protocols for enterprise clients.',
    Icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 7V5a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

function EdgeComponent(): JSX.Element {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.id
          if (id && entry.isIntersecting) setVisible((v) => ({ ...v, [id]: true }))
        })
      },
      { threshold: 0.12 }
    )
    const items = el.querySelectorAll('[data-id]')
    items.forEach((i) => obs.observe(i))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="edge" ref={ref} className="py-8" style={{ backgroundColor: '#2C2F44' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-elegant-porcelain">Our Edge for MNCs &amp; Enterprise Clients</h2>
          <p className="mt-2 text-elegant-porcelain/80">Trusted operational excellence designed for scale, speed, and security.</p>
        </div>

        <div className="h-scroll-x -mx-2 px-2 md:mx-0 md:px-0">
          <ul className="flex md:grid md:grid-cols-6 gap-4 md:gap-6 items-start whitespace-normal">
            {ITEMS.map((it, idx) => (
              <li
                key={it.id}
                data-id={it.id}
                className={`flex-shrink-0 min-w-[220px] md:min-w-0 flex flex-col items-center text-center bg-transparent rounded-lg p-4 md:p-6 transition-all duration-300 ${
                  visible[it.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ borderLeft: '1px solid rgba(234,231,226,0.1)' }}
              >
                <div className="w-20 h-20 rounded-full bg-elegant-porcelain flex items-center justify-center text-elegant-navy mb-3 transform transition-transform duration-300 hover:scale-105 shadow-sm">
                  {it.Icon}
                </div>
                <h4 className="text-sm font-semibold text-elegant-porcelain">{it.title}</h4>
                <p className="mt-1 text-xs text-elegant-porcelain/80">{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default React.memo(EdgeComponent)
