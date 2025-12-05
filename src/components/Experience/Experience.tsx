import React, { useEffect, useRef, useState } from 'react'

type Metric = {
  id: string
  number: string
  title: string
  subtitle: string
}

const METRICS: Metric[] = [
  {
    id: 'clients',
    number: '500+',
    title: 'Clients Served',
    subtitle: 'Successfully delivered projects for global teams and enterprises.',
  },
  {
    id: 'years',
    number: '15+',
    title: 'Years of Industry Experience',
    subtitle: 'A deep understanding of multilingual, AI, and digital operations.',
  },
  {
    id: 'uptime',
    number: '99.9%',
    title: 'Uptime & On-Time Delivery',
    subtitle: 'Reliable workflows with strict delivery commitments.',
  },
  {
    id: 'support',
    number: '24/7',
    title: 'Global Support',
    subtitle: 'Remote-first team supporting multiple time zones.',
  },
  {
    id: 'linguists',
    number: '100+',
    title: 'Professional Linguists & Specialists',
    subtitle: 'Scalable teams across translation, media, AI data, and digital services.',
  },
  {
    id: 'industries',
    number: 'Multi-Industry',
    title: 'Multi-Industry Expertise',
    subtitle: 'IT, E-commerce, Media, Legal, Finance, Manufacturing, and more.',
  },
]

function ExperienceComponent(): JSX.Element {
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
    <section id="experience" ref={ref} className="py-12 md:py-20" style={{ backgroundColor: '#F8F8F8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">Our Experience &amp; Achievements</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">Proven results backed by years of expertise in the global market.</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {METRICS.map((m, idx) => (
            <li
              key={m.id}
              data-id={m.id}
              className={`relative bg-white rounded-2xl overflow-hidden transform transition-all duration-300 will-change-transform ${
                visible[m.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ boxShadow: '0 6px 18px rgba(16,24,40,0.04)' }}
            >
              {/* top strip */}
              <div className="h-1 bg-elegant-navy w-full" />

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-center mb-4">
                  {/* SVG placeholder icon */}
                  <div className="w-12 h-12 rounded-full bg-dynamic-bronze flex items-center justify-center text-dynamic-warmgray transform transition-transform duration-200 hover:scale-105">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">{m.number}</div>
                  <div className="mt-2 text-base sm:text-lg font-semibold text-black">{m.title}</div>
                  <p className="mt-2 text-sm text-gray-700">{m.subtitle}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default React.memo(ExperienceComponent)
