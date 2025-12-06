import React, { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import {
  FiGlobe,
  FiVideo,
  FiCpu,
  FiMonitor,
  FiHeadphones,
  FiEdit3,
  FiX,
  FiArrowRight,
} from 'react-icons/fi'

type Service = {
  id: string
  title: string
  short: string
  full: string
  examples?: string[]
  Icon: React.ComponentType<any>
}

const SERVICES: Service[] = [
  {
    id: 'translation',
    title: 'Translation & Localization',
    short:
      'Multi-domain translation, website/apps localization, manga/game localization, SFX, typesetting, LQA, and multilingual SEO.',
    full:
      'End-to-end translation and localization services across domains. We handle text, multimedia, in-game strings, UI, and SEO to ensure culturally accurate and market-ready content.',
    examples: ['Website localization', 'Game dialogue & UI', 'Multilingual SEO audits'],
    Icon: FiGlobe,
  },
  {
    id: 'media',
    title: 'Media Services',
    short:
      'Subtitling, closed captioning (CC/SDH), voice-over, dubbing, audio mixing, transcription, and formatting.',
    full:
      'Full-spectrum media localization including precise subtitling, captioning for accessibility, professional voice-over and dubbing, and final audio engineering for broadcast-ready output.',
    examples: ['Subtitles & CC', 'Voice-over & dubbing', 'Audio mixing for streaming'],
    Icon: FiVideo,
  },
  {
    id: 'ai',
    title: 'AI Training & Data Services',
    short:
      'Annotation, NER tagging, LLM evaluation, prompt testing, RLHF, dataset creation, and quality assurance.',
    full:
      'High-quality data pipelines and annotation services tailored for ML/AI teams, including dataset creation, labeling, evaluation, and iterative quality checks for robust models.',
    examples: ['NER tagging', 'LLM evaluation & RLHF', 'Prompt testing & datasets'],
    Icon: FiCpu,
  },
  {
    id: 'web',
    title: 'Web & Digital Solutions',
    short: 'Web development, WordPress/Webflow sites, landing pages, and technical SEO.',
    full:
      'From marketing landing pages to full CMS-driven sites, we build performant web experiences and optimize them for discoverability and conversion.',
    examples: ['WordPress & Webflow builds', 'Landing page funnels', 'Technical SEO audits'],
    Icon: FiMonitor,
  },
  {
    id: 'bpo',
    title: 'BPO & Support Services',
    short: 'Chat, email, and voice support; lead management; data entry; virtual assistance.',
    full:
      'Scalable business process outsourcing with trained multilingual agents, CRM integration, and SLA-driven support to maintain customer satisfaction and operational continuity.',
    examples: ['Multilingual chat support', 'Lead qualification', 'Virtual assistant services'],
    Icon: FiHeadphones,
  },
  {
    id: 'brand',
    title: 'Brand & Content Creation',
    short: 'Blogs, social media content, creative copywriting, posters, and marketing materials.',
    full:
      'Creative content and branding services that amplify messaging across channels — from long-form content to bite-sized social posts and campaign assets.',
    examples: ['Social content calendars', 'Campaign copy & creatives', 'Blog/article production'],
    Icon: FiEdit3,
  },
]

function ServicesComponent() {
  const [modalService, setModalService] = useState<Service | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const headerRef = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })

  // Modal: handle ESC key and lock scroll
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setModalService(null)
    }
    if (modalService) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
      // focus close button when modal opens
      setTimeout(() => closeBtnRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [modalService])

  return (
    <section id="services" className="relative py-20 md:py-32 bg-white">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="mb-16 text-center opacity-0 translate-y-8 transition-all duration-600 cubic-bezier(0.22, 0.9, 0.3, 1)">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-blue-primary to-blue-secondary bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="font-body text-lg text-neutral-text-gray max-w-2xl mx-auto font-regular">
            Comprehensive solutions tailored to your business needs, powered by expertise and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ul className="contents">
            {SERVICES.map((s, idx) => (
              <ServiceCard key={s.id} service={s} idx={idx} onModalOpen={setModalService} />
            ))}
          </ul>
        </div>

        {/* Modal */}
        {modalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-neutral-dark-text/40 backdrop-blur-sm"
              onClick={() => setModalService(null)}
              aria-hidden="true"
            />

            {/* Modal Content */}
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`modal-${modalService.id}-title`}
              id={`modal-${modalService.id}`}
              className="relative z-50 max-w-2xl w-full animate-slideUp"
            >
              <div className="bg-white rounded-2xl p-8 border border-blue-primary/30 shadow-elegant-xl">
                {/* Close Button */}
                <button
                  ref={closeBtnRef}
                  onClick={() => setModalService(null)}
                  aria-label="Close dialog"
                  className="absolute top-6 right-6 p-2 rounded-lg bg-blue-primary/5 text-blue-primary hover:text-blue-secondary hover:bg-blue-primary/10 transition-all"
                >
                  <FiX className="w-5 h-5" />
                </button>

                {/* Content */}
                <div>
                  <h3
                    id={`modal-${modalService.id}-title`}
                    className="text-2xl font-bold text-neutral-dark-text mb-4"
                  >
                    {modalService.title}
                  </h3>
                  <p className="text-neutral-text-gray leading-relaxed mb-6">
                    {modalService.full}
                  </p>

                  {modalService.examples && (
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-neutral-dark-text mb-3">
                        Example Use Cases
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {modalService.examples.map((ex) => (
                          <div
                            key={ex}
                            className="bg-blue-primary/5 rounded-lg p-3 text-sm text-neutral-dark-text border border-blue-primary/30"
                          >
                            ✓ {ex}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => setModalService(null)}
                      className="luxe-btn-secondary px-6 py-2 rounded-lg text-sm"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        setModalService(null)
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="luxe-btn-primary inline-flex items-center gap-2 px-6 py-2 rounded-lg text-sm"
                    >
                      Contact Us
                      <FiArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// Separate component for each service card
interface ServiceCardProps {
  service: Service
  idx: number
  onModalOpen: (service: Service) => void
}

function ServiceCard({ service: s, idx, onModalOpen }: ServiceCardProps) {
  const cardRef = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', {
    threshold: 0.12,
  })

  return (
    <li
      ref={cardRef as React.RefObject<HTMLLIElement>}
      className={`elegant-card group relative overflow-hidden transform transition-all duration-500 will-change-transform opacity-0 translate-y-8 ${
        idx % 2 === 0 ? 'bg-white' : 'bg-neutral-off-white'
      }`}
      style={{ transitionDelay: `${idx * 50}ms` }}
    >
      {/* Icon container */}
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-blue-secondary/10 flex items-center justify-center text-blue-secondary shadow-elegant-sm group-hover:shadow-elegant-md transition-shadow">
            <s.Icon className="w-7 h-7" aria-hidden="true" />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-neutral-dark-text group-hover:text-blue-secondary transition-colors">
            {s.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-text-gray leading-relaxed mb-6">
        {s.short}
      </p>

      {/* Learn More Button */}
      <button
        onClick={() => onModalOpen(s)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-secondary/10 border border-blue-secondary/40 text-blue-secondary font-semibold hover:bg-blue-secondary/20 hover:border-blue-secondary/60 transition-all duration-300 group/btn"
        aria-controls={`modal-${s.id}`}
      >
        Learn More
        <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/0 to-blue-secondary/0 group-hover:from-blue-primary/5 group-hover:to-blue-secondary/5 transition-all duration-500 pointer-events-none" />
    </li>
  )
}

export default React.memo(ServicesComponent)
