import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { fadeInUpVariants, glassCardVariants } from '../animations/MotionVariants'
import Pic3 from '@/assets/images/pic 3.jpeg'

export default function Contact() {
  const headerRef = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })
  const infoRef = useScrollAnimation('opacity-100 translate-x-0', 'opacity-0 -translate-x-8', { threshold: 0.1 })
  const visualRef = useScrollAnimation('opacity-100 translate-x-0', 'opacity-0 translate-x-8', { threshold: 0.1 })
  const ctaRef = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8', { threshold: 0.1 })

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
    <section id="contact" className="relative py-20 md:py-32 bg-neutral-off-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="mb-16 text-center max-w-2xl mx-auto opacity-0 translate-y-8 transition-all duration-600 cubic-bezier(0.22, 0.9, 0.3, 1)">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-blue-primary to-blue-secondary bg-clip-text text-transparent mb-4">
            Connect with AMD.AI
          </h2>
          <p className="font-body text-lg text-neutral-text-gray font-regular">
            Reach out to discuss your project. We're available 24/7 to support your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Info */}
          <div ref={infoRef as React.RefObject<HTMLDivElement>} className="order-2 lg:order-1 opacity-0 -translate-x-8 transition-all duration-600 cubic-bezier(0.22, 0.9, 0.3, 1)">
            <motion.div
              variants={glassCardVariants}
              initial="rest"
              whileHover="hover"
              className="elegant-card rounded-2xl p-8 backdrop-blur-2xl border border-blue-primary/30 bg-white shadow-elegant-lg"
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
                      className="flex items-center gap-4 p-4 bg-blue-primary/5 rounded-xl border border-blue-primary/30 hover:border-blue-secondary/50 transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0">
                        <motion.div
                          className="w-12 h-12 rounded-lg bg-blue-secondary/10 flex items-center justify-center text-blue-secondary"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6" aria-hidden="true" />
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-blue-primary uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-neutral-dark-text group-hover:text-blue-secondary transition-colors">
                          {item.value}
                        </p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                      >
                        <FiArrowRight className="w-5 h-5 text-blue-secondary" />
                      </motion.div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Location Info */}
              <div className="bg-blue-primary/5 rounded-lg p-4 border border-blue-primary/20">
                <p className="text-sm font-semibold text-blue-primary mb-2">📍 Location</p>
                <p className="text-sm text-neutral-dark-text">
                  Coimbatore, Tamil Nadu, India
                </p>
                <p className="text-xs text-neutral-text-gray mt-2">
                  Providing services globally — 24/7 remote-first team.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <div ref={visualRef as React.RefObject<HTMLDivElement>} className="order-1 lg:order-2 opacity-0 translate-x-8 transition-all duration-600 cubic-bezier(0.22, 0.9, 0.3, 1)">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative"
            >
              <div className="elegant-card rounded-2xl p-6 backdrop-blur-2xl border border-blue-primary/30 overflow-hidden shadow-elegant-lg">
                <img
                  src={Pic3}
                  alt="team collaboration"
                  loading="lazy"
                  className="w-full h-auto rounded-xl object-cover relative z-10 shadow-md"
                />
              </div>

              {/* Floating decorative element */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-white/95 rounded-full border border-blue-primary/30 backdrop-blur-md flex items-center justify-center shadow-elegant-md"
                style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-secondary">24/7</p>
                  <p className="text-xs text-blue-primary mt-1">Support</p>
                </div>
              </motion.div>

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-secondary/15 to-blue-primary/10 rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef as React.RefObject<HTMLDivElement>} className="mt-16 text-center opacity-0 translate-y-8 transition-all duration-600 cubic-bezier(0.22, 0.9, 0.3, 1)">
          <p className="text-neutral-dark-text mb-6 font-semibold">Ready to work together?</p>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="luxe-btn-primary inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Project Today
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
