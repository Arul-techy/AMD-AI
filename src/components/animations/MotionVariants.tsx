import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface MotionCardProps {
  children: ReactNode
  delay?: number
  className?: string
  onClick?: () => void
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

export const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const scaleHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },
}

export const glassCardVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
}

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: custom * 0.08,
    },
  }),
}

export const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
}

export function MotionCard({
  children,
  delay = 0,
  className = '',
  onClick,
}: MotionCardProps) {
  return (
    <motion.div
      variants={fadeInUpVariants}
      custom={delay}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.div>
  )
}
