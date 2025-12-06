import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Pic1 from '@/assets/images/pic 1.jpeg'

export default function Hero() {
  const textRef = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })
  const imageRef = useScrollAnimation('opacity-100 translate-x-0', 'opacity-0 translate-x-8', { threshold: 0.1 })

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div ref={textRef as React.RefObject<HTMLDivElement>} className="space-y-8 opacity-0 translate-y-8 transition-all duration-600 cubic-bezier(0.22, 0.9, 0.3, 1)">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-primary/5 rounded-full border border-blue-primary/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-secondary" />
                </span>
                <span className="text-xs font-semibold text-blue-primary font-body tracking-wide">Welcome to AMD.AI</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight letter-spacing-tight bg-gradient-to-r from-blue-primary via-blue-secondary to-blue-primary bg-clip-text text-transparent">
                Modern Language-Tech <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2">&amp; Media Services</span>
              </h1>

              <p className="font-body text-lg sm:text-xl text-neutral-text-gray max-w-2xl leading-relaxed font-regular">
                Expert language, AI data, and digital services trusted by global businesses. Quality-driven, fast turnaround, scalable solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#services"
                className="luxe-btn-primary inline-flex items-center justify-center px-6 py-3 font-body font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden tracking-wide"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Our Services
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="luxe-btn-secondary inline-flex items-center justify-center px-6 py-3 font-body font-semibold rounded-xl transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right: Hero Image/Visual */}
          <div ref={imageRef as React.RefObject<HTMLDivElement>} className="relative flex justify-center lg:justify-end opacity-0 translate-x-8 transition-all duration-600 cubic-bezier(0.22, 0.9, 0.3, 1)">
            <div className="relative w-full max-w-lg group">
              {/* LUXE glass container */}
              <div className="elegant-card rounded-2xl p-8 backdrop-blur-2xl border border-blue-primary/30 relative overflow-hidden shadow-elegant-lg">
                {/* Inner shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Image */}
                <img
                  src={Pic1}
                  alt="AI Technology and illustration"
                  loading="lazy"
                  className="w-full h-auto rounded-xl object-cover relative z-10 shadow-md"
                />
              </div>

              {/* Decorative glowing elements */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-secondary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

              {/* Floating badge */}
              <div className="absolute top-8 right-8 bg-blue-primary/5 rounded-lg p-4 backdrop-blur-xl border border-blue-primary/30 z-20 shadow-elegant-md">
                <p className="font-heading text-sm font-semibold text-blue-primary">120fps Ready</p>
                <p className="font-body text-xs text-blue-primary/70">Optimized Performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
