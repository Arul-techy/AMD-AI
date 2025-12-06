// Removed unused React import
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

type Metric = {
  id: string
  number: string
  title: string
  subtitle: string
}

const METRICS: Metric[] = [
  {
    id: 'clients',
    number: 'Growing',
    title: 'Client Base',
    subtitle: 'Trusted by businesses across multiple industries and regions.',
  },
  {
    id: 'years',
    number: 'Strong',
    title: 'Industry Expertise',
    subtitle: 'Experienced team delivering reliable solutions since inception.',
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
    number: 'Skilled',
    title: 'Professional Team',
    subtitle: 'Expert linguists, annotators, and specialists across domains.',
  },
  {
    id: 'industries',
    number: 'Multi-Industry',
    title: 'Sector Expertise',
    subtitle: 'IT, E-commerce, Media, Legal, Finance, Manufacturing, and more.',
  },
]

<<<<<<< HEAD
function ExperienceComponent(): JSX.Element {
=======
<<<<<<< HEAD
function ExperienceComponent() {
  const ref = useRef<HTMLLIElement | null>(null)
  const [visible, setVisible] = useState<Record<string, boolean>>({})
=======
function ExperienceComponent() {
>>>>>>> fa6124d (new update)
  const headerRef = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })

  function MetricItem({ m }: { m: Metric }) {
    const ref = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })
    return (
      <li
        ref={ref}
        key={m.id}
        data-id={m.id}
        className={`relative bg-white rounded-2xl overflow-hidden transform transition-all duration-600 will-change-transform opacity-0 translate-y-8`}
        style={{ boxShadow: '0 6px 18px rgba(30, 58, 138, 0.04)' }}
      >
        <div className="h-1 bg-blue-primary w-full" />

        <div className="p-6 md:p-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-secondary flex items-center justify-center text-white transform transition-transform duration-200 hover:scale-105">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <div className="type-stat-lg text-2xl sm:text-3xl md:text-4xl text-neutral-dark-text">{m.number}</div>
            <div className="h4-style mt-2 text-base sm:text-lg text-neutral-dark-text">{m.title}</div>
            <p className="text-body-xs mt-2 text-neutral-text-gray">{m.subtitle}</p>
          </div>
        </div>
      </li>
    )
  }

  return (
    <section id="experience" className="py-12 md:py-20" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8" ref={headerRef}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-dark-text">Why Partners Trust AMD.AI</h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-text-gray">Proven capabilities backed by consistent delivery and expertise.</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {METRICS.map((m) => (
            <MetricItem key={m.id} m={m} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default React.memo(ExperienceComponent)
