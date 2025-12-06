/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // TECH & CORPORATE FONT SYSTEM
        heading: ['Sora', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Custom font sizes for typography system
        'h1-desktop': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'h1-tablet': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'h1-mobile': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'h2-desktop': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2-tablet': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3-desktop': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3-tablet': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3-mobile': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-base': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.5', fontWeight: '400' }],
        'button': ['1rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '0.01em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tight: '-0.03em',
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.05em',
      },
      colors: {
        // TRUST & RELIABILITY BLUE PALETTE
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c2d6b',
        },
        // Core Blues
        'blue-primary': '#1E3A8A',    // Deep Professional Blue
        'blue-secondary': '#3B82F6', // Bright Blue
        'blue-accent': '#60A5FA',    // Light Blue
        'blue-dark': '#1E40AF',      // Rich Navy
        
        // Neutrals
        'neutral-white': '#FFFFFF',
        'neutral-off-white': '#F8FAFC',
        'neutral-light-gray': '#F1F5F9',
        'neutral-medium-gray': '#E2E8F0',
        'neutral-text-gray': '#64748B',
        'neutral-dark-text': '#0F172A',
        
        // Status Colors
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#06B6D4',
        
        // Legacy aliases for backwards compatibility
        elegant: {
          navy: '#1E3A8A',
          teal: '#60A5FA',
          lavender: '#E0E7FF',
          porcelain: '#FFFFFF',
        },
        dynamic: {
          black: '#0F172A',
          bronze: '#3B82F6',
          sand: '#F8FAFC',
          warmgray: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '40px',
      },
      boxShadow: {
        // Elevation system (Blue-based shadows)
        'elevation-1': '0 2px 4px rgba(30, 58, 138, 0.06)',
        'elevation-2': '0 4px 12px rgba(30, 58, 138, 0.1)',
        'elevation-3': '0 8px 24px rgba(30, 58, 138, 0.12)',
        'elevation-4': '0 12px 40px rgba(30, 58, 138, 0.15)',
        'elevation-5': '0 20px 60px rgba(30, 58, 138, 0.2)',
        // Elegant shadows (legacy - mapped to blue)
        'elegant-sm': '0 2px 8px rgba(30, 58, 138, 0.08)',
        'elegant-md': '0 4px 16px rgba(30, 58, 138, 0.12)',
        'elegant-lg': '0 8px 24px rgba(30, 58, 138, 0.15)',
        'elegant-xl': '0 16px 40px rgba(30, 58, 138, 0.2)',
        // Glass effects
        glass: '0 8px 32px rgba(30, 58, 138, 0.08)',
        'glass-lg': '0 20px 60px rgba(30, 58, 138, 0.2)',
        'glass-sm': '0 4px 15px rgba(30, 58, 138, 0.06)',
        'glass-xl': '0 30px 80px rgba(30, 58, 138, 0.3)',
      },
      borderColor: {
        glass: 'rgba(59, 130, 246, 0.15)',
        'glass-light': 'rgba(226, 232, 240, 0.5)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
        shimmer: 'shimmer 3s infinite',
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(14, 165, 233, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.8)' },
        },
      }
    },
  },
  plugins: [],
}
