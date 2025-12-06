import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

type USPItem = {
  id: string
  title: string
  text: string
  Icon?: React.ReactNode
}

const ITEMS: USPItem[] = [
  {
    id: 'hybrid',
    title: 'Hybrid Speed',
    text: 'AI-assisted workflows combined with human quality control.',
    Icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'cost',
    title: 'Cost-Effective',
    text: 'High-quality service at competitive pricing.',
    Icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'scalable',
    title: 'Scalable Workforce',
    text: '100+ trained linguists, annotators, and media specialists.',
    Icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'young',
    title: 'Young & Innovative',
    text: 'Fast execution with modern tools and fresh creativity.',
    Icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'global',
    title: 'Global Project Experience',
    text: 'Trusted by clients across industries worldwide.',
    Icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'one-stop',
    title: 'One-Stop Solution',
    text: 'Translation, media, AI data, web, and BPO services under one roof.',
    Icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function USP(): JSX.Element {
  const headerRef = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })

  function USPItem({ it, idx }: { it: typeof ITEMS[number]; idx: number }) {
    const ref = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })
    return (
      <li
        ref={ref}
        key={it.id}
        data-id={it.id}
        className={`relative bg-white rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden transform transition-all duration-600 will-change-transform opacity-0 translate-y-8`}
        style={{ animationDelay: `${idx * 100}ms` }}
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-blue-secondary transition-colors duration-200" />

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 text-neutral-dark-text">{it.Icon}</div>
          <div>
            <h3 className="h4-style text-lg font-bold text-neutral-dark-text">{it.title}</h3>
            <p className="text-body-xs mt-2 text-neutral-text-gray">{it.text}</p>
          </div>
        </div>

        <style>{`@media (hover: hover) { li:hover { transform: translateY(-6px); box-shadow: 0 8px 28px rgba(0,0,0,0.08); } }`}</style>
      </li>
    )
  }

  return (
    <section id="usp" className="py-8 md:py-20 bg-neutral-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-8 opacity-0 translate-y-8 transition-all duration-600 ease-[cubic-bezier(0.22,0.9,0.3,1)]">
          <h2 className="h2-style text-2xl md:text-3xl text-neutral-dark-text">Why Choose AMD.AI</h2>
          <p className="text-body-sm mt-2 text-neutral-text-gray">Our strengths that help businesses grow faster.</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ITEMS.map((it, idx) => (
            <USPItem it={it} idx={idx} key={it.id} />
          ))}
        </ul>
      </div>
    </section>
  )
}
