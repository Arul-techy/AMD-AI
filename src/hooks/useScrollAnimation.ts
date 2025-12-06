import { useEffect, useRef } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
}

/**
 * useScrollAnimation Hook
 *
 * Triggers animation classes when element enters viewport, removes them when leaving.
 * Animations replay every time the element enters/leaves the viewport.
 *
 * @param animationClasses - CSS classes to apply when visible (e.g., "opacity-100 translate-y-0")
 * @param initialClasses - CSS classes for initial state (e.g., "opacity-0 translate-y-8")
 * @param options - IntersectionObserver options
 * @returns ref to attach to the element you want to animate
 *
 * @example
 * const ref = useScrollAnimation('opacity-100 translate-y-0', 'opacity-0 translate-y-8')
 * return <div ref={ref}>Animated content</div>
 */
export function useScrollAnimation(
  animationClasses: string,
  initialClasses: string,
  options: UseScrollAnimationOptions = {}
) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Set initial state
    element.className = `${element.className.split(' ').filter(c => !animationClasses.split(' ').includes(c) && !initialClasses.split(' ').includes(c)).join(' ')} ${initialClasses}`.trim()

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is visible - apply animation classes
          const initialSet = new Set(initialClasses.split(' '))
          element.className = element.className
            .split(' ')
            .filter(c => !initialSet.has(c))
            .join(' ')

          animationClasses.split(' ').forEach(cls => {
            if (!element.className.includes(cls)) {
              element.className += ` ${cls}`
            }
          })
        } else {
          // Element is not visible - revert to initial state
          const animationSet = new Set(animationClasses.split(' '))
          element.className = element.className
            .split(' ')
            .filter(c => !animationSet.has(c))
            .join(' ')

          initialClasses.split(' ').forEach(cls => {
            if (!element.className.includes(cls)) {
              element.className += ` ${cls}`
            }
          })
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [animationClasses, initialClasses, options])

  return ref
}

/**
 * Variant: useScrollAnimationWithDelay
 *
 * Same as useScrollAnimation but with staggered delays for multiple elements.
 *
 * @param animationClasses - CSS classes to apply when visible
 * @param initialClasses - CSS classes for initial state
 * @param delay - delay in milliseconds
 * @param options - IntersectionObserver options
 * @returns ref to attach to the element
 *
 * @example
 * const refs = items.map((_, idx) =>
 *   useScrollAnimationWithDelay('opacity-100 translate-y-0', 'opacity-0 translate-y-8', idx * 100)
 * )
 */
export function useScrollAnimationWithDelay(
  animationClasses: string,
  initialClasses: string,
  delay: number = 0,
  options: UseScrollAnimationOptions = {}
) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.style.transitionDelay = `${delay}ms`

    // Set initial state
    element.className = `${element.className.split(' ').filter(c => !animationClasses.split(' ').includes(c) && !initialClasses.split(' ').includes(c)).join(' ')} ${initialClasses}`.trim()

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is visible - apply animation classes
          const initialSet = new Set(initialClasses.split(' '))
          element.className = element.className
            .split(' ')
            .filter(c => !initialSet.has(c))
            .join(' ')

          animationClasses.split(' ').forEach(cls => {
            if (!element.className.includes(cls)) {
              element.className += ` ${cls}`
            }
          })
        } else {
          // Element is not visible - revert to initial state
          const animationSet = new Set(animationClasses.split(' '))
          element.className = element.className
            .split(' ')
            .filter(c => !animationSet.has(c))
            .join(' ')

          initialClasses.split(' ').forEach(cls => {
            if (!element.className.includes(cls)) {
              element.className += ` ${cls}`
            }
          })
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [animationClasses, initialClasses, delay, options])

  return ref
}
