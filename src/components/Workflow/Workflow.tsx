import React from "react"
import FadeInSection from '../animations/FadeInSection'

function WorkflowComponent() {
  const steps = [
    {
      num: 1,
      title: 'Requirement Analysis',
      desc: 'Understanding project scope and client needs.',
    },
    {
      num: 2,
      title: 'Team Assignment',
      desc: 'Assigning the right specialists for the task.',
    },
    {
      num: 3,
      title: 'AI-Assisted Pre-Processing',
      desc: 'Using AI tools to speed up preparation.',
    },
    {
      num: 4,
      title: 'Human Execution',
      desc: 'Translation / annotation / development by experts.',
    },
    {
      num: 5,
      title: 'Quality Check (QC)',
      desc: 'Multi-stage review for accuracy & consistency.',
    },
    {
      num: 6,
      title: 'Client Review',
      desc: 'Delivering draft and making needed revisions.',
    },
    {
      num: 7,
      title: 'Final Delivery & Support',
      desc: 'Submitting final output + long-term support.',
    },
  ]

  // scroll reveal state
  const [visible, setVisible] = React.useState<Record<number, boolean>>({})
  const containerRef = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx)
          if (!Number.isNaN(idx) && entry.isIntersecting) {
            setVisible((v) => ({ ...v, [idx]: true }))
          }
        })
      },
      { threshold: 0.12 }
    )
    const items = el.querySelectorAll('[data-idx]')
    items.forEach((it) => obs.observe(it))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="workflow" ref={containerRef} className="py-12 md:py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">Our Workflow</h2>
            <p className="mt-2 text-gray-600">A clear and efficient process designed for quality and speed.</p>
          </div>

          {/* Desktop: horizontal timeline; Mobile: stacked */}
          <div className="relative">
            <div className="hidden md:block absolute left-6 right-6 top-14 h-0.5 bg-gray-200" aria-hidden="true" />

            <ol className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0">
              {steps.map((s, i) => (
                <li
                  key={s.num}
                  data-idx={s.num}
                  className={`relative md:flex-1 md:px-4 pb-6 md:pb-0 ${visible[s.num] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-500`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="md:pb-8 md:pt-0 flex flex-col md:flex-col items-start md:items-center md:text-center">
                    {/* mobile dot indicator */}
                    <div className="md:hidden flex items-center mb-3">
                      <span className="w-2 h-2 bg-gray-300 rounded-full mr-3" aria-hidden="true" />
                      <div className="text-sm font-semibold text-black">Step {s.num}</div>
                    </div>
                    {/* Number circle */}
                    <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 text-black font-bold text-sm md:mb-3">
                      {s.num}
                    </div>

                    {/* connector for vertical mobile */}
                    <div className="md:hidden flex-1 h-0.5 bg-gray-200 self-center mx-4" aria-hidden="true" />

                    {/* content */}
                    <div className="ml-4 md:ml-0 md:w-full">
                      <h3 className="text-lg font-semibold text-black">{s.title}</h3>
                      <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
                    </div>
                  </div>

                  {/* horizontal connector line between nodes on md+ */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 right-0 w-full" aria-hidden="true">
                      <div className="h-0.5 bg-gray-200 ml-6 mr-6" />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default React.memo(WorkflowComponent)
