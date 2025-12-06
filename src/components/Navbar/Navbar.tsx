import { useEffect, useRef, useState } from 'react'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

const SERVICES = [
  'Translation & Localization',
  'Media Services',
  'AI Training & Data Services',
  'Web & Digital Solutions',
  'BPO & Support Services',
  'Brand & Content Creation',
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const mobileRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        setServicesOpen(false)
      }
    }
    function onClick(e: MouseEvent) {
      const el = mobileRef.current
      if (!el) return
      if (open && !el.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('click', onClick)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-neutral-medium-gray">
      <nav className="bg-white/95" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
                <a href="#" className="inline-flex items-center gap-2 group">
                <span className="font-heading text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-secondary to-blue-primary bg-clip-text text-transparent group-hover:from-blue-primary group-hover:to-blue-secondary transition-all duration-300">
                  AMD
                </span>
                <span className="font-heading text-2xl font-bold text-blue-secondary group-hover:text-blue-primary transition-colors">
                  .AI
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {['Home', 'About', 'Workflow', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-sm font-medium text-neutral-dark-text hover:text-blue-secondary hover:font-semibold transition-colors duration-200 relative group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="font-body inline-flex items-center gap-1 text-sm font-medium text-neutral-dark-text hover:text-blue-secondary hover:font-semibold transition-colors duration-200"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Services
                  <FiChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-0 w-72 bg-white rounded-xl shadow-elegant-lg ring-1 ring-blue-primary/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10 border border-blue-secondary/30">
                  <ul className="py-3 px-1 space-y-1">
                    {SERVICES.map((service) => (
                      <li key={service}>
                        <a
                          href="#services"
                          className="block px-4 py-2 text-sm text-neutral-dark-text hover:text-blue-secondary hover:bg-blue-primary/5 rounded-lg transition-all duration-200"
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side: CTA + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center px-5 py-2 luxe-btn-primary text-sm"
              >
                Get Started
              </a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden inline-flex items-center justify-center p-2 text-neutral-dark-text hover:text-blue-secondary transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                {open ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div
              ref={mobileRef}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-medium-gray rounded-b-2xl animate-slideUp"
              style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
            >
              <div className="px-4 py-4 space-y-3">
                {['Home', 'About', 'Workflow', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block px-4 py-2 text-sm font-medium text-neutral-dark-text hover:text-blue-secondary hover:bg-blue-primary/5 rounded-lg transition-all duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                ))}

                  <div className="border-t border-neutral-medium-gray/20 pt-3 mt-3">
                  <button
                      className="w-full text-left px-4 py-2 text-sm font-medium text-neutral-dark-text hover:text-blue-secondary flex items-center justify-between transition-colors"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    Services
                    <FiChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {servicesOpen && (
                    <div className="pl-4 mt-2 space-y-1 border-l-2 border-blue-secondary">
                      {SERVICES.map((service) => (
                        <a
                          key={service}
                          href="#services"
                          className="block px-4 py-1.5 text-xs font-medium text-neutral-dark-text hover:text-blue-secondary transition-colors"
                          onClick={() => {
                            setOpen(false)
                            setServicesOpen(false)
                          }}
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="#contact"
                  className="block w-full px-4 py-2 mt-4 luxe-btn-primary text-center text-sm"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
