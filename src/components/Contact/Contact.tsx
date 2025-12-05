import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import FadeInSection from '../animations/FadeInSection'
import { fadeInUpVariants, glassCardVariants } from '../animations/MotionVariants'

export default function Contact() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fade-in')
        })
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const contactItems = [
    {
      icon: FiPhone,
      label: 'Phone',
      value: '7010413806',
      href: 'tel:7010413806',
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'amdtranslation2@gmail.com',
      href: 'mailto:amdtranslation2@gmail.com',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'AMD Translation',
      href: 'https://linkedin.com/company/amdtranslation',
      external: true,
    },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 bg-dynamic-sand">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-dynamic-bronze/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-elegant-navy/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInSection className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-elegant-navy to-dynamic-bronze bg-clip-text text-transparent mb-4">
            Let's Connect With Us!
          </h2>
          <p className="text-lg text-elegant-navy">
            We're here to support your business 24/7. Reach out via phone, email, or social media.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Info */}
          <FadeInSection delay={100} className="order-2 lg:order-1">
            <motion.div
              variants={glassCardVariants}
              initial="rest"
              whileHover="hover"
              className="elegant-card rounded-2xl p-8 backdrop-blur-2xl border border-elegant-navy/30 bg-elegant-porcelain shadow-elegant-lg"
            >
              {/* Contact Items */}
              <div className="space-y-4 mb-8">
                {contactItems.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      variants={fadeInUpVariants}
                      custom={idx}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 p-4 bg-elegant-navy/5 rounded-xl border border-elegant-navy/30 hover:border-dynamic-bronze/50 transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0">
                        <motion.div
                          className="w-12 h-12 rounded-lg bg-dynamic-bronze/10 flex items-center justify-center text-dynamic-bronze"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6" aria-hidden="true" />
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-elegant-navy uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-elegant-navy group-hover:text-dynamic-bronze transition-colors">
                          {item.value}
                        </p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                      >
                        <FiArrowRight className="w-5 h-5 text-dynamic-bronze" />
                      </motion.div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Location Info */}
              <div className="bg-elegant-navy/5 rounded-lg p-4 border border-elegant-navy/20">
                <p className="text-sm font-semibold text-elegant-navy mb-2">📍 Location</p>
                <p className="text-sm text-elegant-navy">
                  Coimbatore, Tamil Nadu, India
                </p>
                <p className="text-xs text-elegant-navy/70 mt-2">
                  Providing services globally — 24/7 remote-first team.
                </p>
              </div>
            </motion.div>
          </FadeInSection>

          {/* Visual */}
          <FadeInSection delay={200} className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative"
            >
              <div className="elegant-card rounded-2xl p-6 backdrop-blur-2xl border border-elegant-navy/30 overflow-hidden shadow-elegant-lg">
                <img
                  src="https://via.placeholder.com/600x400?text=Team+Collaboration"
                  alt="Team collaboration"
                  loading="lazy"
                  className="w-full rounded-xl object-cover h-auto min-h-[300px] md:min-h-[420px] relative z-10"
                />
              </div>

              {/* Floating decorative element */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-elegant-porcelain rounded-full border border-elegant-navy/30 backdrop-blur-md flex items-center justify-center shadow-elegant-md"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-dynamic-bronze">24/7</p>
                  <p className="text-xs text-elegant-navy mt-1">Support</p>
                </div>
              </motion.div>

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-dynamic-bronze/15 to-elegant-navy/10 rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </FadeInSection>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="mt-16 text-center"
        >
          <p className="text-elegant-navy mb-6 font-semibold">Ready to work together?</p>
          <motion.button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="luxe-btn-primary inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-300"
          >
            Start Your Project Today
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <FiArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
