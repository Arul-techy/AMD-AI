import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const linkClass = 'font-body text-white/90 hover:text-blue-secondary hover:font-medium transition-colors duration-300'
  const iconWrap = 'inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:scale-105 transform transition duration-300'

  return (
    <footer
      ref={ref}
      aria-labelledby="footer-heading"
      className={`bg-blue-primary text-white py-20 px-6 sm:px-8 md:px-12 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">

          {/* Company Info Block */}
          <div className="flex">
              <div className="mr-4">
              <div className="w-1 h-14 bg-blue-secondary rounded" aria-hidden="true" />
            </div>
            <div>
              <h3 id="footer-heading" className="font-heading text-2xl font-bold mb-3 tracking-tighter">
                AMD.AI
              </h3>
              <p className="font-body text-sm max-w-xs leading-relaxed text-white/80 font-regular">
                A modern language-tech and media service provider delivering fast, scalable, and AI-powered solutions globally.
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <nav aria-label="Quick navigation" className="pt-1">
            <h4 className="font-heading text-lg font-bold mb-4 tracking-tight">Quick Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a className={linkClass} href="#home">Home</a>
              </li>
              <li>
                <a className={linkClass} href="#about">About</a>
              </li>
              <li>
                <a className={linkClass} href="#services">Services</a>
              </li>
              <li>
                <a className={linkClass} href="#workflow">Workflow</a>
              </li>
              <li>
                <a className={linkClass} href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Contact & Social Links */}
          <div className="">
            <h4 className="font-heading text-lg font-bold mb-4 tracking-tight">Contact</h4>

            <ul className="space-y-4 text-sm">
              <li>
                <a className="inline-flex items-center gap-3 text-white/90 hover:text-blue-secondary transition-colors duration-300" href="mailto:amdtranslation2@gmail.com" aria-label="Email AMD.AI">
                  <span className={iconWrap} aria-hidden="true">
                    {/* Mail SVG */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 6.5L12 12.5L3 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>amdtranslation2@gmail.com</span>
                </a>
              </li>

              <li>
                <a className="inline-flex items-center gap-3 text-white/90 hover:text-blue-secondary transition-colors duration-300" href="tel:7010413806" aria-label="Call AMD.AI">
                  <span className={iconWrap} aria-hidden="true">
                    {/* Phone SVG */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75c.12.72.37 1.44.74 2.12a1 1 0 0 1-.24 1L7.6 9.6a15 15 0 0 0 6.8 6.8l1.73-1.73a1 1 0 0 1 1-.24c.68.37 1.4.62 2.12.74a1 1 0 0 1 .75 1V22z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>7010413806</span>
                </a>
              </li>

              <li>
                <a className="inline-flex items-center gap-3 text-white/90 hover:text-blue-secondary transition-colors duration-300" href="https://linkedin.com/company/amdtranslation" target="_blank" rel="noopener noreferrer" aria-label="AMD.AI on LinkedIn">
                  <span className={iconWrap} aria-hidden="true">
                    {/* LinkedIn SVG */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6h-4v-12h4v2.5a4 4 0 0 1 4-2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="2" y="9" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="4" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                  <span>linkedin.com/company/amdtranslation</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
          <div className="mt-12">
          <div className="bg-white/5 py-4 px-6 rounded-sm text-center">
            <p className="text-sm text-white font-semibold">© 2025 AMD.AI — All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
