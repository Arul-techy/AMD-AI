import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Pic2 from '@/assets/images/pic 2.jpeg'

export default function About() {
  const headerRef = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })
  const imageRef = useScrollAnimation('opacity-100 translate-x-0', 'opacity-0 translate-x-8', { threshold: 0.1 })
  const contentRef = useScrollAnimation('opacity-100 translate-x-0', 'opacity-0 -translate-x-8', { threshold: 0.1 })

  return (
    <section id="about" className="relative py-20 md:py-32 bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="mb-12 opacity-0 translate-y-8 transition-all duration-600 cubic-bezier(0.22, 0.9, 0.3, 1)">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-secondary/10 rounded-full mb-6 border border-blue-secondary/30">
            <span className="w-2 h-2 bg-blue-secondary rounded-full" />
            <span className="font-body text-xs font-semibold text-blue-primary uppercase tracking-widest">About AMD.AI</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-blue-primary to-blue-secondary bg-clip-text text-transparent">
            Who We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image Container */}
          <div ref={imageRef as React.RefObject<HTMLDivElement>} className="flex justify-center lg:justify-start opacity-0 translate-x-8 transition-all duration-600 cubic-bezier(0.22, 0.9, 0.3, 1)">
            <div className="relative w-full max-w-md">
              {/* LUXE glass frame */}
              <div className="elegant-card rounded-2xl p-6 backdrop-blur-2xl border border-blue-primary/30 overflow-hidden shadow-elegant-lg">
                <img
                  src={Pic2}
                  alt="office team"
                  loading="lazy"
                  className="w-full h-auto rounded-xl object-cover relative z-10 shadow-md"
                />
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-secondary/15 to-blue-primary/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>

          {/* Right: Text Content */}
          <div ref={contentRef as React.RefObject<HTMLDivElement>} className="space-y-6 opacity-0 -translate-x-8 transition-all duration-600 cubic-bezier(0.22, 0.9, 0.3, 1)">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-neutral-dark-text">
                <span className="text-blue-primary font-semibold">AMD.AI</span> is a modern language-tech and media services company delivering high-quality translation, localization, AI data operations, and digital solutions.
              </p>

              <p className="text-lg leading-relaxed text-neutral-dark-text">
                Built on a hybrid model of <span className="text-blue-secondary font-semibold">human expertise</span> and <span className="text-blue-primary font-semibold">AI-powered workflows</span>, we provide fast, accurate, and scalable services to clients across industries including media, publishing, e-commerce, gaming, education, and AI R&amp;D.
              </p>
            </div>

            {/* Key Statement */}
            <div className="elegant-card rounded-xl p-6 border border-blue-primary/30 bg-gradient-to-br from-blue-primary/5 to-blue-secondary/5">
              <p className="text-xl font-bold text-neutral-dark-text">
                Our goal is simple: <span className="text-transparent bg-gradient-to-r from-blue-secondary to-blue-primary bg-clip-text">to make global communication seamless.</span>
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
          </div>
        </div>
      </div>
    </section>
  )
}
