import { useEffect, useRef, useState } from 'react'
import FadeInSection from '../animations/FadeInSection'

export default function About() {
  const containerRef = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={containerRef} className="relative py-20 md:py-32 bg-elegant-porcelain">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-elegant-navy/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection className="mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-dynamic-bronze/10 rounded-full mb-6 border border-dynamic-bronze/30">
            <span className="w-2 h-2 bg-dynamic-bronze rounded-full" />
            <span className="text-xs font-semibold text-elegant-navy uppercase tracking-wider">About Company</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-elegant-navy to-dynamic-bronze bg-clip-text text-transparent">
            Who We Are
          </h2>
        </FadeInSection>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } transition-all duration-700`}>
          {/* Left: Image Container */}
          <FadeInSection delay={100} className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* LUXE glass frame */}
              <div className="elegant-card rounded-2xl p-6 backdrop-blur-2xl border border-elegant-navy/30 overflow-hidden shadow-elegant-lg">
                <img
                  src="https://via.placeholder.com/560x420?text=Office+Team+Tech"
                  alt="Office Team"
                  loading="lazy"
                  className="w-full rounded-xl object-cover h-auto min-h-[300px] md:min-h-[420px] relative z-10"
                />
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-dynamic-bronze/15 to-elegant-navy/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </FadeInSection>

          {/* Right: Text Content */}
          <FadeInSection delay={200} className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-elegant-navy">
                <span className="text-elegant-navy font-semibold">AMD.AI</span> is a modern language-tech and media services company delivering high-quality translation, localization, AI data operations, and digital solutions.
              </p>

              <p className="text-lg leading-relaxed text-elegant-navy">
                Built on a hybrid model of <span className="text-dynamic-bronze font-semibold">human expertise</span> and <span className="text-elegant-navy font-semibold">AI-powered workflows</span>, we provide fast, accurate, and scalable services to clients across industries including media, publishing, e-commerce, gaming, education, and AI R&amp;D.
              </p>
            </div>

            {/* Key Statement */}
            <div className="elegant-card rounded-xl p-6 border border-elegant-navy/30 bg-gradient-to-br from-elegant-navy/5 to-dynamic-bronze/5">
              <p className="text-xl font-bold text-elegant-navy">
                Our goal is simple: <span className="text-transparent bg-gradient-to-r from-dynamic-bronze to-elegant-navy bg-clip-text">to make global communication seamless.</span>
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="luxe-btn-secondary inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl"
              >
                Explore Services
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="luxe-btn-primary inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl shadow-elegant-lg hover:shadow-elegant-xl"
              >
                Get In Touch
              </button>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
