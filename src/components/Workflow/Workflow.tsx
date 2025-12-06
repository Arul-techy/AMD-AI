// Removed unused React import
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function WorkflowComponent() {
  const headerRef = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })

  const steps = [
    { num: 1, title: 'Requirement Analysis', desc: 'Understanding project scope and client needs.' },
    { num: 2, title: 'Team Assignment', desc: 'Assigning the right specialists for the task.' },
    { num: 3, title: 'AI-Assisted Pre-Processing', desc: 'Using AI tools to speed up preparation.' },
    { num: 4, title: 'Human Execution', desc: 'Translation / annotation / development by experts.' },
    { num: 5, title: 'Quality Check (QC)', desc: 'Multi-stage review for accuracy & consistency.' },
    { num: 6, title: 'Client Review', desc: 'Delivering draft and making needed revisions.' },
    { num: 7, title: 'Final Delivery & Support', desc: 'Submitting final output + long-term support.' },
  ]

  return (
    <section id="workflow" className="py-12 md:py-20 bg-neutral-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="text-center mb-8 opacity-0 translate-y-8 transition-all duration-600 cubic-bezier(0.22, 0.9, 0.3, 1)">
          <h2 className="h2-style text-2xl md:text-3xl text-neutral-dark-text">Our Workflow</h2>
          <p className="text-body-sm mt-2 text-neutral-text-gray">A clear and efficient process designed for quality and speed.</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-6 right-6 top-14 h-0.5 bg-neutral-medium-gray" aria-hidden="true" />

          <ol className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0">
            {steps.map((s, i) => (
              <WorkflowStepItem key={s.num} step={s} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

interface WorkflowStep {
  num: number
  title: string
  desc: string
}

  function WorkflowStepItem({ step: s, index: i }: { step: WorkflowStep; index: number }) {
    const ref = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-6', { threshold: 0.12 })

    return (
      <li
        ref={ref as React.RefObject<HTMLLIElement>}
        className="relative md:flex-1 md:px-4 pb-6 md:pb-0 opacity-0 translate-y-6 transition-all duration-500"
        style={{ transitionDelay: `${i * 80}ms` }}
      >
        <div className="md:pb-8 md:pt-0 flex flex-col md:flex-col items-start md:items-center md:text-center">
          <div className="md:hidden flex items-center mb-3">
            <span className="w-2 h-2 bg-neutral-medium-gray rounded-full mr-3" aria-hidden="true" />
            <div className="text-sm font-semibold text-neutral-dark-text">Step {s.num}</div>
          </div>
          <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border border-neutral-medium-gray text-neutral-dark-text font-bold text-sm md:mb-3">
            {s.num}
          </div>

          <div className="md:hidden flex-1 h-0.5 bg-neutral-medium-gray self-center mx-4" aria-hidden="true" />

          <div className="ml-4 md:ml-0 md:w-full">
            <h3 className="text-lg font-semibold text-neutral-dark-text">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-text-gray">{s.desc}</p>
          </div>
        </div>

        {i < 6 && (
          <div className="hidden md:block absolute top-6 right-0 w-full" aria-hidden="true">
            <div className="h-0.5 bg-neutral-medium-gray ml-6 mr-6" />
          </div>
        )}
      </li>
    )
  }export default React.memo(WorkflowComponent)
