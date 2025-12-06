import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number // milliseconds
  threshold?: number
  once?: boolean
}

export default function FadeInSection({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
  once = true,
}: Props): JSX.Element {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once && el) observer.unobserve(el)
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  const base = 'fade-in-section will-change-transform'

  return (
    <div
      ref={ref}
      className={`${base} ${isVisible ? 'is-visible' : 'is-hidden'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
