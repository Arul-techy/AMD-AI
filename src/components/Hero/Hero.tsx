import FadeInSection from '../animations/FadeInSection'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden bg-elegant-porcelain">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-elegant-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-elegant-navy/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <FadeInSection delay={100} className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-elegant-navy/5 rounded-full border border-elegant-navy/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dynamic-bronze opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-dynamic-bronze" />
                </span>
                <span className="text-xs font-semibold text-elegant-navy">Welcome to AMD.AI</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-elegant-navy via-dynamic-bronze to-elegant-navy bg-clip-text text-transparent">
                Modern Language-Tech <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2">&amp; Media Services</span>
              </h1>

              <p className="text-lg sm:text-xl text-elegant-navy max-w-2xl leading-relaxed">
                Delivering fast, accurate, and AI-powered digital solutions for global enterprises with premium elegance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#services"
                className="luxe-btn-primary inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Our Services
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="luxe-btn-secondary inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </FadeInSection>

          {/* Right: Hero Image/Visual */}
          <FadeInSection delay={200} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg group">
              {/* LUXE glass container */}
              <div className="elegant-card rounded-2xl p-8 backdrop-blur-2xl border border-elegant-navy/30 relative overflow-hidden shadow-elegant-lg">
                {/* Inner shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-elegant-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Image */}
                <img
                  src="https://via.placeholder.com/720x480?text=Tech+Illustration"
                  alt="AI Technology Illustration"
                  loading="lazy"
                  className="w-full h-auto rounded-lg object-cover min-h-[300px] md:min-h-[450px] relative z-10"
                />
              </div>

              {/* Decorative glowing elements */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-dynamic-bronze/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-elegant-navy/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

              {/* Floating badge */}
              <div className="absolute top-8 right-8 bg-elegant-navy/5 rounded-lg p-4 backdrop-blur-xl border border-elegant-navy/30 z-20 shadow-elegant-md">
                <p className="text-sm font-semibold text-elegant-navy">120fps Ready</p>
                <p className="text-xs text-elegant-navy/70">Optimized Performance</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
