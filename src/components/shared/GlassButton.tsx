import { ReactNode } from 'react'

interface GlassButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export default function GlassButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
}: GlassButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const variantClasses = {
    primary: 'glass-btn bg-blue-500/30 border-blue-400/50 text-white hover:bg-blue-500/40 hover:border-blue-300/70',
    secondary: 'glass-btn bg-slate-400/20 border-slate-300/50 text-slate-900 hover:bg-slate-400/30',
    outline: 'glass-btn bg-transparent border-white/50 text-white hover:bg-white/10',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-xl
        font-semibold
        transition-all
        duration-300
        ease-out
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  )
}
